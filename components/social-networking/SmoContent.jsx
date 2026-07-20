"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

function getIcon(name) {
    if (!name) return null;
    const iconKey = name.replace(/-./g, c => c[1].toUpperCase());
    return LucideIcons[iconKey] || LucideIcons[iconKey.replace(/-/g, '')] || null;
}

function DynamicIcon({ name, className }) {
    const Icon = getIcon(name);
    if (!Icon) {
        return <div className={`${className || 'w-6 h-6'} bg-blue-100 dark:bg-blue-900/30 rounded`} />;
    }
    return <Icon className={className || "w-6 h-6"} />;
}

export default function SmoContent({ dynamicData }) {
    const content = dynamicData?.content || {};

    // Intro Section
    const intro = content.intro || {};
    const introVisible = intro.visible !== false;
    const introTitle = intro.title || "Get Popular with an SMO Company in India";
    const introHighlightText = intro.highlightText || "SMO Company";
    const introDescription = intro.description || "With a plethora of social media platforms existing today, it's just next to impossible to manage all of them at the same time. That's where our SMM (Social Media Management) services come into the picture!";

    // Approach Section
    const approach = content.approach || {};
    const approachVisible = approach.visible !== false;
    const approachTitle = approach.title || "Our Strategic Approach";
    const approachDescription1 = approach.description1 || "Our SEM and SEO services are executed after fully knowing your specifications. At our company, our online marketing professionals work closely with you while delivering their social marketing campaigns.";
    const approachDescription2 = approach.description2 || "We are considered as the trusted SEO/SMO service providers in India who can make you a leader in your field and build the best brand awareness for you.";
    const approachCards = (approach.cards && approach.cards.length > 0) ? approach.cards : [
        { icon: "Target", title: "Custom Strategies", description: "Tailored perfectly for your unique brand voice.", visible: true },
        { icon: "BarChart3", title: "Data-Driven", description: "Tracking customer behavior for maximum ROI.", visible: true },
    ];

    // Features Section
    const features = content.features || {};
    const featuresVisible = features.visible !== false;
    const featuresTitle = features.title || "Our SMO Offerings";
    const featuresCards = (features.cards && features.cards.length > 0) ? features.cards : [
        { icon: "Share2", title: "Social Media Management", description: "It's next to impossible to manage all platforms at the same time. We execute quality SMO services to strengthen your brand online.", visible: true },
        { icon: "Crosshair", title: "Targeted Automatons", description: "Use the best technology to improve your brand presence and deliver your brand's true message and value correctly.", visible: true },
        { icon: "TrendingUp", title: "Maximum ROI", description: "Aimed at enhancing the sales of our clients' business by creating highly customized strategies for their brand.", visible: true },
        { icon: "MapPin", title: "Local Maps & Optimization", description: "Proprietary technology and local maps integration that makes our clients' site outrank competitors in specific keyword searches.", visible: true },
        { icon: "Users", title: "Customer Tracking", description: "We track your customers' behavior continuously to maximize your Return on Investment and refine campaigns.", visible: true },
        { icon: "Smile", title: "Wipe Out Business Stress", description: "You would love working with us as we try to wipe out your business-related stress in one go. Experts always at your service.", visible: true },
    ];

    // CTA Section
    const cta = content.cta || {};
    const ctaVisible = cta.visible !== false;
    const ctaIcon = cta.icon || "Sparkles";
    const ctaTitle = cta.title || "Working With Recenturesoft";
    const ctaDescription = cta.description || "All our experts are at your service whenever you need any help. We work towards providing total satisfaction to our customers with our excellent work.";
    const ctaButtonText = cta.buttonText || "Get Started Today";
    const ctaButtonLink = cta.buttonLink || "";

    return (
        <div className="w-full mt-4 mb-4">
            {/* Intro Section */}
            {introVisible && (
                <div className="prose prose-slate dark:prose-invert max-w-none mb-16 text-center px-4">
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">
                        {introTitle.split(introHighlightText).length > 1 ? (
                            <>
                                {introTitle.split(introHighlightText)[0]}
                                <span className="text-blue-500">{introHighlightText}</span>
                                {introTitle.split(introHighlightText)[1]}
                            </>
                        ) : (
                            introTitle
                        )}
                    </h3>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        {introDescription}
                    </p>
                </div>
            )}

            {/* Why Choose Us & Approach */}
            {approachVisible && (
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 mb-16 relative overflow-hidden">
                    <div className="absolute -left-[10%] top-[20%] w-[40%] h-[60%] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[80px] pointer-events-none" />
                    
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{approachTitle}</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{approachDescription1}</p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{approachDescription2}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {approachCards.filter(c => c.visible !== false).map((card, index) => (
                                <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                    <DynamicIcon name={card.icon} className="w-8 h-8 text-blue-500 mb-4" />
                                    <h5 className="font-bold text-slate-900 dark:text-white mb-2">{card.title}</h5>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Core Features Grid */}
            {featuresVisible && (
                <>
                    <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                        {featuresTitle}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {featuresCards.filter(c => c.visible !== false).map((feature, index) => (
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
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </>
            )}

            {/* Call to Action */}
            {ctaVisible && (
                <div className="text-center mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 border border-transparent dark:border-blue-800 shadow-xl">
                    <DynamicIcon name={ctaIcon} className="w-12 h-12 text-blue-300 mx-auto mb-6" />
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">{ctaTitle}</h4>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">{ctaDescription}</p>
                    {ctaButtonLink ? (
                        <a
                            href={ctaButtonLink}
                            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            {ctaButtonText}
                        </a>
                    ) : (
                        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                            {ctaButtonText}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
