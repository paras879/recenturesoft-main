"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

/* ────────────────────────────────────────────────────────────
   reCAPTCHA v2 Loader hook
   Loads the Google script once per page and renders the widget
──────────────────────────────────────────────────────────── */
function useRecaptcha(containerRef, onToken, shouldLoad) {
    const widgetIdRef = useRef(null);

    useEffect(() => {
        if (!SITE_KEY || !shouldLoad) return;

        const renderWidget = () => {
            if (!containerRef.current || widgetIdRef.current !== null) return;
            
            // Clear container and create a fresh wrapper for React StrictMode
            containerRef.current.innerHTML = "";
            const wrapper = document.createElement("div");
            containerRef.current.appendChild(wrapper);

            widgetIdRef.current = window.grecaptcha.render(wrapper, {
                sitekey: SITE_KEY,
                callback: (token) => onToken(token),
                "expired-callback": () => onToken(null),
                "error-callback": () => onToken(null),
                theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
            });
        };

        if (window.grecaptcha && window.grecaptcha.render) {
            renderWidget();
        } else {
            // Script not loaded yet — load it
            const scriptId = "recaptcha-script";
            if (!document.getElementById(scriptId)) {
                const script = document.createElement("script");
                script.id = scriptId;
                script.src = "https://www.google.com/recaptcha/api.js?render=explicit&onload=__rcLoaded";
                script.async = true;
                script.defer = true;
                document.head.appendChild(script);
            }
            window.__rcLoaded = renderWidget;
        }

        return () => {
            // Reset widget ref on unmount so it can re-render if component remounts
            widgetIdRef.current = null;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldLoad]);

    const resetWidget = useCallback(() => {
        if (widgetIdRef.current !== null && window.grecaptcha) {
            window.grecaptcha.reset(widgetIdRef.current);
        }
    }, []);

    return { resetWidget };
}

/* ────────────────────────────────────────────────────────────
   Main Component
──────────────────────────────────────────────────────────── */
export default function SolutionContactForm({ serviceName = "Our Service" }) {
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState("");
    const [userInteracted, setUserInteracted] = useState(false);
    const captchaContainerRef = useRef(null);
    const successTimerRef = useRef(null);

    const { resetWidget } = useRecaptcha(captchaContainerRef, setRecaptchaToken, userInteracted);

    // Auto-dismiss success message after 3 seconds
    useEffect(() => {
        if (status === "success") {
            successTimerRef.current = setTimeout(() => setStatus("idle"), 3000);
        }
        return () => clearTimeout(successTimerRef.current);
    }, [status]);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        if (!recaptchaToken) {
            setErrorMsg("Please complete the 'I am not a robot' verification.");
            return;
        }

        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    subject: `Solution Inquiry: ${serviceName}`,
                    message: form.message,
                    recaptchaToken,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setForm({ name: "", email: "", phone: "", message: "" });
                setRecaptchaToken(null);
                resetWidget();
            } else {
                setStatus("error");
                setErrorMsg(data.message || "Something went wrong. Please try again.");
                resetWidget();
                setRecaptchaToken(null);
            }
        } catch {
            setStatus("error");
            setErrorMsg("Network error. Please check your connection and try again.");
            resetWidget();
            setRecaptchaToken(null);
        }
    };

    return (
        <section 
            id="contact-form-section" 
            className="relative py-10 md:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 dark:from-slate-950 dark:via-[#090d16] dark:to-slate-950"
            onMouseEnter={() => setUserInteracted(true)} 
            onClick={() => setUserInteracted(true)} 
            onFocus={() => setUserInteracted(true)}
            onTouchStart={() => setUserInteracted(true)}
        >
            {/* Ambient glow blobs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 dark:bg-cyan-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                        Interested in <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">{serviceName}?</span>
                    </h2>
                    <p className="mt-3 text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto">
                        Fill out the form below and our experts will get back to you within 24 hours.
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/60 dark:border-white/[0.08] rounded-3xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] overflow-hidden">
                    {/* Top gradient bar */}
                    <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600" />

                    <div className="p-6 sm:p-8 md:p-10">
                        {/* Success Banner */}
                        {status === "success" && (
                            <div className="mb-6 flex items-center gap-3 px-5 py-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 animate-in fade-in slide-in-from-top-2 duration-300">
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm font-semibold">Thank you! Your inquiry has been sent. We&apos;ll contact you soon. 🎉</span>
                            </div>
                        )}

                        {/* Error Banner */}
                        {status === "error" && errorMsg && (
                            <div className="mb-6 flex items-center gap-3 px-5 py-4 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 animate-in fade-in slide-in-from-top-2 duration-300">
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm font-semibold">{errorMsg}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                {/* Name */}
                                <div className="space-y-1.5">
                                    <label htmlFor="scf-name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="scf-name"
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Smith"
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-200"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-1.5">
                                    <label htmlFor="scf-email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="scf-email"
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@company.com"
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-200"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="space-y-1.5">
                                    <label htmlFor="scf-phone" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                        Phone Number
                                    </label>
                                    <input
                                        id="scf-phone"
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="+91 99999 99999"
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-200"
                                    />
                                </div>

                                {/* Service (pre-filled read-only) */}
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                        Service Interest
                                    </label>
                                    <div className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-600 dark:text-slate-400 font-medium truncate select-none">
                                        {serviceName}
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-1.5 mb-6">
                                <label htmlFor="scf-message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="scf-message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder={`Tell us about your ${serviceName} requirements...`}
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-200 resize-none"
                                />
                            </div>

                            {/* reCAPTCHA v2 widget */}
                            <div className="mb-6">
                                <div ref={captchaContainerRef} id="solution-recaptcha-widget" />
                                {!SITE_KEY && (
                                    <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                                        ⚠️ reCAPTCHA site key not configured.
                                    </p>
                                )}
                            </div>

                            {/* Captcha validation error */}
                            {status !== "loading" && errorMsg && status !== "error" && (
                                <p className="text-red-500 text-sm mb-4 -mt-2">{errorMsg}</p>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 transition-transform duration-300 group-hover:scale-105" />
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {status === "loading" ? (
                                        <>
                                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Inquiry
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Trust badge */}
                <p className="text-center text-slate-400 dark:text-slate-500 text-xs mt-5">
                    🔒 Your information is secure and will never be shared with third parties.
                </p>
            </div>
        </section>
    );
}
