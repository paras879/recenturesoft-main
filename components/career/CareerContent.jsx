"use client";

import { useState, useRef } from "react";
import { Briefcase, MapPin, Clock, Upload, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

export default function CareerContent({ jobs }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });
    const [fileName, setFileName] = useState("No file chosen");
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const recaptchaRef = useRef(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName("No file chosen");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        const formData = new FormData(e.target);
        const resumeFile = formData.get("resume");

        try {
            // 1. Upload Resume directly to Cloudinary to bypass Vercel limits
            const uploadData = new FormData();
            uploadData.append('file', resumeFile);
            uploadData.append('upload_preset', 'recenturesoft_upload');
            uploadData.append('cloud_name', 'dgsebwvvs');

            const cloudinaryRes = await fetch('https://api.cloudinary.com/v1_1/dgsebwvvs/auto/upload', {
                method: 'POST',
                body: uploadData
            });
            const cloudinaryData = await cloudinaryRes.json();
            
            if (!cloudinaryData.secure_url) {
                throw new Error(cloudinaryData.error?.message || "Failed to upload resume to cloud.");
            }

            // 2. Submit Application Data to our API
            formData.delete("resume");
            const applicationData = Object.fromEntries(formData.entries());
            applicationData.resumeUrl = cloudinaryData.secure_url;
            applicationData.recaptchaToken = recaptchaToken;

            const res = await fetch("/api/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(applicationData),
            });
            
            let data;
            try {
                data = await res.json();
            } catch (err) {
                data = { error: "Server returned an invalid response." };
            }

            if (res.ok && data?.success) {
                setStatus({ type: "success", message: "Your application has been submitted successfully! We will get back to you soon." });
                e.target.reset();
                setFileName("No file chosen");
                setRecaptchaToken("");
                if (recaptchaRef.current) recaptchaRef.current.reset();
            } else {
                setStatus({ type: "error", message: data?.error || "Failed to submit application. Please try again." });
                setRecaptchaToken("");
                if (recaptchaRef.current) recaptchaRef.current.reset();
            }
        } catch (error) {
            setStatus({ type: "error", message: "An unexpected error occurred. Please try again." });
            setRecaptchaToken("");
            if (recaptchaRef.current) recaptchaRef.current.reset();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 bg-white dark:bg-[#020617] relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Left Side: Current Openings */}
                    <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Current Openings</h2>
                            <p className="text-slate-600 dark:text-slate-400">Join our team of exceptional engineers, designers, and strategists.</p>
                        </div>

                        {jobs.length === 0 ? (
                            <div className="p-8 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl text-center">
                                <Briefcase className="w-12 h-12 text-slate-400 mx-auto mb-4 opacity-50" />
                                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">There are no job positions posted right now.</h3>
                                <p className="text-slate-500 dark:text-slate-400">Thanks for your interest! Please check back later or submit your resume for future opportunities.</p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-6">
                                {jobs.map((job, index) => (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        key={job._id} 
                                        className="p-6 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                                        
                                        <div className="flex justify-between items-start gap-4 mb-4">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.title}</h3>
                                            <span className="px-3 py-1 bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400 rounded-full text-xs font-semibold whitespace-nowrap">
                                                {job.jobType}
                                            </span>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
                                            <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.department}</span>
                                            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.experience}</span>
                                        </div>

                                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                                            {job.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Side: Apply Form */}
                    <div className="lg:col-span-6 xl:col-span-5 relative">
                        <div className="sticky top-28 bg-white dark:bg-[#0b1120] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl shadow-cyan-900/5">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Applicant Apply Here</h3>
                            
                            {status.message && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-xl mb-6 flex gap-3 text-sm font-medium ${
                                        status.type === 'success' 
                                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20' 
                                            : 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20'
                                    }`}
                                >
                                    {status.type === 'success' ? <CheckCircle className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                                    <p>{status.message}</p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name *</label>
                                        <input type="text" name="name" required className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="John Doe" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email *</label>
                                        <input type="email" name="email" required className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone No. *</label>
                                        <input type="tel" name="phone" required className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="+1 234 567 8900" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">City *</label>
                                        <input type="text" name="city" required className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="New York" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Apply For *</label>
                                        <input type="text" name="applyFor" required className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="e.g. Frontend Developer" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Experience *</label>
                                        <input type="text" name="experience" required className="w-full px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="e.g. 3 Years" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Message</label>
                                    <textarea name="message" rows="3" className="w-full px-4 py-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Tell us briefly about yourself..."></textarea>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Resume *</label>
                                    <div className="relative">
                                        <input 
                                            type="file" 
                                            name="resume" 
                                            required 
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                                        />
                                        <div className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-white/5 border border-dashed border-slate-300 dark:border-white/20 rounded-xl text-sm">
                                            <span className="text-slate-500 truncate max-w-[200px]">{fileName}</span>
                                            <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-medium bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1 rounded-lg">
                                                <Upload className="w-4 h-4" /> Upload
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-xs text-slate-500 ml-1 mt-1">Accepted formats: PDF, DOC, DOCX</span>
                                </div>

                                <div className="flex justify-center my-4">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "dummy_key"}
                                        onChange={(token) => setRecaptchaToken(token)}
                                        theme="light"
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="mt-2 w-full py-3.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl font-semibold transition-all shadow-md shadow-cyan-600/20 disabled:opacity-70 flex items-center justify-center"
                                >
                                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
