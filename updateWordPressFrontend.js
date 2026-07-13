const fs = require('fs');

const filePath = "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/wordpress-development-customization/WordPressContent.jsx";
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes('import Image from "next/image"')) {
    content = content.replace('import { motion } from "framer-motion";', 'import { motion } from "framer-motion";\nimport Image from "next/image";');
}

// Replace export
content = content.replace("export default function WordPressContent() {", "export default function WordPressContent({ dynamicData = {} }) {\n    const { wpIntro = {}, wpConcept = {}, wpReasons = {}, wpServices = {}, wpChooseUs = {}, wpProcess = {}, wpCTA = {} } = dynamicData;");

// Intro Section
content = content.replace(
    /WordPress Development & <span className="text-blue-500">Customization Company<\/span> in India/,
    `{wpIntro.heading || <>WordPress Development & <span className="text-blue-500">Customization Company</span> in India</>}`
);
content = content.replace(
    /Combine innovation, flexibility, and mature technology with Recenturesoft\. We provide businesses with high-class WordPress Development Services at competitive costs, ensuring ultimate client satisfaction and robust business growth\./,
    `{wpIntro.desc || "Combine innovation, flexibility, and mature technology with Recenturesoft. We provide businesses with high-class WordPress Development Services at competitive costs, ensuring ultimate client satisfaction and robust business growth."}`
);

// Concept Section
content = content.replace(
    /<h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white relative z-10">The WordPress Concept<\/h4>/,
    `<h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white relative z-10">{wpConcept.heading || "The WordPress Concept"}</h4>`
);
content = content.replace(
    /WordPress is a simple-to-use, open-source content management system that was originally developed as a blogging platform and has now transformed into an end-to-end content platform supporting all kinds of online portals, eCommerce sites, and corporate networks\./,
    `{wpConcept.desc1 || "WordPress is a simple-to-use, open-source content management system that was originally developed as a blogging platform and has now transformed into an end-to-end content platform supporting all kinds of online portals, eCommerce sites, and corporate networks."}`
);
content = content.replace(
    /Our seasoned web developers leverage its countless opportunities for innovation and customization to proffer robust websites that enhance your business results at reasonable development costs\./,
    `{wpConcept.desc2 || "Our seasoned web developers leverage its countless opportunities for innovation and customization to proffer robust websites that enhance your business results at reasonable development costs."}`
);

// Reasons Grid
content = content.replace(
    /Why Build A Website With WordPress\?/,
    `{wpReasons.title || "Why Build A Website With WordPress?"}`
);
const dynamicReasonsJSX = `{(wpReasons.cards?.length > 0 ? wpReasons.cards : reasons).map((reason, index) => {
                    const isCustom = wpReasons.cards?.length > 0;
                    const Icon = !isCustom ? reason.icon : null;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300"
                        >
                            {reason.image ? (
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl mb-4 relative overflow-hidden">
                                    <Image src={reason.image} alt={reason.title || ""} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                                    {Icon ? <Icon className="w-6 h-6" /> : <PenTool className="w-6 h-6" />}
                                </div>
                            )}
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{reason.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
                        </motion.div>
                    );
                })}`;
content = content.replace(/\{reasons\.map\(\(reason, index\) => \{[\s\S]*?<\/motion\.div>\s*\);\s*\}\)/, dynamicReasonsJSX);

// Services List
content = content.replace(
    /Our Range Of WordPress Services/,
    `{wpServices.title || "Our Range Of WordPress Services"}`
);
const dynamicServicesJSX = `{(wpServices.cards?.length > 0 ? wpServices.cards : services).map((service, i) => {
                    const isCustom = wpServices.cards?.length > 0;
                    const Icon = !isCustom ? service.icon : null;
                    return (
                        <div key={i} className="flex gap-5 items-start p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300">
                            {service.image ? (
                                <div className="mt-1 w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl shrink-0 relative overflow-hidden">
                                    <Image src={service.image} alt={service.title || ""} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="mt-1 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl text-blue-500 shrink-0">
                                    {Icon ? <Icon className="w-6 h-6" /> : <Layout className="w-6 h-6" />}
                                </div>
                            )}
                            <div>
                                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
                            </div>
                        </div>
                    );
                })}`;
content = content.replace(/\{services\.map\(\(service, i\) => \{[\s\S]*?<\/div>\s*\);\s*\}\)/, dynamicServicesJSX);

// Why Choose Us
content = content.replace(
    /Why Recenturesoft\?/,
    `{wpChooseUs.title || "Why Recenturesoft?"}`
);
const dynamicChooseUsJSX = `{(wpChooseUs.cards?.length > 0 ? wpChooseUs.cards : whyChooseUs).map((feature, i) => {
                            const isCustom = wpChooseUs.cards?.length > 0;
                            const Icon = !isCustom ? feature.icon : null;
                            return (
                                <div key={i} className="flex items-start gap-4">
                                    {feature.image ? (
                                        <div className="w-9 h-9 bg-blue-50 dark:bg-blue-900/30 rounded-lg shrink-0 relative overflow-hidden">
                                            <Image src={feature.image} alt={feature.title || ""} fill className="object-cover" />
                                        </div>
                                    ) : (
                                        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-500 shrink-0">
                                            {Icon ? <Icon className="w-5 h-5" /> : <Rocket className="w-5 h-5" />}
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{feature.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{feature.desc}</p>
                                    </div>
                                </div>
                            );
                        })}`;
content = content.replace(/\{whyChooseUs\.map\(\(feature, i\) => \{[\s\S]*?<\/div>\s*\);\s*\}\)/, dynamicChooseUsJSX);

// Process List
content = content.replace(
    /Our Development Approach/,
    `{wpProcess.title || "Our Development Approach"}`
);
const dynamicProcessJSX = `{(wpProcess.steps?.length > 0 ? wpProcess.steps : process).map((step, i) => (
                            <div key={i} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium">
                                <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center shrink-0 shadow-md">
                                    {i + 1}
                                </div>
                                <span className="text-lg">{typeof step === 'string' ? step : step.title}</span>
                            </div>
                        ))}`;
content = content.replace(/\{process\.map\(\(step, i\) => \([\s\S]*?<\/div>\s*\)\)/, dynamicProcessJSX);


// CTA Section
content = content.replace(
    /Overcome Technology Obstacles Today/,
    `{wpCTA.title || "Overcome Technology Obstacles Today"}`
);
content = content.replace(
    /We offer an extraordinary balance between cost-effectiveness and successful web development\. Get in touch with our WordPress experts to receive a robust, professional, and reliable website\./,
    `{wpCTA.desc || "We offer an extraordinary balance between cost-effectiveness and successful web development. Get in touch with our WordPress experts to receive a robust, professional, and reliable website."}`
);
content = content.replace(
    /Partner With Us/,
    `{wpCTA.btnText || "Partner With Us"}`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("WordPress Frontend updated!");
