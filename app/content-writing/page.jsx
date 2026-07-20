import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import Image from "next/image";
import ContentWritingContent from "@/components/content-writing/ContentWritingContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

const defaultMetadata = {
    title: "Content Writing Company In India | RecentureSoft",
    description: "Partner with the best content writing company in India. We provide high-quality webpage content, technical writing, blogs, and academic writing services.",
    alternates: { canonical: "/content-writing" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/content-writing" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function ContentWritingPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/content-writing" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
    const cmsBannerImage = pageData?.content?.bannerConfig?.imageUrl;

    const isActive = await checkPageStatus("/content-writing");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Content Writing Company In India | RecentureSoft","description":"Partner with the best content writing company in India. We provide high-quality webpage content, technical writing, blogs, and academic writing services.","url":"https://recenturesoft.com/content-writing"}) }} />
            <Navbar />
            <ContentHero
                title={pageData?.content?.heroTitle || "Content Writing Company in India"}
                highlight=""
                description=""
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src={cmsBannerImage || pageData?.content?.heroBanner || "/Banner/content_writting.webp"} alt="content-writing Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </ContentHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <ContentWritingContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="Content Writing" />


            <PageFAQSection pageName="content-writing" />



            <FutureFooter />
        </main>
    );
}
