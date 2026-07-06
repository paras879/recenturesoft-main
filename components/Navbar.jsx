import { connectDB } from "@/lib/mongodb";
import SiteSettings from "@/models/SiteSettings";
import WebPage from "@/models/WebPage";
import NavbarClient from "./NavbarClient";
import { unstable_noStore as noStore } from "next/cache";

// Cache tagged "inactive-pages" — cleared instantly when admin toggles a page
async function getNavbarData() {
    noStore();

    let logoUrl = "/Logo.png";
    let dynamicPages = [];
    let inactivePaths = [];
    try {
        await connectDB();
        const settings = await SiteSettings.findOne({ type: "global" }).lean();
        if (settings?.logoUrl) logoUrl = settings.logoUrl;

        const pages = await WebPage.find({}, { name: 1, path: 1, status: 1, category: 1, subcategory: 1 }).lean();
        inactivePaths = pages.filter(p => p.status === "inactive").map(p => p.path);
        dynamicPages = pages
            .filter(p => p.status === "active" && p.category)
            .map(p => ({
                name: p.name,
                path: p.path,
                category: p.category,
                subcategory: p.subcategory
            }));
    } catch (error) {
        console.error("Failed to fetch navbar data:", error);
    }
    return { logoUrl, inactivePaths, dynamicPages };
}

export default async function Navbar() {
    const { logoUrl, inactivePaths, dynamicPages } = await getNavbarData();
    return <NavbarClient logoUrl={logoUrl} inactivePaths={inactivePaths} dynamicPages={dynamicPages} />;
}
