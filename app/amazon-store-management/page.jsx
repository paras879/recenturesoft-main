import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import AmazonStoreContent from "@/components/amazon-store-management/AmazonStoreContent";
import PremiumFooter from "@/components/PremiumFooter";

export const metadata = {
    title: "Best Amazon Store Management Company In India | RecentureSoft",
    description: "Expert Amazon store management and FBA setup services in India. Improve revenue, product listings, and discoverability with our top-class solutions.",
    alternates: { canonical: "/amazon-store-management" }
};

export default function AmazonStorePage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Best Amazon Store Management Company In India | RecentureSoft","description":"Expert Amazon store management and FBA setup services in India. Improve revenue, product listings, and discoverability with our top-class solutions.","url":"https://recenturesoft.com/amazon-store-management"}) }} />
            <Navbar />
            <PageHero
                badge="Store Management"
                title="Amazon Store"
                highlight="Solutions"
                description="Establish a powerful presence on the world's biggest online marketplace with our end-to-end Amazon store and seller account management services."
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/amzon.webp" alt="amazon-store-management Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <AmazonStoreContent />
                </div>
            </section>

            <PremiumFooter />
        </main>
    );
}
