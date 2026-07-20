"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Save, Check, Globe, FileText, ChevronDown, ChevronUp,
    Plus, Trash2, AlertCircle, Eye, EyeOff, ArrowLeft,
    Shield, Cookie, Scale
} from "lucide-react";

const PAGE_META = {
    "/privacy-policy": {
        label: "Privacy Policy",
        icon: Shield,
        color: "blue",
        defaultContent: {
            lastUpdated: "",
            heroDesc: "We believe in full transparency. Learn exactly how we collect, use, and protect your personal information.",
        },
    },
    "/terms": {
        label: "Terms of Service",
        icon: Scale,
        color: "violet",
        defaultContent: {
            lastUpdated: "",
            heroDesc: "Please read these terms carefully before using our services. They outline your rights and responsibilities.",
            SECTIONS: [],
        },
    },
    "/cookies": {
        label: "Cookies Policy",
        icon: Cookie,
        color: "amber",
        defaultContent: {
            lastUpdated: "",
            heroTitle: "Cookies Policy",
            heroDesc: "We use cookies to improve your experience. Learn how you can manage your preferences.",
            sections: [],
            faqs: [],
        },
    },
};

function InputField({ label, value, onChange, type = "text", placeholder = "", rows }) {
    const cls = "w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none text-slate-900 dark:text-white text-sm transition-all";
    return (
        <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
            {rows ? (
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    rows={rows}
                    className={`${cls} resize-none`}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={cls}
                />
            )}
        </div>
    );
}

function SectionEditor({ sections = [], onChange, type = "sections" }) {
    const addSection = () => {
        onChange([
            ...sections,
            { id: `section-${Date.now()}`, title: "", htmlContent: "" },
        ]);
    };

    const updateSection = (index, field, value) => {
        const updated = sections.map((s, i) =>
            i === index ? { ...s, [field]: value } : s
        );
        onChange(updated);
    };

    const removeSection = (index) => {
        onChange(sections.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col gap-4">
            {sections.map((section, i) => (
                <div
                    key={section.id || i}
                    className="border border-slate-200 dark:border-white/10 rounded-xl p-4 bg-slate-50/50 dark:bg-white/[0.02] flex flex-col gap-3"
                >
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                            Section {i + 1}
                        </span>
                        <button
                            type="button"
                            onClick={() => removeSection(i)}
                            className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                    <InputField
                        label="Section Title"
                        value={section.title || ""}
                        onChange={(v) => updateSection(i, "title", v)}
                        placeholder="e.g. 1. Introduction"
                    />
                    <InputField
                        label="Content (HTML allowed)"
                        value={section.htmlContent || ""}
                        onChange={(v) => updateSection(i, "htmlContent", v)}
                        placeholder="<p>Enter section content here...</p>"
                        rows={5}
                    />
                    <InputField
                        label="Section ID (URL anchor)"
                        value={section.id || ""}
                        onChange={(v) => updateSection(i, "id", v)}
                        placeholder="e.g. introduction"
                    />
                </div>
            ))}
            <button
                type="button"
                onClick={addSection}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-slate-300 dark:border-white/20 text-slate-600 dark:text-slate-400 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
            >
                <Plus className="w-4 h-4" />
                Add Section
            </button>
        </div>
    );
}

function FaqEditor({ faqs = [], onChange }) {
    const addFaq = () => {
        onChange([...faqs, { question: "", answer: "" }]);
    };

    const updateFaq = (index, field, value) => {
        const updated = faqs.map((f, i) =>
            i === index ? { ...f, [field]: value } : f
        );
        onChange(updated);
    };

    const removeFaq = (index) => {
        onChange(faqs.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
                <div
                    key={i}
                    className="border border-slate-200 dark:border-white/10 rounded-xl p-4 bg-slate-50/50 dark:bg-white/[0.02] flex flex-col gap-3"
                >
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                            FAQ {i + 1}
                        </span>
                        <button
                            type="button"
                            onClick={() => removeFaq(i)}
                            className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                    <InputField
                        label="Question"
                        value={faq.question || ""}
                        onChange={(v) => updateFaq(i, "question", v)}
                        placeholder="e.g. Are you GDPR compliant?"
                    />
                    <InputField
                        label="Answer"
                        value={faq.answer || ""}
                        onChange={(v) => updateFaq(i, "answer", v)}
                        placeholder="Enter answer here..."
                        rows={3}
                    />
                </div>
            ))}
            <button
                type="button"
                onClick={addFaq}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-slate-300 dark:border-white/20 text-slate-600 dark:text-slate-400 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
            >
                <Plus className="w-4 h-4" />
                Add FAQ
            </button>
        </div>
    );
}

