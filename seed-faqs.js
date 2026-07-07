const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Manual dotenv parser
const envFile = fs.readFileSync(path.join(__dirname, '.env.local'), 'utf-8');
envFile.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valParts] = trimmed.split('=');
        if (key && valParts.length) {
            process.env[key.trim()] = valParts.join('=').trim().replace(/^['"]|['"]$/g, '');
        }
    }
});

const FAQSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    page: { type: String, default: "home", index: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

const FAQ = mongoose.models.FAQ || mongoose.model("FAQ", FAQSchema);

const pages = [
    { file: 'components/generative-ai/GenerativeAIContent.jsx', id: 'generative-ai' },
    { file: 'components/ai-services/AIServicesContent.jsx', id: 'ai-services' },
    { file: 'components/ai-development/AIDevelopmentContent.jsx', id: 'ai-agent-development' },
    { file: 'components/ai-chatbot/AIChatbotContent.jsx', id: 'ai-chatbot-development' },
    { file: 'components/rag-development/RAGDevelopmentContent.jsx', id: 'rag-development' },
];

async function seed() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB.");

        for (const p of pages) {
            const filePath = path.join(__dirname, p.file);
            const content = fs.readFileSync(filePath, 'utf-8');
            
            // Allow quotes or no quotes in keys since it's hardcoded JS object format: { q: '...', a: "..." }
            // The regex needs to be more robust. Let's look for q: '...' or q: "..."
            const regex = /q:\s*(['"])(.*?)\1,\s*a:\s*(['"])(.*?)\3/gs;
            let match;
            let count = 0;
            
            while ((match = regex.exec(content)) !== null) {
                const question = match[2].replace(/\\'/g, "'").replace(/\\"/g, '"');
                const answer = match[4].replace(/\\'/g, "'").replace(/\\"/g, '"');
                
                const exists = await FAQ.findOne({ question, page: p.id });
                if (!exists) {
                    await FAQ.create({
                        question,
                        answer,
                        page: p.id,
                        order: count,
                        isActive: true
                    });
                    console.log(`Inserted: [${p.id}] ${question}`);
                }
                count++;
            }
            console.log(`Found ${count} FAQs for ${p.id}`);
        }
        
        console.log("Done seeding FAQs.");
        process.exit(0);
    } catch (e) {
        console.error("Error:", e);
        process.exit(1);
    }
}

seed();
