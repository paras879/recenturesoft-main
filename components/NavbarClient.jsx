"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { Code, Globe, ShoppingCart, Smartphone, Cpu, TrendingUp, ChevronRight } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Events", href: "/events" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
];

const solutionsMenu = [
    {
        title: "Software Development",
        icon: Code,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        items: [
            { name: "CRM", href: "/crm" },
            { name: "CMS", href: "/cms" },
            { name: "Salesforce", href: "/salesforce" },
            { name: "Dashboard", href: "/dashboard" },
        ]
    },
    {
        title: "Web Development",
        icon: Globe,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        items: [
            { name: "Next JS", href: "/next-js" },
            { name: "React", href: "/react" },
            { name: "Web Design", href: "/web-design" },
        ]
    },
    {
        title: "E-Commerce",
        icon: ShoppingCart,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        items: [
            { name: "OpenCart Development", href: "/opencart-development" },
            { name: "Magento", href: "/magento-development" },
            { name: "eBay Store", href: "/ebay-store-management" },
            { name: "Amazon Store", href: "/amazon-store-management" },
            { name: "WordPress", href: "/wordpress-development-customization" },
        ]
    },
    {
        title: "Mobile App Development",
        icon: Smartphone,
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        items: [
            { name: "iPhone Apps", href: "/iphone-apps-development" },
            { name: "iPad Apps", href: "/ipad-app-development" },
            { name: "Android Apps", href: "/android-application-development" },
        ]
    },
    {
        title: "Technology Solution",
        icon: Cpu,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        items: [
            { name: "Node JS", href: "/node-js" },
            { name: "React Native", href: "/react-native" },
        ]
    },
    {
        title: "Digital Marketing",
        icon: TrendingUp,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        items: [
            { name: "SEO Service", href: "/seo-service" },
            { name: "SEO Package", href: "/seo-package" },
            { name: "Social Networking", href: "/social-networking" },
            { name: "Content Writing", href: "/content-writing" },
            { name: "AI SEO", href: "/ai-seo" },
        ]
    }
];

