import Link from "next/link";
import NavbarClient from "@/components/NavbarClient";
import FutureFooter from "@/components/FutureFooter";
import BackButton from "@/components/BackButton";

export default function NotFound() {
    return (
        <main className="bg-slate-50 dark:bg-[#020617] min-h-screen flex flex-col font-sans selection:bg-cyan-500/30">
            <NavbarClient />

            <div className="flex-1 flex items-center justify-center relative overflow-hidden pt-24 pb-16 px-4">
                {/* Background decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none translate-x-[20%]" />

                <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
                    {/* The 404 Text */}
                    <div className="relative inline-block mb-6">
                        <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-slate-400 dark:from-white dark:via-slate-200 dark:to-slate-600 select-none">
                            404
                        </h1>
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-2xl -z-10 rounded-full" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                        Oops! Page Not Found
                    </h2>
                    
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <BackButton />

                        <Link
                            href="/"
                            className="group flex items-center justify-center gap-2 px-8 py-3.5 w-full sm:w-auto rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-cyan-600 dark:hover:bg-cyan-50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Go to Home
                        </Link>
                    </div>
                </div>
            </div>

            <FutureFooter />
        </main>
    );
}
