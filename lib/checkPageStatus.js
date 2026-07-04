import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { unstable_noStore as noStore } from "next/cache";

export async function checkPageStatus(path) {

    try {
        noStore();
        await connectDB();
        const page = await WebPage.findOne({ path: path });

        // If the page doesn't exist in the CMS, default to true (allow access)
        if (!page) return true;
        // If it exists, return whether its status is active
        return page.status === 'active';
    } catch (e) {
        // Next.js uses internal errors to signal dynamic rendering bailout. We must rethrow them.
        if (e && e.digest === 'DYNAMIC_SERVER_USAGE') {
            throw e;
        }
        
        console.error("Error checking page status:", e);
        // If there's a DB error, default to true to avoid breaking the site
        return true;
    }
}
