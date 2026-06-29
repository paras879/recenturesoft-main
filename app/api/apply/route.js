import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import JobApplication from "@/models/JobApplication";
import fs from "fs/promises";
import path from "path";

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
        
        // Define local file path
        const fileName = `${name.replace(/\s+/g, '_')}_${Date.now()}_resume.${fileExt}`;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'resumes');
        const filePath = path.join(uploadDir, fileName);

        // Ensure directory exists and save file
        await fs.mkdir(uploadDir, { recursive: true });
        await fs.writeFile(filePath, buffer);

        const savedUrl = `/uploads/resumes/${fileName}`;

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
