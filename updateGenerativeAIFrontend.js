const fs = require('fs');
const path = require('path');

const filePath = "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/generative-ai/GenerativeAIContent.jsx";
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update component signature
content = content.replace(
    /const GenerativeAIContent = \(\{ faqs = \[\] \}\) => \{/,
    `const GenerativeAIContent = ({ faqs = [], dynamicData = {} }) => {\n    const { genAiHero = {}, genAiTechLogos = {}, genAiAbout = {}, genAiServices = {}, genAiSolutions = {}, genAiTechStack = {}, genAiWhyChoose = {}, genAiCaseStudies = {}, genAiCTA = {} } = dynamicData;`
);

// 2. Hero Section
content = content.replace(
    /Generative AI <br className="hidden md:block" \/>\s*<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">\s*Development Services\s*<\/span>/,
    `{genAiHero.title || "Generative AI"} <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    {genAiHero.titleHighlight || "Development Services"}
                                </span>`
);
content = content.replace(
    /Build intelligent AI-powered applications using GPT, Claude, Gemini, and custom Large Language Models to automate workflows, enhance customer experiences, and drive business growth\./,
    `{genAiHero.description || "Build intelligent AI-powered applications using GPT, Claude, Gemini, and custom Large Language Models to automate workflows, enhance customer experiences, and drive business growth."}`
);
content = content.replace(
    /Get Free Consultation/,
    `{genAiHero.primaryBtnText || "Get Free Consultation"}`
);
content = content.replace(
    /Talk to Experts/,
    `{genAiHero.secondaryBtnText || "Talk to Experts"}`
);
content = content.replace(
    /<Image src="\/images\/generative-ai\/hero_ai_illustration\.png" alt="Generative AI Hero" fill sizes="\(max-width: 768px\) 100vw, 50vw" className="object-cover z-10 transition-transform duration-700 group-hover:scale-105" priority loading="eager" \/>/,
    `<Image src={genAiHero.image || "/images/generative-ai/hero_ai_illustration.png"} alt="Generative AI Hero" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover z-10 transition-transform duration-700 group-hover:scale-105" priority loading="eager" />`
);

// 3. Technologies Section
content = content.replace(
    /<h2 className="text-3xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">Technologies We Work With<\/h2>/,
    `<h2 className="text-3xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{genAiTechLogos.title || "Technologies We Work With"}</h2>`
);
content = content.replace(
    /\{(?:\[.*\])\.map\(\(tech, idx\) => \(/,
    `{(genAiTechLogos.tags?.length > 0 ? genAiTechLogos.tags : ['OpenAI', 'Claude', 'Gemini', 'Llama', 'Microsoft Azure AI', 'AWS AI', 'Google Cloud AI', 'LangChain', 'Pinecone', 'ChromaDB', 'FastAPI', 'Python', 'Node.js', 'Next.js', 'React', 'Docker']).map((tech, idx) => (`
);

// 4. About Generative AI
content = content.replace(
    /<Image src="\/images\/generative-ai\/about_ai_collaboration\.png" alt="Human AI Collaboration" fill sizes="\(max-width: 768px\) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" \/>/,
    `<Image src={genAiAbout.image || "/images/generative-ai/about_ai_collaboration.png"} alt="Human AI Collaboration" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />`
);
content = content.replace(
    /What is Generative AI\?/,
    `{genAiAbout.heading || "What is Generative AI?"}`
);
content = content.replace(
    /Generative AI enables businesses to create intelligent applications capable of generating text, images, code, documents, reports, recommendations, and business insights using advanced Large Language Models\./,
    `{genAiAbout.desc1 || "Generative AI enables businesses to create intelligent applications capable of generating text, images, code, documents, reports, recommendations, and business insights using advanced Large Language Models."}`
);
content = content.replace(
    /RecentureSoft helps organizations integrate secure and scalable AI solutions that improve productivity, automate repetitive work, reduce operational costs, and enhance customer experiences\./,
    `{genAiAbout.desc2 || "RecentureSoft helps organizations integrate secure and scalable AI solutions that improve productivity, automate repetitive work, reduce operational costs, and enhance customer experiences."}`
);
content = content.replace(
    /\{\[\s*\{ stat: '95%', label: 'Automation Accuracy' \},\s*\{ stat: '70%', label: 'Operational Cost Reduction' \},\s*\{ stat: '24\/7', label: 'AI Assistance' \},\s*\{ stat: '10x', label: 'Productivity' \}\s*\]\.map\(\(item, idx\) => \(/,
    `{(genAiAbout.stats?.length > 0 ? genAiAbout.stats : [\n                                    { stat: '95%', label: 'Automation Accuracy' },\n                                    { stat: '70%', label: 'Operational Cost Reduction' },\n                                    { stat: '24/7', label: 'AI Assistance' },\n                                    { stat: '10x', label: 'Productivity' }\n                                ]).map((item, idx) => (`
);

// 5. Our Generative AI Services
content = content.replace(
    /<h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">Our Generative AI Services<\/h2>/,
    `<h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{genAiServices.title || "Our Generative AI Services"}</h2>`
);
const servicesRegex = /\{\[[\s\S]*?\]\.map\(\(service, idx\) => \{/;
content = content.replace(
    servicesRegex,
    `{(genAiServices.cards?.length > 0 ? genAiServices.cards : [
                            { title: 'Custom GPT Development', icon: Brain, desc: 'Tailor-made GPT models trained on your business data for specific use cases and workflows.' },
                            { title: 'Custom AI Chatbot', icon: Bot, desc: 'Intelligent conversational agents that understand context and provide human-like customer support.' },
                            { title: 'Enterprise AI Solutions', icon: Building2, desc: 'Scalable and secure AI integrations for enterprise-level automation and intelligence.' },
                            { title: 'AI Copilot Development', icon: Cpu, desc: 'Context-aware AI assistants that work alongside your team to boost daily productivity.' },
                            { title: 'Document Intelligence', icon: FileText, desc: 'Automate data extraction, summarization, and analysis from complex business documents.' },
                            { title: 'AI Workflow Automation', icon: Zap, desc: 'Streamline repetitive tasks and complex processes with intelligent automation systems.' },
                            { title: 'Knowledge Base AI', icon: Database, desc: 'Transform your static documentation into an interactive, AI-powered knowledge repository.' },
                            { title: 'RAG Development', icon: Layers, desc: 'Retrieval-Augmented Generation systems for accurate, verifiable, and context-rich AI responses.' },
                        ]).map((service, idx) => {`
);
// We need to support custom image for services
content = content.replace(
    /<Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" \/>/,
    `{service.image ? <Image src={service.image} alt={service.title} fill className="object-cover p-2" /> : (Icon ? <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" /> : <Brain className="w-6 h-6 text-blue-600" />)}`
);
// Add relative/overflow-hidden to the icon container
content = content.replace(
    /<div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900\/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">/,
    `<div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 relative overflow-hidden">`
);

// 6. AI Solutions for Every Business
content = content.replace(
    /<h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">AI Solutions for Every Business<\/h2>/,
    `<h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{genAiSolutions.title || "AI Solutions for Every Business"}</h2>`
);
const solutionsRegex = /\{\[[\s\S]*?\]\.map\(\(solution, idx\) => \{/;
content = content.replace(
    solutionsRegex,
    `{(genAiSolutions.cards?.length > 0 ? genAiSolutions.cards : [
                            { title: 'AI Customer Support', icon: MessageSquare, color: 'from-blue-500 to-cyan-500' },
                            { title: 'AI Virtual Assistant', icon: Bot, color: 'from-purple-500 to-pink-500' },
                            { title: 'AI Document Analyzer', icon: FileText, color: 'from-emerald-500 to-teal-500' },
                            { title: 'AI Content Generator', icon: Code, color: 'from-orange-500 to-yellow-500' },
                            { title: 'Healthcare AI', icon: HeartPulse, color: 'from-red-500 to-rose-500' },
                            { title: 'Finance AI', icon: Landmark, color: 'from-blue-600 to-indigo-600' },
                            { title: 'HR AI Assistant', icon: Briefcase, color: 'from-violet-500 to-purple-500' },
                            { title: 'Legal AI', icon: Scale, color: 'from-slate-500 to-slate-700' },
                            { title: 'E-commerce AI Recommendation', icon: ShoppingBag, color: 'from-pink-500 to-rose-400' },
                        ]).map((solution, idx) => {`
);
// Support image/icon
content = content.replace(
    /<Icon className="w-6 h-6" \/>/,
    `{solution.image ? <Image src={solution.image} alt={solution.title} fill className="object-cover p-3" /> : (Icon ? <Icon className="w-6 h-6" /> : <Bot className="w-6 h-6" />)}`
);
// Add relative overflow-hidden to color box
content = content.replace(
    /<div className=\{\`w-14 h-14 rounded-xl bg-gradient-to-br \$\{solution\.color\} flex items-center justify-center flex-shrink-0 text-white shadow-inner group-hover:scale-110 transition-transform duration-300\`\}>/,
    `<div className={\`w-14 h-14 rounded-xl bg-gradient-to-br \${solution.color || 'from-blue-500 to-cyan-500'} flex items-center justify-center flex-shrink-0 text-white shadow-inner group-hover:scale-110 transition-transform duration-300 relative overflow-hidden\`}>`
);

// 7. Technology Stack
content = content.replace(
    /<h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">Technology Stack<\/h2>/,
    `<h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{genAiTechStack.title || "Technology Stack"}</h2>`
);
const techStackRegex = /\{\[[\s\S]*?\]\.map\(\(stack, idx\) => \(/;
content = content.replace(
    techStackRegex,
    `{(genAiTechStack.stacks?.length > 0 ? genAiTechStack.stacks : [
                            { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
                            { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI'] },
                            { category: 'AI Frameworks', items: ['LangChain', 'LlamaIndex', 'OpenAI API', 'Gemini API', 'Claude API'] },
                            { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Pinecone', 'ChromaDB'] },
                            { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Google Cloud', 'Docker'] },
                        ]).map((stack, idx) => (`
);
// Make sure tags are parsed properly if it's a string from Admin Panel
content = content.replace(
    /\{stack\.items\.map\(\(item, itemIdx\) => \(/,
    `{(Array.isArray(stack.items) ? stack.items : (stack.items || '').split(',').map(s => s.trim())).map((item, itemIdx) => (`
);

// 8. Why Choose RecentureSoft
content = content.replace(
    /<h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">Why Choose RecentureSoft<\/h2>/,
    `<h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{genAiWhyChoose.title || "Why Choose RecentureSoft"}</h2>`
);
const whyChooseRegex = /\{\[[\s\S]*?\]\.map\(\(reason, idx\) => \{/;
content = content.replace(
    whyChooseRegex,
    `{(genAiWhyChoose.cards?.length > 0 ? genAiWhyChoose.cards : [
                            { title: 'Experienced AI Engineers', desc: 'Top-tier talent with deep expertise in LLMs and machine learning architectures.', icon: Brain },
                            { title: 'Enterprise Security', desc: 'Bank-grade security protocols ensuring your sensitive data remains private and protected.', icon: Shield },
                            { title: 'Custom AI Solutions', desc: 'Bespoke development tailored precisely to your unique business requirements and goals.', icon: Code },
                            { title: 'Agile Development', desc: 'Iterative processes that ensure rapid delivery and flexibility to adapt to changes.', icon: Zap },
                            { title: '24/7 Support', desc: 'Round-the-clock maintenance and support to ensure your systems run flawlessly.', icon: MessageSquare },
                            { title: 'Scalable Architecture', desc: 'Future-proof solutions built to grow seamlessly alongside your enterprise.', icon: Layers },
                        ]).map((reason, idx) => {`
);
// Image support
content = content.replace(
    /<Icon className="w-7 h-7" \/>/,
    `{reason.image ? <Image src={reason.image} alt={reason.title} fill className="object-cover p-3" /> : (Icon ? <Icon className="w-7 h-7" /> : <Brain className="w-7 h-7" />)}`
);
content = content.replace(
    /<div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">/,
    `<div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative overflow-hidden">`
);

// 9. Case Studies
content = content.replace(
    /<h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">Success Stories<\/h2>/,
    `<h2 className="text-3xl md:text-4xl font-medium md:font-bold text-slate-900 dark:text-white mb-4">{genAiCaseStudies.title || "Success Stories"}</h2>`
);
content = content.replace(
    /<p className="text-lg text-slate-600 dark:text-slate-400">Real-world impact of our Generative AI solutions\.<\/p>/,
    `<p className="text-lg text-slate-600 dark:text-slate-400">{genAiCaseStudies.desc || "Real-world impact of our Generative AI solutions."}</p>`
);
const caseStudiesRegex = /\{\[[\s\S]*?\]\.map\(\(caseStudy, idx\) => \{/;
content = content.replace(
    caseStudiesRegex,
    `{(genAiCaseStudies.cards?.length > 0 ? genAiCaseStudies.cards : [
                            { title: 'AI Customer Support Platform', desc: 'Reduced support ticket resolution time by 75% while maintaining 98% CSAT scores using a custom fine-tuned LLM.', tech: 'GPT-4, Node.js, Pinecone', result: '75% Faster Resolution', image: '/images/generative-ai/case_study_support.png' },
                            { title: 'Document Intelligence System', desc: 'Automated legal contract analysis and data extraction, saving 40+ hours per week for the legal team.', tech: 'Claude 3, Python, FastAPI', result: '40hrs/week Saved', image: '/images/generative-ai/case_study_document.png' },
                            { title: 'Healthcare AI Assistant', desc: 'HIPAA-compliant AI diagnostic assistant that helps medical professionals quickly access patient history and research.', tech: 'Gemini, React, ChromaDB', result: '99.9% Uptime', image: '/images/generative-ai/case_study_healthcare.png' },
                        ]).map((caseStudy, idx) => {`
);

// 10. CTA
content = content.replace(
    /Ready to Build Your AI Solution\?/,
    `{genAiCTA.title || "Ready to Build Your AI Solution?"}`
);
content = content.replace(
    /Transform your business with enterprise-grade Generative AI applications developed by RecentureSoft\. Let's innovate together\./,
    `{genAiCTA.desc || "Transform your business with enterprise-grade Generative AI applications developed by RecentureSoft. Let's innovate together."}`
);
content = content.replace(
    /Schedule Consultation/,
    `{genAiCTA.primaryBtnText || "Schedule Consultation"}`
);
content = content.replace(
    /Contact Us/,
    `{genAiCTA.secondaryBtnText || "Contact Us"}`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("GenerativeAIContent.jsx updated!");
