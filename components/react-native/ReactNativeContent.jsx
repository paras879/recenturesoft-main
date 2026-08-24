"use client";

import React from 'react';
import CinematicServiceTemplate from "@/components/shared/CinematicServiceTemplate";
import { Smartphone, Combine, Gauge, PenTool, CheckCircle, CheckCircle2, SmartphoneNfc, FileText } from "lucide-react";

const iconMap = {
    Smartphone, Combine, Gauge, PenTool, CheckCircle, SmartphoneNfc, FileText
};

export default function ReactNativeContent({ dynamicData }) {
    const getIcon = (iconName, FallbackIcon) => {
        if (typeof iconName === 'string') {
            return iconMap[iconName] || FallbackIcon || FileText;
        }
        return iconName || FallbackIcon || FileText;
    };

    const content = dynamicData?.content || {};

    const title = content.title || "Dominate Both App Stores with";
    const subtitle = content.subtitle || "React Native";
    const themeColor = content.themeColor || "sky";
    const introParagraphs = content.introParagraphs || [
        "Building separate mobile applications for iOS and Android requires massive engineering resources. React Native solves this by allowing developers to write truly native mobile applications using React and JavaScript—cutting development costs in half.",
        "RecentureSoft houses top-tier mobile engineering teams that specialize in React Native. We build robust, high-performance cross-platform apps for startups and enterprises alike. From complex state management to integrating native C++ modules, we ensure your app performs flawlessly on every device."
    ];

    const rawFeatures = content.features || [
        {
            icon: "Combine",
            title: "Cross-Platform Codebase",
            desc: "Write your application logic once in JavaScript/TypeScript and deploy it simultaneously to both iOS and Android.",
            highlights: ["Unified codebase", "Lower maintenance cost", "Consistent logic"]
        },
        {
            icon: "Gauge",
            title: "Near-Native Performance",
            desc: "React Native compiles to native OS components, ensuring buttery-smooth animations and high performance.",
            highlights: ["Hermes JS Engine", "60 FPS Animations", "JIT Compilation"]
        },
        {
            icon: "PenTool",
            title: "Custom UI/UX",
            desc: "Deliver pixel-perfect, platform-specific user interfaces that feel natural to both Apple and Android users.",
            highlights: ["Platform-specific UI", "Native feel", "Custom animations"]
        },
        {
            icon: "SmartphoneNfc",
            title: "Hardware Integration",
            desc: "Seamlessly connect to native device hardware like cameras, GPS, Bluetooth, and biometric sensors.",
            highlights: ["FaceID & TouchID", "Bluetooth Low Energy", "Native camera APIs"]
        },
        {
            icon: "CheckCircle",
            title: "Fast Time-to-Market",
            desc: "Cut development time and cost in half by maintaining a single unified codebase instead of two separate apps.",
            highlights: ["Rapid prototyping", "Simultaneous launch", "Hot Reloading"]
        },
        {
            icon: "Smartphone",
            title: "Over-The-Air Updates",
            desc: "Push critical bug fixes and feature updates directly to users' devices without waiting for App Store approvals.",
            highlights: ["CodePush integration", "Instant bug fixes", "A/B Testing"]
        }
    ];

    const features = rawFeatures.map(f => ({
        ...f,
        icon: getIcon(f.icon, Smartphone)
    }));

    const stepsTitle = content.stepsTitle || "Steps Our Team Follows To Develop Apps";
    const stepsIntro = content.stepsIntro || "Our professional team of developers and designers follow a structured approach to deliver reliable, secure, and scalable mobile applications. Below is a breakdown of the steps we follow for app development:";
    const stepsList = content.stepsList || [
        { title: "Analysis", desc: "We begin by analysing the business goals, technical complexities, and app requirements." },
        { title: "UI/UX design", desc: "Next, our designers create engaging layouts, wireframes, prototypes and user flows." },
        { title: "Project planning", desc: "Then, we choose coding tools, development workflows, and other necessary resources to plan the execution of the project." },
        { title: "Development", desc: "Later, our developers build functionality and write clean, manageable code to optimise performance for both Android and iOS from a single codebase." },
        { title: "Integration", desc: "We integrate custom APIs, payment gateways and cloud platforms for seamless data exchange between the app and backend system." },
        { title: "Quality testing", desc: "Our team performs various tests for performance, usability and security in the app across multiple devices." },
        { title: "Deployment", desc: "Next, we deploy the app on the Google Play Store and Apple App Store." },
        { title: "Ongoing maintenance support", desc: "After launch, our team monitors the app to keep it secure and performing." }
    ];

    const whyChooseTitle = content.whyChooseTitle || "Why Choose Recenturesoft For React Native Development?";
    const whyChooseIntro = content.whyChooseIntro || "We are one of the most trusted and experienced React Native development companies in India, bringing results and growth for your business. We offer:";
    const whyChoosePoints = content.whyChoosePoints || [
        "Experienced developers and designers",
        "Transparent communication",
        "Flexible models",
        "Timely project delivery",
        "Secure codes",
        "Scalable architecture",
        "Dedicated project management",
        "Post-launch technical support"
    ];
    const whyChooseOutro = content.whyChooseOutro || "Our React Native development packages in India vary based on business requirements and application complexities.";

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
            {/* New Sections Requested by User */}
            
            {/* Steps Section */}
            <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                        {stepsTitle}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        {stepsIntro}
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {stepsList.map((step, index) => (
                        <div key={index} className="relative p-6 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700 hover:-translate-y-1 transition-transform group">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Section */}
            <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-3xl p-8 md:p-12 border border-indigo-100 dark:border-indigo-900/30">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                        {whyChooseTitle}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        {whyChooseIntro}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {whyChoosePoints.map((point, index) => (
                        <div key={index} className="flex items-center gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                            <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                                <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <span className="font-medium text-slate-800 dark:text-slate-200">{point}</span>
                        </div>
                    ))}
                </div>

                {whyChooseOutro && (
                    <p className="text-center text-slate-500 dark:text-slate-400 italic">
                        {whyChooseOutro}
                    </p>
                )}
            </div>

        </CinematicServiceTemplate>
    );
}
