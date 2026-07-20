import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import Image from "next/image";
import EbayStoreContent from "@/components/ebay-store-management/EbayStoreContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";

export const metadata = {
    title: "Best eBay Store Management Company In India | RecentureSoft",
    description: "Expert eBay store management solutions including design, product listing, marketing, and inventory management tailored for your business.",
    alternates: { canonical: "/ebay-store-management" }
};

export default async function EbayStorePage() {
    const isActive = await checkPageStatus("/ebay-store-management");
    if (!isActive) return notFound();
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/ebay-store-management" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
    const cmsBannerImage = pageData?.content?.bannerConfig?.imageUrl;
    const dynamicData = pageData?.content || {};
    const heroData = dynamicData.ebayHero || {};


    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Best eBay Store Management Company In India | RecentureSoft","description":"Expert eBay store management solutions including design, product listing, marketing, and inventory management tailored for your business.","url":"https://recenturesoft.com/ebay-store-management"}) }} />
            <Navbar />
            <ContentHero
                title={heroData.title || "eBay Store"}
                highlight={heroData.highlight || "Solutions"}
                description={heroData.description || "Maximize your sales, optimize product listings, and streamline operations with our comprehensive eBay store management services."}
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src={cmsBannerImage || heroData.bannerImage || "/Banner/ebay.webp"} alt="ebay-store-management Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </ContentHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <EbayStoreContent dynamicData={dynamicData} />
                </div>
            </section>

            <SolutionContactForm serviceName="eBay Store Management" />


            <PageFAQSection pageName="ebay-store-management" />



            <FutureFooter />
        </main>
    );
}
