import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import CinematicEvents from "@/components/events/CinematicEvents";
import { connectDB } from "@/lib/mongodb";
import Event from "@/models/Event";
import EventGallery from "@/models/EventGallery";
import TeamMember from "@/models/TeamMember";
import { resolveImagePath } from "@/lib/imageHelper";

export const metadata = {
    title: "Events & Culture | RecentureSoft",
  description: "Experience the passion, innovation, and global collaboration that drives our engineering teams.",
    alternates: { canonical: "/events" }
};

export const dynamic = "force-dynamic";

export default async function EventsPage() {
    const isActive = await checkPageStatus("/events");
    if (!isActive) return notFound();

    let serializedEvents = [];
    let serializedTeam = [];
    
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

    } catch (error) {
        console.error("Error fetching data from MongoDB:", error);
    }

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Events & Culture | RecentureSoft","description":"Experience the passion, innovation, and global collaboration that drives our engineering teams.","url":"https://recenturesoft.com/events"}) }} />
            <Navbar />
            <CinematicEvents events={serializedEvents} teamMembers={serializedTeam} />
            <FutureFooter />
        </main>
    );
}

