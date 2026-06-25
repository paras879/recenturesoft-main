"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsentBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            // Add a small delay before showing the banner
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 50, opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-4 left-4 z-[9999] pointer-events-none"
                >
                    <div className="max-w-sm w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 p-5 rounded-2xl shadow-2xl pointer-events-auto relative">
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-full transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                        
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                                <Cookie className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white">We use cookies</h3>
                        </div>
                        
                        <p className="text-sm text-slate-600 dark:text-gray-400 mb-5 leading-relaxed">
                            We use cookies to improve your experience and analyze traffic. See our{" "}
                            <Link href="/cookies" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                                Cookies Policy
                            </Link>.
                        </p>
                        
                        <div className="flex items-center gap-3 w-full">
                            <button
                                onClick={handleDecline}
                                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-colors"
                            >
                                Accept Now
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
