import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import IphoneAppsContent from "@/components/iphone-apps-development/IphoneAppsContent";
import PremiumFooter from "@/components/PremiumFooter";

export const metadata = {
    title: "iPhone App Development Company In India | RecentureSoft",
    description: "RecentureSoft is a leading iOS and iPhone app development company in India offering robust, enterprise-grade, and engaging mobile applications.",
    alternates: { canonical: "/iphone-apps-development" }
};

export default function IphoneAppsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"iPhone App Development Company In India | RecentureSoft","description":"RecentureSoft is a leading iOS and iPhone app development company in India offering robust, enterprise-grade, and engaging mobile applications.","url":"https://recenturesoft.com/iphone-apps-development"}) }} />
            <Navbar />
            <PageHero
                badge="Mobile Development"
                title="iPhone App Development Company"
                highlight="In India"
                description=""
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/iphone.webp" alt="iphone-apps-development Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <IphoneAppsContent />
                </div>
            </section>

            <PremiumFooter />
        </main>
    );
}
