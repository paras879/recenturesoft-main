import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import AIChatbotContent from "@/components/ai-chatbot/AIChatbotContent";
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

export const metadata = {
    title: "AI Chatbot Development Services | Enterprise AI Bots | RecentureSoft",
    description: "Transform customer interactions with intelligent AI chatbots. We build custom conversational AI for websites, WhatsApp, and enterprise applications.",
    openGraph: {
        title: "AI Chatbot Development Services | Enterprise AI Bots | RecentureSoft",
        description: "Automate your business processes and customer support with intelligent AI chatbots developed by RecentureSoft.",
        url: "https://recenturesoft.com/ai-chatbot-development",
        siteName: "RecentureSoft",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Chatbot Development Services | Enterprise AI Bots | RecentureSoft",
        description: "Transform customer interactions with intelligent AI chatbots for websites, WhatsApp, and enterprise applications.",
    },
    alternates: { canonical: "/ai-chatbot-development" }
};

export default async function AIChatbotPage() {
    const isActive = await checkPageStatus("/ai-chatbot-development").catch(() => true);
    if (!isActive) return notFound();

    const faqs = await getFaqs("ai-chatbot-development");

    let pageContent = {};
    try {
        await connectDB();
        const pageData = await WebPage.findOne({ path: "/ai-chatbot-development" }).lean();
        if (pageData && pageData.content) {
            pageContent = pageData.content;
        }
    } catch (err) {
        console.error("Failed to fetch page content:", err);
    }

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <AIChatbotContent faqs={faqs} content={pageContent} />
            <FutureFooter />
        </main>
    );
}
