"use client";
// Adjusted paddings to be the sweet spot

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
    Star, Quote, CpuIcon
} from 'lucide-react';

const GenerativeAIContent = ({ faqs = [], dynamicData = {} }) => {
    const { genAiHero = {}, genAiTechLogos = {}, genAiAbout = {}, genAiServices = {}, genAiSolutions = {}, genAiTechStack = {}, genAiWhyChoose = {}, genAiCaseStudies = {}, genAiCTA = {} } = dynamicData;
    const { openModal } = useProjectModal();
    const { openMeetingModal } = useMeetingModal();
    // State for FAQs and Grids
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
            <section className="relative pt-16 pb-8 lg:pt-32 lg:pb-8 overflow-hidden bg-white dark:bg-[#020617]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
                <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium md:font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
                                {genAiHero.title || "Generative AI"} <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    {genAiHero.titleHighlight || "Development Services"}
                                </span>
                            </h1>
                            <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl">
                                {genAiHero.description || "Build intelligent AI-powered applications using GPT, Claude, Gemini, and custom Large Language Models to automate workflows, enhance customer experiences, and drive business growth."}
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full sm:w-auto">
                                <button onClick={openMeetingModal} className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full font-medium md:font-semibold text-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1">
                                    {genAiHero.primaryBtnText || "Get Free Consultation"}
                                </button>
                                <Link href="/contact" className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-full font-medium md:font-semibold text-lg transition-all hover:-translate-y-1 shadow-sm backdrop-blur-md">
                                    {genAiHero.secondaryBtnText || "Talk to Experts"}
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative order-1 lg:order-2 mt-6 md:mt-12 lg:mt-0"
                        >
                            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-[30px] lg:rounded-[40px] overflow-hidden bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/40 dark:to-slate-900/40 border border-white/40 dark:border-slate-700/50 shadow-2xl flex items-center justify-center backdrop-blur-xl group">
                                <div className="absolute inset-0 bg-blue-500/5 rounded-full animate-pulse blur-xl z-0"></div>
                                <Image src={genAiHero.image || "/images/generative-ai/hero_ai_illustration.png"} alt="Generative AI Hero" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain lg:object-cover z-10 transition-transform duration-700 group-hover:scale-105" priority loading="eager" />
                            </div>


                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. TRUSTED TECHNOLOGIES SECTION */}
            <section className="py-8 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{genAiTechLogos.title || "Technologies We Work With"}</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                        {(genAiTechLogos.tags?.length > 0 ? genAiTechLogos.tags : ['OpenAI', 'Claude', 'Gemini', 'Llama', 'Microsoft Azure AI', 'AWS AI', 'Google Cloud AI', 'LangChain', 'Pinecone', 'ChromaDB', 'FastAPI', 'Python', 'Node.js', 'Next.js', 'React', 'Docker']).map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="px-4 py-2 md:px-6 md:py-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30 transition-all cursor-default"
                            >
                                <span className="text-sm md:text-base font-medium md:font-semibold text-slate-700 dark:text-slate-300">{tech}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ABOUT GENERATIVE AI */}
            <section className="py-8 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="relative h-[250px] md:h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex items-center justify-center group shadow-xl"
                        >
                            <Image src={genAiAbout.image || "/images/generative-ai/about_ai_collaboration.png"} alt="Human AI Collaboration" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                {genAiAbout.heading || "What is Generative AI?"}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                {genAiAbout.desc1 || "Generative AI enables businesses to create intelligent applications capable of generating text, images, code, documents, reports, recommendations, and business insights using advanced Large Language Models."}
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
                                {genAiAbout.desc2 || "RecentureSoft helps organizations integrate secure and scalable AI solutions that improve productivity, automate repetitive work, reduce operational costs, and enhance customer experiences."}
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {(genAiAbout.stats?.length > 0 ? genAiAbout.stats : [
                                    { stat: '95%', label: 'Automation Accuracy' },
                                    { stat: '70%', label: 'Operational Cost Reduction' },
                                    { stat: '24/7', label: 'AI Assistance' },
                                    { stat: '10x', label: 'Productivity' }
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

            {/* 4. OUR GENERATIVE AI SERVICES */}
            <section className="py-8 bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{genAiServices.title || "Our Generative AI Services"}</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {(genAiServices.cards?.length > 0 ? genAiServices.cards : [
                            { title: 'Custom GPT Development', icon: Brain, desc: 'Tailor-made GPT models trained on your business data for specific use cases and workflows.' },
                            { title: 'Custom AI Chatbot', icon: Bot, desc: 'Intelligent conversational agents that understand context and provide human-like customer support.' },
                            { title: 'Enterprise AI Solutions', icon: Building2, desc: 'Scalable and secure AI integrations for enterprise-level automation and intelligence.' },
                            { title: 'AI Copilot Development', icon: Cpu, desc: 'Context-aware AI assistants that work alongside your team to boost daily productivity.' },
                            { title: 'Document Intelligence', icon: FileText, desc: 'Automate data extraction, summarization, and analysis from complex business documents.' },
                            { title: 'AI Workflow Automation', icon: Zap, desc: 'Streamline repetitive tasks and complex processes with intelligent automation systems.' },
                            { title: 'Knowledge Base AI', icon: Database, desc: 'Transform your static documentation into an interactive, AI-powered knowledge repository.' },
                            { title: 'RAG Development', icon: Layers, desc: 'Retrieval-Augmented Generation systems for accurate, verifiable, and context-rich AI responses.' },
                        ]).map((service, idx) => {
                            const Icon = service.icon;
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
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 relative overflow-hidden">
                                            {service.image ? <Image src={service.image} alt={service.title} fill className="object-cover p-2" /> : (Icon ? <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" /> : <Brain className="w-6 h-6 text-blue-600" />)}
                                        </div>
                                        <h3 className="text-lg font-medium md:font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">{service.desc}</p>
                                    <div className="mt-auto flex items-center gap-2 text-blue-600 font-medium md:font-semibold group-hover:gap-3 transition-all">
                                        Learn More <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </div>
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

            {/* 5. SOLUTIONS WE BUILD */}
            <section className="py-8 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{genAiSolutions.title || "AI Solutions for Every Business"}</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {(genAiSolutions.cards?.length > 0 ? genAiSolutions.cards : [
                            { title: 'AI Customer Support', icon: MessageSquare, color: 'from-blue-500 to-cyan-500' },
                            { title: 'AI Virtual Assistant', icon: Bot, color: 'from-purple-500 to-pink-500' },
                            { title: 'AI Document Analyzer', icon: FileText, color: 'from-emerald-500 to-teal-500' },
                            { title: 'AI Content Generator', icon: Code, color: 'from-orange-500 to-yellow-500' },
                            { title: 'Healthcare AI', icon: HeartPulse, color: 'from-red-500 to-rose-500' },
                            { title: 'Finance AI', icon: Landmark, color: 'from-blue-600 to-indigo-600' },
                            { title: 'HR AI Assistant', icon: Briefcase, color: 'from-violet-500 to-purple-500' },
                            { title: 'Legal AI', icon: Scale, color: 'from-slate-500 to-slate-700' },
                            { title: 'E-commerce AI Recommendation', icon: ShoppingBag, color: 'from-pink-500 to-rose-400' },
                        ]).map((solution, idx) => {
                            const Icon = solution.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center gap-5 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color || 'from-blue-500 to-cyan-500'} flex items-center justify-center flex-shrink-0 text-white shadow-inner group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                                        {solution.image ? <Image src={solution.image} alt={solution.title} fill className="object-cover p-3" /> : (Icon ? <Icon className="w-6 h-6" /> : <Bot className="w-6 h-6" />)}
                                    </div>
                                    <h3 className="text-lg font-medium md:font-bold text-slate-900 dark:text-white">{solution.title}</h3>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            
            

            {/* 7. TECHNOLOGY STACK */}
            <section className="py-8 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{genAiTechStack.title || "Technology Stack"}</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {(genAiTechStack.stacks?.length > 0 ? genAiTechStack.stacks : [
                            { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
                            { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI'] },
                            { category: 'AI Frameworks', items: ['LangChain', 'LlamaIndex', 'OpenAI API', 'Gemini API', 'Claude API'] },
                            { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Pinecone', 'ChromaDB'] },
                            { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Google Cloud', 'Docker'] },
                        ]).map((stack, idx) => (
                            <div key={idx} className={`w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 ${idx >= 3 && !expandedGrids['tech'] ? 'hidden md:block' : ''}`}>
                                <h3 className="text-xl font-medium md:font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                    <CpuIcon className="w-5 h-5 text-blue-600" />
                                    {stack.category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {(Array.isArray(stack.items) ? stack.items : (stack.items || '').split(',').map(s => s.trim())).map((item, itemIdx) => (
                                        <span key={itemIdx} className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:border-blue-500/50 transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center md:hidden">
                        <button 
                            onClick={() => toggleGrid('tech')} 
                            className="px-6 py-2 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-medium rounded-full border border-blue-100 dark:border-slate-700 hover:bg-blue-100 transition-colors"
                        >
                            {expandedGrids['tech'] ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
            </section>

            
            

            {/* 9. WHY CHOOSE RECENTURESOFT */}
            <section className="py-8 bg-white dark:bg-[#020617]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{genAiWhyChoose.title || "Why Choose RecentureSoft"}</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {(genAiWhyChoose.cards?.length > 0 ? genAiWhyChoose.cards : [
                            { title: 'Experienced AI Engineers', desc: 'Top-tier talent with deep expertise in LLMs and machine learning architectures.', icon: Brain },
                            { title: 'Enterprise Security', desc: 'Bank-grade security protocols ensuring your sensitive data remains private and protected.', icon: Shield },
                            { title: 'Custom AI Solutions', desc: 'Bespoke development tailored precisely to your unique business requirements and goals.', icon: Code },
                            { title: 'Agile Development', desc: 'Iterative processes that ensure rapid delivery and flexibility to adapt to changes.', icon: Zap },
                            { title: '24/7 Support', desc: 'Round-the-clock maintenance and support to ensure your systems run flawlessly.', icon: MessageSquare },
                            { title: 'Scalable Architecture', desc: 'Future-proof solutions built to grow seamlessly alongside your enterprise.', icon: Layers },
                        ]).map((reason, idx) => {
                            const Icon = reason.icon;
                            return (
                                <div key={idx} className={`p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-500/5 hover:border-blue-500/30 transition-all duration-300 group ${idx >= 3 && !expandedGrids['why_choose'] ? 'hidden md:block' : ''}`}>
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative overflow-hidden">
                                        {reason.image ? <Image src={reason.image} alt={reason.title} fill className="object-cover p-3" /> : (Icon ? <Icon className="w-7 h-7" /> : <Brain className="w-7 h-7" />)}
                                    </div>
                                    <h3 className="text-xl font-medium md:font-bold text-slate-900 dark:text-white mb-3">{reason.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{reason.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="mt-8 flex justify-center md:hidden">
                        <button 
                            onClick={() => toggleGrid('why_choose')} 
                            className="px-6 py-2 bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-medium rounded-full border border-blue-100 dark:border-slate-700 hover:bg-blue-100 transition-colors"
                        >
                            {expandedGrids['why_choose'] ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
            </section>

            {/* 10. CASE STUDIES */}
            <section className="py-8 bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{genAiCaseStudies.title || "Success Stories"}</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-slate-600 dark:text-slate-400">{genAiCaseStudies.desc || "Real-world impact of our Generative AI solutions."}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {(genAiCaseStudies.cards?.length > 0 ? genAiCaseStudies.cards : [
                            { title: 'AI Customer Support Platform', desc: 'Reduced support ticket resolution time by 75% while maintaining 98% CSAT scores using a custom fine-tuned LLM.', tech: 'GPT-4, Node.js, Pinecone', result: '75% Faster Resolution', image: '/images/generative-ai/case_study_support.png' },
                            { title: 'Document Intelligence System', desc: 'Automated legal contract analysis and data extraction, saving 40+ hours per week for the legal team.', tech: 'Claude 3, Python, FastAPI', result: '40hrs/week Saved', image: '/images/generative-ai/case_study_document.png' },
                            { title: 'Healthcare AI Assistant', desc: 'HIPAA-compliant AI diagnostic assistant that helps medical professionals quickly access patient history and research.', tech: 'Gemini, React, ChromaDB', result: '99.9% Uptime', image: '/images/generative-ai/case_study_healthcare.png' },
                        ]).map((caseStudy, idx) => {
                            return (
                                <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all group">
                                    <div className="h-56 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                                        <Image src={caseStudy.image} alt={caseStudy.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-medium md:font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">{caseStudy.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">{caseStudy.desc}</p>
                                        <div className="mb-6 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                            <p className="text-sm font-medium md:font-semibold text-slate-900 dark:text-slate-300 mb-1">Technologies:</p>
                                            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{caseStudy.tech}</p>
                                        </div>
                                        <div className="pt-2 flex items-center justify-between">
                                            <span className="font-medium md:font-bold text-slate-900 dark:text-white text-lg">{caseStudy.result}</span>
                                            <ArrowRight className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            
            

            {/* 12. FAQ */}
            <section className="py-8 bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                                <button
                                    className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                                >
                                    <span className="font-medium md:font-bold text-slate-900 dark:text-white text-lg pr-8">{faq.question}</span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === idx ? 'bg-blue-100 dark:bg-blue-900/50' : 'bg-slate-100 dark:bg-slate-700'}`}>
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

            {/* 13. FINAL CTA */}
            <section className="py-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700"></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>

                    {/* Floating icons background */}
                    <div className="absolute top-20 right-20 opacity-20">
                        <Brain className="w-24 h-24 text-white" />
                    </div>
                    <div className="absolute bottom-20 left-20 opacity-20">
                        <Cpu className="w-32 h-32 text-white" />
                    </div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-medium md:font-extrabold text-white mb-6 leading-tight">{genAiCTA.title || "Ready to Build Your AI Solution?"}</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {genAiCTA.desc || "Transform your business with enterprise-grade Generative AI applications developed by RecentureSoft. Let's innovate together."}
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6">
                        <button onClick={openMeetingModal} className="w-full sm:w-auto justify-center text-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg bg-white text-blue-700 hover:bg-blue-50 rounded-full font-medium md:font-bold transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:-translate-y-1 flex items-center gap-2">
                            {genAiCTA.primaryBtnText || "Schedule Consultation"} <ArrowRight className="w-5 h-5" />
                        </button>
                        <Link href="/contact" className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 bg-transparent text-white border-2 border-white/30 hover:border-white rounded-full font-medium md:font-bold text-base md:text-lg transition-all hover:-translate-y-1 flex justify-center items-center">
                            {genAiCTA.secondaryBtnText || "Contact Us"}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GenerativeAIContent;



