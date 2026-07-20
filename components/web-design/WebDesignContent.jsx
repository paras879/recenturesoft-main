"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

function getIcon(name) {
    if (!name) return null;
    const iconKey = name.replace(/-./g, c => c[1].toUpperCase());
    return LucideIcons[iconKey] || LucideIcons[iconKey.replace(/-/g, '')] || null;
}

function DynamicIcon({ name, className }) {
    const Icon = getIcon(name) || LucideIcons.MonitorPlay;
    return <Icon className={className || "w-6 h-6"} />;
}

export default function WebDesignContent({ dynamicData }) {
    const content = dynamicData?.content || {};

    const intro = content.intro || {};
    const introTitle = intro.title || "Allow Web Design Company in India to make your website user-friendly";
    const introSubtitle = intro.subtitle || "Your company is more than just a pretty picture on the screen.";
    const introDesc1 = intro.description1 || "At Recenturesoft, the leading web design company in India, we believe that your online presence is an extrapolation of you, your product, and the tone that you set for your brand’s story. We create stunning web designs and push the envelope beyond static three-column layouts to give an all-immersive digital brand experience that resonates with your viewers. We are a team of strategic and creative techies with over 15 years of expertise in creating web designs that inform, delight, and inspire.";
    const introDesc2 = intro.description2 || "In short - we bring your product offerings to life through next-generation web technologies and AI.";
    const introDesc3 = intro.description3 || "Our developers, who are experts at eCommerce web design, dive deep into your industry and product aesthetics to ensure that your website represents everything that you and your business stand for. We analyse and optimise customer experience by making a well-structured, AI-enhanced, responsive web design to make your brand look like a million bucks and dramatically improve conversions.";

    const servicesTitle = content.servicesTitle || "What We Do?";
    const services = content.services || [
        {
            icon: "MonitorPlay",
            title: "Immersive UI/UX",
            desc: "Create exclusive user experiences that compliment a strong, modern user interface, driven by user psychology."
        },
        {
            icon: "TrendingUp",
            title: "Conversion Optimization",
            desc: "Increase on-site engagement and drive sales with strategic layouts designed for maximum conversion."
        },
        {
            icon: "Zap",
            title: "Lightning Fast & Scalable",
            desc: "Ensure scalability and blazing fast load times using modern frameworks like React and Next.js."
        },
        {
            icon: "Cpu",
            title: "AI-Powered Personalization",
            desc: "Integrate AI algorithms to deliver tailored content and smart interactions for the desired end-user experience."
        }
    ];

    const middleDesc = content.middleDesc || "We are a website design company that can craft gorgeous one-page websites through parallax scrolling, design-driven informational websites for potential and active customers, and AI-powered e-commerce websites to facilitate seamless online purchasing. We can also redesign your existing website’s clunky menus, update legacy layouts, and ensure a clean, intuitive flow throughout the platform.";

    const whyTitle = content.whyTitle || "Why Recenturesoft?";
    const whySubtitle = content.whySubtitle || "The Recenturesoft Advantage";
    const whyFeatures = content.whyFeatures || [
        "Prompt delivery framework with the best coding quality",
        "AI-driven monitoring and regular automated updates",
        "Over 50 international clients successfully scaled",
        "Dedicated in-house team of full-stack engineers"
    ];

    const techTitle = content.techTitle || "Our Technology Stack";
    const techStack = content.techStack || [
        {
            icon: "Code2",
            title: "Modern Frontend",
            desc: "React, Next.js, Vue, TailwindCSS & Modern JavaScript"
        },
        {
            icon: "Layers",
            title: "Robust Backend",
            desc: "Node.js, Python/Django, PHP, Java & Cloud Architectures"
        },
        {
            icon: "ShieldCheck",
            title: "Secure Databases",
            desc: "PostgreSQL, MongoDB, MySQL, Oracle & MS SQL"
        },
        {
            icon: "Sparkles",
            title: "AI & Innovation",
            desc: "Generative AI integrations, Machine Learning models & Smart APIs"
        }
    ];

    const ctaDesc = content.ctaDesc || "We have helped over 50 international clients with website design services, content creation, branding, and designing.";
    const ctaTitle = content.ctaTitle || "If you too have a project for us, then ring us or drop a message and let’s get started!";

    return (
        <div className="w-full mt-4 mb-4">
            <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                    {introTitle}
                </h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
                    {introSubtitle}
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {introDesc1}
                </p>
                <p className="text-slate-800 dark:text-slate-200 font-semibold text-lg border-l-4 border-blue-500 pl-4 mb-6">
                    {introDesc2}
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {introDesc3}
                </p>
            </div>

            {/* Services Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-white text-center">
                {servicesTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {services.map((service, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <DynamicIcon name={service.icon} className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
                        </motion.div>
                    );
                })}
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {middleDesc}
                </p>
            </div>

            {/* Why Choose Us & Tech Stack Grid */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 dark:text-white text-center">
                    {whyTitle}
                </h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">{whySubtitle}</h4>
                        <ul className="space-y-4">
                            {whyFeatures.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">{techTitle}</h4>
                        <div className="space-y-6">
                            {techStack.map((tech, i) => {
                                return (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="mt-1 text-blue-500 flex-shrink-0">
                                            <DynamicIcon name={tech.icon} className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h5 className="font-medium text-slate-900 dark:text-white">{tech.title}</h5>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{tech.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 font-medium">
                    {ctaDesc}
                </p>
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    {ctaTitle}
                </h4>
            </div>
        </div>
    );
}
