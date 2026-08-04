"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ClientCardsGrid({ block, headingStyle, subHeadingStyle, textStyle, renderButtons }) {
    const [showAll, setShowAll] = useState(false);
    const gridRef = React.useRef(null);
    
    if (!block.items || block.items.length === 0) return null;

    // Determine how many items to show initially
    const initialCount = 6;
    const visibleItems = showAll ? block.items : block.items.slice(0, initialCount);
    const hasMore = block.items.length > initialCount;

    const handleToggle = () => {
        if (showAll) {
            setShowAll(false);
            if (gridRef.current) {
                // Scroll back to the top of the grid smoothly, offset for navbar
                setTimeout(() => {
                    const rect = gridRef.current.getBoundingClientRect();
                    if (rect.top < 100) {
                        const y = rect.top + window.scrollY - 100;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                }, 10);
            }
        } else {
            setShowAll(true);
        }
    };

    return (
        <div ref={gridRef}>
            {block.title && (
                <div className="text-center mb-6 md:mb-8">
                    <h4 style={{ ...headingStyle.style, fontSize: (block.mainHeadingSize && block.mainHeadingSize !== 'default') ? block.mainHeadingSize : undefined }} className={`text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight ${headingStyle.className}`}>{block.title}</h4>
                    <div className="w-16 md:w-20 h-1 bg-blue-500 mx-auto mt-4 md:mt-6 rounded-full" />
                </div>
            )}
            
            {/* Responsive grid: 1 col on mobile, 2 cols on iPad (sm/md), 3 cols on desktop (lg) */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${block.imageUrl ? '' : 'lg:grid-cols-3'} gap-4 md:gap-6 lg:gap-8`}>
                {visibleItems.map((s, i) => {
                    const cardClasses = "group bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 p-5 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden h-full flex flex-col block";
                    const CardInner = (
                        <>
                            {s.backgroundImage && (
                                <div className="absolute inset-0 z-0">
                                    <Image src={s.backgroundImage} alt={s.title || "Card Background"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                                    <div className="absolute inset-0 bg-black" style={{ opacity: (s.backgroundOpacity !== undefined ? s.backgroundOpacity : 50) / 100 }} />
                                </div>
                            )}
                            <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 transition-opacity duration-300 ${s.backgroundImage ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`} />
                            <div className="relative z-10 flex flex-col flex-1">
                                {s.icon && <div className={`text-3xl md:text-4xl mb-4 md:mb-6 ${s.backgroundImage ? 'bg-white/20' : 'bg-blue-50 dark:bg-blue-500/10'} w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center border ${s.backgroundImage ? 'border-white/30 text-white' : 'border-blue-100 dark:border-blue-500/20'}`}>{s.icon}</div>}
                                <h5 style={{ ...subHeadingStyle.style, fontSize: (block.subHeadingSize && block.subHeadingSize !== 'default') ? block.subHeadingSize : undefined }} className={`font-bold text-base md:text-xl mb-2 md:mb-4 ${s.backgroundImage ? 'text-white' : subHeadingStyle.className || "text-slate-900 dark:text-white"}`}>{s.title}</h5>
                                <p style={{ ...textStyle.style, fontSize: (block.bodyTextSize && block.bodyTextSize !== 'default') ? block.bodyTextSize : undefined }} className={`leading-relaxed text-xs sm:text-sm md:text-base ${s.backgroundImage ? 'text-white/90' : textStyle.className || "text-slate-600 dark:text-slate-400"} flex-1`}>{s.desc}</p>
                            </div>
                        </>
                    );

                    return s.link ? (
                        <Link key={i} href={s.link} className={cardClasses}>
                            {CardInner}
                        </Link>
                    ) : (
                        <div key={i} className={cardClasses}>
                            {CardInner}
                        </div>
                    );
                })}
            </div>
            
            {hasMore && (
                <div className="mt-8 md:mt-10 flex justify-center relative z-20">
                    <button 
                        onClick={handleToggle} 
                        className="px-8 py-3 rounded-full border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-bold hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-sm active:scale-95"
                    >
                        {showAll ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            )}

            {renderButtons}
        </div>
    );
}
