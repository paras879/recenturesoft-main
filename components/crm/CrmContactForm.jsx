"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PhoneInput from "@/components/shared/PhoneInput";
import { sanitizePhone, validatePhone } from "@/lib/phoneValidation";

export default function CrmContactForm() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [captchaInput, setCaptchaInput] = useState("");
    const [status, setStatus] = useState("idle");
    const [phone, setPhone] = useState("");
    const [phoneValid, setPhoneValid] = useState(false);

    useEffect(() => {
        setNum1(Math.floor(Math.random() * 10) + 1);
        setNum2(Math.floor(Math.random() * 10) + 1);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneResult = validatePhone(phone);
        if (!phoneResult.valid) {
            alert(phoneResult.message);
            return;
        }

        if (parseInt(captchaInput) !== num1 + num2) {
            alert("Incorrect Captcha! Please try again.");
            setNum1(Math.floor(Math.random() * 10) + 1);
            setNum2(Math.floor(Math.random() * 10) + 1);
            setCaptchaInput("");
            return;
        }

        setStatus("submitting");

        // Simulate form submission
        setTimeout(() => {
            setStatus("success");
            e.target.reset();
            setCaptchaInput("");
            setNum1(Math.floor(Math.random() * 10) + 1);
            setNum2(Math.floor(Math.random() * 10) + 1);
            
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <div className="mt-12 mb-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-10 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Let's Discuss Your Project</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">Reach out to our experts and get started today.</p>

            {status === "success" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center py-10">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h4 className="text-xl font-bold text-emerald-600">Message Sent Successfully!</h4>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                            <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                            <PhoneInput
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                onValidationChange={setPhoneValid}
                                required
                                placeholder="9999999999"
                                label="Phone No."
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white transition-all"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white transition-all" placeholder="john@example.com" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Write Message</label>
                        <textarea required rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white transition-all resize-none" placeholder="Tell us about your project requirements..."></textarea>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                        <div className="flex-1 w-full">
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Captcha: What is {num1} + {num2}?</label>
                            <input 
                                required 
                                type="number" 
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                className="w-full max-w-[200px] px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white transition-all" 
                                placeholder="Answer" 
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === "submitting"}
                            className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/30"
                        >
                            {status === "submitting" ? "Sending..." : "Submit Message"}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
