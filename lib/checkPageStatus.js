import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";

export async function checkPageStatus(path) {

    try {
        await connectDB();
        const page = await WebPage.findOne({ path: path });
        console.log(`[checkPageStatus] path: ${path}, page found:`, page ? page.status : 'null');
        // If the page doesn't exist in the CMS, default to true (allow access)
        if (!page) return true;
        // If it exists, return whether its status is active
        return page.status === 'active';
    } catch (e) {
        console.error("Error checking page status:", e);
        // If there's a DB error, default to true to avoid breaking the site
        return true;
    }
}
