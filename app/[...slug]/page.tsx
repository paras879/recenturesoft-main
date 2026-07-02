import { notFound } from "next/navigation";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import FutureFooter from "@/components/FutureFooter";
import NavbarClient from "@/components/NavbarClient";

async function getPageData(path: string) {
    await connectDB();
    const db = mongoose.connection;
    const page = await db.collection("webpages").findOne({ path: path, status: "active" });
    return page;
}

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
    const path = params?.slug?.length
        ? "/" + params.slug.join("/")
        : "/";
    const page = await getPageData(path);
    if (!page) return {};
    return {
        title: page.seoTitle || page.name,
        description: page.seoDescription || "",
    };
}

export default async function DynamicPage({ params }: { params: { slug: string[] } }) {
    const path = params?.slug?.length
        ? "/" + params.slug.join("/")
        : "/";
    const page = await getPageData(path);

    if (!page) {
        notFound();
    }

    // Connect to SiteSettings for Footer/Navbar if needed, but they handle themselves
    return (
        <>
            <NavbarClient />
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
