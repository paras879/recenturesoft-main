import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FutureFooter from "@/components/FutureFooter";
import EnterpriseServices from "@/components/Service";
import TechArchitecture from "@/components/solutions/TechArchitecture";
import SolutionsProcess from "@/components/solutions/SolutionsProcess";
import CTASection from "@/components/CTASection";
import Service from "@/models/Service";
import PageFAQSection from "@/components/shared/PageFAQSection";

const defaultMetadata = {
    title: "Enterprise Solutions | RecentureSoft",
    description: "Explore our premium enterprise solutions, digital intelligence, and modern technology architecture.",
    alternates: { canonical: "/solutions" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/solutions" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function SolutionsPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/solutions" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/solutions");
    if (!isActive) return notFound();

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

            <TechArchitecture dynamicData={pageData} />

            <SolutionsProcess />

            <CTASection
                title="Transform Your Architecture"
                description="Ready to upgrade your tech stack with our premium engineering solutions? Let's build the future together."
                primaryBtnText="Start Your Project"
                secondaryBtnText="Schedule Consultation"
            />
            
            <PageFAQSection pageName="solutions" />

            
            <FutureFooter />
        </main>
    );
}
