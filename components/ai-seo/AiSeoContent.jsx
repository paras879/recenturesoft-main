"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

function getIcon(name) {
    if (!name) return null;
    const iconKey = name.replace(/-./g, c => c[1].toUpperCase());
    return LucideIcons[iconKey] || LucideIcons[iconKey.replace(/-/g, '')] || null;
}

function DynamicIcon({ name, className }) {
    const Icon = getIcon(name) || LucideIcons.Bot;
    return <Icon className={className || "w-6 h-6"} />;
}

export default function AiSeoContent({ dynamicData }) {
    const content = dynamicData?.content || {};

    const intro = content.intro || {};
    const introTitle = intro.title || "Next-Generation";
    const introHighlight = intro.highlight || "AI SEO";
    const introTitleEnd = intro.titleEnd || "Services";
    const introDesc = intro.description || "The landscape of Search Engine Optimization is evolving rapidly. At Recenturesoft, we integrate cutting-edge Artificial Intelligence with proven SEO strategies to give your business an unfair advantage in search engine rankings.";

    const whyTitle = content.whyTitle || "Why AI for SEO?";
    const whyDesc1 = content.whyDesc1 || "Traditional SEO relies heavily on manual research and guesswork. AI SEO changes the game by processing massive amounts of data in seconds. It understands user intent, analyzes competitors with pinpoint accuracy, and generates content briefs that are perfectly aligned with what search engines want to see.";
    const whyDesc2 = content.whyDesc2 || "Our AI SEO services not only save time but also deliver highly accurate, data-backed results that continuously adapt to Google's ever-changing algorithms.";
    const whyCards = content.whyCards || [
        { icon: "Cpu", title: "Smart Algorithms", desc: "Data-driven insights tailored for your target audience." },
        { icon: "TrendingUp", title: "Faster Growth", desc: "Achieve higher rankings in a fraction of the usual time." }
    ];

    const featuresTitle = content.featuresTitle || "Our AI SEO Features";
    const features = content.features || [
        { icon: "Bot", title: "AI-Powered Keyword Research", desc: "We use advanced artificial intelligence tools to find low-competition, high-conversion keywords that traditional methods miss." },
        { icon: "Zap", title: "Automated Content Optimization", desc: "Our AI systems analyze top-ranking pages and provide actionable recommendations to optimize your content for maximum relevance." },
        { icon: "Target", title: "Predictive SEO Analysis", desc: "Anticipate search engine algorithm changes and user behavior trends using machine learning models for proactive SEO strategies." },
        { icon: "Globe", title: "Smart Technical SEO", desc: "Automated site audits that instantly identify and help resolve technical issues like crawl errors, broken links, and slow pages." },
        { icon: "Rocket", title: "AI Link Building Outreach", desc: "Leverage natural language processing to find the best link-building opportunities and personalize outreach campaigns at scale." },
        { icon: "BarChart3", title: "Real-time Performance Tracking", desc: "Get dynamic reports powered by AI that don't just show numbers but explain what they mean for your business growth." }
    ];

    const cta = content.cta || {};
    const ctaTitle = cta.title || "Dominate Search Rankings with AI";
    const ctaDesc = cta.description || "Don't let your competitors outsmart you. Partner with Recenturesoft and let our Artificial Intelligence SEO strategies drive targeted traffic and exponential growth to your website.";
    const ctaBtn = cta.buttonText || "Get Started With AI SEO";

    return (
        <div className="w-full mt-4 mb-4">
            {/* Intro Section */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-16 text-center px-4">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">
                    {introTitle} <span className="text-blue-500">{introHighlight}</span> {introTitleEnd}
                </h3>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                    {introDesc}
                </p>
            </div>

            {/* Why Choose Us & Approach */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 mb-16 relative overflow-hidden">
                <div className="absolute -left-[10%] top-[20%] w-[40%] h-[60%] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{whyTitle}</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            {whyDesc1}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {whyDesc2}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {whyCards.map((card, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <DynamicIcon name={card.icon} className="w-8 h-8 text-blue-500 mb-4" />
                                <h5 className="font-bold text-slate-900 dark:text-white mb-2">{card.title}</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Core Features Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                {featuresTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {features.map((feature, index) => {
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
                                <DynamicIcon name={feature.icon} className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 border border-transparent dark:border-blue-800 shadow-xl">
                <DynamicIcon name="Sparkles" className="w-12 h-12 text-blue-300 mx-auto mb-6" />
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {ctaTitle}
                </h4>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                    {ctaDesc}
                </p>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    {ctaBtn}
                </button>
            </div>
        </div>
    );
}
