import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import Image from "next/image";
import IpadAppsContent from "@/components/ipad-app-development/IpadAppsContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

const defaultMetadata = {
    title: "iPad App Development Company In India | RecentureSoft",
    description: "Scale your business with the best iPad app development company in India. We build reliable, fast, and elegant iPad applications tailored to your goals.",
    alternates: { canonical: "/ipad-app-development" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/ipad-app-development" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function IpadAppsPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/ipad-app-development" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/ipad-app-development");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"iPad App Development Company In India | RecentureSoft","description":"Scale your business with the best iPad app development company in India. We build reliable, fast, and elegant iPad applications tailored to your goals.","url":"https://recenturesoft.com/ipad-app-development"}) }} />
            <Navbar />
            <ContentHero
                title={pageData?.content?.heroTitle || "iPad App Development Company"}
                highlight={pageData?.content?.heroHighlight || "In India"}
                description=""
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src={pageData?.content?.heroImage || "/Banner/ipad.webp"} alt="ipad-app-development Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </ContentHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <IpadAppsContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="iPad App Development" />


            <PageFAQSection pageName="ipad-app-development" />



            <FutureFooter />
        </main>
    );
}
