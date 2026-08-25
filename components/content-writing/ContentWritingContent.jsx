"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

export default function ContentWritingContent({ dynamicData }) {
    const getIcon = (iconName, FallbackIcon) => {
        if (typeof iconName === 'string' && LucideIcons[iconName]) {
            return LucideIcons[iconName];
        }
        return iconName || FallbackIcon || LucideIcons.FileText;
    };

    const services = dynamicData?.content?.services || [
        { 
            icon: LucideIcons.FileText, 
            title: "Articles & Blogs", 
            features: ["On-Time delivery", "Editing Plus Revisions", "Expert Writers", "QA Check and Editing"]
        },
        { 
            icon: LucideIcons.Globe, 
            title: "Webpage Content", 
            features: ["Improve Web Traffic", "Better User Experience", "Growth Of Business", "Grammarly Checked"]
        },
        { 
            icon: LucideIcons.Code2, 
            title: "Technical Writing", 
            features: ["Routine Revisions", "Prompt Delivery", "Talented Technical Writers", "Zero-Plagiarism Content"]
        },
        { 
            icon: LucideIcons.GraduationCap, 
            title: "Academic Writing", 
            features: ["Accurate & Relevant Content", "Qualified Team of Writers", "Error-Free Information", "Rewriting Assistance"]
        }
    ];

    const benefits = dynamicData?.content?.benefits || [
        { icon: LucideIcons.RefreshCw, title: "Give Outdated Content New Life", desc: "Evaluate existing data and refresh or repurpose it for webinars, podcasts, or infographics to reach a broader audience." },
        { icon: LucideIcons.TrendingUp, title: "Increases Search Rankings", desc: "Publishing high-quality content with strategic keywords, headlines, and meta descriptions to rank up fast on Google." },
        { icon: LucideIcons.Zap, title: "Increases Conversions", desc: "Adding strong, relevant, and appealing calls-to-action to effectively encourage visitors to take the desired action." },
        { icon: LucideIcons.MessageSquare, title: "Creates a Voice for Business", desc: "Establishing a solid brand voice and maintaining constant goodwill across different digital marketing channels." }
    ];

    return (
        <div className="w-full mt-4 mb-4">
            {/* Intro Section */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-16 text-center px-4">
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                    {dynamicData?.content?.introText || "Consumers carry out in-depth research before making a purchase. High-quality content writing empowers businesses to share vital information, generate revenue, and establish a powerful digital presence that outperforms traditional advertisements."}
                </p>
            </div>

            {/* Core Services Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                Our Content Writing Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {services.map((service, index) => {
                    const Icon = getIcon(service.icon, LucideIcons.FileText);
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
                                            <LucideIcons.CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Impact Section */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 mb-20">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white text-center whitespace-pre-line">
                    {dynamicData?.content?.marketingImpactTitle || "How Content Marketing Services Impact Your Business"}
                </h3>
                <div className="max-w-4xl mx-auto">
                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-center whitespace-pre-line">
                        {dynamicData?.content?.marketingImpactDesc || "Content is one of the most valuable assets of any digital business. By utilizing the content, the company can reach its customers through various formats. This way, the business gains organic traffic by providing the exact information the customer needs at the exact moment they need it. Moreover, content marketing impacts your business in the following ways:"}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        {(dynamicData?.content?.marketingImpactBullets?.length > 0 ? dynamicData.content.marketingImpactBullets : [
                            "Increase organic traffic",
                            "Build authority and credibility",
                            "Increase website visitors' engagement rate",
                            "Boost search engine rankings",
                            "Attract high-quality leads",
                            "Attract customers and increase conversions",
                            "Improve social media presence",
                            "Enhance email marketing",
                            "Increase ROI"
                        ]).map((item, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                <LucideIcons.TrendingUp className="w-5 h-5 text-blue-500 shrink-0" />
                                <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center font-medium whitespace-pre-line">
                        {dynamicData?.content?.marketingImpactOutro || "These are important metrics for running a profitable business, and our content marketing agency in India ensures your business grows."}
                    </p>
                </div>
            </div>

            {/* Benefits & Why Choose Us */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Benefits of Professional Content</h3>
                    <div className="space-y-6">
                        {benefits.map((benefit, i) => {
                            const Icon = getIcon(benefit.icon, LucideIcons.CheckCircle2);
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
                    <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white whitespace-pre-line">{dynamicData?.content?.whyChooseTitle || "Why Choose RecentureSoft?"}</h3>
                    <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 h-full relative overflow-hidden flex flex-col">
                        <div className="absolute -right-[10%] top-[10%] w-[50%] h-[80%] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[80px] pointer-events-none" />
                        
                        <div className="relative z-10 flex-grow">
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed whitespace-pre-line">
                                {dynamicData?.content?.whyChooseIntro || "Every business deserves a competent content marketing company in India to help them deliver quality content. We want to be your partner in maintaining and ranking your website's content. We bring many advantages with our services, some of them are:"}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                {(dynamicData?.content?.whyChooseBullets?.length > 0 ? dynamicData.content.whyChooseBullets : [
                                    "Professional SEO writers",
                                    "Unique and non-plagiarized content",
                                    "Industry research",
                                    "Search intent optimization",
                                    "Easy-to-read content",
                                    "Strong branding",
                                    "On-time delivery",
                                    "Transparent communication"
                                ]).map((reason, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                        <LucideIcons.ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{reason}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed space-y-4 whitespace-pre-line">
                                {dynamicData?.content?.whyChooseOutro || "Our content marketing packages in India vary from business to business and are customizable based on the required services.\n\nLet's create high-quality content for your business together to drive better engagement and increase profits.\n\nTalk to our experts today to get started and discuss the project, goals and outcomes."}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 border border-transparent dark:border-blue-800 shadow-xl">
                <LucideIcons.PenTool className="w-12 h-12 text-blue-300 mx-auto mb-6" />
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {dynamicData?.content?.ctaTitle || "Ready to Transform Your Content?"}
                </h4>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                    {dynamicData?.content?.ctaDesc || "Partner with the best content writing company in India. Discover our transparent pricing without hidden costs and boost your digital presence today."}
                </p>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    {dynamicData?.content?.ctaButtonText || "Get Free Consultation"}
                </button>
            </div>
        </div>
    );
}
