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
        // requestIdleCallback fires once the main thread is free — i.e. after
        // the hero content has painted and hydrated. Falls back to a fixed
        // timeout on browsers/environments without it (e.g. some mobile
        // Safari versions), so the widget still shows up reliably either way.
        if ("requestIdleCallback" in window) {
            const id = window.requestIdleCallback(() => setShouldLoad(true), {
                timeout: 4000,
            });
            return () => {
                if (window.cancelIdleCallback) {
                    window.cancelIdleCallback(id);
                }
            };
        } else {
            const id = setTimeout(() => setShouldLoad(true), 2500);
            return () => clearTimeout(id);
        }
    }, []);

    if (!shouldLoad) return null;
    return <RecentureAIWrapper />;
}