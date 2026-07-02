import { connectDB } from "@/lib/mongodb";
import News from "@/models/News";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        // Secure the cron route if CRON_SECRET is provided by Vercel
        const authHeader = request.headers.get('authorization');
        if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return new Response('Unauthorized', { status: 401 });
        }

        const apiKey = process.env.NEWSDATA_API_KEY;
        if (!apiKey || apiKey === "your_api_key") {
            return NextResponse.json({ message: "No API key found. Skipping sync." }, { status: 200 });
        }

        // Fetch top technology news
        const newsUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&category=technology&language=en`;
        const res = await fetch(newsUrl);
        
        if (!res.ok) {
            throw new Error(`NewsData API error: ${res.status}`);
        }

        const data = await res.json();
        const articles = data.results || [];

        if (articles.length === 0) {
            return NextResponse.json({ message: "No articles found to sync." });
        }

        await connectDB();

        // Upsert articles into database
        const operations = articles.map(article => ({
            updateOne: {
                filter: { link: article.link },
                update: {
                    $set: {
                        title: article.title,
                        description: article.description,
                        image_url: article.image_url,
                        source_id: article.source_id,
                        pubDate: new Date(article.pubDate),
                        categories: article.category || ['technology']
                    }
                },
                upsert: true
            }
        }));

        const result = await News.bulkWrite(operations);

        return NextResponse.json({
            message: "News synced successfully",
            upsertedCount: result.upsertedCount,
            modifiedCount: result.modifiedCount,
        });

    } catch (error) {
        console.error("Cron sync error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
