import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import AiSeoContent from "@/components/ai-seo/AiSeoContent";
import FutureFooter from "@/components/FutureFooter";
import Image from "next/image";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

const defaultMetadata = {
    title: "AI SEO Services In India | RecentureSoft",
    description: "Boost your search rankings with advanced AI SEO services from RecentureSoft. We use Artificial Intelligence to optimize your website and maximize your ROI.",
    alternates: { canonical: "/ai-seo" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/ai-seo" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function AiSeoPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/ai-seo" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
    const cmsBannerImage = pageData?.content?.bannerConfig?.imageUrl;

    const isActive = await checkPageStatus("/ai-seo");
    if (!isActive) return notFound();

    const hero = pageData?.content?.hero || {};

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"AI SEO Services In India | RecentureSoft","description":"Boost your search rankings with advanced AI SEO services from RecentureSoft. We use Artificial Intelligence to optimize your website and maximize your ROI.","url":"https://recenturesoft.com/ai-seo"}) }} />
            <Navbar />
            <ContentHero bannerConfig={pageData?.content?.bannerConfig}
                title={hero.title || "AI SEO Services in India"}
                highlight={hero.highlight || ""}
                description={hero.description || ""}
                bannerImage={cmsBannerImage || hero.bannerImage || ""}
                ctaText={hero.ctaText || ""}
                ctaLink={hero.ctaLink || ""}
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                </div>
            </ContentHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <AiSeoContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="AI SEO" />


            <PageFAQSection pageName="ai-seo" />



            <FutureFooter />
        </main>
    );
}
