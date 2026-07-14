import { connectDB } from "@/lib/mongodb";

import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import CinematicEvents from "@/components/events/CinematicEvents";
import Event from "@/models/Event";
import EventGallery from "@/models/EventGallery";
import TeamMember from "@/models/TeamMember";
import WebPage from "@/models/WebPage";
import { resolveImagePath } from "@/lib/imageHelper";
import PageFAQSection from "@/components/shared/PageFAQSection";

const defaultMetadata = {
    title: "Events & Culture | RecentureSoft",
  description: "Experience the passion, innovation, and global collaboration that drives our engineering teams.",
    alternates: { canonical: "/events" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/events" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export const dynamic = "force-dynamic";

export default async function EventsPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/events" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/events");
    if (!isActive) return notFound();

    let serializedEvents = [];
    let serializedTeam = [];
    let pageContent = {};
    
    try {
        await connectDB();
        
        // Fetch Events
        const events = await Event.find({}).lean();
        serializedEvents = await Promise.all(
            events.map(async (event) => {
                const photoCount = await EventGallery.countDocuments({ eventSlug: new RegExp(`^${event.slug}$`, "i") });
                return {
                    _id: event._id.toString(),
                    title: event.title || "",
                    slug: event.slug || "",
                    date: event.date || "",
                    location: event.location || "",
                    heroImage: resolveImagePath(event.heroImage || ""),
                    featured: !!event.featured,
                    photoCount: photoCount || 0,
                };
            })
        );

        // Fetch Team Members
        const team = await TeamMember.find({}).lean();
        serializedTeam = team.map(member => ({
            _id: member._id.toString(),
            name: member.name || "",
            role: member.role || "",
            quote: member.quote || "",
            image: resolveImagePath(member.image || ""),
        }));

        // Fetch dynamic page content
        const dynamicPageData = await WebPage.findOne({ path: "/events" }).lean();
        if (dynamicPageData && dynamicPageData.content) {
            pageContent = dynamicPageData.content;
        }

    } catch (error) {
        console.error("Error fetching data from MongoDB:", error);
    }

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Events & Culture | RecentureSoft","description":"Experience the passion, innovation, and global collaboration that drives our engineering teams.","url":"https://recenturesoft.com/events"}) }} />
            <Navbar />
            <CinematicEvents events={serializedEvents} teamMembers={serializedTeam} content={pageContent} />
            <PageFAQSection pageName="events" />

            <FutureFooter />
        </main>
    );
}
