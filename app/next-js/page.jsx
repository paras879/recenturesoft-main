import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import ContentHero from "@/components/ContentHero";
import NextJsContent from "@/components/next-js/NextJsContent";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";
import Script from "next/script";

const defaultMetadata = {
    title: "Next.js Development Company | Enterprise Next.js Solutions | RecentureSoft",
    description: "Hire top Next.js developers at RecentureSoft. We build lightning-fast, highly scalable, and SEO-optimized enterprise applications using Next.js and React.",
    alternates: { canonical: "/next-js" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/next-js" }).lean();
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


export default async function NextJsPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/next-js" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
    const cmsBannerImage = pageData?.content?.bannerConfig?.imageUrl;

    const isActive = await checkPageStatus("/next-js");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-slate-900/30 dark:selection:bg-white/30">
            <Script id="nextjs-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Next.js Development Company | Enterprise Next.js Solutions | RecentureSoft","description":"Hire top Next.js developers at RecentureSoft. We build lightning-fast, highly scalable, and SEO-optimized enterprise applications using Next.js and React.","url":"https://recenturesoft.com/next-js"}) }} />
            <Navbar />
            
            <ContentHero bannerConfig={pageData?.content?.bannerConfig}
                title={pageData?.content?.heroTitle || "Next.js App"}
                highlight={pageData?.content?.heroHighlight || "Development"}
                description={pageData?.content?.heroDesc || "Harness the power of React Server Components, SSR, and Edge computing to build the fastest, most scalable web applications on the internet."}
                highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-black dark:from-white dark:to-slate-300"
                bannerImage={cmsBannerImage || pageData?.content?.heroImage || ""}
                bannerOpacity={pageData?.content?.bannerOpacity}
                ctaText={pageData?.content?.heroCtaText || "Get in Touch"}
            />

            <section className="py-8 md:py-12 lg:py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <NextJsContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="Next.js Development" />


            <PageFAQSection pageName="next-js" />



            <FutureFooter />
        </main>
    );
}
