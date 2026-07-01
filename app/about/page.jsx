import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import CinematicAbout from "@/components/about/CinematicAbout";

export const metadata = {
    title: "About RecentureSoft | Digital Innovation & Enterprise Technology",
    description:
        "Discover RecentureSoft's mission, vision, culture, and expertise in AI, cloud computing, web development, mobile applications, and enterprise digital transformation.",
    alternates: { canonical: "/about" }
};

export default function AboutPage() {
    return (
        <main className="relative bg-slate-50 dark:bg-[#020617] min-h-screen overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"About RecentureSoft | Digital Innovation & Enterprise Technology","description":"Discover RecentureSoft","url":"https://recenturesoft.com/about"}) }} />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
            </div>
            <Navbar />
            <CinematicAbout />
            <FutureFooter />
        </main>
    );
}
