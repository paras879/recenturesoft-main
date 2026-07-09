"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
    Smartphone, Server, Layers, Cpu, Code, Activity, Shield, Zap, CheckCircle2,
    ChevronRight, ArrowRight, Star, Plus, Minus, Search, Globe, Terminal, Users, Database, FileCode, MonitorSmartphone, MessageSquare, Target
} from 'lucide-react'

export default function PHPDevelopmentContent() {
    const [activeFaq, setActiveFaq] = useState(null)
    const [expandedGrids, setExpandedGrids] = useState({})

    return (
        <div className="font-sans selection:bg-blue-500/30">

            {/* 1. HERO SECTION */}
            <section className="relative pt-4 md:pt-24 pb-8 lg:pt-4 md:pt-32 lg:pb-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-white dark:from-blue-900/20 dark:via-[#020617] dark:to-[#020617] -z-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-2xl"
                        >
                            <h1 className="text-2xl md:text-5xl lg:text-6xl font-medium md:font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
                                PHP Web <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Development Services
                                </span>
                            </h1>
                            <p className="text-base md:text-lg md:text-base md:text-xl text-slate-600 dark:text-slate-300 mb-4 md:mb-8 leading-relaxed">
                                Build stunning, high-performance enterprise-grade web applications with PHP. Our developers create scalable secure backends apps from a single codebase, helping businesses launch faster while reducing development costs.
                            </p>
                            <div className="flex flex-wrap items-center gap-4">
                                <Link href="/contact" className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium md:font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:-translate-y-1">
                                    Start Your PHP Project
                                </Link>
                                <Link href="/contact" className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium md:font-bold border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800/80 transition-all hover:-translate-y-1">
                                    Book Free Consultation
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative h-[200px] md:h-[450px] lg:h-[600px] mt-8 lg:mt-12 flex items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full"></div>
                            <Image
                                src="/images/php-development/hero_php.webp"
                                alt="PHP Workspace"
                                width={600}
                                height={600}
                                className="relative z-10 drop-shadow-2xl rounded-3xl object-cover h-[180px] md:h-[400px] lg:h-[500px] w-full"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. WHY FLUTTER */}
            <section className="py-4 md:py-8 bg-white dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">Why Businesses Choose PHP</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className={`lg:col-span-7 grid md:grid-cols-2 gap-6 ${expandedGrids['grid20'] ? '' : '[&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:block'}`}>
                            {[
                                { title: 'Single Codebase', desc: 'Develop one application for secure backends simultaneously.', icon: Layers },
                                { title: 'Native Performance', desc: 'Deliver smooth animations and near-native speed.', icon: Activity },
                                { title: 'Beautiful User Interface', desc: 'Create visually attractive and responsive mobile apps.', icon: Smartphone },
                                { title: 'Rapid Development', desc: 'Hot Reload speeds up development and testing.', icon: Zap },
                                { title: 'Lower Development Cost', desc: 'Save time and budget by maintaining one codebase.', icon: Server },
                                { title: 'Easy Maintenance', desc: 'Quick updates, bug fixes, and long-term scalability.', icon: Shield },
                            ].map((item, idx) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-500/30 transition-all hover:shadow-lg group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-medium md:font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                                    </motion.div>
                                )
                            })}
                        </div>
<div className="mt-6 flex justify-center md:hidden w-full">
    <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid20': !prev['grid20']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
        {expandedGrids['grid20'] ? 'Show Less' : 'Show More'}
    </button>
