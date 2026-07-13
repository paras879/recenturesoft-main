"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
    Store, ShoppingCart, TrendingUp, Tags, Globe, Eye,
    BarChart3, Settings, PenTool, LayoutTemplate, 
    Search, Image as ImageIcon, Box, FileText, Gavel, ShieldCheck
} from "lucide-react";

export default function EbayStoreContent({ dynamicData = {} }) {
    const { ebayIntro = {}, ebayValue = {}, ebayServices = {}, ebayOfferings = {}, ebayCTA = {} } = dynamicData;
    const primaryServices = [
        { icon: LayoutTemplate, title: "Attractive Store Design", desc: "Design visually appealing eBay store layouts that grab attention." },
        { icon: Box, title: "Product Management", desc: "Creation of new listings and complete management of your product catalog." },
        { icon: TrendingUp, title: "Maximise ROI", desc: "Strategic promotions and optimizations to increase returns on your investment." },
        { icon: Eye, title: "Greater Public Visibility", desc: "Increase the number of visitors and visibility of your store organically." },
        { icon: Search, title: "Search Engine Marketing", desc: "Marketing of shopping sites and your store on various search engines." },
        { icon: Globe, title: "Global Promotions", desc: "National and global level store promotion and post-store advertisements." },
        { icon: Tags, title: "Meta & Title Tag Management", desc: "Proper meta and title tag management for better search rankings." },
        { icon: ShoppingCart, title: "Online eBay Marketing", desc: "Comprehensive marketing strategies tailored specifically for the eBay marketplace." }
    ];

    const additionalOfferings = [
        { icon: FileText, title: "Reporting & Documentation", desc: "Detailed reports and documentation of your store's performance." },
        { icon: Settings, title: "Inventory Management", desc: "Keep track of your stock efficiently without any manual hassle." },
        { icon: PenTool, title: "Content & Keyword Analysis", desc: "Organic ranking optimization through deep keyword analysis." },
        { icon: ImageIcon, title: "Image Optimization", desc: "Enhanced graphics and product image optimization for higher conversions." },
        { icon: Gavel, title: "Auction Management", desc: "Expert handling of eBay auctions to ensure the best possible selling price." },
        { icon: ShieldCheck, title: "Anti-Spam Techniques", desc: "Theme and logo designing using famous anti-spam techniques for security." }
    ];

    return (
        <div className="w-full mt-4 mb-4">
            {/* Intro Section */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-16 text-center px-4">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">
                    {ebayIntro.heading || <>Create Your Market Using <span className="text-blue-500">eBay Store Management</span></>}
                </h3>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                    {ebayIntro.desc || "As the digital market gets more competitive, the need to establish a presence in every online marketplace is imperative. Recenturesoft helps with expert eBay store management services to build sustainable relationships between you and your customers on eBay."}
                </p>
            </div>

            {/* Core Value Proposition */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 mb-16 relative overflow-hidden">
                <div className="absolute -right-[10%] top-[10%] w-[50%] h-[80%] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{ebayValue.heading || "Simplify Your Workload"}</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            {ebayValue.desc1 || "eBay store management requires time and third-party interference. Recenturesoft simplifies your work so you can focus only on internal resources—pick, pack, and despatch the orders daily."}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            {ebayValue.desc2 || "We put an emphasis on managing and growing your business online and provide a wide range of customisable services to suit your needs."}
                        </p>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <h5 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5" />
                            {ebayValue.boxTitle || "Complete Privacy & Security"}
                        </h5>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                            {ebayValue.boxDesc ? <span dangerouslySetInnerHTML={{ __html: ebayValue.boxDesc }} /> : <>At Recenturesoft, we take the full responsibility of managing and promoting your eBay store. <strong>What’s even better is that we do not take access to your personal eBay account.</strong> We guide and suggest proven methods of promotion required to create an online store or update the existing one.</>}
                        </p>
                    </div>
                </div>
            </div>

            {/* Primary Services Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                {ebayServices.title || "Our eBay Store Management Solutions"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {(ebayServices.cards?.length > 0 ? ebayServices.cards : primaryServices).map((service, index) => {
                    const isCustom = ebayServices.cards?.length > 0;
                    const Icon = !isCustom ? service.icon : null;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 4) * 0.1 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300 group"
                        >
                            {service.image ? (
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                                    <Image src={service.image} alt={service.title || ""} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {Icon ? <Icon className="w-6 h-6" /> : <LayoutTemplate className="w-6 h-6" />}
                                </div>
                            )}
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Additional Offerings List */}
            <div className="mb-20">
                <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                    {ebayOfferings.title || "Complete eBay Development & Management Needs"}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {(ebayOfferings.cards?.length > 0 ? ebayOfferings.cards : additionalOfferings).map((offering, i) => {
                        const isCustom = ebayOfferings.cards?.length > 0;
                        const Icon = !isCustom ? offering.icon : null;
                        return (
                            <div key={i} className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors">
                                {offering.image ? (
                                    <div className="mt-1 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-sm shrink-0 relative overflow-hidden">
                                        <Image src={offering.image} alt={offering.title || ""} fill className="object-cover" />
                                    </div>
                                ) : (
                                    <div className="mt-1 bg-white dark:bg-slate-800 p-3 rounded-full shadow-sm text-blue-500 shrink-0">
                                        {Icon ? <Icon className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                                    </div>
                                )}
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{offering.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{offering.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-blue-600 dark:bg-blue-900/40 rounded-3xl p-10 md:p-16 border border-transparent dark:border-blue-800">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {ebayCTA.title || "Ready to scale your eBay store?"}
                </h4>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                    {ebayCTA.desc || "Focus on fulfillment while we handle the digital storefront. Get organic ranking optimization, targeted traffic, and boosted sales today."}
                </p>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    {ebayCTA.btnText || "Get Started With Us"}
                </button>
            </div>
        </div>
    );
}
