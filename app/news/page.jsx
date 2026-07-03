import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FutureFooter from "@/components/FutureFooter";
import NewsList from "@/components/news/NewsList";
import CTASection from "@/components/CTASection";

export const metadata = {
    title: "Tech Pulse | Live Technology News & Insights",
    description: "Stay informed with the latest breaking global technology news, tech industry updates, developer trends, and digital innovations.",
    alternates: { canonical: "/news" }
};

async function getInitialNews() {
    try {
        const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || vercelUrl || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/news`, {
            next: { revalidate: 3600 }
        });
        if (!res.ok) return { results: [], nextPage: null };
        const data = await res.json();
        return {
            results: data.results || [],
            nextPage: data.nextPage || null
        };
    } catch (e) {
        return { results: [], nextPage: null };
    }
}

export default async function NewsPage() {
    const isActive = await checkPageStatus("/news");
    if (!isActive) return notFound();

    const initialData = await getInitialNews();

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "name": "Tech Pulse | Live Technology News & Insights", "description": "Stay informed with the latest breaking global technology news, tech industry updates, developer trends, and digital innovations.", "url": "https://recenturesoft.com/news" }) }} />
            <Navbar />
            <PageHero
                badge="Live Updates"
                title="Tech News"
                description="Discover real-time global technology news, breaking industry insights, and digital innovations."
            />

            <div className="relative -mt-6 md:-mt-4">
                <NewsList initialData={initialData.results} initialNextPage={initialData.nextPage} />
            </div>

            <div className="relative -mt-6 md:-mt-6">
                <CTASection
                    title="Media Inquiries"
                    description="Are you a journalist or analyst? Get in touch with our PR team for press kits, interviews, and official comments."
                    primaryBtnText="Contact PR Team"
                    secondaryBtnText="Download Press Kit"
                />
            </div>
            <FutureFooter />
        </main>
    );
}
