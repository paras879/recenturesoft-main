import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CookiesContent from "@/components/cookies/CookiesContent";
import FutureFooter from "@/components/FutureFooter";

const defaultMetadata = {
    title: "Cookies Policy | RecentureSoft",
    description: "Our cookies policy and how we use them.",
    alternates: { canonical: "/cookies" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/cookies" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function CookiesPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/cookies" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/cookies");
    if (!isActive) return notFound();

    return (
        <>
            <main className="min-h-screen bg-white dark:bg-[#0a0a0a] overflow-x-clip selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-100">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Cookies Policy | RecentureSoft","description":"Our cookies policy and how we use them.","url":"https://recenturesoft.com/cookies"}) }} />
                <Navbar />
                {/* Background Gradients */}
                <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent pointer-events-none -z-10" />

                <div className="pt-32 pb-16">
                    <CookiesContent dynamicData={pageData} />
                </div>
            </main>
            <FutureFooter />
        </>
    );
}