</div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 relative h-[180px] md:h-[400px] lg:h-[500px] mt-8 lg:mt-12"
                        >
                            <Image src="/images/php-development/about_php.webp" alt="PHP Cross Platform" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-3xl shadow-xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. ABOUT FLUTTER DEVELOPMENT */}
            <section className="py-4 md:py-8 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[200px] md:h-[450px] lg:h-[600px]"
                        >
                            <Image src="/images/common/generic_platform.webp" alt="About PHP Development" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-[2rem] shadow-2xl" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                Create Powerful enterprise-grade Mobile Experiences
                            </h2>
                            <div className="w-20 h-1 bg-blue-600 rounded-full mb-4 md:mb-8"></div>
                            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-4 md:mb-10 leading-relaxed">
                                At RecentureSoft, we build feature-rich PHP applications that deliver exceptional user experiences across secure backends. Our team focuses on performance, intuitive interfaces, scalability, and secure architecture to help businesses launch reliable web applications quickly.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { value: '100+', label: 'Successful Web Apps' },
                                    { value: '95%', label: 'Client Satisfaction' },
                                    { value: '2x', label: 'Faster Time to Market' },
                                    { value: '50%', label: 'Lower Development Cost' },
                                ].map((stat, idx) => (
                                    <div key={idx} className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                                        <div className="text-4xl font-medium md:font-extrabold text-blue-600 mb-2">{stat.value}</div>
                                        <div className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. OUR FLUTTER DEVELOPMENT SERVICES */}
            <section className="py-4 md:py-8 bg-white dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">Our PHP Development Services</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    </div>

                    <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${expandedGrids['grid10'] ? '' : '[&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:flex'}`}>
                        {[
                            { title: 'Custom PHP Web Development', icon: Code, desc: 'Tailored web applications designed to meet your specific business requirements and goals.' },
                            { title: 'Android & iOS App Development', icon: Smartphone, desc: 'Seamless, high-performance applications that run natively on both major mobile platforms.' },
                            { title: 'PHP UI/UX Design', icon: Layers, desc: 'Engaging, user-centric interfaces created specifically for the PHP framework.' },
                            { title: 'Enterprise Web Apps', icon: Server, desc: 'Scalable and secure mobile solutions designed for large-scale corporate operations.' },
                            { title: 'PHP Web Migration', icon: Activity, desc: 'Smoothly transition your existing native apps to the modern PHP enterprise-grade architecture.' },
                            { title: 'API Integration', icon: Globe, desc: 'Connect your PHP app with powerful third-party services and custom backend APIs.' },
                            { title: 'Firebase Integration', icon: Database, desc: 'Implement real-time databases, authentication, and cloud functions seamlessly.' },
                            { title: 'Maintenance & Support', icon: Shield, desc: 'Continuous updates, bug fixes, and performance optimization for your live applications.' },
                        ].map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative p-6 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                                            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-base md:text-lg font-medium md:font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 flex-grow">{service.desc}</p>
                                </motion.div>
                            )
                        })}
                    </div>
<div className="mt-6 flex justify-center md:hidden w-full">
    <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid10': !prev['grid10']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
        {expandedGrids['grid10'] ? 'Show Less' : 'Show More'}
    </button>
</div>

                </div>
            </section>

            {/* 5. MOBILE APPS WE BUILD */}
            <section className="py-4 md:py-8 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="lg:col-span-5"
                        >
                            <h2 className="text-3xl lg:text-3xl xl:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6 leading-tight lg:whitespace-nowrap">
                                PHP Solutions for Every Industry
                            </h2>
                            <div className="w-20 h-1 bg-blue-600 rounded-full mb-4 md:mb-10"></div>

                            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 ${expandedGrids['grid21'] ? '' : '[&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:flex lg:[&>*:nth-child(n+4)]:flex'}`}>
                                {[
                                    'E-Commerce Apps',
                                    'Healthcare Apps',
                                    'Food Delivery Apps',
                                    'Taxi Booking Apps',
                                    'Education Apps',
                                    'Finance Apps',
                                    'Travel Apps',
                                    'Fitness Apps'].map((app, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02, x: 10 }}
                                        className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center gap-4 shadow-sm hover:border-blue-500/30 transition-all cursor-pointer group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-md font-medium md:font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{app}</h3>
                                    </motion.div>
                                ))}
                            </div>
<div className="mt-6 flex justify-center md:hidden w-full">
    <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid21': !prev['grid21']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
        {expandedGrids['grid21'] ? 'Show Less' : 'Show More'}
    </button>
