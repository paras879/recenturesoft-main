import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import Link from "next/link";
import { Globe, Pencil, Eye, CheckCircle2, XCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Pages | Admin Panel",
};

const EDITABLE_PAGES = [
    {
        path: "/social-networking",
        slug: "social-networking",
        name: "Social Networking Apps",
        description: "Social Media Optimization (SMO) service page",
    },
];

export default async function PagesAdminPage() {
    await connectDB();
    const paths = EDITABLE_PAGES.map(p => p.path);
    const dbPages = await WebPage.find({ path: { $in: paths } }).lean();

    const pageMap = {};
    dbPages.forEach(p => {
        pageMap[p.path] = JSON.parse(JSON.stringify(p));
    });

    return (
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 pb-12">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Pages</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    Manage SEO metadata and content for your service pages.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {EDITABLE_PAGES.map(({ path, slug, name, description }) => {
                    const data = pageMap[path];
                    const isActive = data?.status !== "inactive";
                    const lastUpdated = data?.content?.lastUpdated;

                    return (
                        <div
                            key={path}
                            className="group bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200"
                        >
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                                        <Globe className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                                                {name}
                                            </h2>
                                            <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${isActive
                                                ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                                                : "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400"
                                                }`}>
                                                {isActive ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                                                {isActive ? "Active" : "Inactive"}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{description}</p>
                                        <div className="flex items-center gap-4 mt-1.5 flex-wrap">
                                            <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">{path}</span>
                                            {lastUpdated && (
                                                <span className="text-xs text-slate-400 dark:text-slate-500">
                                                    Updated: {lastUpdated}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Link
                                        href={path}
                                        target="_blank"
                                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors"
                                    >
                                        <Eye className="w-4 h-4" />
                                        Preview
                                    </Link>
                                    <Link
                                        href={`/admin/pages/${slug}`}
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium bg-cyan-600 hover:bg-cyan-700 text-white transition-colors shadow-sm"
                                    >
                                        <Pencil className="w-4 h-4" />
                                        Edit
                                    </Link>
                                </div>
                            </div>

                            {data?.seoTitle && (
                                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
                                    <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wide font-medium mb-1.5">SEO Preview</p>
                                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 leading-tight">{data.seoTitle}</p>
                                    {data.seoDescription && (
                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">{data.seoDescription}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
