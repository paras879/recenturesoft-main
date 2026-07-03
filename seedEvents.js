/**
 * seedEvents.js
 * Seeds /events (and any other missing pages) into MongoDB WebPage collection.
 * Run: node seedEvents.js
 */
const fs = require('fs');
const mongoose = require('mongoose');

// Read MONGODB_URI from .env.local
const env = fs.readFileSync('.env.local', 'utf-8');
const uriMatch = env.match(/MONGODB_URI=(.+)/);
const uri = uriMatch ? uriMatch[1].trim() : null;

if (!uri) {
    console.error('❌ MONGODB_URI not found in .env.local');
    process.exit(1);
}

// Same schema as models/WebPage.js
const WebPageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    path: { type: String, required: true, unique: true },
    seoTitle: { type: String, default: '' },
    seoDescription: { type: String, default: '' },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    content: { type: mongoose.Schema.Types.Mixed, default: {} },
}, { timestamps: true });

const WebPage = mongoose.models.WebPage || mongoose.model('WebPage', WebPageSchema);

// All pages that should exist in the DB
const allPages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Amazon Store Management', path: '/amazon-store-management' },
    { name: 'Android App Development', path: '/android-application-development' },
    { name: 'AI SEO', path: '/ai-seo' },
    { name: 'Blog', path: '/blog' },
    { name: 'Career', path: '/career' },
    { name: 'CMS Development', path: '/cms' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Content Writing', path: '/content-writing' },
    { name: 'Cookies Policy', path: '/cookies' },
    { name: 'CRM Development', path: '/crm' },
    { name: 'Dashboard Development', path: '/dashboard' },
    { name: 'eBay Store Management', path: '/ebay-store-management' },
    { name: 'Events', path: '/events' },           // ← KEY: this was missing
    { name: 'iPad App Development', path: '/ipad-app-development' },
    { name: 'iPhone App Development', path: '/iphone-apps-development' },
    { name: 'Magento Development', path: '/magento-development' },
    { name: 'News', path: '/news' },
    { name: 'Next.js Development', path: '/next-js' },
    { name: 'Node.js Development', path: '/node-js' },
    { name: 'OpenCart Development', path: '/opencart-development' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'React Development', path: '/react' },
    { name: 'React Native Development', path: '/react-native' },
    { name: 'Salesforce Solutions', path: '/salesforce' },
    { name: 'SEO Packages', path: '/seo-package' },
    { name: 'SEO Services', path: '/seo-service' },
    { name: 'Social Networking Apps', path: '/social-networking' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Web Design', path: '/web-design' },
    { name: 'WordPress Development', path: '/wordpress-development-customization' },
];

async function seed() {
    try {
        await mongoose.connect(uri);
        console.log('✅ Connected to MongoDB');

        // Upsert all pages (insert if missing, skip if already exists)
        const bulkOps = allPages.map(page => ({
            updateOne: {
                filter: { path: page.path },
                update: { $setOnInsert: { name: page.name, path: page.path, status: 'active' } },
                upsert: true,
            }
        }));

        const result = await WebPage.bulkWrite(bulkOps);
        console.log(`\n📋 Seed Results:`);
        console.log(`  Inserted: ${result.upsertedCount}`);
        console.log(`  Already existed: ${result.matchedCount}`);

        // Verify /events
        const eventsPage = await WebPage.findOne({ path: '/events' });
        if (eventsPage) {
            console.log(`\n✅ /events page status: "${eventsPage.status}" (ID: ${eventsPage._id})`);
        } else {
            console.log('\n❌ /events page not found after seed — check for errors');
        }

        // List all pages
        const all = await WebPage.find({}, { path: 1, name: 1, status: 1 }).sort({ path: 1 }).lean();
        console.log(`\n📄 All pages in DB (${all.length} total):`);
        all.forEach(p => console.log(`  ${p.status === 'active' ? '✅' : '❌'} ${p.path.padEnd(45)} ${p.status}`));

    } catch (err) {
        console.error('❌ Error:', err);
    } finally {
        await mongoose.disconnect();
        console.log('\n🔌 Disconnected from MongoDB');
    }
}

seed();
