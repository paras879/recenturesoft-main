import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import CrmContent from "@/components/crm/CrmContent";
import CrmFaq from "@/components/crm/CrmFaq";
import SolutionContactForm from "@/components/shared/SolutionContactForm";

export const metadata = {
    title: "Best CRM Software Development Company In India | RecentureSoft",
    description: "RecentureSoft is a leading CRM Development Company in India. We build powerful CRM software solutions to enhance customer relationships, marketing, and sales.",
    alternates: { canonical: "/crm" }
};

export default async function CrmPage() {
    const isActive = await checkPageStatus("/crm");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Best CRM Software Development Company In India | RecentureSoft","description":"RecentureSoft is a leading CRM Development Company in India. We build powerful CRM software solutions to enhance customer relationships, marketing, and sales.","url":"https://recenturesoft.com/crm"}) }} />
            <Navbar />
            <PageHero
                badge="CRM Development"
                title="Customer Relationship"
                highlight="Management"
                description="Empowering businesses with custom, data-driven CRM software solutions to optimize operations, track leads, and build robust customer relationships."
                banner="/crm-banner.webp"
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/CRM.webp" alt="crm Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <CrmContent />
                    <CrmFaq />
                </div>
            </section>

            <SolutionContactForm serviceName="CRM Development" />


            <FutureFooter />
        </main>
    );
}
