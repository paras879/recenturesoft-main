"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════
   COLOR TOKENS
   ═══════════════════════════════════════════════════════ */
const C = {
    primary: "#06E6FF",
    secondary: "#3B82F6",
    accent: "#8B5CF6",
    navy: "#050816",
    gradient: "linear-gradient(135deg, #06E6FF, #3B82F6, #8B5CF6)",
};

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */
const contactCards = [
    {
        id: "email",
        title: "Email Us",
        value: "info@recenturesoft.com",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        color: C.primary,
        delay: 0,
    },
    {
        id: "whatsapp",
        title: "WhatsApp Only",
        value: "+91 777 000 3288",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        ),
        color: C.secondary,
        delay: 0.2,
    },
    {
        id: "address",
        title: "Headquarters",
        value: "A-125, 1st Floor, Sector-63, Noida",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        color: C.accent,
        delay: 0.4,
    },
    {
        id: "meeting",
        title: "Video Call",
        value: "Schedule a Meeting",
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
        ),
        color: C.primary,
        delay: 0.6,
    },
];

/* ═══════════════════════════════════════════════════════
   PARALLAX BACKGROUND (OPTIMIZED - CSS ANIMATIONS ONLY)
   ═══════════════════════════════════════════════════════ */
function ContactBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden bg-background">
            {/* Subtle Noise Texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Aurora glows - Static, visual matches the design perfectly */}
            <div
                className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.05]"
                style={{ background: `radial-gradient(circle, ${C.primary}, transparent 70%)`, filter: "blur(100px)" }}
            />
            <div
                className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] rounded-full opacity-[0.04]"
                style={{ background: `radial-gradient(circle, ${C.accent}, transparent 70%)`, filter: "blur(100px)" }}
            />

            {/* Grid background - Static perspective */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-screen"
                style={{
                    backgroundImage: `linear-gradient(${C.primary}10 1px, transparent 1px), linear-gradient(90deg, ${C.primary}10 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                    transform: "perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)",
                }}
            />

            {/* Smooth Animations & CSS Keyframes */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes streakLeftToRight {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes streakRightToLeft {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                .streak-ltr {
                    animation: streakLeftToRight 7s linear infinite;
                    will-change: transform;
                }
                .streak-rtl {
                    animation: streakRightToLeft 11s linear infinite;
                    will-change: transform;
                }
                
                /* Cards CSS style rules */
                @keyframes floatCard {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                .float-card {
                    animation: floatCard var(--float-duration) ease-in-out var(--float-delay) infinite;
                    will-change: transform;
                    background: rgba(255, 255, 255, 0.75);
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05);
                    transition: border-color 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease;
                }
                .dark .float-card {
                    background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
                    border: 1px solid rgba(150,150,150,0.15);
                }
                .float-card:hover {
                    border-color: var(--card-color-alpha) !important;
                    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15) !important;
                }
                
                @keyframes iconWiggle {
                    0%, 100% { transform: rotate(0deg); }
                    33% { transform: rotate(-10deg); }
                    66% { transform: rotate(10deg); }
                }
                .group:hover .contact-card-icon {
                    background: var(--card-color-icon-bg) !important;
                    color: var(--card-color) !important;
                    box-shadow: 0 0 20px var(--card-color-glow) !important;
                    animation: iconWiggle 0.5s ease-in-out;
                }
                
                @keyframes shineSweep {
                    0% { transform: translateX(-150px) skewX(12deg); }
                    100% { transform: translateX(500px) skewX(12deg); }
                }
                .shine-sweep {
                    left: 0;
                    animation: shineSweep 5.5s ease-in-out infinite;
                    will-change: transform;
                }
            `}} />

            {/* Animated Light Streaks via CSS */}
            <div
                className="absolute top-1/4 left-0 w-full h-[1px] opacity-10 streak-ltr"
                style={{ background: `linear-gradient(90deg, transparent, ${C.primary}, transparent)` }}
            />
            <div
                className="absolute bottom-1/4 right-0 w-full h-[1px] opacity-10 streak-rtl"
                style={{ background: `linear-gradient(270deg, transparent, ${C.accent}, transparent)` }}
            />
        </div>
    );
}

/* ═══════════════════════════════════════════════════════
   PREMIUM CONTACT CARDS (OPTIMIZED - CSS TILT & TRANSFORMS)
   ═══════════════════════════════════════════════════════ */
