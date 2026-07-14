import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import React from 'react';
import Navbar from '@/components/Navbar';
import FutureFooter from '@/components/FutureFooter';
import JavaScriptDevelopmentContent from '@/components/javascript/JavaScriptDevelopmentContent';

const defaultMetadata = {
    title: 'Premium JavaScript Development Services | RecentureSoft',
    description: 'Build fast, interactive, and scalable web applications using modern JavaScript technologies like React, Next.js, and Node.js. Partner with RecentureSoft for modern frontend engineering.',
    openGraph: {
        title: 'Premium JavaScript Development Services | RecentureSoft',
        description: 'Build fast, interactive, and scalable web applications using modern JavaScript technologies like React, Next.js, and Node.js.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Premium JavaScript Development Services | RecentureSoft',
        description: 'Build fast, interactive, and scalable web applications using modern JavaScript technologies like React, Next.js, and Node.js.',
    }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/javascript-development" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function JavaScriptDevelopmentPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/javascript-development" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <JavaScriptDevelopmentContent dynamicData={pageData} />
            <FutureFooter />
        </main>
    );
}
