const fs = require('fs');
const path = require('path');

const mappings = [
    {
        file: 'components/ai-chatbot/AIChatbotContent.jsx',
        images: [
            '/images/ai-chatbot/hero_ai_chatbot.webp',
            '/images/ai-chatbot/about_ai_chatbot.webp',
            '/images/ai-chatbot/features_chatbot_dashboard.webp',
            '/images/ai-chatbot/use_cases_business_dashboard.webp',
            '/images/ai-chatbot/why_choose_chatbot_team.webp',
            '/images/ai-chatbot/cta_ai_chatbot_office.webp',
            '/images/ai-development/solutions_ai_analytics.webp'
        ]
    },
    {
        file: 'components/rag-development/RAGDevelopmentContent.jsx',
        images: [
            '/images/rag-development/hero_rag.webp',
            '/images/rag-development/about_rag.webp',
            '/images/rag-development/dashboard_rag.webp',
            '/images/rag-development/team_rag.webp',
            '/images/rag-development/usecases_rag.webp',
            '/images/rag-development/cta_rag.webp',
            '/images/ai-development/case_study_enterprise.webp'
        ]
    },
    {
        file: 'components/ai-services/AIServicesContent.jsx',
        images: [
            '/images/ai-services/hero_ai_consulting.webp',
            '/images/ai-services/about_ai_consulting.webp',
            '/images/ai-services/case_study_healthcare.webp',
            '/images/ai-services/case_study_support.webp',
            '/images/ai-services/case_study_document.webp',
            '/images/ai-services/why_choose_handshake.webp',
            '/images/ai-services/cta_ai_office.webp'
        ]
    },
    {
        file: 'components/ai-development/AIDevelopmentContent.jsx',
        images: [
            '/images/ai-development/hero_ai_development.webp',
            '/images/ai-development/about_ai_development.webp',
            '/images/ai-development/projects_ai_dashboard.webp',
            '/images/ai-development/case_study_document.webp',
            '/images/ai-development/case_study_support.webp',
            '/images/ai-development/why_choose_ai_team.webp',
            '/images/ai-development/cta_ai_control_room.webp'
        ]
    },
    {
        file: 'components/generative-ai/GenerativeAIContent.jsx',
        images: [
            '/images/generative-ai/hero_generative.webp',
            '/images/generative-ai/about_generative.webp',
            '/images/ai-development/hero_ai_illustration.webp',
            '/images/ai-development/about_ai_collaboration.webp',
            '/images/ai-development/media_.webp',
            '/images/ai-development/hero_ai_consulting.webp',
            '/images/ai-development/about_ai_consulting.webp'
        ]
    }
];

function processFile(item) {
    const filePath = path.join(__dirname, item.file);
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    let imgCounter = 0;
    
    const newContent = content.replace(/src="\/images\/[^"]+\.webp"/g, (match) => {
        const replacement = item.images[imgCounter] || item.images[0]; // fallback to 1st if missing
        imgCounter++;
        return `src="${replacement}"`;
    });

    fs.writeFileSync(filePath, newContent);
    console.log(`Updated images in ${filePath}`);
}

mappings.forEach(processFile);
