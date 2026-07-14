import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import React from 'react';
import Navbar from '@/components/Navbar';
import FutureFooter from '@/components/FutureFooter';
import LaravelDevelopmentContent from '@/components/laravel/LaravelDevelopmentContent';

const defaultMetadata = {
    title: 'Premium Laravel Development Services | RecentureSoft',
    description: 'Develop powerful, secure, and scalable web applications with Laravel. We build enterprise platforms, SaaS products, customer portals, and custom business solutions.',
    openGraph: {
        title: 'Premium Laravel Development Services | RecentureSoft',
        description: 'Develop powerful, secure, and scalable web applications with Laravel.',
        type: 'website',
        url: 'https://recenturesoft.com/laravel-development',
        siteName: 'RecentureSoft',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Premium Laravel Development Services | RecentureSoft',
        description: 'Develop powerful, secure, and scalable web applications with Laravel.',
    },
    alternates: { canonical: '/laravel-development' }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/laravel-development" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function LaravelDevelopmentPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/laravel-development" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <LaravelDevelopmentContent dynamicData={pageData} />
            <FutureFooter />
        </main>
    );
}
