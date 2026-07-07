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
        
        // Target the last two items in the array map for the "Business Challenges We Solve" list
        // { title: 'AI Risk Assessment', icon: Shield },
        // { title: 'Innovation Strategy', icon: Brain },
        
        content = content.replace(/\s*\{\s*title:\s*'AI Risk Assessment',\s*icon:\s*Shield\s*\},/g, '');
        content = content.replace(/\s*\{\s*title:\s*'Innovation Strategy',\s*icon:\s*Brain\s*\},/g, '');
        content = content.replace(/\s*\{\s*title:\s*'Decision Support Systems',\s*icon:\s*Target\s*\},/g, '');

        fs.writeFileSync(file, content);
        console.log(`Removed list items from ${file}`);
    }
}
