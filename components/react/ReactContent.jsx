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
        return iconName || FallbackIcon || FileText;
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
        />
    );
}
