import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import ContactHero from "@/components/contact/ContactHero";
import InteractiveContactForm from "@/components/contact/InteractiveContactForm";
import FutureFooter from "@/components/FutureFooter";
import Navbar from "@/components/Navbar";


export const metadata = {
    title: "Contact Us | RecentureSoft",
    description: "Get in touch with our team to start your next enterprise project.",
    alternates: { canonical: "/contact" }
};

export default async function ContactPage() {
    const isActive = await checkPageStatus("/contact");
    if (!isActive) return notFound();

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-[auto] lg:min-h-screen overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Contact Us | RecentureSoft","description":"Get in touch with our team to start your next enterprise project.","url":"https://recenturesoft.com/contact"}) }} />
            <Navbar />
            <ContactHero />

            <InteractiveContactForm />

            <FutureFooter />
        </main>
    );
}
