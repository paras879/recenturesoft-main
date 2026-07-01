import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import WordPressContent from "@/components/wordpress-development-customization/WordPressContent";
import FutureFooter from "@/components/FutureFooter";

export const metadata = {
    title: "WordPress Development & Customization Company In India | RecentureSoft",
    description: "Expert WordPress development and customization services in India. Build responsive, secure, and fully customized WordPress websites with our agile team.",
    alternates: { canonical: "/wordpress-development-customization" }
};

export default async function WordPressPage() {
    const isActive = await checkPageStatus("/wordpress-development-customization");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"WordPress Development & Customization Company In India | RecentureSoft","description":"Expert WordPress development and customization services in India. Build responsive, secure, and fully customized WordPress websites with our agile team.","url":"https://recenturesoft.com/wordpress-development-customization"}) }} />
            <Navbar />
            <PageHero
                badge="CMS & Development"
                title="WordPress Development & Customization Company"
                highlight="in India"
                description=""
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src="/Banner/wordpress.webp" alt="wordpress-development-customization Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <WordPressContent />
                </div>
            </section>

            <FutureFooter />
        </main>
    );
}
