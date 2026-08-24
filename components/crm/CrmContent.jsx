import { Brain, Cpu, Code, Database, Globe, Layers, Server, Shield, Smartphone, Zap, ChevronDown, CheckCircle2, ArrowRight, MessageSquare, FileText, BarChart3, Bot, Network, Building2, HeartPulse, Landmark, ShoppingBag, Briefcase, Truck, Scale, Plane, Stethoscope, Star, Quote, CpuIcon, Target, Search, Compass, Workflow, PlayCircle, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CrmContent({ dynamicData = {} }) {
    const {
        crmIntro = {},
        crmFundamentals = {},
        crmBest = {},
        crmServices = {},
        crmProcess = {},
        crmBenefits = {}
    } = dynamicData;

    const defaultFundamentals = [
        "A CRM database of mutual contacts such as customers plus counterparts.",
        "The ability to observe the quality of work and progress of your sales departments at any moment.",
        "A chance to get statistics plus analytics of different businesses processes to help in lead generation.",
        "A power to enhance the performance as well as to craft a robust strategy for business development.",
        "The best CRM software development company in India will offer the option of controlling and accounting that can help enhance customer relationships."
    ];

    const defaultServices = [
        { title: "Full Integration", desc: "Integrate platforms like WhatsApp, SFA, or Hubspot for 360-degree client management." },
        { title: "Migration", desc: "Hassle-free data transition from Odoo, Hubspot, Salesforce, Infusionsoft and Zoho." },
        { title: "Platform Customization", desc: "Fully-customized platforms with custom solutions mixed with Odoo, Dolibarr or OFBiz." },
        { title: "Mobile CRM", desc: "Real-time updates to fix queries efficiently with highly customized mobile workflows." },
        { title: "Implementation", desc: "Cloud deployments, automated data entry, and detailed client reports." },
        { title: "Consulting", desc: "In-depth analysis to offer a CRM system that supports heavy sales processes." }
    ];

    const defaultProcess = [
        { stage: "Stage 1: Design", desc: "Analyse the business and software requirements, functional design idea, UI design, and prototype." },
        { stage: "Stage 2: Development", desc: "After approval, skilled developers code powerful software using the best tools and languages." },
        { stage: "Stage 3: Testing", desc: "Thorough performance, interactivity, and responsiveness tests to ensure it is bug-free and secure." },
        { stage: "Stage 4: Deployment", desc: "Efficient CRM deployment at your preferred platform without any bugs or mismatches." },
        { stage: "Stage 5: Monitoring", desc: "Constant monitoring for optimal calibration and extended support handling." }
    ];

    const defaultBenefits = [
        { title: "Marketing", desc: "Develop multi-channel campaigns with email marketing, web content, plus events." },
        { title: "Make better judgments", desc: "Gain relevant insights, real-time data analysis, and custom dashboards." },
        { title: "Drive Sales", desc: "Engage more effectively, boost productivity, enhance sales performance, and track relationships." },
        { title: "Stay on track", desc: "Locate the right prospects, determine the next best action, build an efficient sales team." },
        { title: "Improve Customer Service", desc: "Empower agents with the right tools for quick and accurate resolution." }
    ];

    return (
        <div className="prose prose-slate dark:prose-invert max-w-none font-manrope mt-4 mb-4">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                {crmIntro.heading || "How Does CRM Development Company in India operate?"}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 whitespace-pre-wrap">
                {crmIntro.p1 || "CRM or Customer Relationship Management is a type of data-driven software solution that helps improve how the user interacts and conducts business with the clients. Moreover, the CRM systems allow you to manage and support customer relationships, marketing, pipeline, track sales leads, plus gather productive data."}
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 whitespace-pre-wrap">
                {crmIntro.p2 || "CRM software development services in India can help improve profitability by simplifying complex processes in the sales, marketing, or service divisions. Moreover, CRM lets you focus on structuring and supporting client relationships across different platforms."}
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 whitespace-pre-wrap">
                {crmIntro.p3 || "A powerful CRM solution offers a well-integrated platform where everything related to the development and improvement of the customer's relationships gets stored. Without the backing of a well-integrated CRM solution, you may overlook crucial growth opportunities plus lose revenue because the business is unable to optimize completely from the operating processes."}
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4 whitespace-pre-wrap">
                {crmIntro.p4 || "Also, without partnering with a CRM development company in India, you won't be able to make the most out of customer relationships and sales leads. Misplacing vital customer contact information can result in businesses losing clients. Thus, a centralised plus automated CRM system is needed for a business to not lose track of its customer interactions as well as miss crucial business opportunities. Therefore, you need a CRM development company in India that will provide the best services."}
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">
                {crmFundamentals.heading || "Below Are The Fundamental Benefits Of CRM Software Development Services In India:"}
            </h4>
            <ul className="list-disc pl-5 mb-3 text-slate-600 dark:text-slate-300 space-y-2">
                {(crmFundamentals.items?.length > 0 ? crmFundamentals.items : defaultFundamentals).map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>

            <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 my-10">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                    {crmBest.heading || "Recenturesoft: The Best CRM Software Development Company In India"}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8 whitespace-pre-wrap">
                    {crmBest.p1 || "Recenturesoft offers full-scale software development services in India and has created and deployed several CRM softwares. Our software delivers results and assists multiple companies to increase sales, traffic, along overall productivity. We have teams of experienced plus skilled professionals who provide the best CRM software development services India."}
                </p>
                <p className="text-slate-600 dark:text-slate-300 whitespace-pre-wrap">
                    {crmBest.p2 || "Moreover, our team has the most advanced tools plus technology to deliver powerful and scalable software development services in India. Recenturesoft uses the most suitable equipment, framework plus options to produce a premium-class CRM experience."}
                </p>
            </div>

            <h4 className="text-xl font-bold mt-8 mb-8">
                {crmServices.heading || "Recenturesoft Services: CRM Development Company In India"}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {(crmServices.items?.length > 0 ? crmServices.items : defaultServices).map((s, i) => {
                    const renderDesc = (desc) => {
                        if (!desc) return null;
                        
                        if (desc.includes('•') || desc.includes('\n')) {
                            const lines = desc.split('\n');
                            
                            if (lines.length === 1 && desc.includes('•')) {
                                const parts = desc.split('•').map(p => p.trim());
                                const descText = parts[0];
                                const bullets = parts.slice(1).filter(Boolean);
                                return (
                                    <div className="flex flex-col gap-3">
                                        {descText && <span className="block leading-relaxed">{descText}</span>}
                                        {bullets.length > 0 && (
                                            <ul className="list-disc pl-5 space-y-1.5">
                                                {bullets.map((pt, idx) => <li key={idx} className="leading-relaxed">{pt}</li>)}
                                            </ul>
                                        )}
                                    </div>
                                );
                            }
                            
                            const elements = [];
                            let currentBullets = [];
                            
                            lines.forEach((line, idx) => {
                                const trimmed = line.trim();
                                if (!trimmed) return;
                                
                                if (trimmed.startsWith('•') || trimmed.startsWith('- ')) {
                                    currentBullets.push(trimmed.replace(/^[•-]\s*/, ''));
                                } else if (trimmed.includes('•')) {
                                    const parts = trimmed.split('•').map(p => p.trim());
                                    if (parts[0]) {
                                        if (currentBullets.length > 0) {
                                            elements.push(<ul key={`ul-${idx}-prev`} className="list-disc pl-5 space-y-1.5 my-2">{currentBullets.map((pt, i) => <li key={i} className="leading-relaxed">{pt}</li>)}</ul>);
                                            currentBullets = [];
                                        }
                                        elements.push(<span key={`span-${idx}`} className="block leading-relaxed mb-2">{parts[0]}</span>);
                                    }
                                    currentBullets.push(...parts.slice(1).filter(Boolean));
                                } else {
                                    if (currentBullets.length > 0) {
                                        elements.push(<ul key={`ul-${idx}`} className="list-disc pl-5 space-y-1.5 my-2">{currentBullets.map((pt, i) => <li key={i} className="leading-relaxed">{pt}</li>)}</ul>);
                                        currentBullets = [];
                                    }
                                    const isHeading = trimmed.length > 0 && (trimmed.endsWith(':') || (trimmed.length < 60 && idx > 0));
                                    elements.push(<span key={`text-${idx}`} className={`block leading-relaxed ${isHeading ? 'font-semibold mt-3 mb-1 text-slate-900 dark:text-white' : ''}`}>{trimmed}</span>);
                                }
                            });
                            
                            if (currentBullets.length > 0) {
                                elements.push(<ul key="ul-last" className="list-disc pl-5 space-y-1.5 my-2">{currentBullets.map((pt, i) => <li key={i} className="leading-relaxed">{pt}</li>)}</ul>);
                            }
                            
                            return <div className="flex flex-col w-full">{elements}</div>;
                        }
                        
                        return desc;
                    };

                    return (
                        <div key={i} className="border border-slate-200 dark:border-slate-700 p-4 rounded-lg bg-white dark:bg-slate-900/40">
                            <h5 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">{s.title}</h5>
                            <div className="text-sm text-slate-600 dark:text-slate-300">{renderDesc(s.desc)}</div>
                        </div>
                    );
                })}
            </div>

            <h4 className="text-xl font-bold mt-8 mb-8">
                {crmProcess.heading || "Process Of CRM Development Company In India"}
            </h4>
            <div className="space-y-4 mb-8">
                {(crmProcess.items?.length > 0 ? crmProcess.items : defaultProcess).map((step, i) => (
                    <div key={i} className="flex gap-4 items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                            {i + 1}
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-900 dark:text-white">{step.stage}</h5>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h4 className="text-xl font-bold mt-8 mb-8">
                {crmBenefits.heading || "Benefits Of CRM Development Company In India"}
            </h4>
            {(() => {
                const items = crmBenefits.items?.length > 0 ? crmBenefits.items : defaultBenefits;
                let description = crmBenefits.desc;
                let listItems = [...items];

                if (!description && listItems.length > 0 && listItems[0].title && listItems[0].title.length > 150) {
                    description = listItems[0].title;
                    if (listItems[0].desc) {
                        listItems[0] = { title: "", desc: listItems[0].desc };
                    } else {
                        listItems.shift();
                    }
                }

                return (
                    <div className="mb-12">
                        {description && <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed whitespace-pre-wrap">{description}</p>}
                        
                        {listItems.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {listItems.map((item, idx) => {
                                    const cleanDesc = item.desc ? item.desc.replace(/^:\s*/, '') : '';
                                    return (
                                        <div
                                            key={idx}
                                            className="p-4 md:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-4 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all group"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mt-0.5">
                                                <Zap className="w-5 h-5" />
                                            </div>
                                            <div className="flex flex-col justify-center min-h-[2.5rem]">
                                                {item.title && <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>}
                                                {cleanDesc && (
                                                    <p className={`text-slate-600 dark:text-slate-400 leading-relaxed ${item.title ? 'mt-1 text-sm' : 'text-lg font-medium group-hover:text-blue-600 transition-colors'}`}>
                                                        {cleanDesc}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })()}
        </div>
    );
}
