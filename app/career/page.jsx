import CareerContent from "@/components/career/CareerContent";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import PageHero from "@/components/PageHero";
import { connectDB } from "@/lib/mongodb";
import JobOpening from "@/models/JobOpening";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Careers | RecentureSoft",
    description: "Join the RecentureSoft team. Check out our current job openings and apply to build the future of tech with us.",
    alternates: { canonical: "/career" }
};

export default async function CareerPage() {
    let jobs = [];
    try {
        await connectDB();
        const records = await JobOpening.find({ status: true }).sort({ createdAt: -1 }).lean();
        jobs = records.map(r => ({
            _id: r._id.toString(),
            title: r.title,
            department: r.department,
            location: r.location,
            experience: r.experience,
            jobType: r.jobType,
            description: r.description,
        }));
    } catch (error) {
        console.error("Failed to fetch jobs", error);
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617] selection:bg-cyan-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Careers | RecentureSoft","description":"Join the RecentureSoft team. Check out our current job openings and apply to build the future of tech with us.","url":"https://recenturesoft.com/career"}) }} />
            <Navbar />
            <PageHero 
                title="Join Our Team" 
                subtitle="Build the future of digital engineering with RecentureSoft. We are always looking for passionate minds."
            />
            <CareerContent jobs={jobs} />
            <FutureFooter />
        </main>
    );
}
