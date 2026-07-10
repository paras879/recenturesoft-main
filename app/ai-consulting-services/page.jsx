import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import WebPage from "@/models/WebPage";
import FAQModel from "@/models/FAQ";
import { connectDB } from "@/lib/mongodb";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import AIServicesContent from "@/components/ai-services/AIServicesContent";

async function getFaqs(pageName) {
    try {
        await connectDB();
        const rawFaqs = await FAQModel.find({ isActive: true, page: pageName }).sort({ order: 1, createdAt: -1 }).lean();
        return rawFaqs.map((f) => ({
            _id: f._id.toString(),
            question: f.question || "",
            answer: f.answer || "",
        }));
    } catch (err) {
        console.error("Failed to fetch FAQs:", err);
        return [];
    }
}

export const metadata = {
    title: "AI Consulting Services | Enterprise Artificial Intelligence | RecentureSoft",
    description: "Empower your business with expert AI consulting services. We help organizations create intelligent strategies, select technologies, and implement AI solutions.",
    openGraph: {
        title: "AI Consulting Services | Enterprise Artificial Intelligence | RecentureSoft",
        description: "Identify the right AI opportunities, create intelligent strategies, and implement scalable AI solutions with RecentureSoft.",
        url: "https://recenturesoft.com/ai-consulting-services",
        siteName: "RecentureSoft",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Consulting Services | Enterprise Artificial Intelligence | RecentureSoft",
        description: "Expert AI consulting services to transform your business with scalable, enterprise-grade AI strategies and implementations.",
    },
    alternates: { canonical: "/ai-consulting-services" }
};

export default async function AIServicesPage() {
    const isActive = await checkPageStatus("/ai-consulting-services").catch(() => true);
    if (!isActive) return notFound();

    const faqs = await getFaqs("ai-services");

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <AIServicesContent faqs={faqs} />
            <FutureFooter />
        </main>
    );
}
