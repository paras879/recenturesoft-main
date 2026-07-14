import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import RAGDevelopmentContent from "@/components/rag-development/RAGDevelopmentContent";
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
    title: "Enterprise RAG Development Services | AI Search | RecentureSoft",
    description: "Build intelligent AI applications powered by Retrieval-Augmented Generation (RAG). Securely chat with your enterprise documents, knowledge bases, and databases.",
    openGraph: {
        title: "Enterprise RAG Development Services | AI Search | RecentureSoft",
        description: "Transform your organization's knowledge into intelligent AI assistants with secure, scalable, and highly accurate RAG solutions.",
        url: "https://recenturesoft.com/rag-development",
        siteName: "RecentureSoft",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise RAG Development Services | AI Search | RecentureSoft",
        description: "Build intelligent AI applications powered by Retrieval-Augmented Generation (RAG) using your private knowledge base.",
    },
    alternates: { canonical: "/rag-development" }
};

export default async function RAGDevelopmentPage() {
    const isActive = await checkPageStatus("/rag-development").catch(() => true);
    if (!isActive) return notFound();

    const faqs = await getFaqs("rag-development");

    let pageContent = {};
    try {
        await connectDB();
        const pageDataRaw = await WebPage.findOne({ path: "/rag-development" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
        if (pageData && pageData.content) {
            pageContent = pageData.content;
        }
    } catch (err) {
        console.error("Failed to fetch page content:", err);
    }

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <RAGDevelopmentContent faqs={faqs} content={pageContent} />
            <FutureFooter />
        </main>
    );
}