export default function LegalPageEditor({ pageData, slug }) {
    const router = useRouter();

    const pathMap = {
        "privacy-policy": "/privacy-policy",
        "terms": "/terms",
        "cookies": "/cookies",
    };
    const pagePath = pathMap[slug];
    const meta = PAGE_META[pagePath];
    const Icon = meta?.icon || FileText;

    const [activeTab, setActiveTab] = useState("seo");
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState("");

    // SEO fields
    const [seoTitle, setSeoTitle] = useState(pageData?.seoTitle || meta?.label || "");
    const [seoDescription, setSeoDescription] = useState(pageData?.seoDescription || "");
    const [status, setStatus] = useState(pageData?.status || "active");

    // Content fields
    const defaultContent = meta?.defaultContent || {};
    const [lastUpdated, setLastUpdated] = useState(pageData?.content?.lastUpdated || "");
    const [heroTitle, setHeroTitle] = useState(pageData?.content?.heroTitle || meta?.label || "");
    const [heroDesc, setHeroDesc] = useState(pageData?.content?.heroDesc || defaultContent.heroDesc || "");

    // Terms sections
    const [termsSections, setTermsSections] = useState(pageData?.content?.SECTIONS || []);

    // Cookies sections & FAQs
    const [cookiesSections, setCookiesSections] = useState(pageData?.content?.sections || []);
    const [cookiesFaqs, setCookiesFaqs] = useState(pageData?.content?.faqs || []);

    const buildContent = () => {
        if (pagePath === "/privacy-policy") {
            return { lastUpdated, heroDesc };
        }
        if (pagePath === "/terms") {
            return { lastUpdated, heroDesc, SECTIONS: termsSections };
        }
        if (pagePath === "/cookies") {
            return { lastUpdated, heroTitle, heroDesc, sections: cookiesSections, faqs: cookiesFaqs };
        }
        return {};
    };

    const handleSave = async () => {
        setSaving(true);
        setError("");
        setSaved(false);
        try {
            const res = await fetch("/api/admin/legal", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    path: pagePath,
                    seoTitle,
                    seoDescription,
                    status,
                    content: buildContent(),
                }),
            });
            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.error || "Save failed");
            }
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (err) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    const tabs = [
        { id: "seo", label: "SEO Settings", icon: Globe },
        { id: "content", label: "Content Editor", icon: FileText },
    ];

    const statusOptions = [
        { value: "active", label: "Active (Public)", color: "text-emerald-600 dark:text-emerald-400" },
        { value: "inactive", label: "Inactive (Hidden)", color: "text-red-500 dark:text-red-400" },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 pb-12">
            {/* Header */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.push("/admin/legal")}
                        className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                                Edit {meta?.label}
                            </h1>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                                {pagePath}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* Status Badge */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                        {status === "active" ? (
                            <Eye className="w-4 h-4 text-emerald-500" />
                        ) : (
                            <EyeOff className="w-4 h-4 text-red-500" />
                        )}
                        <span className={`text-xs font-medium ${status === "active" ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}>
                            {status === "active" ? "Live" : "Hidden"}
                        </span>
                    </div>

                    {/* Save Button */}
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 text-white rounded-xl text-sm font-medium transition-all shadow-sm"
                    >
                        {saving ? (
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : saved ? (
                            <Check className="w-4 h-4" />
                        ) : (
                            <Save className="w-4 h-4" />
                        )}
                        {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
                    </button>
                </div>
            </div>

            {/* Error */}
            {error && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                </div>
            )}

            {/* Tabs */}
            <div className="flex gap-1 p-1 bg-slate-100 dark:bg-white/5 rounded-xl w-fit">
                {tabs.map(({ id, label, icon: TabIcon }) => (
                    <button
                        key={id}
                        onClick={() => setActiveTab(id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            activeTab === id
                                ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                                : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white"
                        }`}
                    >
                        <TabIcon className="w-4 h-4" />
                        {label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm flex flex-col gap-6">

                {/* SEO TAB */}
                {activeTab === "seo" && (
                    <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-bottom-2 duration-200">
                        <div>
                            <h2 className="text-base font-semibold text-slate-900 dark:text-white">SEO Settings</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Control how this page appears in search engines.</p>
                        </div>

                        <InputField
                            label="SEO Title"
                            value={seoTitle}
                            onChange={setSeoTitle}
                            placeholder="e.g. Privacy Policy | RecentureSoft"
                        />

                        <InputField
                            label="SEO Description"
                            value={seoDescription}
                            onChange={setSeoDescription}
                            placeholder="Brief description shown in search results (150-160 chars recommended)"
                            rows={3}
                        />

                        {/* Status */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Page Status</label>
                            <div className="flex gap-3">
                                {statusOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setStatus(opt.value)}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                                            status === opt.value
                                                ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400"
                                                : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20"
                                        }`}
                                    >
                                        {opt.value === "active" ? (
                                            <Eye className="w-4 h-4" />
                                        ) : (
                                            <EyeOff className="w-4 h-4" />
                                        )}
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-slate-400 dark:text-slate-500">
                                Inactive pages return a 404 to visitors.
                            </p>
                        </div>
                    </div>
                )}

                {/* CONTENT TAB */}
                {activeTab === "content" && (
                    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
                        <div>
                            <h2 className="text-base font-semibold text-slate-900 dark:text-white">Content Editor</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Edit the page content displayed to visitors.</p>
                        </div>

                        {/* Common: Last Updated Date */}
                        <InputField
                            label="Last Updated Date"
                            value={lastUpdated}
                            onChange={setLastUpdated}
                            placeholder="e.g. July 20, 2026"
                        />

                        {/* Common: Hero Description */}
                        <InputField
                            label="Hero Description (Subtitle)"
                            value={heroDesc}
                            onChange={setHeroDesc}
                            placeholder="Short tagline shown below the page title"
                            rows={2}
                        />

                        {/* Cookies-only: Hero Title */}
                        {pagePath === "/cookies" && (
                            <InputField
                                label="Page Title (shown on page)"
                                value={heroTitle}
                                onChange={setHeroTitle}
                                placeholder="e.g. Cookies Policy"
                            />
                        )}

                        {/* Terms: Sections */}
                        {pagePath === "/terms" && (
                            <div className="flex flex-col gap-3 pt-2 border-t border-slate-100 dark:border-white/5">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-800 dark:text-white">Page Sections</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Each section maps to a numbered entry in the Terms of Service.</p>
                                </div>
                                <SectionEditor
                                    sections={termsSections}
                                    onChange={setTermsSections}
                                />
                            </div>
                        )}

                        {/* Cookies: Sections */}
                        {pagePath === "/cookies" && (
                            <div className="flex flex-col gap-3 pt-2 border-t border-slate-100 dark:border-white/5">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-800 dark:text-white">Policy Sections</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Each section appears as a numbered entry in the Cookies Policy.</p>
                                </div>
                                <SectionEditor
                                    sections={cookiesSections}
                                    onChange={setCookiesSections}
                                />
                            </div>
                        )}

                        {/* Cookies: FAQs */}
                        {pagePath === "/cookies" && (
                            <div className="flex flex-col gap-3 pt-2 border-t border-slate-100 dark:border-white/5">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-800 dark:text-white">FAQs</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Frequently asked questions displayed at the bottom of the page.</p>
                                </div>
                                <FaqEditor faqs={cookiesFaqs} onChange={setCookiesFaqs} />
                            </div>
                        )}

                        {/* Privacy-only note */}
                        {pagePath === "/privacy-policy" && (
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-sm text-blue-800 dark:text-blue-300">
                                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-500" />
                                <span>
                                    The Privacy Policy sections (Introduction, User Rights, etc.) are structured and hardcoded for legal integrity. You can edit the <strong>Last Updated date</strong> and <strong>subtitle</strong> above. For full section edits, update the source component directly.
                                </span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Bottom Save */}
            <div className="flex items-center justify-end gap-3">
                <button
                    onClick={() => router.push("/admin/legal")}
                    className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-2.5 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 text-white rounded-xl text-sm font-medium transition-all shadow-sm"
                >
                    {saving ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : saved ? (
                        <Check className="w-4 h-4" />
                    ) : (
                        <Save className="w-4 h-4" />
                    )}
                    {saving ? "Saving..." : saved ? "Changes Saved!" : "Save Changes"}
                </button>
            </div>
        </div>
    );
}
