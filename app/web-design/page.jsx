import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import WebDesignContent from "@/components/web-design/WebDesignContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

export const metadata = {
    title: "Best Web Design Company In India | RecentureSoft",
    description: "RecentureSoft is the leading web design company in India, offering stunning, user-friendly, and AI-powered responsive web designs for your brand.",
    alternates: { canonical: "/web-design" }
};

export default async function WebDesignPage() {
    const isActive = await checkPageStatus("/web-design");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Best Web Design Company In India | RecentureSoft","description":"RecentureSoft is the leading web design company in India, offering stunning, user-friendly, and AI-powered responsive web designs for your brand.","url":"https://recenturesoft.com/web-design"}) }} />
            <Navbar />
            <PageHero
                badge="UI/UX & Design"
                title="Next-Gen Web"
                highlight="Design"
                description="We create stunning, AI-enhanced, and user-friendly web designs that offer an all-immersive digital brand experience for your customers."
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/webdesign.webp" alt="web-design Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-5xl mx-auto">
                    <WebDesignContent />
                </div>
            </section>

            <SolutionContactForm serviceName="Web Design" />


            <PageFAQSection pageName="web-design" />



            <FutureFooter />
        </main>
    );
}
