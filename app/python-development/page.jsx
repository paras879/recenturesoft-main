import PythonDevelopmentContent from '@/components/python/PythonDevelopmentContent';
import Navbar from '@/components/Navbar';
import FutureFooter from '@/components/FutureFooter';

export const metadata = {
    title: "Python Development Services | RecentureSoft",
    description: "Develop secure, scalable, and high-performance software with Python. From enterprise web applications and APIs to automation tools and AI-powered solutions.",
    openGraph: {
        title: "Python Development Services | RecentureSoft",
        description: "Develop secure, scalable, and high-performance software with Python. From enterprise web applications and APIs to automation tools.",
        url: "https://recenturesoft.com/python-development",
        siteName: "RecentureSoft",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Development Services | RecentureSoft",
        description: "Develop secure, scalable, and high-performance software with Python.",
    },
    alternates: { canonical: "/python-development" }
};

export default function PythonDevelopmentPage() {
    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <PythonDevelopmentContent />
            <FutureFooter />
        </main>
    );
}
