import Navbar from "@/components/Navbar";
import PremiumFooter from "@/components/PremiumFooter";
import PageHero from "@/components/PageHero";
import ReactNativeContent from "@/components/react-native/ReactNativeContent";

export const metadata = {
    title: "React Native App Development Company | RecentureSoft",
    description: "Hire the best React Native app developers in India. We build high-performance, cross-platform mobile apps for iOS and Android.",
};

export default function ReactNativePage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-indigo-500/30">
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

            <PremiumFooter />
        </main>
    );
}
