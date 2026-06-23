"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ProjectGallery({ initialProjects = [] }) {
    const [activeFilter, setActiveFilter] = useState("All");

    // Map to keep track of the preferred case for each technology
    const techCaseMap = {};
    initialProjects.forEach(proj => {
        if (proj.technologies && Array.isArray(proj.technologies)) {
            proj.technologies.forEach(tech => {
                const lower = tech.toLowerCase().trim();
                // Prefer versions that have uppercase letters (e.g. 'PHP' over 'php', 'JavaScript' over 'javascript')
                if (!techCaseMap[lower] || (tech !== tech.toLowerCase() && techCaseMap[lower] === techCaseMap[lower].toLowerCase())) {
                    techCaseMap[lower] = tech.trim();
                }
            });
        }
    });

    // Extract unique technologies and count their frequencies using normalized names
    const techFrequencies = initialProjects.reduce((acc, proj) => {
        if (proj.technologies && Array.isArray(proj.technologies)) {
            proj.technologies.forEach(tech => {
                const normalizedTech = techCaseMap[tech.toLowerCase().trim()];
                acc[normalizedTech] = (acc[normalizedTech] || 0) + 1;
            });
        }
        return acc;
    }, {});

    // Sort technologies by frequency and take the top 4
    const topTechnologies = Object.entries(techFrequencies)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(entry => entry[0]);

    const categories = ["All", ...topTechnologies];

    const filteredProjects = initialProjects.filter(p =>
        activeFilter === "All" || (p.technologies && p.technologies.some(t => techCaseMap[t.toLowerCase().trim()] === activeFilter))
    );

    return (
        <section className="py-14 md:py-20 lg:py-28 bg-slate-50 dark:bg-[#020617] relative transition-colors duration-300">
            <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-[1200px] xl:max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 md:gap-6">
                    {/* Top Heading: Adapts beautifully to light/dark mode and brand theme */}
                    <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[2.6rem] lg:text-[3rem] font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Works</span>
                    </h2>

                    {/* Impressive Category Filter with Framer Motion */}
                    {categories.length > 1 && (
                        <div className="flex items-center justify-start sm:justify-center gap-2 p-1.5 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-full backdrop-blur-xl w-full md:w-auto shadow-sm dark:shadow-none overflow-x-auto scrollbar-none flex-nowrap">
                            {categories.map(cat => {
                                const isActive = activeFilter === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveFilter(cat)}
                                        className="relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 overflow-hidden cursor-pointer flex-shrink-0"
                                    >
                                        {/* Animated Active Background Indicator */}
                                        {isActive ? (
                                            <motion.div
                                                layoutId="portfolioFilterBg"
                                                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.4)] rounded-full"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 transition-colors rounded-full" />
                                        )}

                                        {/* Text */}
                                        <span
                                            className={`relative z-10 transition-colors duration-300 ${isActive
                                                    ? "text-white font-bold"
                                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                                }`}
                                        >
                                            {cat}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Projects Grid */}
                {initialProjects.length === 0 ? (
                    <div className="w-full flex flex-col items-center justify-center py-20 text-center">
                        <div className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 max-w-md shadow-sm dark:shadow-none backdrop-blur-md">
                            <span className="text-5xl mb-4 block">🚀</span>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Projects in Progress</h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                We are currently updating our showcase. Check back soon for our latest engineering masterpieces.
                            </p>
                        </div>
                    </div>
                ) : (
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                                    key={project._id || `proj-${index}`}
                                    className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-[1.5rem] overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    {/* Absolute Link Overlay: Makes the entire card clickable without breaking React component types */}
                                    {project.projectUrl && (
                                        <a
                                            href={project.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute inset-0 z-40"
                                            aria-label={`View ${project.title}`}
                                        />
                                    )}

                                    {/* Image Container */}
                                    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-800/50">
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.title || "Project Image"}
                                                width={1200}
                                                height={800}
                                                priority={index <= 2}
                                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-in-out border-b border-slate-100 dark:border-slate-800"
                                            />
                                        ) : (
                                            <div className="w-full h-[240px] flex items-center justify-center">
                                                <span className="text-slate-400 font-medium tracking-widest uppercase text-sm">Preview Unavailable</span>
                                            </div>
                                        )}
                                        
                                        {/* Featured Badge */}
                                        <div className="absolute top-4 right-4 bg-[#302b63] dark:bg-indigo-600 text-white text-[0.7rem] font-semibold px-4 py-1.5 rounded-full shadow-lg z-20">
                                            Featured
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="flex flex-col flex-grow p-6 sm:p-8">
                                        {/* Title */}
                                        <h3 className="text-xl sm:text-2xl font-bold text-[#2d2859] dark:text-indigo-100 mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                                            {project.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <div className="flex-grow">
                                            {project.description && (
                                                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-6">
                                                    {project.description}
                                                </p>
                                            )}
                                        </div>
                                        
                                        {/* Technologies Badges */}
                                        {project.technologies && project.technologies.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.technologies.map((tech, i) => {
                                                    const normalizedTech = techCaseMap[tech.toLowerCase().trim()] || tech;
                                                    return (
                                                        <span 
                                                            key={i} 
                                                            className="bg-blue-800 hover:bg-blue-900 transition-colors duration-300 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide shadow-sm"
                                                        >
                                                            {normalizedTech}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        )}

                                        {/* View Project Button */}
                                        <div className="mt-auto">
                                            <span className="inline-block bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500 transition-colors duration-300 text-white font-medium text-sm px-6 py-2.5 rounded-lg shadow-md">
                                                View Full Project
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
