import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import CrmContent from "@/components/crm/CrmContent";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";

export const metadata = {
    title: "Best CRM Software Development Company In India | RecentureSoft",
    description: "RecentureSoft is a leading CRM Development Company in India. We build powerful CRM software solutions to enhance customer relationships, marketing, and sales.",
    alternates: { canonical: "/crm" }
};

export default async function CrmPage() {
    const isActive = await checkPageStatus("/crm");
    if (!isActive) return notFound();
    await connectDB();
    const pageData = await WebPage.findOne({ path: "/crm" }).lean();
    const dynamicData = pageData?.content || {};
    const heroData = dynamicData.crmHero || {};

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "name": "Best CRM Software Development Company In India | RecentureSoft", "description": "RecentureSoft is a leading CRM Development Company in India. We build powerful CRM software solutions to enhance customer relationships, marketing, and sales.", "url": "https://recenturesoft.com/crm" }) }} />
            <Navbar />
            <PageHero
                badge={heroData.badge || "CRM Development"}
                title={heroData.title || "Customer Relationship"}
                highlight={heroData.highlight || "Management"}
                banner={heroData.bannerImage || "/Banner/crm_banner.webp"}
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                {heroData.bannerOpacity !== undefined && (
                    <div className="absolute inset-0 bg-[#020617] z-10" style={{ opacity: parseInt(heroData.bannerOpacity) / 100 }} />
                )}
                {/* Desktop Image */}
                <Image src={heroData.bannerImage || "/Banner/crm_banner.webp"} alt="crm Banner" fill className="hidden md:block object-cover object-center z-0" priority sizes="(max-width: 768px) 0vw, 100vw" />
                {/* Mobile Image */}
                <Image src={heroData.bannerMobile || heroData.bannerImage || "/Banner/crm_mobile.webp"} alt="crm Mobile Banner" fill className="block md:hidden object-cover object-bottom z-0" priority sizes="(max-width: 768px) 100vw, 0vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <CrmContent dynamicData={dynamicData} />

                </div>
            </section>

            <SolutionContactForm serviceName="CRM Development" />


            <PageFAQSection pageName="crm" />

            <FutureFooter />
        </main>
    );
}
