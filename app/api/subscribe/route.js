import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";

export async function POST(req) {
    try {
        await connectDB();
        const { email, recaptchaToken } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // Check if already subscribed
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return NextResponse.json({ error: "You are already subscribed to our newsletter!" }, { status: 400 });
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

        // Save new subscriber
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        return NextResponse.json({ success: true, message: "Subscribed successfully!" }, { status: 201 });
    } catch (error) {
        console.error("Subscription error:", error);
        return NextResponse.json({ error: "Failed to subscribe. Please try again later." }, { status: 500 });
    }
}
