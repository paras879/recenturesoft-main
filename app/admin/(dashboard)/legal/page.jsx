import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";
import Link from "next/link";
import { Shield, Scale, Cookie, Pencil, Eye, EyeOff, CheckCircle2, XCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Legal Pages | Admin Panel",
};

const LEGAL_PAGES = [
    {
        path: "/privacy-policy",
        slug: "privacy-policy",
        label: "Privacy Policy",
        description: "How we collect, use and protect user data.",
        icon: Shield,
        accent: "cyan",
    },
    {
        path: "/terms",
        slug: "terms",
        label: "Terms of Service",
        description: "The terms and conditions for using our services.",
        icon: Scale,
        accent: "violet",
    },
    {
        path: "/cookies",
        slug: "cookies",
        label: "Cookies Policy",
        description: "How we use cookies and tracking technologies.",
        icon: Cookie,
        accent: "amber",
    },
];

const defaults = {
    "/privacy-policy": { seoTitle: "Privacy Policy | RecentureSoft", seoDescription: "Our privacy policy and how we handle your data securely.", status: "active" },
    "/terms": { seoTitle: "Terms of Service | RecentureSoft", seoDescription: "Our terms of service.", status: "active" },
    "/cookies": { seoTitle: "Cookies Policy | RecentureSoft", seoDescription: "Our cookies policy and how we use them.", status: "active" },
};

const accentClasses = {
    cyan: "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    violet: "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400",
    amber: "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

export default async function LegalPagesAdminPage() {
    await connectDB();
    const dbPages = await WebPage.find({
        path: { $in: LEGAL_PAGES.map((p) => p.path) },
    }).lean();

    const pageMap = {};
    dbPages.forEach((p) => {
        pageMap[p.path] = JSON.parse(JSON.stringify(p));
    });

    return (
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-8 pb-12">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Legal Pages</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    Manage SEO metadata and content for Privacy Policy, Terms of Service, and Cookies Policy.
                </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-4">
                {LEGAL_PAGES.map(({ path, slug, label, description, icon: Icon, accent }) => {
                    const data = pageMap[path] || defaults[path];
                    const isActive = data.status === "active";
                    const lastUpdated = data?.content?.lastUpdated;

                    return (
                        <div
                            key={path}
                            className="group bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200"
                        >
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                {/* Left: Icon + Info */}
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${accentClasses[accent]}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                                                {label}
                                            </h2>
                                            <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                                                isActive
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

                                {/* Right: Actions */}
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
                                        href={`/admin/legal/${slug}`}
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium bg-cyan-600 hover:bg-cyan-700 text-white transition-colors shadow-sm"
                                    >
                                        <Pencil className="w-4 h-4" />
                                        Edit
                                    </Link>
                                </div>
                            </div>

                            {/* SEO Preview */}
                            {data.seoTitle && (
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

            {/* Info Box */}
            <div className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-cyan-500" />
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Legal Page Management</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Changes to SEO settings take effect immediately. Setting a page to <strong>Inactive</strong> will return a 404 to all visitors. Content changes update on the next page load.
                    </p>
                </div>
            </div>
        </div>
    );
}
