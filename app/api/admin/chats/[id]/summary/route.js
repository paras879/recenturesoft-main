import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Chat from "@/models/Chat";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function GET(req, { params }) {
    try {
        await connectDB();
        
        // In Next.js 15+, params is a Promise
        const { id } = await params;
        
        const chat = await Chat.findById(id);

        if (!chat) {
            return NextResponse.json({ error: "Chat not found" }, { status: 404 });
        }

        const transcript = chat.messages.map(m => `${m.role === 'user' ? 'Visitor' : 'AI'}: ${m.content}`).join("\n");

        const prompt = `
Extract the following information from the chat transcript.
Format exactly as shown below, omitting anything that is not present. Do not add conversational filler.

Name: [Extract Name or Unknown]
Project Type: [Extract Project Type or Unknown]
Target Platform: [Extract Target Platform or Unknown]
Core Features (MVP): [Extract Features or Unknown]
Budget: [Extract Budget or Unknown]
Timeline: [Extract Timeline or Unknown]

Chat Transcript:
${transcript}
`;

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
        const result = await model.generateContent(prompt);
        const text = result.response.text();

        const response = new NextResponse(text);
        response.headers.set("Content-Type", "text/plain");
        response.headers.set("Content-Disposition", `attachment; filename="chat_summary_${chat.sessionId.substring(0,8)}.txt"`);
        
        return response;
    } catch (error) {
        console.error("Summary export error:", error);
        return NextResponse.json({ error: "Failed to generate summary" }, { status: 500 });
    }
}
