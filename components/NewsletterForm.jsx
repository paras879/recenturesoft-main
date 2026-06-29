"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState({ type: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            
            const data = await res.json();
            
            if (res.ok && data.success) {
                setStatus({ type: "success", message: "Thanks for subscribing!" });
                setEmail("");
            } else {
                setStatus({ type: "error", message: data.error || "Failed to subscribe." });
            }
        } catch (error) {
            setStatus({ type: "error", message: "Something went wrong." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <form className="relative" onSubmit={handleSubmit}>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-6 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <button 
                    type="submit" 
                    disabled={loading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-400 transition-colors disabled:opacity-70 flex items-center justify-center"
                >
                    {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    )}
                </button>
            </form>
            {status.message && (
                <p className={`text-xs px-2 ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {status.message}
                </p>
            )}
        </div>
    );
}
