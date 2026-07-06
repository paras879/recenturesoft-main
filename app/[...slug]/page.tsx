import { notFound } from "next/navigation";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import FutureFooter from "@/components/FutureFooter";
import Navbar from "@/components/Navbar";
import GenericCrmPage from "@/components/crm/GenericCrmPage";
import GenericLocationPage from "@/components/location/GenericLocationPage";

async function getPageData(path: string) {
    await connectDB();
    const db = mongoose.connection;
    const page = await db.collection("webpages").findOne({ path: path, status: "active" });
    return page;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
    const resolvedParams = await params;
    const path = resolvedParams?.slug?.length
        ? "/" + resolvedParams.slug.join("/")
        : "/";
    const page = await getPageData(path);
    if (!page) return {};
    return {
        title: page.seoTitle || page.name,
        description: page.seoDescription || "",
    };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const resolvedParams = await params;
    const path = resolvedParams?.slug?.length
        ? "/" + resolvedParams.slug.join("/")
        : "/";
    const page = await getPageData(path);

    if (!page) {
        notFound();
    }

    if (page.templateType === "crm-template") {
        return (
            <>
                <Navbar />
                <main>
                    <GenericCrmPage page={page} />
                </main>
                <FutureFooter />
            </>
        );
    }

    if (page.templateType === "location-template") {
        return (
            <>
                <Navbar />
                <main>
                    <GenericLocationPage page={page} />
                </main>
                <FutureFooter />
            </>
        );
    }

    // Default Template
    return (
        <>
            <Navbar />
            <main className="min-h-[60vh] pt-32 pb-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">{page.name}</h1>
                        <div className="prose prose-slate max-w-none prose-lg">
                            {/* Currently just placeholder content for newly created dynamic pages */}
                            <p className="text-slate-600 leading-relaxed">
                                Welcome to the <strong>{page.name}</strong> page. This page is dynamically generated and managed through the RecentureSoft Admin Panel.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                In the future, you will be able to edit this content directly from the CMS using a Rich Text Editor.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <FutureFooter />
        </>
    );
}
