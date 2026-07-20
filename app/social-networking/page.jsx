import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import SmoContent from "@/components/social-networking/SmoContent";
import FutureFooter from "@/components/FutureFooter";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

const defaultMetadata = {
    title: "SMO Company In India | RecentureSoft",
    description: "Get popular with the best SMO company in India. We execute quality SMM and SEO services to strengthen your brand online and maximize your ROI.",
    alternates: { canonical: "/social-networking" }
};

const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SMO Company In India | RecentureSoft",
    "description": "Get popular with the best SMO company in India. We execute quality SMM and SEO services to strengthen your brand online and maximize your ROI.",
    "url": "https://recenturesoft.com/social-networking"
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/social-networking" }).lean();
    if (!page) return defaultMetadata;
    const content = page.content || {};
    const og = content.openGraph || {};
    const metadata = {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates,
    };
    if (og?.enabled !== false) {
        if (og.title) metadata.title = og.title;
        if (og.description) metadata.description = og.description;
        if (og.image) {
            metadata.openGraph = { images: [{ url: og.image }] };
        }
    }
    return metadata;
}


export default async function SmoPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/social-networking" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
    const cmsBannerImage = pageData?.content?.bannerConfig?.imageUrl;

    const isActive = await checkPageStatus("/social-networking");
    if (!isActive) return notFound();

    const content = pageData?.content || {};
    const hero = content.hero || {};
    const schemaSection = content.schema || {};
    const contactForm = content.contactForm || {};
    const faq = content.faq || {};

    const schemaJson = schemaSection.enabled !== false
        ? (schemaSection.json || defaultSchema)
        : null;

    const heroTitle = hero.title || "SMO Company in India";
    const heroHighlight = hero.highlight || "";
    const heroDescription = hero.description || "";
    const bannerImage = cmsBannerImage || hero.bannerImage || "/Banner/social_networking.webp";
    const bannerOpacity = hero.bannerOpacity !== undefined ? hero.bannerOpacity : 70;
    const ctaText = hero.ctaText || "Get in Touch";
    const ctaLink = hero.ctaLink || "";
    const hideContactButton = hero.hideContactButton || false;

    const contactFormVisible = contactForm.visible !== false;
    const faqVisible = faq.visible !== false;

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-blue-500/30">
            {schemaJson && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
            )}
            <Navbar />
            <ContentHero bannerConfig={pageData?.content?.bannerConfig}
                title={heroTitle}
                highlight={heroHighlight}
                description={heroDescription}
                bannerImage={cmsBannerImage || bannerImage}
                bannerOpacity={bannerOpacity}
                ctaText={ctaText}
                ctaLink={ctaLink}
                hideContactButton={hideContactButton}
                highlightClass="text-blue-500 dark:text-blue-400"
            />

            <section className="py-6 md:py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <SmoContent dynamicData={pageData} />
                </div>
            </section>

            {contactFormVisible && <SolutionContactForm serviceName="Social Networking" />}

            {faqVisible && <PageFAQSection pageName="social-networking" />}

            <FutureFooter />
        </main>
    );
}
