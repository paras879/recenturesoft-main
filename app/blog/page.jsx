import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PremiumFooter from "@/components/PremiumFooter";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import ArticleGrid from "@/components/blog/ArticleGrid";
import CTASection from "@/components/CTASection";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import BlogCategory from "@/models/BlogCategory";

export const metadata = {
    title: "Blog & Insights | Software Engineering, AI & Digital Innovation",
    description:
        "Explore expert insights on software engineering, AI, cloud architecture, UI/UX, digital transformation, and enterprise technology.",
    alternates: { canonical: "/blog" }
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
    await connectDB();
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 }).lean();

    const featuredArticle = blogs.find(b => b.featured) || blogs[0] || null;
    const gridArticles = featuredArticle ? blogs.filter(b => b.slug !== featuredArticle.slug) : blogs;

    // Fetch dynamic categories
    const categories = await BlogCategory.find().sort({ createdAt: 1 }).lean();
    const catNames = categories.map(c => c.name);

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
            <PageHero
                badge="Editorial"
                title="Insights &"
                highlight="Perspectives"
                description="Explore deep technical deep-dives, industry trends, and thoughts on the future of enterprise software and design."
            />

            <FeaturedArticle article={serializedFeatured} />
            <ArticleGrid articles={serializedGrid} categories={catNames} />

            <CTASection
                title="Never Miss an Update"
                description="Subscribe to our engineering newsletter to get the latest architectural breakdowns and case studies delivered to your inbox."
                primaryBtnText="Subscribe Now"
                secondaryBtnText="Follow on Twitter"
            />
            <PremiumFooter />
        </main>
    );
}
