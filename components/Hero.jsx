"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useProjectModal } from "@/components/providers/ProjectModalProvider";
// Statically import or declare the SVG Hero graphic to replace WebGL
function HeroGraphic({ accent }) {
    return (
        <div className="w-full h-full flex items-center justify-center relative select-none pointer-events-none">
            {/* Center soft glow */}
            <div
                className="absolute w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full  opacity-40 transition-all duration-700"
                style={{
                    background: `radial-gradient(circle, ${accent} 0%, transparent 70%)`
                }}
            />

            {/* Orbital tech network SVG */}
            <svg viewBox="0 0 400 400" className="w-full h-auto max-w-[480px] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Concentric orbital rings */}
                <circle cx="200" cy="200" r="140" stroke={`${accent}15`} strokeWidth="1.5" strokeDasharray="5 5" className="animate-spin-slow" />
                <circle cx="200" cy="200" r="110" stroke="rgba(99, 102, 241, 0.12)" strokeWidth="1" className="animate-spin-reverse" />
                <circle cx="200" cy="200" r="80" stroke={`${accent}20`} strokeWidth="2" />

                {/* Central main core */}
                <g className="animate-pulse-slow">
                    <circle cx="200" cy="200" r="48" fill="url(#hero-core-grad)" stroke={accent} strokeWidth="1.5" />
                    <circle cx="200" cy="200" r="42" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                </g>

                {/* Orbiting Tech Nodes */}
                {/* Node 1: AI Core */}
                <g className="animate-orbit-node-1">
                    <g transform="translate(200, 60)">
                        <circle cx="0" cy="0" r="18" fill="#0f172a" stroke={accent} strokeWidth="1.5" />
                        <rect x="-8" y="-8" width="16" height="16" rx="3" fill={`${accent}30`} stroke={accent} strokeWidth="1" />
                        <rect x="-4" y="-4" width="8" height="8" fill="#ffffff" />
                    </g>
                </g>

                {/* Node 2: Cloud Storage */}
                <g className="animate-orbit-node-2">
                    <g transform="translate(200, 60)">
                        <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
                        {/* Cylinder graphic representing DB */}
                        <path d="M -6 -5 L 6 -5 L 6 -1 L -6 -1 Z M -6 -1 L 6 -1 L 6 3 L -6 3 Z M -6 3 L 6 3 L 6 7 L -6 7 Z" fill="none" stroke="#8b5cf6" strokeWidth="1.2" />
                    </g>
                </g>

                {/* Node 3: Network Connection */}
                <g className="animate-orbit-node-3">
                    <g transform="translate(200, 60)">
                        <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
                        <circle cx="0" cy="-3" r="3" fill="#3b82f6" />
                        <line x1="-5" y1="4" x2="0" y2="-3" stroke="#3b82f6" strokeWidth="1.2" />
                        <line x1="5" y1="4" x2="0" y2="-3" stroke="#3b82f6" strokeWidth="1.2" />
                        <circle cx="-5" cy="5" r="2.5" fill="#3b82f6" />
                        <circle cx="5" cy="5" r="2.5" fill="#3b82f6" />
                    </g>
                </g>

                {/* Gradients */}
                <defs>
                    <radialGradient id="hero-core-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(48)">
                        <stop stopColor="#0f172a" />
                        <stop offset="0.7" stopColor="#020617" />
                        <stop offset="1" stopColor={`${accent}30`} />
                    </radialGradient>
                </defs>
            </svg>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.95; }
                    50% { transform: scale(1.05); opacity: 1; }
                }
                @keyframes orbit-node-1 {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes orbit-node-2 {
                    from { transform: rotate(120deg); }
                    to { transform: rotate(480deg); }
                }
                @keyframes orbit-node-3 {
                    from { transform: rotate(240deg); }
                    to { transform: rotate(600deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 35s linear infinite;
                    transform-origin: 200px 200px;
                }
                .animate-spin-reverse {
                    animation: spin-reverse 25s linear infinite;
                    transform-origin: 200px 200px;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                    transform-origin: 200px 200px;
                }
                .animate-orbit-node-1 {
                    animation: orbit-node-1 20s linear infinite;
                    transform-origin: 200px 200px;
                    will-change: transform;
                }
                .animate-orbit-node-2 {
                    animation: orbit-node-2 25s linear infinite;
                    transform-origin: 200px 200px;
                    will-change: transform;
                }
                .animate-orbit-node-3 {
                    animation: orbit-node-3 30s linear infinite;
                    transform-origin: 200px 200px;
                    will-change: transform;
                }
            `}} />
        </div>
    );
}

const HeroScene = HeroGraphic;

/* ═══════════════════════════════════════════
   SLIDE DATA  –  add your own images here
═══════════════════════════════════════════ */
const SLIDES = [
    {
        id: 0,
        bg: "/hero_bg_1.webp",
        accent: "#0ea5e9",
        accentGrad: "from-cyan-500 via-blue-500 to-indigo-500",
        glowColor: "bg-cyan-500/20",
        badge: "⭐ Trusted by Global Clients",
        badgeBorder: "border-cyan-400/30",
        badgeText: "text-cyan-600 dark:text-cyan-300",
        heading1: "Transforming",
        headingAccent: "Digital Experiences",
        heading2: "Modern Enterprises",
        desc: "Empowering businesses through innovative web development, cloud solutions, AI integration, and digital transformation services that drive measurable growth.",
        cta: "Start Your Project",
        cta2: "Explore Services",
    },
    {
        id: 1,
        bg: "/hero_bg_2.webp",
        accent: "#a855f7",
        accentGrad: "from-purple-500 via-pink-500 to-indigo-500",
        glowColor: "bg-purple-500/20",
        badge: "🤖 Next-Gen AI Solutions",
        badgeBorder: "border-purple-400/30",
        badgeText: "text-purple-600 dark:text-purple-300",
        heading1: "Powering Business",
        headingAccent: "With Artificial",
        heading2: "Intelligence",
        desc: "Harness the full potential of AI — from intelligent automation and predictive analytics to generative models that reinvent how you serve customers.",
        cta: "Explore AI Services",
        cta2: "View Case Studies",
    },
    {
        id: 2,
        bg: "/hero_bg_3.webp",
        accent: "#10b981",
        accentGrad: "from-emerald-500 via-teal-500 to-cyan-500",
        glowColor: "bg-emerald-500/20",
        badge: "☁️ Cloud-First Architecture",
        badgeBorder: "border-emerald-400/30",
        badgeText: "text-emerald-600 dark:text-emerald-300",
        heading1: "Scale Infinitely",
        headingAccent: "With Cloud",
        heading2: "Infrastructure",
        desc: "Build resilient, scalable cloud architectures on AWS, Azure, and GCP. DevOps pipelines, Kubernetes orchestration, and 24/7 infrastructure monitoring.",
        cta: "Get Cloud Consultation",
        cta2: "Our Stack",
    },
];


const SERVICES = ["Web Development", "Mobile Apps", "Cloud Solutions", "AI Integration", "UI/UX Design"];

/* ═══════════════════════════════════════════
   3-D SCENE LOADED DYNAMICALLY
═══════════════════════════════════════════ */

/* ═══════════════════════════════════════════
   ANIMATION VARIANTS
═══════════════════════════════════════════ */
const slideIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.1 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
};


/* ═══════════════════════════════════════════
   HERO COMPONENT
   ═══════════════════════════════════════════ */
export default function Hero({ cmsData = {} }) {
    const [current, setCurrent] = useState(0);
    const heroRef = useRef(null);
    const { openModal } = useProjectModal();
    const INTERVAL = 6000;

    // ── Scroll parallax (Static/CSS optimized) ──────────────────────
    const contentY = 0;
    const bgScale = 1;
    const bgOpacity = 1;
    const sphereY = 0;

    // ── Auto-slide timer & Desktop check ─────
    // FIX #3 (duplicate image fetches on Lighthouse mobile run):
    // The carousel used to start immediately on mount. Under Lighthouse's
    // "Slow 4G" mobile throttling, a full page load can take 20-30s+, so the
    // 6s interval was firing multiple times *before* the page had even
    // finished loading — causing every slide image to be fetched twice
    // during a single throttled run. We now wait for the `load` event
    // before starting the carousel, so only the first (LCP) image is
    // requested while the page is loading.
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        setIsDesktop(window.innerWidth >= 768);

        let timer;
        const startCarousel = () => {
            timer = setInterval(() => {
                setCurrent((c) => (c + 1) % SLIDES.length);
            }, INTERVAL);
        };

        if (document.readyState === "complete") {
            startCarousel();
        } else {
            window.addEventListener("load", startCarousel, { once: true });
        }

        return () => {
            clearInterval(timer);
            window.removeEventListener("load", startCarousel);
        };
    }, []);

    const slide = SLIDES[current];
    const slideIndex = current + 1;
    const cmsSlide = cmsData.hero?.[`slide${slideIndex}`];

    // CMS overrides for the current slide
    const displayHeading1 = cmsSlide?.heading1 || slide.heading1;
    const displayHeadingAccent = cmsSlide?.headingAccent || slide.headingAccent;
    const displayHeading2 = cmsSlide?.heading2 || slide.heading2;
    const displayDesc = cmsSlide?.desc || slide.desc;
    const displayCta1 = cmsSlide?.cta1 || slide.cta;
    const displayCta2 = cmsSlide?.cta2 || slide.cta2;
    const displayBg = cmsSlide?.bg || slide.bg;

    return (
        <section ref={heroRef} className="relative h-[100svh] min-h-[650px] md:min-h-[700px] overflow-hidden bg-background transition-colors duration-300">

            {/* ── Background image slideshow ── */}
            {/*
              FIX: All 3 slide images are rendered simultaneously in the DOM.
              We switch visibility using opacity/z-index instead of changing src.
              This means each image is fetched exactly ONCE — no loop re-loading.
              Slide 0 has priority + fetchPriority="high" for LCP.
            */}
            <motion.div
                style={{ scale: bgScale, opacity: bgOpacity }}
                className="absolute inset-0 z-0 bg-black"
            >
                {SLIDES.map((s, i) => (
                    <div
                        key={s.id}
                        className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
                        aria-hidden={i !== current}
                    >
                        <Image
                            src={s.bg}
                            alt="Hero Background"
                            fill
                            priority={i === 0}
                            fetchPriority={i === 0 ? "high" : "auto"}
                            sizes="100vw"
                            className="object-cover"
                            quality={60}
                        />
                    </div>
                ))}

                {/* 
                  Smooth multi-stop gradient overlays — no harsh seam.
                  Uses inline style for precise gradient control.
                */}
                {/* Layer 1: Subtle global tint so image isn't too raw */}
                <div className="absolute inset-0 bg-white/35 dark:bg-[#030712]/50" />
                {/* Layer 2: Main left→right gradient (smooth 5-stop) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.88) 28%, rgba(255,255,255,0.55) 48%, rgba(255,255,255,0.15) 68%, rgba(255,255,255,0) 85%)"
                    }}
                />
                {/* Dark mode version */}
                <div
                    className="absolute inset-0 hidden dark:block"
                    style={{
                        background: "linear-gradient(to right, rgba(3,7,18,1) 0%, rgba(3,7,18,0.88) 28%, rgba(3,7,18,0.55) 48%, rgba(3,7,18,0.15) 68%, rgba(3,7,18,0) 85%)"
                    }}
                />
                {/* Layer 3: Bottom fade */}
                <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-background to-transparent" />
            </motion.div>

            {/* ── Ambient glow blob (accent coloured) ── */}
            <AnimatePresence mode="sync" initial={false}>
                <motion.div
                    key={slide.id + "-glow"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={`absolute top-[-10%] right-[-10%] w-[250px] md:w-[600px] h-[250px] md:h-[600px] ${slide.glowColor} rounded-full pointer-events-none z-[-1] opacity-30 md:opacity-100`}
                />
            </AnimatePresence>
            <div className="absolute bottom-[-5%] left-[-5%] w-[180px] md:w-[400px] h-[180px] md:h-[400px] bg-blue-500/20 dark:bg-blue-900/20 rounded-full pointer-events-none z-[-1] opacity-20 md:opacity-100" />

            {/* ── 3-D Canvas ── */}
            {isDesktop && (
                <motion.div
                    style={{ y: sphereY }}
                    className="hidden md:block absolute inset-x-0 bottom-[-10%] top-auto h-[350px] sm:h-[400px] lg:bottom-auto lg:top-0 lg:inset-0 lg:left-[45%] lg:h-full z-[-1] pointer-events-none opacity-40 sm:opacity-50 lg:opacity-100"
                >
                    <HeroScene accent={slide.accent} emissive="#3b82f6" />
                </motion.div>
            )}

            {/* ── Text content (scroll parallax) ── */}
            <motion.div
                style={{ y: contentY }}
                className="relative z-10 w-full max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-16 xl:px-24 2xl:px-28 flex flex-col 2xl:flex-row 2xl:items-center min-h-[100svh] pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 gap-0 2xl:gap-16"
            >
                <div className="w-full max-w-[92%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%] flex flex-col flex-1 mt-0">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div key={slide.id + "-content"}>

                            {/* Heading */}
                            <motion.h1
                                variants={slideIn}
                                initial={isDesktop ? "hidden" : { opacity: 1, y: 0 }}
                                animate={isDesktop ? "visible" : { opacity: 1, y: 0 }}
                                exit="exit"
                                custom={1}
                                className="text-[2.2rem] sm:text-[2.8rem] md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] 2xl:text-[5.8rem] font-[500] tracking-[-0.05em] leading-[1.1] pb-2 text-foreground"
                            >
                                {displayHeading1}
                                <span className={`block bg-gradient-to-r ${slide.accentGrad} bg-clip-text text-transparent font-[500]`}>
                                    {displayHeadingAccent}
                                </span>
                                <span className="block 2xl:whitespace-nowrap">{displayHeading2}</span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                variants={slideIn}
                                initial={isDesktop ? "hidden" : { opacity: 1, y: 0 }}
                                animate={isDesktop ? "visible" : { opacity: 1, y: 0 }}
                                exit="exit"
                                custom={2}
                                className="mt-6 text-[15px] md:text-[18px] xl:text-[20px] 2xl:text-[22px] text-slate-600 dark:text-slate-400 max-w-xl 2xl:max-w-2xl leading-8 font-[400]"
                            >
                                {displayDesc}
                            </motion.p>

                            {/* CTA buttons */}
                            <motion.div
                                variants={slideIn}
                                initial={isDesktop ? "hidden" : { opacity: 1, y: 0 }}
                                animate={isDesktop ? "visible" : { opacity: 1, y: 0 }}
                                exit="exit"
                                custom={3}
                                className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
                            >
                                <button
                                    onClick={openModal}
                                    className="group relative px-6 md:px-8 py-3.5 md:py-4 rounded-full font-[600] text-white shadow-lg md:hover:scale-105 active:scale-[0.98] transition-all duration-300 overflow-hidden w-full sm:w-auto text-center"
                                    style={{
                                        background: `linear-gradient(135deg, ${slide.accent}, #6366f1)`,
                                        boxShadow: `0 8px 32px ${slide.accent}40`,
                                    }}
                                >
                                    <span className="relative z-10">{displayCta1}</span>
                                </button>
                                <button className="px-6 md:px-8 py-3.5 md:py-4 rounded-full border border-slate-300 dark:border-white/15 text-slate-800 dark:text-white font-[500] md:hover:bg-slate-100 dark:md:hover:bg-white/10 md:hover:border-slate-400 dark:md:hover:border-white/30 active:scale-[0.98] backdrop-blur-sm transition-all duration-300 w-full sm:w-auto text-center">
                                    {displayCta2}
                                </button>
                            </motion.div>

                            {/* Service tags */}
                            <motion.div
                                variants={slideIn} initial="hidden" animate="visible" exit="exit" custom={4}
                                className="mt-6 flex flex-wrap gap-3 max-w-md md:gap-3 pb-4"
                            >
                                {SERVICES.map((item, i) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 + i * 0.08 }}
                                        whileHover={{ scale: 1.08 }}
                                        className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 text-[12px] sm:text-[13px] md:text-sm font-[500] cursor-pointer backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = slide.accent + "90";
                                            e.currentTarget.style.color = slide.accent;
                                            e.currentTarget.style.background = slide.accent + "15";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "";
                                            e.currentTarget.style.color = "";
                                            e.currentTarget.style.background = "";
                                        }}
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </motion.div>

                        </motion.div>
                    </AnimatePresence>


                </div>

                {/* ── Right-side stats panel (2xl+ only) ── */}
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={slide.id + "-stats"}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hidden 2xl:flex flex-col gap-5 flex-shrink-0 w-[300px] mt-36"
                    >
                        {[
                            { value: "200+", label: "Projects Delivered", icon: "🚀" },
                            { value: "98%", label: "Client Satisfaction", icon: "⭐" },
                            { value: "50+", label: "Expert Engineers", icon: "👨‍💻" },
                            { value: "10+", label: "Years of Excellence", icon: "🏆" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/[0.08] backdrop-blur-md shadow-sm hover:shadow-md hover:bg-white/80 dark:hover:bg-white/[0.07] transition-all duration-300 group"
                            >
                                <div className="text-2xl w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                                <div>
                                    <div
                                        className="text-2xl font-bold"
                                        style={{ background: `linear-gradient(135deg, ${slide.accent}, #6366f1)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                                    >{stat.value}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </motion.div>



            {/* ── Scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 right-10 z-20 hidden lg:flex flex-col items-center gap-2"
            >
                <span className="text-slate-500 dark:text-gray-500 text-xs tracking-[0.2em] uppercase -rotate-90 mb-4">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-slate-400 dark:from-white/30 to-transparent animate-pulse" />
            </motion.div>

        </section>
    );
}
