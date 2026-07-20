import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import LegalPageEditor from "@/components/admin/LegalPageEditor";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const VALID_SLUGS = ["privacy-policy", "terms", "cookies"];

const slugToPath = {
    "privacy-policy": "/privacy-policy",
    "terms": "/terms",
    "cookies": "/cookies",
};

const slugToLabel = {
    "privacy-policy": "Privacy Policy",
    "terms": "Terms of Service",
    "cookies": "Cookies Policy",
};

export async function generateMetadata({ params }) {
    const { slug } = await params;
    if (!VALID_SLUGS.includes(slug)) return {};
    return {
        title: `Edit ${slugToLabel[slug]} | Admin Panel`,
    };
}

export default async function LegalEditPage({ params }) {
    const { slug } = await params;

    if (!VALID_SLUGS.includes(slug)) {
        notFound();
    }

    const path = slugToPath[slug];

    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    return (
        <LegalPageEditor pageData={pageData} slug={slug} />
    );
}
