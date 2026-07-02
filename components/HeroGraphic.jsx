"use client";

// This component is desktop-only decoration, dynamically imported from
// Hero.jsx with `ssr:false`. Keeping it in its own file is what actually
// lets Next.js/webpack split it into a separate chunk — mobile visitors
// (where this is never rendered) will never download or parse this code.
export default function HeroGraphic({ accent }) {
    return (
        <div className="w-full h-full flex items-center justify-center relative select-none pointer-events-none">
            {/* Center soft glow */}
            <div
                className="absolute w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full  opacity-40 transition-all duration-700"
                style={{
                    background: `radial-gradient(circle, ${accent} 0%, transparent 70%)`
                }}
            />

            {/* Orbital tech network SVG */}
            <svg viewBox="0 0 400 400" className="w-full h-auto max-w-[480px] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Concentric orbital rings */}
                <circle cx="200" cy="200" r="140" stroke={`${accent}15`} strokeWidth="1.5" strokeDasharray="5 5" className="animate-spin-slow" />
                <circle cx="200" cy="200" r="110" stroke="rgba(99, 102, 241, 0.12)" strokeWidth="1" className="animate-spin-reverse" />
                <circle cx="200" cy="200" r="80" stroke={`${accent}20`} strokeWidth="2" />

                {/* Central main core */}
                <g className="animate-pulse-slow">
                    <circle cx="200" cy="200" r="48" fill="url(#hero-core-grad)" stroke={accent} strokeWidth="1.5" />
                    <circle cx="200" cy="200" r="42" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                </g>

                {/* Orbiting Tech Nodes */}
                {/* Node 1: AI Core */}
                <g className="animate-orbit-node-1">
                    <g transform="translate(200, 60)">
                        <circle cx="0" cy="0" r="18" fill="#0f172a" stroke={accent} strokeWidth="1.5" />
                        <rect x="-8" y="-8" width="16" height="16" rx="3" fill={`${accent}30`} stroke={accent} strokeWidth="1" />
                        <rect x="-4" y="-4" width="8" height="8" fill="#ffffff" />
                    </g>
                </g>

                {/* Node 2: Cloud Storage */}
                <g className="animate-orbit-node-2">
                    <g transform="translate(200, 60)">
                        <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
                        {/* Cylinder graphic representing DB */}
                        <path d="M -6 -5 L 6 -5 L 6 -1 L -6 -1 Z M -6 -1 L 6 -1 L 6 3 L -6 3 Z M -6 3 L 6 3 L 6 7 L -6 7 Z" fill="none" stroke="#8b5cf6" strokeWidth="1.2" />
                    </g>
                </g>

                {/* Node 3: Network Connection */}
                <g className="animate-orbit-node-3">
                    <g transform="translate(200, 60)">
                        <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
                        <circle cx="0" cy="-3" r="3" fill="#3b82f6" />
                        <line x1="-5" y1="4" x2="0" y2="-3" stroke="#3b82f6" strokeWidth="1.2" />
                        <line x1="5" y1="4" x2="0" y2="-3" stroke="#3b82f6" strokeWidth="1.2" />
                        <circle cx="-5" cy="5" r="2.5" fill="#3b82f6" />
                        <circle cx="5" cy="5" r="2.5" fill="#3b82f6" />
                    </g>
                </g>

                {/* Gradients */}
                <defs>
                    <radialGradient id="hero-core-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(48)">
                        <stop stopColor="#0f172a" />
                        <stop offset="0.7" stopColor="#020617" />
                        <stop offset="1" stopColor={`${accent}30`} />
                    </radialGradient>
                </defs>
            </svg>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.95; }
                    50% { transform: scale(1.05); opacity: 1; }
                }
                @keyframes orbit-node-1 {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes orbit-node-2 {
                    from { transform: rotate(120deg); }
                    to { transform: rotate(480deg); }
                }
                @keyframes orbit-node-3 {
                    from { transform: rotate(240deg); }
                    to { transform: rotate(600deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 35s linear infinite;
                    transform-origin: 200px 200px;
                }
                .animate-spin-reverse {
                    animation: spin-reverse 25s linear infinite;
                    transform-origin: 200px 200px;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                    transform-origin: 200px 200px;
                }
                .animate-orbit-node-1 {
                    animation: orbit-node-1 20s linear infinite;
                    transform-origin: 200px 200px;
                    will-change: transform;
                }
                .animate-orbit-node-2 {
                    animation: orbit-node-2 25s linear infinite;
                    transform-origin: 200px 200px;
                    will-change: transform;
                }
                .animate-orbit-node-3 {
                    animation: orbit-node-3 30s linear infinite;
                    transform-origin: 200px 200px;
                    will-change: transform;
                }
            `}} />
        </div>
    );
}