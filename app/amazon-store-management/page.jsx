import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import AmazonStoreContent from "@/components/amazon-store-management/AmazonStoreContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";

export const metadata = {
    title: "Best Amazon Store Management Company In India | RecentureSoft",
    description: "Expert Amazon store management and FBA setup services in India. Improve revenue, product listings, and discoverability with our top-class solutions.",
    alternates: { canonical: "/amazon-store-management" }
};

export default async function AmazonStorePage() {
    const isActive = await checkPageStatus("/amazon-store-management");
    if (!isActive) return notFound();
    await connectDB();
    const pageData = await WebPage.findOne({ path: "/amazon-store-management" }).lean();
    const dynamicData = pageData?.content || {};
    const heroData = dynamicData.amazonHero || {};


    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Best Amazon Store Management Company In India | RecentureSoft","description":"Expert Amazon store management and FBA setup services in India. Improve revenue, product listings, and discoverability with our top-class solutions.","url":"https://recenturesoft.com/amazon-store-management"}) }} />
            <Navbar />
            <PageHero
                badge={heroData.badge || "Store Management"}
                title={heroData.title || "Amazon Store"}
                highlight={heroData.highlight || "Solutions"}
                description={heroData.description || "Establish a powerful presence on the world's biggest online marketplace with our end-to-end Amazon store and seller account management services."}
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src={heroData.bannerImage || "/Banner/amzon.webp"} alt="amazon-store-management Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <AmazonStoreContent dynamicData={dynamicData} />
                </div>
            </section>

            <SolutionContactForm serviceName="Amazon Store Management" />


            <PageFAQSection pageName="amazon-store-management" />



            <FutureFooter />
        </main>
    );
}
