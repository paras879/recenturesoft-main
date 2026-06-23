


// ── High Performance SVG Graphics for Services ──

function SoftwareDevGraphic() {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <svg viewBox="0 0 200 200" className="w-full h-full max-w-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Tech architecture grids */}
                <rect x="20" y="20" width="45" height="35" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
                <rect x="20" y="80" width="45" height="35" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
                <rect x="20" y="140" width="45" height="35" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
                
                <rect x="135" y="50" width="45" height="40" rx="6" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
                <rect x="135" y="110" width="45" height="40" rx="6" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />

                {/* Database cylinders / nodes */}
                <circle cx="42.5" cy="37.5" r="4" fill="#06b6d4" />
                <circle cx="42.5" cy="97.5" r="4" fill="#06b6d4" />
                <circle cx="42.5" cy="157.5" r="4" fill="#06b6d4" />

                {/* Connecting lines */}
                <path d="M 65 37.5 L 100 37.5 L 100 70 L 135 70" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 65 97.5 L 135 70" stroke="#3b82f6" strokeWidth="1.5" />
                <path d="M 65 157.5 L 100 157.5 L 100 130 L 135 130" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
                
                {/* Pulsing travel point */}
                <circle cx="100" cy="70" r="3.5" fill="#ffffff" className="animate-ping" style={{ animationDuration: '2s' }} />
            </svg>
        </div>
    );
}

function WebDevGraphic() {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <svg viewBox="0 0 200 200" className="w-full h-full max-w-[200px] hover:translate-y-[-4px] transition-transform duration-500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Browser Mockup */}
                <rect x="15" y="30" width="170" height="130" rx="10" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
                {/* Browser header */}
                <path d="M 15 50 L 185 50" stroke="#3b82f6" strokeWidth="1.5" />
                {/* Dots */}
                <circle cx="28" cy="40" r="3" fill="#ef4444" />
                <circle cx="38" cy="40" r="3" fill="#eab308" />
                <circle cx="48" cy="40" r="3" fill="#22c55e" />
                {/* Search bar */}
                <rect x="65" y="36" width="90" height="8" rx="4" fill="rgba(255,255,255,0.08)" />

                {/* Content grid */}
                <rect x="30" y="65" width="40" height="40" rx="4" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="1" />
                <rect x="80" y="65" width="90" height="8" rx="2" fill="rgba(255,255,255,0.15)" />
                <rect x="80" y="80" width="70" height="6" rx="2" fill="rgba(255,255,255,0.08)" />
                
                <rect x="30" y="115" width="140" height="30" rx="4" fill="rgba(99, 102, 241, 0.1)" stroke="#6366f1" strokeWidth="1" />
                <circle cx="50" cy="130" r="8" fill="#6366f1" opacity="0.6" />
                <rect x="70" y="127" width="80" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
            </svg>
        </div>
    );
}

function MobileAppGraphic() {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <svg viewBox="0 0 200 200" className="w-full h-full max-w-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Phone mockup */}
                <rect x="50" y="20" width="100" height="160" rx="16" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.8" />
                {/* Speaker */}
                <line x1="90" y1="30" x2="110" y2="30" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Screen widgets */}
                <rect x="62" y="45" width="76" height="36" rx="8" fill="rgba(139, 92, 246, 0.15)" stroke="#a855f7" strokeWidth="1" />
                <circle cx="78" cy="63" r="8" fill="#a855f7" />
                <rect x="94" y="60" width="36" height="6" rx="2" fill="rgba(255,255,255,0.15)" />

                <rect x="62" y="92" width="34" height="34" rx="6" fill="rgba(255,255,255,0.05)" />
                <rect x="104" y="92" width="34" height="34" rx="6" fill="rgba(255,255,255,0.05)" />
                
                <rect x="62" y="136" width="76" height="28" rx="6" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" strokeWidth="1" />
                
                {/* Pulse node */}
                <circle cx="100" cy="150" r="3" fill="#ffffff" className="animate-ping" />
            </svg>
        </div>
    );
}

