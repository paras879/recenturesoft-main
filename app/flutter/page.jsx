import Navbar from "@/components/Navbar";
import FutureFooter from "@/components/FutureFooter";
import FlutterDevelopmentContent from '@/components/flutter/FlutterDevelopmentContent'

export const metadata = {
  title: 'Premium Flutter App Development Services | RecentureSoft',
  description: 'Build stunning, high-performance cross-platform mobile applications for Android and iOS with RecentureSoft Flutter experts.',
  openGraph: {
    title: 'Premium Flutter App Development Services | RecentureSoft',
    description: 'Build stunning, high-performance cross-platform mobile applications for Android and iOS with RecentureSoft Flutter experts.',
    url: 'https://recenturesoft.com/flutter',
    siteName: 'RecentureSoft',
    images: [
      {
        url: 'https://recenturesoft.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RecentureSoft Flutter Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Flutter App Development Services | RecentureSoft',
    description: 'Build stunning, high-performance cross-platform mobile applications for Android and iOS with RecentureSoft Flutter experts.',
    images: ['https://recenturesoft.com/images/og-image.jpg'],
  },
}

export default function FlutterDevelopmentPage() {
  return (
    <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
      <Navbar />
      <FlutterDevelopmentContent />
      <FutureFooter />
    </main>
  );
}
