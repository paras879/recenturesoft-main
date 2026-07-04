"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// All main routes to prefetch on load
const ROUTES = [
    "/",
    "/solutions",
    "/about",
    "/portfolio",
    "/blog",
    "/events",
    "/news",
    "/contact",
];

/**
 * Silently prefetches all main routes after page load.
 * This pre-warms Next.js's route cache so subsequent navigations are instant.
 * Uses requestIdleCallback to avoid competing with paint/hydration.
 *
 * FIX #8 (mobile-only, desktop behavior 100% unchanged):
 * The previous version still fired prefetches on mobile after a 5s delay,
 * but `requestIdleCallback(..., { timeout: 2000 })` force-executes within
 * 2s regardless of actual idle state — so worst case, 8 routes' worth of
 * RSC payload requests + parsing could still land around the 5-7s mark,
 * which is inside the window Lighthouse's mobile trace (Slow 4G + CPU
 * throttling) is measuring for Speed Index / main-thread work. That
 * network burst + parse work was competing with the metrics themselves.
 *
 * Next.js's <Link> component already prefetches automatically when a
 * link scrolls into the viewport, which is enough for real mobile users
 * on constrained bandwidth. So on mobile we skip this manual upfront
 * prefetch entirely — zero timers, zero requests, zero main-thread work
 * from this component. Desktop keeps the exact original behavior
 * (500ms delay + idle callback prefetching all routes), completely
 * untouched, since desktop has the CPU/bandwidth headroom to benefit
 * from it and its score isn't affected by this change at all.
 */
export default function RoutePreloader() {
    const router = useRouter();

    useEffect(() => {
        // Bail out entirely on mobile — no timers, no prefetch calls.
        // Next.js <Link> viewport-based prefetching already covers this
        // case for real users; this component's job is purely a desktop
        // "pre-warm everything upfront" optimization.
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        const prefetchAll = () => {
            ROUTES.forEach((route) => {
                router.prefetch(route);
            });
        };

        const startPreload = () => {
            if ("requestIdleCallback" in window) {
                requestIdleCallback(prefetchAll, { timeout: 2000 });
            } else {
                prefetchAll();
            }
        };

        const timer = setTimeout(startPreload, 500);

        return () => clearTimeout(timer);
    }, [router]);

    return null;
}