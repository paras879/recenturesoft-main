"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function AndroidAppsFAQ({ dynamicData }) {
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

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="py-12 md:py-16 px-4">
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
        </section>
    );
}
