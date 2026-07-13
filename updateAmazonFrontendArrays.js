const fs = require('fs');
const path = require('path');

const filePath = "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/amazon-store-management/AmazonStoreContent.jsx";
let content = fs.readFileSync(filePath, 'utf8');

// The file needs to import 'next/image' if not already imported
if (!content.includes('import Image from "next/image"')) {
    content = content.replace('import { motion, AnimatePresence } from "framer-motion";', 'import { motion, AnimatePresence } from "framer-motion";\nimport Image from "next/image";');
}

// 1. Dynamic Services Logic
const staticServicesMapping = /\{services\.map\(\(service, index\) => \{[\s\S]*?const Icon = service\.icon;[\s\S]*?return \([\s\S]*?<div className="w-12 h-12 bg-blue-50 dark:bg-blue-900\/30 text-blue-500 rounded-xl flex items-center justify-center mb-4">[\s\S]*?<Icon className="w-6 h-6" \/>[\s\S]*?<\/div>[\s\S]*?<h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">\{amazonServices\.cards\?\.\[index\]\?\.title \|\| service\.title\}<\/h4>[\s\S]*?<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">\{amazonServices\.cards\?\.\[index\]\?\.desc \|\| service\.desc\}<\/p>[\s\S]*?<\/motion\.div>[\s\S]*?\}\);?[\s\S]*?\}\}/g;

const dynamicServicesJSX = `{(amazonServices.cards?.length > 0 ? amazonServices.cards : services).map((card, index) => {
                    const isCustom = amazonServices.cards?.length > 0;
                    const Icon = !isCustom ? card.icon : null;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300 flex flex-col"
                        >
                            {card.image ? (
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 overflow-hidden relative">
                                    <Image src={card.image} alt={card.title || ""} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                                    {Icon ? <Icon className="w-6 h-6" /> : <Package className="w-6 h-6" />}
                                </div>
                            )}
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{card.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">{card.desc}</p>
                        </motion.div>
                    );
                })}`;

// Replace services grid
content = content.replace(/\{services\.map\(\(service, index\) => \{[\s\S]*?<\/motion\.div>\s*\);\s*\}\)/g, dynamicServicesJSX);

// 2. Dynamic Benefits Logic
const dynamicBenefitsJSX = `{(amazonBenefits.cards?.length > 0 ? amazonBenefits.cards : benefits).map((card, i) => {
                    const isCustom = amazonBenefits.cards?.length > 0;
                    const Icon = !isCustom ? card.icon : null;
                    return (
                        <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-colors">
                            {card.image ? (
                                <div className="bg-white dark:bg-slate-800 w-16 h-16 rounded-full shadow-sm mb-4 relative overflow-hidden border-2 border-blue-500/20">
                                    <Image src={card.image} alt={card.title || ""} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="bg-white dark:bg-slate-800 p-4 rounded-full shadow-sm text-blue-500 mb-4">
                                    {Icon ? <Icon className="w-7 h-7" /> : <Star className="w-7 h-7" />}
                                </div>
                            )}
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{card.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{card.desc}</p>
                        </div>
                    );
                })}`;

content = content.replace(/\{benefits\.map\(\(benefit, i\) => \{[\s\S]*?<\/div>\s*\);\s*\}\)/g, dynamicBenefitsJSX);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Frontend Dynamic Cards injected!");
