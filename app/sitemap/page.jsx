import { connectDB } from "@/lib/mongodb";
import SitemapEntry from "@/models/SitemapEntry";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import React from 'react';
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import SitemapClient from "./SitemapClient";

const defaultMetadata = {
    title: "Sitemap | RecentureSoft",
    description: "Navigate through all pages, services, and resources available on the RecentureSoft platform. Find the information you need quickly and easily.",
    openGraph: {
        title: "Sitemap | RecentureSoft",
        description: "Complete directory of RecentureSoft's website including services, resources, and company information.",
        url: "https://recenturesoft.com/sitemap",
        siteName: "RecentureSoft",
        type: "website",
    },
    alternates: { canonical: "/sitemap" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await SitemapEntry.findOne({ path: "/sitemap" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: defaultMetadata.title,
        description: defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}

export default async function SitemapPage() {
    await connectDB();

    const isActive = await checkPageStatus("/sitemap");
    if (!isActive) return notFound();

    const entries = await SitemapEntry.find({ status: "active" })
        .sort({ section: 1, priority: -1, name: 1 })
        .lean();

    const sections = {
        information: entries.filter(e => e.section === "information"),
        locations: entries.filter(e => e.section === "locations"),
        legal: entries.filter(e => e.section === "legal"),
    };

    const serialized = {
        information: JSON.parse(JSON.stringify(sections.information)),
        locations: JSON.parse(JSON.stringify(sections.locations)),
        legal: JSON.parse(JSON.stringify(sections.legal)),
    };

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", "name": "Sitemap | RecentureSoft", "description": "Navigate through all pages, services, and resources available on the RecentureSoft platform.", "url": "https://recenturesoft.com/sitemap" }) }} />
            <Navbar />

            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-900/10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            Website Sitemap
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            A complete overview of all pages and services available on RecentureSoft.
                        </p>
                    </div>
                </div>
            </section>

            <SitemapClient sections={serialized} />

            <FutureFooter />
        </main>
    );
}
