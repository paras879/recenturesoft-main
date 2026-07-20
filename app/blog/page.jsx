import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContentHero from "@/components/ContentHero";
import FutureFooter from "@/components/FutureFooter";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import ArticleGrid from "@/components/blog/ArticleGrid";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import BlogCategory from "@/models/BlogCategory";
import WebPage from "@/models/WebPage";
import PageFAQSection from "@/components/shared/PageFAQSection";

export const metadata = {
    title: "Blog & Insights | Software Engineering, AI & Digital Innovation",
    description:
        "Explore expert insights on software engineering, AI, cloud architecture, UI/UX, digital transformation, and enterprise technology.",
    alternates: { canonical: "/blog" }
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
    const isActive = await checkPageStatus("/blog");
    if (!isActive) return notFound();

    await connectDB();
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 }).lean();

    const featuredArticle = blogs.find(b => b.featured) || blogs[0] || null;
    const gridArticles = featuredArticle ? blogs.filter(b => b.slug !== featuredArticle.slug) : blogs;

    // Fetch dynamic categories
    const categories = await BlogCategory.find().sort({ createdAt: 1 }).lean();
    const catNames = categories.map(c => c.name);

    // Fetch dynamic page content
    let pageContent = {};
    let pageData = null;
    let cmsBannerImage = null;
    try {
        const pageDataRaw = await WebPage.findOne({ path: "/blog" }).lean();
        pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;
        cmsBannerImage = pageData?.content?.bannerConfig?.imageUrl;
        if (pageData && pageData.content) {
            pageContent = pageData.content;
        }
    } catch (err) {
        console.error("Failed to fetch page content:", err);
    }

    // Serialize database documents safely to pass as props
    const serializedFeatured = featuredArticle ? JSON.parse(JSON.stringify(featuredArticle)) : null;
    const serializedGrid = JSON.parse(JSON.stringify(gridArticles));

    return (
        <main className="relative min-h-screen overflow-x-hidden antialiased ">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Blog & Insights | Software Engineering, AI & Digital Innovation","description":"Explore expert insights on software engineering, AI, cloud architecture, UI/UX, digital transformation, and enterprise technology.","url":"https://recenturesoft.com/blog"}) }} />
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full" />
            </div>

            <Navbar />
            <ContentHero bannerConfig={pageData?.content?.bannerConfig} hideContactButton={true}
                title={pageContent?.hero?.title || "Insights &"}
                highlight={pageContent?.hero?.highlight || "Perspectives"}
                description={pageContent?.hero?.description || "Explore deep technical deep-dives, industry trends, and thoughts on the future of enterprise software and design."}
                bannerImage={cmsBannerImage || pageContent?.hero?.bannerImage}
                bannerOpacity={pageContent?.hero?.bannerOpacity}
            />

            <FeaturedArticle article={serializedFeatured} title={pageContent?.featured?.title || "Featured Insight"} />
            <ArticleGrid articles={serializedGrid} categories={catNames} />
            <PageFAQSection pageName="blog" />

            <FutureFooter />
        </main>
    );
}
