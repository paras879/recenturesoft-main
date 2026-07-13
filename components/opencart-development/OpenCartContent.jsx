"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
    ShoppingCart, Store, Search, LayoutDashboard, Smartphone, Zap, 
    AppWindow, Users, CloudCog, Palette, Settings, CheckCircle2,
    HeartPulse, Plane, ShoppingBag, BookOpen, Coffee, Film, Hotel, Truck
} from "lucide-react";

export default function OpenCartContent({ dynamicData = {} }) {
    const { openIntro = {}, openWhatIs = {}, openBenefits = {}, openSolutions = {}, openProcess = {}, openIndustries = {}, openCTA = {} } = dynamicData;
    const benefits = [
        { icon: Store, title: "Multi-store Management", desc: "Operate several stores with different designs and catalogues effortlessly from a single backend platform." },
        { icon: Settings, title: "Simplified E-store Setup", desc: "Easily manipulate users, order management, and catalogues while incorporating custom layouts smoothly." },
        { icon: Search, title: "SEO-friendly Architecture", desc: "Fully SEO optimized structure to ensure your product pages rank higher on search engine result pages." },
        { icon: LayoutDashboard, title: "Intuitive Dashboard", desc: "Check analytics, get detailed reports, and monitor your online presence with complete comfort." },
        { icon: Smartphone, title: "Fully Responsive Design", desc: "Deliver seamless shopping experiences across all mobile devices without extra development effort." },
        { icon: Zap, title: "Enhanced Performance", desc: "Improve the overall functionality and performance of your e-store for a lightning-fast user experience." }
    ];

    const solutions = [
        { icon: AppWindow, title: "Mobile App Development", desc: "Create mobile applications that provide a perfect balance of brilliant design and outstanding technology for iOS & Android." },
        { icon: Users, title: "Marketplace Development", desc: "Build an exclusive eCommerce marketplace by incorporating marketplace management into your OpenCart store." },
        { icon: CloudCog, title: "API & Headless PWA", desc: "Deliver native-app like shopping experiences using Progressive Web Apps and effortless third-party API integrations." },
        { icon: Palette, title: "Theme & Custom Development", desc: "Craft custom OpenCart themes and modifications that match your brand's personality and customer expectations." }
    ];

    const industries = [
        { icon: HeartPulse, label: "Healthcare" },
        { icon: Plane, label: "Travel & Tourism" },
        { icon: ShoppingBag, label: "Retail & eCommerce" },
        { icon: BookOpen, label: "Education" },
        { icon: Coffee, label: "Food & Beverage" },
        { icon: Film, label: "Media & Entertainment" },
        { icon: Hotel, label: "Hospitality" },
        { icon: Truck, label: "Supply Chain" }
    ];

    const process = [
        "Requirement Analysis & Research",
        "Project Specifications & Blueprinting",
        "Interactive Web Design",
        "Agile Development & Coding",
        "Rigorous QA Testing",
        "Deployment & Product Launch",
        "24/7 Maintenance & Support"
    ];

    return (
        <div className="w-full mt-4 mb-4">
            {/* Intro Section */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-16 text-center px-4">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">
                    {openIntro.heading || <>Robust <span className="text-blue-500">OpenCart</span> Development Solutions</>}
                </h3>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                    {openIntro.desc || "Recenturesoft, the Best OPENCART Development Company in India, is an expert at rendering numerous OpenCart services for every business sector. We help you build highly dynamic and user-friendly eCommerce stores with appealing, feature-rich details."}
                </p>
            </div>

            {/* What is OpenCart? */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 mb-16 relative overflow-hidden">
                <div className="absolute -right-[10%] top-[20%] w-[40%] h-[60%] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[80px] pointer-events-none" />
                <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white relative z-10">{openWhatIs.heading || "What Is OpenCart Development?"}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 relative z-10">
                    {openWhatIs.desc1 || "OpenCart is one of the most preferred and powerful eCommerce development solutions created with PHP. It is a simple, easy-to-use, lightning-fast and cost-effective solution available in the market. This technology enables you to balance your business effectively and quickly."}
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                    {openWhatIs.desc2 || "With OpenCart, it's easy to embody a broad range of social features. It comes with several eCommerce extensions, such as multiple payment modes, order management, coupons & discounts, and lifetime software updates."}
                </p>
            </div>

            {/* Key Benefits Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                {openBenefits.title || "Key Benefits Of OpenCart Web Development"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {(openBenefits.cards?.length > 0 ? openBenefits.cards : benefits).map((benefit, index) => {
                    const isCustom = openBenefits.cards?.length > 0;
                    const Icon = !isCustom ? benefit.icon : null;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300"
                        >
                            {benefit.image ? (
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl mb-4 relative overflow-hidden">
                                    <Image src={benefit.image} alt={benefit.title || ""} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                                    {Icon ? <Icon className="w-6 h-6" /> : <Store className="w-6 h-6" />}
                                </div>
                            )}
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* End-to-End Solutions */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                {openSolutions.title || "End-To-End OpenCart Solutions"}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                {(openSolutions.cards?.length > 0 ? openSolutions.cards : solutions).map((solution, i) => {
                    const isCustom = openSolutions.cards?.length > 0;
                    const Icon = !isCustom ? solution.icon : null;
                    return (
                        <div key={i} className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors">
                            {solution.image ? (
                                <div className="mt-1 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-sm shrink-0 relative overflow-hidden">
                                    <Image src={solution.image} alt={solution.title || ""} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="mt-1 bg-white dark:bg-slate-800 p-3 rounded-full shadow-sm text-blue-500 shrink-0">
                                    {Icon ? <Icon className="w-6 h-6" /> : <AppWindow className="w-6 h-6" />}
                                </div>
                            )}
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{solution.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{solution.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Process & Industries */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Process */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">{openProcess.title || "Our Development Cycle"}</h3>
                    <div className="space-y-6">
                        {(openProcess.steps?.length > 0 ? openProcess.steps : process).map((step, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center shrink-0">
                                    {i + 1}
                                </div>
                                <span className="text-slate-700 dark:text-slate-300 font-medium text-lg">{typeof step === 'string' ? step : step.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Industries */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">{openIndustries.title || "Rich Industry Experience"}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {(openIndustries.cards?.length > 0 ? openIndustries.cards : industries).map((ind, i) => {
                            const isCustom = openIndustries.cards?.length > 0;
                            const Icon = !isCustom ? ind.icon : null;
                            return (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-all">
                                    {ind.image ? (
                                        <div className="w-5 h-5 relative">
                                            <Image src={ind.image} alt={ind.label || ind.title || ""} fill className="object-cover rounded-sm" />
                                        </div>
                                    ) : (
                                        <>{Icon ? <Icon className="w-5 h-5 text-blue-500" /> : <ShoppingBag className="w-5 h-5 text-blue-500" />}</>
                                    )}
                                    <span className="font-medium text-slate-700 dark:text-slate-300">{ind.label || ind.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-blue-600 dark:bg-blue-900/40 rounded-3xl p-10 md:p-16 border border-transparent dark:border-blue-800">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {openCTA.title || "Partner With The Best OpenCart Developers"}
                </h4>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                    {openCTA.desc || "We develop highly customized websites and applications tailored to your budget and business requirements. Join hands with us to experience the comfort of working with smart, skilled, and passionate teams."}
                </p>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    {openCTA.btnText || "Get in touch today"}
                </button>
            </div>
        </div>
    );
}
