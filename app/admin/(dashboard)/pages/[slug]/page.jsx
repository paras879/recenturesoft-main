import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import PageEditor from "@/components/admin/PageEditor";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

const VALID_SLUGS = ["social-networking"];

const slugToLabel = {
    "social-networking": "Social Networking Apps",
};

export async function generateMetadata({ params }) {
    const { slug } = await params;
    if (!VALID_SLUGS.includes(slug)) return {};
    return {
        title: `Edit ${slugToLabel[slug]} | Admin Panel`,
    };
}

export default async function EditPage({ params }) {
    const { slug } = await params;

    if (!VALID_SLUGS.includes(slug)) {
        notFound();
    }

    const slugToPath = {
        "social-networking": "/social-networking",
    };
    const path = slugToPath[slug];

    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    return (
        <PageEditor pageData={pageData} slug={slug} />
    );
}
