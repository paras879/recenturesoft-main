"use client";

import { motion } from "framer-motion";
import { 
    ShoppingCart, ShieldCheck, Zap, Layers, AppWindow, 
    Smartphone, Search, Cpu, Globe, Rocket, CheckCircle2, 
    Users, Code2, PenTool, TrendingUp, Key, Image as ImageIcon
} from "lucide-react";

export default function MagentoContent() {
    const reasons = [
        { icon: TrendingUp, title: "Promising Results", desc: "Create a powerful platform tailored to your needs. Increase leads, generate more traffic, and boost customer retention and conversions." },
        { icon: Rocket, title: "Fast Delivery", desc: "Our well-equipped crew uses the latest tools and tech to create a smooth, user-friendly interface in the fastest possible time." },
        { icon: Users, title: "Professional Team", desc: "Our diverse team of skilled Magento developers treats your business as their own, ensuring a bug-free and successful launch." },
        { icon: ShieldCheck, title: "100% Transparency", desc: "Honest development process with regular updates, zero hidden costs, and constant communication to meet your deadlines." }
    ];

    const benefits = [
        { icon: Layers, title: "Scalable Platform", desc: "Manage numerous storefronts seamlessly from a single dashboard." },
        { icon: Code2, title: "Robust Interface", desc: "Incorporate easier-to-understand features with a solid architecture." },
        { icon: Globe, title: "Omnichannel Targeting", desc: "Acquire clients from multiple channels with centralized data." },
        { icon: Zap, title: "Quick Rendering", desc: "Supports varnish cache for lightning-fast page loading speeds." },
        { icon: Key, title: "Top-Class Security", desc: "In-built security scan tools to protect your eCommerce store." },
        { icon: ImageIcon, title: "Image Optimization", desc: "Advanced perks enabling buyers to interact closer with product images." }
    ];

    const services = [
        { icon: Smartphone, title: "Magento App Development", desc: "Create advanced, native and cross-platform mobile apps for iOS and Android to facilitate hassle-free navigation." },
        { icon: PenTool, title: "Custom Magento Development", desc: "Extensive customization methods based on changing tech trends to satisfy buyer needs and improve shopping experiences." },
        { icon: AppWindow, title: "Magento Theme Development", desc: "Develop engaging, SEO-optimized, and visually appealing UI themes to significantly boost customer traffic." },
        { icon: Cpu, title: "Headless PWA & API", desc: "Integrate Progressive Web Apps and powerful APIs to connect with CRM, CMS, and third-party systems seamlessly." }
    ];

    const process = [
        { title: "Information Gathering", desc: "Analyzing your eCommerce business and brainstorming ideas to set final goals." },
        { title: "Planning & Wireframing", desc: "Defining the roadmap, selecting tech, estimating costs, and securing framework approval." },
        { title: "Prototype & Designing", desc: "Creating an initial prototype before finalizing modifications to visualize the platform." },
        { title: "Final Development", desc: "Real platform development with all the necessary touches for a smooth eCommerce experience." },
        { title: "Testing & Feedback", desc: "In-depth testing at regular intervals to remove bugs and ensure a user-friendly result." },
        { title: "Deployment & Support", desc: "Hassle-free release with continuous support post-deployment." }
    ];

    return (
        <div className="w-full mt-4 mb-4">
            {/* Intro Section */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-16 text-center px-4">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">
                    Smooth Operating Applications using <span className="text-blue-500">Magento</span>
                </h3>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                    Magento ranks as one of the best choices for eCommerce developers and dealers. We transform any platform into a visually rich and fully-functional e-commerce hub, providing custom shopping carts, product catalogs, and flawless checkout experiences.
                </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 mb-20 relative overflow-hidden">
                <div className="absolute -left-[10%] top-[20%] w-[40%] h-[60%] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[80px] pointer-events-none" />
                <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center relative z-10">
                    Looking For Magento Developers? You Are At The Right Place!
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {reasons.map((reason, i) => {
                        const Icon = reason.icon;
                        return (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="mt-1 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm text-blue-500 shrink-0 border border-slate-100 dark:border-slate-700">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{reason.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">{reason.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Development Cycle Timeline */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                Magento Development Life Cycle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {process.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm relative group"
                    >
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 font-bold rounded-full flex items-center justify-center border-4 border-white dark:border-[#020617] group-hover:scale-110 transition-transform">
                            {index + 1}
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pr-6">{step.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Benefits Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                Benefits Of Magento Integration
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {benefits.map((benefit, i) => {
                    const Icon = benefit.icon;
                    return (
                        <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors">
                            <div className="bg-white dark:bg-slate-800 p-4 rounded-full shadow-sm text-blue-500 mb-4">
                                <Icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{benefit.desc}</p>
                        </div>
                    );
                })}
            </div>

            {/* Services List */}
            <div className="mb-20">
                <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                    Our Magento Development Services
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 md:p-16 shadow-xl">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to scale your eCommerce store?
                </h4>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                    Whether migrating from Shopify, WooCommerce, or building from scratch, our end-to-end Magento solutions guarantee a hassle-free transition without impacting your SEO.
                </p>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    Hire Magento Experts
                </button>
            </div>
        </div>
    );
}
