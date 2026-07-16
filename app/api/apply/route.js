import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import JobApplication from "@/models/JobApplication";
import { Readable } from "stream";
import { v2 as cloudinary } from "cloudinary";
import { sanitizePhone, validatePhone } from "@/lib/phoneValidation";

export async function POST(req) {
    try {
        await connectDB();
        const data = await req.json();
        
        const { name, email, city, phone, applyFor, experience, message, resumeUrl, recaptchaToken } = data;

        if (!name || !email || !city || !phone || !applyFor || !experience || !resumeUrl) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Validate phone number
        const phoneResult = validatePhone(phone);
        if (!phoneResult.valid) {
            return NextResponse.json({ error: phoneResult.message }, { status: 400 });
        }

        // Verify reCAPTCHA token
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (secretKey) {
            if (!recaptchaToken) {
                return NextResponse.json({ error: "Security verification failed. Token missing." }, { status: 400 });
            }
            const params = new URLSearchParams();
            params.append("secret", secretKey);
            params.append("response", recaptchaToken);

            const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: params.toString()
            });
            const recaptchaData = await recaptchaRes.json();

            if (!recaptchaData.success) {
                return NextResponse.json({ 
                    error: "Security verification failed. Please check the 'I am not a robot' box."
                }, { status: 400 });
            }
        }

        const newApplication = new JobApplication({
            name,
            email,
            city,
            phone: sanitizePhone(phone),
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
                    <p><strong>Phone:</strong> ${sanitizePhone(phone)}</p>
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
