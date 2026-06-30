import Navbar from "@/components/Navbar";
import PremiumFooter from "@/components/PremiumFooter";
import PageHero from "@/components/PageHero";
import NodeJsContent from "@/components/node-js/NodeJsContent";

export const metadata = {
    title: "Node.js Development Services | RecentureSoft",
    description: "Hire expert Node.js developers at RecentureSoft. We build highly scalable, secure, and lightning-fast backend REST APIs and microservices architectures.",
    alternates: { canonical: "/node-js" }
};

export default function NodeJsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#020617] selection:bg-emerald-500/30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Node.js Development Services | RecentureSoft","description":"Hire expert Node.js developers at RecentureSoft. We build highly scalable, secure, and lightning-fast backend REST APIs and microservices architectures.","url":"https://recenturesoft.com/node-js"}) }} />
            <Navbar />
            
            <PageHero
                badge="Backend Engineering"
                title="Node.js API"
                highlight="Development"
                description="Architect highly scalable, data-intensive, real-time backend applications and microservices using enterprise-grade Node.js."
                highlightClass="text-emerald-500 dark:text-emerald-400"
            />

            <section className="py-8 md:py-12 lg:py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <NodeJsContent />
                </div>
            </section>

            <PremiumFooter />
        </main>
    );
}
