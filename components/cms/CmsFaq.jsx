"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";

const faqs = [
    {
        question: "Is CMS Development complex to operate?",
        answer: "No, the best CMS Development Company will offer a user-friendly interface along with all the features you want. Also, CMS known in the market is easy to use and anyone can start easily with little training. You can start updating your website right away and don’t need to learn any kind of programming language or possess technical knowledge."
    },
    {
        question: "Is there any hidden cost with CMS Development Company In India?",
        answer: "No, our team discusses your requirements and then quotes the price accordingly. Our CMS Development services India team works hard to develop customer-centric solutions that will fit your requirements."
    },
    {
        question: "How much does a CMS Development company India cost?",
        answer: "The cost of CMS Development company India depends upon the scale of the businesses, technology used or the type of CMS you require. Moreover, team size, the scale of the project and several other factors play a role in determining the time taken to complete custom CMS Development services India."
    },
    {
        question: "Which is the best CMS Development company for a website?",
        answer: "Businesses can choose the CMS technology they want themselves or let our experts develop them for you. Our best CMS Development team uses technologies such as WordPress, Drupal, Joomla, Kentico based on your business requirements."
    }
];

export default function CmsFaq() {
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
                    Everything you need to know about our CMS development services.
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
