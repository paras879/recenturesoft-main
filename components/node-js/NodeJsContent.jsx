"use client";

import React from 'react';
import Link from 'next/link';
import CinematicServiceTemplate from "@/components/shared/CinematicServiceTemplate";
import { ServerCog, Zap, Network, Lock, Database, Code2, FileText, Smartphone, CheckCircle2, ArrowRight } from "lucide-react";

const iconMap = {
    ServerCog, Zap, Network, Lock, Database, Code2, FileText, Smartphone
};

export default function NodeJsContent({ dynamicData }) {
    const getIcon = (iconName, FallbackIcon) => {
        if (typeof iconName === 'string') {
            return iconMap[iconName] || FallbackIcon || FileText;
        }
        return FallbackIcon || FileText;
    };

    const content = dynamicData?.content || {};

    const title = content.title || "Power Your Backend with";
    const subtitle = content.subtitle || "Node.js";
    const themeColor = content.themeColor || "sky";
    const introParagraphs = content.introParagraphs || [
        "Node.js has fundamentally transformed backend development. By bringing JavaScript to the server, it enables developers to build highly scalable, data-intensive, and real-time applications that perform brilliantly under heavy loads.",
        "At RecentureSoft, our backend engineering teams specialize in architecting robust Node.js solutions. Whether it is a massive microservices architecture, a real-time chat application using WebSockets, or a high-throughput API gateway, we write clean, secure, and highly optimized Node.js code that powers enterprise businesses."
    ];

    const rawFeatures = content.features || [
        {
            icon: "Zap",
            title: "Event-Driven Architecture",
            desc: "Non-blocking I/O operations make Node.js incredibly lightweight and efficient for real-time applications.",
            highlights: ["Asynchronous processing", "WebSocket ready", "Low memory footprint"]
        },
        {
            icon: "Network",
            title: "Microservices & APIs",
            desc: "Build scalable REST and GraphQL APIs that serve as the backbone for your web and mobile clients.",
            highlights: ["GraphQL integration", "RESTful architecture", "Docker containerization"]
        },
        {
            icon: "Database",
            title: "Database Integration",
            desc: "Seamless connectivity with MongoDB, PostgreSQL, Redis, and other modern databases.",
            highlights: ["Prisma & TypeORM", "NoSQL flexibility", "High-performance caching"]
        },
        {
            icon: "ServerCog",
            title: "High Scalability",
            desc: "Easily scale horizontally and vertically to handle thousands of concurrent connections with minimal overhead.",
            highlights: ["PM2 cluster mode", "Kubernetes scaling", "Load balancing"]
        },
        {
            icon: "Lock",
            title: "Enterprise Security",
            desc: "Implement JWT authentication, rate limiting, data encryption, and robust middleware pipelines.",
            highlights: ["OAuth2 & JWT", "Helmet.js protection", "Rate limiting"]
        },
        {
            icon: "Code2",
            title: "Full-Stack JavaScript",
            desc: "Unify your engineering stack by using JavaScript on both the client (React/Next) and the server (Node).",
            highlights: ["TypeScript support", "Shared DTOs", "Unified tooling"]
        }
    ];

    const features = rawFeatures.map(f => ({
        ...f,
        icon: getIcon(f.icon, ServerCog)
    }));

    return (
        <CinematicServiceTemplate
            title={title}
            subtitle={subtitle}
            themeColor={themeColor}
            introParagraphs={introParagraphs}
            features={features}
            ctaTitle={content.ctaTitle}
            ctaSubtitle={content.ctaSubtitle}
            ctaBtnText={content.ctaBtnText}
            ctaBtnLink={content.ctaBtnLink}
        >
            {/* 1. Services Section */}
            <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-2xl p-8 md:p-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                        {content?.nodeServices?.title || "Our Node JS Development Services In India"}
                    </h2>
                    <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        {content?.nodeServices?.desc || "RecentureSoft’s Node JS development services allow you to comply with the web app development requirements of your business. Our bespoke Node JS development packages in India offer various combinations of advanced tools and modern frameworks. Here are the best services that you will get when you opt for RecentureSoft as your Node JS development company:"}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {(content?.nodeServices?.cards?.length > 0 ? content.nodeServices.cards : [
                        { title: 'Express JS development', desc: 'Our team of developers uses Express JS with Node JS to build the backend and frontend. It will ensure the formation of mobile apps and websites with hassle-free maintenance.', icon: 'ServerCog' },
                        { title: 'Consulting service', desc: 'We have a professional team of project managers and engineers who can provide you with the best Node JS consulting services. With this consulting service, you can create future-proof apps and refine your operations. You will also get around-the-clock assistance to ensure the most seamless consultation, enabling us to become the best Node JS development company in India.', icon: 'FileText' },
                        { title: 'API development', desc: 'We are a one-stop Node JS development company offering Node JS API development and integration to deliver enterprise-based API development services. Our team can comply with every API-related need and provide the most powerful API-based apps, which are built from the scratch using Express JS.', icon: 'Network' },
                        { title: 'Plugin development', desc: 'Our team is adept at creating custom Node JS plugins to optimize online apps’ performance. You may now consider leveraging our expertise in Node JS plugin development to improve the functionality and effectiveness of the apps.', icon: 'Code2' },
                        { title: 'Mobile app development', desc: 'We offer top-rated Node JS development services to help businesses build bespoke mobile apps. Our experienced Node JS developers can build enterprise-grade Node JS solutions for SMEs to minimize the expansion cost.', icon: 'Smartphone' }
                    ]).map((service, idx) => {
                        const Icon = getIcon(service.icon, ServerCog);
                        return (
                            <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-sky-500/30 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-500 transition-colors">
                                    <Icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{service.desc}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="bg-sky-50 dark:bg-slate-800/80 rounded-2xl p-8 mb-8 border border-sky-100 dark:border-slate-700">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our range of development services isn’t limited to these, but we also provide the following:</h4>
                    <ul className="grid md:grid-cols-3 gap-4 mb-8">
                        {(content?.nodeServices?.list?.length > 0 ? content.nodeServices.list : [
                            "Web application development",
                            "Support and maintenance",
                            "Migration and upgradation"
                        ]).map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="text-center pt-8 border-t border-sky-200 dark:border-slate-700">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{content?.nodeServices?.ctaTitle || "Need RecentureSoft for your upcoming project?"}</h4>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">{content?.nodeServices?.ctaDesc || "Contact our 'solution provider' team today to conclude your 'Node JS development company near me' search!"}</p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-bold transition-colors shadow-lg shadow-sky-500/25">
                            Contact Us <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Why Choose Section */}
            <section className="bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 to-transparent"></div>
                <div className="relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                            {content?.nodeWhyChoose?.title || "Why Businesses Choose Our Node JS Development Services In India?"}
                        </h2>
                        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            {content?.nodeWhyChoose?.desc || "Our team of professional Node JS developers are adept at designing the backend to leverage the non-blocking I/O mechanism. As a prestigious Node JS development agency in India, RecentureSoft is proficient in building platforms that support large user bases and real-time processing. These are the best reasons to choose our services:"}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {(content?.nodeWhyChoose?.cards?.length > 0 ? content.nodeWhyChoose.cards : [
                            { title: 'Real-time and event-based application architecture', desc: 'Our team offer Node JS development services in the field of event-powered programming for real-time dashboards and several data-streaming operations. Our experienced Node JS developers build a range of solutions to handle high-volume events, allowing businesses to respond faster and adapt their operations.', icon: 'Zap' },
                            { title: 'Safe and API-First enterprise integrations', desc: 'As a reliable Node JS development agency in India, we provide an API-first and secure backend to streamline corporate integration. Our array of Node JS consulting solutions ensures hassle-free communication among CRM, services, and third-party systems.', icon: 'Lock' },
                            { title: 'Enterprise-level scalability and performance', desc: 'Our Node JS team is an expert at building highly scalable server-side platforms optimized for concurrency and non-blocking I/O. As an experienced Node JS development company in India, we develop several platforms for managing real-time processing, massive user bases, and multi-region operations, streamlined for performance and to keep the infrastructure scaling costs down.', icon: 'ServerCog' },
                        ]).map((reason, idx) => {
                            const Icon = getIcon(reason.icon, ServerCog);
                            return (
                                <div key={idx} className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all group">
                                    <div className="w-14 h-14 bg-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sky-500 transition-all duration-300">
                                        <Icon className="w-7 h-7 text-sky-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{reason.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* 3. Process Section */}
            <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-2xl p-8 md:p-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                        {content?.nodeProcess?.title || "Our Proven Node.js Development Process"}
                    </h2>
                    <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full mb-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {(content?.nodeProcess?.steps?.length > 0 ? content.nodeProcess.steps : [
                        { step: '01', title: 'Requirement Analysis', desc: 'We analyze your business needs to determine the best architectural pattern for your Node.js application.' },
                        { step: '02', title: 'Architecture Design', desc: 'Our experts design scalable event-driven architecture mapping out APIs, databases, and microservices.' },
                        { step: '03', title: 'Agile Development', desc: 'We write clean, efficient JavaScript/TypeScript code using modern frameworks like Express or NestJS.' },
                        { step: '04', title: 'Testing & Deployment', desc: 'Rigorous QA testing ensures stability before secure deployment to AWS, Azure, or your preferred cloud.' }
                    ]).map((step, idx) => (
                        <div key={idx} className="relative bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-sky-500/30 transition-all group">
                            <div className="text-5xl font-black text-slate-200 dark:text-slate-700/50 mb-4 group-hover:text-sky-100 dark:group-hover:text-sky-900/30 transition-colors">
                                {step.step}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </CinematicServiceTemplate>
    );
}
