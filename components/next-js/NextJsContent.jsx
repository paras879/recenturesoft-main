"use client";

import { motion } from "framer-motion";
import { Zap, Server, Globe, Search, ArrowUpRight, Blocks } from "lucide-react";

export default function NextJsContent() {
    const features = [
        {
            icon: Server,
            title: "Server-Side Rendering (SSR)",
            desc: "Deliver fully rendered HTML from the server for lightning-fast initial page loads and superior SEO."
        },
        {
            icon: Zap,
            title: "Static Site Generation (SSG)",
            desc: "Pre-render pages at build time to achieve instantaneous load times and massive scalability."
        },
        {
            icon: Search,
            title: "SEO Optimized",
            desc: "Built-in metadata management and server-rendered content make Next.js the absolute best choice for search rankings."
        },
        {
            icon: Globe,
            title: "Edge Computing",
            desc: "Deploy serverless functions and middleware to the edge, closer to your users for zero latency."
        },
        {
            icon: Blocks,
            title: "Component Architecture",
            desc: "Leverage React's reusable component model for modular, maintainable, and scalable codebases."
        },
        {
            icon: ArrowUpRight,
            title: "High Core Web Vitals",
            desc: "Achieve perfect Lighthouse scores with automatic image optimization, font loading, and script prioritization."
        }
    ];

    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 md:mb-16"
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    Build the Future of the Web with <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-slate-600 dark:from-white dark:to-slate-400">Next.js</span>
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
                    <p>
                        Next.js has revolutionized web development by combining the interactive developer experience of React with the performance benefits of traditional server-rendered applications. At RecentureSoft, we leverage Next.js to build enterprise-grade applications that are insanely fast, highly scalable, and loved by search engines.
                    </p>
                    <p>
                        Whether you are building a massive e-commerce storefront, a complex SaaS dashboard, or a content-heavy corporate portal, our Next.js experts utilize the latest App Router, React Server Components, and Edge Runtime features to deliver unparalleled digital experiences.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
                {features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-6 h-6 text-slate-900 dark:text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
