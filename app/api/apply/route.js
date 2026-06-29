import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import JobApplication from "@/models/JobApplication";
import { Readable } from "stream";
import { v2 as cloudinary } from "cloudinary";

export async function POST(req) {
    try {
        await connectDB();
        const data = await req.json();
        
        const { name, email, city, phone, applyFor, experience, message, resumeUrl } = data;

        if (!name || !email || !city || !phone || !applyFor || !experience || !resumeUrl) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const newApplication = new JobApplication({
            name,
            email,
            city,
            phone,
            applyFor,
            experience,
            message,
            resumeUrl,
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
