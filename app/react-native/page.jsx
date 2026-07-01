import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import PageHero from "@/components/PageHero";
import ReactNativeContent from "@/components/react-native/ReactNativeContent";

export const metadata = {
    title: "React Native App Development Company | RecentureSoft",
    description: "Hire the best React Native app developers in India. We build high-performance, cross-platform mobile apps for iOS and Android.",
    alternates: { canonical: "/react-native" }
};

export default async function ReactNativePage() {
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
                <div className="max-w-4xl mx-auto">
                    <ReactNativeContent />
                </div>
            </section>

            <FutureFooter />
        </main>
    );
}
