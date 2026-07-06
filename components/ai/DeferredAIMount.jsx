"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// FIX #6 (cont.): ssr:false here means this chunk is NEVER part of the
// server-rendered HTML or the initial hydration bundle — it's a pure
// client-side lazy import, fetched only once `shouldLoad` flips true.
const RecentureAIWrapper = dynamic(
    () => import("@/components/ai/RecentureAIWrapper"),
    { ssr: false }
);

export default function DeferredAIMount() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        let interactionTimeout;
        const events = ["scroll", "mousemove", "touchstart", "keydown", "click"];
        
        const loadWidget = () => {
            if (!shouldLoad) {
                setShouldLoad(true);
                events.forEach(e => window.removeEventListener(e, loadWidget));
                clearTimeout(interactionTimeout);
            }
        };

        // Load on first user interaction
        events.forEach(e => window.addEventListener(e, loadWidget, { once: true, passive: true }));
        
        // Fallback: load after 10 seconds if no interaction
        interactionTimeout = setTimeout(loadWidget, 10000);

        return () => {
            events.forEach(e => window.removeEventListener(e, loadWidget));
            clearTimeout(interactionTimeout);
        };
    }, [shouldLoad]);

    if (!shouldLoad) return null;
    return <RecentureAIWrapper />;
}