</div>

                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="lg:col-span-7 relative h-[200px] md:h-[200px] lg:h-[540px] lg:mt-32 rounded-[32px] overflow-hidden shadow-2xl"
                        >
                            <Image src="/images/common/generic_process.webp" alt="Industry Apps" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. OUR DEVELOPMENT PROCESS */}
            <section className="py-4 md:py-8 bg-white dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">Our Development Process</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[200px] md:h-[450px] lg:h-[600px] rounded-[2rem] overflow-hidden"
                        >
                            <Image src="/images/common/generic_dashboard.webp" alt="Process" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                        </motion.div>
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
                            {[
                                { step: '01', title: 'Discovery & Planning', desc: 'Understand business goals, audience, and project requirements.' },
                                { step: '02', title: 'UI/UX Design', desc: 'Design intuitive, modern, and engaging mobile interfaces.' },
                                { step: '03', title: 'PHP Web Development', desc: 'Develop scalable, secure, and high-performance applications.' },
                                { step: '04', title: 'Testing & Quality Assurance', desc: 'Ensure flawless performance across secure backends devices.' },
                                { step: '05', title: 'Deployment & Support', desc: 'Publish apps, monitor performance, and provide continuous updates.' }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                >
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium md:font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        {item.step}
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 shadow-sm group-hover:border-blue-500/30 transition-colors">
                                        <div className="flex flex-col">
                                            <h3 className="font-medium md:font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FLUTTER FEATURES */}
            <section className="py-4 md:py-8 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">Powerful Features We Integrate</h2>
                            <div className="w-20 h-1 bg-blue-600 rounded-full mb-4 md:mb-10"></div>

                            <div className={`grid sm:grid-cols-2 gap-4 ${expandedGrids['grid1'] ? '' : '[&>*:nth-child(n+5)]:hidden sm:[&>*:nth-child(n+5)]:flex'}`}>
                                {[
                                    { title: 'Push Notifications', icon: Zap },
                                    { title: 'Google Maps Integration', icon: Globe },
                                    { title: 'Payment Gateway', icon: Server },
                                    { title: 'Cloud Sync', icon: Database },
                                    { title: 'Offline Mode', icon: Activity },
                                    { title: 'Real-Time Chat', icon: MessageSquare },
                                    { title: 'Social Login', icon: Users },
                                    { title: 'Analytics Dashboard', icon: Target },
                                ].map((feature, idx) => {
                                    const Icon = feature.icon;
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-blue-500/50 transition-colors"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium md:font-semibold text-slate-800 dark:text-slate-200">{feature.title}</span>
                                        </motion.div>
                                    )
                                })}
                            </div>
<div className="mt-6 flex justify-center md:hidden w-full">
    <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid1': !prev['grid1']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
        {expandedGrids['grid1'] ? 'Show Less' : 'Show More'}
    </button>
</div>

                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[200px] md:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image src="/images/common/generic_team.webp" alt="Features Dashboard" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 8. TECHNOLOGY STACK */}
            <section className="py-4 md:py-8 bg-white dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">Our Technology Stack</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6 md:mb-12"></div>

                    <div className={`flex flex-wrap justify-center gap-4 ${expandedGrids['grid11'] ? '' : '[&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:flex'}`}>
                        {[
                            'PHP', 'Laravel', 'Firebase', 'REST API', 'GraphQL', 'Node.js',
                            'Laravel', 'MongoDB', 'PostgreSQL', 'AWS', 'Google Cloud', 'Docker', 'GitHub', 'Figma'
                        ].map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="px-6 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full font-medium md:font-semibold text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer shadow-sm"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
<div className="mt-6 flex justify-center md:hidden w-full">
    <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid11': !prev['grid11']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
        {expandedGrids['grid11'] ? 'Show Less' : 'Show More'}
    </button>
</div>

                </div>
            </section>

            {/* 9. WHY CHOOSE RECENTURESOFT */}
            <section className="py-4 md:py-8 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">Why Choose RecentureSoft</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[200px] md:h-[450px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl"
                        >
                            <Image src="/images/common/generic_cta.webp" alt="Why Choose Us" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                        </motion.div>

                        <div className={`grid gap-6 ${expandedGrids['grid12'] ? '' : '[&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:flex'}`}>
                            {[
                                { title: 'Certified PHP Developers', desc: 'Expert team with deep knowledge of Laravel and PHP architecture.', icon: Star },
                                { title: 'Business-Oriented Solutions', desc: 'Apps designed to increase revenue and improve operational efficiency.', icon: Target },
                                { title: 'Agile Development Process', desc: 'Flexible methodology ensuring timely delivery and continuous improvement.', icon: Activity },
                                { title: 'Clean & Scalable Code', desc: 'Maintainable codebases that grow effortlessly with your business.', icon: Code },
                                { title: 'Transparent Communication', desc: 'Regular updates and complete visibility throughout the project lifecycle.', icon: MessageSquare },
                                { title: 'Long-Term Technical Support', desc: 'Dedicated post-launch maintenance and optimization services.', icon: Shield },
                            ].map((item, idx) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-sm"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 shrink-0">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-base md:text-lg font-medium md:font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                                            <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
<div className="mt-6 flex justify-center md:hidden w-full">
    <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid12': !prev['grid12']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
        {expandedGrids['grid12'] ? 'Show Less' : 'Show More'}
    </button>
</div>

                    </div>
                </div>
            </section>

            {/* 10. FAQ */}
            <section className="py-4 md:py-8 bg-white dark:bg-slate-900/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className={`space-y-4  md: ${expandedGrids['grid13'] ? '' : '[&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:block'}`}>
                        {[
                            { q: "Why should I choose PHP for mobile app development?", a: "PHP allows you to build visually stunning, natively compiled applications for both mobile, web, and desktop from a single codebase. It significantly reduces development time and costs while providing exceptional performance." },
                            { q: "Can PHP build secure backends apps together?", a: "Yes, that is the primary advantage of PHP. By writing the code once using the Laravel programming language, you can compile and deploy the exact same application to both secure backends devices." },
                            { q: "Is PHP suitable for enterprise applications?", a: "Absolutely. Many global enterprises rely on PHP for their complex applications. It offers secure architecture, scalable state management, and high-performance rendering ideal for large-scale business operations." },
                            { q: "How long does PHP app development take?", a: "The timeline depends on the complexity of your app. However, because it uses a single codebase, PHP development is typically 30% to 50% faster than developing separate native apps for iOS and Android." },
                            { q: "Can you migrate my existing app to PHP?", a: "Yes, we specialize in migrating existing native applications to PHP. We ensure a smooth transition with improved UI/UX, zero data loss, and enhanced overall performance." },
                            { q: "Do you provide app maintenance after launch?", a: "Yes, we offer comprehensive post-launch support and maintenance services. This includes performance monitoring, bug fixing, OS compatibility updates, and adding new features as your business grows." },
                            { q: "Can PHP integrate third-party APIs?", a: "Yes, PHP seamlessly integrates with virtually any RESTful API, GraphQL endpoint, third-party service (like Stripe, Google Maps, Firebase), and custom backend architectures." },
                            { q: "How much does PHP app development cost?", a: "Costs vary based on app complexity, features, and integration requirements. However, building with PHP is generally much more cost-effective than native development since you only fund one development team instead of two." }
                        ].map((faq, idx) => (
                            <div
                                key={idx}
                                className="border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 overflow-hidden"
                            >
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-medium md:font-bold text-slate-900 dark:text-white pr-8">{faq.q}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeFaq === idx ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                                        {activeFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-slate-600 dark:text-slate-400">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
<div className="mt-6 flex justify-center md:hidden w-full">
    <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid13': !prev['grid13']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
        {expandedGrids['grid13'] ? 'Show Less' : 'Show More'}
    </button>
</div>

                </div>
            </section>

            {/* 11. FINAL CTA */}
            <section className="py-4 md:py-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-5xl lg:text-6xl font-medium md:font-extrabold text-white mb-6 leading-tight">
                            Ready to Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">PHP Web?</span>
                        </h2>
                        <p className="text-xl text-blue-100 mb-4 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                            Turn your app idea into a high-performance mobile application with PHP experts at RecentureSoft.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-blue-900 font-medium md:font-bold hover:bg-blue-50 shadow-xl transition-all hover:scale-105 hover:-translate-y-1">
                                Start Your Project
                            </Link>
                            <Link href="/contact" className="px-8 py-4 rounded-full bg-blue-800/50 text-white font-medium md:font-bold border border-blue-400/50 hover:bg-blue-700/50 backdrop-blur-sm transition-all hover:-translate-y-1">
                                Talk to PHP Experts
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
