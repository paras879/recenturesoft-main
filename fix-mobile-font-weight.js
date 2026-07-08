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
    
    // Replace bare font-bold, font-extrabold, font-semibold
    // with font-medium md:font-bold, etc.
    // (?<![-:\w]) ensures we don't match md:font-bold or hover:font-bold
    
    content = content.replace(/(?<![-:\w])font-(bold|extrabold|semibold)\b/g, (match, weight) => {
        return `font-medium md:font-${weight}`;
    });

    fs.writeFileSync(filePath, content);
    console.log(`Updated mobile font weights in ${filePath}`);
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
