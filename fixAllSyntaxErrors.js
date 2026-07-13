const fs = require('fs');

const files = [
    "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/wordpress-development-customization/WordPressContent.jsx",
    "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/magento-development/MagentoContent.jsx",
    "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/ebay-store-management/EbayStoreContent.jsx"
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/\}\)\}\}/g, '})}');
    fs.writeFileSync(file, content, 'utf8');
    console.log("Fixed " + file);
});
