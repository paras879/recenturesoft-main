import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import TermsContent from "@/components/terms/TermsContent";
import FutureFooter from "@/components/FutureFooter";

export const metadata = {
    title: "Terms of Service | RecentureSoft",
    description: "Our terms of service.",
    alternates: { canonical: "/terms" }
};

export default async function TermsPage() {
    const isActive = await checkPageStatus("/terms");
    if (!isActive) return notFound();

    return (
        <>
            <main className="min-h-screen bg-white dark:bg-[#0a0a0a] overflow-x-clip selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-100">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Terms of Service | RecentureSoft","description":"Our terms of service.","url":"https://recenturesoft.com/terms"}) }} />
                <Navbar />
                {/* Background Gradients */}
                <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent pointer-events-none -z-10" />

                <div className="pt-32 pb-16">
                    <TermsContent />
                </div>
            </main>
            <FutureFooter />
        </>
    );
}
