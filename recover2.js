const fs = require('fs');
const path = require('path');
const transcriptPath = "C:\\Users\\Paras Tomar\\.gemini\\antigravity-ide\\brain\\8e1d8df3-27cc-4922-977d-fd0c8663ca78\\.system_generated\\logs\\transcript.jsonl";

const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

let aiDev = null;
let aiChat = null;
let ragDev = null;

for (const line of lines) {
    if (!line.trim()) continue;
    try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
            for (const call of obj.tool_calls) {
                if (call.name === "write_to_file") {
                    const args = typeof call.args === 'string' ? JSON.parse(call.args) : call.args;
                    const target = args.TargetFile || "";
                    let content = args.CodeContent || "";
                    
                    if (typeof content === 'string') {
                         try {
                             if (content.startsWith('"') && content.endsWith('"')) {
                                 content = JSON.parse(content);
                             }
                         } catch (e) {}
                    }

                    if (target.includes("AIDevelopmentContent.jsx")) {
                        aiDev = content;
                    }
                    if (target.includes("AIChatbotContent.jsx")) {
                        aiChat = content;
                    }
                    if (target.includes("RAGDevelopmentContent.jsx")) {
                        ragDev = content;
                    }
                }
            }
        }
    } catch (e) {
    }
}

if (aiDev) fs.writeFileSync("c:\\Users\\Paras Tomar\\OneDrive\\Desktop\\RecentureSoft\\components\\ai-development\\AIDevelopmentContent.jsx", aiDev);
if (aiChat) fs.writeFileSync("c:\\Users\\Paras Tomar\\OneDrive\\Desktop\\RecentureSoft\\components\\ai-chatbot\\AIChatbotContent.jsx", aiChat);
if (ragDev) fs.writeFileSync("c:\\Users\\Paras Tomar\\OneDrive\\Desktop\\RecentureSoft\\components\\rag-development\\RAGDevelopmentContent.jsx", ragDev);

console.log("Recovered AI Dev: " + !!aiDev);
console.log("Recovered AI Chat: " + !!aiChat);
console.log("Recovered RAG Dev: " + !!ragDev);
