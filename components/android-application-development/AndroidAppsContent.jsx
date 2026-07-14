"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Smartphone, Code2, Globe, CheckCircle2, ShieldCheck, 
    Zap, Rocket, Navigation, Camera, MapPin, Search, 
    Layers, Layout, Cpu, Lock, Settings, ChevronDown, CheckSquare
} from "lucide-react";

const iconMap = {
    Smartphone, Code2, Globe, CheckCircle2, ShieldCheck, 
    Zap, Rocket, Navigation, Camera, MapPin, Search, 
    Layers, Layout, Cpu, Lock, Settings, ChevronDown, CheckSquare
};

const getIcon = (iconIdentifier) => {
    if (typeof iconIdentifier === "string") {
        return iconMap[iconIdentifier] || Code2;
    }
    return iconIdentifier || Code2;
};

export default function AndroidAppsContent({ dynamicData }) {
    const services = dynamicData?.content?.services || [
        { icon: "Code2", title: "Native App Development", desc: "Built specifically for Android using Java, Kotlin, and Android Studio for maximum hardware compatibility and a seamless experience." },
        { icon: "Globe", title: "Hybrid App Development", desc: "Cross-platform solutions utilizing HTML5, JavaScript, CSS, and React Native to reach a wider audience across multiple devices." },
        { icon: "Layout", title: "Customised Android Apps", desc: "Highly scalable, packed with relevant features, and intuitive UI/UX to ensure your customers can navigate easily without any hassle." },
        { icon: "ShieldCheck", title: "Enterprise-Grade Apps", desc: "Robust and highly secured applications designed to streamline organizational processes, decrease downtime, and boost productivity." },
        { icon: "Navigation", title: "GPS & GIS Capabilities", desc: "Integrate powerful mapping, routing, and product tracking features seamlessly into your Android mobile application." },
        { icon: "Camera", title: "Camera & Video Integration", desc: "Increase coverage and security with advanced media integrations like face verification, QR scanning, and media sharing." }
    ];

    const steps = dynamicData?.content?.steps || [
        { title: "Requirement Gathering", desc: "Understanding your business model, roadmap creation, and setting milestones." },
        { title: "UI/UX Design", desc: "Designing an uncompromised, engaging, appealing, and user-friendly interface." },
        { title: "Prototyping", desc: "Listing features and building an initial blueprint to eliminate early bugs." },
        { title: "App Development", desc: "Coding the final product while incorporating your feedback transparently." },
        { title: "QA & Testing", desc: "Conducting harsh tests for functions, performance, and advanced security." },
        { title: "Deployment & Support", desc: "Launching on the Google Play Store followed by proactive maintenance." }
    ];

    const benefits = dynamicData?.content?.benefits || [
        { icon: "Zap", title: "High ROI & Lower Costs", desc: "Interactive applications that boost customer acquisition and retention with minimal maintenance overhead." },
        { icon: "Rocket", title: "Quicker Deployment", desc: "Reduced time-to-market using an expansive array of advanced tools, giving you a strong competitive edge." },
        { icon: "Layers", title: "Numerous Platforms", desc: "Java compatibility ensures seamless integration with a multitude of diverse operating systems." },
        { icon: "Cpu", title: "Versatility & Scalability", desc: "Compatible with smartphones, smartwatches, Android TV, IoT, AR, and VR for maximum future-proofing." },
        { icon: "Lock", title: "Improved Security", desc: "Tackling safety concerns natively with the latest built-in security features and strict encryption tools." },
        { icon: "Settings", title: "Custom Options", desc: "As an open-source platform, it enables businesses to make versatile and highly tailor-made adaptations." }
    ];

    const whyChooseUs = dynamicData?.content?.whyChooseUs || [
        "Comprehensive Requirement Analysis",
        "Eye-Catchy & Premium UI/UX",
        "Complete Cross-Device Functionality",
        "High-Performing & Fast Loading",
        "Advanced Data Encryption",
        "Secure Admin Dashboards"
    ];

    const faqs = dynamicData?.content?.faqs || [
        {
            question: "Which are the most suitable tools for Android app development?",
            answer: "Currently, Android Studio is ranked among the most famous Android app development tools. Made by Google in 2013, it has now become the standard software for Android app development."
        },
        {
            question: "Which are the best programming languages for App Development?",
            answer: "Some of the most common and robust languages include Java, Kotlin (an evolved and highly preferred version of Java), and Swift (for iOS alternatives). Our experts excel in all of them."
        },
        {
            question: "What to look for in an Android app development company?",
            answer: "Before choosing a mobile app development company, you should check their client testimonials, examine their previous experience and portfolio, and get a clear estimated cost for completing your app."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);
    const toggleFaq = (index) => setOpenIndex(openIndex === index ? -1 : index);

    return (
        <div className="w-full mt-4 mb-4">
            {/* Intro Section */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-16 text-center px-4">
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                    Android technology has a market share of <strong className="text-blue-500">more than 80%</strong> in the smartphone segment. Investing in a robust mobile app can help you reach a massive global audience and build unparalleled brand recognition.
                </p>
            </div>

            {/* Core Value Proposition */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 mb-16 relative overflow-hidden">
                <div className="absolute -left-[10%] top-[10%] w-[50%] h-[80%] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white text-center">
                        Unique Yet Scalable Android Solutions
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
                        In an expanding and competitive market, finding the right company is vital. Our experienced and skilled team solves complex mobile-related problems, assisting startups and enterprises in getting the best Android applications loaded with cutting-edge capabilities and cross-browser compatibility.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-blue-500" />
                            <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Expert Consultation</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-blue-500" />
                            <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Thorough QA Testing</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-blue-500" />
                            <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Fast Maintenance</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                Our Android App Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {services.map((service, index) => {
                    const Icon = getIcon(service.icon);
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

            {/* Development Process Timeline */}
            <div className="mb-20">
                <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                    Steps of Android App Development
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-slate-50 dark:bg-slate-900/30 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 relative">
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-500 text-white font-bold rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-[#020617]">
                                {index + 1}
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 mt-2">{step.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits & Why Choose Us */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Benefits of Android Apps</h3>
                    <div className="space-y-6">
                        {benefits.map((benefit, i) => {
                            const Icon = getIcon(benefit.icon);
                            return (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-500 shrink-0">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{benefit.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{benefit.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Why Choose Us?</h3>
                    <div className="bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 h-full">
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Recenturesoft is ranked as one of the best development companies because of the convenient, cost-effective, and timely services we offer.
                        </p>
                        <div className="space-y-4">
                            {whyChooseUs.map((reason, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <CheckSquare className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto w-full mb-12">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                        Frequently Asked <span className="text-blue-500 dark:text-blue-400">Questions</span>
                    </h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? "text-blue-500 dark:text-blue-400" : "text-slate-900 dark:text-white"}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 transition-transform duration-500 ${isOpen ? "rotate-180 bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400" : "text-slate-500"}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-6 pb-6 text-slate-600 dark:text-slate-300">
                                                <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mb-6"></div>
                                                <p className="mb-4 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-blue-600 dark:bg-blue-900/40 rounded-3xl p-10 md:p-16 border border-transparent dark:border-blue-800 shadow-xl">
                <Smartphone className="w-12 h-12 text-blue-300 mx-auto mb-6" />
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to Develop Your Android App?
                </h4>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                    Contact Recenturesoft today and let our skilled team deliver a client-centric Android solution that solves complex problems and scales effortlessly.
                </p>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    Get Free Consultation
                </button>
            </div>
        </div>
    );
}
