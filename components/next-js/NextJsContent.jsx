"use client";

import CinematicServiceTemplate from "@/components/shared/CinematicServiceTemplate";
import { Zap, Server, Globe, Search, ArrowUpRight, Blocks } from "lucide-react";

export default function NextJsContent() {
    const features = [
        {
            icon: Server,
            title: "Server-Side Rendering (SSR)",
            desc: "Deliver fully rendered HTML from the server for lightning-fast initial page loads and superior SEO.",
            highlights: ["Instant page loads", "Zero layout shift", "Dynamic personalized content"]
        },
        {
            icon: Zap,
            title: "Static Site Generation (SSG)",
            desc: "Pre-render pages at build time to achieve instantaneous load times and massive scalability.",
            highlights: ["Millisecond TTFB", "Infinitely scalable", "Global CDN delivery"]
        },
        {
            icon: Search,
            title: "SEO Optimized",
            desc: "Built-in metadata management and server-rendered content make Next.js the absolute best choice for search rankings.",
            highlights: ["Perfect Core Web Vitals", "Dynamic meta tags", "Sitemap generation"]
        },
        {
            icon: Globe,
            title: "Edge Computing",
            desc: "Deploy serverless functions and middleware to the edge, closer to your users for zero latency.",
            highlights: ["Edge Middleware", "A/B Testing at the Edge", "Bot protection"]
        },
        {
            icon: Blocks,
            title: "Component Architecture",
            desc: "Leverage React's reusable component model for modular, maintainable, and scalable codebases.",
            highlights: ["React Server Components", "Micro-frontend ready", "Storybook integration"]
        },
        {
            icon: ArrowUpRight,
            title: "High Core Web Vitals",
            desc: "Achieve perfect Lighthouse scores with automatic image optimization, font loading, and script prioritization.",
            highlights: ["next/image optimization", "next/font support", "Third-party script loading"]
        }
    ];

    return (
        <CinematicServiceTemplate
            title="Build the Future of the Web with"
            subtitle="Next.js"
            themeColor="sky"
            introParagraphs={[
                "Next.js has revolutionized web development by combining the interactive developer experience of React with the performance benefits of traditional server-rendered applications. At RecentureSoft, we leverage Next.js to build enterprise-grade applications that are insanely fast, highly scalable, and loved by search engines.",
                "Whether you are building a massive e-commerce storefront, a complex SaaS dashboard, or a content-heavy corporate portal, our Next.js experts utilize the latest App Router, React Server Components, and Edge Runtime features to deliver unparalleled digital experiences."
            ]}
            features={features}
        />
    );
}
