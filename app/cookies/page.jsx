import Navbar from "@/components/Navbar";
import CookiesContent from "@/components/cookies/CookiesContent";
import FutureFooter from "@/components/FutureFooter";

export const metadata = {
    title: "Cookies Policy | RecentureSoft",
    description: "Our cookies policy and how we use them.",
};

export default function CookiesPage() {
    return (
        <>
            <main className="min-h-screen bg-white dark:bg-[#0a0a0a] overflow-x-clip selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-100">
                <Navbar />
                {/* Background Gradients */}
                <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent pointer-events-none -z-10" />

                <div className="pt-32 pb-16">
                    <CookiesContent />
                </div>
            </main>
            <FutureFooter />
        </>
    );
}
