const fs = require('fs');

const filePath = "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/opencart-development/OpenCartContent.jsx";
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes('import Image from "next/image"')) {
    content = content.replace('import { motion } from "framer-motion";', 'import { motion } from "framer-motion";\nimport Image from "next/image";');
}

// Replace export
content = content.replace("export default function OpenCartContent() {", "export default function OpenCartContent({ dynamicData = {} }) {\n    const { openIntro = {}, openWhatIs = {}, openBenefits = {}, openSolutions = {}, openProcess = {}, openIndustries = {}, openCTA = {} } = dynamicData;");

// Intro Section
content = content.replace(
    /Robust <span className="text-blue-500">OpenCart<\/span> Development Solutions/,
    `{openIntro.heading || <>Robust <span className="text-blue-500">OpenCart</span> Development Solutions</>}`
);
content = content.replace(
    /Recenturesoft, the Best OPENCART Development Company in India, is an expert at rendering numerous OpenCart services for every business sector\. We help you build highly dynamic and user-friendly eCommerce stores with appealing, feature-rich details\./,
    `{openIntro.desc || "Recenturesoft, the Best OPENCART Development Company in India, is an expert at rendering numerous OpenCart services for every business sector. We help you build highly dynamic and user-friendly eCommerce stores with appealing, feature-rich details."}`
);

// What is OpenCart Section
content = content.replace(
    /<h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white relative z-10">What Is OpenCart Development\?<\/h4>/,
    `<h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white relative z-10">{openWhatIs.heading || "What Is OpenCart Development?"}</h4>`
);
content = content.replace(
    /OpenCart is one of the most preferred and powerful eCommerce development solutions created with PHP\. It is a simple, easy-to-use, lightning-fast and cost-effective solution available in the market\. This technology enables you to balance your business effectively and quickly\./,
    `{openWhatIs.desc1 || "OpenCart is one of the most preferred and powerful eCommerce development solutions created with PHP. It is a simple, easy-to-use, lightning-fast and cost-effective solution available in the market. This technology enables you to balance your business effectively and quickly."}`
);
content = content.replace(
    /With OpenCart, it's easy to embody a broad range of social features\. It comes with several eCommerce extensions, such as multiple payment modes, order management, coupons & discounts, and lifetime software updates\./,
    `{openWhatIs.desc2 || "With OpenCart, it's easy to embody a broad range of social features. It comes with several eCommerce extensions, such as multiple payment modes, order management, coupons & discounts, and lifetime software updates."}`
);

// Benefits Grid
content = content.replace(
    /Key Benefits Of OpenCart Web Development/,
    `{openBenefits.title || "Key Benefits Of OpenCart Web Development"}`
);
const dynamicBenefitsJSX = `{(openBenefits.cards?.length > 0 ? openBenefits.cards : benefits).map((benefit, index) => {
                    const isCustom = openBenefits.cards?.length > 0;
                    const Icon = !isCustom ? benefit.icon : null;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300"
                        >
                            {benefit.image ? (
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl mb-4 relative overflow-hidden">
                                    <Image src={benefit.image} alt={benefit.title || ""} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                                    {Icon ? <Icon className="w-6 h-6" /> : <Store className="w-6 h-6" />}
                                </div>
                            )}
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                        </motion.div>
                    );
                })}`;
content = content.replace(/\{benefits\.map\(\(benefit, index\) => \{[\s\S]*?<\/motion\.div>\s*\);\s*\}\)/, dynamicBenefitsJSX);

// Solutions Grid
content = content.replace(
    /End-To-End OpenCart Solutions/,
    `{openSolutions.title || "End-To-End OpenCart Solutions"}`
);
const dynamicSolutionsJSX = `{(openSolutions.cards?.length > 0 ? openSolutions.cards : solutions).map((solution, i) => {
                    const isCustom = openSolutions.cards?.length > 0;
                    const Icon = !isCustom ? solution.icon : null;
                    return (
                        <div key={i} className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors">
                            {solution.image ? (
                                <div className="mt-1 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-sm shrink-0 relative overflow-hidden">
                                    <Image src={solution.image} alt={solution.title || ""} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="mt-1 bg-white dark:bg-slate-800 p-3 rounded-full shadow-sm text-blue-500 shrink-0">
                                    {Icon ? <Icon className="w-6 h-6" /> : <AppWindow className="w-6 h-6" />}
                                </div>
                            )}
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{solution.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{solution.desc}</p>
                            </div>
                        </div>
                    );
                })}`;
content = content.replace(/\{solutions\.map\(\(solution, i\) => \{[\s\S]*?<\/div>\s*\);\s*\}\)/, dynamicSolutionsJSX);


// Process List
content = content.replace(
    /<h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Our Development Cycle<\/h3>/,
    `<h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">{openProcess.title || "Our Development Cycle"}</h3>`
);
const dynamicProcessJSX = `{(openProcess.steps?.length > 0 ? openProcess.steps : process).map((step, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center shrink-0">
                                    {i + 1}
                                </div>
                                <span className="text-slate-700 dark:text-slate-300 font-medium text-lg">{typeof step === 'string' ? step : step.title}</span>
                            </div>
                        ))}`;
content = content.replace(/\{process\.map\(\(step, i\) => \([\s\S]*?<\/div>\s*\)\)/, dynamicProcessJSX);


// Industries List
content = content.replace(
    /<h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Rich Industry Experience<\/h3>/,
    `<h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">{openIndustries.title || "Rich Industry Experience"}</h3>`
);
const dynamicIndustriesJSX = `{(openIndustries.cards?.length > 0 ? openIndustries.cards : industries).map((ind, i) => {
                            const isCustom = openIndustries.cards?.length > 0;
                            const Icon = !isCustom ? ind.icon : null;
                            return (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-all">
                                    {ind.image ? (
                                        <div className="w-5 h-5 relative">
                                            <Image src={ind.image} alt={ind.label || ind.title || ""} fill className="object-cover rounded-sm" />
                                        </div>
                                    ) : (
                                        <>{Icon ? <Icon className="w-5 h-5 text-blue-500" /> : <ShoppingBag className="w-5 h-5 text-blue-500" />}</>
                                    )}
                                    <span className="font-medium text-slate-700 dark:text-slate-300">{ind.label || ind.title}</span>
                                </div>
                            );
                        })}`;
content = content.replace(/\{industries\.map\(\(ind, i\) => \{[\s\S]*?<\/div>\s*\);\s*\}\)/, dynamicIndustriesJSX);


// CTA Section
content = content.replace(
    /Partner With The Best OpenCart Developers/,
    `{openCTA.title || "Partner With The Best OpenCart Developers"}`
);
content = content.replace(
    /We develop highly customized websites and applications tailored to your budget and business requirements\. Join hands with us to experience the comfort of working with smart, skilled, and passionate teams\./,
    `{openCTA.desc || "We develop highly customized websites and applications tailored to your budget and business requirements. Join hands with us to experience the comfort of working with smart, skilled, and passionate teams."}`
);
content = content.replace(
    /Get in touch today/,
    `{openCTA.btnText || "Get in touch today"}`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("OpenCart Frontend updated!");
