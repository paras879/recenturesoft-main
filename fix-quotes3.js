const fs = require('fs');
const files = [
    'components/ai-development/AIDevelopmentContent.jsx',
    'components/ai-chatbot/AIChatbotContent.jsx',
    'components/rag-development/RAGDevelopmentContent.jsx'
];
for (const f of files) {
    let c = fs.readFileSync(f, 'utf8');
    if (c.startsWith('"')) {
        c = c.slice(1);
    }
    if (c.endsWith('"')) {
        c = c.slice(0, -1);
    } else if (c.endsWith('"\n')) {
        c = c.slice(0, -2) + '\n';
    }
    c = c.replace(/\\n/g, '\n').replace(/\\"/g, '"');
    fs.writeFileSync(f, c);
    console.log('Fixed regex ' + f);
}
