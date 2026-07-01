import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import SeoContent from "@/components/seo-service/SeoContent";
import FutureFooter from "@/components/FutureFooter";

export const metadata = {
    title: "SEO Company In India | RecentureSoft",
    description: "RecentureSoft is a leading SEO company in India providing breakthrough E-commerce SEO solutions, on-page & off-page optimization, and high-quality traffic generation.",
    alternates: { canonical: "/seo-service" }
};

export default function SeoPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"SEO Company In India | RecentureSoft","description":"RecentureSoft is a leading SEO company in India providing breakthrough E-commerce SEO solutions, on-page & off-page optimization, and high-quality traffic generation.","url":"https://recenturesoft.com/seo-service"}) }} />
            <Navbar />
            <PageHero
                badge="Digital Marketing"
                title="SEO Company in India"
                highlight=""
                description=""
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/seo_service.webp" alt="seo-service Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <SeoContent />
                </div>
            </section>

            <FutureFooter />
        </main>
    );
}
