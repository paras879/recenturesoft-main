import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import ContentHero from "@/components/ContentHero";
import NodeJsContent from "@/components/node-js/NodeJsContent";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";
import Script from "next/script";

const defaultMetadata = {
    title: "Node.js Development Services | RecentureSoft",
    description: "Hire expert Node.js developers at RecentureSoft. We build highly scalable, secure, and lightning-fast backend REST APIs and microservices architectures.",
    alternates: { canonical: "/node-js" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/node-js" }).lean();
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


export default async function NodeJsPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/node-js" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
    const cmsBannerImage = pageData?.content?.bannerConfig?.imageUrl;

    const isActive = await checkPageStatus("/node-js");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-emerald-500/30">
            <Script id="nodejs-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Node.js Development Services | RecentureSoft","description":"Hire expert Node.js developers at RecentureSoft. We build highly scalable, secure, and lightning-fast backend REST APIs and microservices architectures.","url":"https://recenturesoft.com/node-js"}) }} />
            <Navbar />
            
            <ContentHero bannerConfig={pageData?.content?.bannerConfig}
                title={pageData?.content?.heroTitle || "Node.js API"}
                highlight={pageData?.content?.heroHighlight || "Development"}
                description={pageData?.content?.heroDesc || "Architect highly scalable, data-intensive, real-time backend applications and microservices using enterprise-grade Node.js."}
                highlightClass="text-emerald-500 dark:text-emerald-400"
                bannerImage={cmsBannerImage || pageData?.content?.heroImage || ""}
                bannerOpacity={pageData?.content?.bannerOpacity}
                ctaText={pageData?.content?.heroCtaText || "Get in Touch"}
            />

            <section className="py-8 md:py-12 lg:py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <NodeJsContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="Node.js Development" />


            <PageFAQSection pageName="node-js" />



            <FutureFooter />
        </main>
    );
}
