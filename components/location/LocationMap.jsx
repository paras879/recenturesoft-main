"use client";

import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Using India GeoJSON from public folder
const geoUrl = "/india-states.json";

// Mapping Indian States to a standard code or just using the full name
// In the dropdown, we will use the full name as the value for simplicity
const indianStates = [
  "Andaman and Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir",
  "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh",
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
  "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export default function LocationMap({ highlightState = "" }) {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Map popular cities to their states for highlighting
  const cityToStateMap = {
    "Noida": "Uttar Pradesh",
    "Gurgaon": "Haryana",
    "Bangalore": "Karnataka",
    "Mumbai": "Maharashtra",
    "Pune": "Maharashtra",
    "Hyderabad": "Telangana",
    "Chennai": "Tamil Nadu",
    "Kolkata": "West Bengal",
    "Ahmedabad": "Gujarat"
  };

  // Determine the target state to highlight based on city or direct state match
  const targetState = cityToStateMap[highlightState] || highlightState;

  return (
    <div className="w-full relative py-12 lg:py-20 flex flex-col items-center justify-center bg-slate-50 dark:bg-[#020617] border-t border-slate-200/50 dark:border-white/5 overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/5 dark:bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 w-full z-10">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Our Presence in India
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    We deliver scalable solutions to enterprise clients nationwide.
                </p>
            </div>

            <div className="relative w-full max-w-4xl mx-auto aspect-[4/4.5] md:aspect-[4/3] bg-white/50 dark:bg-[#080d19]/50 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl shadow-xl overflow-hidden p-4 md:p-8">
                <ComposableMap 
                    projection="geoMercator" 
                    projectionConfig={{
                        center: [82.5, 23.5], // Center of India
                        scale: 1200 // Adjust scale for India
                    }}
                    className="w-full h-full"
                >
                    <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                        const stateName = geo.properties.NAME_1; // 'NAME_1' holds the state name
                        const isHighlighted = targetState && stateName === targetState;

                        return (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={(e) => {
                                    setTooltipContent(stateName);
                                    setTooltipPos({ x: e.clientX, y: e.clientY });
                                }}
                                onMouseMove={(e) => {
                                    setTooltipPos({ x: e.clientX, y: e.clientY });
                                }}
                                onMouseLeave={() => {
                                    setTooltipContent("");
                                }}
                                style={{
                                    default: {
                                        fill: isHighlighted ? "#06b6d4" : "var(--map-fill, #e2e8f0)", // Cyan-500 or slate-200
                                        stroke: isHighlighted ? "#0891b2" : "var(--map-stroke, #cbd5e1)", // Cyan-600 or slate-300
                                        strokeWidth: isHighlighted ? 1.5 : 0.75,
                                        outline: "none",
                                        transition: "all 250ms",
                                    },
                                    hover: {
                                        fill: isHighlighted ? "#0ea5e9" : "#94a3b8", // Sky-500 or slate-400
                                        stroke: isHighlighted ? "#0284c7" : "#cbd5e1",
                                        strokeWidth: 1.5,
                                        outline: "none",
                                        cursor: "pointer"
                                    },
                                    pressed: {
                                        fill: isHighlighted ? "#0284c7" : "#64748b",
                                        outline: "none",
                                    }
                                }}
                            />
                        );
                        })
                    }
                    </Geographies>
                </ComposableMap>

                {tooltipContent && (
                    <div 
                        className="fixed z-50 pointer-events-none bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-2xl flex flex-col gap-1 items-center"
                        style={{
                            left: tooltipPos.x + 15,
                            top: tooltipPos.y + 15,
                        }}
                    >
                        <span>{tooltipContent}</span>
                        {targetState === tooltipContent && (
                            <span className="text-cyan-400 text-xs">
                                Primary Location {cityToStateMap[highlightState] ? `(${highlightState})` : ""}
                            </span>
                        )}
                    </div>
                )}
                
                {/* CSS Variable Injector for dark mode support on map paths */}
                <style dangerouslySetInnerHTML={{__html:`
                    :root {
                        --map-fill: #e2e8f0;
                        --map-stroke: #cbd5e1;
                    }
                    .dark {
                        --map-fill: #1e293b;
                        --map-stroke: #334155;
                    }
                `}} />
            </div>
        </div>
    </div>
  );
}
