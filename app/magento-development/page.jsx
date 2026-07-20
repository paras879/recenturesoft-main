import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import Image from "next/image";
import MagentoContent from "@/components/magento-development/MagentoContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";

export const metadata = {
    title: "Best Magento Development Company In India | RecentureSoft",
    description: "RecentureSoft is a top Magento development company in India, offering custom, scalable, and smooth-operating eCommerce applications and solutions.",
    alternates: { canonical: "/magento-development" }
};

export default async function MagentoPage() {
    const isActive = await checkPageStatus("/magento-development");
    if (!isActive) return notFound();
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/magento-development" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
    const cmsBannerImage = pageData?.content?.bannerConfig?.imageUrl;
    const dynamicData = pageData?.content || {};
    const heroData = dynamicData.magentoHero || {};


    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Best Magento Development Company In India | RecentureSoft","description":"RecentureSoft is a top Magento development company in India, offering custom, scalable, and smooth-operating eCommerce applications and solutions.","url":"https://recenturesoft.com/magento-development"}) }} />
            <Navbar />
            <ContentHero bannerConfig={pageData?.content?.bannerConfig}
                title={heroData.title || "Magento"}
                highlight={heroData.highlight || "Development"}
                description={heroData.description || "Empower your eCommerce business with highly scalable, secure, and custom Magento development solutions built for enterprise growth."}
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src={cmsBannerImage || heroData.bannerImage || "/Banner/magnto-dev-min.webp"} alt="magento-development Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </ContentHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <MagentoContent dynamicData={dynamicData} />
                </div>
            </section>

            <SolutionContactForm serviceName="Magento Development" />


            <PageFAQSection pageName="magento-development" />



            <FutureFooter />
        </main>
    );
}
