import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import Image from "next/image";
import WebDesignContent from "@/components/web-design/WebDesignContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

const defaultMetadata = {
    title: "Best Web Design Company In India | RecentureSoft",
    description: "RecentureSoft is the leading web design company in India, offering stunning, user-friendly, and AI-powered responsive web designs for your brand.",
    alternates: { canonical: "/web-design" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/web-design" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function WebDesignPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/web-design" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
    const cmsBannerImage = pageData?.content?.bannerConfig?.imageUrl;

    const isActive = await checkPageStatus("/web-design");
    if (!isActive) return notFound();

    const content = pageData?.content || {};
    const hero = content.hero || {};
    const heroTitle = hero.title || "Next-Gen Web";
    const heroHighlight = hero.highlight || "Design";
    const heroDescription = hero.description || "We create stunning, AI-enhanced, and user-friendly web designs that offer an all-immersive digital brand experience for your customers.";
    const bannerImage = cmsBannerImage || hero.bannerImage || "/Banner/webdesign.webp";
    const ctaText = hero.ctaText || "";
    const ctaLink = hero.ctaLink || "";

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Best Web Design Company In India | RecentureSoft","description":"RecentureSoft is the leading web design company in India, offering stunning, user-friendly, and AI-powered responsive web designs for your brand.","url":"https://recenturesoft.com/web-design"}) }} />
            <Navbar />
            <ContentHero bannerConfig={pageData?.content?.bannerConfig}
                title={heroTitle}
                highlight={heroHighlight}
                description={heroDescription}
                highlightClass="text-blue-500 dark:text-blue-400"
                ctaText={ctaText}
                ctaLink={ctaLink}
            >
                <Image src={cmsBannerImage || bannerImage} alt="web-design Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </ContentHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-5xl mx-auto">
                    <WebDesignContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="Web Design" />


            <PageFAQSection pageName="web-design" />



            <FutureFooter />
        </main>
    );
}
