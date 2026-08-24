require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');

async function fix() {
    await mongoose.connect(process.env.MONGODB_URI);
    const db = mongoose.connection;
    
    const page = await db.collection('webpages').findOne({ path: '/automobile' });
    console.log('Page Category before:', page.category);
    
    // Make sure it is lowercase 'industries'
    if (page.category !== 'industries' && page.category !== 'Industries') {
        console.log('Fixing category...');
        await db.collection('webpages').updateOne({ path: '/automobile' }, { $set: { category: 'industries' } });
        console.log('Fixed page category');
    }

    const blocks = await db.collection('globalblocks').find({ name: 'Industries' }).toArray();
    for (const b of blocks) {
        console.log('Block targetCategory before:', b.targetCategory);
        if (b.targetCategory === 'Industries') {
            await db.collection('globalblocks').updateOne({ _id: b._id }, { $set: { targetCategory: 'industries' } });
            console.log('Fixed block targetCategory');
        }
    }
    
    process.exit(0);
}
fix().catch(console.error);
