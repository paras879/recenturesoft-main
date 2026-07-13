import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import AIDevelopmentContent from "@/components/ai-development/AIDevelopmentContent";
import FAQModel from "@/models/FAQ";
import { connectDB } from "@/lib/mongodb";

import WebPage from "@/models/WebPage";

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

async function getPageContent(path) {
    try {
        await connectDB();
        const page = await WebPage.findOne({ path }).lean();
        return page ? JSON.parse(JSON.stringify(page)) : null;
    } catch (err) {
        console.error(`Failed to fetch page content for ${path}:`, err);
        return null;
    }
}

export const metadata = {
    title: "AI Development Services | Enterprise AI Solutions | RecentureSoft",
    description: "Build intelligent AI-powered software solutions that automate processes, improve decision-making, and accelerate business growth with custom AI development.",
    openGraph: {
        title: "AI Development Services | Enterprise AI Solutions | RecentureSoft",
        description: "Custom AI development tailored to your business needs. Partner with RecentureSoft for scalable, secure, and enterprise-grade AI applications.",
        url: "https://recenturesoft.com/ai-agent-development",
        siteName: "RecentureSoft",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Development Services | Enterprise AI Solutions | RecentureSoft",
        description: "Build intelligent AI-powered software solutions that automate processes, improve decision-making, and accelerate business growth.",
    },
    alternates: { canonical: "/ai-agent-development" }
};

export default async function AIDevelopmentPage() {
    const isActive = await checkPageStatus("/ai-agent-development").catch(() => true);
    if (!isActive) return notFound();

    const faqs = await getFaqs("ai-agent-development");
    const pageData = await getPageContent("/ai-agent-development");
    const content = pageData?.content || {};

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <AIDevelopmentContent faqs={faqs} content={content} />
            <FutureFooter />
        </main>
    );
}
