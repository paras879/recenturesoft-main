const fs = require('fs');
const path = require('path');

const files = [
    'components/ai-chatbot/AIChatbotContent.jsx',
    'components/rag-development/RAGDevelopmentContent.jsx',
    'components/ai-services/AIServicesContent.jsx',
    'components/ai-development/AIDevelopmentContent.jsx',
    'components/generative-ai/GenerativeAIContent.jsx'
];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Fix Hero image height (was aspect-square, making it huge on mobile)
    content = content.replace(/aspect-square relative rounded-\[40px\]/g, 'relative h-[250px] md:h-[450px] lg:h-[600px] rounded-[40px] mt-8 lg:mt-12');
    
    // 2. Fix About image height (was h-[600px] fixed)
    content = content.replace(/relative h-\[600px\] rounded-\[32px\]/g, 'relative h-[250px] md:h-[400px] lg:h-[600px] rounded-[32px]');
    
    // 3. Fix typography
    content = content.replace(/text-5xl lg:text-7xl/g, 'text-4xl lg:text-7xl');
    content = content.replace(/text-4xl lg:text-5xl/g, 'text-3xl lg:text-5xl');
    
    // 4. Fix padding
    content = content.replace(/py-20 lg:py-32/g, 'py-12 lg:py-24');

    fs.writeFileSync(filePath, content);
    console.log(`Optimized mobile layout in ${filePath}`);
}

files.forEach(file => {
    try {
        const fullPath = path.join(__dirname, file);
        if (fs.existsSync(fullPath)) {
            processFile(fullPath);
        }
    } catch (e) {
        console.error(`Error processing ${file}:`, e);
    }
});
