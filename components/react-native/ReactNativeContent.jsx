"use client";

import { motion } from "framer-motion";
import { Smartphone, Combine, Gauge, PenTool, CheckCircle, SmartphoneNfc } from "lucide-react";

export default function ReactNativeContent() {
    const features = [
        {
            icon: Combine,
            title: "Cross-Platform Codebase",
            desc: "Write your application logic once in JavaScript/TypeScript and deploy it simultaneously to both iOS and Android."
        },
        {
            icon: Gauge,
            title: "Near-Native Performance",
            desc: "React Native compiles to native OS components, ensuring buttery-smooth animations and high performance."
        },
        {
            icon: PenTool,
            title: "Custom UI/UX",
            desc: "Deliver pixel-perfect, platform-specific user interfaces that feel natural to both Apple and Android users."
        },
        {
            icon: SmartphoneNfc,
            title: "Hardware Integration",
            desc: "Seamlessly connect to native device hardware like cameras, GPS, Bluetooth, and biometric sensors."
        },
        {
            icon: CheckCircle,
            title: "Fast Time-to-Market",
            desc: "Cut development time and cost in half by maintaining a single unified codebase instead of two separate apps."
        },
        {
            icon: Smartphone,
            title: "Over-The-Air Updates",
            desc: "Push critical bug fixes and feature updates directly to users' devices without waiting for App Store approvals."
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
                    Dominate Both App Stores with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">React Native</span>
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
                    <p>
                        Building separate mobile applications for iOS and Android requires massive engineering resources. React Native solves this by allowing developers to write truly native mobile applications using React and JavaScript—cutting development costs in half.
                    </p>
                    <p>
                        RecentureSoft houses top-tier mobile engineering teams that specialize in React Native. We build robust, high-performance cross-platform apps for startups and enterprises alike. From complex state management to integrating native C++ modules, we ensure your app performs flawlessly on every device.
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
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
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
