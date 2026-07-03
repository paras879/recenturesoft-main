import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

/**
 * POST /api/revalidate-pages
 * Called by the Admin Panel whenever a page status is toggled.
 * Invalidates the "inactive-pages" cache tag so that FutureFooter
 * and Navbar pick up the new disabled/enabled state immediately.
 *
 * Secured with REVALIDATION_SECRET to prevent abuse.
 */
export async function POST(req) {
    try {
        const secret = process.env.REVALIDATION_SECRET;

        // If a secret is configured, validate the request
        if (secret) {
            const authHeader = req.headers.get("x-revalidate-secret");
            if (authHeader !== secret) {
                return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
            }
        }

        // Revalidate the cache tag used by FutureFooter & Navbar (unstable_cache tags)
        // Single-arg form works with unstable_cache's tags option
        revalidateTag("inactive-pages");

        return NextResponse.json({
            success: true,
            revalidated: true,
            now: Date.now(),
        });
    } catch (err) {
        console.error("[revalidate-pages] Error:", err);
        return NextResponse.json({ success: false, message: "Revalidation failed" }, { status: 500 });
    }
}
