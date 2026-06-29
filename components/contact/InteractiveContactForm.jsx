"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveContactForm() {
    const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("submitting");
        setError(null);

        const formData = new FormData(e.currentTarget);
        const firstName = formData.get("firstName") || "";
        const lastName = formData.get("lastName") || "";
        const email = formData.get("email") || "";
        const phone = formData.get("phone") || "";
        const companySize = formData.get("companySize") || "";
        const message = formData.get("message") || "";

        const name = `${firstName} ${lastName}`.trim();
        const subject = `Recenture Inquiry (Company Size: ${companySize})`;

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, phone, subject, message }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setFormStatus("success");
                e.target.reset();
                setTimeout(() => {
                    setFormStatus("idle");
                }, 3000);
            } else {
                setError(data.message || "Failed to send message. Please try again.");
                setFormStatus("idle");
            }
        } catch (err) {
            console.error("Form submit error:", err);
            setError("Network error. Please check your connection and try again.");
            setFormStatus("idle");
        }
    };

    return (
        <section className="py-1 md:py-2 lg:py-4 bg-slate-50 dark:bg-[#020617] relative transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-[clamp(2rem,8vw,3.5rem)] font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">extraordinary.</span>
                        </h2>
                        <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg mb-8 md:mb-12 max-w-md font-light">
                            Whether you need a full-scale enterprise transformation or a cutting-edge web application, our team is ready to architect your success.
                        </p>

                        <div className="space-y-5 md:space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-slate-900 dark:text-white font-semibold mb-1">Call Us</h4>
                                    <p className="text-slate-600 dark:text-gray-400 font-light">+91 777 000 3288</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-slate-900 dark:text-white font-semibold mb-1">Email Us</h4>
                                    <p className="text-slate-600 dark:text-gray-400 font-light">info@recenturesoft.com</p>
                                </div>
                            </div>


                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-slate-900 dark:text-white font-semibold mb-1">Global HQ</h4>
                                    <a href="https://www.google.com/maps/dir/?api=1&destination=A-125,+Sector-63,+Noida,+Uttar+Pradesh+201301,+India" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-gray-400 font-light hover:text-cyan-500 transition-colors block">A-125, Sector-63,<br />Noida, UP 201301</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative w-full group min-h-[400px] lg:min-h-[500px] flex"
                    >
                        {/* Glowing background behind map */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/30 via-cyan-500/30 to-blue-600/30 rounded-[3rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="bg-white/50 dark:bg-slate-900/50 border border-white/20 dark:border-white/10 rounded-[2.5rem] p-2 md:p-3 backdrop-blur-2xl relative shadow-2xl overflow-hidden flex-grow flex flex-col group-hover:border-cyan-500/30 transition-colors duration-500">
                            
                            {/* Inner map container */}
                            <div className="relative flex-grow rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800 isolate">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.689437142078!2d77.37580665!3d28.6170669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5662bb1e17d%3A0xc3cf9c7717dc4fbc!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0, minHeight: '100%', position: 'absolute', inset: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="RecentureSoft Headquarters Map"
                                    className="grayscale-[20%] contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                ></iframe>

                                {/* Floating Overlay Gradient to blend edges */}
                                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] pointer-events-none rounded-[2rem]"></div>
                                
                                {/* Floating View Larger button */}
                                <a 
                                    href="https://www.google.com/maps/dir/?api=1&destination=A-125,+Sector-63,+Noida,+Uttar+Pradesh+201301,+India"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 dark:bg-white/95 text-white dark:text-slate-900 px-6 py-3 rounded-full font-semibold shadow-[0_10px_20px_rgba(0,0,0,0.2)] backdrop-blur-md flex items-center gap-2 hover:scale-105 hover:bg-slate-900 dark:hover:bg-white transition-all duration-300 z-10 text-sm whitespace-nowrap"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
