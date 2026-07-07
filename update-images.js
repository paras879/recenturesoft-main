const fs = require('fs');

function replaceInFile(file, replacements) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [key, value] of Object.entries(replacements)) {
        content = content.split(key).join(value);
    }
    fs.writeFileSync(file, content);
    console.log(`Updated images in ${file}`);
}

// 1. AI Development
replaceInFile('components/ai-development/AIDevelopmentContent.jsx', {
    '/images/ai-services/hero_ai_consulting.webp': '/images/ai-development/hero_ai_development.webp',
    '/images/ai-services/about_ai_consulting.webp': '/images/ai-development/about_ai_development.webp',
    '/images/ai-services/solutions_ai_analytics.webp': '/images/ai-development/solutions_ai_analytics.webp',
    '/images/ai-services/why_choose_handshake.webp': '/images/ai-development/why_choose_ai_team.webp',
    '/images/ai-services/case_study_healthcare.webp': '/images/ai-development/case_study_healthcare.webp',
    '/images/ai-services/case_study_enterprise.webp': '/images/ai-development/case_study_enterprise.webp',
    '/images/ai-services/case_study_support.webp': '/images/ai-development/case_study_document.webp',
    '/images/ai-services/cta_ai_office.webp': '/images/ai-development/cta_ai_control_room.webp',
});

// 2. AI Chatbot
replaceInFile('components/ai-chatbot/AIChatbotContent.jsx', {
    '/images/ai-services/hero_ai_consulting.webp': '/images/ai-chatbot/hero_ai_chatbot.webp',
    '/images/ai-services/about_ai_consulting.webp': '/images/ai-chatbot/about_ai_chatbot.webp',
    '/images/ai-services/solutions_ai_analytics.webp': '/images/ai-chatbot/use_cases_business_dashboard.webp',
    '/images/ai-services/why_choose_handshake.webp': '/images/ai-chatbot/why_choose_chatbot_team.webp',
    '/images/ai-services/case_study_healthcare.webp': '/images/ai-chatbot/hero_ai_chatbot.webp',
    '/images/ai-services/case_study_enterprise.webp': '/images/ai-chatbot/about_ai_chatbot.webp',
    '/images/ai-services/case_study_support.webp': '/images/ai-chatbot/features_chatbot_dashboard.webp',
    '/images/ai-services/cta_ai_office.webp': '/images/ai-chatbot/cta_ai_chatbot_office.webp',
});

// 3. RAG Development
replaceInFile('components/rag-development/RAGDevelopmentContent.jsx', {
    '/images/ai-services/hero_ai_consulting.webp': '/images/rag-development/hero_rag.webp',
    '/images/ai-services/about_ai_consulting.webp': '/images/rag-development/about_rag.webp',
    '/images/ai-services/solutions_ai_analytics.webp': '/images/rag-development/usecases_rag.webp',
    '/images/ai-services/why_choose_handshake.webp': '/images/rag-development/team_rag.webp',
    '/images/ai-services/case_study_healthcare.webp': '/images/rag-development/hero_rag.webp',
    '/images/ai-services/case_study_enterprise.webp': '/images/rag-development/dashboard_rag.webp',
    '/images/ai-services/case_study_support.webp': '/images/rag-development/usecases_rag.webp',
    '/images/ai-services/cta_ai_office.webp': '/images/rag-development/cta_rag.webp',
});
