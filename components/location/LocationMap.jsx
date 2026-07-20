"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';

// Approximate percentage coordinates (X, Y) for pins on the map image
// This allows the pins to scale responsively with the official SVG/PNG map.
const cityCoordinates = {
  "Noida":      { x: 35, y: 30 },
  "Delhi":      { x: 34.5, y: 30 },
  "Gurgaon":    { x: 34, y: 31 },
  "Bangalore":  { x: 35, y: 75 },
  "Mumbai":     { x: 20, y: 60 },
  "Pune":       { x: 22, y: 62 },
  "Hyderabad":  { x: 40, y: 60 },
  "Chennai":    { x: 45, y: 75 },
  "Kolkata":    { x: 70, y: 50 },
  "Ahmedabad":  { x: 15, y: 45 },
  "Jaipur":     { x: 25, y: 35 },
  "Lucknow":    { x: 45, y: 32 },
};

// State name match
const cityToStateMap = {
  "Noida":      "Uttar Pradesh",
  "Gurgaon":    "Haryana",
  "Bangalore":  "Karnataka",
  "Mumbai":     "Maharashtra",
  "Pune":       "Maharashtra",
  "Hyderabad":  "Telangana",
  "Chennai":    "Tamil Nadu",
  "Kolkata":    "West Bengal",
  "Ahmedabad":  "Gujarat",
  "Delhi":      "Delhi",
  "Jaipur":     "Rajasthan",
  "Lucknow":    "Uttar Pradesh",
};

export default function LocationMap({ highlightState = "" }) {
  const [isDark, setIsDark] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Flag to check if official map exists, defaults to true to try loading it
  const [hasMapImg, setHasMapImg] = useState(true);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const cityName = highlightState;
  const pinCoords = cityCoordinates[cityName] || null;
  const stateToShade = cityToStateMap[cityName] || highlightState;

  return (
    <div className="w-full relative py-6 lg:py-10 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-[#020617] dark:to-[#030a18] border-t border-slate-200/50 dark:border-white/5 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 dark:bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 w-full z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {cityName ? `Serving Clients in ${cityName}` : "Our Presence Across India"}
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            {cityName
              ? `We deliver world-class technology solutions to businesses in ${cityName} and beyond.`
              : "We deliver scalable solutions to enterprise clients across the nation."}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Map Container - Uses Official Survey of India Image Overlay System */}
          <div className="relative w-full max-w-xl mx-auto lg:mx-0 bg-white dark:bg-[#060d1f] border border-slate-100 dark:border-white/8 rounded-3xl shadow-2xl shadow-slate-200/60 dark:shadow-black/40 overflow-hidden flex items-center justify-center p-8 aspect-square">
            
            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />

            {/* SOI Map Instruction Placeholder (shows if image fails to load or hasn't been placed) */}
            {!mapLoaded && hasMapImg && (
               <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center animate-pulse z-0">
                  <div className="w-16 h-16 rounded-full border-4 border-slate-200 border-t-cyan-500 animate-spin mb-4"></div>
                  <p className="text-slate-500 text-sm">Loading Official Map...</p>
               </div>
            )}
            
            {!hasMapImg && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-slate-50 dark:bg-slate-800/50 z-0">
                <svg className="w-12 h-12 text-slate-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-2">Map Placeholder</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
                  To comply with Government of India regulations, please download the official Political Map from the <a href="https://surveyofindia.gov.in" target="_blank" rel="noreferrer" className="text-cyan-500 underline">Survey of India</a> portal and place it in the public folder as <code>/india-official-map.png</code>.
                </p>
              </div>
            )}

            {/* The Official Map Image */}
            <img 
              src="/india-official-map.svg" 
              alt="Official Political Map of India" 
              className={`w-full h-full object-contain relative z-10 transition-opacity duration-500 ${mapLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setMapLoaded(true)}
              onError={(e) => {
                // If SVG fails, try PNG
                if (e.target.src.includes('.svg')) {
                  e.target.src = '/india-official-map.png';
                } else {
                  setHasMapImg(false);
                }
              }}
            />

            {/* City Pin Marker overlay */}
            {pinCoords && hasMapImg && (
              <div 
                className="absolute z-20"
                style={{ 
                  left: `${pinCoords.x}%`, 
                  top: `${pinCoords.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <svg width="40" height="40" viewBox="-20 -20 40 40" style={{ overflow: 'visible' }}>
                  {/* Outer pulse ring 1 */}
                  <circle r={18} fill="#06b6d4" fillOpacity={0.12}>
                    <animate attributeName="r" from="12" to="26" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="0.20" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  {/* Outer pulse ring 2 */}
                  <circle r={12} fill="#06b6d4" fillOpacity={0.18}>
                    <animate attributeName="r" from="8" to="18" dur="2s" begin="0.6s" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="0.25" to="0" dur="2s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                  {/* Inner solid glow */}
                  <circle r={7} fill="#0891b2" fillOpacity={0.25} />
                  {/* Core dot */}
                  <circle r={5} fill="#06b6d4" stroke="#ffffff" strokeWidth={1.5} />
                  {/* City label */}
                  <text
                    textAnchor="middle"
                    y={-14}
                    style={{
                      fontSize: "10px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "700",
                      fill: isDark ? "#ffffff" : "#0e7490",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      pointerEvents: "none",
                      filter: isDark ? "drop-shadow(0 1px 2px rgba(0,0,0,0.9))" : "drop-shadow(0 1px 2px rgba(255,255,255,0.9))",
                    }}
                  >
                    {cityName}
                  </text>
                </svg>
              </div>
            )}
          </div>

          {/* Info Card (only shown when a city is selected) */}
          {cityName && (
            <div className="flex flex-col gap-4 w-full max-w-xs">
              {/* Main location card */}
              <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl shadow-cyan-500/25">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-cyan-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="text-cyan-100 text-sm font-semibold uppercase tracking-wider">Primary Location</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{cityName}</h3>
                  <p className="text-cyan-100 text-sm">{stateToShade}, India</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Years Active", value: "10+" },
                  { label: "Happy Clients", value: "500+" },
                  { label: "Projects Done", value: "1200+" },
                  { label: "Expert Team", value: "150+" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white dark:bg-[#0d1629] border border-slate-100 dark:border-white/8 rounded-xl p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold text-sm hover:bg-slate-700 dark:hover:bg-slate-100 transition-all duration-200 shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Free Consultation
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
