const fs = require('fs');

const filePath = "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/ebay-store-management/EbayStoreContent.jsx";
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes('import Image from "next/image"')) {
    content = content.replace('import { motion } from "framer-motion";', 'import { motion } from "framer-motion";\nimport Image from "next/image";');
}

// Replace export
content = content.replace("export default function EbayStoreContent() {", "export default function EbayStoreContent({ dynamicData = {} }) {\n    const { ebayIntro = {}, ebayValue = {}, ebayServices = {}, ebayOfferings = {}, ebayCTA = {} } = dynamicData;");

// Intro Section
content = content.replace(
    /Create Your Market Using <span className="text-blue-500">eBay Store Management<\/span>/,
    `{ebayIntro.heading || <>Create Your Market Using <span className="text-blue-500">eBay Store Management</span></>}`
);
content = content.replace(
    /As the digital market gets more competitive, the need to establish a presence in every online marketplace is imperative\. Recenturesoft helps with expert eBay store management services to build sustainable relationships between you and your customers on eBay\./,
    `{ebayIntro.desc || "As the digital market gets more competitive, the need to establish a presence in every online marketplace is imperative. Recenturesoft helps with expert eBay store management services to build sustainable relationships between you and your customers on eBay."}`
);

// Value Proposition
content = content.replace(
    /<h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Simplify Your Workload<\/h4>/,
    `<h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{ebayValue.heading || "Simplify Your Workload"}</h4>`
);
content = content.replace(
    /eBay store management requires time and third-party interference\. Recenturesoft simplifies your work so you can focus only on internal resources—pick, pack, and despatch the orders daily\./,
    `{ebayValue.desc1 || "eBay store management requires time and third-party interference. Recenturesoft simplifies your work so you can focus only on internal resources—pick, pack, and despatch the orders daily."}`
);
content = content.replace(
    /We put an emphasis on managing and growing your business online and provide a wide range of customisable services to suit your needs\./,
    `{ebayValue.desc2 || "We put an emphasis on managing and growing your business online and provide a wide range of customisable services to suit your needs."}`
);
content = content.replace(
    /Complete Privacy & Security/,
    `{ebayValue.boxTitle || "Complete Privacy & Security"}`
);
content = content.replace(
    /At Recenturesoft, we take the full responsibility of managing and promoting your eBay store\. <strong>What’s even better is that we do not take access to your personal eBay account\.<\/strong> We guide and suggest proven methods of promotion required to create an online store or update the existing one\./,
    `{ebayValue.boxDesc ? <span dangerouslySetInnerHTML={{ __html: ebayValue.boxDesc }} /> : <>At Recenturesoft, we take the full responsibility of managing and promoting your eBay store. <strong>What’s even better is that we do not take access to your personal eBay account.</strong> We guide and suggest proven methods of promotion required to create an online store or update the existing one.</>}`
);

// Primary Services
content = content.replace(
    /Our eBay Store Management Solutions/,
    `{ebayServices.title || "Our eBay Store Management Solutions"}`
);
const dynamicServicesJSX = `{(ebayServices.cards?.length > 0 ? ebayServices.cards : primaryServices).map((service, index) => {
                    const isCustom = ebayServices.cards?.length > 0;
                    const Icon = !isCustom ? service.icon : null;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index % 4) * 0.1 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300 group"
                        >
                            {service.image ? (
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                                    <Image src={service.image} alt={service.title || ""} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {Icon ? <Icon className="w-6 h-6" /> : <LayoutTemplate className="w-6 h-6" />}
                                </div>
                            )}
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    );
                })}`;
content = content.replace(/\{primaryServices\.map\(\(service, index\) => \{[\s\S]*?<\/motion\.div>\s*\);\s*\}\)/, dynamicServicesJSX);

// Additional Offerings
content = content.replace(
    /Complete eBay Development & Management Needs/,
    `{ebayOfferings.title || "Complete eBay Development & Management Needs"}`
);
const dynamicOfferingsJSX = `{(ebayOfferings.cards?.length > 0 ? ebayOfferings.cards : additionalOfferings).map((offering, i) => {
                        const isCustom = ebayOfferings.cards?.length > 0;
                        const Icon = !isCustom ? offering.icon : null;
                        return (
                            <div key={i} className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors">
                                {offering.image ? (
                                    <div className="mt-1 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-sm shrink-0 relative overflow-hidden">
                                        <Image src={offering.image} alt={offering.title || ""} fill className="object-cover" />
                                    </div>
                                ) : (
                                    <div className="mt-1 bg-white dark:bg-slate-800 p-3 rounded-full shadow-sm text-blue-500 shrink-0">
                                        {Icon ? <Icon className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                                    </div>
                                )}
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{offering.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{offering.desc}</p>
                                </div>
                            </div>
                        );
                    })}`;
content = content.replace(/\{additionalOfferings\.map\(\(offering, i\) => \{[\s\S]*?<\/div>\s*\);\s*\}\)/, dynamicOfferingsJSX);

// CTA Section
content = content.replace(
    /Ready to scale your eBay store\?/,
    `{ebayCTA.title || "Ready to scale your eBay store?"}`
);
content = content.replace(
    /Focus on fulfillment while we handle the digital storefront\. Get organic ranking optimization, targeted traffic, and boosted sales today\./,
    `{ebayCTA.desc || "Focus on fulfillment while we handle the digital storefront. Get organic ranking optimization, targeted traffic, and boosted sales today."}`
);
content = content.replace(
    /Get Started With Us/,
    `{ebayCTA.btnText || "Get Started With Us"}`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("eBay Frontend updated!");
