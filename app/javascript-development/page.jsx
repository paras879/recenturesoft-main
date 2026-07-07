import React from 'react';
import Navbar from '@/components/Navbar';
import FutureFooter from '@/components/FutureFooter';
import JavaScriptDevelopmentContent from '@/components/javascript/JavaScriptDevelopmentContent';

export const metadata = {
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

export default function JavaScriptDevelopmentPage() {
    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <JavaScriptDevelopmentContent />
            <FutureFooter />
        </main>
    );
}