export default function NavbarClient({ logoUrl = "/Logo.png", inactivePaths = [] }) {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState("");
    const pathname = usePathname();

    // Filter dynamic navigation based on active DB status
    const isPathActive = (path) => !inactivePaths.includes(path);
    
    const activeNavLinks = navLinks.filter(link => isPathActive(link.href));
    
    // Filter solutions menu categories and their items
    const activeSolutionsMenu = solutionsMenu.map(category => ({
        ...category,
        items: category.items.filter(item => isPathActive(item.href))
    })).filter(category => category.items.length > 0);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => { document.body.style.overflow = "auto"; };
    }, [isMobileMenuOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 z-[9999] px-2 sm:px-4 lg:px-6 py-2">
            <nav className="max-w-7xl mx-auto bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl border border-white/30 dark:border-white/10 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300">
                <div className="px-4 lg:px-8 h-14 lg:h-16 flex items-center justify-between relative">

                    {/* ════ LOGO AREA ════ */}
                    <Link
                        href="/"
                        prefetch={true}
                        className="flex items-center gap-2 group"
                    >
                        <span className="text-[clamp(1rem,4vw,1.25rem)] font-bold tracking-wider text-slate-800 dark:text-white transition-colors duration-300 group-hover:text-primary dark:group-hover:text-cyan-400 flex-shrink-0">
                            <img src={logoUrl} alt="RecentureSoft Logo" width="140" height="56" className="h-12 md:h-14 w-auto object-contain drop-shadow-sm" />
                        </span>
                    </Link>

                    {/* ════ DESKTOP NAV LINKS ════ */}
                    <ul className="hidden lg:flex items-center gap-1">
                        {activeNavLinks.map((link) => (
                            <li
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => setHoveredLink(link.name)}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                {link.name === "Solutions" ? (
                                    <span
                                        className="relative px-3 py-2 text-sm font-medium tracking-wide text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 z-10 flex items-center gap-1 cursor-default select-none"
                                    >
                                        {link.name}
                                        <svg 
                                            className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredLink === "Solutions" ? "-rotate-180" : ""}`} 
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                ) : (
                                    <Link
                                        href={link.href}
                                        prefetch={true}
                                        className="relative px-3 py-2 text-sm font-medium tracking-wide text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 z-10 flex items-center gap-1"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                                {hoveredLink === link.name && link.name !== "Solutions" && (
                                        <div
                                            className="absolute inset-0 bg-slate-100 dark:bg-white/10 rounded-full z-0"
                                        />
                                    )}

                                {/* ════ SOLUTIONS MEGA MENU ════ */}
                                {link.name === "Solutions" && hoveredLink === "Solutions" && (
                                            <div
                                                className="absolute top-full left-1/2 -translate-x-[25%] pt-6 cursor-default"
                                                style={{ width: "min(960px, calc(100vw - 2rem))" }}
                                            >
                                                <div className="bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-3xl border border-slate-200/60 dark:border-white/[0.08] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] rounded-[2rem] p-7 overflow-hidden relative group/menu">
                                                    
                                                    {/* Glowing ambient background inside menu */}
                                                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
                                                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />
                                                    
                                                    {/* Top gradient border accent */}
                                                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 opacity-90" />

                                                    <div className="grid grid-cols-3 gap-x-12 gap-y-8 relative z-10">
                                                        {activeSolutionsMenu.map((category, idx) => {
                                                            const Icon = category.icon;
                                                            return (
                                                                <div key={idx} className="flex flex-col group/cat">
                                                                    <div className="flex items-center gap-3 mb-3">
                                                                        <div className={`w-9 h-9 rounded-xl ${category.bg} flex items-center justify-center border border-black/5 dark:border-white/5 transition-transform duration-300 group-hover/cat:scale-110 shadow-sm`}>
                                                                            <Icon className={`w-4 h-4 ${category.color}`} />
                                                                        </div>
                                                                        <h3 className="text-slate-900 dark:text-white font-bold text-[14.5px] tracking-wide">
                                                                            {category.title}
                                                                        </h3>
                                                                    </div>
                                                                    <ul className="space-y-1 pl-[3.25rem]">
                                                                        {category.items.map((item, itemIdx) => (
                                                                            <li key={itemIdx}>
                                                                                <Link 
                                                                                    href={item.href} 
                                                                                    className="group/item flex items-center gap-2 text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 text-sm font-medium transition-all duration-300 hover:translate-x-1 py-1"
                                                                                >
                                                                                    {item.name}
                                                                                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-cyan-500" />
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* ════ DESKTOP CTA BUTTON & THEME TOGGLE ════ */}
                    <div className="hidden lg:flex items-center gap-4">
                        <ThemeToggle />
                        {isPathActive("/contact") && (
                            <button className="relative group px-6 py-3.5 rounded-full min-h-[44px] overflow-hidden font-semibold text-sm text-white shadow-lg shadow-cyan-500/20 hover:scale-105 hover:shadow-cyan-500/40 transition-all duration-300">
                                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent dark:from-cyan-500 dark:to-indigo-600 transition-transform duration-300 group-hover:scale-105" />
                                <Link href="/contact" prefetch={true} className="relative z-10">Get A Quote</Link>
                            </button>
                        )}
                    </div>

                    {/* ════ MOBILE/TABLET CONTROLS (<1024px) ════ */}
                    <div className="flex lg:hidden items-center gap-3">
                        <ThemeToggle />
                        {/* Quote Button */}
                        {isPathActive("/contact") && (
                            <Link
                                href="/contact"
                                prefetch={true}
                                className="hidden sm:inline-block px-4 py-2 bg-gradient-to-r from-primary to-accent dark:from-cyan-500 dark:to-indigo-600 rounded-full font-bold text-sm text-white shadow-md shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
                            >
                                Quote
                            </Link>
                        )}

                        {/* Hamburger Button */}
                        <button
                            aria-label="Menu"
                            className="relative z-50 p-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* ════ FULL SCREEN MOBILE DRAWER ════ */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-slate-900/40 dark:bg-black/60 backdrop-blur-xl lg:hidden flex justify-end"
                    >
                        {/* Drawer content */}
                        <div
                            className="w-[85vw] max-w-[320px] sm:w-[320px] sm:max-w-none h-full bg-white dark:bg-[#020617] sm:border-l border-slate-200 dark:border-white/10 p-4 sm:p-5 flex flex-col"
                        >
                            {/* Header inside drawer - STICKY */}
                            <div className="sticky top-0 z-10 flex justify-between items-center bg-white dark:bg-[#020617] pb-3 border-b border-slate-200 dark:border-white/5 mb-4 pt-1">
                                <span className="text-sm font-bold tracking-widest text-slate-500 dark:text-gray-400 uppercase">
                                    Navigation
                                </span>
                                <button
                                    className="p-2.5 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors touch-manipulation"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-label="Close menu"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Menu Links */}
                            <div className="flex flex-col gap-1 overflow-y-auto pb-4 scrollbar-hide">
                                {activeNavLinks.map((link, i) => {
                                    const isActive = pathname === link.href;

                                    if (link.name === "Solutions") {
                                        return (
                                            <div key={link.name} className="flex flex-col">
                                                <button
                                                    className={`text-base font-medium transition-all duration-300 w-full flex items-center justify-between px-3 py-2.5 rounded-lg active:scale-[0.98] ${isActive ? "bg-primary/10 dark:bg-cyan-500/10 text-primary dark:text-cyan-400" : "text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"}`}
                                                    onClick={() => setMobileExpanded(mobileExpanded === "Solutions" ? "" : "Solutions")}
                                                >
                                                    {link.name}
                                                    <svg className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === "Solutions" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                {mobileExpanded === "Solutions" && (
                                                        <div
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pl-6 py-2 flex flex-col gap-4">
                                                                {activeSolutionsMenu.map((cat, idx) => (
                                                                    <div key={idx}>
                                                                        <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase mb-2">{cat.title}</h4>
                                                                        <ul className="flex flex-col gap-2">
                                                                            {cat.items.map((item, itemIdx) => (
                                                                                <li key={itemIdx}>
                                                                                    <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-slate-600 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                                                                                        {item.name}
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                )}
                                            </div>
                                        );
                                    }

                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            prefetch={true}
                                            className={`text-base font-medium transition-all duration-300 block px-3 py-2.5 rounded-lg active:scale-[0.98] ${isActive ? "bg-primary/10 dark:bg-cyan-500/10 text-primary dark:text-cyan-400" : "text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <div
                                                className="flex items-center justify-between"
                                            >
                                                {link.name}
                                                {isActive && (
                                                    <div
                                                        className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-cyan-400 shadow-[0_0_8px_rgba(14,165,233,0.5)] dark:shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                                    />
                                                )}
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>

                            <div
                                className="mt-auto pt-4 border-t border-slate-200 dark:border-white/5"
                            >
                                <Link href="/contact" className="w-full relative group px-4 py-3 rounded-lg overflow-hidden font-bold text-white shadow-lg shadow-primary/20 dark:shadow-cyan-500/20 block text-center active:scale-[0.98] transition-transform" onClick={() => setIsMobileMenuOpen(false)}>
                                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent dark:from-cyan-500 dark:to-indigo-600" />
                                    <span className="relative z-10">Get A Quote</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
        </header>
    );
}
