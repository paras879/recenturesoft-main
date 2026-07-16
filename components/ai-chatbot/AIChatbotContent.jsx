"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useProjectModal } from "@/components/providers/ProjectModalProvider";
import { useMeetingModal } from "@/components/providers/MeetingModalProvider";
import {
    Brain, Cpu, Code, Database, Globe, Layers, Server, Shield,
    Smartphone, Zap, ChevronDown, CheckCircle2, ArrowRight,
    MessageSquare, FileText, BarChart3, Bot, Network,
    Building2, HeartPulse, Landmark, ShoppingBag,
    Briefcase, Truck, Scale, Plane, Stethoscope,
    Star, Quote, CpuIcon, Target, Search, Compass, Workflow, PlayCircle, Settings
} from 'lucide-react';

const AIChatbotContent = ({ faqs = [], content = {} }) => {
    const { openModal } = useProjectModal();
    const { openMeetingModal } = useMeetingModal();
    const [openFaq, setOpenFaq] = useState(0);
    const [expandedGrids, setExpandedGrids] = useState({});

    const toggleGrid = (gridId) => {
        setExpandedGrids(prev => ({
            ...prev,
            [gridId]: !prev[gridId]
        }));
    };

    return (
        <div className="w-full bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative pt-12 pb-6 lg:pt-20 lg:pb-8 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
                <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold md:font-extrabold text-slate-900 dark:text-white leading-[1.2] mb-4 tracking-tight">
                                {content?.aiChatbotHero?.title || "Enterprise AI"} <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    {content?.aiChatbotHero?.titleHighlight || "Chatbot Development"}
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed max-w-2xl">
                                {content?.aiChatbotHero?.description || "Enhance customer experience and automate support with intelligent, conversational AI chatbots powered by cutting-edge NLP and machine learning."}
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 w-full sm:w-auto">
                                <button onClick={openMeetingModal} className="w-full sm:w-auto text-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full font-semibold transition-all shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5">
                                    {content?.aiChatbotHero?.primaryBtnText || "Get Free Consultation"}
                                </button>
                                <Link href="/contact" className="w-full sm:w-auto text-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base bg-white dark:bg-slate-800/30 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-full font-semibold transition-all hover:-translate-y-0.5 shadow-sm">
                                    {content?.aiChatbotHero?.secondaryBtnText || "Talk to AI Experts"}
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative order-1 lg:order-2 mt-4 md:mt-6 lg:mt-0"
                        >
                            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/20 group">
                                <Image src={content?.aiChatbotHero?.image || "/images/ai-chatbot/hero_ai_chatbot.webp"} alt="AI Consulting Meeting" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover z-10 transition-transform duration-700 group-hover:scale-105" priority loading="eager" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. TRUSTED TECHNOLOGIES SECTION */}
            <section className="py-8 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{content?.aiChatbotTechLogos?.title || "AI Technologies We Specialize In"}</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                        {(content?.aiChatbotTechLogos?.tags?.length > 0 ? content.aiChatbotTechLogos.tags : ['OpenAI', 'Gemini', 'Claude', 'Microsoft Azure AI', 'AWS AI', 'Google Cloud AI', 'LangChain', 'LlamaIndex', 'Python', 'FastAPI', 'TensorFlow', 'PyTorch', 'Node.js', 'React', 'Next.js', 'Docker']).map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="px-4 py-2 md:px-6 md:py-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all cursor-default flex items-center gap-2 group"
                            >
                                <CpuIcon className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                <span className="text-sm md:text-base font-medium md:font-semibold text-slate-700 dark:text-slate-300">{tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ABOUT AI CONSULTING */}
            <section className="py-8 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="relative h-[250px] md:h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-center group shadow-xl"
                        >
                            <Image src={content?.aiChatbotAbout?.image || "/images/ai-chatbot/about_ai_chatbot.webp"} alt="AI Strategy Consulting" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                {content?.aiChatbotAbout?.heading || "Next-Generation Conversational AI"}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                                {content?.aiChatbotAbout?.desc1 || "Our AI chatbots aren't just simple rule-based responders. We build advanced conversational agents capable of understanding context, sentiment, and user intent, providing highly personalized interactions across all your digital platforms."}
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {(content?.aiChatbotAbout?.stats?.length > 0 ? content.aiChatbotAbout.stats : [
                                    { stat: '200+', label: 'Projects Consulted' },
                                    { stat: '95%', label: 'Client Satisfaction' },
                                    { stat: '30%', label: 'Cost Reduction' },
                                    { stat: '24/7', label: 'Expert Support' }
                                ]).map((item, idx) => (
                                    <div key={idx} className="p-6 bg-blue-50 dark:bg-slate-800/50 rounded-2xl border border-blue-100 dark:border-slate-700/50 transition-all hover:bg-blue-100 dark:hover:bg-slate-800">
                                        <h3 className="text-3xl font-medium md:font-extrabold text-blue-600 mb-2">{item.stat}</h3>
                                        <p className="text-sm font-medium md:font-semibold text-slate-700 dark:text-slate-300">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. OUR AI CONSULTING SERVICES */}
            <section className="py-8 bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{content?.aiChatbotServices?.title || "Our Chatbot Services"}</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-slate-600 dark:text-slate-400">{content?.aiChatbotServices?.desc || "Advanced conversational AI to engage your customers 24/7."}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {(content?.aiChatbotServices?.cards?.length > 0 ? content.aiChatbotServices.cards : [
                            { title: 'AI Strategy Consulting', icon: Target, desc: 'Align AI capabilities with your business goals to create a winning strategy.' },
                            { title: 'AI Readiness Assessment', icon: Search, desc: 'Evaluate your data, infrastructure, and team readiness for AI adoption.' },
                            { title: 'Digital Transformation', icon: Globe, desc: 'Modernize legacy systems and integrate intelligent AI solutions.' },
                            { title: 'Machine Learning Consulting', icon: Brain, desc: 'Design custom ML models tailored to your specific industry challenges.' },
                            { title: 'Generative AI Consulting', icon: Bot, desc: 'Leverage generative models to automate content, code, and customer support.' },
                            { title: 'LLM Consulting', icon: MessageSquare, desc: 'Select and fine-tune the right Large Language Models for your data.' },
                            { title: 'Data Strategy', icon: Database, desc: 'Architect data pipelines and governance strategies for effective AI training.' },
                            { title: 'Implementation Roadmap', icon: Compass, desc: 'Step-by-step phased execution plans to ensure smooth AI deployment.' },
                        ]).map((service, idx) => {
                            const Icon = service.icon || Target;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`group relative p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full ${idx >= 3 && !expandedGrids['services'] ? 'hidden md:flex' : ''}`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                                            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-lg font-medium md:font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{service.desc}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                    <div className="mt-8 flex justify-center md:hidden">
                        <button 
                            onClick={() => toggleGrid('services')} 
                            className="px-6 py-2 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-medium rounded-full border border-blue-100 dark:border-slate-700 hover:bg-blue-100 transition-colors"
                        >
                            {expandedGrids['services'] ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
            </section>

            {/* 5. CONSULTING SOLUTIONS */}
            <section className="py-8 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="lg:col-span-5"
                        >
                            <h2 className="text-3xl lg:text-3xl xl:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6 leading-tight lg:whitespace-nowrap">
                                {content?.aiChatbotSolutions?.title || "Business Challenges We Solve"}
                            </h2>
                            <div className="w-20 h-1 bg-blue-600 rounded-full mb-10"></div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                                {(content?.aiChatbotSolutions?.cards?.length > 0 ? content.aiChatbotSolutions.cards : [
                                    { title: 'Business Process Automation', icon: Zap },
                                    { title: 'Predictive Analytics', icon: BarChart3 },
                                    { title: 'Customer Experience Optimization', icon: HeartPulse },
                                    { title: 'AI Workflow Design', icon: Workflow },
                                    { title: 'Data Intelligence', icon: Network },
                                    { title: 'Enterprise AI Adoption', icon: Building2 },
                                    { title: 'Decision Support Systems', icon: Target },
                                ]).map((solution, idx) => {
                                    const Icon = solution.icon || Target;
                                    return (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.02, x: 10 }}
                                            className={`p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all cursor-pointer group ${idx >= 3 && !expandedGrids['challenges'] ? 'hidden md:flex' : ''}`}
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-medium md:font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{solution.title}</h3>
                                        </motion.div>
                                    )
                                })}
                            </div>
                            <div className="mt-6 flex justify-start md:hidden">
                                <button 
                                    onClick={() => toggleGrid('challenges')} 
                                    className="px-6 py-2 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-medium rounded-full border border-blue-100 dark:border-slate-700 hover:bg-blue-100 transition-colors"
                                >
                                    {expandedGrids['challenges'] ? 'Show Less' : 'Show More'}
                                </button>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="lg:col-span-7 relative h-[250px] md:h-[400px] lg:h-[640px] lg:mt-[100px] rounded-[32px] overflow-hidden bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-xl"
                        >
                            <Image src="/images/ai-chatbot/features_chatbot_dashboard.webp" alt="AI Analytics Dashboard" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                        </motion.div>
                    </div>
                </div>
            </section>

            
            

            
            

            {/* 8. WHY CHOOSE RECENTURESOFT */}
            <section className="py-8 bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{content?.aiChatbotWhyChoose?.title || "Why Choose RecentureSoft"}</h2>
                            <div className="w-20 h-1 bg-blue-600 rounded-full mb-10"></div>

                            <div className="space-y-6">
                                {(content?.aiChatbotWhyChoose?.cards?.length > 0 ? content.aiChatbotWhyChoose.cards : [
                                    { title: 'Experienced AI Consultants', icon: Brain, desc: 'Delivering exceptional value and strategic guidance at every step of your AI journey.' },
                                    { title: 'Business-Focused Approach', icon: Target, desc: 'Delivering exceptional value and strategic guidance at every step of your AI journey.' },
                                    { title: 'Custom AI Strategy', icon: Settings, desc: 'Delivering exceptional value and strategic guidance at every step of your AI journey.' },
                                    { title: 'Transparent Communication', icon: MessageSquare, desc: 'Delivering exceptional value and strategic guidance at every step of your AI journey.' },
                                    { title: 'Enterprise Security', icon: Shield, desc: 'Delivering exceptional value and strategic guidance at every step of your AI journey.' },
                                    { title: 'Long-Term Partnership', icon: HeartPulse, desc: 'Delivering exceptional value and strategic guidance at every step of your AI journey.' },
                                ]).map((reason, idx) => {
                                    const Icon = reason.icon || Brain;
                                    return (
                                        <div key={idx} className={`flex items-start gap-4 ${idx >= 3 && !expandedGrids['why_choose'] ? 'hidden md:flex' : ''}`}>
                                            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-medium md:font-bold text-slate-900 dark:text-white mb-1">{reason.title}</h3>
                                                <p className="text-slate-600 dark:text-slate-400">{reason.desc || "Delivering exceptional value and strategic guidance at every step of your AI journey."}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="mt-6 flex justify-start md:hidden">
                                <button 
                                    onClick={() => toggleGrid('why_choose')} 
                                    className="px-6 py-2 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-medium rounded-full border border-blue-100 dark:border-slate-700 hover:bg-blue-100 transition-colors"
                                >
                                    {expandedGrids['why_choose'] ? 'Show Less' : 'Show More'}
                                </button>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="relative h-[250px] md:h-[400px] lg:h-[650px] rounded-[32px] overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl group"
                        >
                            <Image src="/images/ai-chatbot/use_cases_business_dashboard.webp" alt="Consultant Handshake" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 9. CASE STUDIES */}
            <section className="py-8 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{content?.aiChatbotCaseStudies?.title || "Chatbot Case Studies"}</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {(content?.aiChatbotCaseStudies?.cards?.length > 0 ? content.aiChatbotCaseStudies.cards : [
                            { title: 'Healthcare AI Transformation', problem: 'Inefficient patient data processing.', solution: 'Designed an enterprise NLP strategy for medical records.', result: 'Data processing speed increased by 400%.', image: '/images/ai-chatbot/hero_ai_chatbot.webp' },
                            { title: 'Manufacturing Automation', problem: 'High defect rates on assembly lines.', solution: 'Consulted on computer vision model integration.', result: 'Reduced quality control errors by 85%.', image: '/images/ai-chatbot/about_ai_chatbot.webp' },
                            { title: 'Retail AI Strategy', problem: 'Poor customer retention.', solution: 'Formulated an AI recommendation engine roadmap.', result: 'Sales increased by 30% in two quarters.', image: '/images/ai-chatbot/features_chatbot_dashboard.webp' },
                        ]).map((caseStudy, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all group">
                                <div className="h-56 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                                    <Image src={caseStudy.image || '/images/ai-chatbot/hero_ai_chatbot.webp'} alt={caseStudy.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-8 space-y-4">
                                    <h3 className="text-xl font-medium md:font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{caseStudy.title}</h3>
                                    <div>
                                        <p className="text-sm font-medium md:font-semibold text-slate-900 dark:text-slate-300">Problem:</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{caseStudy.problem}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium md:font-semibold text-slate-900 dark:text-slate-300">Solution:</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{caseStudy.solution}</p>
                                    </div>
                                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                                        <p className="text-sm font-medium md:font-semibold text-blue-600 dark:text-blue-400">Result:</p>
                                        <span className="font-medium md:font-bold text-slate-900 dark:text-white text-lg">{caseStudy.result}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            

            {/* 11. FAQ */}
            <section className="py-8 bg-white dark:bg-[#020617]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                <button
                                    className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                                >
                                    <span className="font-medium md:font-bold text-slate-900 dark:text-white text-lg pr-8">{faq.question}</span>
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
                                            <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
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
            <section className="py-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 z-0"></div>
                <Image src="/images/ai-chatbot/why_choose_chatbot_team.webp" alt="AI Office" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-20 mix-blend-overlay z-0" />

                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-medium md:font-extrabold text-white mb-6 leading-tight">{content?.aiChatbotCTA?.title || "Ready to Build Your AI Chatbot?"}</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {content?.aiChatbotCTA?.desc || "Contact our experts and deploy intelligent conversational AI today."}
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
                        <button onClick={openMeetingModal} className="w-full sm:w-auto justify-center text-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg bg-white text-blue-700 hover:bg-blue-50 rounded-full font-medium md:font-bold transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1 flex items-center gap-2">
                            {content?.aiChatbotCTA?.primaryBtnText || "Book Free Consultation"} <ArrowRight className="w-5 h-5" />
                        </button>
                        <Link href="/contact" className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 bg-transparent text-white border-2 border-white/30 hover:border-white rounded-full font-medium md:font-bold text-base md:text-lg transition-all hover:-translate-y-1 flex justify-center items-center">
                            {content?.aiChatbotCTA?.secondaryBtnText || "Contact Us"}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AIChatbotContent;
