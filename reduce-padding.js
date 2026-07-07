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
        content = content.replace(/py-16 md:py-18/g, 'py-4');
        content = content.replace(/py-18 md:py-20/g, 'py-4');
        content = content.replace(/py-20 md:py-24/g, 'py-4');
        // Handle hero sections
        content = content.replace(/pt-32 pb-12 md:pb-16 lg:pt-48 lg:pb-32/g, 'pt-24 pb-4 lg:pt-32 lg:pb-4');
        content = content.replace(/pt-32 pb-16 md:pb-20 lg:pt-32 lg:pb-32/g, 'pt-24 pb-4 lg:pt-32 lg:pb-4');

        fs.writeFileSync(file, content);
        console.log(`Updated paddings in ${file}`);
    }
}
