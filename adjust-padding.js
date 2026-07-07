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
        content = content.replace(/<section[^>]*>/g, (match) => {
            let newMatch = match.replace(/py-4/g, 'py-6');
            newMatch = newMatch.replace(/pb-4/g, 'pb-6');
            return newMatch;
        });
        
        fs.writeFileSync(file, content);
        console.log(`Updated paddings to 24px in ${file}`);
    }
}
