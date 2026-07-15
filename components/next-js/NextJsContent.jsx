"use client";

import React from 'react';
import CinematicServiceTemplate from "@/components/shared/CinematicServiceTemplate";
import { Zap, Server, Globe, Search, ArrowUpRight, Blocks, FileText } from "lucide-react";

const iconMap = {
    Zap, Server, Globe, Search, ArrowUpRight, Blocks, FileText
};

export default function NextJsContent({ dynamicData }) {
    const getIcon = (iconName, FallbackIcon) => {
        if (typeof iconName === 'string') {
            return iconMap[iconName] || FallbackIcon || FileText;
        }
        return iconName || FallbackIcon || FileText;
    };

    const content = dynamicData?.content || {};

    const title = content.title || "Build the Future of the Web with";
    const subtitle = content.subtitle || "Next.js";
    const themeColor = content.themeColor || "sky";
    const introParagraphs = content.introParagraphs || [
        "Next.js has revolutionized web development by combining the interactive developer experience of React with the performance benefits of traditional server-rendered applications. At RecentureSoft, we leverage Next.js to build enterprise-grade applications that are insanely fast, highly scalable, and loved by search engines.",
        "Whether you are building a massive e-commerce storefront, a complex SaaS dashboard, or a content-heavy corporate portal, our Next.js experts utilize the latest App Router, React Server Components, and Edge Runtime features to deliver unparalleled digital experiences."
    ];

    const rawFeatures = content.features || [
        {
            icon: "Server",
            title: "Server-Side Rendering (SSR)",
            desc: "Deliver fully rendered HTML from the server for lightning-fast initial page loads and superior SEO.",
            highlights: ["Instant page loads", "Zero layout shift", "Dynamic personalized content"]
        },
        {
            icon: "Zap",
            title: "Static Site Generation (SSG)",
            desc: "Pre-render pages at build time to achieve instantaneous load times and massive scalability.",
            highlights: ["Millisecond TTFB", "Infinitely scalable", "Global CDN delivery"]
        },
        {
            icon: "Search",
            title: "SEO Optimized",
            desc: "Built-in metadata management and server-rendered content make Next.js the absolute best choice for search rankings.",
            highlights: ["Perfect Core Web Vitals", "Dynamic meta tags", "Sitemap generation"]
        },
        {
            icon: "Globe",
            title: "Edge Computing",
            desc: "Deploy serverless functions and middleware to the edge, closer to your users for zero latency.",
            highlights: ["Edge Middleware", "A/B Testing at the Edge", "Bot protection"]
        },
        {
            icon: "Blocks",
            title: "Component Architecture",
            desc: "Leverage React's reusable component model for modular, maintainable, and scalable codebases.",
            highlights: ["React Server Components", "Micro-frontend ready", "Storybook integration"]
        },
        {
            icon: "ArrowUpRight",
            title: "High Core Web Vitals",
            desc: "Achieve perfect Lighthouse scores with automatic image optimization, font loading, and script prioritization.",
            highlights: ["next/image optimization", "next/font support", "Third-party script loading"]
        }
    ];

    const features = rawFeatures.map(f => ({
        ...f,
        icon: getIcon(f.icon, Server)
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
