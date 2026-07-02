import { connectDB } from "@/lib/mongodb";
import SiteSettings from "@/models/SiteSettings";
import WebPage from "@/models/WebPage";
import NavbarClient from "./NavbarClient";
import { notFound } from "next/navigation";

export default async function Navbar() {
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



    } catch (error) {
        console.error("Failed to fetch site settings or page statuses for navbar", error);
    }

    return <NavbarClient logoUrl={logoUrl} inactivePaths={inactivePaths} />;
}
