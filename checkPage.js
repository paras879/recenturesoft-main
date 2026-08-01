import { connectDB } from "./lib/mongodb.js";
import mongoose from "mongoose";

async function check() {
    await connectDB();
    const db = mongoose.connection;
    const page = await db.collection("webpages").findOne({ path: "/finance" });
    console.log(JSON.stringify(page, null, 2));
    process.exit(0);
}
check();
