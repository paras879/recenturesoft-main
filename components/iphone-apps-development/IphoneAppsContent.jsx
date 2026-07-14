"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Smartphone, PenTool, Globe, Layers, Settings, ShieldCheck, 
    Zap, Rocket, Users, Lock, ChevronDown, CheckCircle2,
    MonitorPlay, Watch, Briefcase, ShoppingCart, HeartPulse, 
    Plane, Gamepad2, GraduationCap, Car, Truck, Code2, CheckSquare, FileText
} from "lucide-react";

// Custom icon since TrendingUpIcon doesn't exist in standard lucide exports, it's just TrendingUp
function TrendingUpIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
        </svg>
    );
}

const iconMap = {
    Smartphone, PenTool, Globe, Layers, Settings, ShieldCheck, 
    Zap, Rocket, Users, Lock, ChevronDown, CheckCircle2,
    MonitorPlay, Watch, Briefcase, ShoppingCart, HeartPulse, 
    Plane, Gamepad2, GraduationCap, Car, Truck, Code2, CheckSquare, FileText,
    TrendingUpIcon
};

export default function IphoneAppsContent({ dynamicData }) {
    const getIcon = (iconName, FallbackIcon) => {
        if (typeof iconName === 'string' && iconMap[iconName]) {
            return iconMap[iconName];
        }
        return iconName || FallbackIcon || FileText;
    };

    const content = dynamicData?.content || {};

    const introText = content.introText || "The demand for Apple devices is emerging globally. We are a pre-eminent iOS app development company offering hassle-free and outstanding iPhone development services incorporating cutting-edge methodologies to help you lead the industry.";

    // Core Solutions Grid
    const solutionsTitle = content.solutionsTitle || "Top-Notch iPhone App Solutions";
    const solutions = content.solutions || [
        { icon: "PenTool", title: "iOS UI/UX Design", desc: "Immersive and memorable UI/UX designs perfectly aligned with what your customers expect from the Apple ecosystem." },
        { icon: "Globe", title: "iOS App Consultation", desc: "Expert guidance in deciding whether iOS is an appropriate fit and selecting the right technology stack for your company." },
        { icon: "Layers", title: "Native & Custom iOS Dev", desc: "High-performance native apps enabling better access to default Apple functionalities and tailored custom solutions." },
        { icon: "Zap", title: "IoT Powered iOS Apps", desc: "Harness state-of-the-art tools and IoT integration to bring complex, connected smart device applications to life." },
        { icon: "ShieldCheck", title: "Enterprise & Integration", desc: "Robust applications for internal usage and enterprise capabilities with smooth integration of newer technologies." },
        { icon: "Settings", title: "Testing, Maintenance & Migration", desc: "End-to-end QA testing, real-time maintenance, and hassle-free migration to newer versions of the iOS platform." }
    ];

    // Why iOS & Partner
    const whyIosTitle = content.whyIosTitle || "Why iOS Platform?";
    const whyIos = content.whyIos || [
        { icon: "HeartPulse", title: "Excellent User Experience", desc: "iPhone applications make customers happy with their brilliant, smooth user experiences." },
        { icon: "TrendingUpIcon", title: "Revenue Generation", desc: "iPhone applications generally have a much higher return on investment compared to other platforms." },
        { icon: "Lock", title: "Top-Class Security", desc: "The iOS ecosystem provides top-tier data security assurance for your organization and users." },
        { icon: "Rocket", title: "Quicker Development", desc: "iOS applications tend to take lesser time to develop than alternatives with similar specifications." }
    ];

    const whyPartnerTitle = content.whyPartnerTitle || "Why Partner With Us?";
    const whyPartner = content.whyPartner || [
        "Agile Scrum Methodology",
        "Dedicated Expert Teams",
        "Competitive & Lowest Pricing",
        "Integrity & 100% Transparency",
        "Flexible Engagement Models",
        "Strict Quality Assurance"
    ];

    const devicesTitle = content.devicesTitle || "Devices We Support";
    const devices = content.devices || [
        { icon: "Smartphone", label: "iPhone" },
        { icon: "MonitorPlay", label: "iPad" },
        { icon: "Globe", label: "Apple TV" },
        { icon: "Watch", label: "Apple Watch" }
    ];

    // Development Process Timeline
    const processTitle = content.processTitle || "Full Suite iOS Application Process";
    const process = content.process || [
        { title: "Requirement Understanding", desc: "Analyzing features and building a vision." },
        { title: "Creating Wireframes", desc: "Designing visual guides and application prototypes." },
        { title: "Project Kickoff", desc: "Discussing technologies, tools, teams, and frameworks." },
        { title: "UI/UX Design", desc: "Designing the interface suitable for your business." },
        { title: "Development & Testing", desc: "Quality-oriented coding and thorough QA testing." },
        { title: "Launch & Maintenance", desc: "Deploying the app and providing 24/7 ongoing support." }
    ];

    // Diverse Industry Experience
    const industriesTitle = content.industriesTitle || "Diverse Industry Experience";
    const industries = content.industries || [
        { icon: "ShoppingCart", label: "Retail & eCommerce" },
        { icon: "Gamepad2", label: "Media & Entertainment" },
        { icon: "Briefcase", label: "Banking & Finance" },
        { icon: "HeartPulse", label: "Healthcare" },
        { icon: "Plane", label: "Travel & Tourism" },
        { icon: "Users", label: "Social Networks" },
        { icon: "GraduationCap", label: "E-Learning" },
        { icon: "Car", label: "Automotive" },
        { icon: "Truck", label: "Logistics" }
    ];

    // FAQ Section
    const faqs = content.faqs || [
        {
            question: "How much does iOS app development cost?",
            answer: "Various factors determine the cost of iOS application development, including project complexity, the total number of features, the platform required, and project size. Contact us with your business requirements to receive a personalized estimate."
        },
        {
            question: "What is the role of services in iOS apps development?",
            answer: "Services play an essential role in building iOS applications. We understand your requirements thoroughly and suggest a solution perfectly suitable for your specific business requirements and goals."
        },
        {
            question: "Which is best for iOS app development?",
            answer: "Recenturesoft is a leading iOS app development company. We have a team of experienced mobile application developers who have expertise in building robust and fully functional iPhone applications. We also offer comprehensive application maintenance and support."
        },
        {
            question: "What are iOS app development services?",
            answer: "iOS app development services are a series of tasks taken into consideration for building a robust, feature-rich and user-friendly mobile application for iOS. It includes planning, designing, developing, testing, and launching the product."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);
    const toggleFaq = (index) => setOpenIndex(openIndex === index ? -1 : index);

    // CTA
    const ctaTitle = content.ctaTitle || "Ready to Get Started?";
    const ctaDesc = content.ctaDesc || "Top the game with our tailor-made, enterprise-level iOS app development services. Join our happy customers and start building your dream app today.";
    const ctaBtnText = content.ctaBtnText || "Contact iOS Experts";

    return (
        <div className="w-full mt-4 mb-4">
            {/* Intro Section */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-16 text-center px-4">
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                    {introText}
                </p>
            </div>

            {/* Core Solutions Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                {solutionsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {solutions.map((solution, index) => {
                    const Icon = getIcon(solution.icon, PenTool);
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
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{solution.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{solution.desc}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Why iOS & Partner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">{whyIosTitle}</h3>
                    <div className="space-y-6">
                        {whyIos.map((feature, i) => {
                            const Icon = getIcon(feature.icon, HeartPulse);
                            return (
                                <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-slate-200 dark:border-slate-800">
                                    <div className="p-2 bg-white dark:bg-slate-800 shadow-sm rounded-lg text-blue-500 shrink-0">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{feature.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{feature.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">{whyPartnerTitle}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {whyPartner.map((partner, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-md transition-shadow">
                                <CheckSquare className="w-5 h-5 text-blue-500 shrink-0" />
                                <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{partner}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold mt-10 mb-6 text-slate-900 dark:text-white">{devicesTitle}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {devices.map((device, i) => {
                            const Icon = getIcon(device.icon, Smartphone);
                            return (
                                <div key={i} className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-xl font-bold">
                                    <Icon className="w-5 h-5" /> {device.label}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Development Process Timeline */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 mb-20">
                <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                    {processTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {process.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="w-10 h-10 bg-blue-500 text-white font-bold rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-white dark:border-[#020617]">
                                {index + 1}
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Diverse Industry Experience */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                {industriesTitle}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-20">
                {industries.map((ind, i) => {
                    const Icon = getIcon(ind.icon, ShoppingCart);
                    return (
                        <div key={i} className="flex flex-col items-center justify-center text-center p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/50 transition-all">
                            <Icon className="w-6 h-6 text-blue-500 mb-2" />
                            <span className="font-medium text-slate-700 dark:text-slate-300 text-sm">{ind.label}</span>
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

            {/* Call to Action */}
            <div className="text-center mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 shadow-xl">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {ctaTitle}
                </h4>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                    {ctaDesc}
                </p>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    {ctaBtnText}
                </button>
            </div>
        </div>
    );
}
