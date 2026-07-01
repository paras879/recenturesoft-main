import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import PageHero from "@/components/PageHero";
import ReactContent from "@/components/react/ReactContent";

export const metadata = {
    title: "React.js Development Services | RecentureSoft",
    description: "Build fast, scalable, and highly interactive web applications with RecentureSoft's elite React.js development teams.",
    alternates: { canonical: "/react" }
};

export default function ReactPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-sky-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"React.js Development Services | RecentureSoft","description":"Build fast, scalable, and highly interactive web applications with RecentureSoft","url":"https://recenturesoft.com/react"}) }} />
            <Navbar />
            
            <PageHero
                badge="Frontend Development"
                title="React.js"
                highlight="Development"
                description="Deliver unparalleled user experiences with high-performance, interactive, and scalable Single Page Applications powered by React."
                highlightClass="text-sky-500 dark:text-sky-400"
            />

            <section className="py-8 md:py-12 lg:py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <ReactContent />
                </div>
            </section>

            <FutureFooter />
        </main>
    );
}
