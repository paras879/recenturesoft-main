import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const LEGAL_PATHS = ["/privacy-policy", "/terms", "/cookies"];

async function verifyAdmin() {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;
    if (!token) return false;
    try {
        const secret = new TextEncoder().encode(
            process.env.ADMIN_JWT_SECRET || "fallback_super_secret_recenturesoft_key_2026"
        );
        await jwtVerify(token, secret);
        return true;
    } catch {
        return false;
    }
}

export async function GET() {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const pages = await WebPage.find({ path: { $in: LEGAL_PATHS } }).lean();

    // Ensure all 3 pages are returned, with defaults if not in DB yet
    const defaults = {
        "/privacy-policy": { name: "Privacy Policy", path: "/privacy-policy", seoTitle: "Privacy Policy | RecentureSoft", seoDescription: "Our privacy policy and how we handle your data securely.", status: "active", content: {} },
        "/terms": { name: "Terms of Service", path: "/terms", seoTitle: "Terms of Service | RecentureSoft", seoDescription: "Our terms of service.", status: "active", content: {} },
        "/cookies": { name: "Cookies Policy", path: "/cookies", seoTitle: "Cookies Policy | RecentureSoft", seoDescription: "Our cookies policy and how we use them.", status: "active", content: {} },
    };

    const result = LEGAL_PATHS.map((p) => {
        const found = pages.find((pg) => pg.path === p);
        return found ? JSON.parse(JSON.stringify(found)) : defaults[p];
    });

    return NextResponse.json({ pages: result });
}

export async function POST(request) {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { path, seoTitle, seoDescription, status, content } = body;

    if (!LEGAL_PATHS.includes(path)) {
        return NextResponse.json({ error: "Invalid legal page path" }, { status: 400 });
    }

    await connectDB();

    const nameMap = {
        "/privacy-policy": "Privacy Policy",
        "/terms": "Terms of Service",
        "/cookies": "Cookies Policy",
    };

    const updated = await WebPage.findOneAndUpdate(
        { path },
        {
            $set: {
                name: nameMap[path],
                path,
                seoTitle: seoTitle || "",
                seoDescription: seoDescription || "",
                status: status || "active",
                content: content || {},
            },
        },
        { upsert: true, new: true }
    ).lean();

    return NextResponse.json({ success: true, page: JSON.parse(JSON.stringify(updated)) });
}
