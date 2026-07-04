"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection({ faqs = [] }) {
    const [openIndex, setOpenIndex] = useState(null);

    if (!faqs || faqs.length === 0) return null;

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-8 pb-8 md:pt-12 md:pb-12 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
            {/* Background elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 
                        className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white animate-fade-in-up"
                    >
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">Questions</span>
                    </h2>
                    <p 
                        className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-100"
                    >
                        Everything you need to know about our services and process. Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={faq._id || index}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in-up ${isOpen ? 'bg-white dark:bg-white/5 border-cyan-200 dark:border-cyan-500/30 shadow-lg shadow-cyan-500/5' : 'bg-white/50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/5'}`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                                >
                                    <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-cyan-700 dark:text-cyan-400' : 'text-slate-900 dark:text-slate-200'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${isOpen ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'}`}>
                                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                    </div>
                                </button>
                                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
