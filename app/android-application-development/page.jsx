import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import AndroidAppsContent from "@/components/android-application-development/AndroidAppsContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";

export const metadata = {
    title: "Android Application Development Company In India | RecentureSoft",
    description: "Scale your business with the best Android application development company in India. We build highly scalable, custom, and secure Android mobile apps.",
    alternates: { canonical: "/android-application-development" }
};

export default async function AndroidAppsPage() {
    const isActive = await checkPageStatus("/android-application-development");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Android Application Development Company In India | RecentureSoft","description":"Scale your business with the best Android application development company in India. We build highly scalable, custom, and secure Android mobile apps.","url":"https://recenturesoft.com/android-application-development"}) }} />
            <Navbar />
            <PageHero
                badge="Mobile Development"
                title="Android Application Development Company"
                highlight="In India"
                description=""
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/android.webp" alt="android-application-development Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <AndroidAppsContent />
                </div>
            </section>

            <SolutionContactForm serviceName="Android Application Development" />


            <FutureFooter />
        </main>
    );
}
