import { notFound } from "next/navigation";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import FutureFooter from "@/components/FutureFooter";
import Navbar from "@/components/Navbar";
import GenericCrmPage from "@/components/crm/GenericCrmPage";
import GenericLocationPage from "@/components/location/GenericLocationPage";

import { unstable_cache } from "next/cache";

const getPageData = async (path: string) => {
    return unstable_cache(
        async () => {
            await connectDB();
            const db = mongoose.connection;
            const page = await db.collection("webpages").findOne({ path: path, status: "active" });
            return page;
        },
        ["dynamic-page-data", path],
        {
            tags: [`page-${path}`],
            revalidate: 3600,
        }
    )();
};

const getGlobalBlocks = unstable_cache(
    async () => {
        await connectDB();
        const db = mongoose.connection;
        const blocks = await db.collection("globalblocks").find({ isActive: true }).toArray();
        return blocks;
    },
    ["global-blocks-list"],
    {
        tags: ["global-blocks"],
        revalidate: 3600,
    }
);

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
    const [page, allGlobalBlocksRaw] = await Promise.all([
        getPageData(path),
        getGlobalBlocks(),
    ]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const allGlobalBlocks: any[] = allGlobalBlocksRaw as any[];

    if (!page) {
        notFound();
    }

    // Determine the category of this page (from its DB record)
    const pageCategory = ((page as any).category || "").toLowerCase();

    // Filter global blocks that apply to this page
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const applicableBlocks: any[] = allGlobalBlocks.filter((b: any) => {
        if (b.targetCategory === "all") return true;
        if (b.targetCategory === "industries" && pageCategory === "industries") return true;
        if (b.targetCategory === "solutions" && pageCategory === "solutions") return true;
        return false;
    });

    if (page.templateType === "crm-template") {
        return (
            <>
                <Navbar />
                <main>
                    {/* @ts-expect-error - JSX component accepts globalBlocks but is untyped */}
                    <GenericCrmPage page={page as any} globalBlocks={applicableBlocks} />
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
                    {/* @ts-expect-error - JSX component accepts globalBlocks but is untyped */}
                    <GenericLocationPage page={page as any} globalBlocks={applicableBlocks} />
                </main>
                <FutureFooter />
            </>
        );
    }

    // Default Template
    return (
        <>
            <Navbar />
            <main className="min-h-[60vh] pt-20 sm:pt-24 md:pt-32 pb-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl sm:rounded-3xl px-4 py-5 sm:p-6 md:p-12 shadow-sm border border-slate-200">
                        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-8 leading-tight tracking-tight w-full">{page.name}</h1>
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
