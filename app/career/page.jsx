import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import CareerContent from "@/components/career/CareerContent";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import PageHero from "@/components/PageHero";
import JobOpening from "@/models/JobOpening";
import PageFAQSection from "@/components/shared/PageFAQSection";

export const dynamic = "force-dynamic";

const defaultMetadata = {
    title: "Careers | RecentureSoft",
    description: "Join the RecentureSoft team. Check out our current job openings and apply to build the future of tech with us.",
    alternates: { canonical: "/career" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/career" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}

export default async function CareerPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/career" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/career");
    if (!isActive) return notFound();

    let jobs = [];
    try {
        await connectDB();
        const records = await JobOpening.find({ status: true }).sort({ createdAt: -1 }).lean();
        jobs = records.map(r => ({
            _id: r._id.toString(),
            title: r.title,
            department: r.department,
            location: r.location,
            experience: r.experience,
            jobType: r.jobType,
            description: r.description,
        }));
    } catch (error) {
        console.error("Failed to fetch jobs", error);
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617] selection:bg-cyan-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Careers | RecentureSoft","description":"Join the RecentureSoft team. Check out our current job openings and apply to build the future of tech with us.","url":"https://recenturesoft.com/career"}) }} />
            <Navbar />
            <PageHero 
                title={pageData?.content?.heroTitle || "Join Our Team"} 
                subtitle={pageData?.content?.heroSubtitle || "Build the future of digital engineering with RecentureSoft. We are always looking for passionate minds."}
                banner={pageData?.content?.heroBanner}
            />
            <CareerContent jobs={jobs} dynamicData={pageData} />
            <PageFAQSection pageName="career" />

            <FutureFooter />
        </main>
    );
}
