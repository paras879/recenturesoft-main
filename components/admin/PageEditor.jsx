"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Save, Check, Globe, Plus, Trash2, AlertCircle, Eye, EyeOff, ArrowLeft,
    Settings, Image, Type, Target, Grid3X3, Sparkles,
    MessageSquare, HelpCircle, Code, ArrowUp, ArrowDown, Copy,
    PanelLeft, FileText
} from "lucide-react";

const ICON_OPTIONS = [
    "Share2", "TrendingUp", "Target", "BarChart3",
    "Smile", "Zap", "MapPin", "Users", "Crosshair",
    "Sparkles", "Globe", "Star", "Heart", "Bell",
    "Camera", "Clock", "Compass", "Cpu", "Crown",
    "DollarSign", "Eye", "Flag", "Gift", "Headphones",
    "Home", "Info", "Key", "Layers", "Lightbulb",
    "Link", "Lock", "Mail", "Map", "Mic",
    "Monitor", "Moon", "Music", "Phone", "Rocket",
    "Search", "Server", "Shield", "ShoppingCart", "Sun",
    "Tablet", "ThumbsUp", "Award", "BookOpen",
    "Briefcase", "Calendar", "CheckCircle", "Clipboard", "Cloud",
];

const SIDEBAR_ITEMS = [
    { id: "general",        label: "General Settings",    icon: Settings },
    { id: "banner",         label: "Banner Settings",     icon: Image },
    { id: "hero",           label: "Hero Section",        icon: Type },
    { id: "intro",          label: "Intro Section",       icon: FileText },
    { id: "approach",       label: "Strategic Approach",  icon: Target },
    { id: "features",       label: "Features / Services", icon: Grid3X3 },
    { id: "cta",            label: "CTA Section",         icon: Sparkles },
    { id: "contactForm",    label: "Contact Form",        icon: MessageSquare },
    { id: "faq",            label: "FAQ",                 icon: HelpCircle },
    { id: "seo",            label: "SEO",                 icon: Globe },
    { id: "schema",         label: "Schema & Open Graph", icon: Code },
    { id: "visibility",     label: "Visibility",          icon: Eye },
];

function InputField({ label, value, onChange, type = "text", placeholder = "", rows }) {
    const cls = "w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none text-slate-900 dark:text-white text-sm transition-all";
    return (
        <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</label>
            {rows ? (
                <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows} className={`${cls} resize-none`} />
            ) : (
                <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={cls} />
            )}
        </div>
    );
}

