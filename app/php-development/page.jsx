import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import React from 'react';
import Navbar from '@/components/Navbar';
import FutureFooter from '@/components/FutureFooter';
import PHPDevelopmentContent from '@/components/php/PHPDevelopmentContent';

const defaultMetadata = {
    title: 'PHP Development Services | Custom Web Applications | RecentureSoft',
    description: 'Build secure, scalable, and high-performing web applications with our expert PHP development services. Custom business solutions, enterprise portals, and CMS platforms.',
    openGraph: {
        title: 'PHP Development Services | RecentureSoft',
        description: 'Build secure, scalable, and high-performing web applications with our expert PHP development services.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PHP Development Services | RecentureSoft',
        description: 'Build secure, scalable, and high-performing web applications with our expert PHP development services.',
    }
};

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/php-development" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function PHPDevelopmentPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/php-development" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <PHPDevelopmentContent dynamicData={pageData} />
            <FutureFooter />
        </main>
    );
}
