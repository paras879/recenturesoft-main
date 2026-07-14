"use client";

import { Check } from "lucide-react";
import Link from "next/link";

const CheckIcon = () => (
    <Check className="w-5 h-5 text-red-500 mx-auto" strokeWidth={3} />
);

export default function SeoPackageContent({ dynamicData }) {
    const plans = dynamicData?.content?.plans || [
        { name: "Bronze", keywords: "20 keywords to be optimized" },
        { name: "Silver", keywords: "40 keywords to be optimized" },
        { name: "Gold", keywords: "60 keywords to be optimized" },
        { name: "Platinum", keywords: "80 keywords to be optimized" }
    ];

    const websiteAudit = dynamicData?.content?.websiteAudit || [
        "Initial Review & Analysis", "In-Depth Site Analysis", "Content Duplicacy Check", 
        "Initial Backlinks Analysis", "Google Penalty Check", "Competition Analysis", 
        "Initial Rank Report", "Keyword Research"
    ];

    const onPageOptimization = dynamicData?.content?.onPageOptimization || [
        "Canonicalization", "Website Page Load Optimization", "Header Tags Optimization", 
        "Html Code Cleanup & Optimization", "Internal Link Structuring & Optimization", 
        "Image & Hyperlink Optimization", "IRobots.Txt Creation/Analysis", "Html & Xml Sitemap", 
        "Google & Bing Webmaster Tools", "Google Analytics", "Title & Meta Tags Optimization", 
        "Page Speed Optimization Analysis", "Sitemap Creation"
    ];

    const contentMarketing = dynamicData?.content?.contentMarketing || [
        { name: "Blog Writing", values: ["1", "1", "2", "2"] },
        { name: "Informational Article Writing & Submission", values: ["4", "5", "6", "7"] },
        { name: "Press Release Writing & Submission", values: ["2", "1", "2", "5"] },
        { name: "Guest Blog Posting", values: ["1", "2", "2", "2"] },
        { name: "Infographic Creation & Distribution", values: ["1 every 3rd month", "1 every 3rd month", "1 every 3rd month", "1 every 2nd month"] },
        { name: "Press Release Social Bookmarking", values: ["5", "10", "20", "30"] }
    ];

    const smo = dynamicData?.content?.smo || [
        { name: "Social Bookmarking", values: ["40", "60", "80", "100"] }
    ];
    
    const smoChecks = dynamicData?.content?.smoChecks || [
        "Google Plus Business Page Setup", "Facebook & Twitter Account Setup", 
        "Profile Content Writing", "Facebook Wall Updates", "Twitter Updates", 
        "Google + Update", "Custom Twitter Background", "Facebook Timeline Design"
    ];

    const reporting = dynamicData?.content?.reporting || [
        "Search Engine Rank Report", "Seo Reports", "Google Analytics Report", "Activity Report"
    ];

    const customerSupport = dynamicData?.content?.customerSupport || [
        "Email/Chat/Online", "24/7 Live Project Tracking"
    ];

    return (
        <div className="w-full my-8 bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr>
                            <th className="p-6 bg-slate-50 dark:bg-slate-800 border-b border-r border-slate-200 dark:border-slate-700 w-1/3">
                                {/* Empty top left corner */}
                            </th>
                            {plans.map((plan, idx) => (
                                <th key={idx} className="p-0 border-b border-slate-200 dark:border-slate-700 text-center w-[16.66%] align-top bg-slate-50 dark:bg-slate-800">
                                    <div className="bg-blue-600 text-white py-4 px-2 shadow-sm rounded-b-xl mx-4 mb-4 transform -translate-y-2">
                                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-wide">{plan.name}</h3>
                                    </div>
                                    <div className="px-4 pb-6">
                                        <p className="text-3xl font-black text-slate-900 dark:text-white mb-2">{plan.keywords.split(' ')[0]}</p>
                                        <p className="text-xs text-slate-500 font-medium">keywords to be optimized</p>
                                        <div className="mt-3 flex justify-center space-x-1">
                                            {[...Array(6)].map((_, i) => (
                                                <div key={i} className="w-2 h-1 bg-blue-500 rounded-full"></div>
                                            ))}
                                        </div>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {/* Section Header: Website Audit */}
                        <tr>
                            <td colSpan={5} className="bg-slate-900 dark:bg-black text-white font-bold p-3 text-lg uppercase">
                                Website Audit
                            </td>
                        </tr>
                        {websiteAudit.map((item, idx) => (
                            <tr key={`audit-${idx}`} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="p-3 font-medium text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 bg-blue-500/5 dark:bg-blue-900/10">{item}</td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                            </tr>
                        ))}

                        {/* Section Header: On-Page Optimization */}
                        <tr>
                            <td colSpan={5} className="bg-slate-900 dark:bg-black text-white font-bold p-3 text-lg uppercase">
                                On-Page Optimization
                            </td>
                        </tr>
                        {onPageOptimization.map((item, idx) => (
                            <tr key={`onpage-${idx}`} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="p-3 font-medium text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 bg-blue-500/5 dark:bg-blue-900/10">{item}</td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                            </tr>
                        ))}

                        {/* Section Header: Content Marketing */}
                        <tr>
                            <td colSpan={5} className="bg-slate-900 dark:bg-black text-white font-bold p-3 text-lg uppercase">
                                Content Marketing (Per Month)
                            </td>
                        </tr>
                        {contentMarketing.map((item, idx) => (
                            <tr key={`cm-${idx}`} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="p-3 font-medium text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 bg-blue-500/5 dark:bg-blue-900/10">{item.name}</td>
                                {item.values.map((val, vIdx) => (
                                    <td key={vIdx} className="p-3 text-center text-slate-600 dark:text-slate-400 font-semibold">{val}</td>
                                ))}
                            </tr>
                        ))}

                        {/* Section Header: SMO */}
                        <tr>
                            <td colSpan={5} className="bg-slate-900 dark:bg-black text-white font-bold p-3 text-lg uppercase">
                                SMO (Per Month)
                            </td>
                        </tr>
                        {smo.map((item, idx) => (
                            <tr key={`smo-${idx}`} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="p-3 font-medium text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 bg-blue-500/5 dark:bg-blue-900/10">{item.name}</td>
                                {item.values.map((val, vIdx) => (
                                    <td key={vIdx} className="p-3 text-center text-slate-600 dark:text-slate-400 font-semibold">{val}</td>
                                ))}
                            </tr>
                        ))}
                        {smoChecks.map((item, idx) => (
                            <tr key={`smoc-${idx}`} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="p-3 font-medium text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 bg-blue-500/5 dark:bg-blue-900/10">{item}</td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                            </tr>
                        ))}

                        {/* Section Header: Monthly Reporting */}
                        <tr>
                            <td colSpan={5} className="bg-slate-900 dark:bg-black text-white font-bold p-3 text-lg uppercase">
                                Monthly Reporting
                            </td>
                        </tr>
                        {reporting.map((item, idx) => (
                            <tr key={`rep-${idx}`} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="p-3 font-medium text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 bg-blue-500/5 dark:bg-blue-900/10">{item}</td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                            </tr>
                        ))}

                        {/* Section Header: Customer Support */}
                        <tr>
                            <td colSpan={5} className="bg-slate-900 dark:bg-black text-white font-bold p-3 text-lg uppercase">
                                Customer Support
                            </td>
                        </tr>
                        {customerSupport.map((item, idx) => (
                            <tr key={`cs-${idx}`} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="p-3 font-medium text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 bg-blue-500/5 dark:bg-blue-900/10">{item}</td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                                <td className="p-3 text-center"><CheckIcon /></td>
                            </tr>
                        ))}
                        <tr className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="p-3 font-medium text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-800 bg-blue-500/5 dark:bg-blue-900/10">Minimum Contract Period</td>
                            <td className="p-3 text-center text-slate-600 dark:text-slate-400 font-semibold">6 Months</td>
                            <td className="p-3 text-center text-slate-600 dark:text-slate-400 font-semibold">6 Months</td>
                            <td className="p-3 text-center text-slate-600 dark:text-slate-400 font-semibold">6 Months</td>
                            <td className="p-3 text-center text-slate-600 dark:text-slate-400 font-semibold">6 Months</td>
                        </tr>

                        {/* Footer Row */}
                        <tr>
                            <td className="p-6 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900"></td>
                            <td className="p-6 text-center bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
                                <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-md text-sm whitespace-nowrap">
                                    Contact Us
                                </Link>
                            </td>
                            <td className="p-6 text-center bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
                                <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-md text-sm whitespace-nowrap">
                                    Contact Us
                                </Link>
                            </td>
                            <td className="p-6 text-center bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
                                <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-md text-sm whitespace-nowrap">
                                    Contact Us
                                </Link>
                            </td>
                            <td className="p-6 text-center bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
                                <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-md text-sm whitespace-nowrap">
                                    Contact Us
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
