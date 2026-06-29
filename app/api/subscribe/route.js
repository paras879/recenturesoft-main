import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Subscriber from "@/models/Subscriber";

export async function POST(req) {
    try {
        await connectDB();
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        // Check if already subscribed
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return NextResponse.json({ error: "You are already subscribed to our newsletter!" }, { status: 400 });
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
