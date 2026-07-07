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
        
        if (content.includes('Business Challenges We Solve')) {
            // 1. Change items-center to items-start in the grid
            content = content.replace(
                /<div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">/,
                '<div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">'
            );

            // 2. Add lg:mt-24 to the image container
            content = content.replace(
                /className="lg:col-span-7 relative h-\[800px\]/g,
                'className="lg:col-span-7 relative h-[800px] lg:mt-[100px]'
            );

            // 3. Make heading one line and adjust font size
            content = content.replace(
                /<h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">\s*Business Challenges We Solve/g,
                '<h2 className="text-3xl lg:text-3xl xl:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight lg:whitespace-nowrap">\n                                Business Challenges We Solve'
            );
            
            console.log(`Tweaked Business Challenges layout in ${file}`);
        }
        
        fs.writeFileSync(file, content);
    }
}