function ToggleSwitch({ label, value, onChange, description }) {
    return (
        <div className="flex items-center justify-between py-2 px-4 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-xl">
            <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</p>
                {description && <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>}
            </div>
            <button type="button" onClick={() => onChange(!value)}
                className={`relative w-11 h-6 rounded-full transition-colors ${value ? 'bg-cyan-600' : 'bg-slate-300 dark:bg-slate-700'}`}>
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${value ? 'translate-x-5' : ''}`} />
            </button>
        </div>
    );
}

function IconPicker({ value, onChange }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="space-y-1.5 relative">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Icon</label>
            <button type="button" onClick={() => setOpen(!open)}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white text-left flex items-center gap-2">
                {value || "Select icon..."}
            </button>
            {open && (
                <div className="absolute z-50 mt-1 w-full max-h-48 overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl shadow-lg p-2 grid grid-cols-4 gap-1">
                    {ICON_OPTIONS.map(icon => (
                        <button key={icon} type="button" onClick={() => { onChange(icon); setOpen(false); }}
                            className={`px-2 py-1.5 rounded-lg text-xs font-mono text-left hover:bg-cyan-50 dark:hover:bg-cyan-500/10 transition-colors ${value === icon ? 'bg-cyan-50 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' : 'text-slate-600 dark:text-slate-400'}`}>
                            {icon}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

function RepeaterCard({ card, index, onChange, onRemove, onDuplicate, onMoveUp, onMoveDown, isFirst, isLast, fields }) {
    return (
        <div className="border border-slate-200 dark:border-white/10 rounded-xl p-4 bg-slate-50/50 dark:bg-white/[0.02] flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Card {index + 1}</span>
                    <button type="button" onClick={() => onDuplicate(index)} className="p-1 rounded text-slate-400 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors" title="Duplicate"><Copy className="w-3.5 h-3.5" /></button>
                </div>
                <div className="flex items-center gap-1">
                    {!isFirst && <button type="button" onClick={() => onMoveUp(index)} className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"><ArrowUp className="w-3.5 h-3.5" /></button>}
                    {!isLast && <button type="button" onClick={() => onMoveDown(index)} className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"><ArrowDown className="w-3.5 h-3.5" /></button>}
                    <button type="button" onClick={() => onRemove(index)} className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <ToggleSwitch label="Visible" value={card.visible !== false} onChange={(v) => onChange(index, "visible", v)} />
            </div>
            {fields.map(field => (
                field.type === "icon" ? (
                    <IconPicker key={field.key} value={card[field.key] || ""} onChange={(v) => onChange(index, field.key, v)} />
                ) : (
                    <InputField key={field.key} label={field.label} value={card[field.key] || ""} onChange={(v) => onChange(index, field.key, v)} placeholder={field.placeholder} rows={field.rows} />
                )
            ))}
        </div>
    );
}

function Repeater({ items = [], onChange, fields, addLabel = "Add Item", defaultItem = {} }) {
    const addItem = () => { onChange([...items, { ...defaultItem, id: `item-${Date.now()}` }]); };
    const updateItem = (index, field, value) => { onChange(items.map((item, i) => i === index ? { ...item, [field]: value } : item)); };
    const removeItem = (index) => { onChange(items.filter((_, i) => i !== index)); };
    const duplicateItem = (index) => {
        const copy = { ...items[index], id: `item-${Date.now()}` };
        const updated = [...items]; updated.splice(index + 1, 0, copy); onChange(updated);
    };
    const moveUp = (index) => {
        if (index === 0) return;
        const updated = [...items]; [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]]; onChange(updated);
    };
    const moveDown = (index) => {
        if (index === items.length - 1) return;
        const updated = [...items]; [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]]; onChange(updated);
    };
    return (
        <div className="flex flex-col gap-4">
            {items.map((item, i) => (
                <RepeaterCard key={item.id || i} card={item} index={i} onChange={updateItem} onRemove={removeItem} onDuplicate={duplicateItem} onMoveUp={moveUp} onMoveDown={moveDown} isFirst={i === 0} isLast={i === items.length - 1} fields={fields} />
            ))}
            <button type="button" onClick={addItem} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-slate-300 dark:border-white/20 text-slate-600 dark:text-slate-400 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium"><Plus className="w-4 h-4" />{addLabel}</button>
        </div>
    );
}

export default function PageEditor({ pageData, slug }) {
    const router = useRouter();
    const [activeSection, setActiveSection] = useState("general");
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState("");

    const content = pageData?.content || {};

    // General
    const [status, setStatus] = useState(pageData?.status || "active");

    // SEO (stored at page level AND in content.seo for backward compat)
    const [seoTitle, setSeoTitle] = useState(pageData?.seoTitle || "");
    const [seoDescription, setSeoDescription] = useState(pageData?.seoDescription || "");

    // Banner Settings
    const [bannerImage, setBannerImage] = useState(content?.hero?.bannerImage || "/Banner/social_networking.webp");
    const [bannerOpacity, setBannerOpacity] = useState(content?.hero?.bannerOpacity ?? 70);

    // Hero Section
    const [heroTitle, setHeroTitle] = useState(content?.hero?.title || "SMO Company in India");
    const [heroHighlight, setHeroHighlight] = useState(content?.hero?.highlight || "");
    const [heroDescription, setHeroDescription] = useState(content?.hero?.description || "");
    const [heroCtaText, setHeroCtaText] = useState(content?.hero?.ctaText || "Get in Touch");
    const [heroCtaLink, setHeroCtaLink] = useState(content?.hero?.ctaLink || "");
    const [heroHideContactButton, setHeroHideContactButton] = useState(content?.hero?.hideContactButton || false);

    // Intro
    const [introVisible, setIntroVisible] = useState(content?.intro?.visible !== false);
    const [introTitle, setIntroTitle] = useState(content?.intro?.title || "Get Popular with an SMO Company in India");
    const [introHighlightText, setIntroHighlightText] = useState(content?.intro?.highlightText || "SMO Company");
    const [introDescription, setIntroDescription] = useState(content?.intro?.description || "With a plethora of social media platforms existing today, it\u2019s just next to impossible to manage all of them at the same time. That\u2019s where our SMM (Social Media Management) services come into the picture!");

    // Approach
    const [approachVisible, setApproachVisible] = useState(content?.approach?.visible !== false);
    const [approachTitle, setApproachTitle] = useState(content?.approach?.title || "Our Strategic Approach");
    const [approachDescription1, setApproachDescription1] = useState(content?.approach?.description1 || "Our SEM and SEO services are executed after fully knowing your specifications. At our company, our online marketing professionals work closely with you while delivering their social marketing campaigns.");
    const [approachDescription2, setApproachDescription2] = useState(content?.approach?.description2 || "We are considered as the trusted SEO/SMO service providers in India who can make you a leader in your field and build the best brand awareness for you.");
    const [approachCards, setApproachCards] = useState(content?.approach?.cards || [
        { icon: "Target", title: "Custom Strategies", description: "Tailored perfectly for your unique brand voice.", visible: true },
        { icon: "BarChart3", title: "Data-Driven", description: "Tracking customer behavior for maximum ROI.", visible: true },
    ]);

    // Features
    const [featuresVisible, setFeaturesVisible] = useState(content?.features?.visible !== false);
    const [featuresTitle, setFeaturesTitle] = useState(content?.features?.title || "Our SMO Offerings");
    const [featuresCards, setFeaturesCards] = useState(content?.features?.cards || [
        { icon: "Share2", title: "Social Media Management", description: "It\u2019s next to impossible to manage all platforms at the same time. We execute quality SMO services to strengthen your brand online.", visible: true },
        { icon: "Crosshair", title: "Targeted Automatons", description: "Use the best technology to improve your brand presence and deliver your brand\u2019s true message and value correctly.", visible: true },
        { icon: "TrendingUp", title: "Maximum ROI", description: "Aimed at enhancing the sales of our clients' business by creating highly customized strategies for their brand.", visible: true },
        { icon: "MapPin", title: "Local Maps & Optimization", description: "Proprietary technology and local maps integration that makes our clients' site outrank competitors in specific keyword searches.", visible: true },
        { icon: "Users", title: "Customer Tracking", description: "We track your customers' behavior continuously to maximize your Return on Investment and refine campaigns.", visible: true },
        { icon: "Smile", title: "Wipe Out Business Stress", description: "You would love working with us as we try to wipe out your business-related stress in one go. Experts always at your service.", visible: true },
    ]);

    // CTA
    const [ctaVisible, setCtaVisible] = useState(content?.cta?.visible !== false);
    const [ctaIcon, setCtaIcon] = useState(content?.cta?.icon || "Sparkles");
    const [ctaTitle, setCtaTitle] = useState(content?.cta?.title || "Working With Recenturesoft");
    const [ctaDescription, setCtaDescription] = useState(content?.cta?.description || "All our experts are at your service whenever you need any help. We work towards providing total satisfaction to our customers with our excellent work.");
    const [ctaButtonText, setCtaButtonText] = useState(content?.cta?.buttonText || "Get Started Today");
    const [ctaButtonLink, setCtaButtonLink] = useState(content?.cta?.buttonLink || "");

    // Contact Form
    const [contactFormVisible, setContactFormVisible] = useState(content?.contactForm?.visible !== false);
    const [contactFormTitle, setContactFormTitle] = useState(content?.contactForm?.title || "Interested in Social Networking?");
    const [contactFormDescription, setContactFormDescription] = useState(content?.contactForm?.description || "Fill out the form below and our experts will get back to you within 24 hours.");

    // FAQ
    const [faqVisible, setFaqVisible] = useState(content?.faq?.visible !== false);
    const [faqTitle, setFaqTitle] = useState(content?.faq?.title || "Frequently Asked Questions");
    const [faqDescription, setFaqDescription] = useState(content?.faq?.description || "Everything you need to know about our services and process.");

    // Schema
    const [schemaEnabled, setSchemaEnabled] = useState(content?.schema?.enabled !== false);
    const [schemaJson, setSchemaJson] = useState(content?.schema?.json ? JSON.stringify(content.schema.json, null, 2) : "");

    // OpenGraph
    const [ogEnabled, setOgEnabled] = useState(content?.openGraph?.enabled !== false);
    const [ogTitle, setOgTitle] = useState(content?.openGraph?.title || "");
    const [ogDescription, setOgDescription] = useState(content?.openGraph?.description || "");
    const [ogImage, setOgImage] = useState(content?.openGraph?.image || "");

    function tryParseJson(str) {
        try { return JSON.parse(str); } catch { return null; }
    }

    const buildContent = () => ({
        hero: {
            title: heroTitle,
            highlight: heroHighlight,
            description: heroDescription,
            bannerImage,
            bannerOpacity,
            ctaText: heroCtaText,
            ctaLink: heroCtaLink,
            hideContactButton: heroHideContactButton,
        },
        intro: { visible: introVisible, title: introTitle, highlightText: introHighlightText, description: introDescription },
        approach: { visible: approachVisible, title: approachTitle, description1: approachDescription1, description2: approachDescription2, cards: approachCards },
        features: { visible: featuresVisible, title: featuresTitle, cards: featuresCards },
        cta: { visible: ctaVisible, icon: ctaIcon, title: ctaTitle, description: ctaDescription, buttonText: ctaButtonText, buttonLink: ctaButtonLink },
        contactForm: { visible: contactFormVisible, title: contactFormTitle, description: contactFormDescription },
        faq: { visible: faqVisible, title: faqTitle, description: faqDescription },
        schema: { enabled: schemaEnabled, json: schemaJson ? tryParseJson(schemaJson) : null },
        openGraph: { enabled: ogEnabled, title: ogTitle, description: ogDescription, image: ogImage },
    });

    const handleSave = async () => {
        setSaving(true); setError(""); setSaved(false);
        try {
            const res = await fetch("/api/admin/pages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ slug, seoTitle, seoDescription, status, content: buildContent() }),
            });
            const data = await res.json();
            if (!res.ok || !data.success) throw new Error(data.error || "Save failed");
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (err) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    const statusOptions = [
        { value: "active", label: "Active (Public)", color: "text-emerald-600 dark:text-emerald-400" },
        { value: "inactive", label: "Inactive (Hidden)", color: "text-red-500 dark:text-red-400" },
    ];

    function renderSectionContent() {
        switch (activeSection) {

            case "general":
                return (
                    <div className="flex flex-col gap-5">
                        <div><h2 className="text-base font-semibold text-slate-900 dark:text-white">General Settings</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Basic page configuration.</p></div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Page Status</label>
                            <div className="flex gap-3">
                                {statusOptions.map((opt) => (
                                    <button key={opt.value} type="button" onClick={() => setStatus(opt.value)}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${status === opt.value ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400" : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20"}`}>
                                        {opt.value === "active" ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}{opt.label}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xs text-slate-400 dark:text-slate-500">Inactive pages return a 404 to visitors.</p>
                        </div>
                        <InputField label="Page Path" value={`/${slug}`} onChange={() => { }} placeholder="" />
                    </div>
                );

            case "banner":
                return (
                    <div className="flex flex-col gap-5">
                        <div><h2 className="text-base font-semibold text-slate-900 dark:text-white">Banner Settings</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Background image and overlay for the hero area.</p></div>
                        <InputField label="Banner Image URL" value={bannerImage} onChange={setBannerImage} placeholder="/Banner/social_networking.webp" />
                        <InputField label="Overlay Opacity (0-100)" type="number" value={bannerOpacity} onChange={(v) => setBannerOpacity(Number(v))} placeholder="70" />
                    </div>
                );

            case "hero":
                return (
                    <div className="flex flex-col gap-5">
                        <div><h2 className="text-base font-semibold text-slate-900 dark:text-white">Hero Section</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Title, highlight, description and CTA button.</p></div>
                        <InputField label="Hero Title" value={heroTitle} onChange={setHeroTitle} placeholder="SMO Company in India" />
                        <InputField label="Highlight Text" value={heroHighlight} onChange={setHeroHighlight} placeholder="Text with special styling (optional)" />
                        <InputField label="Hero Description" value={heroDescription} onChange={setHeroDescription} placeholder="Subtitle shown below hero title" rows={2} />
                        <InputField label="CTA Button Text" value={heroCtaText} onChange={setHeroCtaText} placeholder="Get in Touch" />
                        <InputField label="CTA Button Link" value={heroCtaLink} onChange={setHeroCtaLink} placeholder="/contact or #section-id" />
                        <ToggleSwitch label="Hide CTA Button" value={heroHideContactButton} onChange={setHeroHideContactButton} description="Hide the contact button in the hero section" />
                    </div>
                );

            case "intro":
                return (
                    <div className="flex flex-col gap-5">
                        <div><h2 className="text-base font-semibold text-slate-900 dark:text-white">Intro Section</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">The introductory text shown after the hero banner.</p></div>
                        <ToggleSwitch label="Show Intro Section" value={introVisible} onChange={setIntroVisible} />
                        <InputField label="Section Title" value={introTitle} onChange={setIntroTitle} placeholder="Get Popular with an SMO Company in India" />
                        <InputField label="Highlighted Text" value={introHighlightText} onChange={setIntroHighlightText} placeholder="SMO Company" />
                        <InputField label="Description" value={introDescription} onChange={setIntroDescription} placeholder="Intro paragraph text..." rows={4} />
                    </div>
                );

            case "approach":
                return (
                    <div className="flex flex-col gap-5">
                        <div><h2 className="text-base font-semibold text-slate-900 dark:text-white">Strategic Approach</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">The "Our Strategic Approach" section with cards.</p></div>
                        <ToggleSwitch label="Show Approach Section" value={approachVisible} onChange={setApproachVisible} />
                        <InputField label="Section Title" value={approachTitle} onChange={setApproachTitle} placeholder="Our Strategic Approach" />
                        <InputField label="Paragraph 1" value={approachDescription1} onChange={setApproachDescription1} placeholder="First paragraph..." rows={3} />
                        <InputField label="Paragraph 2" value={approachDescription2} onChange={setApproachDescription2} placeholder="Second paragraph..." rows={3} />
                        <div className="pt-2 border-t border-slate-100 dark:border-white/5">
                            <div className="flex items-center justify-between mb-3">
                                <div><h3 className="text-sm font-semibold text-slate-800 dark:text-white">Approach Cards</h3><p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Cards displayed on the right side.</p></div>
                            </div>
                            <Repeater items={approachCards} onChange={setApproachCards} fields={[
                                { key: "icon", label: "Icon", type: "icon" }, { key: "title", label: "Title", placeholder: "Card title" }, { key: "description", label: "Description", placeholder: "Short description", rows: 2 },
                            ]} addLabel="Add Card" defaultItem={{ icon: "Star", title: "", description: "", visible: true }} />
                        </div>
                    </div>
                );

            case "features":
                return (
                    <div className="flex flex-col gap-5">
                        <div><h2 className="text-base font-semibold text-slate-900 dark:text-white">Features / Services</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">The core feature cards (SMO Offerings).</p></div>
                        <ToggleSwitch label="Show Features Section" value={featuresVisible} onChange={setFeaturesVisible} />
                        <InputField label="Section Title" value={featuresTitle} onChange={setFeaturesTitle} placeholder="Our SMO Offerings" />
                        <div className="pt-2 border-t border-slate-100 dark:border-white/5">
                            <div className="flex items-center justify-between mb-3">
                                <div><h3 className="text-sm font-semibold text-slate-800 dark:text-white">Feature Cards</h3><p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Add, edit, reorder, or hide feature cards.</p></div>
                            </div>
                            <Repeater items={featuresCards} onChange={setFeaturesCards} fields={[
                                { key: "icon", label: "Icon", type: "icon" }, { key: "title", label: "Title", placeholder: "Feature title" }, { key: "description", label: "Description", placeholder: "Feature description", rows: 3 },
                            ]} addLabel="Add Feature Card" defaultItem={{ icon: "Star", title: "", description: "", visible: true }} />
                        </div>
                    </div>
                );

            case "cta":
                return (
                    <div className="flex flex-col gap-5">
                        <div><h2 className="text-base font-semibold text-slate-900 dark:text-white">CTA Section</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">The call-to-action section.</p></div>
                        <ToggleSwitch label="Show CTA Section" value={ctaVisible} onChange={setCtaVisible} />
                        <IconPicker value={ctaIcon} onChange={setCtaIcon} />
                        <InputField label="Title" value={ctaTitle} onChange={setCtaTitle} placeholder="Working With Recenturesoft" />
                        <InputField label="Description" value={ctaDescription} onChange={setCtaDescription} placeholder="CTA description text..." rows={3} />
                        <InputField label="Button Text" value={ctaButtonText} onChange={setCtaButtonText} placeholder="Get Started Today" />
                        <InputField label="Button Link" value={ctaButtonLink} onChange={setCtaButtonLink} placeholder="/contact or URL" />
                    </div>
                );

            case "contactForm":
                return (
                    <div className="flex flex-col gap-5">
                        <div><h2 className="text-base font-semibold text-slate-900 dark:text-white">Contact Form</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">The inquiry form section.</p></div>
                        <ToggleSwitch label="Show Contact Form" value={contactFormVisible} onChange={setContactFormVisible} />
                        <InputField label="Section Title" value={contactFormTitle} onChange={setContactFormTitle} placeholder="Interested in Social Networking?" />
                        <InputField label="Section Description" value={contactFormDescription} onChange={setContactFormDescription} placeholder="Fill out the form below..." rows={2} />
                        <InputField label="Service Name (pre-filled)" value="Social Networking" onChange={() => { }} placeholder="Social Networking" />
                    </div>
                );

            case "faq":
                return (
                    <div className="flex flex-col gap-5">
                        <div><h2 className="text-base font-semibold text-slate-900 dark:text-white">FAQ</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Configure the FAQ section title and visibility.</p></div>
                        <ToggleSwitch label="Show FAQ Section" value={faqVisible} onChange={setFaqVisible} />
                        <InputField label="Section Title" value={faqTitle} onChange={setFaqTitle} placeholder="Frequently Asked Questions" />
                        <InputField label="Section Description" value={faqDescription} onChange={setFaqDescription} placeholder="FAQ section subtitle..." rows={2} />
                    </div>
                );

            case "seo":
                return (
                    <div className="flex flex-col gap-5">
                        <div><h2 className="text-base font-semibold text-slate-900 dark:text-white">SEO</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Control how this page appears in search engines.</p></div>
                        <InputField label="SEO Title" value={seoTitle} onChange={setSeoTitle} placeholder="e.g. SMO Company In India | RecentureSoft" />
                        <InputField label="SEO Description" value={seoDescription} onChange={setSeoDescription} placeholder="Brief description shown in search results (150-160 chars recommended)" rows={3} />
                        <InputField label="Canonical URL" value={`/${slug}`} onChange={() => { }} placeholder="/social-networking" />
                    </div>
                );

            case "schema":
                return (
                    <div className="flex flex-col gap-5">
                        <div><h2 className="text-base font-semibold text-slate-900 dark:text-white">Schema & Open Graph</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Structured data and social sharing settings.</p></div>
                        <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-white/5">
                            <h3 className="text-sm font-semibold text-slate-800 dark:text-white">Schema.org JSON-LD</h3>
                            <ToggleSwitch label="Enable Schema Markup" value={schemaEnabled} onChange={setSchemaEnabled} />
                            <InputField label="Schema JSON" value={schemaJson} onChange={setSchemaJson} placeholder='{"@context": "https://schema.org", ...}' rows={8} />
                        </div>
                        <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-white/5">
                            <h3 className="text-sm font-semibold text-slate-800 dark:text-white">Open Graph</h3>
                            <ToggleSwitch label="Enable Open Graph" value={ogEnabled} onChange={setOgEnabled} />
                            <InputField label="OG Title" value={ogTitle} onChange={setOgTitle} placeholder="Custom social share title" />
                            <InputField label="OG Description" value={ogDescription} onChange={setOgDescription} placeholder="Custom social share description" rows={2} />
                            <InputField label="OG Image URL" value={ogImage} onChange={setOgImage} placeholder="https://example.com/social-preview.jpg" />
                        </div>
                    </div>
                );

            case "visibility":
                return (
                    <div className="flex flex-col gap-5">
                        <div><h2 className="text-base font-semibold text-slate-900 dark:text-white">Visibility</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Show or hide individual sections on the page.</p></div>
                        <ToggleSwitch label="Intro Section" value={introVisible} onChange={setIntroVisible} />
                        <ToggleSwitch label="Strategic Approach Section" value={approachVisible} onChange={setApproachVisible} />
                        <ToggleSwitch label="Features / Services Section" value={featuresVisible} onChange={setFeaturesVisible} />
                        <ToggleSwitch label="CTA Section" value={ctaVisible} onChange={setCtaVisible} />
                        <ToggleSwitch label="Contact Form" value={contactFormVisible} onChange={setContactFormVisible} />
                        <ToggleSwitch label="FAQ Section" value={faqVisible} onChange={setFaqVisible} />
                    </div>
                );

            default:
                return null;
        }
    }

    return (
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 pb-12">
            {/* Header */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                    <button onClick={() => router.push("/admin/pages")} className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center">
                            <PanelLeft className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Edit Page</h1>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">/{slug}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                        {status === "active" ? <Eye className="w-4 h-4 text-emerald-500" /> : <EyeOff className="w-4 h-4 text-red-500" />}
                        <span className={`text-xs font-medium ${status === "active" ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}>{status === "active" ? "Live" : "Hidden"}</span>
                    </div>
                    <button onClick={handleSave} disabled={saving}
                        className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 text-white rounded-xl text-sm font-medium transition-all shadow-sm">
                        {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                        {saving ? "Saving..." : saved ? "Saved!" : "Save All Changes"}
                    </button>
                </div>
            </div>

            {/* Error */}
            {error && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />{error}
                </div>
            )}

            {/* Main Layout: Sidebar + Content */}
            <div className="flex gap-6">
                {/* LEFT SIDEBAR */}
                <div className="w-56 flex-shrink-0 flex flex-col gap-1 p-2 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm h-fit sticky top-24">
                    {SIDEBAR_ITEMS.map(({ id, label, icon: ItemIcon }) => (
                        <button key={id} onClick={() => setActiveSection(id)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${activeSection === id
                                ? "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200/50 dark:border-cyan-500/20 shadow-sm"
                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white border border-transparent"
                                }`}>
                            <ItemIcon className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate">{label}</span>
                        </button>
                    ))}
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-sm min-h-[400px]">
                    {renderSectionContent()}
                </div>
            </div>

            {/* Bottom Save */}
            <div className="flex items-center justify-end gap-3">
                <button onClick={() => router.push("/admin/pages")} className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">Cancel</button>
                <button onClick={handleSave} disabled={saving}
                    className="flex items-center gap-2 px-6 py-2.5 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 text-white rounded-xl text-sm font-medium transition-all shadow-sm">
                    {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                    {saving ? "Saving..." : saved ? "Changes Saved!" : "Save All Changes"}
                </button>
            </div>
        </div>
    );
}
