"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MapPin, Shield, ChevronDown, ArrowRight, ChevronRight, MessageSquare, Calendar } from 'lucide-react';
import { useProjectModal } from "@/components/providers/ProjectModalProvider";
import { useMeetingModal } from "@/components/providers/MeetingModalProvider";

const SECTION_CONFIG = {
    information: {
        title: "Information",
        icon: Globe,
        gradient: "from-blue-500 to-cyan-400",
        iconBg: "bg-blue-50 dark:bg-blue-500/10",
        iconColor: "text-blue-600 dark:text-blue-400",
        accent: "from-blue-500 to-cyan-400",
        linkHover: "group-hover/link:text-blue-600 dark:group-hover/link:text-cyan-400",
        badge: "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300",
    },
    locations: {
        title: "Locations",
        icon: MapPin,
        gradient: "from-emerald-500 to-teal-400",
        iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        accent: "from-emerald-500 to-teal-400",
        linkHover: "group-hover/link:text-emerald-600 dark:group-hover/link:text-emerald-400",
        badge: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
    },
    legal: {
        title: "Legal",
        icon: Shield,
        gradient: "from-purple-500 to-pink-400",
        iconBg: "bg-purple-50 dark:bg-purple-500/10",
        iconColor: "text-purple-600 dark:text-purple-400",
        accent: "from-purple-500 to-pink-400",
        linkHover: "group-hover/link:text-purple-600 dark:group-hover/link:text-purple-400",
        badge: "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300",
    },
};

function countAll(sectionData) {
    if (!sectionData) return 0;
    if (Array.isArray(sectionData)) {
        if (sectionData.length === 0) return 0;
        if (sectionData[0]?.pages) {
            return sectionData.reduce((sum, g) => sum + (g.pages?.length || 0), 0);
        }
        return sectionData.length;
    }
    return 0;
}

