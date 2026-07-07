import React from 'react';
import Navbar from '@/components/Navbar';
import FutureFooter from '@/components/FutureFooter';
import PHPDevelopmentContent from '@/components/php/PHPDevelopmentContent';

export const metadata = {
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

export default function PHPDevelopmentPage() {
    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <PHPDevelopmentContent />
            <FutureFooter />
        </main>
    );
}
