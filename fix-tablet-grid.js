const fs = require('fs');
const path = require('path');

const files = [
    'components/flutter/FlutterDevelopmentContent.jsx',
    'components/php/PHPDevelopmentContent.jsx',
    'components/javascript/JavaScriptDevelopmentContent.jsx',
    'components/python/PythonDevelopmentContent.jsx',
    'components/laravel/LaravelDevelopmentContent.jsx',
    'components/ai-chatbot/AIChatbotContent.jsx',
    'components/rag-development/RAGDevelopmentContent.jsx',
    'components/ai-services/AIServicesContent.jsx',
    'components/ai-development/AIDevelopmentContent.jsx',
    'components/generative-ai/GenerativeAIContent.jsx'
];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace `space-y-3` with `grid grid-cols-1 md:grid-cols-2 gap-3` where it's used for the list
    // Look for: className={`space-y-3 ${expandedGrids
    content = content.replace(/className=\{`space-y-3 \$\{expandedGrids/g, 'className={`grid grid-cols-1 md:grid-cols-2 gap-3 ${expandedGrids');

    fs.writeFileSync(filePath, content);
    console.log(`Updated grid layout in ${filePath}`);
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
