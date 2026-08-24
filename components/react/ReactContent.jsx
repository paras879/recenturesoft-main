"use client";

import React from 'react';
import CinematicServiceTemplate from "@/components/shared/CinematicServiceTemplate";
import { AppWindow, Layers, RefreshCw, Smartphone, Code2, Users, FileText } from "lucide-react";

const iconMap = {
    AppWindow, Layers, RefreshCw, Smartphone, Code2, Users, FileText
};

export default function ReactContent({ dynamicData }) {
    const getIcon = (iconName, FallbackIcon) => {
        if (typeof iconName === 'string') {
            return iconMap[iconName] || FallbackIcon || FileText;
        }
        return FallbackIcon || FileText;
    };

    const content = dynamicData?.content || {};

    const title = content.title || "Craft Highly Interactive UIs with";
    const subtitle = content.subtitle || "React.js";
    const themeColor = content.themeColor || "sky";
    const introParagraphs = content.introParagraphs || [
        "React has become the undisputed standard for modern front-end engineering. Created by Meta, it allows developers to build complex, highly interactive user interfaces with incredible performance and maintainability.",
        "At RecentureSoft, our elite front-end engineering teams specialize in building scalable React architectures. From state management with Redux or Zustand, to complex form handling and real-time data binding, we deliver React applications that provide seamless, delightful experiences for your end users."
    ];

    const rawFeatures = content.features || [
        {
            icon: "AppWindow",
            title: "Single Page Applications",
            desc: "Build highly interactive SPAs that deliver a fluid, native-like experience in the browser without reloading.",
            highlights: ["Fluid transitions", "Client-side routing", "Desktop-like feel"]
        },
        {
            icon: "Layers",
            title: "Component Reusability",
            desc: "Develop modular, reusable UI components that reduce development time and ensure brand consistency.",
            highlights: ["Design System integration", "Storybook ready", "Reduced code duplication"]
        },
        {
            icon: "RefreshCw",
            title: "Virtual DOM Performance",
            desc: "Leverage React's Virtual DOM to optimize rendering and provide blazing fast UI updates.",
            highlights: ["Efficient DOM diffing", "Optimized re-renders", "60 FPS animations"]
        },
        {
            icon: "Smartphone",
            title: "Mobile Ready",
            desc: "Seamlessly transition web components to React Native for accelerated mobile application development.",
            highlights: ["Shared business logic", "Universal components", "Faster mobile delivery"]
        },
        {
            icon: "Code2",
            title: "Custom Hooks & State",
            desc: "Implement complex business logic cleanly using modern React Hooks and state management tools.",
            highlights: ["Redux & Zustand", "Custom business hooks", "Predictable state"]
        },
        {
            icon: "Users",
            title: "Dedicated React Teams",
            desc: "Hire pre-vetted, elite React developers from our talent pool to scale your engineering capacity.",
            highlights: ["Senior React engineers", "Agile methodologies", "Seamless team integration"]
        }
    ];

    const features = rawFeatures.map(f => ({
        ...f,
        icon: getIcon(f.icon, AppWindow)
    }));

    const hiringTitle = content.hiringTitle ?? "Hiring Process With RecentureSoft";
    const hiringIntro = content.hiringIntro ?? "Once you have recruited our professional UI/UX design services, here’s what will happen next:";
    const hiringSteps = content.hiringSteps ?? [
        { title: "Get a quote", desc: "Commence the process by requesting a complimentary quote. Our company’s support team will get in touch with you to discuss your website requirements and share a tailored quote." },
        { title: "Choose a plan", desc: "Our team offers an array of React JS development packages in India for sites of varying complexity and size. You may pick one as per your needs and budget." },
        { title: "Onboard", desc: "We start the onboarding process right after you pick a package from the list. With vital details on your site, we communicate clearly for a hassle-free transition." },
        { title: "Get support", desc: "Now relax as our experienced support team will build your website, which will remain secure and optimized." }
    ];
    const hiringOutro = content.hiringOutro ?? "Wondering about hiring a React JS development company in India to make your dream business successful? RecentureSoft is a top-notch React JS development company with a team of developers who can create remarkable, tailored web apps.";

    return (
        <CinematicServiceTemplate
            title={title}
            subtitle={subtitle}
            themeColor={themeColor}
            introParagraphs={introParagraphs}
            features={features}
            ctaTitle={content.ctaTitle}
            ctaSubtitle={content.ctaSubtitle}
            ctaBtnText={content.ctaBtnText}
            ctaBtnLink={content.ctaBtnLink}
        >
            {/* Hiring Process Section */}
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                        {hiringTitle}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        {hiringIntro}
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
                    {hiringSteps.map((step, index) => (
                        <div key={index} className="relative p-6 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700 hover:-translate-y-1 transition-transform group">
                            <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 font-bold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center max-w-4xl mx-auto p-6 bg-sky-50 dark:bg-sky-900/20 rounded-2xl border border-sky-100 dark:border-sky-800/30">
                    <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                        {hiringOutro}
                    </p>
                </div>
            </div>
        </CinematicServiceTemplate>
    );
}
