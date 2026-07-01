import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import PageHero from "@/components/PageHero";
import DashboardContent from "@/components/dashboard/DashboardContent";

export const metadata = {
    title: "Custom Dashboard Development Company | RecentureSoft",
    description: "Build custom, high-performance, data-driven dashboard applications with RecentureSoft. Transform raw data into actionable insights.",
    alternates: { canonical: "/dashboard" }
};

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Custom Dashboard Development Company | RecentureSoft","description":"Build custom, high-performance, data-driven dashboard applications with RecentureSoft. Transform raw data into actionable insights.","url":"https://recenturesoft.com/dashboard"}) }} />
            <Navbar />
            
            {/* Note: Omitted 'children' since we don't have a specific banner image yet. 
                PageHero gracefully falls back to a clean light-blue tech background. */}
            <PageHero
                badge="Data Visualization"
                title="Custom Dashboard"
                highlight="Development"
                description="Consolidate complex data into intuitive, real-time visual interfaces that empower your team to make faster, smarter decisions."
                highlightClass="text-blue-500 dark:text-blue-400"
            />

            <section className="py-8 md:py-12 lg:py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <DashboardContent />
                </div>
            </section>

            <FutureFooter />
        </main>
    );
}
