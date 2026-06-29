"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";

const faqs = [
    {
        question: "What are the 4 types of CRM software development services in India?",
        answer: "The main 4 types of systems offered by CRM development company in India include:",
        list: [
            "Strategic CRM",
            "Operational CRM",
            "Analytical CRM",
            "Collaborative CRM"
        ]
    },
    {
        question: "What to look for in good software development services in India?",
        answer: "You have to study a few benchmarks before deciding to partner with the best CRM development company in India. To find the best CRM development company in India, you have to",
        list: [
            "Check testimonials of the company",
            "Evaluate their operational capabilities",
            "Assess their analytical CRM expertise",
            "Check for collaborative CRM experience"
        ],
        footer: "Learn more about our software development services in India at our online portal."
    },
    {
        question: "What are the main tools used by CRM software development company in India?",
        answer: "There are several famous CRM development company in India tools including",
        list: [
            "Salesforce CRM",
            "SAP CRM",
            "ZOHO CRM",
            "Oracle CRM",
            "Microsoft Dynamics CRM",
            "Nimble CRM",
            "Sugar CRM",
            "Hub spot CRM"
        ]
    }
];

export default function CrmFaq() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="mt-12 mb-12 max-w-4xl mx-auto w-full">
            <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                    Frequently Asked <span className="text-blue-500 dark:text-blue-400">Questions</span>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                    Everything you need to know about our CRM development services.
                </p>
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

                                            {faq.list && (
                                                <ul className="space-y-3 mb-4">
                                                    {faq.list.map((item, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" />
                                                            <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {faq.footer && (
                                                <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                                    {faq.footer}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