function ContactCard({ card, index }) {
    return (
        <div
            className="relative rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] group"
        >
            <div
                className="relative p-5 rounded-2xl overflow-hidden h-full flex flex-col justify-center bg-slate-50/50 dark:bg-transparent backdrop-blur-md float-card"
                style={{
                    "--float-duration": `${4 + index}s`,
                    "--float-delay": `${card.delay}s`,
                    "--card-color": card.color,
                    "--card-color-alpha": `${card.color}50`,
                    "--card-color-icon-bg": `${card.color}25`,
                    "--card-color-glow": `${card.color}40`,
                }}
            >
                <div className="flex items-center gap-4 relative z-10">
                    <div
                        className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-400 contact-card-icon"
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            color: "#9ca3af"
                        }}
                    >
                        {card.icon}
                    </div>
                    <div>
                        <p className="text-[11px] font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-[0.1em] mb-0.5">{card.title}</p>
                        <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-[var(--card-color)] transition-colors">{card.value}</p>
                    </div>
                </div>

                {/* Ambient inner glow */}
                <div
                    className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${card.color}15 0%, transparent 70%)` }}
                />
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════
   PREMIUM FORM & MAGNETIC BUTTON (CSS OPTIMIZED)
   ═══════════════════════════════════════════════════════ */
function MagneticButton({ children, onClick, disabled }) {
    return (
        <button
            type="submit"
            disabled={disabled}
            onClick={onClick}
            className="relative w-full overflow-hidden rounded-xl py-4 font-bold text-sm tracking-wide flex items-center justify-center gap-3 cursor-pointer group transition-all duration-300 hover:scale-[1.02] active:scale-[0.96] disabled:opacity-80"
        >
            <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90" style={{ background: C.gradient }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: `0 0 30px ${C.primary}60` }} />

            {/* Shine Sweep */}
            <div
                className="absolute top-0 bottom-0 w-[50px] bg-white opacity-20 skew-x-12 shine-sweep"
            />
            {children}
        </button>
    );
}

function PremiumForm() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };


    const inputs = [
        { id: "name", label: "Full Name", type: "text", widthClass: "w-full" },
        { id: "email", label: "Email Address", type: "email", widthClass: "w-full sm:w-[calc(50%-10px)]" },
        { id: "company", label: "Company", type: "text", widthClass: "w-full sm:w-[calc(50%-10px)]" },
    ];



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 3000);
                setFormData({ name: "", email: "", company: "", message: "" });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="relative rounded-[28px] overflow-hidden group/form"
        >
            <div
                className="relative p-6 sm:p-10 rounded-[28px] overflow-hidden bg-slate-50/80 dark:bg-[#050816]/80 backdrop-blur-3xl border border-slate-200 dark:border-white/[0.08] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
                {/* Spotlight glow behind form */}
                <div
                    className="absolute inset-0 pointer-events-none rounded-[28px] opacity-40 group-hover/form:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${C.primary}15, transparent 60%)`
                    }}
                />

                <AnimatePresence mode="wait">
                    {submitted ? (
                        <motion.div
                            key="success"
                            className="relative z-10 flex flex-col items-center justify-center h-[400px] text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                        >
                            <motion.div
                                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                                style={{ background: `${C.primary}20`, border: `1px solid ${C.primary}40`, boxShadow: `0 0 30px ${C.primary}40` }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            >
                                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <motion.path
                                        d="M20 6L9 17l-5-5"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    />
                                </svg>
                            </motion.div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">Request Received</h3>
                            <p className="text-slate-500 dark:text-gray-400 text-sm">Our elite team will contact you shortly.</p>
                        </motion.div>
                    ) : (
                        <form key="form" onSubmit={handleSubmit} className="relative z-10 flex flex-wrap gap-4 sm:gap-5">
                            {inputs.map((input) => (
                                <div
                                    key={input.id}
                                    className={`flex flex-col relative group ${input.widthClass}`}
                                >
                                    <label className="text-[11px] font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-[0.1em] mb-2 ml-1 transition-colors group-focus-within:text-cyan-400">
                                        {input.label}
                                    </label>
                                    <div className="relative">
                                        {/* Animated tracing border */}
                                        <div className="absolute -inset-[1px] rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-[4px]" style={{ background: C.gradient }} />

                                        <input
                                            id={input.id}
                                            type={input.type}
                                            required
                                            value={formData[input.id]}
                                            onChange={handleChange}
                                            className="w-full relative z-10 bg-white/80 dark:bg-[#0A1225]/80 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:bg-white dark:focus:bg-[#0A1225]/95 transition-all duration-300"
                                            placeholder={`Enter ${input.label.toLowerCase()}`}
                                        />
                                    </div>
                                </div>
                            ))}

                            <div
                                className="w-full flex flex-col relative mt-2 group"
                            >
                                <label className="text-[11px] font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-[0.1em] mb-2 ml-1 transition-colors group-focus-within:text-cyan-400">
                                    Project Scope
                                </label>
                                <div className="relative">
                                    <div className="absolute -inset-[1px] rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-[4px]" style={{ background: C.gradient }} />
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        required
                                        className="w-full relative z-10 bg-white/80 dark:bg-[#0A1225]/80 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:bg-white dark:focus:bg-[#0A1225]/95 transition-all duration-300 resize-none"
                                        placeholder="Tell us about your requirements and technical goals..."
                                    />
                                </div>
                            </div>

                            <div
                                className="w-full mt-4"
                            >
                                <MagneticButton disabled={loading}>
                                    <span className="relative z-10 text-white font-semibold">
                                        {loading ? "Initializing Secure Link..." : "Start Your Project"}
                                    </span>
                                    {!loading && (
                                        <svg
                                            className="relative z-10 w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1"
                                            viewBox="0 0 20 20" fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </MagneticButton>
                            </div>
                        </form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════
   ANIMATED FEATURE PILLS (CSS TRANSFORM & TRANSITION)
   ═══════════════════════════════════════════════════════ */
function FeaturePill({ children }) {
    return (
        <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50/50 dark:bg-white/[0.02] backdrop-blur-md border border-slate-200 dark:border-white/[0.08] cursor-pointer hover:scale-[1.05] hover:bg-slate-100 dark:hover:bg-white/[0.08] hover:border-slate-300 dark:hover:border-white/[0.15] transition-all duration-300"
        >
            {children}
        </div>
    );
}

function AnimatedCounter({ to }) {
    return <span className="font-bold tabular-nums text-slate-900 dark:text-white">{to}</span>;
}

function ConversionElements() {
    return (
        <div className="flex flex-wrap gap-3 mt-8 md:mt-12">
            <FeaturePill delay={0.2}>
                <div className="w-2 h-2 rounded-full relative">
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                </div>
                <span className="text-[12px] font-semibold text-slate-600 dark:text-gray-300 ml-1">Accepting New Projects</span>
            </FeaturePill>

            <FeaturePill delay={0.3}>
                <svg className="w-4 h-4 text-slate-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-[12px] font-semibold text-slate-600 dark:text-gray-300 ml-0.5">Under 24h Response</span>
            </FeaturePill>

            <FeaturePill delay={0.4}>
                <span className="text-[12px] font-semibold text-slate-600 dark:text-gray-300">
                    Trusted by <AnimatedCounter from={0} to={120} />+ Companies
                </span>
            </FeaturePill>

            <FeaturePill delay={0.5}>
                <svg className="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[12px] font-semibold text-slate-600 dark:text-gray-300">
                    <AnimatedCounter from={0} to={98} />% Satisfaction
                </span>
            </FeaturePill>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT EXPORT (OPTIMIZED - NO MOUSE LISTENERS)
   ═══════════════════════════════════════════════════════ */
export default function ContactExperience() {
    return (
        <section
            className="relative bg-background overflow-hidden transition-colors duration-300"
        >
            <ContactBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 md:py-14 lg:py-20">
                <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-24">

                    {/* LEFT SIDE: Text & Info Cards */}
                    <div className="lg:w-5/12 flex flex-col justify-center">
                        <div>
                            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-foreground leading-[1.1] mb-6 tracking-tight flex flex-wrap items-center gap-2">
                                <span>Let's Build</span>
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{ backgroundImage: C.gradient }}
                                >
                                    The Future
                                </span>
                            </h2>
                            <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-6 md:mb-10 max-w-md">
                                Ready to transform your enterprise? Connect with our team of elite engineers and strategists to discuss your next breakthrough.
                            </p>
                        </div>

                        {/* Grid of Floating Contact Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactCards.map((card, idx) => (
                                <ContactCard
                                    key={card.id}
                                    card={card}
                                    index={idx}
                                />
                            ))}
                        </div>

                        <ConversionElements />
                    </div>

                    {/* RIGHT SIDE: Premium Form */}
                    <div className="lg:w-7/12" style={{ perspective: "1200px" }}>
                        <PremiumForm />
                    </div>

                </div>
            </div>
        </section>
    );
}
