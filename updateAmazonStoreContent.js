const fs = require('fs');
const path = require('path');

const filePath = "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/amazon-store-management/AmazonStoreContent.jsx";
let content = fs.readFileSync(filePath, 'utf8');

// Replace export default function AmazonStoreContent() {
content = content.replace("export default function AmazonStoreContent() {", "export default function AmazonStoreContent({ dynamicData = {} }) {\n    const { amazonIntro = {}, amazonServices = {}, amazonProcess = {}, amazonBenefits = {} } = dynamicData;");

// Intro Section
content = content.replace(
    /Manage Items Better with <span className="text-blue-500">Amazon Store Management<\/span>/,
    `{amazonIntro.heading || <>Manage Items Better with <span className="text-blue-500">Amazon Store Management</span></>}`
);

content = content.replace(
    /Making a powerful presence on Amazon requires deep knowledge of the eCommerce sector\. Recenturesoft is a well-known Amazon store management service provider in India, offering seamless lifecycle integration for large, medium, and small companies\./,
    `{amazonIntro.desc || "Making a powerful presence on Amazon requires deep knowledge of the eCommerce sector. Recenturesoft is a well-known Amazon store management service provider in India, offering seamless lifecycle integration for large, medium, and small companies."}`
);

// Services Section
content = content.replace(
    /Our Wide Range of Amazon Services/,
    `{amazonServices.title || "Our Wide Range of Amazon Services"}`
);

content = content.replace(
    /<h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service\.title}<\/h4>/,
    `<h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{amazonServices.cards?.[index]?.title || service.title}</h4>`
);

content = content.replace(
    /<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service\.desc}<\/p>/,
    `<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{amazonServices.cards?.[index]?.desc || service.desc}</p>`
);

// Process Section
content = content.replace(
    /Amazon Store Management Process/,
    `{amazonProcess.title || "Amazon Store Management Process"}`
);

content = content.replace(
    /Analysis & Roadmap/,
    `{amazonProcess.step1Title || "Analysis & Roadmap"}`
);
content = content.replace(
    /We sit down with you to know your vision for your online store\. After analyzing your business, we create a roadmap and mark milestones to ensure our team delivers the project right on time\./,
    `{amazonProcess.step1Desc || "We sit down with you to know your vision for your online store. After analyzing your business, we create a roadmap and mark milestones to ensure our team delivers the project right on time."}`
);

content = content.replace(
    /Launch & Support/,
    `{amazonProcess.step2Title || "Launch & Support"}`
);
content = content.replace(
    /Once all steps are completed, we ensure all products are listed and perfectly integrated\. We continue to offer 24\/7 support and maintenance to ensure your platform performs beautifully at all times\./,
    `{amazonProcess.step2Desc || "Once all steps are completed, we ensure all products are listed and perfectly integrated. We continue to offer 24/7 support and maintenance to ensure your platform performs beautifully at all times."}`
);

content = content.replace(
    /Our Development Checklist/,
    `{amazonProcess.checklistTitle || "Our Development Checklist"}`
);

// Process Steps Array logic
content = content.replace(
    /const processSteps = \[/,
    `const processSteps = amazonProcess.checklistItems && amazonProcess.checklistItems.length > 0 ? amazonProcess.checklistItems : [`
);
// Make sure to only replace the first occurrence (which is the declaration).
// Wait, the declaration of processSteps is an array. If we replace `const processSteps = [` with `const processSteps = amazonProcess.checklistItems && amazonProcess.checklistItems.length > 0 ? amazonProcess.checklistItems : [` we must also add `];` at the end... but it's an array literal that ends with `];`.
// It's safer to replace where `processSteps.map` is used:
content = content.replace(
    /processSteps\.map\(\(step, i\)/,
    `(amazonProcess.checklistItems?.length > 0 ? amazonProcess.checklistItems : processSteps).map((step, i)`
);

// Benefits Section
content = content.replace(
    /Benefits Of Professional Management/,
    `{amazonBenefits.title || "Benefits Of Professional Management"}`
);

content = content.replace(
    /<h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{benefit\.title}<\/h4>/,
    `<h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{amazonBenefits.cards?.[i]?.title || benefit.title}</h4>`
);

content = content.replace(
    /<p className="text-slate-600 dark:text-slate-400 text-sm">{benefit\.desc}<\/p>/,
    `<p className="text-slate-600 dark:text-slate-400 text-sm">{amazonBenefits.cards?.[i]?.desc || benefit.desc}</p>`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated AmazonStoreContent successfully!");
