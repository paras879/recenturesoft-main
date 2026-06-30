"use client";

import { motion } from "framer-motion";
import { AppWindow, Layers, RefreshCw, Smartphone, Code2, Users } from "lucide-react";

export default function ReactContent() {
    const features = [
        {
            icon: AppWindow,
            title: "Single Page Applications",
            desc: "Build highly interactive SPAs that deliver a fluid, native-like experience in the browser without reloading."
        },
        {
            icon: Layers,
            title: "Component Reusability",
            desc: "Develop modular, reusable UI components that reduce development time and ensure brand consistency."
        },
        {
            icon: RefreshCw,
            title: "Virtual DOM Performance",
            desc: "Leverage React's Virtual DOM to optimize rendering and provide blazing fast UI updates."
        },
        {
            icon: Smartphone,
            title: "Mobile Ready",
            desc: "Seamlessly transition web components to React Native for accelerated mobile application development."
        },
        {
            icon: Code2,
            title: "Custom Hooks & State",
            desc: "Implement complex business logic cleanly using modern React Hooks and state management tools."
        },
        {
            icon: Users,
            title: "Dedicated React Teams",
            desc: "Hire pre-vetted, elite React developers from our talent pool to scale your engineering capacity."
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
                    Craft Highly Interactive UIs with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">React.js</span>
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
                    <p>
                        React has become the undisputed standard for modern front-end engineering. Created by Meta, it allows developers to build complex, highly interactive user interfaces with incredible performance and maintainability.
                    </p>
                    <p>
                        At RecentureSoft, our elite front-end engineering teams specialize in building scalable React architectures. From state management with Redux or Zustand, to complex form handling and real-time data binding, we deliver React applications that provide seamless, delightful experiences for your end users.
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
                            <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-6 h-6 text-sky-500 dark:text-sky-400" />
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
