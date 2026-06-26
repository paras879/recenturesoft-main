import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        await connectDB();
        const services = await Service.find({ status: true }).sort({ createdAt: 1 }).lean();

        const data = services.map((s) => ({
            _id: s._id.toString(),
            title: s.title,
            slug: s.slug,
            shortDescription: s.shortDescription,
            description: s.description,
            images: s.images || [],
            image: s.image || "",
            icon: s.icon || "",
            features: s.features || [],
            category: s.category,
            colSpan: s.colSpan,
            color: s.color,
            accent: s.accent,
            scene: s.scene,
            status: s.status,
        }));

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Error fetching services:", error);
        return NextResponse.json({ success: false, error: "Failed to fetch services." }, { status: 500 });
    }
}
