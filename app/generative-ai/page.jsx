import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import GenerativeAIContent from "@/components/generative-ai/GenerativeAIContent";
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import FAQModel from "@/models/FAQ";

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
    title: "Generative AI Development Services | RecentureSoft",
    description: "Build intelligent AI-powered applications using GPT, Claude, Gemini, and custom LLMs to automate workflows and drive business growth.",
    openGraph: {
        title: "Generative AI Development Services | RecentureSoft",
        description: "Transform your business with enterprise-grade Generative AI applications developed by RecentureSoft.",
        url: "https://recenturesoft.com/generative-ai",
        siteName: "RecentureSoft",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Generative AI Development Services | RecentureSoft",
        description: "Build intelligent AI-powered applications using GPT, Claude, Gemini, and custom Large Language Models.",
    },
    alternates: { canonical: "/generative-ai" }
};

export default async function GenerativeAIPage() {
    const isActive = await checkPageStatus("/generative-ai").catch(() => true);
    if (!isActive) return notFound();

    await connectDB();
    const faqs = await getFaqs("generative-ai");
    const pageData = await WebPage.findOne({ path: "/generative-ai" }).lean();
    const dynamicData = pageData?.content || {};

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <GenerativeAIContent faqs={faqs} dynamicData={dynamicData} />
            <FutureFooter />
        </main>
    );
}
