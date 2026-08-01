const { MongoClient } = require('mongodb');
async function run() {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db = client.db('recenturesoft');
    const page = await db.collection('webpages').findOne({ path: '/finance' });
    console.log(JSON.stringify(page, null, 2));
    process.exit(0);
}
run().catch(console.dir);
