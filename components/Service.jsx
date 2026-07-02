"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// ── Slideshow Frame: Works with ANY number of images ──
// activeSlide = current index, images = array of URLs (any length)

function LaptopFrame({ activeSlide, images, fallbacks }) {
    const imgs = images && images.length > 0 ? images : fallbacks;

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full max-w-[320px] md:max-w-[420px] lg:max-w-[550px] flex flex-col items-center group">
                <div className="w-full aspect-[16/10] bg-slate-800 rounded-t-xl md:rounded-t-2xl border-[6px] border-slate-800 shadow-2xl overflow-hidden relative z-10">
                    {imgs.map((src, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === activeSlide % imgs.length ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <Image
                                src={src}
                                alt={`Slide ${i + 1}`}
                                fill
                                sizes="(max-width: 768px) 320px, (max-width: 1024px) 420px, 550px"
                                className="object-contain block bg-white dark:bg-slate-900"
                                quality={60}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
                {/* Laptop Base */}
                <div className="w-[115%] h-3 md:h-4 bg-slate-300 dark:bg-slate-700 rounded-b-xl md:rounded-b-2xl shadow-xl relative z-20 border-t border-slate-400 dark:border-slate-600 flex justify-center">
                    <div className="w-1/4 h-1 md:h-1.5 bg-slate-400 dark:bg-slate-500 rounded-b-md" />
                </div>
            </div>
        </div>
    );
}

function PhoneFrame({ activeSlide, images, fallbacks }) {
    const imgs = images && images.length > 0 ? images : fallbacks;

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <div className="relative w-[100px] md:w-[140px] lg:w-[160px] aspect-[9/19] bg-white dark:bg-slate-900 rounded-[1rem] border-[5px] md:border-[6px] border-slate-900 shadow-2xl overflow-hidden group">
                {/* iPhone Notch */}
                <div className="w-full h-full relative z-10">
                    {imgs.map((src, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === activeSlide % imgs.length ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <Image
                                src={src}
                                alt={`Mobile Slide ${i + 1}`}
                                fill
                                sizes="(max-width: 768px) 100px, (max-width: 1024px) 140px, 160px"
                                className="object-contain block bg-white dark:bg-slate-900"
                                quality={60}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function SoftwareDevGraphic({ activeSlide = 0, images = [] }) {
    return <LaptopFrame activeSlide={activeSlide} images={images} fallbacks={["/software-1.png", "/software-2.png"]} />;
}

function WebDevGraphic({ activeSlide = 0, images = [] }) {
    return <LaptopFrame activeSlide={activeSlide} images={images} fallbacks={["/desktop-mockup.png", "/desktop-mockup-1.png"]} />;
}

function DigitalMarketingGraphic({ activeSlide = 0, images = [] }) {
    return <LaptopFrame activeSlide={activeSlide} images={images} fallbacks={["/marketing.png", "/marketing.png"]} />;
}

function MobileAppGraphic({ activeSlide = 0, images = [] }) {
    return <PhoneFrame activeSlide={activeSlide} images={images} fallbacks={["/mobile-mockup.png", "/mobile-mockup-1.png"]} />;
}

// Scene mapping
const SceneMap = {
    "SoftwareDevGraphic": SoftwareDevGraphic,
    "DigitalMarketingGraphic": DigitalMarketingGraphic,
    "MobileAppGraphic": MobileAppGraphic,
    "WebDevGraphic": WebDevGraphic,
};

function ServiceCard({ service, activeSlide }) {
    const shadowColors = {
        cyan: "dark:hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.15)] hover:shadow-[0_20px_40px_-15px_rgba(34,211,238,0.2)]",
        blue: "dark:hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)]",
        purple: "dark:hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)] hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.2)]",
        teal: "dark:hover:shadow-[0_0_40px_-10px_rgba(20,184,166,0.15)] hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.2)]"
    };

    // Dot indicators for multi-image services
    const imgCount = (service.images || []).length;

    return (
        <div
            className={`group relative flex flex-col lg:flex-row justify-between overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white/40 dark:bg-white/[0.015] border border-slate-200 dark:border-white/5 backdrop-blur-xl p-4 md:p-5 lg:p-8 ${service.colSpan || 'lg:col-span-6'} hover:bg-white/80 dark:hover:bg-white/[0.03] hover:-translate-y-2 transition-all duration-700 ease-out shadow-sm ${shadowColors[service.color || 'cyan']}`}
        >
            {/* Subtle Gradient Wash */}
            <div className={`pointer-events-none absolute inset-0 rounded-[1.5rem] md:rounded-[2rem] border-[1.5px] border-transparent group-hover:border-slate-300 dark:group-hover:border-white/20 transition-all duration-700 bg-gradient-to-br ${service.accent || 'from-cyan-500/20 to-blue-500/20'} opacity-0 group-hover:opacity-[0.03]`} />

            {/* Content Left/Top */}
            <div className="relative z-10 flex flex-col gap-3 w-full lg:w-1/2 justify-center transition-all duration-700 ease-out group-hover:translate-x-2 group-hover:-translate-y-1">
                <h3 className="text-[1.4rem] md:text-[1.8rem] lg:text-[2rem] font-[600] text-slate-900 dark:text-white tracking-[-0.03em] leading-[1.1] transition-colors duration-500">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-[0.95rem] md:text-base leading-7 font-[400] mt-2 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-500">{service.description || service.shortDescription}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {(service.features || []).map((tag, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/80 dark:bg-[#020617]/50 border border-slate-200 dark:border-white/10 text-[11px] md:text-xs text-slate-700 dark:text-slate-300 font-[500] tracking-wide group-hover:border-slate-300 dark:group-hover:border-white/20 transition-all duration-500">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Slide dot indicators */}
                {imgCount > 1 && (
                    <div className="flex gap-1.5 mt-2">
                        {(service.images || []).map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 rounded-full transition-all duration-500 ${i === activeSlide % imgCount ? 'w-4 bg-cyan-500' : 'w-1 bg-slate-300 dark:bg-white/20'}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Scene / Mockup Right */}
            <div className="relative z-0 h-[220px] md:h-[260px] lg:h-[320px] w-full lg:w-1/2 flex items-center justify-center pointer-events-none mt-3 md:mt-0 transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:-translate-y-2 group-hover:-translate-x-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent || 'from-cyan-500/20 to-blue-500/20'} blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-700`} />
                {service.scene && SceneMap[service.scene] ? (
                    React.createElement(SceneMap[service.scene], { activeSlide, images: service.images || [] })
                ) : null}
            </div>
        </div>
    );
}

// Default export: receives services as props from server component (page.tsx)
export default function EnterpriseServices({ services = [], cmsData = {} }) {
    const [activeSlide, setActiveSlide] = useState(0);

    // Max images across all services — drives how many slides to cycle through
    const maxImages = services.reduce((max, s) => Math.max(max, (s.images || []).length || 1), 1);

    // Use a ref so the interval can always see the latest maxImages
    // without needing it in the deps array (which would change size)
    const maxImagesRef = useRef(maxImages);

    useEffect(() => {
        // Update ref inside effect (not during render)
        maxImagesRef.current = maxImages;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide(prev => (prev + 1) % Math.max(maxImagesRef.current, 1));
        }, 4000);
        return () => clearInterval(interval);
    }, []); // stable [] — maxImages read via ref inside interval

    if (!services || services.length === 0) {
        return null;
    }

    return (
        <section className="font-manrope relative w-full py-[clamp(0.5rem,2vw,1rem)] bg-background px-4 md:px-8 lg:px-12 transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-4">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <h2 className="text-[2rem] md:text-[3rem] lg:text-[4.5rem] font-[600] text-foreground mb-1 tracking-[-0.04em] leading-[1.05]">
                        {cmsData.services?.heading1 || "Enterprise"} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">{cmsData.services?.headingAccent || "Solutions"}</span>
                    </h2>
                    <p className="text-[0.95rem] md:text-base lg:text-lg text-slate-600 dark:text-slate-400 font-[400] leading-7 max-w-2xl whitespace-pre-line">
                        {cmsData.services?.desc || "Scalable architecture built for the modern web. We transform complex problems into elegant, high-performance digital products."}
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-[clamp(1.25rem,2.5vw,2rem)] auto-rows-fr perspective-1000">
                    {services.map((service, idx) => (
                        <ServiceCard key={service._id || idx} service={service} activeSlide={activeSlide} />
                    ))}
                </div>
            </div>
        </section>
    );
}
