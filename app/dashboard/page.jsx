import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import ContentHero from "@/components/ContentHero";
import DashboardContent from "@/components/dashboard/DashboardContent";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";

const defaultMetadata = {
    title: "Custom Dashboard Development Company | RecentureSoft",
    description: "Build custom, high-performance, data-driven dashboard applications with RecentureSoft. Transform raw data into actionable insights.",
    alternates: { canonical: "/dashboard" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/dashboard" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}

export default async function DashboardPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/dashboard" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/dashboard");
    if (!isActive) return notFound();

    const c = pageData?.content || {};

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Custom Dashboard Development Company | RecentureSoft","description":"Build custom, high-performance, data-driven dashboard applications with RecentureSoft. Transform raw data into actionable insights.","url":"https://recenturesoft.com/dashboard"}) }} />
            <Navbar />
            
            <ContentHero
                title={c.hero?.title || "Custom Dashboard"}
                highlight={c.hero?.highlight || "Development"}
                description={c.hero?.description || "Consolidate complex data into intuitive, real-time visual interfaces that empower your team to make faster, smarter decisions."}
                highlightClass="text-blue-500 dark:text-blue-400"
            />

            <section className="py-8 md:py-12 lg:py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <DashboardContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="Dashboard Development" />

            <PageFAQSection pageName="dashboard" />

            <FutureFooter />
        </main>
    );
}
