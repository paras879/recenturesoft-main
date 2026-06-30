import Navbar from "@/components/Navbar";
import PrivacyPolicyContent from "@/components/privacy/PrivacyPolicyContent";
import FutureFooter from "@/components/FutureFooter";

export const metadata = {
    title: "Privacy Policy | Software Dev Company",
    description: "Our privacy policy and how we handle your data securely.",
    alternates: { canonical: "/privacy_policy" }
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <main className="min-h-screen bg-white dark:bg-[#0a0a0a] overflow-x-clip selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-100">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Privacy Policy | Software Dev Company","description":"Our privacy policy and how we handle your data securely.","url":"https://recenturesoft.com/privacy_policy"}) }} />
                <Navbar />
                {/* Background Gradients */}
                <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent pointer-events-none -z-10" />

                <div className="pt-32 pb-16">
                    <PrivacyPolicyContent />
                </div>
            </main>
            <FutureFooter />
        </>
    );
}
