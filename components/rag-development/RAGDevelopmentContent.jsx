"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Brain, Cpu, Code, Database, Globe, Layers, Server, Shield,
    Smartphone, Zap, ChevronDown, CheckCircle2, ArrowRight,
    MessageSquare, FileText, BarChart3, Bot, Network,
    Building2, HeartPulse, Landmark, ShoppingBag,
    Briefcase, Truck, Scale, Plane, Stethoscope,
    Star, Quote, CpuIcon, Target, Search, Compass, Workflow, PlayCircle, Settings
} from 'lucide-react';

const RAGDevelopmentContent = ({ faqs = [] }) => {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className="w-full bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative pt-24 pb-12 md:pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-[#020617]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
                <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
                                Enterprise RAG <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Development Services
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl">
                                Build intelligent AI applications powered by Retrieval-Augmented Generation (RAG) that deliver accurate, context-aware, and secure responses using your organization's private knowledge base.
                            </p>
                            <div className="flex flex-wrap items-center gap-4">
                                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full font-semibold text-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1">
                                    Get Free Consultation
                                </a>
                                <a href="/contact" className="px-8 py-4 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-full font-semibold text-lg transition-all hover:-translate-y-1 shadow-sm backdrop-blur-md">
                                    Talk to AI Experts
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] relative rounded-[40px] overflow-hidden bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/40 dark:to-slate-900/40 border border-white/40 dark:border-slate-700/50 shadow-2xl flex items-center justify-center backdrop-blur-xl group">
                                <div className="absolute inset-0 bg-blue-500/5 rounded-full animate-pulse blur-xl z-0"></div>
                                <Image src="/images/rag-development/hero_rag.webp" alt="AI Consulting Meeting" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover z-10 transition-transform duration-700 group-hover:scale-105" priority loading="eager" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. TRUSTED TECHNOLOGIES SECTION */}
            <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">AI Technologies We Specialize In</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {['OpenAI', 'Gemini', 'Claude', 'Microsoft Azure AI', 'AWS AI', 'Google Cloud AI', 'LangChain', 'LlamaIndex', 'Python', 'FastAPI', 'TensorFlow', 'PyTorch', 'Node.js', 'React', 'Next.js', 'Docker'].map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="px-6 py-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all cursor-default flex items-center gap-2 group"
                            >
                                <CpuIcon className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                <span className="font-semibold text-slate-700 dark:text-slate-300">{tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ABOUT AI CONSULTING */}
            <section className="py-16 md:py-20 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="relative h-[600px] rounded-[32px] overflow-hidden bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-center group shadow-xl"
                        >
                            <Image src="/images/rag-development/about_rag.webp" alt="AI Strategy Consulting" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                Unlock Your Data with RAG
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                                Generative AI is powerful, but it hallucinates without context. Retrieval-Augmented Generation (RAG) solves this by connecting LLMs directly to your private, enterprise data, ensuring every answer is factual, secure, and highly relevant.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { stat: '200+', label: 'Projects Consulted' },
                                    { stat: '95%', label: 'Client Satisfaction' },
                                    { stat: '30%', label: 'Cost Reduction' },
                                    { stat: '24/7', label: 'Expert Support' }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-6 bg-blue-50 dark:bg-slate-800/50 rounded-2xl border border-blue-100 dark:border-slate-700/50 transition-all hover:bg-blue-100 dark:hover:bg-slate-800">
                                        <h3 className="text-3xl font-extrabold text-blue-600 mb-2">{item.stat}</h3>
                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. OUR AI CONSULTING SERVICES */}
            <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our RAG Solutions</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Custom RAG architectures tailored for enterprise knowledge bases.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'AI Strategy Consulting', icon: Target, desc: 'Align AI capabilities with your business goals to create a winning strategy.' },
                            { title: 'AI Readiness Assessment', icon: Search, desc: 'Evaluate your data, infrastructure, and team readiness for AI adoption.' },
                            { title: 'Digital Transformation', icon: Globe, desc: 'Modernize legacy systems and integrate intelligent AI solutions.' },
                            { title: 'Machine Learning Consulting', icon: Brain, desc: 'Design custom ML models tailored to your specific industry challenges.' },
                            { title: 'Generative AI Consulting', icon: Bot, desc: 'Leverage generative models to automate content, code, and customer support.' },
                            { title: 'LLM Consulting', icon: MessageSquare, desc: 'Select and fine-tune the right Large Language Models for your data.' },
                            { title: 'Data Strategy', icon: Database, desc: 'Architect data pipelines and governance strategies for effective AI training.' },
                            { title: 'Implementation Roadmap', icon: Compass, desc: 'Step-by-step phased execution plans to ensure smooth AI deployment.' },
                        ].map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                                        <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{service.desc}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* 5. CONSULTING SOLUTIONS */}
            <section className="py-16 md:py-20 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                Business Challenges We Solve
                            </h2>
                            <div className="w-20 h-1 bg-blue-600 rounded-full mb-10"></div>
                            
                            <div className="space-y-4">
                                {[
                                    { title: 'Business Process Automation', icon: Zap },
                                    { title: 'Predictive Analytics', icon: BarChart3 },
                                    { title: 'Customer Experience Optimization', icon: HeartPulse },
                                    { title: 'AI Workflow Design', icon: Workflow },
                                    { title: 'Data Intelligence', icon: Network },
                                    { title: 'Enterprise AI Adoption', icon: Building2 },
                                    { title: 'Decision Support Systems', icon: Target },
                                    { title: 'AI Risk Assessment', icon: Shield },
                                    { title: 'Innovation Strategy', icon: Brain },
                                ].map((solution, idx) => {
                                    const Icon = solution.icon;
                                    return (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.02, x: 10 }}
                                            className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all cursor-pointer group"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{solution.title}</h3>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="relative h-[800px] rounded-[32px] overflow-hidden bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-xl"
                        >
                            <Image src="/images/rag-development/usecases_rag.webp" alt="AI Analytics Dashboard" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                        </motion.div>
                    </div>
                </div>
            </section>

            
            

            {/* 7. INDUSTRIES WE CONSULT */}
            <section className="py-16 md:py-20 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Industries We Serve</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Healthcare', icon: Stethoscope },
                            { name: 'Finance', icon: Landmark },
                            { name: 'Retail', icon: ShoppingBag },
                            { name: 'Manufacturing', icon: Cpu },
                            { name: 'Education', icon: Bot },
                            { name: 'Real Estate', icon: Building2 },
                            { name: 'Insurance', icon: Shield },
                            { name: 'Travel', icon: Plane },
                            { name: 'Logistics', icon: Truck },
                            { name: 'Legal', icon: Scale },
                            { name: 'Media', icon: Globe },
                            { name: 'Automotive', icon: Network },
                        ].map((industry, idx) => {
                            const Icon = industry.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 hover:border-blue-500/30 transition-all cursor-pointer group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">{industry.name}</h3>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* 8. WHY CHOOSE RECENTURESOFT */}
            <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose RecentureSoft</h2>
                            <div className="w-20 h-1 bg-blue-600 rounded-full mb-10"></div>

                            <div className="space-y-6">
                                {[
                                    { title: 'Experienced AI Consultants', icon: Brain },
                                    { title: 'Business-Focused Approach', icon: Target },
                                    { title: 'Custom AI Strategy', icon: Settings },
                                    { title: 'Transparent Communication', icon: MessageSquare },
                                    { title: 'Enterprise Security', icon: Shield },
                                    { title: 'Long-Term Partnership', icon: HeartPulse },
                                ].map((reason, idx) => {
                                    const Icon = reason.icon;
                                    return (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{reason.title}</h3>
                                                <p className="text-slate-600 dark:text-slate-400">Delivering exceptional value and strategic guidance at every step of your AI journey.</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="relative h-[650px] rounded-[32px] overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl group"
                        >
                            <Image src="/images/rag-development/team_rag.webp" alt="Consultant Handshake" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 9. CASE STUDIES */}
            <section className="py-16 md:py-20 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">RAG Case Studies</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Healthcare AI Transformation', problem: 'Inefficient patient data processing.', solution: 'Designed an enterprise NLP strategy for medical records.', result: 'Data processing speed increased by 400%.', image: '/images/rag-development/hero_rag.webp' },
                            { title: 'Manufacturing Automation', problem: 'High defect rates on assembly lines.', solution: 'Consulted on computer vision model integration.', result: 'Reduced quality control errors by 85%.', image: '/images/rag-development/dashboard_rag.webp' },
                            { title: 'Retail AI Strategy', problem: 'Poor customer retention.', solution: 'Formulated an AI recommendation engine roadmap.', result: 'Sales increased by 30% in two quarters.', image: '/images/rag-development/usecases_rag.webp' },
                        ].map((caseStudy, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all group">
                                <div className="h-56 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                                    <Image src={caseStudy.image} alt={caseStudy.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-8 space-y-4">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{caseStudy.title}</h3>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-300">Problem:</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{caseStudy.problem}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-300">Solution:</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{caseStudy.solution}</p>
                                    </div>
                                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Result:</p>
                                        <span className="font-bold text-slate-900 dark:text-white text-lg">{caseStudy.result}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            

            {/* 11. FAQ */}
            <section className="py-16 md:py-20 bg-white dark:bg-[#020617]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                <button
                                    className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                                >
                                    <span className="font-bold text-slate-900 dark:text-white text-lg pr-8">{faq.question}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === idx ? 'bg-blue-100 dark:bg-blue-900/50' : 'bg-white dark:bg-slate-700'}`}>
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-blue-600' : 'text-slate-500'}`} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 text-lg leading-relaxed border-t border-slate-200 dark:border-slate-700 mt-2">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 12. FINAL CTA */}
            <section className="py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 z-0"></div>
                <Image src="/images/rag-development/cta_rag.webp" alt="AI Office" fill className="object-cover opacity-20 mix-blend-overlay z-0" />

                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Implement Enterprise RAG Architecture</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Stop hallucinations and empower your AI with your company's knowledge.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        <a href="/contact" className="px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1 flex items-center gap-2">
                            Book Free Consultation <ArrowRight className="w-5 h-5" />
                        </a>
                        <a href="/contact" className="px-8 py-4 bg-transparent text-white border-2 border-white/30 hover:border-white rounded-full font-bold text-lg transition-all hover:-translate-y-1">
                            Contact Experts
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RAGDevelopmentContent;
