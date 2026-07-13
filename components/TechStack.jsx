"use client";

import { useState } from "react";

import {
    SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiAngular,
    SiLaravel, SiBootstrap, SiTypescript, SiTailwindcss,
    SiMysql, SiPostgresql, SiDocker, SiGit, SiFirebase
} from "react-icons/si";
import { FaJava, FaAws, FaLaravel } from "react-icons/fa";

// ── Scalable Vector Graphics for Core Technology Branding ──
export const TECH_ICONS = {
    react: <SiReact title="React" className="w-full h-full text-[#61DAFB]" />,
    nextjs: <SiNextdotjs title="Next.js" className="w-full h-full text-black dark:text-white" />,
    nodejs: <SiNodedotjs title="Node.js" className="w-full h-full text-[#339939]" />,
    java: <FaJava title="Java" className="w-full h-full text-[#007396]" />,
    laravel: <FaLaravel title="Laravel" className="w-full h-full text-[#FF2D20]" />,
    mongodb: <SiMongodb title="MongoDB" className="w-full h-full text-[#47A248]" />,
    bootstrap: <SiBootstrap title="Bootstrap" className="w-full h-full text-[#7952B3]" />,
    angular: <SiAngular title="Angular" className="w-full h-full text-[#DD0031]" />,
    typescript: <SiTypescript title="TypeScript" className="w-full h-full text-[#3178C6]" />,
    tailwindcss: <SiTailwindcss title="Tailwind CSS" className="w-full h-full text-[#06B6D4]" />,
    mysql: <SiMysql title="MySQL" className="w-full h-full text-[#4479A1]" />,
    postgresql: <SiPostgresql title="PostgreSQL" className="w-full h-full text-[#4169E1]" />,
    aws: <FaAws title="AWS" className="w-full h-full text-[#232F3E] dark:text-white" />,
    docker: <SiDocker title="Docker" className="w-full h-full text-[#2496ED]" />,
    git: <SiGit title="Git" className="w-full h-full text-[#F05032]" />,
    firebase: <SiFirebase title="Firebase" className="w-full h-full text-[#FFCA28]" />
};

// ── Clean & Structured Tech Ecosystem Graph Data (2D Coordinates) ──
const NODES_DATA = {
    react: { name: "React", x: 50, y: 35, color: "#06b6d4", connections: ["nextjs", "nodejs", "bootstrap", "angular"] },
    nextjs: { name: "Next.js", x: 14, y: 22, color: "#b711e2ff", connections: ["react", "nodejs", "mongodb"] },
    nodejs: { name: "Node.js", x: 18, y: 42, color: "#22c55e", connections: ["nextjs", "react", "mongodb", "laravel"] },
    mongodb: { name: "MongoDB", x: 26, y: 60, color: "#13aa52", connections: ["nodejs", "nextjs", "laravel", "java"] },
    angular: { name: "Angular", x: 80, y: 30, color: "#dd0031", connections: ["react", "bootstrap"] },
    java: { name: "Java", x: 80, y: 45, color: "#f89820", connections: ["mongodb", "laravel"] },
    laravel: { name: "Laravel", x: 70, y: 60, color: "#ff2d20", connections: ["mongodb", "nodejs", "java"] },
    bootstrap: { name: "Bootstrap", x: 72, y: 10, color: "#7952b3", connections: ["react", "angular"] }
};

// Compile unique lines once to optimize rendering
const UNIQUE_CONNECTIONS = (() => {
    const list = [];
    const keys = Object.keys(NODES_DATA);
    keys.forEach(fromKey => {
        NODES_DATA[fromKey].connections.forEach(toKey => {
            const key = [fromKey, toKey].sort().join("-");
            if (!list.find(c => c.key === key)) {
                list.push({
                    key,
                    from: fromKey,
                    to: toKey,
                    fromPos: [NODES_DATA[fromKey].x, NODES_DATA[fromKey].y],
                    toPos: [NODES_DATA[toKey].x, NODES_DATA[toKey].y]
                });
            }
        });
    });
    return list;
})();

