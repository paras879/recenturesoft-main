import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import PageHero from "@/components/PageHero";
import DashboardContent from "@/components/dashboard/DashboardContent";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";

const defaultMetadata = {
    title: "Custom Dashboard Development Company | RecentureSoft",
    description: "Build custom, high-performance, data-driven dashboard applications with RecentureSoft. Transform raw data into actionable insights.",
    alternates: { canonical: "/dashboard" }
};

export async function generateMetadata() {
    await connectDB();
    const db = mongoose.connection;
    const page = await db.collection("webpages").findOne({ path: "/dashboard", status: "active" });

    if (!page) {
        return defaultMetadata;
    }

    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}

export default async function DashboardPage() {
    const isActive = await checkPageStatus("/dashboard");
    if (!isActive) return notFound();

    await connectDB();
    const db = mongoose.connection;
    const pageData = await db.collection("webpages").findOne({ path: "/dashboard", status: "active" });
    const dynamicData = pageData?.content || {};

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Custom Dashboard Development Company | RecentureSoft","description":"Build custom, high-performance, data-driven dashboard applications with RecentureSoft. Transform raw data into actionable insights.","url":"https://recenturesoft.com/dashboard"}) }} />
            <Navbar />
            
            {/* Note: Omitted 'children' since we don't have a specific banner image yet. 
                PageHero gracefully falls back to a clean light-blue tech background. */}
            <PageHero
                badge={dynamicData.hero?.badge || "Data Visualization"}
                title={dynamicData.hero?.title || "Custom Dashboard"}
                highlight={dynamicData.hero?.highlight || "Development"}
                description={dynamicData.hero?.description || "Consolidate complex data into intuitive, real-time visual interfaces that empower your team to make faster, smarter decisions."}
                highlightClass="text-blue-500 dark:text-blue-400"
            />

            <section className="py-8 md:py-12 lg:py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <DashboardContent dynamicData={dynamicData} />
                </div>
            </section>

            <SolutionContactForm serviceName="Dashboard Development" />


            <PageFAQSection pageName="dashboard" />



            <FutureFooter />
        </main>
    );
}
