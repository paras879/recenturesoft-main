import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { validatePhone } from "@/lib/phoneValidation";

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

        // Validate phone number (if provided) using libphonenumber-js
        if (phone) {
            try {
                const { isValidPhoneNumber } = await import("libphonenumber-js");
                if (!isValidPhoneNumber(phone)) {
                    return NextResponse.json(
                        { success: false, message: "Please enter a valid phone number for the selected country." },
                        { status: 400 }
                    );
                }
            } catch {
                const fallback = validatePhone(phone);
                if (!fallback.valid) {
                    return NextResponse.json(
                        { success: false, message: fallback.message },
                        { status: 400 }
                    );
                }
            }
        }

        // Verify reCAPTCHA token if a secret key is configured
        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (secretKey) {
            if (!recaptchaToken) {
                return NextResponse.json({ success: false, message: "Security verification failed. Token missing." }, { status: 400 });
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

            // v2 check just needs success === true
            if (!recaptchaData.success) {
                console.warn("reCAPTCHA validation failed:", recaptchaData);
                return NextResponse.json({ 
                    success: false, 
                    message: "Security verification failed. Please check the 'I am not a robot' box.",
                    debugData: { ...recaptchaData, secretPrefix: secretKey.substring(0, 5) }
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
