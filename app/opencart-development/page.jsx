import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import Image from "next/image";
import OpenCartContent from "@/components/opencart-development/OpenCartContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";

export const metadata = {
    title: "Best OpenCart Development Company In India | RecentureSoft",
    description: "RecentureSoft is the leading OpenCart development company in India, offering robust, scalable, and feature-packed eCommerce solutions tailored to your needs.",
    alternates: { canonical: "/opencart-development" }
};

export default async function OpenCartPage() {
    const isActive = await checkPageStatus("/opencart-development");
    if (!isActive) return notFound();
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/opencart-development" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
    const cmsBannerImage = pageData?.content?.bannerConfig?.imageUrl;
    const dynamicData = pageData?.content || {};
    const heroData = dynamicData.opencartHero || {};


    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Best OpenCart Development Company In India | RecentureSoft","description":"RecentureSoft is the leading OpenCart development company in India, offering robust, scalable, and feature-packed eCommerce solutions tailored to your needs.","url":"https://recenturesoft.com/opencart-development"}) }} />
            <Navbar />
            <ContentHero bannerConfig={pageData?.content?.bannerConfig}
                title={heroData.title || "OpenCart"}
                highlight={heroData.highlight || "Development"}
                description={heroData.description || "Build highly customizable, feature-rich, and scalable online stores with our expert OpenCart development services tailored for your business."}
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src={cmsBannerImage || heroData.bannerImage || "/Banner/opencart.png"} alt="opencart-development banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </ContentHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <OpenCartContent dynamicData={dynamicData} />
                </div>
            </section>

            <SolutionContactForm serviceName="OpenCart Development" />


            <PageFAQSection pageName="opencart-development" />



            <FutureFooter />
        </main>
    );
}
