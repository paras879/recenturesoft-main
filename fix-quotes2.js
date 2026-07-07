const fs = require('fs');
const files = [
    'components/ai-development/AIDevelopmentContent.jsx',
    'components/ai-chatbot/AIChatbotContent.jsx',
    'components/rag-development/RAGDevelopmentContent.jsx'
];
for (const f of files) {
    let c = fs.readFileSync(f, 'utf8');
    try {
        let parsed = JSON.parse(c);
        if (typeof parsed === 'string') {
            fs.writeFileSync(f, parsed);
            console.log('Fixed ' + f);
        }
    } catch(e) {
        // In case there is trailing whitespace
        try {
            let parsed = JSON.parse(c.trim());
            if (typeof parsed === 'string') {
                fs.writeFileSync(f, parsed);
                console.log('Fixed (trimmed) ' + f);
            }
        } catch(e2) {
            console.error('Could not parse ' + f);
        }
    }
}
