import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import SmoContent from "@/components/social-networking/SmoContent";
import PremiumFooter from "@/components/PremiumFooter";

export const metadata = {
    title: "SMO Company In India | RecentureSoft",
    description: "Get popular with the best SMO company in India. We execute quality SMM and SEO services to strengthen your brand online and maximize your ROI.",
};

export default function SmoPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <Navbar />
            <PageHero
                badge="Digital Marketing"
                title="SMO Company in India"
                highlight=""
                description=""
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/social_networking.webp" alt="social-networking Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <SmoContent />
                </div>
            </section>

            <PremiumFooter />
        </main>
    );
}
