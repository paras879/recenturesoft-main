"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ShoppingCart, TrendingUp, BarChart3, Package, Users, 
    Settings, Search, Star, Activity, MonitorSmartphone, 
    CheckCircle2, Target, Lightbulb, ChevronDown, Rocket, PenTool
} from "lucide-react";

export default function AmazonStoreContent() {
    const services = [
        { icon: Package, title: "FBA Setup & Management", desc: "Full-scale Amazon FBA store setup. We analyze your inventory, select items, and reduce expenses to produce better profits." },
        { icon: BarChart3, title: "Powerful Analytics", desc: "Gain relevant insights to make better decisions. We analyze marketing and daily operations data to add tremendous value." },
        { icon: Settings, title: "Marketplace Management", desc: "Complete lifecycle management, product listing optimization with high-volume keywords, and efficient inventory tracking." },
        { icon: Users, title: "Seller Account Setup", desc: "Connect with the global market through robust seller central setups, brand registry, sponsored ads, and feedback management." },
        { icon: PenTool, title: "Product Listing", desc: "Creation and management of live product listings adhering strictly to Amazon's regulatory guidelines for better visibility." }
    ];

    const benefits = [
        { icon: Star, title: "Active Engagement", desc: "Improve brand image and build emotional connections to increase customer acquisition and retention." },
        { icon: Activity, title: "Increase Performance", desc: "Boost repeat purchases and customer satisfaction by incorporating the latest eCommerce trends." },
        { icon: Target, title: "Targeted Advertising", desc: "Link Sponsored Brand ads with your store to improve Return on Ad Spend (ROAS) up to 22%." },
        { icon: MonitorSmartphone, title: "Improve Discoverability", desc: "Get brand logos and banners integrated within product detail pages for a better customer experience." },
        { icon: TrendingUp, title: "Drive Traffic", desc: "Premium solutions that drive external traffic and leads directly to your Amazon storefront." },
        { icon: Search, title: "Higher Rankings", desc: "Achieve higher organic search rankings on Amazon, getting you listed above your competition." }
    ];

    const processSteps = [
        "Amazon Account Set up",
        "Amazon Account Optimisation",
        "Amazon Listing Optimisation",
        "Amazon Keyword Research",
        "Amazon E-commerce Copywriting",
        "Amazon FBA & FBA Management",
        "Enhanced Content & Branding",
        "Amazon PPC setup",
        "Review Solicitation"
    ];

    const faqs = [
        {
            question: "What is Amazon store management?",
            answer: "Our Amazon Store Management Services contains Amazon store setup, account management, seller central management, vendor central management services, product listing creation, inventory management, PPC services, Customer service, and much more."
        },
        {
            question: "What can you do at an Amazon store?",
            answer: "Amazon Stores can be used by vendors to showcase a collection of products to improve the brand and drive sales forward. These stores can offer a brand-centric shopping experience on Amazon's desktop plus mobile platforms."
        },
        {
            question: "What are Amazon store management services?",
            answer: "Companies can improve their visibility plus sales on Amazon with the help of comprehensive Amazon store management services including listing optimization and marketing."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);
    const toggleFaq = (index) => setOpenIndex(openIndex === index ? -1 : index);

    return (
        <div className="w-full mt-4 mb-4">
            {/* Intro Section */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-16 text-center px-4">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">
                    Manage Items Better with <span className="text-blue-500">Amazon Store Management</span>
                </h3>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                    Making a powerful presence on Amazon requires deep knowledge of the eCommerce sector. Recenturesoft is a well-known Amazon store management service provider in India, offering seamless lifecycle integration for large, medium, and small companies.
                </p>
            </div>

            {/* Services Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                Our Wide Range of Amazon Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Development Process */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 mb-20">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-white text-center">
                    Amazon Store Management Process
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                            <Lightbulb className="w-6 h-6 text-blue-500" /> Analysis & Roadmap
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            We sit down with you to know your vision for your online store. After analyzing your business, we create a roadmap and mark milestones to ensure our team delivers the project right on time.
                        </p>
                        
                        <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                            <Rocket className="w-6 h-6 text-blue-500" /> Launch & Support
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Once all steps are completed, we ensure all products are listed and perfectly integrated. We continue to offer 24/7 support and maintenance to ensure your platform performs beautifully at all times.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Our Development Checklist</h4>
                        <ul className="space-y-4 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                            {processSteps.map((step, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Benefits Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                Benefits Of Professional Management
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {benefits.map((benefit, i) => {
                    const Icon = benefit.icon;
                    return (
                        <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-full shadow-sm text-blue-500 mb-4">
                                <Icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{benefit.desc}</p>
                        </div>
                    );
                })}
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto w-full mb-12">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                        Frequently Asked <span className="text-blue-500 dark:text-blue-400">Questions</span>
                    </h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? "text-blue-500 dark:text-blue-400" : "text-slate-900 dark:text-white"}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 transition-transform duration-500 ${isOpen ? "rotate-180 bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400" : "text-slate-500"}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-300">
                                                <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mb-6"></div>
                                                <p className="mb-4 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
