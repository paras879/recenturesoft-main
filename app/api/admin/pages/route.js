import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

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

const EDITABLE_PAGES = [
    {
        path: "/social-networking",
        slug: "social-networking",
        name: "Social Networking Apps",
        description: "Social Media Optimization (SMO) service page",
    },
];

export async function GET(request) {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path");
    const slug = searchParams.get("slug");

    await connectDB();

    if (path || slug) {
        const pagePath = path || EDITABLE_PAGES.find(p => p.slug === slug)?.path;
        if (!pagePath) {
            return NextResponse.json({ error: "Invalid page" }, { status: 400 });
        }
        const page = await WebPage.findOne({ path: pagePath }).lean();
        return NextResponse.json({
            page: page ? JSON.parse(JSON.stringify(page)) : null,
        });
    }

    const paths = EDITABLE_PAGES.map(p => p.path);
    const dbPages = await WebPage.find({ path: { $in: paths } }).lean();
    const pageMap = {};
    dbPages.forEach(p => { pageMap[p.path] = JSON.parse(JSON.stringify(p)); });

    const result = EDITABLE_PAGES.map(info => {
        const db = pageMap[info.path];
        return {
            ...info,
            seoTitle: db?.seoTitle || "",
            seoDescription: db?.seoDescription || "",
            status: db?.status || "active",
            content: db?.content || {},
            updatedAt: db?.updatedAt || null,
        };
    });

    return NextResponse.json({ pages: result });
}

export async function POST(request) {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { slug, seoTitle, seoDescription, status, content } = body;

    const pageInfo = EDITABLE_PAGES.find(p => p.slug === slug);
    if (!pageInfo) {
        return NextResponse.json({ error: "Invalid page slug" }, { status: 400 });
    }

    await connectDB();

    const updated = await WebPage.findOneAndUpdate(
        { path: pageInfo.path },
        {
            $set: {
                name: pageInfo.name,
                path: pageInfo.path,
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
