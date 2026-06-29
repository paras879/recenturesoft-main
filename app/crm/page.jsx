import Navbar from "@/components/Navbar";
import PremiumFooter from "@/components/PremiumFooter";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import CrmContent from "@/components/crm/CrmContent";
import CrmFaq from "@/components/crm/CrmFaq";

export const metadata = {
    title: "Best CRM Software Development Company In India | RecentureSoft",
    description: "RecentureSoft is a leading CRM Development Company in India. We build powerful CRM software solutions to enhance customer relationships, marketing, and sales.",
};

export default function CrmPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
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

            <PremiumFooter />
        </main>
    );
}
