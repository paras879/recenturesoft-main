import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import PageHero from "@/components/PageHero";
import NextJsContent from "@/components/next-js/NextJsContent";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

export const metadata = {
    title: "Next.js Development Company | Enterprise Next.js Solutions | RecentureSoft",
    description: "Hire top Next.js developers at RecentureSoft. We build lightning-fast, highly scalable, and SEO-optimized enterprise applications using Next.js and React.",
    alternates: { canonical: "/next-js" }
};

export default async function NextJsPage() {
    const isActive = await checkPageStatus("/next-js");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-slate-900/30 dark:selection:bg-white/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Next.js Development Company | Enterprise Next.js Solutions | RecentureSoft","description":"Hire top Next.js developers at RecentureSoft. We build lightning-fast, highly scalable, and SEO-optimized enterprise applications using Next.js and React.","url":"https://recenturesoft.com/next-js"}) }} />
            <Navbar />
            
            <PageHero
                badge="Web Development"
                title="Next.js App"
                highlight="Development"
                description="Harness the power of React Server Components, SSR, and Edge computing to build the fastest, most scalable web applications on the internet."
                highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-black dark:from-white dark:to-slate-300"
            />

            <section className="py-8 md:py-12 lg:py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <NextJsContent />
                </div>
            </section>

            <SolutionContactForm serviceName="Next.js Development" />


            <PageFAQSection pageName="next-js" />



            <FutureFooter />
        </main>
    );
}
