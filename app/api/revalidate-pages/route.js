import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

/**
 * POST /api/revalidate-pages
 * Called by the Admin Panel whenever a page status is toggled.
 * Invalidates navbar/footer cache and also the exact page route cache.
 *
 * Secured with REVALIDATION_SECRET to prevent abuse.
 */
export async function POST(req) {
    try {
        const secret = process.env.REVALIDATION_SECRET;
        const body = await req.json().catch(() => ({}));
        const pagePath = typeof body?.path === "string" ? body.path.trim() : "";

        if (secret) {
            const authHeader = req.headers.get("x-revalidate-secret");
            if (authHeader !== secret) {
                return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
            }
        }

        revalidateTag("inactive-pages");

        if (pagePath) {
            revalidatePath(pagePath);
        }

        return NextResponse.json({
            success: true,
            revalidated: true,
            path: pagePath || null,
            now: Date.now(),
        });
    } catch (err) {
        console.error("[revalidate-pages] Error:", err);
        return NextResponse.json({ success: false, message: "Revalidation failed" }, { status: 500 });
    }
}
