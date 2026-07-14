import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import PageHero from "@/components/PageHero";
import ReactNativeContent from "@/components/react-native/ReactNativeContent";
import SolutionContactForm from "@/components/shared/SolutionContactForm";
import PageFAQSection from "@/components/shared/PageFAQSection";

const defaultMetadata = {
    title: "React Native App Development Company | RecentureSoft",
    description: "Hire the best React Native app developers in India. We build high-performance, cross-platform mobile apps for iOS and Android.",
    alternates: { canonical: "/react-native" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/react-native" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function ReactNativePage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/react-native" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/react-native");
    if (!isActive) return notFound();

    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-indigo-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"React Native App Development Company | RecentureSoft","description":"Hire the best React Native app developers in India. We build high-performance, cross-platform mobile apps for iOS and Android.","url":"https://recenturesoft.com/react-native"}) }} />
            <Navbar />
            
            <PageHero
                badge="Mobile Development"
                title="React Native App"
                highlight="Development"
                description="Launch faster and cut costs with our React Native engineering services. Build native iOS and Android applications from a single unified codebase."
                highlightClass="text-indigo-500 dark:text-indigo-400"
            />

            <section className="py-8 md:py-12 lg:py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <ReactNativeContent dynamicData={pageData} />
                </div>
            </section>

            <SolutionContactForm serviceName="React Native Development" />


            <PageFAQSection pageName="react-native" />



            <FutureFooter />
        </main>
    );
}
