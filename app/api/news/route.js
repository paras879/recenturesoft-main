import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";
import { NextResponse } from "next/server";

export async function GET(request) {
    const MOCK_NEWS = [
        {
            title: "Next.js 16 Released with Revolutionary Turbopack Compiler Enhancements",
            description: "Vercel has announced the official release of Next.js 16, introducing native compilation speedups, improved package optimizations, and developer efficiency tool upgrades.",
            image_url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
            source_id: "vercel_news",
            pubDate: "2026-06-22 12:00:00",
            link: "https://vercel.com/blog"
        },
        {
            title: "OpenAI Announces GPT-5: A Quantum Leap in Multi-Modal Reasoning",
            description: "OpenAI has officially launched GPT-5, showcasing exceptional performance in advanced logical deduction, programming generation, and cross-lingual translation workflows.",
            image_url: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800",
            source_id: "techcrunch",
            pubDate: "2026-06-22 10:30:00",
            link: "https://techcrunch.com"
        },
        {
            title: "The State of Cloud Security 2026: Confronting Sophisticated AI Threats",
            description: "A comprehensive industry report reveals a 120% increase in cloud vulnerability exploitation. Experts outline zero-trust countermeasures for enterprise architectures.",
            image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800",
            source_id: "wired",
            pubDate: "2026-06-22 09:15:00",
            link: "https://wired.com"
        },
        {
            title: "Venture Capital Rebounds as AI Startups Secure Record-Breaking Series B Funds",
            description: "Global venture investment in artificial intelligence projects reaches a new peak in Q2 2026. Sector analysis predicts steady software velocity growth.",
            image_url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800",
            source_id: "venturebeat",
            pubDate: "2026-06-22 08:00:00",
            link: "https://venturebeat.com"
        },
        {
            title: "Rust Language Gaining Tremendous Traction in Enterprise Infrastructure Projects",
            description: "A developer survey highlights Rust as the most beloved language for systems engineering, citing superior memory safety and zero-cost abstractions as key adoption drivers.",
            image_url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800",
            source_id: "hackernews",
            pubDate: "2026-06-22 07:00:00",
            link: "https://news.ycombinator.com"
        },
        {
            title: "Apple Vision Pro 2 Introduced with Ultralight Carbon Chassis Design",
            description: "Apple has unveiled the next generation of spatial computing headsets, offering double the display resolution, improved battery performance, and spatial audio updates.",
            image_url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
            source_id: "the_verge",
            pubDate: "2026-06-22 06:00:00",
            link: "https://theverge.com"
        }
    ];

    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category") || "all";
        const search = searchParams.get("search") || "";
        const pageToken = searchParams.get("page") || "1";

        await connectDB();

        const query = {};
        
        // Map common terms to DB fields
        if (category && category !== "all") {
            query.categories = { $regex: category, $options: 'i' };
        }

        if (search.trim()) {
            query.$text = { $search: search.trim() };
        }

        const limit = 10;
        const page = parseInt(pageToken, 10) || 1;
        const skip = (page - 1) * limit;

        let dbNews = [];
        if (search.trim()) {
            dbNews = await News.find(query)
                .sort({ score: { $meta: "textScore" } })
                .skip(skip)
                .limit(limit)
                .lean();
        } else {
            dbNews = await News.find(query)
                .sort({ pubDate: -1 })
                .skip(skip)
                .limit(limit)
                .lean();
        }

        // Return MOCK_NEWS if DB is empty
        if (dbNews.length === 0 && page === 1 && !search) {
            return NextResponse.json({
                results: MOCK_NEWS,
                nextPage: null,
                warning: "Serving mock news (DB is empty)"
            });
        }

        const formattedResults = dbNews.map(item => ({
            title: item.title,
            description: item.description,
            image_url: item.image_url,
            source_id: item.source_id,
            pubDate: item.pubDate,
            link: item.link,
            category: item.categories
        }));

        const hasNextPage = formattedResults.length === limit;
        const nextPageId = hasNextPage ? String(page + 1) : null;

        return NextResponse.json({
            results: formattedResults,
            nextPage: nextPageId
        });

    } catch (error) {
        console.error("News API DB fetch error:", error);
        return NextResponse.json({
            results: MOCK_NEWS,
            nextPage: null,
            warning: "Serving mock news due to server integration crash."
        });
    }
}