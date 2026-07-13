const fs = require('fs');

const filePath = "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/magento-development/MagentoContent.jsx";
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes('import Image from "next/image"')) {
    content = content.replace('import { motion } from "framer-motion";', 'import { motion } from "framer-motion";\nimport Image from "next/image";');
}

// Replace export
content = content.replace("export default function MagentoContent() {", "export default function MagentoContent({ dynamicData = {} }) {\n    const { magentoIntro = {}, magentoReasons = {}, magentoBenefits = {}, magentoServices = {}, magentoProcess = {}, magentoCTA = {} } = dynamicData;");

// Intro Section
content = content.replace(
    /Smooth Operating Applications using <span className="text-blue-500">Magento<\/span>/,
    `{magentoIntro.heading || <>Smooth Operating Applications using <span className="text-blue-500">Magento</span></>}`
);
content = content.replace(
    /Magento ranks as one of the best choices for eCommerce developers and dealers\. We transform any platform into a visually rich and fully-functional e-commerce hub, providing custom shopping carts, product catalogs, and flawless checkout experiences\./,
    `{magentoIntro.desc || "Magento ranks as one of the best choices for eCommerce developers and dealers. We transform any platform into a visually rich and fully-functional e-commerce hub, providing custom shopping carts, product catalogs, and flawless checkout experiences."}`
);

// Reasons Section
content = content.replace(
    /Looking For Magento Developers\? You Are At The Right Place!/,
    `{magentoReasons.title || "Looking For Magento Developers? You Are At The Right Place!"}`
);

const dynamicReasonsJSX = `{(magentoReasons.cards?.length > 0 ? magentoReasons.cards : reasons).map((card, i) => {
                        const isCustom = magentoReasons.cards?.length > 0;
                        const Icon = !isCustom ? card.icon : null;
                        return (
                            <div key={i} className="flex gap-4 items-start">
                                {card.image ? (
                                    <div className="mt-1 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm shrink-0 border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                                        <Image src={card.image} alt={card.title || ""} fill className="object-cover" />
                                    </div>
                                ) : (
                                    <div className="mt-1 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-sm text-blue-500 shrink-0 border border-slate-100 dark:border-slate-700">
                                        {Icon ? <Icon className="w-6 h-6" /> : <TrendingUp className="w-6 h-6" />}
                                    </div>
                                )}
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{card.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">{card.desc}</p>
                                </div>
                            </div>
                        );
                    })}`;
content = content.replace(/\{reasons\.map\(\(reason, i\) => \{[\s\S]*?<\/div>\s*\);\s*\}\)/, dynamicReasonsJSX);

// Process / Lifecycle
content = content.replace(
    /Magento Development Life Cycle/,
    `{magentoProcess.title || "Magento Development Life Cycle"}`
);
const dynamicProcessJSX = `{(magentoProcess.cards?.length > 0 ? magentoProcess.cards : process).map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm relative group"
                    >
                        {step.image ? (
                            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full overflow-hidden border-4 border-white dark:border-[#020617] group-hover:scale-110 transition-transform relative">
                                <Image src={step.image} alt={step.title || ""} fill className="object-cover" />
                            </div>
                        ) : (
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 font-bold rounded-full flex items-center justify-center border-4 border-white dark:border-[#020617] group-hover:scale-110 transition-transform">
                                {index + 1}
                            </div>
                        )}
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pr-6">{step.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                ))}`;
content = content.replace(/\{process\.map\(\(step, index\) => \([\s\S]*?<\/motion\.div>\s*\)\)/, dynamicProcessJSX);

// Benefits Grid
content = content.replace(
    /Benefits Of Magento Integration/,
    `{magentoBenefits.title || "Benefits Of Magento Integration"}`
);
const dynamicBenefitsJSX = `{(magentoBenefits.cards?.length > 0 ? magentoBenefits.cards : benefits).map((card, i) => {
                    const isCustom = magentoBenefits.cards?.length > 0;
                    const Icon = !isCustom ? card.icon : null;
                    return (
                        <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors">
                            {card.image ? (
                                <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-full shadow-sm mb-4 relative overflow-hidden border-2 border-blue-500/20">
                                    <Image src={card.image} alt={card.title || ""} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-full shadow-sm text-blue-500 mb-4">
                                    {Icon ? <Icon className="w-7 h-7" /> : <Layers className="w-7 h-7" />}
                                </div>
                            )}
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{card.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{card.desc}</p>
                        </div>
                    );
                })}`;
content = content.replace(/\{benefits\.map\(\(benefit, i\) => \{[\s\S]*?<\/div>\s*\);\s*\}\)/, dynamicBenefitsJSX);

// Services List
content = content.replace(
    /Our Magento Development Services/,
    `{magentoServices.title || "Our Magento Development Services"}`
);
const dynamicServicesJSX = `{(magentoServices.cards?.length > 0 ? magentoServices.cards : services).map((card, i) => {
                        const isCustom = magentoServices.cards?.length > 0;
                        const Icon = !isCustom ? card.icon : null;
                        return (
                            <div key={i} className="flex gap-5 items-start p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300">
                                {card.image ? (
                                    <div className="mt-1 w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl shrink-0 relative overflow-hidden">
                                        <Image src={card.image} alt={card.title || ""} fill className="object-cover" />
                                    </div>
                                ) : (
                                    <div className="mt-1 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl text-blue-500 shrink-0">
                                        {Icon ? <Icon className="w-6 h-6" /> : <Smartphone className="w-6 h-6" />}
                                    </div>
                                )}
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{card.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{card.desc}</p>
                                </div>
                            </div>
                        );
                    })}`;
content = content.replace(/\{services\.map\(\(service, i\) => \{[\s\S]*?<\/div>\s*\);\s*\}\)/, dynamicServicesJSX);

// CTA Section
content = content.replace(
    /Ready to scale your eCommerce store\?/,
    `{magentoCTA.title || "Ready to scale your eCommerce store?"}`
);
content = content.replace(
    /Whether migrating from Shopify, WooCommerce, or building from scratch, our end-to-end Magento solutions guarantee a hassle-free transition without impacting your SEO\./,
    `{magentoCTA.desc || "Whether migrating from Shopify, WooCommerce, or building from scratch, our end-to-end Magento solutions guarantee a hassle-free transition without impacting your SEO."}`
);
content = content.replace(
    /Hire Magento Experts/,
    `{magentoCTA.btnText || "Hire Magento Experts"}`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Magento Frontend updated!");
