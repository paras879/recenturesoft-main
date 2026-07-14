import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import PythonDevelopmentContent from '@/components/python/PythonDevelopmentContent';
import Navbar from '@/components/Navbar';
import FutureFooter from '@/components/FutureFooter';

const defaultMetadata = {
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

export async function generateMetadata() {
    await connectDB();
    const page = await WebPage.findOne({ path: "/python-development" }).lean();
    if (!page) return defaultMetadata;
    return {
        title: page.seoTitle || defaultMetadata.title,
        description: page.seoDescription || defaultMetadata.description,
        alternates: defaultMetadata.alternates
    };
}


export default async function PythonDevelopmentPage() {
    await connectDB();
    const pageDataRaw = await WebPage.findOne({ path: "/python-development" }).lean();
    const pageData = pageDataRaw ? JSON.parse(JSON.stringify(pageDataRaw)) : null;

    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <Navbar />
            <PythonDevelopmentContent dynamicData={pageData} />
            <FutureFooter />
        </main>
    );
}
