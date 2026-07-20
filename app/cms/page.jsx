import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import Image from "next/image";
import CmsContent from "@/components/cms/CmsContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";

export const metadata = {
    title: "Best CMS Software Development Company In India | RecentureSoft",
    description: "RecentureSoft offers top-tier custom CMS software development services in India to manage digital content and streamline business processes.",
    alternates: { canonical: "/cms" }
};

export default async function CmsPage() {
    const isActive = await checkPageStatus("/cms");
    if (!isActive) return notFound();
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/cms" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
    const cmsBannerImage = pageData?.content?.bannerConfig?.imageUrl;
    const dynamicData = pageData?.content || {};
    const heroData = dynamicData.cmsHero || {};
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Best CMS Software Development Company In India | RecentureSoft","description":"RecentureSoft offers top-tier custom CMS software development services in India to manage digital content and streamline business processes.","url":"https://recenturesoft.com/cms"}) }} />
            <Navbar />
            <ContentHero
                title={heroData.title || "Content Management"}
                highlight={heroData.highlight || "System"}
                description={heroData.description || "Empowering businesses with custom, robust CMS software solutions to easily create, manage, and publish digital content."}
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                {heroData.bannerOpacity !== undefined && (
                    <div className="absolute inset-0 bg-[#020617] z-10" style={{ opacity: parseInt(heroData.bannerOpacity) / 100 }} />
                )}
                <Image src={cmsBannerImage || heroData.bannerImage || "/Banner/CMS.webp"} alt="cms Banner" fill className="object-cover object-center z-0" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </ContentHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <CmsContent dynamicData={dynamicData} />

                </div>
            </section>

            <SolutionContactForm serviceName="CMS Development" />


            <PageFAQSection pageName="cms" />



            <FutureFooter />
        </main>
    );
}
