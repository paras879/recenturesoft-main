"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useProjectModal } from "@/components/providers/ProjectModalProvider";

const HeroScene = dynamic(() => import('./HeroGraphic'), { ssr: false });

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

    // FIX #1 (root cause of desktop-only TBT spike):
    // The old code did `const [isDesktop, setIsDesktop] = useState(false)` and
    // flipped it to true inside useEffect via window.innerWidth check. This
    // meant HeroScene (6 infinite CSS animations + SVG + framer-motion
    // wrapper) mounted as an EXTRA render pass, purely on desktop, right
    // after hydration — doubling paint/style work exactly when Lighthouse's
    // desktop run measures Total Blocking Time.
    //
    // FIX #4 (mobile LCP/Speed Index fix, added now):
    // We bring the isDesktop check BACK, but the goal this time is the
    // opposite problem: on mobile, `hidden md:block` only hides HeroScene
    // visually with CSS — the component still MOUNTS, so the dynamic
    // import() chunk for HeroGraphic still gets fetched and parsed on
    // mobile even though nobody ever sees it. That's wasted bandwidth and
    // JS execution competing directly with the LCP image and hero text on
    // a throttled Slow 4G mobile test — exactly where Speed Index (7.3s)
    // and LCP (3.8s) were failing.
    //
    // Fix: gate HeroScene behind an actual JS matchMedia check, in
    // addition to the CSS `hidden md:block`, so the dynamic import chunk
    // is never requested at all on mobile. On desktop, the animation
    // start is still deferred to window `load` via heroSceneReady, same
    // as before, keeping it off the critical path for TBT.
    const [isDesktop, setIsDesktop] = useState(false);
    const [heroSceneReady, setHeroSceneReady] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        let idleCallbackId;
        let timeoutId;

        const updateIsDesktop = (matches) => {
            if (matches) {
                // Defer mounting heavy components on desktop to reduce initial TBT
                if (typeof window.requestIdleCallback === 'function') {
                    idleCallbackId = window.requestIdleCallback(() => setIsDesktop(true), { timeout: 2000 });
                } else {
                    timeoutId = setTimeout(() => setIsDesktop(true), 1500);
                }
            } else {
                setIsDesktop(false);
            }
        };

        // Initial check
        updateIsDesktop(mq.matches);

        const handleChange = (e) => updateIsDesktop(e.matches);
        mq.addEventListener("change", handleChange);
        return () => {
            mq.removeEventListener("change", handleChange);
            if (idleCallbackId) window.cancelIdleCallback(idleCallbackId);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    // ── Auto-slide timer ─────
    useEffect(() => {
        let timer;
        const startCarousel = () => {
            timer = setInterval(() => {
                setCurrent((c) => (c + 1) % SLIDES.length);
            }, INTERVAL);
        };

        const markReady = () => setHeroSceneReady(true);

        if (document.readyState === "complete") {
            startCarousel();
            markReady();
        } else {
            window.addEventListener("load", startCarousel, { once: true });
            window.addEventListener("load", markReady, { once: true });
        }

        return () => {
            clearInterval(timer);
            window.removeEventListener("load", startCarousel);
            window.removeEventListener("load", markReady);
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
        <section ref={heroRef} className="relative md:min-h-screen md:min-h-[700px] overflow-hidden bg-background transition-colors duration-300">

            {/* ── Background image slideshow ── */}
            <div
                style={{ scale: bgScale, opacity: bgOpacity }}
                className="absolute inset-0 z-0 bg-black"
            >
                {/*
                      FIX #2 (biggest mobile LCP/Speed Index win):
                      Previously ALL 3 slide backgrounds rendered at once,
                      each wrapped in `absolute inset-0` + Next/Image `fill`.
                      Since these sit inside the viewport (not below the
                      fold), Next.js's built-in lazy-loading IntersectionObserver
                      considers all 3 "visible" immediately and fires all 3
                      network requests together — 3 full-size hero images
                      downloading in parallel on a throttled Slow-4G mobile
                      test, starving the actual LCP image of bandwidth.

                      Fix: only render the image for the CURRENT slide, plus
                      slide 0 (so the very first paint / priority image is
                      never delayed by a JS state update on mount). The other
                      slide images are only rendered once the user actually
                      reaches them, so only one hero image is ever in flight
                      at a time on first load.
                    */}
                {SLIDES.map((s, i) => {
                    if (i !== current && i !== 0) return null;
                    return (
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
                                // FIX #3: quality 90 on a full-viewport background
                                // image is overkill and inflates transfer size
                                // significantly for almost no visible gain.
                                // 75 for the priority/LCP slide keeps it sharp
                                // while cutting file size; non-priority slides
                                // (loaded later, after interaction) can go a
                                // little leaner still at 65.
                                quality={i === 0 ? 75 : 65}
                            />
                        </div>
                    );
                })}

                <div className="absolute inset-0 bg-white/20 md:bg-white/0 dark:bg-[#030712]/60 md:dark:bg-[#030712]/50" />
                
                {/* Mobile-optimized gradient (more solid to ensure readability) */}
                <div
                    className="absolute inset-0 md:hidden"
                    style={{
                        background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.8) 80%, rgba(255,255,255,0) 100%)"
                    }}
                />
                <div
                    className="absolute inset-0 hidden md:block dark:hidden"
                    style={{
                        background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.88) 28%, rgba(255,255,255,0.55) 48%, rgba(255,255,255,0.15) 68%, rgba(255,255,255,0) 85%)"
                    }}
                />
                
                {/* Dark mode gradients */}
                <div
                    className="absolute inset-0 hidden dark:block md:dark:hidden"
                    style={{
                        background: "linear-gradient(to right, rgba(3,7,18,1) 0%, rgba(3,7,18,0.95) 50%, rgba(3,7,18,0.8) 80%, rgba(3,7,18,0) 100%)"
                    }}
                />
                <div
                    className="absolute inset-0 hidden md:dark:block"
                    style={{
                        background: "linear-gradient(to right, rgba(3,7,18,1) 0%, rgba(3,7,18,0.88) 28%, rgba(3,7,18,0.55) 48%, rgba(3,7,18,0.15) 68%, rgba(3,7,18,0) 85%)"
                    }}
                />
                <div className="absolute bottom-0 inset-x-0 h-24 md:h-52 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* ── Ambient glow blob (accent coloured) — plain CSS, no framer-motion ── */}
            <div
                key={slide.id + "-glow"}
                className={`absolute top-[-10%] right-[-10%] w-[250px] md:w-[600px] h-[250px] md:h-[600px] ${slide.glowColor} rounded-full pointer-events-none z-[-1] opacity-30 md:opacity-100 transition-opacity duration-1000`}
            />
            <div className="absolute bottom-[-5%] left-[-5%] w-[180px] md:w-[400px] h-[180px] md:h-[400px] bg-blue-500/20 dark:bg-blue-900/20 rounded-full pointer-events-none z-[-1] opacity-20 md:opacity-100" />

            {/* ── Hero SVG scene ── */}
            {/*
                  FIX #4 (cont.): `hidden md:block` still handles the CSS
                  side of visibility (so there's no flash on desktop while
                  isDesktop resolves), but the component is now only ever
                  placed in the tree — and its dynamic import chunk only
                  ever fetched — when isDesktop is actually true. Mobile
                  never downloads or parses this chunk at all.
                */}
            {isDesktop && (
                <div
                    style={{ transform: `translateY(${sphereY}px)` }}
                    className="hidden md:block absolute inset-x-0 bottom-[-10%] top-auto h-[350px] sm:h-[400px] lg:bottom-auto lg:top-0 lg:inset-0 lg:left-[45%] lg:h-full z-[-1] pointer-events-none opacity-40 sm:opacity-50 lg:opacity-100"
                >
                    {heroSceneReady && <HeroScene accent={slide.accent} emissive="#3b82f6" />}
                </div>
            )}

            {/* ── Text content ── */}
            <div
                style={{ y: contentY }}
                className="relative z-10 w-full max-w-[1600px] mx-auto px-5 sm:px-6 lg:px-16 xl:px-24 2xl:px-28 flex flex-col 2xl:flex-row 2xl:items-center pt-24 pb-12 sm:pt-24 sm:pb-12 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16 gap-0 2xl:gap-16"
            >
                <div className="w-full max-w-[92%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%] flex flex-col flex-1 mt-0">
                    <div key={slide.id + "-content"}>

                        {/* Heading */}
                        <h2
                            className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.8rem] lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[5.6rem] font-[500] tracking-[-0.05em] leading-[1.1] pb-2 text-foreground animate-fade-in-up delay-100"
                        >
                            {displayHeading1}
                            <span className={`block bg-gradient-to-r ${slide.accentGrad} bg-clip-text text-transparent font-[500]`}>
                                {displayHeadingAccent}
                            </span>
                            <span className="block 2xl:whitespace-nowrap">{displayHeading2}</span>
                        </h2>

                        {/* Description */}
                        <p
                            className="mt-6 text-[15px] md:text-[18px] xl:text-[20px] 2xl:text-[22px] text-slate-900 md:text-slate-800 dark:text-slate-200 md:dark:text-slate-400 max-w-xl 2xl:max-w-2xl leading-relaxed md:leading-8 font-[500] md:font-[400] drop-shadow-sm md:drop-shadow-none animate-fade-in-up delay-200"
                        >
                            {displayDesc}
                        </p>

                        {/* CTA buttons */}
                        <div
                            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300"
                        >
                            <button
                                onClick={openModal}
                                className="group relative px-6 md:px-8 py-3.5 md:py-4 rounded-full font-[600] text-white shadow-lg md:hover:scale-105 active:scale-[0.98] transition-all duration-300 overflow-hidden w-full max-w-[380px] sm:w-auto text-center"
                                style={{
                                    background: `linear-gradient(135deg, ${slide.accent}, #6366f1)`,
                                    boxShadow: `0 8px 32px ${slide.accent}40`,
                                }}
                            >
                                <span className="relative z-10">{displayCta1}</span>
                            </button>
                            <button className="px-6 md:px-8 py-3.5 md:py-4 rounded-full border border-slate-300 dark:border-white/15 bg-white/80 text-slate-800 dark:text-white font-[500] md:hover:bg-white dark:md:hover:bg-white/10 md:hover:border-slate-400 dark:md:hover:border-white/30 active:scale-[0.98] backdrop-blur-md transition-all duration-300 w-full max-w-[380px] sm:w-auto text-center">
                                {displayCta2}
                            </button>
                        </div>

                        {/* Service tags — plain CSS staggered fade-in, no framer-motion */}
                        <div className="mt-6 flex flex-wrap gap-2 max-w-md md:gap-3 pb-2">
                            {SERVICES.map((item, i) => (
                                <div
                                    key={item}
                                    style={{ transitionDelay: `${0.3 + i * 0.06}s` }}
                                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 text-[12px] sm:text-[13px] md:text-sm font-[500] cursor-pointer backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center hover:scale-[1.08]"
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
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

                {/* ── Right-side stats panel (2xl+ only) ── */}
                <div
                    key={slide.id + "-stats"}
                    className="hidden 2xl:flex flex-col gap-5 flex-shrink-0 w-[300px] mt-36"
                >
                    {[
                        { value: "200+", label: "Projects Delivered", icon: "🚀" },
                        { value: "98%", label: "Client Satisfaction", icon: "⭐" },
                        { value: "50+", label: "Expert Engineers", icon: "👨‍💻" },
                        { value: "10+", label: "Years of Excellence", icon: "🏆" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
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
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Scroll indicator ── */}
            <div className="absolute bottom-10 right-10 z-20 hidden lg:flex flex-col items-center gap-2 opacity-0 animate-[fadeIn_0.6s_ease-out_2s_forwards]">
                <span className="text-slate-500 dark:text-gray-500 text-xs tracking-[0.2em] uppercase -rotate-90 mb-4">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-slate-400 dark:from-white/30 to-transparent animate-pulse" />
            </div>

        </section>
    );
}