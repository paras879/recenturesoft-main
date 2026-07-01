const fs = require('fs');
const mongoose = require("mongoose");

const env = fs.readFileSync(".env.local", "utf-8");
const uriMatch = env.match(/MONGODB_URI=(.*)/);
const uri = uriMatch ? uriMatch[1].trim() : null;

async function fixDB() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");

        const contactPages = await mongoose.connection.collection("webpages").find({ path: "/contact" }).toArray();
        console.log("Contact Pages:", contactPages);
    } catch (e) {
        console.error("Error:", e);
    } finally {
        await mongoose.disconnect();
    }
}

fixDB();
