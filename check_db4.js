const { MongoClient } = require('mongodb');
const MONGODB_URI = "mongodb+srv://parastomar851_db_user:India123@cluster0.uab9v6f.mongodb.net/contactdb?retryWrites=true&w=majority&appName=Cluster0";

async function run() {
    const client = new MongoClient(MONGODB_URI);
    try {
        await client.connect();
        const db = client.db();
        const page = await db.collection('webpages').findOne({ path: '/finance' });
        console.log(JSON.stringify(page.content, null, 2));
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
