import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import SmoContent from "@/components/social-networking/SmoContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

const defaultMetadata = {
    title: "SMO Company In India | RecentureSoft",
    description: "Get popular with the best SMO company in India. We execute quality SMM and SEO services to strengthen your brand online and maximize your ROI.",
    alternates: { canonical: "/social-networking" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/social-networking" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function SmoPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/social-networking" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/social-networking");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"SMO Company In India | RecentureSoft","description":"Get popular with the best SMO company in India. We execute quality SMM and SEO services to strengthen your brand online and maximize your ROI.","url":"https://recenturesoft.com/social-networking"}) }} />
            <Navbar />
            <PageHero
                badge="Digital Marketing"
                title="SMO Company in India"
                highlight=""
                description=""
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/social_networking.webp" alt="social-networking Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <SmoContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="Social Networking" />


            <PageFAQSection pageName="social-networking" />



            <FutureFooter />
        </main>
    );
}
