import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PremiumFooter from "@/components/PremiumFooter";
import EnterpriseServices from "@/components/Service";
import TechArchitecture from "@/components/solutions/TechArchitecture";
import SolutionsProcess from "@/components/solutions/SolutionsProcess";
import CTASection from "@/components/CTASection";
import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";

export const metadata = {
    title: "Enterprise Solutions | RecentureSoft",
    description: "Explore our premium enterprise solutions, digital intelligence, and modern technology architecture.",
    alternates: { canonical: "/solutions" }
};

export default async function SolutionsPage() {
    await connectDB();
    const records = await Service.find({ status: true }).lean();
    
    // Ensure all ObjectIds are mapped to strings for client components
    const servicesData = records.map(s => ({
        ...s,
        _id: s._id.toString(),
        createdAt: s.createdAt?.toISOString(),
        updatedAt: s.updatedAt?.toISOString()
    }));

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Enterprise Solutions | RecentureSoft","description":"Explore our premium enterprise solutions, digital intelligence, and modern technology architecture.","url":"https://recenturesoft.com/solutions"}) }} />
            <Navbar />
            
            <PageHero
                badge="Our Expertise"
                title="Engineering"
                highlight="Digital Excellence"
                description="Discover our comprehensive suite of enterprise-grade solutions. We architect scalable, secure, and blazing fast digital products."
            />

            <EnterpriseServices services={servicesData} />

            <TechArchitecture />

            <SolutionsProcess />

            <CTASection
                title="Transform Your Architecture"
                description="Ready to upgrade your tech stack with our premium engineering solutions? Let's build the future together."
                primaryBtnText="Start Your Project"
                secondaryBtnText="Schedule Consultation"
            />
            
            <PremiumFooter />
        </main>
    );
}
