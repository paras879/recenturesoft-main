import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import OpenCartContent from "@/components/opencart-development/OpenCartContent";
import PremiumFooter from "@/components/PremiumFooter";

export const metadata = {
    title: "Best OpenCart Development Company In India | RecentureSoft",
    description: "RecentureSoft is the leading OpenCart development company in India, offering robust, scalable, and feature-packed eCommerce solutions tailored to your needs.",
};

export default function OpenCartPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <Navbar />
            <PageHero
                badge="eCommerce Solutions"
                title="OpenCart"
                highlight="Development"
                description="Stay ahead of the competition with our powerful, feature-packed, and robust OpenCart eCommerce development solutions tailored to your business."
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/oprnchart.webp" alt="opencart-development Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <OpenCartContent />
                </div>
            </section>

            <PremiumFooter />
        </main>
    );
}
