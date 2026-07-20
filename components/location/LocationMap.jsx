"use client";

import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

// India GeoJSON
const geoUrl = "/india-states.json";

// Exact lat/lng coordinates for cities (longitude, latitude)
const cityCoordinates = {
  "Noida":      [77.3910, 28.5355],
  "Delhi":      [77.2090, 28.6139],
  "Gurgaon":    [77.0266, 28.4595],
  "Bangalore":  [77.5946, 12.9716],
  "Mumbai":     [72.8777, 19.0760],
  "Pune":       [73.8567, 18.5204],
  "Hyderabad":  [78.4867, 17.3850],
  "Chennai":    [80.2707, 13.0827],
  "Kolkata":    [88.3639, 22.5726],
  "Ahmedabad":  [72.5714, 23.0225],
  "Jaipur":     [75.7873, 26.9124],
  "Lucknow":    [80.9462, 26.8467],
};

// State name match for light shading
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
  const [hoveredState, setHoveredState] = useState("");
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const mapFillDefault    = isDark ? "#1e293b" : "#f1f5f9";
  const mapStrokeDefault  = isDark ? "#334155" : "#cbd5e1";
  const mapFillHighlight  = isDark ? "#1e3a5f" : "#dbeafe";
  const mapStrokeHighlight= isDark ? "#3b82f6" : "#93c5fd";
  const mapFillHover      = isDark ? "#0f172a" : "#e2e8f0";

  // The city to display the pin on
  const cityName = highlightState;
  const pinCoords = cityCoordinates[cityName] || null;
  const stateToShade = cityToStateMap[cityName] || highlightState;

  return (
    <div className="w-full relative py-12 lg:py-20 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-[#020617] dark:to-[#030a18] border-t border-slate-200/50 dark:border-white/5 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 dark:bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 w-full z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-100 dark:border-cyan-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-cyan-700 dark:text-cyan-400 text-sm font-semibold tracking-wide uppercase">Our Locations</span>
          </div>
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
          {/* Map Container */}
          <div className="relative w-full max-w-2xl mx-auto lg:mx-0 bg-white dark:bg-[#060d1f] border border-slate-100 dark:border-white/8 rounded-3xl shadow-2xl shadow-slate-200/60 dark:shadow-black/40 overflow-hidden">
            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                center: [82.5, 22.0],
                scale: 1050,
              }}
              style={{ width: "100%", height: "auto", aspectRatio: "4/4.2" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateName = geo.properties.NAME_1;
                    const isHighlightedState = stateToShade && stateName === stateToShade;
                    const isHovered = hoveredState === stateName;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={(e) => {
                          setHoveredState(stateName);
                          setTooltipContent(stateName);
                          setTooltipPos({ x: e.clientX, y: e.clientY });
                        }}
                        onMouseMove={(e) => {
                          setTooltipPos({ x: e.clientX, y: e.clientY });
                        }}
                        onMouseLeave={() => {
                          setHoveredState("");
                          setTooltipContent("");
                        }}
                        style={{
                          default: {
                            fill: isHighlightedState ? mapFillHighlight : mapFillDefault,
                            stroke: isHighlightedState ? mapStrokeHighlight : mapStrokeDefault,
                            strokeWidth: isHighlightedState ? 1.0 : 0.5,
                            outline: "none",
                            transition: "all 200ms ease",
                          },
                          hover: {
                            fill: isHighlightedState ? mapFillHighlight : mapFillHover,
                            stroke: isHighlightedState ? mapStrokeHighlight : mapStrokeDefault,
                            strokeWidth: 1.0,
                            outline: "none",
                            cursor: "default",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* City Pin Marker */}
              {pinCoords && (
                <Marker coordinates={pinCoords}>
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
                      fontSize: "7px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "700",
                      fill: "#0e7490",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      pointerEvents: "none",
                      filter: "drop-shadow(0 1px 2px rgba(255,255,255,0.9))",
                    }}
                  >
                    {cityName}
                  </text>
                </Marker>
              )}
            </ComposableMap>
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
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold text-sm hover:bg-slate-700 dark:hover:bg-slate-100 transition-all duration-200 shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Free Consultation
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Tooltip */}
      {tooltipContent && (
        <div
          className="fixed z-50 pointer-events-none bg-slate-900/95 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-2xl border border-white/10"
          style={{ left: tooltipPos.x + 12, top: tooltipPos.y + 12 }}
        >
          {tooltipContent}
        </div>
      )}

      {/* Dark mode CSS variables */}
      <style dangerouslySetInnerHTML={{__html:`
        .dark .india-map-state-default { fill: #1e293b; stroke: #334155; }
        .dark .india-map-state-highlighted { fill: #1e3a5f; stroke: #3b82f6; }
      `}} />
    </div>
  );
}
