const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'components/ai-services/AIServicesContent.jsx');
const template = fs.readFileSync(templatePath, 'utf8');

function generatePage(targetPath, replacements) {
    let content = template;
    for (const [key, value] of Object.entries(replacements)) {
        // Use a generic replace all for exact strings if needed, but since we are modifying the template,
        // it's easier to replace specific strings.
        content = content.split(key).join(value);
    }
    fs.writeFileSync(targetPath, content);
    console.log(`Generated ${targetPath}`);
}

// 1. AI Development
generatePage(
    path.join(__dirname, 'components/ai-development/AIDevelopmentContent.jsx'),
    {
        'AIServicesContent': 'AIDevelopmentContent',
        'AI Consulting <br className="hidden md:block" />': 'AI Development <br className="hidden md:block" />',
        'Empower your business with expert AI consulting services. We help organizations identify the right AI opportunities, create intelligent strategies, select the best technologies, and successfully implement AI solutions that drive measurable business growth.': 'Build intelligent AI-powered software solutions that automate processes, improve decision-making, and accelerate business growth with custom AI development tailored to your enterprise needs.',
        'hero_ai_consulting.webp': 'hero_ai_development.webp',
        'AI Consulting Meeting': 'AI Developer Working',
        'Why AI Consulting Matters': 'Empowering Businesses with Custom AI',
        'RecentureSoft helps businesses discover the right AI opportunities by analyzing existing workflows, identifying automation possibilities, selecting suitable AI models, and creating scalable implementation roadmaps.': 'At RecentureSoft, we don\'t just build AI; we architect intelligent systems that integrate seamlessly into your operations. From machine learning models to autonomous AI agents, we deliver secure, scalable, and high-performance solutions.',
        'Our AI Consulting Services': 'Our Core AI Services',
        'Comprehensive consulting services to transform your business strategy.': 'Comprehensive development services to transform your business strategy.',
        'AI Strategy Consulting': 'AI Agent Development',
        'AI Readiness Assessment': 'Custom Machine Learning',
        'Digital Transformation': 'Natural Language Processing',
        'Machine Learning Consulting': 'Computer Vision',
        'Generative AI Consulting': 'Generative AI Solutions',
        'LLM Consulting': 'AI Infrastructure Setup',
        'Consulting Process': 'Development Process',
        'Industries We Consult': 'Industries We Serve',
        'Consulting Case Studies': 'Development Case Studies',
        'Let\'s Build Your AI Strategy Together': 'Ready to Develop Your AI Solution?',
        'Speak with our AI consultants and discover how artificial intelligence can transform your business.': 'Contact our experts and accelerate your AI journey today.'
    }
);

// 2. AI Chatbot
generatePage(
    path.join(__dirname, 'components/ai-chatbot/AIChatbotContent.jsx'),
    {
        'AIServicesContent': 'AIChatbotContent',
        'AI Consulting <br className="hidden md:block" />': 'Enterprise AI <br className="hidden md:block" />\n                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">\n                                    Chatbot Development\n                                </span>',
        'Services\n                                </span>': '', // Because we included it above
        'Empower your business with expert AI consulting services. We help organizations identify the right AI opportunities, create intelligent strategies, select the best technologies, and successfully implement AI solutions that drive measurable business growth.': 'Enhance customer experience and automate support with intelligent, conversational AI chatbots powered by cutting-edge NLP and machine learning.',
        'Why AI Consulting Matters': 'Next-Generation Conversational AI',
        'RecentureSoft helps businesses discover the right AI opportunities by analyzing existing workflows, identifying automation possibilities, selecting suitable AI models, and creating scalable implementation roadmaps.': 'Our AI chatbots aren\'t just simple rule-based responders. We build advanced conversational agents capable of understanding context, sentiment, and user intent, providing highly personalized interactions across all your digital platforms.',
        'Our AI Consulting Services': 'Our Chatbot Services',
        'Comprehensive consulting services to transform your business strategy.': 'Advanced conversational AI to engage your customers 24/7.',
        'Consulting Process': 'Development Process',
        'Industries We Consult': 'Industries We Serve',
        'Consulting Case Studies': 'Chatbot Case Studies',
        'Let\'s Build Your AI Strategy Together': 'Ready to Build Your AI Chatbot?',
        'Speak with our AI consultants and discover how artificial intelligence can transform your business.': 'Contact our experts and deploy intelligent conversational AI today.'
    }
);

// 3. RAG Development
generatePage(
    path.join(__dirname, 'components/rag-development/RAGDevelopmentContent.jsx'),
    {
        'AIServicesContent': 'RAGDevelopmentContent',
        'AI Consulting <br className="hidden md:block" />': 'Enterprise RAG <br className="hidden md:block" />\n                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">\n                                    Development Services\n                                </span>',
        'Services\n                                </span>': '', // Handled above
        'Empower your business with expert AI consulting services. We help organizations identify the right AI opportunities, create intelligent strategies, select the best technologies, and successfully implement AI solutions that drive measurable business growth.': 'Build intelligent AI applications powered by Retrieval-Augmented Generation (RAG) that deliver accurate, context-aware, and secure responses using your organization\'s private knowledge base.',
        'Why AI Consulting Matters': 'Unlock Your Data with RAG',
        'RecentureSoft helps businesses discover the right AI opportunities by analyzing existing workflows, identifying automation possibilities, selecting suitable AI models, and creating scalable implementation roadmaps.': 'Generative AI is powerful, but it hallucinates without context. Retrieval-Augmented Generation (RAG) solves this by connecting LLMs directly to your private, enterprise data, ensuring every answer is factual, secure, and highly relevant.',
        'Our AI Consulting Services': 'Our RAG Solutions',
        'Comprehensive consulting services to transform your business strategy.': 'Custom RAG architectures tailored for enterprise knowledge bases.',
        'Consulting Process': 'Implementation Process',
        'Industries We Consult': 'Industries We Serve',
        'Consulting Case Studies': 'RAG Case Studies',
        'Let\'s Build Your AI Strategy Together': 'Implement Enterprise RAG Architecture',
        'Speak with our AI consultants and discover how artificial intelligence can transform your business.': 'Stop hallucinations and empower your AI with your company\'s knowledge.'
    }
);
