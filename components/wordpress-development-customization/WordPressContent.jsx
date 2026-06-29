"use client";

import { motion } from "framer-motion";
import { 
    Layout, CheckCircle2, Globe, Layers, Settings, ShieldCheck, 
    Zap, Rocket, ShoppingCart, Code2, Plug, TrendingUp, Cpu, 
    RefreshCw, HeartHandshake, Box, Map, PenTool, Users, Clock, Lock
} from "lucide-react";

export default function WordPressContent() {
    const reasons = [
        { icon: PenTool, title: "Easy-to-Build", desc: "WordPress websites are easy to manage, while our experts craft complex themes and extensions behind the scenes." },
        { icon: Zap, title: "Super Smooth", desc: "The best module for end-users. It's incredibly user-friendly and doesn't require technical knowledge to operate." },
        { icon: Layers, title: "One for All", desc: "The only CMS that amplifies all kinds of projects, be it a blog, eCommerce website, or a corporate business site." },
        { icon: Globe, title: "It's Universal", desc: "A global open-source portal used by millions. Your site will always be backed by massive community popularity." },
        { icon: Plug, title: "Unlimited Plugins", desc: "Easily add any custom feature or functionality utilizing existing plugins or let us build custom extensions." },
        { icon: ShieldCheck, title: "Highly Reliable", desc: "Exceedingly reliable architecture ensures your website remains online, optimized, and completely bug-free." }
    ];

    const services = [
        { icon: Layout, title: "WordPress Theme Development", desc: "Custom WordPress theme development to compel more visitors with visually stunning and responsive designs." },
        { icon: Globe, title: "WordPress Website Development", desc: "Full-stack development including API integrations and headless architecture for an optimized B2B/B2C experience." },
        { icon: ShoppingCart, title: "WordPress eCommerce", desc: "Blend UI/UX approaches with tech skills to deliver brilliantly designed online shopping portals your consumers can't resist." },
        { icon: Code2, title: "Custom WP Development", desc: "With expertise in PHP frameworks and MySQL, we render an unparalleled level of service combining the latest digital trends." },
        { icon: Plug, title: "Plugin Development", desc: "Deliver easy-to-integrate and scalable custom WordPress plugins that keep your visitors deeply engaged." },
        { icon: TrendingUp, title: "WordPress SEO", desc: "Affordable and reliable SEO services to enable your website to rank high on search engines like Google and Bing." },
        { icon: Cpu, title: "Advanced Integration", desc: "Incorporate custom functionality, payment gateways, and CRM platforms seamlessly with your WordPress core." },
        { icon: RefreshCw, title: "Migration & Maintenance", desc: "Secure, hassle-free migrations from other CMS platforms and consistent support to keep your site hack-proof." }
    ];

    const process = [
        "Planning & Requirement Analysis",
        "Wireframes & Web Design",
        "Development & Functionality Integration",
        "QA Testing & Bug Fixing",
        "Final Delivery & Deployment"
    ];

    const whyChooseUs = [
        { icon: Rocket, title: "Agile Development", desc: "Certified scrum masters delivering the best solutions in shorter turnaround times." },
        { icon: HeartHandshake, title: "Client Engagement", desc: "Continuous feedback integration throughout the entire development process." },
        { icon: Clock, title: "On-time Delivery", desc: "Detailed project sheets to assure completely timely delivery without compromise." },
        { icon: Lock, title: "Secure & Clean Code", desc: "Well-commented coding practices ensuring a safe, secure, and lightning-fast website." }
    ];

    return (
        <div className="w-full mt-4 mb-4">
            {/* Intro Section */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-16 text-center px-4">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">
                    WordPress Development & <span className="text-blue-500">Customization Company</span> in India
                </h3>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                    Combine innovation, flexibility, and mature technology with Recenturesoft. We provide businesses with high-class WordPress Development Services at competitive costs, ensuring ultimate client satisfaction and robust business growth.
                </p>
            </div>

            {/* The Concept */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 mb-16 relative overflow-hidden">
                <div className="absolute -right-[10%] top-[20%] w-[40%] h-[60%] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[80px] pointer-events-none" />
                <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white relative z-10">The WordPress Concept</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 relative z-10">
                    WordPress is a simple-to-use, open-source content management system that was originally developed as a blogging platform and has now transformed into an end-to-end content platform supporting all kinds of online portals, eCommerce sites, and corporate networks.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                    Our seasoned web developers leverage its countless opportunities for innovation and customization to proffer robust websites that enhance your business results at reasonable development costs.
                </p>
            </div>

            {/* Why Build a Website With WordPress */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                Why Build A Website With WordPress?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {reasons.map((reason, index) => {
                    const Icon = reason.icon;
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
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{reason.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Range of Services */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                Our Range Of WordPress Services
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                {services.map((service, i) => {
                    const Icon = service.icon;
                    return (
                        <div key={i} className="flex gap-5 items-start p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300">
                            <div className="mt-1 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl text-blue-500 shrink-0">
                                <Icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Why Choose Us & Process */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Why Recenturesoft?</h3>
                    <div className="space-y-6">
                        {whyChooseUs.map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-500 shrink-0">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{feature.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{feature.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Our Development Approach</h3>
                    <div className="space-y-4 bg-slate-50 dark:bg-slate-900/30 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
                        {process.map((step, i) => (
                            <div key={i} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium">
                                <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center shrink-0 shadow-md">
                                    {i + 1}
                                </div>
                                <span className="text-lg">{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-blue-600 dark:bg-blue-900/40 rounded-3xl p-10 md:p-16 border border-transparent dark:border-blue-800">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Overcome Technology Obstacles Today
                </h4>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                    We offer an extraordinary balance between cost-effectiveness and successful web development. Get in touch with our WordPress experts to receive a robust, professional, and reliable website.
                </p>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    Partner With Us
                </button>
            </div>
        </div>
    );
}
