import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import AiSeoContent from "@/components/ai-seo/AiSeoContent";
import FutureFooter from "@/components/FutureFooter";
import Image from "next/image";

export const metadata = {
    title: "AI SEO Services In India | RecentureSoft",
    description: "Boost your search rankings with advanced AI SEO services from RecentureSoft. We use Artificial Intelligence to optimize your website and maximize your ROI.",
    alternates: { canonical: "/ai-seo" }
};

export default async function AiSeoPage() {
    const isActive = await checkPageStatus("/ai-seo");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"AI SEO Services In India | RecentureSoft","description":"Boost your search rankings with advanced AI SEO services from RecentureSoft. We use Artificial Intelligence to optimize your website and maximize your ROI.","url":"https://recenturesoft.com/ai-seo"}) }} />
            <Navbar />
            <PageHero
                badge="Digital Marketing"
                title="AI SEO Services in India"
                highlight=""
                description=""
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                </div>
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <AiSeoContent />
                </div>
            </section>

            <FutureFooter />
        </main>
    );
}
