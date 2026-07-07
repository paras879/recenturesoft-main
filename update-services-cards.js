const fs = require('fs');

const files = [
    'components/ai-development/AIDevelopmentContent.jsx',
    'components/ai-chatbot/AIChatbotContent.jsx',
    'components/rag-development/RAGDevelopmentContent.jsx',
    'components/ai-services/AIServicesContent.jsx',
    'components/generative-ai/GenerativeAIContent.jsx'
];

for (const file of files) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // 1. Remove Comprehensive description
        content = content.replace(/<p className="text-lg text-slate-600 dark:text-slate-400">Comprehensive[\s\S]*?<\/p>/g, '');
        
        // 2. Reduce card padding
        content = content.replace(/className="group relative p-8 /g, 'className="group relative p-6 ');
        
        // 3. Align icon and title
        const oldHeaderRegex = /<div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900\/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">\s*<Icon className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" \/>\s*<\/div>\s*<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">\{service\.title\}<\/h3>/g;
        
        const newHeader = `<div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                                            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                    </div>`;
                                    
        content = content.replace(oldHeaderRegex, newHeader);

        fs.writeFileSync(file, content);
        console.log(`Updated services layout in ${file}`);
    }
}
