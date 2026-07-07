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
        
        // 1. Remove Industries section
        const sectionRegex = /<section[\s\S]*?<\/section>/g;
        content = content.replace(sectionRegex, (match) => {
            if (match.includes('>Industries We Serve<') || match.includes('Industries We Serve</h2>')) {
                console.log(`Removing Industries section from ${file}`);
                return ''; // Remove it
            }
            return match; 
        });
        content = content.replace(/\{\/\*.*?INDUSTRIES.*?\*\/\}/gi, '');

        // 2. Tweak Business Challenges We Solve width
        if (content.includes('Business Challenges We Solve')) {
            // Convert grid lg:grid-cols-2 to grid lg:grid-cols-12
            const gridRegex = /<div className="grid lg:grid-cols-2 gap-16 items-center">\s*<motion\.div\s*initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}\s*>/;
            
            content = content.replace(gridRegex, 
`<div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="lg:col-span-5"
                        >`
            );
            
            const rightGridRegex = /<motion\.div \s*initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}\s*className="relative h-\[800px\]/;
            
            content = content.replace(rightGridRegex, 
`<motion.div 
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="lg:col-span-7 relative h-[800px]`
            );
            
            console.log(`Tweaked Business Challenges layout in ${file}`);
        }
        
        fs.writeFileSync(file, content);
    }
}