function DigitalMarketingGraphic() {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <svg viewBox="0 0 200 200" className="w-full h-full max-w-[200px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Chart grids */}
                <path d="M 20 160 L 180 160" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                <path d="M 20 120 L 180 120" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <path d="M 20 80 L 180 80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <path d="M 20 40 L 180 40" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                {/* Graph Analytics path */}
                <path d="M 20 130 Q 55 90, 80 110 T 140 50 T 180 30" stroke="url(#marketing-grad)" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
                
                {/* Highlighted circles */}
                <circle cx="80" cy="110" r="4.5" fill="#14b8a6" stroke="#ffffff" strokeWidth="1" />
                <circle cx="140" cy="50" r="4.5" fill="#06b6d4" stroke="#ffffff" strokeWidth="1" />

                {/* Bars */}
                <rect x="35" y="105" width="10" height="55" rx="2" fill="rgba(20, 184, 166, 0.15)" />
                <rect x="95" y="85" width="10" height="75" rx="2" fill="rgba(20, 184, 166, 0.15)" />
                <rect x="155" y="65" width="10" height="95" rx="2" fill="rgba(6, 182, 212, 0.25)" />

                <defs>
                    <linearGradient id="marketing-grad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#14b8a6" />
                        <stop offset="0.5" stopColor="#06b6d4" />
                        <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

const services = [
    {
        category: "Enterprise Engineering",
        title: "Software Development",
        desc: "We engineer scalable, secure, and blazing fast enterprise software solutions that power billion-dollar workflows.",
        tags: ["Architecture", "Cloud Native", "APIs", "Microservices"],
        Scene: SoftwareDevGraphic,
        colSpan: "lg:col-span-7",
        color: "cyan",
        accent: "from-cyan-500/20 to-blue-500/20"
    },
    {
        category: "Digital Experience",
        title: "Web Platforms",
        desc: "Next-generation web applications built with modern frameworks. Responsive, accessible, and highly optimized.",
        tags: ["React", "Next.js", "Performance", "SSR"],
        Scene: WebDevGraphic,
        colSpan: "lg:col-span-5",
        color: "blue",
        accent: "from-blue-500/20 to-indigo-500/20"
    },
    {
        category: "Mobile Ecosystem",
        title: "Native & Cross-Platform",
        desc: "Mobile experiences that dominate app stores and drive engagement through flawless native and cross-platform architecture.",
        tags: ["iOS", "Android", "React Native", "Flutter"],
        Scene: MobileAppGraphic,
        colSpan: "lg:col-span-5",
        color: "purple",
        accent: "from-purple-500/20 to-fuchsia-500/20"
    },
    {
        category: "Growth Intelligence",
        title: "Digital Analytics",
        desc: "Data-driven marketing, analytics dashboards, and growth architecture to scale your enterprise globally.",
        tags: ["Analytics", "Growth", "SEO", "Conversion"],
        Scene: DigitalMarketingGraphic,
        colSpan: "lg:col-span-7",
        color: "teal",
        accent: "from-teal-500/20 to-emerald-500/20"
    }
];

function ServiceCard({ service }) {
    const gradientColors = {
        cyan: "rgba(34, 211, 238, 0.2)",
        blue: "rgba(59, 130, 246, 0.2)",
        purple: "rgba(139, 92, 246, 0.2)",
        teal: "rgba(20, 184, 166, 0.2)"
    };

    return (
        <div
            className={`group relative flex flex-col lg:flex-row justify-between overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-slate-50/50 dark:bg-white/[0.015] border border-slate-200 dark:border-white/5 backdrop-blur-2xl p-4 md:p-5 lg:p-8 ${service.colSpan} hover:bg-white dark:hover:bg-white/[0.03] hover:-translate-y-1 transition-all duration-500 shadow-premium dark:shadow-2xl`}
        >
            {/* Spotlight Glow (CSS Radial Gradient) */}
            <div
                className="pointer-events-none absolute -inset-px rounded-[1.5rem] md:rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 hidden lg:block"
                style={{
                    background: `radial-gradient(600px circle at 50% 50%, ${gradientColors[service.color]}, transparent 60%)`
                }}
            />

            {/* Moving Gradient Border on Hover */}
            <div className={`pointer-events-none absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] border-[1.5px] border-transparent group-hover:border-slate-300 dark:group-hover:border-white/20 transition-all duration-700 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-20`} />

            {/* Content Left/Top */}
            <div
                className="relative z-10 flex flex-col gap-3 w-full lg:w-1/2 justify-center transition-transform duration-500 group-hover:translate-x-1"
            >

                <h3 className="text-[1.4rem] md:text-[1.8rem] lg:text-[2rem] font-[600] text-slate-900 dark:text-white tracking-[-0.03em] leading-[1.1]">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-[0.95rem] md:text-base leading-7 font-[400] mt-2">{service.desc}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {service.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/80 dark:bg-[#020617]/50 border border-slate-200 dark:border-white/10 text-[11px] md:text-xs text-slate-700 dark:text-slate-300 font-[500] tracking-wide">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* 3D Scene Right/Bottom */}
            <div
                className="relative z-0 h-[180px] md:h-[220px] lg:h-[350px] w-full lg:w-1/2 flex items-center justify-center pointer-events-none mt-6 md:mt-0 transition-transform duration-500 group-hover:scale-105"
            >
                {/* Fallback glow behind the 3D model */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                <service.Scene />
            </div>
        </div>
    );
}

export default function EnterpriseServices() {
    return (
        <section className="font-manrope relative w-full py-[clamp(1.5rem,4vw,4.5rem)] bg-background px-4 md:px-8 lg:px-12 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-[clamp(1.25rem,2.5vw,2rem)]">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <h2
                        className="text-[2rem] md:text-[3rem] lg:text-[4.5rem] font-[600] text-foreground mb-4 tracking-[-0.04em] leading-[1.05]"
                    >
                        Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Solutions</span>
                    </h2>
                    <p
                        className="text-[0.95rem] md:text-base lg:text-lg text-slate-600 dark:text-slate-400 font-[400] leading-7 max-w-2xl"
                    >
                        Scalable architecture built for the modern web. We transform complex problems into elegant, high-performance digital products.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-[clamp(1.25rem,2.5vw,2rem)] auto-rows-fr perspective-1000">
                    {services.map((service, idx) => (
                        <ServiceCard key={idx} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