// ── Interactive HTML/SVG Ecosystem Map Component ──
function EcosystemMap({ activeTech, setActiveTech }) {
    return (
        <div className="absolute inset-0 w-full h-full z-0 p-6">
            {/* SVG Connection Network */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {UNIQUE_CONNECTIONS.map((line) => {
                    const isActive = activeTech && (line.from === activeTech || line.to === activeTech);
                    const isDimmed = activeTech && !isActive;
                    return (
                        <g key={line.key}>
                            {/* Static/Active Connection Line */}
                            <line
                                x1={line.fromPos[0]}
                                y1={line.fromPos[1]}
                                x2={line.toPos[0]}
                                y2={line.toPos[1]}
                                stroke={isActive ? NODES_DATA[activeTech].color : "rgba(99,102,241,0.08)"}
                                strokeWidth={isActive ? 0.8 : 0.25}
                                opacity={isActive ? 0.85 : isDimmed ? 0.05 : 0.3}
                                className="transition-all duration-300"
                            />
                            {/* Traveling data packets indicator */}
                            {isActive && (
                                <line
                                    x1={line.fromPos[0]}
                                    y1={line.fromPos[1]}
                                    x2={line.toPos[0]}
                                    y2={line.toPos[1]}
                                    stroke={NODES_DATA[activeTech].color}
                                    strokeWidth={0.8}
                                    strokeDasharray="4 12"
                                    className="animate-flow-dash"
                                />
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* Tech Nodes absolute positions mapping */}
            {Object.entries(NODES_DATA).map(([key, node]) => {
                const isHighlighted = activeTech === key;
                const isConnected = activeTech && (node.connections.includes(activeTech) || NODES_DATA[activeTech].connections.includes(key));
                const isDimmed = activeTech && !isHighlighted && !isConnected;

                return (
                    <div
                        key={key}
                        style={{
                            position: "absolute",
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                            transform: "translate(-50%, -50%)",
                        }}
                        className="z-10"
                    >
                        <div
                            onMouseEnter={() => setActiveTech(key)}
                            onMouseLeave={() => setActiveTech(null)}
                            className={`flex items-center gap-2.5 px-4 py-2 md:px-5 md:py-2.5 rounded-full border transition-all duration-300 cursor-pointer shadow-md backdrop-blur-md
                                ${isHighlighted
                                    ? "bg-white dark:bg-slate-900 border-cyan-500 scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] z-20"
                                    : isConnected
                                        ? "bg-white/95 dark:bg-slate-900/90 border-indigo-500 scale-100 z-10"
                                        : isDimmed
                                            ? "bg-slate-100/50 dark:bg-slate-950/20 border-slate-200/50 dark:border-white/5 opacity-30 scale-90 z-0"
                                            : "bg-white/90 dark:bg-slate-950/60 border-slate-200 dark:border-white/10 scale-95 hover:border-cyan-500/50 z-10"
                                }`}
                        >
                            <div className={`w-6 h-6 md:w-7 md:h-7 flex items-center justify-center transition-transform duration-300 ${isHighlighted ? "rotate-12 scale-105" : ""}`}>
                                {TECH_ICONS[key]}
                            </div>
                            <span className={`text-[11px] md:text-sm font-bold tracking-wide font-sans transition-colors duration-300
                                ${isHighlighted ? "text-cyan-600 dark:text-cyan-400" : isConnected ? "text-indigo-600 dark:text-indigo-300" : "text-slate-600 dark:text-gray-300"}`}>
                                {node.name}
                            </span>
                        </div>
                    </div>
                );
            })}

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes flow-dash {
                    to {
                        stroke-dashoffset: -16;
                    }
                }
                .animate-flow-dash {
                    animation: flow-dash 1.2s linear infinite;
                    will-change: stroke-dashoffset;
                }
            `}} />
        </div>
    );
}

// ── Refined Interactive Tech Cards (CSS Optimized) ──
function TechCard({ tech, activeTech, setActiveTech }) {
    const isHighlighted = activeTech === tech.id;

    return (
        <div
            onMouseEnter={() => setActiveTech(tech.id)}
            onMouseLeave={() => setActiveTech(null)}
            className={`group relative bg-slate-50/50 dark:bg-white/[0.01] border rounded-2xl p-5 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] overflow-hidden
                ${isHighlighted ? "bg-slate-100 dark:bg-white/[0.035] border-cyan-500/40 dark:border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)] dark:shadow-[0_0_20px_rgba(6,182,212,0.08)]" : "border-slate-200 dark:border-white/5"}`}
        >
            {/* Soft background glow on hover (Static CSS) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 bg-[radial-gradient(140px_circle_at_center,rgba(6,182,212,0.05),transparent_60%)]" />

            {/* Sweep overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

            <div className="relative z-10 transition-transform duration-300 group-hover:translate-z-0">
                <div className="mb-4 w-12 h-12 mx-auto flex items-center justify-center text-cyan-500 dark:text-cyan-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {TECH_ICONS[tech.id]}
                </div>
                <h4 className="text-slate-800 dark:text-gray-200 text-sm font-bold tracking-wide group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                    {tech.name}
                </h4>
                <p className="text-slate-700 dark:text-gray-300 text-xs uppercase tracking-wider mt-1">
                    {tech.cat}
                </p>
            </div>
        </div>
    );
}

// ── Bento Cell Grid Wrapper ──
function BentoCell({ colSpan, rowSpan, className, children }) {
    return (
        <div className={`bento-cell relative ${colSpan} ${rowSpan} bg-slate-50/50 dark:bg-[#0a1225]/50 border border-slate-200 dark:border-white/5 rounded-3xl p-4 md:p-5 lg:p-5 overflow-hidden flex flex-col justify-between shadow-premium dark:shadow-none transition-colors duration-300 ${className}`}>
            {children}
        </div>
    );
}

export const MARQUEE_TECH_LIST = [
    { id: "react", name: "React" },
    { id: "nextjs", name: "Next.js" },
    { id: "nodejs", name: "Node.js" },
    { id: "mongodb", name: "MongoDB" },
    { id: "java", name: "Java" },
    { id: "laravel", name: "Laravel" },
    { id: "angular", name: "Angular" },
    { id: "bootstrap", name: "Bootstrap" },
    { id: "typescript", name: "TypeScript" },
    { id: "tailwindcss", name: "Tailwind CSS" },
    { id: "mysql", name: "MySQL" },
    { id: "postgresql", name: "PostgreSQL" },
    { id: "aws", name: "AWS" },
    { id: "docker", name: "Docker" },
    { id: "git", name: "Git" },
    { id: "firebase", name: "Firebase" }
];

export default function TechStack() {
    const [activeTech, setActiveTech] = useState(null);

    const techList = [
        { id: "react", name: "React", cat: "Frontend UI" },
        { id: "nextjs", name: "Next.js", cat: "Fullstack Web" },
        { id: "nodejs", name: "Node.js", cat: "Backend Server" },
        { id: "mongodb", name: "MongoDB", cat: "Database Storage" },
        { id: "angular", name: "Angular", cat: "Frontend UI" },
        { id: "laravel", name: "Laravel", cat: "Backend Server" },
        { id: "java", name: "Java", cat: "Enterprise Application" },
        { id: "bootstrap", name: "Bootstrap", cat: "CSS Grid UI" }
    ];



    return (
        <section className="relative py-[clamp(0.5rem,2vw,1rem)] bg-background transition-colors duration-300 overflow-hidden">
            {/* Soft Glowing Accent Spotlights */}
            <div className="absolute top-1/4 right-0 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-cyan-400/10 dark:bg-cyan-950/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-indigo-400/10 dark:bg-indigo-950/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-4">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mt-2 tracking-tight leading-[1.15]">
                        What Does Recenturesoft Infotech
                        <span className="block bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mt-1.5">
                            Have To Offer?
                        </span>
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed font-light">
                        We leverage a state-of-the-art software stack to transform business visions into highly scalable, robust realities.
                    </p>
                </div>





                {/* Bento Grid Layout */}
                <div className="grid grid-cols-12 gap-6 auto-rows-[auto]">


                    <BentoCell colSpan="col-span-12 lg:col-span-7" rowSpan="row-span-1" className="flex flex-col justify-between">
                        <div className="mb-6">
                            <h3 className="text-slate-900 dark:text-gray-100 text-xl font-bold mt-2 tracking-tight">
                                Technologies Stack
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 w-full">
                            {techList.map((tech) => (
                                <TechCard
                                    key={tech.id}
                                    tech={tech}
                                    activeTech={activeTech}
                                    setActiveTech={setActiveTech}
                                />
                            ))}
                        </div>
                    </BentoCell>

                    {/* Bento Card 2: Interactive Node Ecosystem (Lightweight & Compositor Accelerated) */}
                    <BentoCell colSpan="col-span-12 lg:col-span-5" rowSpan="row-span-2" className="hidden lg:flex flex-col justify-between relative min-h-[250px] overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-90 hidden lg:block">
                            <EcosystemMap activeTech={activeTech} setActiveTech={setActiveTech} />
                        </div>

                        <div className="relative z-10 pointer-events-none md:mb-0 mb-4">
                            <span className="text-blue-400 font-mono text-xs uppercase tracking-widest font-semibold font-bold">Integrated Map</span>
                            <h3 className="text-gray-900 dark:text-gray-100 text-xl font-bold mt-2 tracking-tight">
                                Ecosystem Architecture
                            </h3>
                        </div>

                        {/* Mobile Fallback Layout (Vertical Stack) */}
                        <div className="md:hidden flex flex-col gap-2 relative z-10 mb-4 h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                            {Object.entries(NODES_DATA).map(([key, node]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTech(key)}
                                    className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${activeTech === key ? 'border-cyan-500/50 bg-cyan-100/50 dark:bg-cyan-900/20' : 'border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02]'}`}
                                >
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-[#020617] border border-slate-200 dark:border-white/10 shrink-0 shadow-sm">
                                        <span className="text-xs font-bold" style={{ color: node.color }}>{node.name.substring(0, 2)}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-slate-800 dark:text-gray-200">{node.name}</span>
                                        <span className="text-[10px] text-slate-500 dark:text-gray-500 truncate">{node.connections.map(c => NODES_DATA[c]?.name).join(", ")}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Telemetry log replacing generic instructions text */}
                        <div className="hidden lg:block relative z-10 text-xs leading-relaxed w-full max-w-none bg-slate-100/90 dark:bg-slate-950/85 p-4 rounded-2xl border border-slate-200 dark:border-white/5 shadow-premium dark:shadow-2xl font-mono mt-auto backdrop-blur-md">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                                <span className="text-slate-700 dark:text-gray-300 font-bold uppercase tracking-wider text-[10px]">System Telemetry</span>
                            </div>
                            {activeTech ? (
                                <div className="flex flex-col gap-1.5 text-slate-600 dark:text-gray-400">
                                    <div><span className="text-cyan-600 dark:text-cyan-400 font-bold">NODE:</span> {NODES_DATA[activeTech].name}</div>
                                    <div><span className="text-indigo-600 dark:text-indigo-400 font-bold">TYPE:</span> {techList.find(t => t.id === activeTech)?.cat}</div>
                                    <div><span className="text-emerald-600 dark:text-emerald-400 font-bold">LINKS:</span> {NODES_DATA[activeTech].connections.map(c => NODES_DATA[c].name).join(", ")}</div>
                                    <div className="text-[10px] text-slate-500 dark:text-gray-600 mt-1">&gt; TRANSMISSION ACTIVE</div>
                                </div>
                            ) : (
                                <div className="text-slate-500 dark:text-gray-500 text-[10px] leading-relaxed">
                                    &gt; STANDBY: NETWORK ACTIVE<br />
                                    &gt; SELECT NODE TO INSPECT INTEGRATION HOPS
                                </div>
                            )}
                        </div>
                    </BentoCell>

                    {/* Bento Card 1: Core Value Vision Statement */}
                    <BentoCell colSpan="col-span-12 lg:col-span-7" rowSpan="row-span-1" className="flex flex-col justify-between">
                        <div>
                            <span className="text-cyan-700 dark:text-cyan-300 font-mono text-sm uppercase tracking-widest font-semibold">Vision & Strategy</span>
                            <h3 className="text-slate-900 dark:text-gray-100 text-3xl md:text-4xl font-extrabold mt-3 mb-4 tracking-tight">
                                High-Performance Engineering
                            </h3>
                            <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-base font-normal max-w-2xl">
                                We employ modular, cross-compatible frameworks and reliable infrastructure strategies to build clean digital products. From highly interactive Single Page Apps to massive database scaling pipelines, our technology parameters align with next-gen speed.
                            </p>
                        </div>
                        <div className="flex gap-6 mt-4 border-t border-slate-200 dark:border-white/5 pt-4 flex-wrap">
                            <div className="flex items-center">
                                <span className="text-cyan-700 dark:text-cyan-300 text-xl font-bold font-mono">01/</span>
                                <span className="text-slate-700 dark:text-gray-300 text-xs font-semibold ml-2">Clean Codebase</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-blue-500 dark:text-blue-400 text-xl font-bold font-mono">02/</span>
                                <span className="text-slate-700 dark:text-gray-300 text-xs font-semibold ml-2">Elastic Auto-scaling</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-purple-500 dark:text-purple-400 text-xl font-bold font-mono">03/</span>
                                <span className="text-slate-700 dark:text-gray-300 text-xs font-semibold ml-2">Modular APIs</span>
                            </div>
                        </div>
                    </BentoCell>



                    {/* Bento Card 3: Interactive Technology Stack Grid */}


                    {/* Bento Card 4: Categorized Technology Stack Groups */}
                    <BentoCell colSpan="col-span-12" rowSpan="row-span-1" className="py-8 flex flex-col gap-6">
                        <div className="flex flex-col mb-2">
                            <span className="text-cyan-700 dark:text-cyan-300 font-mono text-xs uppercase tracking-wide">System Segments</span>
                            <h3 className="text-slate-900 dark:text-gray-100 text-xl font-bold mt-1 tracking-tight">
                                Enterprise Stack Segmentation
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
                            <div className="bg-slate-50 dark:bg-white/[0.005] border border-slate-200 dark:border-white/5 rounded-2xl p-6 hover:bg-white dark:hover:bg-white/[0.015] hover:border-cyan-300 dark:hover:border-cyan-500/20 transition-all duration-300 shadow-sm dark:shadow-none">
                                <span className="text-xs text-cyan-700 dark:text-cyan-300 font-mono uppercase tracking-widest font-semibold">01 / User Interface</span>
                                <h4 className="text-slate-800 dark:text-gray-200 text-base md:text-lg font-bold mt-2 mb-2">Frontend Core</h4>
                                <p className="text-slate-700 dark:text-gray-300 text-sm font-normal leading-relaxed">
                                    React and Angular power our responsive web layouts, supported by Bootstrap for solid responsive grid layouts.
                                </p>
                            </div>
                            <div className="bg-slate-50 dark:bg-white/[0.005] border border-slate-200 dark:border-white/5 rounded-2xl p-6 hover:bg-white dark:hover:bg-white/[0.015] hover:border-blue-300 dark:hover:border-blue-500/20 transition-all duration-300 shadow-sm dark:shadow-none">
                                <span className="text-xs text-blue-600 dark:text-blue-400 font-mono uppercase tracking-widest font-semibold">02 / Execution Layer</span>
                                <h4 className="text-slate-800 dark:text-gray-200 text-base md:text-lg font-bold mt-2 mb-2">Backend Engine</h4>
                                <p className="text-slate-700 dark:text-gray-300 text-sm font-normal leading-relaxed">
                                    Next.js fullstack capabilities, Node.js microservices, Laravel logic, and robust Java business platforms form the runtime.
                                </p>
                            </div>
                            <div className="bg-slate-50 dark:bg-white/[0.005] border border-slate-200 dark:border-white/5 rounded-2xl p-6 hover:bg-white dark:hover:bg-white/[0.015] hover:border-purple-300 dark:hover:border-purple-500/20 transition-all duration-300 shadow-sm dark:shadow-none">
                                <span className="text-xs text-purple-600 dark:text-purple-400 font-mono uppercase tracking-widest font-semibold">03 / Persistence</span>
                                <h4 className="text-slate-800 dark:text-gray-200 text-base md:text-lg font-bold mt-2 mb-2">Database Layer</h4>
                                <p className="text-slate-700 dark:text-gray-300 text-sm font-normal leading-relaxed">
                                    MongoDB handles flexible JSON document storage, optimized query scaling, and multi-node redundancy.
                                </p>
                            </div>
                            <div className="bg-slate-50 dark:bg-white/[0.005] border border-slate-200 dark:border-white/5 rounded-2xl p-6 hover:bg-white dark:hover:bg-white/[0.015] hover:border-pink-300 dark:hover:border-pink-500/20 transition-all duration-300 shadow-sm dark:shadow-none">
                                <span className="text-xs text-pink-700 dark:text-pink-300 font-mono uppercase tracking-widest font-semibold">04 / Operations</span>
                                <h4 className="text-slate-800 dark:text-gray-200 text-base md:text-lg font-bold mt-2 mb-2">Cloud Infrastructure</h4>
                                <p className="text-slate-700 dark:text-gray-300 text-sm font-normal leading-relaxed">
                                    Automated CI/CD workflows, containerization, elastic clusters, and CDN edge distribution ensure global availability.
                                </p>
                            </div>
                        </div>
                    </BentoCell>

                </div>

            </div>

            {/* Embedded styles for GPU-accelerated seamless loops and side masks */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .mask-grad {
                    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }
                .hover-pause:hover .animate-infinite-marquee {
                    animation-play-state: paused;
                }
                @keyframes infinite-marquee {
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-50%, 0, 0); }
                }
                .animate-infinite-marquee {
                    animation: infinite-marquee 35s linear infinite;
                    will-change: transform;
                }
            `}} />
        </section>
    );
}
