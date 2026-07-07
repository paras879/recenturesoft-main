const fs = require('fs');
const path = require('path');

const files = [
    'components/ai-development/AIDevelopmentContent.jsx',
    'components/ai-chatbot/AIChatbotContent.jsx',
    'components/rag-development/RAGDevelopmentContent.jsx'
];

for (const file of files) {
    const fullPath = path.join(__dirname, file);
    let content = fs.readFileSync(fullPath, 'utf8');

    // 1. Replace signature: const ComponentName = () => { to const ComponentName = ({ faqs = [] }) => {
    // We can use a regex that looks for const SomeContent = () => {
    content = content.replace(/(const \w+Content = )\(\) => \{/, '$1({ faqs = [] }) => {');

    // 2. Replace the hardcoded FAQ array mapping:
    // {[\s*\{ q: '...', a: '...' \},\s*...].map((faq, idx) => (
    // We will replace `{[...].map((faq, idx) => (` with `{faqs.map((faq, idx) => (`
    content = content.replace(/\{\s*\[[\s\S]*?\]\.map\(\(faq,\s*idx\)\s*=>\s*\(/g, '{faqs.map((faq, idx) => (');

    // 3. Replace {faq.q} with {faq.question}
    content = content.replace(/\{faq\.q\}/g, '{faq.question}');

    // 4. Replace {faq.a} with {faq.answer}
    content = content.replace(/\{faq\.a\}/g, '{faq.answer}');

    fs.writeFileSync(fullPath, content);
    console.log(`Refactored ${file}`);
}
