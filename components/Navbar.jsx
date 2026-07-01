import { connectDB } from "@/lib/mongodb";
import SiteSettings from "@/models/SiteSettings";
import WebPage from "@/models/WebPage";
import NavbarClient from "./NavbarClient";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

export default async function Navbar() {
    noStore();
    let logoUrl = "/Logo.png";
    let inactivePaths = [];
    try {
        await connectDB();
        
        // Fetch global settings for logo
        const settings = await SiteSettings.findOne({ type: "global" }).lean();
        if (settings?.logoUrl) {
            logoUrl = settings.logoUrl;
        }

        // Fetch all web pages to determine active/inactive status
        const pages = await WebPage.find({}, { path: 1, status: 1 }).lean();
        
        // Build list of inactive paths
        inactivePaths = pages.filter(p => p.status === "inactive").map(p => p.path);

        // Check if current path is inactive, if so, trigger a 404
        const headersList = await headers();
        const currentPath = headersList.get("x-pathname") || "/";
        
        // We match exact path or trailing slash variations
        const isCurrentInactive = inactivePaths.some(p => p === currentPath || p === currentPath + "/" || p + "/" === currentPath);
        if (isCurrentInactive) {
            notFound(); // This will render the global 404 page
        }

    } catch (error) {
        console.error("Failed to fetch site settings or page statuses for navbar", error);
    }

    return <NavbarClient logoUrl={logoUrl} inactivePaths={inactivePaths} />;
}
