import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import Image from "next/image";
import SeoPackageContent from "@/components/seo-package/SeoPackageContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

const defaultMetadata = {
    title: "SEO Packages In India | RecentureSoft",
    description: "Explore our comprehensive SEO packages including Bronze, Silver, Gold, and Platinum. Get custom Website Audit, On-Page Optimization, and Content Marketing.",
    alternates: { canonical: "/seo-package" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/seo-package" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function SeoPackagePage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/seo-package" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/seo-package");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"SEO Packages In India | RecentureSoft","description":"Explore our comprehensive SEO packages including Bronze, Silver, Gold, and Platinum. Get custom Website Audit, On-Page Optimization, and Content Marketing.","url":"https://recenturesoft.com/seo-package"}) }} />
            <Navbar />
            <ContentHero
                title={pageData?.content?.heroTitle || "SEO Package"}
                highlight={pageData?.content?.heroHighlight || ""}
                description={pageData?.content?.heroDescription || "Choose the perfect SEO package for your business. We offer highly tailored, transparent, and result-driven strategies designed to maximize your digital growth."}
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image
                    src={pageData?.content?.heroImage || "/Banner/seo_package.webp"}
                    alt={pageData?.content?.heroImageAlt || "seo-package Banner"}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </ContentHero>

            <section className="py-10 md:py-16 px-4 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto">
                    <SeoPackageContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="SEO Package" />


            <PageFAQSection pageName="seo-package" />



            <FutureFooter />
        </main>
    );
}
