import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import IpadAppsContent from "@/components/ipad-app-development/IpadAppsContent";
import PremiumFooter from "@/components/PremiumFooter";

export const metadata = {
    title: "iPad App Development Company In India | RecentureSoft",
    description: "Scale your business with the best iPad app development company in India. We build reliable, fast, and elegant iPad applications tailored to your goals.",
};

export default function IpadAppsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <Navbar />
            <PageHero
                badge="Mobile Development"
                title="iPad App Development Company"
                highlight="In India"
                description=""
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/ipad.webp" alt="ipad-app-development Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <IpadAppsContent />
                </div>
            </section>

            <PremiumFooter />
        </main>
    );
}
