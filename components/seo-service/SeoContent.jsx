"use client";

import { motion } from "framer-motion";
import { 
    Search, TrendingUp, BarChart3, LineChart, Link as LinkIcon, 
    Share2, FileText, Target, Crosshair, MapPin, 
    CheckCircle2, Rocket, Zap, Users
} from "lucide-react";

export default function SeoContent({ dynamicData }) {
    const services = dynamicData?.content?.services || [
        { icon: Crosshair, title: "Competitor Analysis", desc: "Turn competition into opportunities. We gauge competitors by the clicks they get and emulate winning content and keywords." },
        { icon: Search, title: "On-Page Optimisation", desc: "Optimize over 15 on-page factors like meta tags, website speed, and UX to ensure thrilling load times and seamless navigation." },
        { icon: Share2, title: "Off-Page Optimisation", desc: "Bring your website the best organic exposure possible, increase visitors, and activate high-quality connections across the web." },
        { icon: FileText, title: "Content Marketing", desc: "Influential content acts as fuel. Our writers ensure solid keyword density that rapidly indexes and elevates your thought leadership." },
        { icon: Users, title: "Social Media", desc: "Aggressive social media strategies built for platforms like Facebook and Twitter to dramatically increase your brand value." },
        { icon: LinkIcon, title: "Link Building", desc: "Powerful, non-cookie-cutter link building. We place your brand in high-quality directories, PR sites, and blogs to stimulate engagement." }
    ];

    const approaches = dynamicData?.content?.approaches || [
        { title: "Deep Dive Analysis", desc: "A 200+ point on-site SEO analysis of your organization, server, competitors, and products." },
        { title: "UX & IA Rework", desc: "Refining usability, site architecture, and crafting attention-grabbing title and meta descriptions." },
        { title: "Targeted Keyword Research", desc: "Industry-specific keyword analysis, mapping updates, and number crunching to measure conversions." },
        { title: "ROI Tracking", desc: "Regular tests for continual improvements via Conversion Path Analysis and Calls-to-action tweaks." }
    ];

    const locations = dynamicData?.content?.locations || [
        "Ahmedabad", "Ambala", "Amritsar", "Bhopal", 
        "Bhubaneswar", "Coimbatore", "Delhi", "Kolkata", 
        "Meerut", "Nagpur", "Noida", "Panchkula", 
        "Pondicherry", "Varanasi"
    ];

    const introTitle = dynamicData?.content?.introTitle || "What are the pros of an SEO Company in India?";
    const introDesc = dynamicData?.content?.introDesc || "Are you struggling to generate high-quality traffic for your website? Let your digital footprint disrupt your competitors with Recenturesoft's Ecommerce SEO services! We provide highly adaptable marketing services to increase your search engine ranking consistently.";
    const approachTitle = dynamicData?.content?.approachTitle || "Our Strategic Approach";
    const approachDesc = dynamicData?.content?.approachDesc || "From day 1, we kick start your SEO campaign by delivering creative strategies that help Google understand you and your brand better.";
    const whyTitle = dynamicData?.content?.whyTitle || "Why Recenturesoft?";
    const whyDesc = dynamicData?.content?.whyDesc || "Among the thousands of fly-by-night SEO Agencies, the good news is you have found us. We provide a host of customizable services tailored to boost your digital presence and make your webpage a leading industry resource.";
    const servicesTitle = dynamicData?.content?.servicesTitle || "Our SEO Service Offerings Include";
    const locationsTitle = dynamicData?.content?.locationsTitle || "Our Presence Across India";
    const ctaTitle = dynamicData?.content?.ctaTitle || "Top Search Ranking is a Coveted Position";
    const ctaDesc = dynamicData?.content?.ctaDesc || "We can help you get there. Just give us a call or drop a message and let's collaborate to accelerate your digital growth.";
    const ctaBtnText = dynamicData?.content?.ctaBtnText || "Boost Your SEO Today";

    return (
        <div className="w-full mt-4 mb-4">
            {/* Intro Section */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-16 text-center px-4">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight" dangerouslySetInnerHTML={{ __html: introTitle.replace('SEO Company', '<span class="text-blue-500">SEO Company</span>') }} />
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                    {introDesc}
                </p>
            </div>

            {/* Our Approach Timeline */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 mb-16 relative overflow-hidden">
                <div className="absolute -right-[10%] top-[10%] w-[50%] h-[80%] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10">
                    <div className="text-center mb-10">
                        <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                        <h4 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{approachTitle}</h4>
                        <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl mx-auto">
                            {approachDesc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {approaches.map((approach, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative mt-4">
                                <div className="absolute -top-5 left-6 w-10 h-10 bg-blue-500 text-white font-bold rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-slate-800">
                                    {index + 1}
                                </div>
                                <h5 className="font-bold text-slate-900 dark:text-white mt-4 mb-2">{approach.title}</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{approach.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-20">
                <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-600 dark:bg-blue-900/60 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    
                    <div className="md:w-2/3 relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{whyTitle}</h3>
                        <p className="text-blue-100 text-lg leading-relaxed">
                            {whyDesc}
                        </p>
                    </div>
                    
                    <div className="md:w-1/3 relative z-10 flex justify-center">
                        <div className="bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/30">
                            <Rocket className="w-16 h-16 text-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Offerings Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                {servicesTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {services.map((service, index) => {
                    const Icon = service.icon || Crosshair;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Locations Section */}
            <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 mb-20 text-center">
                <MapPin className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    {locationsTitle}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {locations.map((location, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default">
                            {location}
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 shadow-xl">
                <BarChart3 className="w-12 h-12 text-blue-300 mx-auto mb-6" />
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {ctaTitle}
                </h4>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                    {ctaDesc}
                </p>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    {ctaBtnText}
                </button>
            </div>
        </div>
    );
}
