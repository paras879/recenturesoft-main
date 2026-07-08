"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
    Terminal, Server, Database, Code2, Cloud, ShieldCheck, 
    Workflow, Cpu, Network, Zap, CheckCircle2, ChevronRight, Plus, Minus, ArrowRight, Activity, Settings, LayoutGrid, Layers, Hexagon,
    Globe, Smartphone, Target, Search, FileCode, Users, MessageSquare, MonitorSmartphone
} from 'lucide-react'

export default function PythonDevelopmentContent({ faqs = [] }) {
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
                                Python Development <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Services
                                </span>
                            </h1>
                            <p className="text-base md:text-lg md:text-base md:text-xl text-slate-600 dark:text-slate-300 mb-4 md:mb-8 leading-relaxed">
                                Develop secure, scalable, and high-performance software with Python. From enterprise web applications and APIs to automation tools and AI-powered solutions, we build intelligent systems that help businesses grow faster.
                            </p>
                            <div className="flex flex-wrap items-center gap-4">
                                <Link href="/contact" className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium md:font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:-translate-y-1">
                                    Hire Python Developers
                                </Link>
                                <Link href="/contact" className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium md:font-bold border border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800/80 transition-all hover:-translate-y-1">
                                    Schedule Free Consultation
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
                                src="/images/python-development/hero_python.webp"
                                alt="Python Enterprise Backend"
                                width={600}
                                height={600}
                                className="relative z-10 drop-shadow-2xl rounded-3xl object-cover h-[180px] md:h-[400px] lg:h-[500px] w-full"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. WHY PYTHON */}
            <section className="py-4 md:py-8 bg-white dark:bg-[#0b1120]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
                        <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">
                            Why Python Powers Modern Businesses
                        </h2>
                        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
                    </div>
                    <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${expandedGrids['grid1'] ? '' : '[&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:block'}`}>
                        {[
                            { title: 'Fast Development', desc: 'Simple and clean syntax enables rapid software development.', icon: Zap },
                            { title: 'Scalable Architecture', desc: 'Perfect for startups, enterprises, and cloud applications.', icon: Layers },
                            { title: 'AI & ML Ready', desc: 'Python is the preferred language for AI and data science.', icon: Cpu },
                            { title: 'Powerful Backend', desc: 'Develop secure APIs and high-performance server applications.', icon: Server },
                            { title: 'Automation Friendly', desc: 'Automate repetitive business operations and workflows.', icon: Workflow },
                            { title: 'Large Ecosystem', desc: 'Thousands of trusted libraries and frameworks available.', icon: LayoutGrid }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-2xl bg-slate-50 dark:bg-[#020617] border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
<div className="mt-6 flex justify-center md:hidden w-full">
    <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid1': !prev['grid1']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
        {expandedGrids['grid1'] ? 'Show Less' : 'Show More'}
    </button>
</div>

                </div>
            </section>

            {/* 3. WHAT WE BUILD */}
            <section className="py-4 md:py-8 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-6 md:mb-16">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">
                                Custom Python Solutions
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 rounded-full mb-4 md:mb-8"></div>
                            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
                                We specialize in building a wide range of secure, scalable, and high-performance enterprise applications using Python.
                            </p>
                        </div>
                        <div className={`grid sm:grid-cols-2 gap-4 ${expandedGrids['grid2'] ? '' : '[&>*:nth-child(n+5)]:hidden sm:[&>*:nth-child(n+5)]:flex'}`}>
                            {[
                                { title: 'Enterprise Web Apps', icon: Globe },
                                { title: 'REST API Development', icon: Terminal },
                                { title: 'Business Automation', icon: Workflow },
                                { title: 'CRM & ERP Systems', icon: Database },
                                { title: 'Cloud Applications', icon: Cloud },
                                { title: 'AI-Powered Platforms', icon: Cpu },
                                { title: 'Data Processing', icon: Activity },
                                { title: 'Custom Backend', icon: Server }
                            ].map((service, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                                        <service.icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium md:font-semibold text-slate-900 dark:text-white">{service.title}</span>
                                </div>
                            ))}
                        </div>
<div className="mt-6 flex justify-center md:hidden w-full">
    <button onClick={() => setExpandedGrids(prev => ({...prev, 'grid2': !prev['grid2']}))} className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium md:font-bold text-sm shadow-sm active:bg-blue-50 transition-colors bg-transparent">
        {expandedGrids['grid2'] ? 'Show Less' : 'Show More'}
    </button>
</div>

                    </div>
                </div>
            </section>

            {/* 4. PYTHON EXPERTISE */}
            <section className="py-4 md:py-8 bg-white dark:bg-[#0b1120]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">
                        Python Technologies We Master
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-6 md:mb-12"></div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {['Django', 'FastAPI', 'Flask', 'Celery', 'Pandas', 'NumPy', 'TensorFlow', 'PyTorch', 'OpenCV', 'SQLAlchemy', 'Redis', 'RabbitMQ'].map((tech, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-blue-500 hover:shadow-lg transition-all flex flex-col items-center justify-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <span className="font-medium md:font-semibold text-slate-900 dark:text-white">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. BUSINESS BENEFITS */}
            <section className="py-4 md:py-8 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="lg:col-span-5"
                        >
                            <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">
                                How Python Accelerates Business Growth
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 rounded-full mb-4 md:mb-10"></div>
                            
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 ${expandedGrids['grid20'] ? '' : '[&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:flex'}`}>
                                {[
                                    'Reduce Development Time',
                                    'Improve System Performance',
                                    'Automate Manual Tasks',
                                    'Increase Operational Efficiency',
                                    'Easy Cloud Deployment',
                                    'Future-Ready Architecture'
                                ].map((item, idx) => (
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
                            <Image src="/images/python-development/about_python.webp" alt="Business Benefits" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. DEVELOPMENT APPROACH */}
            <section className="py-4 md:py-8 bg-white dark:bg-[#0b1120]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
                        <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">
                            Our Development Approach
                        </h2>
                        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8 relative">
                        <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 -z-10"></div>
                        {['Business Analysis', 'Solution Architecture', 'Python Development', 'Testing & Optimization', 'Deployment & Support'].map((step, idx) => (
                            <div key={idx} className="relative text-center">
                                <div className="w-24 h-24 mx-auto bg-white dark:bg-slate-900 rounded-full border-4 border-blue-100 dark:border-blue-900/30 flex items-center justify-center shadow-lg mb-6 group-hover:border-blue-500 transition-colors">
                                    <span className="text-2xl font-medium md:font-bold text-blue-600">0{idx + 1}</span>
                                </div>
                                <h3 className="text-xl font-medium md:font-bold text-slate-900 dark:text-white mb-3">{step}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. INDUSTRIES */}
            <section className="py-4 md:py-8 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6 md:mb-16">
                        <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">Industries We Serve</h2>
                        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {['Healthcare', 'Finance', 'Education', 'Manufacturing', 'Retail', 'Travel', 'Logistics', 'Insurance', 'Government', 'Real Estate', 'Media', 'Technology'].map((industry, idx) => (
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
                            {[
                                'Experienced Python Engineers', 'Scalable Architecture', 
                                'Secure Development', 'Cloud-Native Solutions', 
                                'Agile Delivery', 'Long-Term Support'
                            ].map((reason, idx) => (
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
                                Why Choose RecentureSoft?
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 rounded-full mb-4 md:mb-8"></div>
                            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-4 md:mb-8 leading-relaxed">
                                Partner with us to get access to top-tier Python engineers who build robust and scalable systems tailored to your business needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. TOOLS & PLATFORMS */}
            <section className="py-4 md:py-8 bg-slate-50 dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">Tools & Platforms</h2>
                    <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-6 md:mb-12"></div>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {['Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud', 'PostgreSQL', 'MongoDB', 'MySQL', 'GitHub', 'Linux', 'Nginx', 'Jenkins'].map((tool, idx) => (
                            <div key={idx} className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium md:font-semibold shadow-sm">
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. FAQ */}
            <section className="py-4 md:py-8 bg-white dark:bg-[#0b1120]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6 md:mb-16">
                        <h2 className="text-3xl lg:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                        <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
                    </div>
                    
                    <div className={`space-y-4  md: ${expandedGrids['grid10'] ? '' : '[&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:block'}`}>
                        {(faqs && faqs.length > 0 ? faqs : [
                            { question: "Why should I choose Python for software development?", answer: "Python offers fast development, massive library support, and scalability, making it ideal for backend and AI." },
                            { question: "Which Python framework is best?", answer: "It depends on requirements. Django is great for full-stack apps, while FastAPI is excellent for high-performance APIs." },
                            { question: "Can Python build enterprise software?", answer: "Yes, Python powers some of the largest enterprise systems in the world, including platforms at Google and Instagram." },
                            { question: "Is Python suitable for AI applications?", answer: "Absolutely. Python is the industry standard language for Artificial Intelligence, Machine Learning, and Data Science." },
                            { question: "Can you modernize existing Python software?", answer: "Yes, we upgrade legacy Python codebases to modern frameworks, improving security, performance, and maintainability." },
                            { question: "How secure are Python applications?", answer: "We follow industry best practices, OWASP guidelines, and utilize secure frameworks to ensure top-tier application security." },
                            { question: "Do you provide maintenance?", answer: "Yes, we offer ongoing support, monitoring, and updates to ensure your applications run smoothly long-term." },
                            { question: "How much does Python development cost?", answer: "Cost varies based on complexity, features, and scale. We provide transparent, customized quotes after understanding your needs." }
                        ]).map((faq, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
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

            {/* 11. CTA */}
            <section className="py-4 md:py-8 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-2xl md:text-5xl font-medium md:font-extrabold text-white mb-6">Build Powerful Software with Python</h2>
                    <p className="text-xl text-blue-100 mb-4 md:mb-10 max-w-3xl mx-auto">
                        Partner with RecentureSoft to develop scalable, secure, and future-ready Python applications tailored to your business goals.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-blue-600 font-medium md:font-bold hover:bg-slate-50 shadow-lg transition-all hover:scale-105 hover:-translate-y-1">
                            Start Your Project
                        </Link>
                        <Link href="/contact" className="px-8 py-4 rounded-full bg-transparent text-white font-medium md:font-bold border-2 border-white/30 hover:border-white transition-all hover:-translate-y-1">
                            Hire Python Experts
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
