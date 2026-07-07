import React from 'react';
import Navbar from '@/components/Navbar';
import FutureFooter from '@/components/FutureFooter';
import LaravelDevelopmentContent from '@/components/laravel/LaravelDevelopmentContent';

export const metadata = {
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

export default function LaravelDevelopmentPage() {
    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <LaravelDevelopmentContent />
            <FutureFooter />
        </main>
    );
}
