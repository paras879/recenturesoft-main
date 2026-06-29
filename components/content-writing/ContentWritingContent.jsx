"use client";

import { motion } from "framer-motion";
import { 
    PenTool, FileText, Globe, Code2, GraduationCap, 
    CheckCircle2, Search, Zap, Rocket, BookOpen, 
    RefreshCw, Layers, ShieldCheck, HeartHandshake,
    TrendingUp, MessageSquare
} from "lucide-react";

export default function ContentWritingContent() {
    const services = [
        { 
            icon: FileText, 
            title: "Articles & Blogs", 
            features: ["On-Time delivery", "Editing Plus Revisions", "Expert Writers", "QA Check and Editing"]
        },
        { 
            icon: Globe, 
            title: "Webpage Content", 
            features: ["Improve Web Traffic", "Better User Experience", "Growth Of Business", "Grammarly Checked"]
        },
        { 
            icon: Code2, 
            title: "Technical Writing", 
            features: ["Routine Revisions", "Prompt Delivery", "Talented Technical Writers", "Zero-Plagiarism Content"]
        },
        { 
            icon: GraduationCap, 
            title: "Academic Writing", 
            features: ["Accurate & Relevant Content", "Qualified Team of Writers", "Error-Free Information", "Rewriting Assistance"]
        }
    ];

    const process = [
        { title: "Research", desc: "Brainstorming ideas and analyzing your business model to persuade and inform your end-users." },
        { title: "Roadmap", desc: "Setting milestones and structuring a framework for seamless delivery and content creation." },
        { title: "Development", desc: "Crafting SEO-friendly, error-free content packed with top-performing keywords." },
        { title: "Reviewing", desc: "Thorough checking for grammar, spelling errors, and ensuring keywords fit naturally." },
        { title: "Deploying", desc: "Publishing the content at the right time using optimal design layouts and methods." },
        { title: "Support", desc: "Frequent updates and continuous monitoring to boost your ongoing search engine ranking." }
    ];

    const benefits = [
        { icon: RefreshCw, title: "Give Outdated Content New Life", desc: "Evaluate existing data and refresh or repurpose it for webinars, podcasts, or infographics to reach a broader audience." },
        { icon: TrendingUp, title: "Increases Search Rankings", desc: "Publishing high-quality content with strategic keywords, headlines, and meta descriptions to rank up fast on Google." },
        { icon: Zap, title: "Increases Conversions", desc: "Adding strong, relevant, and appealing calls-to-action to effectively encourage visitors to take the desired action." },
        { icon: MessageSquare, title: "Creates a Voice for Business", desc: "Establishing a solid brand voice and maintaining constant goodwill across different digital marketing channels." }
    ];

    const whyChooseUs = [
        "Highly Reliable Content Services",
        "Responsible & Transparent Work",
        "Quick Customer Support",
        "Result-Oriented Methodologies",
        "Grammarly Checked Content",
        "100% Zero-Plagiarism Guarantee"
    ];

    return (
        <div className="w-full mt-4 mb-4">
            {/* Intro Section */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-16 text-center px-4">
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                    Consumers carry out in-depth research before making a purchase. High-quality content writing empowers businesses to share vital information, generate revenue, and establish a powerful digital presence that outperforms traditional advertisements.
                </p>
            </div>

            {/* Core Services Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                Our Content Writing Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute top-2 right-2 p-4 text-blue-500/10 dark:text-blue-400/5 group-hover:text-blue-500/20 dark:group-hover:text-blue-400/10 transition-colors duration-300">
                                <Icon className="w-28 h-28" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{service.title}</h4>
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Development Process Timeline */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 mb-20">
                <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                    Content Development Process
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

            {/* Benefits & Why Choose Us */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Benefits of Professional Content</h3>
                    <div className="space-y-6">
                        {benefits.map((benefit, i) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-500 shrink-0">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-lg">{benefit.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Why Choose Recenturesoft?</h3>
                    <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 h-full relative overflow-hidden">
                        <div className="absolute -right-[10%] top-[10%] w-[50%] h-[80%] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[80px] pointer-events-none" />
                        
                        <div className="relative z-10">
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Our industry specialists have decades of knowledge and experience in delivering the best content that will engage customers on different devices and platforms. We ensure you get the finest and most budget-friendly solutions.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {whyChooseUs.map((reason, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                        <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{reason}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 border border-transparent dark:border-blue-800 shadow-xl">
                <PenTool className="w-12 h-12 text-blue-300 mx-auto mb-6" />
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to Transform Your Content?
                </h4>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                    Partner with the best content writing company in India. Discover our transparent pricing without hidden costs and boost your digital presence today.
                </p>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    Get Free Consultation
                </button>
            </div>
        </div>
    );
}