function PageLink({ href, name, config, isChild }) {
    return (
        <Link
            href={href}
            className={`group/link relative flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#151f32] hover:bg-white hover:shadow-md dark:hover:bg-[#1e293b] border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-200 ${isChild ? 'ml-5' : ''}`}
        >
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b ${config.accent} rounded-r-full group-hover/link:h-1/2 transition-all duration-300`} />
            <ChevronRight className={`w-3.5 h-3.5 text-slate-400 shrink-0 transition-colors group-hover/link:${config.linkHover}`} />
            <span className={`text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-200 ${config.linkHover}`}>
                {name}
            </span>
            <ArrowRight className="ml-auto w-3.5 h-3.5 text-slate-300 dark:text-slate-600 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200" />
        </Link>
    );
}

function AccordionSection({ sectionKey, data, isOpen, onToggle }) {
    const config = SECTION_CONFIG[sectionKey];
    const Icon = config.icon;
    const total = countAll(data);

    const [expandedCountries, setExpandedCountries] = useState({});

    const toggleCountry = (key) => {
        setExpandedCountries(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const renderContent = () => {
        if (!data || total === 0) {
            return (
                <p className="text-center text-slate-400 dark:text-slate-500 py-10 text-sm">
                    No pages in this section yet.
                </p>
            );
        }

        if (sectionKey === "legal") {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {data.map((page, idx) => (
                        <PageLink key={page._id || idx} href={page.path} name={page.name} config={config} />
                    ))}
                </div>
            );
        }

        if (sectionKey === "information") {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {data.map((page, idx) => (
                        <PageLink key={page._id || idx} href={page.path} name={page.name} config={config} />
                    ))}
                </div>
            );
        }

        if (sectionKey === "locations") {
            return (
                <div className="space-y-3">
                    {data.map((group, gi) => {
                        const isCountryOpen = expandedCountries[gi] !== false;
                        return (
                            <div key={gi} className="bg-slate-50/50 dark:bg-white/[0.02] rounded-xl border border-slate-100 dark:border-white/5 overflow-hidden">
                                <button
                                    onClick={() => toggleCountry(gi)}
                                    className="w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-emerald-500" />
                                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                            {group.country}
                                        </span>
                                        <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${config.badge}`}>
                                            {group.pages.length}
                                        </span>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: isCountryOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown className="w-4 h-4 text-slate-400" />
                                    </motion.div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isCountryOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                        >
                                            <div className="px-4 pb-4 space-y-2">
                                                {group.pages.map((page, pi) => (
                                                    <PageLink key={page._id || pi} href={page.path} name={page.name} config={config} />
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            );
        }

        return null;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl transition-all duration-500 overflow-hidden relative group ${
                isOpen
                ? 'bg-white dark:bg-[#0f172a] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-white/10'
                : 'bg-white/60 dark:bg-white/[0.02] shadow-sm border border-slate-200/60 dark:border-white/5 hover:bg-white hover:dark:bg-white/[0.04]'
            }`}
        >
            {isOpen && (
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${config.gradient}`} />
            )}

            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-5 md:p-8 text-left focus:outline-none cursor-pointer"
            >
                <div className="flex items-center gap-4 md:gap-6">
                    <div className={`p-3.5 rounded-xl transition-all duration-300 ${
                        isOpen
                        ? `${config.iconBg} ${config.iconColor} shadow-inner`
                        : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-white/10 group-hover:text-slate-700 dark:group-hover:text-slate-300'
                    }`}>
                        <Icon className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                            isOpen ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'
                        }`}>
                            {config.title}
                        </h2>
                        <p className={`text-sm mt-1 transition-all duration-300 ${
                            isOpen ? 'text-slate-500 dark:text-slate-400' : 'text-slate-400 dark:text-slate-500 opacity-0 md:opacity-100'
                        }`}>
                            {total} {total === 1 ? "Page" : "Pages"}
                        </p>
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-2.5 rounded-full transition-colors duration-300 ${
                        isOpen
                        ? 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white'
                        : 'bg-transparent text-slate-400 group-hover:bg-slate-100 dark:group-hover:bg-white/5 group-hover:text-slate-600 dark:group-hover:text-slate-300'
                    }`}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="px-5 md:px-8 pb-8 pt-2">
                            <div className="w-full h-px bg-slate-100 dark:bg-white/5 mb-5" />
                            {renderContent()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function SitemapClient({ data }) {
    const [openSection, setOpenSection] = useState(null);
    const { openModal } = useProjectModal();
    const { openMeetingModal } = useMeetingModal();

    const toggleSection = (key) => {
        setOpenSection(openSection === key ? null : key);
    };

    const sectionKeys = ["information", "locations", "legal"];

    return (
        <div className="min-h-screen bg-slate-50/50 dark:bg-[#020617] pt-32 pb-24 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent pointer-events-none" />
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/5 dark:bg-blue-600/10 blur-[120px] pointer-events-none" />
            <div className="absolute top-[20%] right-[-10%] w-[40%] h-[50%] rounded-full bg-cyan-400/5 dark:bg-cyan-600/10 blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm"
                    >
                        <span className="text-xs font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                            Website Directory
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
                    >
                        Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Sitemap</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        A complete overview of our platform's structure, services, and resources.
                    </motion.p>
                </div>

                <div className="space-y-4 md:space-y-6">
                    {sectionKeys.map((key) => (
                        <AccordionSection
                            key={key}
                            sectionKey={key}
                            data={data?.[key] || []}
                            isOpen={openSection === key}
                            onToggle={() => toggleSection(key)}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-12 md:mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group shadow-xl shadow-blue-500/20"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Ready to take the next step?</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">Access our premium services directly from here. Start a new enterprise project or schedule a one-on-one consultation with our experts.</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        <button
                            onClick={openModal}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <MessageSquare className="w-5 h-5" />
                            Start Your Project
                        </button>
                        <button
                            onClick={openMeetingModal}
                            className="w-full sm:w-auto px-8 py-4 bg-blue-700/50 hover:bg-blue-800/60 border border-white/20 text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <Calendar className="w-5 h-5" />
                            Schedule Consultation
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
