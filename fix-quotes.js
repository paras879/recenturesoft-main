const fs = require('fs');
const files = [
    'components/ai-development/AIDevelopmentContent.jsx',
    'components/ai-chatbot/AIChatbotContent.jsx',
    'components/rag-development/RAGDevelopmentContent.jsx'
];
for (const f of files) {
    let c = fs.readFileSync(f, 'utf8');
    if (c.startsWith('"') && c.endsWith('"')) {
        c = JSON.parse(c);
        fs.writeFileSync(f, c);
        console.log('Fixed ' + f);
    }
}
