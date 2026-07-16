"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
    Terminal, Server, Database, Code2, Cloud, ShieldCheck, 
    Workflow, Cpu, Network, Zap, CheckCircle2, ChevronRight, Plus, Minus, ArrowRight, Activity, Settings, LayoutGrid, Layers, Hexagon,
    Globe, Smartphone, Target, Search, FileCode, Users, MessageSquare, MonitorSmartphone, Rocket, Layers2, Lock, Shuffle, 
    ShoppingCart, LineChart, FileText
} from 'lucide-react'

const iconMap = {
    Terminal, Server, Database, Code2, Cloud, ShieldCheck, 
    Workflow, Cpu, Network, Zap, CheckCircle2, ChevronRight, Plus, Minus, ArrowRight, Activity, Settings, LayoutGrid, Layers, Hexagon,
    Globe, Smartphone, Target, Search, FileCode, Users, MessageSquare, MonitorSmartphone, Rocket, Layers2, Lock, Shuffle, 
    ShoppingCart, LineChart, FileText
};

export default function JavaScriptDevelopmentContent({ dynamicData }) {
    const [activeFaq, setActiveFaq] = useState(null)
    const [expandedGrids, setExpandedGrids] = useState({})

    const getIcon = (iconName, FallbackIcon) => {
        if (typeof iconName === 'string' && iconMap[iconName]) {
            return iconMap[iconName];
        }
        return iconName || FallbackIcon || FileText;
    };

    const content = dynamicData?.content || {};

    // 1. Hero Section
    const heroTitlePlain = content.heroTitlePlain || 'JavaScript Development';
    const heroTitleColored = content.heroTitleColored || 'Services';
    const heroDesc = content.heroDesc || 'Build fast, interactive, and scalable web applications using modern JavaScript technologies. From responsive business websites to enterprise dashboards and real-time web platforms, we develop digital solutions that deliver exceptional user experiences across every device.';
    const heroBtn1 = content.heroBtn1 || 'Hire JavaScript Developers';
    const heroBtn1Link = content.heroBtn1Link || '/contact';
    const heroBtn2 = content.heroBtn2 || 'Start Your Project';
    const heroBtn2Link = content.heroBtn2Link || '/contact';
    const heroImage = content.heroImage || '/images/javascript-development/hero_javascript.webp';

    // 2. Why JavaScript
    const whyJSTitle = content.whyJSTitle || 'Why JavaScript Drives Modern Web Innovation';
    const whyJSList = content.whyJSList || [
        { title: 'Interactive User Experience', desc: 'Create engaging interfaces with smooth animations and dynamic interactions.', icon: 'Zap' },
        { title: 'Lightning Fast Performance', desc: 'Optimize websites for speed, responsiveness, and user satisfaction.', icon: 'Rocket' },
        { title: 'Cross-Browser Compatibility', desc: 'Ensure consistent performance across all modern browsers.', icon: 'Globe' },
        { title: 'Scalable Web Applications', desc: 'Build applications that grow with your business needs.', icon: 'Layers2' },
        { title: 'Real-Time Functionality', desc: 'Enable live chat, notifications, dashboards, and collaborative features.', icon: 'Activity' },
        { title: 'Large Developer Ecosystem', desc: 'Utilize thousands of trusted libraries and frameworks for rapid development.', icon: 'Code2' }
    ];

    // 3. Our Services
    const servicesTitle = content.servicesTitle || 'Comprehensive JavaScript Solutions';
    const servicesDesc = content.servicesDesc || 'We specialize in building a wide range of interactive, highly responsive, and scalable enterprise applications using modern JavaScript frameworks.';
    const servicesList = content.servicesList || [
        { title: 'Custom JS Development', icon: 'Code2' },
        { title: 'Frontend Web Development', icon: 'LayoutGrid' },
        { title: 'Single Page Apps (SPA)', icon: 'MonitorSmartphone' },
        { title: 'Progressive Web Apps', icon: 'Smartphone' },
        { title: 'Interactive Dashboards', icon: 'LineChart' },
        { title: 'REST API Integration', icon: 'Network' },
        { title: 'Migration & Modernization', icon: 'Shuffle' },
        { title: 'Performance Optimization', icon: 'Activity' }
    ];

    // 4. Tech Stack
    const techStackTitle = content.techStackTitle || 'Technologies We Work With';
    const techStackList = content.techStackList || [
        'JavaScript ES6+', 'TypeScript', 'React.js', 'Next.js', 'Vue.js', 'Node.js', 
        'Express.js', 'Redux', 'Webpack', 'Vite', 'Firebase', 'MongoDB', 'GitHub', 'Docker'
    ];

    // 5. Key Features
    const featuresTitle = content.featuresTitle || 'Powerful Features We Deliver';
    const featuresList = content.featuresList || [
        'Responsive Design',
        'Interactive UI Components',
        'Real-Time Data Updates',
        'REST API Integration',
        'Authentication & Security',
        'Payment Gateway Integration',
        'Advanced Search & Filtering',
        'Performance Optimization'
    ];
    const featuresImage = content.featuresImage || '/images/javascript-development/about_javascript.webp';

    // 6. Development Process
    const processTitle = content.processTitle || 'Our Development Process';
    const processList = content.processList || [
        { step: 'Analysis', desc: 'Understand business objectives and goals.' },
        { step: 'UI/UX Planning', desc: 'Design intuitive layouts and experiences.' },
        { step: 'JS Development', desc: 'Build scalable web applications.' },
        { step: 'Testing & QA', desc: 'Perform browser testing and optimization.' },
        { step: 'Deployment', desc: 'Deploy securely with long-term support.' }
    ];

    // 7. Solutions We Develop
    const solutionsTitle = content.solutionsTitle || 'Business Solutions Powered by JavaScript';
    const solutionsList = content.solutionsList || [
        'Corporate Websites', 'Customer Portals', 'Admin Dashboards', 'LMS Platforms', 
        'CRM Platforms', 'Booking Systems', 'E-Commerce', 'Analytics Dashboards', 
        'Collaboration Tools', 'Automation Platforms'
    ];

    // 8. Why Choose Us
    const whyUsTitle = content.whyUsTitle || 'Why Choose RecentureSoft?';
    const whyUsDesc = content.whyUsDesc || 'Partner with our professional frontend engineering team to get access to top-tier JavaScript developers who build robust and scalable systems tailored to your business needs.';
    const whyUsList = content.whyUsList || [
        'Experienced JS Engineers', 'Modern Standards', 
        'Clean & Maintainable Code', 'Scalable Architecture', 
        'Transparent Communication', 'Dedicated Support'
    ];

    // 9. FAQ
    const faqList = content.faqList || [
        { question: "Why is JavaScript important for modern web development?", answer: "JavaScript is the only language that runs natively in the browser, allowing for highly interactive, dynamic, and fast user interfaces." },
        { question: "Can JavaScript build enterprise applications?", answer: "Yes. With technologies like Node.js for backend and React/Next.js for frontend, JavaScript powers massive enterprise platforms." },
        { question: "Do you develop Progressive Web Apps?", answer: "Yes, we build PWAs that offer offline capabilities, push notifications, and native-app-like experiences directly in the web browser." },
        { question: "Can you modernize existing JavaScript projects?", answer: "Absolutely. We can migrate legacy jQuery or vanilla JS codebases to modern frameworks like React or Vue." },
        { question: "Do you integrate third-party APIs?", answer: "Yes, we have extensive experience integrating payment gateways, CRM systems, mapping services, and custom APIs." },
        { question: "How secure are JavaScript applications?", answer: "We follow strict security protocols, including XSS prevention, CSRF protection, secure authentication, and data encryption." },
        { question: "Do you provide long-term maintenance?", answer: "Yes, we offer ongoing support, performance monitoring, dependency updates, and feature additions." },
        { question: "How much does JavaScript development cost?", answer: "Costs vary depending on project scope, complexity, and technologies used. Contact us for a detailed proposal." }
    ];

    // 10. CTA
    const ctaTitle = content.ctaTitle || 'Transform Your Ideas into Powerful JavaScript Applications';
    const ctaDesc = content.ctaDesc || 'Partner with RecentureSoft to build interactive, scalable, and future-ready web applications using the latest JavaScript technologies.';
    const ctaBtn1 = content.ctaBtn1 || 'Start Your Project';
    const ctaBtn1Link = content.ctaBtn1Link || '/contact';
    const ctaBtn2 = content.ctaBtn2 || 'Talk to JavaScript Experts';
    const ctaBtn2Link = content.ctaBtn2Link || '/contact';

    return (
        <div className="font-sans selection:bg-blue-500/30">

            {/* 1. HERO SECTION */}
            <section className="relative pt-24 lg:pt-32 pb-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-white dark:from-blue-900/20 dark:via-[#020617] dark:to-[#020617] -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-2xl order-2 lg:order-1 flex flex-col"
                        >
                            <h1 className="text-2xl md:text-5xl lg:text-6xl font-medium md:font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
                                {heroTitlePlain} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    {heroTitleColored}
                                </span>
                            </h1>
                            <p className="text-base md:text-lg md:text-base md:text-xl text-slate-600 dark:text-slate-300 mb-4 md:mb-8 leading-relaxed">
                                {heroDesc}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                                <Link href={heroBtn1Link} className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 rounded-full bg-blue-600 text-white font-medium md:font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:-translate-y-1">
                                    {heroBtn1}
                                </Link>
                                <Link href={heroBtn2Link} className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium md:font-bold border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800/80 transition-all hover:-translate-y-1">
                                    {heroBtn2}
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative order-1 lg:order-2 mt-0 md:mt-4 lg:mt-0"
                        >
                            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-[30px] lg:rounded-[40px] overflow-hidden bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/40 dark:to-slate-900/40 border border-white/40 dark:border-slate-700/50 shadow-2xl flex items-center justify-center backdrop-blur-xl group">
                                <div className="absolute inset-0 bg-blue-500/5 rounded-full animate-pulse blur-xl z-0"></div>
                                <Image
                                    src={heroImage}
                                    alt="JavaScript Workspace"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain lg:object-cover z-10 transition-transform duration-700 group-hover:scale-105"
                                    priority
                                    loading="eager"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. WHY JAVASCRIPT */}
            <section className="py-4 md:py-8 bg-white dark:bg-[#0b1120]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
                        <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">
                            {whyJSTitle}
                        </h2>
                        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
                    </div>
                    <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${expandedGrids['grid1'] ? '' : '[&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:block'}`}>
                        {whyJSList.map((feature, idx) => {
                            const IconComponent = getIcon(feature.icon, Zap);
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-2xl bg-slate-50 dark:bg-[#020617] border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                        <IconComponent className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                    <div className="mt-6 flex justify-center md:hidden w-full">
                        <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid1': !prev['grid1']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
                            {expandedGrids['grid1'] ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
            </section>

            {/* 3. OUR SERVICES */}
            <section className="py-4 md:py-8 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-6 md:mb-16">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">
                                {servicesTitle}
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 rounded-full mb-4 md:mb-8"></div>
                            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
                                {servicesDesc}
                            </p>
                        </div>
                        <div className={`grid sm:grid-cols-2 gap-4 ${expandedGrids['grid2'] ? '' : '[&>*:nth-child(n+5)]:hidden sm:[&>*:nth-child(n+5)]:flex'}`}>
                            {servicesList.map((service, idx) => {
                                const IconComponent = getIcon(service.icon, Code2);
                                return (
                                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium md:font-semibold text-slate-900 dark:text-white">{service.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-6 flex justify-center md:hidden w-full">
                            <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid2': !prev['grid2']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
                                {expandedGrids['grid2'] ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. JAVASCRIPT EXPERTISE (Tech Stack) */}
            <section className="py-4 md:py-8 bg-white dark:bg-[#0b1120]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">
                        {techStackTitle}
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-6 md:mb-12"></div>
                    
                    <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 ${expandedGrids['grid3'] ? '' : '[&>*:nth-child(n+7)]:hidden md:[&>*:nth-child(n+7)]:flex'}`}>
                        {techStackList.map((tech, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-blue-500 hover:shadow-lg transition-all flex flex-col items-center justify-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <span className="font-medium md:font-semibold text-slate-900 dark:text-white text-sm">{tech}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-center md:hidden w-full">
                        <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid3': !prev['grid3']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
                            {expandedGrids['grid3'] ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
            </section>

            {/* 5. KEY FEATURES */}
            <section className="py-4 md:py-8 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="lg:col-span-5"
                        >
                            <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">
                                {featuresTitle}
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 rounded-full mb-4 md:mb-10"></div>
                            
                            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 ${expandedGrids['grid20'] ? '' : '[&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:flex'}`}>
                                {featuresList.map((item, idx) => (
                                    <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-4 hover:border-blue-500 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 flex-shrink-0">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium md:font-semibold text-slate-900 dark:text-white">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 flex justify-center md:hidden w-full">
                                <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid20': !prev['grid20']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
                                    {expandedGrids['grid20'] ? 'Show Less' : 'Show More'}
                                </button>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="lg:col-span-7 relative h-[200px] md:h-[200px] lg:h-[540px] lg:mt-32 rounded-[32px] overflow-hidden shadow-2xl"
                        >
                            <Image src={featuresImage} alt="JavaScript Features" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. DEVELOPMENT PROCESS */}
            <section className="py-4 md:py-8 bg-white dark:bg-[#0b1120]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
                        <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">
                            {processTitle}
                        </h2>
                        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8 relative">
                        <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 -z-10"></div>
                        {processList.map((process, idx) => (
                            <div key={idx} className="relative text-center">
                                <div className="w-24 h-24 mx-auto bg-white dark:bg-slate-900 rounded-full border-4 border-blue-100 dark:border-blue-900/30 flex items-center justify-center shadow-lg mb-6 group-hover:border-blue-500 transition-colors">
                                    <span className="text-2xl font-medium md:font-bold text-blue-600">0{idx + 1}</span>
                                </div>
                                <h3 className="text-xl font-medium md:font-bold text-slate-900 dark:text-white mb-2">{process.step}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{process.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. SOLUTIONS WE DEVELOP */}
            <section className="py-4 md:py-8 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6 md:mb-16">
                        <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">{solutionsTitle}</h2>
                        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {solutionsList.map((industry, idx) => (
                            <div key={idx} className="p-4 rounded-xl text-center bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
                                <span className="font-medium md:font-semibold text-slate-700 dark:text-slate-300">{industry}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. WHY RECENTURESOFT */}
            <section className="py-4 md:py-8 bg-white dark:bg-[#0b1120]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-6">
                            {whyUsList.map((reason, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                    className="p-6 rounded-2xl bg-slate-50 dark:bg-[#020617] border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all"
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-4">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-medium md:font-bold text-slate-900 dark:text-white">{reason}</h3>
                                </motion.div>
                            ))}
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">
                                {whyUsTitle}
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 rounded-full mb-4 md:mb-8"></div>
                            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-4 md:mb-8 leading-relaxed">
                                {whyUsDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FAQ */}
            <section className="py-4 md:py-8 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6 md:mb-16">
                        <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
                    </div>
                    
                    <div className={`space-y-4 md: ${expandedGrids['grid10'] ? '' : '[&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:block'}`}>
                        {faqList.map((faq, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
                                <button
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                >
                                    <span className="font-medium md:font-bold text-slate-900 dark:text-white text-base md:text-lg pr-4">{faq.question}</span>
                                    {activeFaq === idx ? <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                                </button>
                                <AnimatePresence>
                                    {activeFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-center md:hidden w-full">
                        <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid10': !prev['grid10']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
                            {expandedGrids['grid10'] ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
            </section>

            {/* 10. CTA */}
            <section className="py-4 md:py-8 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-2xl md:text-5xl font-medium md:font-extrabold text-white mb-6">{ctaTitle}</h2>
                    <p className="text-xl text-blue-100 mb-4 md:mb-10 max-w-3xl mx-auto">
                        {ctaDesc}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href={ctaBtn1Link} className="px-8 py-4 rounded-full bg-white text-blue-600 font-medium md:font-bold hover:bg-slate-50 shadow-lg transition-all hover:scale-105 hover:-translate-y-1">
                            {ctaBtn1}
                        </Link>
                        <Link href={ctaBtn2Link} className="px-8 py-4 rounded-full bg-transparent text-white font-medium md:font-bold border-2 border-white/30 hover:border-white transition-all hover:-translate-y-1">
                            {ctaBtn2}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
