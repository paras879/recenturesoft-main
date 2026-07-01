import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import CmsContent from "@/components/cms/CmsContent";
import CmsFaq from "@/components/cms/CmsFaq";
import FutureFooter from "@/components/FutureFooter";

export const metadata = {
    title: "Best CMS Software Development Company In India | RecentureSoft",
    description: "RecentureSoft offers top-tier custom CMS software development services in India to manage digital content and streamline business processes.",
    alternates: { canonical: "/cms" }
};

export default function CmsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Best CMS Software Development Company In India | RecentureSoft","description":"RecentureSoft offers top-tier custom CMS software development services in India to manage digital content and streamline business processes.","url":"https://recenturesoft.com/cms"}) }} />
            <Navbar />
            <PageHero
                badge="CMS Development"
                title="Content Management"
                highlight="System"
                description="Empowering businesses with custom, robust CMS software solutions to easily create, manage, and publish digital content."
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/CMS.webp" alt="cms Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <CmsContent />
                    <CmsFaq />
                </div>
            </section>

            <FutureFooter />
        </main>
    );
}
