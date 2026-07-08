const fs = require('fs');
const path = require('path');

const files = [
    'components/ai-chatbot/AIChatbotContent.jsx',
    'components/rag-development/RAGDevelopmentContent.jsx',
    'components/ai-services/AIServicesContent.jsx',
    'components/ai-development/AIDevelopmentContent.jsx',
    'components/generative-ai/GenerativeAIContent.jsx'
];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Fix Hero Buttons Container
    content = content.replace(/<div className="flex flex-wrap items-center gap-4">/g, 
        '<div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full sm:w-auto">');
        
    // Fix individual hero buttons
    content = content.replace(/className="px-8 py-4 bg-gradient-to-r ([^"]+)"/g, 
        'className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg bg-gradient-to-r $1"');
    content = content.replace(/className="px-8 py-4 bg-white ([^"]+)"/g, 
        'className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg bg-white $1"');
    content = content.replace(/className="px-8 py-4 bg-slate-900 ([^"]+)"/g, // Just in case some use dark primary
        'className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg bg-slate-900 $1"');

    // 2. Fix Tech Stack Buttons / Badges
    content = content.replace(/className="flex flex-wrap justify-center gap-6"/g, 
        'className="flex flex-wrap justify-center gap-3 md:gap-6"');
    content = content.replace(/className="px-6 py-4 bg-white/g, 
        'className="px-4 py-2 md:px-6 md:py-4 bg-white');
    content = content.replace(/<span className="font-semibold text-slate-700/g, 
        '<span className="text-sm md:text-base font-semibold text-slate-700');

    // 3. Hide excessive cards on mobile (4th onwards)
    // Find grid containers that have 3 columns on desktop and 1 on mobile
    content = content.replace(/className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"/g, 
        'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 [&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:flex"');
    
    // Some grids might just be gap-6
    content = content.replace(/className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"/g, 
        'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:flex"');
        
    // Reduce Hero Paragraph size on mobile
    content = content.replace(/className="text-lg md:text-xl text-slate-600/g, 
        'className="text-base md:text-xl text-slate-600');

    fs.writeFileSync(filePath, content);
    console.log(`Fixed buttons and mobile content length in ${filePath}`);
}

files.forEach(file => {
    try {
        const fullPath = path.join(__dirname, file);
        if (fs.existsSync(fullPath)) {
            processFile(fullPath);
        }
    } catch (e) {
        console.error(`Error processing ${file}:`, e);
    }
});
