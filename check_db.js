import mongoose from 'mongoose';
import WebPage from './models/WebPage.js';

async function run() {
    await mongoose.connect('mongodb://127.0.0.1:27017/recenturesoft');
    const page = await WebPage.findOne({ path: '/finance' }).lean();
    console.log(JSON.stringify(page, null, 2));
    process.exit(0);
}

run();
