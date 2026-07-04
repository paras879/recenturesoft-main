"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

// FIX #11 (root cause of "Element render delay: 4000ms" on mobile LCP):
// The previous code did `const delay = isMobile ? 8000 : 1000` — waiting
// 8 FULL SECONDS on mobile before ever mounting this banner. The intent
// was probably "keep it off the critical path", but it backfired: since
// nothing else large painted after it, this banner's late appearance
// became the new Largest Contentful Paint candidate itself, and LCP is
// measured from navigation start to whenever that final paint happens —
// so the 8s delay was directly inflating the LCP metric it was trying to
// protect.
//
// Fix: show it quickly and uniformly across devices. A short delay
// (500ms) still avoids an instant jarring pop-in right as the hero
// content is settling, but is small enough that it no longer dominates
// the LCP timeline the way an 8s delay did.
//
// FIX #12 (bundle size): framer-motion (AnimatePresence + motion.div) is
// a fairly heavy dependency to pull in just for a slide-up/fade toast.
// Replaced with a plain CSS transition on opacity/transform, driven by
// a class toggle. This is one of the two "Reduce unused JavaScript"
// chunks flagged in the Lighthouse diagnostics tied to this LCP/FCP
// element — removing framer-motion here shrinks that bundle directly.
export default function CookieConsentBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            const timer = setTimeout(() => {
                setIsMounted(true);
                // Mount first with opacity 0 (via CSS class), then flip
                // to visible on the next frame so the transition actually
                // animates instead of snapping in.
                requestAnimationFrame(() => setIsVisible(true));
            }, 500);
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

    if (!isMounted) return null;

    return (
        <div
            className={`fixed bottom-4 left-4 z-[9999] transition-all duration-300 ease-out ${isVisible
                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                    : "opacity-0 translate-y-[50px] scale-90 pointer-events-none"
                }`}
        >
            <div className="max-w-sm w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 p-5 rounded-2xl shadow-2xl relative">
                <button
                    onClick={() => setIsVisible(false)}
                    aria-label="Close cookie consent banner"
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
        </div>
    );
}