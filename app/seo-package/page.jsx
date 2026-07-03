import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import SeoPackageContent from "@/components/seo-package/SeoPackageContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";

export const metadata = {
    title: "SEO Packages In India | RecentureSoft",
    description: "Explore our comprehensive SEO packages including Bronze, Silver, Gold, and Platinum. Get custom Website Audit, On-Page Optimization, and Content Marketing.",
    alternates: { canonical: "/seo-package" }
};

export default async function SeoPackagePage() {
    const isActive = await checkPageStatus("/seo-package");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"SEO Packages In India | RecentureSoft","description":"Explore our comprehensive SEO packages including Bronze, Silver, Gold, and Platinum. Get custom Website Audit, On-Page Optimization, and Content Marketing.","url":"https://recenturesoft.com/seo-package"}) }} />
            <Navbar />
            <PageHero
                badge="Pricing & Plans"
                title="SEO Package"
                highlight=""
                description="Choose the perfect SEO package for your business. We offer highly tailored, transparent, and result-driven strategies designed to maximize your digital growth."
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/seo_package.webp" alt="seo-package Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-10 md:py-16 px-4 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto">
                    <SeoPackageContent />
                </div>
            </section>

            <SolutionContactForm serviceName="SEO Package" />


            <FutureFooter />
        </main>
    );
}
