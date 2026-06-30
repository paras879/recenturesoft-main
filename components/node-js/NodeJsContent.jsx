"use client";

import { motion } from "framer-motion";
import { ServerCog, Zap, Network, Lock, Database, Code2 } from "lucide-react";

export default function NodeJsContent() {
    const features = [
        {
            icon: Zap,
            title: "Event-Driven Architecture",
            desc: "Non-blocking I/O operations make Node.js incredibly lightweight and efficient for real-time applications."
        },
        {
            icon: Network,
            title: "Microservices & APIs",
            desc: "Build scalable REST and GraphQL APIs that serve as the backbone for your web and mobile clients."
        },
        {
            icon: Database,
            title: "Database Integration",
            desc: "Seamless connectivity with MongoDB, PostgreSQL, Redis, and other modern databases."
        },
        {
            icon: ServerCog,
            title: "High Scalability",
            desc: "Easily scale horizontally and vertically to handle thousands of concurrent connections with minimal overhead."
        },
        {
            icon: Lock,
            title: "Enterprise Security",
            desc: "Implement JWT authentication, rate limiting, data encryption, and robust middleware pipelines."
        },
        {
            icon: Code2,
            title: "Full-Stack JavaScript",
            desc: "Unify your engineering stack by using JavaScript on both the client (React/Next) and the server (Node)."
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
                    Power Your Backend with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500">Node.js</span>
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed space-y-4">
                    <p>
                        Node.js has fundamentally transformed backend development. By bringing JavaScript to the server, it enables developers to build highly scalable, data-intensive, and real-time applications that perform brilliantly under heavy loads.
                    </p>
                    <p>
                        At RecentureSoft, our backend engineering teams specialize in architecting robust Node.js solutions. Whether it is a massive microservices architecture, a real-time chat application using WebSockets, or a high-throughput API gateway, we write clean, secure, and highly optimized Node.js code that powers enterprise businesses.
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
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
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
