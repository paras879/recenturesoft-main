import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import SalesforceContent from "@/components/salesforce/SalesforceContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

export const metadata = {
    title: "Best Salesforce Integration Company In India | RecentureSoft",
    description: "RecentureSoft offers comprehensive Salesforce integration and consulting services in India to boost sales, efficiency, and customer relationships.",
    alternates: { canonical: "/salesforce" }
};

export default async function SalesforcePage() {
    const isActive = await checkPageStatus("/salesforce");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Best Salesforce Integration Company In India | RecentureSoft","description":"RecentureSoft offers comprehensive Salesforce integration and consulting services in India to boost sales, efficiency, and customer relationships.","url":"https://recenturesoft.com/salesforce"}) }} />
            <Navbar />
            <PageHero
                badge="Salesforce Integration"
                title="Salesforce"
                highlight="Solutions"
                description="Leverage the world's leading CRM platform to transform your sales, marketing, and customer service strategy with our full-cycle consulting."
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/salesforce.webp" alt="salesforce Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <SalesforceContent />
                </div>
            </section>

            <SolutionContactForm serviceName="Salesforce Development" />


            <PageFAQSection pageName="salesforce" />



            <FutureFooter />
        </main>
    );
}
