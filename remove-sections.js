const fs = require('fs');
const path = require('path');

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
        
        // Match each <section ... </section> block
        // Since sections are not nested, this regex works perfectly.
        const sectionRegex = /<section[\s\S]*?<\/section>/g;
        
        content = content.replace(sectionRegex, (match) => {
            // Check if the section contains the target headings
            if (match.includes('Process</h2>') || match.includes('Client Testimonials</h2>')) {
                console.log(`Removing section from ${file}`);
                return ''; // Remove it
            }
            return match; // Keep it
        });

        // Also remove the comments for cleanliness
        content = content.replace(/\{\/\*.*?PROCESS.*?\*\/\}/gi, '');
        content = content.replace(/\{\/\*.*?TESTIMONIALS.*?\*\/\}/gi, '');

        fs.writeFileSync(file, content);
    }
}
console.log('Done.');
