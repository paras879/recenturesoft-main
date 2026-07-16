import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import Image from "next/image";
import IphoneAppsContent from "@/components/iphone-apps-development/IphoneAppsContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

const defaultMetadata = {
    title: "iPhone App Development Company In India | RecentureSoft",
    description: "RecentureSoft is a leading iOS and iPhone app development company in India offering robust, enterprise-grade, and engaging mobile applications.",
    alternates: { canonical: "/iphone-apps-development" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/iphone-apps-development" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function IphoneAppsPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/iphone-apps-development" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/iphone-apps-development");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"iPhone App Development Company In India | RecentureSoft","description":"RecentureSoft is a leading iOS and iPhone app development company in India offering robust, enterprise-grade, and engaging mobile applications.","url":"https://recenturesoft.com/iphone-apps-development"}) }} />
            <Navbar />
            <ContentHero
                title={pageData?.content?.heroTitle || "iPhone App Development Company"}
                highlight={pageData?.content?.heroHighlight || "In India"}
                description=""
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src={pageData?.content?.heroImage || "/Banner/iphone.webp"} alt="iphone-apps-development Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </ContentHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <IphoneAppsContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="iPhone Apps Development" />


            <PageFAQSection pageName="iphone-apps-development" />



            <FutureFooter />
        </main>
    );
}
