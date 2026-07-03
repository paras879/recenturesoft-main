import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import EbayStoreContent from "@/components/ebay-store-management/EbayStoreContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";

export const metadata = {
    title: "Best eBay Store Management Company In India | RecentureSoft",
    description: "Expert eBay store management solutions including design, product listing, marketing, and inventory management tailored for your business.",
    alternates: { canonical: "/ebay-store-management" }
};

export default async function EbayStorePage() {
    const isActive = await checkPageStatus("/ebay-store-management");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Best eBay Store Management Company In India | RecentureSoft","description":"Expert eBay store management solutions including design, product listing, marketing, and inventory management tailored for your business.","url":"https://recenturesoft.com/ebay-store-management"}) }} />
            <Navbar />
            <PageHero
                badge="Store Management"
                title="eBay Store"
                highlight="Solutions"
                description="Simplify your workload and establish a powerful online presence with our expert, end-to-end eBay store management services."
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/ebay.webp" alt="ebay-store-management Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <EbayStoreContent />
                </div>
            </section>

            <SolutionContactForm serviceName="eBay Store Management" />


            <FutureFooter />
        </main>
    );
}
