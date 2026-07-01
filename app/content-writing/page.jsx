import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import ContentWritingContent from "@/components/content-writing/ContentWritingContent";
import FutureFooter from "@/components/FutureFooter";

export const metadata = {
    title: "Content Writing Company In India | RecentureSoft",
    description: "Partner with the best content writing company in India. We provide high-quality webpage content, technical writing, blogs, and academic writing services.",
    alternates: { canonical: "/content-writing" }
};

export default async function ContentWritingPage() {
    const isActive = await checkPageStatus("/content-writing");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Content Writing Company In India | RecentureSoft","description":"Partner with the best content writing company in India. We provide high-quality webpage content, technical writing, blogs, and academic writing services.","url":"https://recenturesoft.com/content-writing"}) }} />
            <Navbar />
            <PageHero
                badge="Content Marketing"
                title="Content Writing Company in India"
                highlight=""
                description=""
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/content_writting.webp" alt="content-writing Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <ContentWritingContent />
                </div>
            </section>

            <FutureFooter />
        </main>
    );
}
