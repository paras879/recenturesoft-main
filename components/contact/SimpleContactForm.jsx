"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone as PhoneIcon, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "@/components/shared/PhoneInput";
import { sanitizePhone, validatePhone } from "@/lib/phoneValidation";

export default function SimpleContactForm() {
    const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
    const [error, setError] = useState(null);
    const [focusedField, setFocusedField] = useState(null);
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneValid, setPhoneValid] = useState(false);
    const [phoneError, setPhoneError] = useState("");
    const [userInteracted, setUserInteracted] = useState(false);
    const recaptchaRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!recaptchaToken) {
            setError("Please complete the reCAPTCHA verification.");
            return;
        }

        const phoneResult = validatePhone(phone);
        if (!phoneResult.valid) {
            setError(phoneResult.message);
            return;
        }

        setFormStatus("submitting");
        setError(null);

        const formData = new FormData(e.currentTarget);
        const firstName = formData.get("firstName") || "";
        const lastName = formData.get("lastName") || "";
        const email = formData.get("email") || "";
        const message = formData.get("message") || "";

        const name = `${firstName} ${lastName}`.trim();
        const subject = `Recenture Inquiry from ${name}`;
        const sanitizedPhone = sanitizePhone(phone);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phone: sanitizedPhone, subject, message, recaptchaToken }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setFormStatus("success");
                e.target.reset();
                setRecaptchaToken("");
                if (recaptchaRef.current) {
                    recaptchaRef.current.reset();
                }
                setTimeout(() => {
                    setFormStatus("idle");
                }, 4000);
            } else {
                let errorMsg = data.message || "Failed to send message. Please try again.";
                if (data.debugData) {
                    errorMsg += " Debug: " + JSON.stringify(data.debugData);
                }
                setError(errorMsg);
                setFormStatus("idle");
                setRecaptchaToken("");
                if (recaptchaRef.current) {
                    recaptchaRef.current.reset();
                }
            }
        } catch (err) {
            console.error("Form submit error:", err);
            setError("Network error. Please check your connection and try again.");
            setFormStatus("idle");
            setRecaptchaToken("");
            if (recaptchaRef.current) {
                recaptchaRef.current.reset();
            }
        }
    };

    const inputClasses = (fieldName) => `
        w-full bg-slate-50/50 dark:bg-black/20 
        border ${focusedField === fieldName ? 'border-cyan-500 ring-4 ring-cyan-500/10' : 'border-slate-300 dark:border-white/10'} 
        rounded-2xl pl-12 pr-4 py-3.5 
        text-slate-900 dark:text-white text-sm
        placeholder:text-slate-400 dark:placeholder:text-slate-500
        focus:outline-none transition-all duration-300
    `;

    const iconClasses = (fieldName) => `
        absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300
        ${focusedField === fieldName ? 'text-cyan-500' : 'text-slate-400 dark:text-slate-500'}
    `;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full relative group"
        >
            {/* Glowing background behind form */}
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
            
            <div className="bg-white/90 dark:bg-slate-900/80 border border-slate-200/50 dark:border-white/10 rounded-[2rem] p-6 md:p-8 lg:p-10 backdrop-blur-2xl relative shadow-2xl overflow-hidden">
                
                {/* Success Overlay */}
                <AnimatePresence>
                    {formStatus === "success" && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-md"
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", bounce: 0.5 }}
                                className="w-24 h-24 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-6"
                            >
                                <CheckCircle2 className="w-12 h-12 text-white" />
                            </motion.div>
                            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 mb-2">Message Sent!</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium text-center">Your vision is in good hands.<br/>We'll reach out within 24 hours.</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Start a Conversation</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Fill in your details below and our enterprise experts will get in touch.</p>
                </div>

                <form 
                    onSubmit={handleSubmit} 
                    className="space-y-5 relative z-10" 
                    noValidate
                    onMouseEnter={() => setUserInteracted(true)}
                    onClick={() => setUserInteracted(true)}
                    onFocus={() => setUserInteracted(true)}
                    onTouchStart={() => setUserInteracted(true)}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="relative">
                            <User className={iconClasses('firstName')} />
                            <input 
                                required type="text" name="firstName" placeholder="First Name" 
                                className={inputClasses('firstName')}
                                onFocus={() => setFocusedField('firstName')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                        <div className="relative">
                            <User className={iconClasses('lastName')} />
                            <input 
                                required type="text" name="lastName" placeholder="Last Name" 
                                className={inputClasses('lastName')}
                                onFocus={() => setFocusedField('lastName')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="relative">
                            <Mail className={iconClasses('email')} />
                            <input 
                                required type="email" name="email" placeholder="Email Address" 
                                className={inputClasses('email')}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                        <div className="relative">
                            <PhoneIcon className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'phone' ? 'text-cyan-500' : 'text-slate-400 dark:text-slate-500'}`} />
                            <PhoneInput
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                onValidationChange={(valid) => setPhoneValid(valid)}
                                required
                                placeholder="Phone Number"
                                label=""
                                className={`bg-slate-50/50 dark:bg-black/20 border ${focusedField === 'phone' ? 'border-cyan-500 ring-4 ring-cyan-500/10' : 'border-slate-300 dark:border-white/10'} rounded-2xl pl-12 pr-4 py-3.5`}
                                onFocus={() => setFocusedField('phone')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <MessageSquare className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${focusedField === 'message' ? 'text-cyan-500' : 'text-slate-400 dark:text-slate-500'}`} />
                        <textarea 
                            required name="message" rows="4" placeholder="Tell us about your project or enterprise needs..." 
                            className={`w-full bg-slate-50/50 dark:bg-black/20 border ${focusedField === 'message' ? 'border-cyan-500 ring-4 ring-cyan-500/10' : 'border-slate-300 dark:border-white/10'} rounded-2xl pl-12 pr-4 py-4 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none transition-all duration-300 resize-none`}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                        ></textarea>
                    </div>

                    {error && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-rose-600 dark:text-rose-400 text-sm bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 rounded-xl p-4 text-center font-medium">
                            {error}
                        </motion.div>
                    )}

                    <div className="flex justify-center my-4 min-h-[78px]">
                        {userInteracted && (
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "dummy_key"}
                                onChange={(token) => setRecaptchaToken(token)}
                                theme="light"
                            />
                        )}
                    </div>

                    <motion.button
                        whileHover={{ scale: recaptchaToken ? 1.01 : 1 }}
                        whileTap={{ scale: recaptchaToken ? 0.98 : 1 }}
                        type="submit"
                        disabled={formStatus === "submitting" || !recaptchaToken}
                        className="group w-full relative overflow-hidden bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-2xl shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                            {formStatus === "submitting" ? "Initializing Protocol..." : "Send Secure Message"}
                        </span>
                        {!formStatus && <Send className="relative z-10 w-5 h-5 group-hover:text-white transition-colors duration-300" />}
                        {formStatus === "submitting" && (
                            <svg className="relative z-10 animate-spin w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
}
