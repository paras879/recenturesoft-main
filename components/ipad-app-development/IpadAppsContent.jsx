"use client";

import React from 'react';
import { motion } from "framer-motion";
import {
    MonitorPlay, ShieldCheck, Zap, Layers, Settings, Rocket,
    Code2, Palette, Search, Clock, TrendingUp, Users,
    Lock, CheckCircle2, HeartHandshake, Lightbulb, FileText
} from "lucide-react";

const iconMap = {
    MonitorPlay, ShieldCheck, Zap, Layers, Settings, Rocket,
    Code2, Palette, Search, Clock, TrendingUp, Users,
    Lock, CheckCircle2, HeartHandshake, Lightbulb, FileText
};

export default function IpadAppsContent({ dynamicData }) {
    const getIcon = (iconName, FallbackIcon) => {
        if (typeof iconName === 'string') {
            return iconMap[iconName] || FallbackIcon || FileText;
        }
        return FallbackIcon || FileText;
    };

    const content = dynamicData?.content || {};

    const introText = content.introText || "Striving for an iPad application to scale your business? In the crowded app marketplace, getting a user-friendly iPad app is a fundamental requirement. We build iOS applications with a focus on stability, speed, and elegance.";
    const mainTitle = content.mainTitle || "Expanding Online Presence With iPad app Development Company in India";

    // Core Value Proposition
    const valueTitle = content.valueTitle || "Expanding Online Presence";
    const valueDesc1 = content.valueDesc1 || "Addressing the need for a reliable and inexpensive iPad app, Recenturesoft has a unique position in the app marketplace, having downloads over 10K on iOS.";
    const valueDesc2 = content.valueDesc2 || "We construct the right product for your customers and provide robust app updates, active data analytics, user monitoring, and proactive support.";

    const valueGridList = content.valueGridList || [
        { title: "Lightning Fast", desc: "Optimized for speed", icon: "Zap" },
        { title: "100% Secure", desc: "App Store Compliant", icon: "ShieldCheck" }
    ];

    // Services
    const servicesTitle = content.servicesTitle || "Our iPad App Services";
    const services = content.services || [
        { icon: "MonitorPlay", title: "End-to-End Development", desc: "Complete iPad app development lifecycle from generating the initial idea to establishing a strategy and monetization." },
        { icon: "CheckCircle2", title: "Certified Methodologies", desc: "Agile methodologies tailored to build scalable products that your users will genuinely love and enjoy." },
        { icon: "Palette", title: "Committed UI/UX Experts", desc: "Our dedicated designers leverage rich functionality and appealing layouts to achieve exceptional user experiences." },
        { icon: "Code2", title: "Apple Guidelines Compliance", desc: "App code that is written in complete compliance with App Store standards, ensuring rapid approvals." },
        { icon: "Layers", title: "User-Friendly Design", desc: "Focusing on stability, speed, and elegance that consistently receives five-star App Store reviews." },
        { icon: "Search", title: "15-Day Analysis Audit", desc: "In-depth auditing and analysis to detect missed opportunities and build apps that captivate your audience." }
    ];

    // Development Process
    const processTitle = content.processTitle || "Our iPad App Development Process";
    const process = content.process || [
        { title: "Requirement Gathering", desc: "We sit down to understand your core business needs and app objectives." },
        { title: "UI/UX Prototyping", desc: "Creating sleek, user-friendly wireframes and designs tailored for iPad." },
        { title: "Agile Development", desc: "Writing clean, scalable code in iterative sprints for maximum efficiency." },
        { title: "Rigorous Testing", desc: "Comprehensive QA testing across various iPad models to ensure stability." },
        { title: "Deployment", desc: "Handling the entire App Store submission process for a smooth launch." },
        { title: "Maintenance", desc: "Providing ongoing support, updates, and analytics monitoring post-launch." }
    ];

    // Why Choose Us
    const whyUsTitle = content.whyUsTitle || "Why Should You Choose Recenturesoft?";
    const whyUsDesc = content.whyUsDesc || "We are your 'numero uno' iPad app development company. We assure qualitative iOS development services from our side at no extra cost.";
    const whyChooseUs = content.whyChooseUs || [
        { icon: "Lock", title: "100% Confidentiality", desc: "We ensure your app code stands tall on expectations with absolute confidentiality. It is never reused or shared." },
        { icon: "HeartHandshake", title: "Post-Launch Support", desc: "Full proactive support, active data analytics, user monitoring, and hotfixes even after the app launch." },
        { icon: "Clock", title: "On-Time App Delivery", desc: "Timely delivery is our forte. We ensure your iPad application is launched exactly as planned." },
        { icon: "TrendingUp", title: "Maximum ROI", desc: "We provide highly efficient iPad apps that give you the best Return on Investment and competitive edge." },
        { icon: "Users", title: "Proficient App Developers", desc: "Engaged with the most skilled iPad developers who understand how to popularise your brand." },
        { icon: "ShieldCheck", title: "Trusted Partners", desc: "Your trusted partners from layout design to submission, assuring qualitative services at no extra cost." }
    ];

    // CTA
    const ctaTitle = content.ctaTitle || "Got an iPad app idea in your head?";
    const ctaDesc = content.ctaDesc || "Turn your brilliant idea into reality. Partner with our proficient app developers for 100% confidential, fast, and scalable iPad development.";
    const ctaBtnText = content.ctaBtnText || "Discuss Your Idea";

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="w-full mt-4 mb-4">
            {/* Intro Section */}
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="pt-12 pb-16 md:pt-16 md:pb-24 text-center px-4"
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1E293B] dark:text-white mb-6">
                    {mainTitle}
                </h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light max-w-4xl mx-auto leading-[1.7]">
                    {introText}
                </p>
            </motion.div>

            {/* Core Value Proposition */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 mb-16 relative overflow-hidden">
                <div className="absolute -right-[10%] top-[10%] w-[50%] h-[80%] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{valueTitle}</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            {valueDesc1}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {valueDesc2}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {valueGridList.map((item, idx) => {
                            const IconComponent = getIcon(item.icon, Zap);
                            return (
                                <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
                                    <IconComponent className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                                    <h5 className="font-bold text-slate-900 dark:text-white">{item.title}</h5>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                {servicesTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {services.map((service, index) => {
                    const Icon = getIcon(service.icon, MonitorPlay);
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Development Process */}
            <div className="pt-4 pb-[120px]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.h3 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-[28px] md:text-[36px] font-medium mb-16 text-[#1E293B] dark:text-white text-center"
                    >
                        {processTitle}
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {process.map((step, index) => (
                            <motion.div 
                                key={index}
                                variants={fadeUp}
                                className="bg-white dark:bg-slate-900 border border-[#F0F0F0] dark:border-slate-800 p-8 rounded-[20px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:-translate-y-[6px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-6 text-[80px] font-bold text-slate-50 dark:text-slate-800/50 leading-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
                                    0{index + 1}
                                </div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white dark:border-slate-900">
                                        {index + 1}
                                    </div>
                                    <h4 className="text-[20px] font-medium text-[#1E293B] dark:text-white mb-3">{step.title}</h4>
                                    <p className="font-light text-slate-500 dark:text-slate-400 leading-[1.7]">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-20">
                <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                    {whyUsTitle}
                </h3>
                <p className="text-center text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                    {whyUsDesc}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {whyChooseUs.map((item, i) => {
                        const Icon = getIcon(item.icon, Lock);
                        return (
                            <div key={i} className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors">
                                <div className="mt-1 bg-white dark:bg-slate-800 p-3 rounded-full shadow-sm text-blue-500 shrink-0">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-blue-600 dark:bg-blue-900/40 rounded-3xl p-10 md:p-16 border border-transparent dark:border-blue-800">
                <Lightbulb className="w-12 h-12 text-blue-300 mx-auto mb-6" />
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
