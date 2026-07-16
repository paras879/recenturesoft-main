import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import ContentHero from "@/components/ContentHero";
import ReactContent from "@/components/react/ReactContent";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";
import Script from "next/script";

const defaultMetadata = {
    title: "React.js Development Services | RecentureSoft",
    description: "Build fast, scalable, and highly interactive web applications with RecentureSoft's elite React.js development teams.",
    alternates: { canonical: "/react" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/react" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        keywords: page.seoKeywords || "",
        openGraph: {
            title: page.seoTitle || defaultMetadata.title,
            description: page.seoDescription || defaultMetadata.description,
            images: page.seoOgImage ? [{ url: page.seoOgImage }] : []
        },
        alternates: defaultMetadata.alternates
    };
}


export default async function ReactPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/react" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/react");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-sky-500/30">
            <Script id="react-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"React.js Development Services | RecentureSoft","description":"Build fast, scalable, and highly interactive web applications with RecentureSoft","url":"https://recenturesoft.com/react"}) }} />
            <Navbar />
            
            <ContentHero
                title={pageData?.content?.heroTitle || "React.js"}
                highlight={pageData?.content?.heroHighlight || "Development"}
                description={pageData?.content?.heroDesc || "Deliver unparalleled user experiences with high-performance, interactive, and scalable Single Page Applications powered by React."}
                highlightClass="text-sky-500 dark:text-sky-400"
                bannerImage={pageData?.content?.heroImage || ""}
                bannerOpacity={pageData?.content?.bannerOpacity}
                ctaText={pageData?.content?.heroCtaText || "Get in Touch"}
            />

            <section className="py-8 md:py-12 lg:py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <ReactContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="React Development" />


            <PageFAQSection pageName="react" />



            <FutureFooter />
        </main>
    );
}
