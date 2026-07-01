import { connectDB } from "@/lib/mongodb";
import SiteSettings from "@/models/SiteSettings";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
    let logoUrl = "/Logo.png";
    try {
        await connectDB();
        const settings = await SiteSettings.findOne({ type: "global" }).lean();
        if (settings?.logoUrl) {
            logoUrl = settings.logoUrl;
        }
    } catch (error) {
        console.error("Failed to fetch site settings for navbar", error);
    }

    return <NavbarClient logoUrl={logoUrl} />;
}
