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
    
    // Fix grid containers to hide extra items on mobile
    content = content.replace(/className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"/g, 
        'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 [&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:flex"');

    content = content.replace(/className="grid lg:grid-cols-3 gap-8"/g, 
        'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 [&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:flex"');

    content = content.replace(/className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"/g, 
        'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 [&>*:nth-child(n+4)]:hidden md:[&>*:nth-child(n+4)]:flex"');

    fs.writeFileSync(filePath, content);
    console.log(`Updated grid layouts in ${filePath}`);
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
