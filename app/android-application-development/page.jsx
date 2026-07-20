import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import Image from "next/image";
import AndroidAppsContent from "@/components/android-application-development/AndroidAppsContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

const defaultMetadata = {
    title: "Android Application Development Company In India | RecentureSoft",
    description: "Scale your business with the best Android application development company in India. We build highly scalable, custom, and secure Android mobile apps.",
    alternates: { canonical: "/android-application-development" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/android-application-development" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function AndroidAppsPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/android-application-development" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
    const cmsBannerImage = pageData?.content?.bannerConfig?.imageUrl;

    const isActive = await checkPageStatus("/android-application-development");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Android Application Development Company In India | RecentureSoft","description":"Scale your business with the best Android application development company in India. We build highly scalable, custom, and secure Android mobile apps.","url":"https://recenturesoft.com/android-application-development"}) }} />
            <Navbar />
            <ContentHero
                title={pageData?.content?.heroTitle || "Android Application Development Company"}
                highlight={pageData?.content?.heroHighlight || "In India"}
                description={pageData?.content?.heroDesc || ""}
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src={cmsBannerImage || pageData?.content?.heroImage || "/Banner/android.webp"} alt="android-application-development Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </ContentHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <AndroidAppsContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="Android Application Development" />


            <PageFAQSection pageName="android-application-development" />



            <FutureFooter />
        </main>
    );
}
