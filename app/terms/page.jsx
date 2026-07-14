import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import TermsContent from "@/components/terms/TermsContent";
import FutureFooter from "@/components/FutureFooter";

const defaultMetadata = {
    title: "Terms of Service | RecentureSoft",
    description: "Our terms of service.",
    alternates: { canonical: "/terms" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/terms" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function TermsPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/terms" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/terms");
    if (!isActive) return notFound();

    return (
        <>
            <main className="min-h-screen bg-white dark:bg-[#0a0a0a] overflow-x-clip selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-100">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Terms of Service | RecentureSoft","description":"Our terms of service.","url":"https://recenturesoft.com/terms"}) }} />
                <Navbar />
                {/* Background Gradients */}
                <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent pointer-events-none -z-10" />

                <div className="pt-32 pb-16">
                    <TermsContent dynamicData={pageData} />
                </div>
            </main>
            <FutureFooter />
        </>
    );
}
