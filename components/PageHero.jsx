"use client";

export default function PageHero({ title, highlight, description, banner, highlightClass, hideContactButton, children }) {
    return (
        <section className={`relative pt-24 md:pt-28 lg:pt-32 pb-2 md:pb-4 lg:pb-6 overflow-hidden min-h-fit flex items-center transition-colors duration-300 ${children ? 'bg-[#020617]' : 'bg-background'}`}>
            {/* CSS entry animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes scaleXIn {
                    from { opacity: 0; transform: scaleX(0); }
                    to { opacity: 1; transform: scaleX(1); }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-up-1 {
                    animation: fadeInUp 0.6s ease-out 0.1s both;
                }
                .animate-fade-up-2 {
                    animation: fadeInUp 0.6s ease-out 0.2s both;
                }
                .animate-scale-x-in {
                    animation: scaleXIn 0.8s ease-out 0.4s both;
                }
                .animate-scale-in {
                    animation: scaleIn 0.8s ease-out 0.3s both;
                }
            `}} />

            {/* Clean Light Blue Tech Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 dark:opacity-20" />

                {/* Light Blue Soft Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] h-[300px] bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute -left-[10%] top-[20%] w-[40%] h-[40%] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px]" />
                <div className="absolute -right-[10%] top-[20%] w-[40%] h-[40%] bg-blue-300/10 dark:bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            {/* Background Image Passed as Children */}
            {children && (
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-70">
                        {children}
                    </div>
                </div>
            )}

            <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 relative z-20 max-w-[1500px] h-full">
                {/* Left aligned if image is present, centered otherwise */}
                <div className={`flex flex-col ${children ? 'justify-end md:justify-center items-start text-left min-h-[55vh] md:min-h-[50vh] pb-0 md:pb-0 md:pt-20' : 'justify-center items-center text-center'}`}>

                    <h1
                        className={`font-light md:font-medium tracking-[-0.02em] leading-[1.1] mb-4 md:mb-6 animate-fade-up-1 text-[2.2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] ${children ? 'text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] max-w-4xl' : 'text-foreground'}`}
                    >
                        {title} <br className="hidden md:block" />
                        <span className={highlightClass || "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"}>{highlight}</span>
                    </h1>

                    <p
                        className={`text-base md:text-lg lg:text-xl leading-relaxed md:leading-8 animate-fade-up-2 ${children ? 'text-white md:text-slate-200 font-[500] md:font-normal max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:drop-shadow-md' : 'text-slate-900 md:text-slate-600 dark:text-slate-200 md:dark:text-slate-300 font-[500] md:font-normal drop-shadow-sm md:drop-shadow-none max-w-3xl mx-auto'}`}
                    >
                        {description}
                    </p>

                    { !hideContactButton && (
                        <div className="mt-8 md:mt-12 animate-fade-up-2" style={{ animationDelay: '0.3s' }}>
                            <button
                                onClick={() => document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-light text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95"
                            >
                                Get in Touch
                                <svg className="w-4 h-4 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </button>
                        </div>
                    )}

                </div>
            </div>

            {/* Bottom fade removed per user request */}
        </section>
    );
}
