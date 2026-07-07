const fs = require('fs');

const files = [
    'components/ai-development/AIDevelopmentContent.jsx',
    'components/ai-chatbot/AIChatbotContent.jsx',
    'components/rag-development/RAGDevelopmentContent.jsx',
    'components/generative-ai/GenerativeAIContent.jsx',
    'components/ai-services/AIServicesContent.jsx'
];

for (const file of files) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        // Replace `priority />` or `priority={true} />` with `priority loading="eager" />`
        content = content.replace(/priority(={true})?\s*\/?\s*>/g, 'priority loading="eager" />');
        
        // Also just in case, add it to hero_rag.webp specifically if it doesn't have it
        if (content.includes('hero_rag.webp') && !content.includes('loading="eager"')) {
            content = content.replace(/hero_rag\.webp.*?priority/, 'hero_rag.webp" priority loading="eager"');
        }

        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
}
