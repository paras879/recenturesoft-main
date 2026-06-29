import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import JobApplication from "@/models/JobApplication";
import { Readable } from "stream";
import { v2 as cloudinary } from "cloudinary";

export async function POST(req) {
    try {
        await connectDB();
        const data = await req.json();
        
        const { name, email, city, phone, applyFor, experience, message, resumeBase64, resumeName } = data;

        if (!name || !email || !city || !phone || !applyFor || !experience || !resumeBase64 || !resumeName) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Extract original file extension
        const fileExt = resumeName.includes('.') ? resumeName.split('.').pop() : 'pdf';
        
        // Convert Base64 back to binary Buffer
        const base64Data = resumeBase64.split(';base64,').pop();
        const buffer = Buffer.from(base64Data, 'base64');
        
        // Upload to Cloudinary using stream to avoid corruption
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });

        const uploadResult = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: "recenturesoft/resumes", resource_type: "raw" },
                (error, result) => {
                    if (error) {
                        console.error("Cloudinary Error:", error);
                        reject(error);
                    }
                    else resolve(result);
                }
            );
            
            const readableStream = new Readable();
            readableStream.push(buffer);
            readableStream.push(null);
            readableStream.pipe(uploadStream);
        });

        const savedUrl = uploadResult.secure_url;

        const newApplication = new JobApplication({
            name,
            email,
            city,
            phone,
            applyFor,
            experience,
            message,
            resumeUrl: savedUrl,
        });

        await newApplication.save();

        // Send Email Notification to Admin
        try {
            const nodemailer = (await import("nodemailer")).default;
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT || 587,
                secure: false, 
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            // Construct full URL for email
            const fullResumeUrl = `http://localhost:3000${savedUrl}`;

            const mailOptions = {
                from: `"RecentureSoft Notifications" <${process.env.SMTP_USER}>`,
                to: process.env.SMTP_USER, // Send to Admin
                subject: `New Job Application: ${name} for ${applyFor}`,
                html: `
                    <h2>New Job Application Received</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>City:</strong> ${city}</p>
                    <p><strong>Applied For:</strong> ${applyFor}</p>
                    <p><strong>Experience:</strong> ${experience}</p>
                    <p><strong>Message:</strong> ${message || "N/A"}</p>
                    <p><strong>Resume Link:</strong> <a href="${fullResumeUrl}">${fullResumeUrl}</a></p>
                `,
            };

            await transporter.sendMail(mailOptions);
        } catch (emailError) {
            console.error("Error sending email notification:", emailError);
            // We don't fail the whole request if email fails
        }

        return NextResponse.json({ success: true, message: "Application submitted successfully!" });
    } catch (error) {
        console.error("Error submitting application:", error);
        return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
    }
}
