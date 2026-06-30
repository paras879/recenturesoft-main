"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CinematicServiceTemplate({
    title,
    subtitle,
    introParagraphs = [],
    features = [],
    themeColor = "blue", // e.g., 'blue', 'cyan', 'emerald', 'sky', 'indigo'
}) {
    // Dynamic color maps for the specific theme
    const themeMaps = {
        blue: {
            textGradient: "from-blue-500 to-indigo-500",
            bgGlow: "bg-blue-500/20",
            iconBg: "bg-blue-100 dark:bg-blue-500/10",
            iconColor: "text-blue-600 dark:text-blue-400",
            borderGlow: "group-hover:border-blue-500/50",
            badgeBg: "bg-blue-500",
        },
        cyan: {
            textGradient: "from-cyan-400 to-blue-500",
            bgGlow: "bg-cyan-500/20",
            iconBg: "bg-cyan-100 dark:bg-cyan-500/10",
            iconColor: "text-cyan-600 dark:text-cyan-400",
            borderGlow: "group-hover:border-cyan-500/50",
            badgeBg: "bg-cyan-500",
        },
        emerald: {
            textGradient: "from-emerald-400 to-green-500",
            bgGlow: "bg-emerald-500/20",
            iconBg: "bg-emerald-100 dark:bg-emerald-500/10",
            iconColor: "text-emerald-600 dark:text-emerald-400",
            borderGlow: "group-hover:border-emerald-500/50",
            badgeBg: "bg-emerald-500",
        },
        sky: {
            textGradient: "from-sky-400 to-cyan-500",
            bgGlow: "bg-sky-500/20",
            iconBg: "bg-sky-100 dark:bg-sky-500/10",
            iconColor: "text-sky-600 dark:text-sky-400",
            borderGlow: "group-hover:border-sky-500/50",
            badgeBg: "bg-sky-500",
        },
        indigo: {
            textGradient: "from-indigo-400 to-purple-500",
            bgGlow: "bg-indigo-500/20",
            iconBg: "bg-indigo-100 dark:bg-indigo-500/10",
            iconColor: "text-indigo-600 dark:text-indigo-400",
            borderGlow: "group-hover:border-indigo-500/50",
            badgeBg: "bg-indigo-500",
        },
        slate: {
            textGradient: "from-slate-700 to-black dark:from-white dark:to-slate-400",
            bgGlow: "bg-slate-500/20",
            iconBg: "bg-slate-100 dark:bg-slate-800",
            iconColor: "text-slate-700 dark:text-slate-300",
            borderGlow: "group-hover:border-slate-500/50",
            badgeBg: "bg-slate-800 dark:bg-slate-200",
        }
    };

    const t = themeMaps[themeColor] || themeMaps.blue;

    return (
        <div className="w-full relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${t.bgGlow} blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-30`} />
            <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] ${t.bgGlow} blur-[100px] rounded-full pointer-events-none opacity-40 dark:opacity-20`} />

            {/* 1. Glassmorphic Overview Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mb-20 md:mb-28 z-10"
            >
                <div className="p-8 md:p-12 rounded-[2rem] bg-white/60 dark:bg-[#0f172a]/60 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 md:mb-8 leading-tight">
                        {title} <br className="hidden sm:block" />
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${t.textGradient}`}>
                            {subtitle}
                        </span>
                    </h2>
                    <div className="space-y-5 text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-4xl">
                        {introParagraphs.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* 2. Zig-Zag Feature Layout */}
            <div className="space-y-16 md:space-y-24 mb-20 z-10 relative">
                {features.map((feature, idx) => {
                    const Icon = feature.icon;
                    const isEven = idx % 2 === 0;

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className={`flex flex-col gap-8 md:gap-12 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Visual Block */}
                            <div className="w-full md:w-5/12 flex justify-center">
                                <div className="relative group w-full aspect-square max-w-[320px]">
                                    {/* Glowing aura */}
                                    <div className={`absolute inset-0 ${t.bgGlow} rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 scale-90 group-hover:scale-100 opacity-60`} />
                                    
                                    {/* Glass Card */}
                                    <div className={`relative h-full w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-2xl flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] ${t.borderGlow}`}>
                                        <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-[2rem] ${t.iconBg} flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform duration-500 shadow-inner`}>
                                            <Icon className={`w-12 h-12 sm:w-16 sm:h-16 ${t.iconColor}`} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Block */}
                            <div className="w-full md:w-7/12 flex flex-col justify-center text-center md:text-left">
                                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${t.iconBg} ${t.iconColor} w-fit mx-auto md:mx-0 mb-6 text-sm font-bold tracking-wide uppercase`}>
                                    <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                                    Feature {idx + 1}
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                    {feature.desc}
                                </p>
                                
                                {/* Micro-interaction List */}
                                <ul className="space-y-3 text-left w-full max-w-md mx-auto md:mx-0">
                                    {(feature.highlights || ["Enterprise-grade performance", "Seamless integration", "24/7 dedicated support"]).map((hl, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                            <CheckCircle2 className={`w-5 h-5 ${t.iconColor} flex-shrink-0`} />
                                            {hl}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* 3. Call to Action Mini-Ribbon */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 w-full rounded-[2rem] overflow-hidden"
            >
                <div className="absolute inset-0 bg-slate-900 dark:bg-black" />
                <div className={`absolute inset-0 bg-gradient-to-r ${t.textGradient} opacity-20`} />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
                
                <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to transform your vision?</h3>
                        <p className="text-slate-300 text-lg">Partner with our elite engineering teams today.</p>
                    </div>
                    <Link 
                        href="/contact"
                        className="group flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors"
                    >
                        Get Started Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
