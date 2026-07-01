import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import OpenCartContent from "@/components/opencart-development/OpenCartContent";
import FutureFooter from "@/components/FutureFooter";

export const metadata = {
    title: "Best OpenCart Development Company In India | RecentureSoft",
    description: "RecentureSoft is the leading OpenCart development company in India, offering robust, scalable, and feature-packed eCommerce solutions tailored to your needs.",
    alternates: { canonical: "/opencart-development" }
};

export default async function OpenCartPage() {
    const isActive = await checkPageStatus("/opencart-development");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Best OpenCart Development Company In India | RecentureSoft","description":"RecentureSoft is the leading OpenCart development company in India, offering robust, scalable, and feature-packed eCommerce solutions tailored to your needs.","url":"https://recenturesoft.com/opencart-development"}) }} />
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

            <FutureFooter />
        </main>
    );
}
