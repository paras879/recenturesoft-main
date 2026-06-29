import CareerContent from "@/components/career/CareerContent";
import Navbar from "@/components/Navbar";
import PremiumFooter from "@/components/PremiumFooter";
import PageHero from "@/components/PageHero";
import { connectDB } from "@/lib/mongodb";
import JobOpening from "@/models/JobOpening";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Careers | RecentureSoft",
    description: "Join the RecentureSoft team. Check out our current job openings and apply to build the future of tech with us.",
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
            <Navbar />
            <PageHero 
                title="Join Our Team" 
                subtitle="Build the future of digital engineering with RecentureSoft. We are always looking for passionate minds."
            />
            <CareerContent jobs={jobs} />
            <PremiumFooter />
        </main>
    );
}
