import { connectDB } from "@/lib/mongodb";
import SiteSettings from "@/models/SiteSettings";
import WebPage from "@/models/WebPage";
import NavbarClient from "./NavbarClient";
import { unstable_noStore as noStore } from "next/cache";

// Cache tagged "inactive-pages" — cleared instantly when admin toggles a page
async function getNavbarData() {
    noStore();

    let logoUrl = "/Logo.png";
    let inactivePaths = [];
    try {
        await connectDB();
        const settings = await SiteSettings.findOne({ type: "global" }).lean();
        if (settings?.logoUrl) logoUrl = settings.logoUrl;

        const pages = await WebPage.find({}, { path: 1, status: 1 }).lean();
        inactivePaths = pages.filter(p => p.status === "inactive").map(p => p.path);
    } catch (error) {
        console.error("Failed to fetch navbar data:", error);
    }
    return { logoUrl, inactivePaths };
}

export default async function Navbar() {
    const { logoUrl, inactivePaths } = await getNavbarData();
    return <NavbarClient logoUrl={logoUrl} inactivePaths={inactivePaths} />;
}
