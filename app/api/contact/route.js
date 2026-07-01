import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();
        const { name, email, phone, subject, message, recaptchaToken } = body;

        // Validation of required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill in all required fields (name, email, message).",
                },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please enter a valid email address.",
                },
                { status: 400 }
            );
        }

        // Verify reCAPTCHA token if a secret key is configured
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (secretKey) {
            if (!recaptchaToken) {
                return NextResponse.json({ success: false, message: "Security verification failed. Token missing." }, { status: 400 });
            }
            const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
            const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
            const recaptchaData = await recaptchaRes.json();

            // Typically, score >= 0.5 is considered human.
            if (!recaptchaData.success || recaptchaData.score < 0.5) {
                console.warn("reCAPTCHA validation failed:", recaptchaData);
                return NextResponse.json({ 
                    success: false, 
                    message: "Security verification failed. Our systems detected suspicious activity.",
                    debugData: recaptchaData // Temporarily send back to client for debugging
                }, { status: 400 });
            }
        }

        const contact = await Contact.create({
            name,
            email,
            phone: phone || "",
            subject,
            message,
        });

        return NextResponse.json(
            {
                success: true,
                message: "Your message has been sent successfully!",
                contact,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Contact Form API Error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "An error occurred while saving your message. Please try again.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}
