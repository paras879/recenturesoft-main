import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import MagentoContent from "@/components/magento-development/MagentoContent";
import PremiumFooter from "@/components/PremiumFooter";

export const metadata = {
    title: "Best Magento Development Company In India | RecentureSoft",
    description: "RecentureSoft is a top Magento development company in India, offering custom, scalable, and smooth-operating eCommerce applications and solutions.",
};

export default function MagentoPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <Navbar />
            <PageHero
                badge="eCommerce Solutions"
                title="Magento"
                highlight="Development"
                description="Transform your platform into a visually rich and fully-functional eCommerce hub with our custom Magento development services."
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/magento.webp" alt="magento-development Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <MagentoContent />
                </div>
            </section>

            <PremiumFooter />
        </main>
    );
}
