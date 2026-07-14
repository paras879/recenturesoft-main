import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import { checkPageStatus } from "@/lib/checkPageStatus";
import { notFound } from "next/navigation";
import React from 'react';
import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import SitemapClient from "./SitemapClient";
import mongoose from "mongoose";

const defaultMetadata = {
        description: "Complete directory of RecentureSoft's website including services, resources, and company information.",
        url: "https://recenturesoft.com/sitemap",
        siteName: "RecentureSoft",
        type: "website",
    },
    alternates: { canonical: "/sitemap" }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/sitemap" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function SitemapPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/sitemap" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    const isActive = await checkPageStatus("/sitemap");
    if (!isActive) return notFound();

    await connectDB();
    const db = mongoose.connection;
    const pages = await db.collection("webpages").find({ status: "active", templateType: "location-template" }).toArray();
    const locationLinks = pages.map(p => ({ name: p.name, href: p.path }));

    return (
        <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#020617]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":"Sitemap | RecentureSoft","description":"Navigate through all pages, services, and resources available on the RecentureSoft platform. Find the information you need quickly and easily.","url":"https://recenturesoft.com/sitemap"}) }} />
            <Navbar />
            <div className="flex-grow">
                <SitemapClient locationLinks={locationLinks} />
            </div>
            <FutureFooter />
        </main>
    );
}
