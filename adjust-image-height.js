const fs = require('fs');

const files = [
    'components/ai-development/AIDevelopmentContent.jsx',
    'components/ai-chatbot/AIChatbotContent.jsx',
    'components/rag-development/RAGDevelopmentContent.jsx',
    'components/ai-services/AIServicesContent.jsx'
];

for (const file of files) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // 1. Add 'Decision Support Systems' back to the list
        const targetStr = "{ title: 'Enterprise AI Adoption', icon: Building2 },";
        if (content.includes(targetStr) && !content.includes('Decision Support Systems')) {
            content = content.replace(
                targetStr,
                targetStr + "\n                                    { title: 'Decision Support Systems', icon: Target },"
            );
        }

        // 2. Change h-[800px] to h-[640px] for the image container to match the 7 items exactly
        content = content.replace(/h-\[800px\]/g, 'h-[640px]');
        
        fs.writeFileSync(file, content);
        console.log(`Updated layout in ${file}`);
    }
}
