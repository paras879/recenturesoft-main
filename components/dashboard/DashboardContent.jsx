"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, BarChart3, LineChart, PieChart, Activity, ShieldCheck, Zap, Database } from "lucide-react";

export default function DashboardContent() {
    const features = [
        {
            icon: LayoutDashboard,
            title: "Customizable Interfaces",
            desc: "Drag-and-drop widgets and personalized layouts tailored to your unique business requirements."
        },
        {
            icon: BarChart3,
            title: "Real-time Analytics",
            desc: "Monitor KPIs and metrics in real-time with automatically refreshing data streams."
        },
        {
            icon: Database,
            title: "Data Integration",
            desc: "Seamlessly connect multiple data sources, APIs, and databases into a single unified view."
        },
        {
            icon: Activity,
            title: "Interactive Reporting",
            desc: "Generate dynamic, interactive reports that allow users to drill down into the specifics."
        },
        {
            icon: ShieldCheck,
            title: "Enterprise Security",
            desc: "Role-based access control and advanced encryption to keep your data secure."
        },
        {
            icon: Zap,
            title: "High Performance",
            desc: "Optimized queries and rendering to ensure your dashboard loads instantly even with big data."
        }
    ];

    return (
        <div className="w-full">
            {/* Intro Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 md:mb-16"
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                    Transform Raw Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Actionable Insights</span>
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
                    <p>
                        In today's fast-paced digital economy, data is your most valuable asset. However, raw data without proper visualization is just noise. At RecentureSoft, we specialize in developing custom, high-performance dashboard applications that consolidate complex datasets into intuitive, easy-to-understand visual interfaces.
                    </p>
                    <p>
                        Whether you need an internal admin panel, a client-facing analytics portal, or a complex financial trading dashboard, our engineering team uses cutting-edge technologies like React, Next.js, and advanced charting libraries to build solutions that empower decision-making.
                    </p>
                </div>
            </motion.div>

            {/* Features Grid */}
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
                            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
