import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import ContentHero from "@/components/ContentHero";
import CustomDevContent from "@/components/custom-development/CustomDevContent";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";

const defaultMetadata = {
    title: "Custom Development Company | RecentureSoft",
    description: "Build custom, high-performance applications with RecentureSoft.",
    alternates: { canonical: "/custom-development" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/custom-development" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}

export default async function CustomDevelopmentPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/custom-development" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/custom-development");
    if (!isActive) return notFound();

    const c = pageData?.content || {};

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Custom Development Company | RecentureSoft","description":"Build custom, high-performance applications with RecentureSoft.","url":"https://recenturesoft.com/custom-development"}) }} />
            <Navbar />
            
            <ContentHero bannerConfig={pageData?.content?.bannerConfig}
                title={c.hero?.title || "Custom"}
                highlight={c.hero?.highlight || "Development"}
                description={c.hero?.description || "Build customized, scalable, and high-performance applications that empower your team to achieve business goals."}
                bannerImage={c.bannerConfig?.imageUrl || c.hero?.bannerImage}
                highlightClass="text-blue-500 dark:text-blue-400"
            />

            <section className="py-8 md:py-12 lg:py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <CustomDevContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="Custom Development" />

            <PageFAQSection pageName="custom-development" />

            <FutureFooter />
        </main>
    );
}
