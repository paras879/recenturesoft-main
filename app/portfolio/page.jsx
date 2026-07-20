import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import FutureFooter from "@/components/FutureFooter";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import Transformations from "@/components/portfolio/Transformations";
import CTASection from "@/components/CTASection";
import { connectDB } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";
import WebPage from "@/models/WebPage";
import PageFAQSection from "@/components/shared/PageFAQSection";

export const metadata = {
    title: "Portfolio | Enterprise Projects & Case Studies | RecentureSoft",
    description:
        "Explore RecentureSoft's portfolio of enterprise software, AI solutions, web applications, mobile apps, cloud platforms, and digital transformation success stories.",
    alternates: { canonical: "/portfolio" }
};

export const dynamic = "force-dynamic";

export default async function PortfolioPage() {
    const isActive = await checkPageStatus("/portfolio");
    if (!isActive) return notFound();

    let projects = [];
    let content = {};
    let pageData = null;
    let cmsBannerImage = null;
    
    try {
        await connectDB();
        const docs = await Portfolio.find({}).lean();
        projects = docs.map(doc => ({
            _id: doc._id.toString(),
            title: doc.title || "",
            slug: doc.slug || "",
            description: doc.description || "",
            projectUrl: doc.projectUrl || "",
            image: doc.image || doc.images || "",
            technologies: doc.technologies || []
        }));

        const pageDataRaw = await WebPage.findOne({ path: "/portfolio" }).lean();
        pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
        cmsBannerImage = pageData?.content?.bannerConfig?.imageUrl;
        content = pageData?.content || {};
    } catch (error) {
        console.error("Error fetching data from MongoDB:", error);
    }

    return (
        <main className=" relative bg-slate-50 dark:bg-[#020617] min-h-screen overflow-x-hidden antialiased">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Portfolio | Enterprise Projects & Case Studies | RecentureSoft","description":"Explore RecentureSoft","url":"https://recenturesoft.com/portfolio"}) }} />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />
            </div>
            <Navbar />
            <ContentHero bannerConfig={pageData?.content?.bannerConfig} hideContactButton={true}
                title={content.hero?.title || "Engineering"}
                highlight={content.hero?.highlight || "Success"}
                description={content.hero?.desc || "Discover award-worthy digital products, enterprise platforms, AI-powered solutions, and transformative experiences engineered to accelerate business growth."}
                bannerImage={cmsBannerImage || content.hero?.bannerImage}
                bannerOpacity={content.hero?.bannerOpacity}
            />

            <ProjectGallery initialProjects={projects} data={content.gallery} />
            
            {content.transformations?.isVisible !== false && (
                <Transformations data={content.transformations} />
            )}

            {content.cta?.isVisible !== false && (
                <CTASection
                    title={content.cta?.title || "Ready to engineer your success?"}
                    description={content.cta?.desc || "Let's create something extraordinary together. Partner with RecentureSoft to build intelligent, scalable, and award-worthy digital products."}
                    primaryBtnText={content.cta?.primaryBtn || "Start Your Project"}
                    secondaryBtnText={content.cta?.secondaryBtn || "Explore Case Studies"}
                />
            )}
            <PageFAQSection pageName="portfolio" />

            <FutureFooter />
        </main>
    );
}

