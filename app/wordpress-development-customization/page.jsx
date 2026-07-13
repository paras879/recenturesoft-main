import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import WordPressContent from "@/components/wordpress-development-customization/WordPressContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";

export const metadata = {
    title: "WordPress Development & Customization Company In India | RecentureSoft",
    description: "Expert WordPress development and customization services in India. Build responsive, secure, and fully customized WordPress websites with our agile team.",
    alternates: { canonical: "/wordpress-development-customization" }
};

export default async function WordPressPage() {
    const isActive = await checkPageStatus("/wordpress-development-customization");
    if (!isActive) return notFound();
    await connectDB();
    const pageData = await WebPage.findOne({ path: "/wordpress-development-customization" }).lean();
    const dynamicData = pageData?.content || {};
    const heroData = dynamicData.wordpressHero || {};


    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"WordPress Development & Customization Company In India | RecentureSoft","description":"Expert WordPress development and customization services in India. Build responsive, secure, and fully customized WordPress websites with our agile team.","url":"https://recenturesoft.com/wordpress-development-customization"}) }} />
            <Navbar />
            <PageHero
                badge={heroData.badge || "Web Development"}
                title={heroData.title || "WordPress"}
                highlight={heroData.highlight || "Customization"}
                description={heroData.description || "Create stunning, high-performance, and SEO-optimized websites with our custom WordPress development and theme customization services."}
                highlightClass="text-blue-500 dark:text-blue-400"
            >
                <Image src={heroData.bannerImage || "/Banner/Wordpress.webp"} alt="wordpress-development-customization Banner" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </PageHero>

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <WordPressContent dynamicData={dynamicData} />
                </div>
            </section>

            <SolutionContactForm serviceName="WordPress Development" />


            <PageFAQSection pageName="wordpress-development-customization" />



            <FutureFooter />
        </main>
    );
}
