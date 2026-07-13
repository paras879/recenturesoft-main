const fs = require('fs');

const filePath = "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/amazon-store-management/AmazonStoreContent.jsx";
let content = fs.readFileSync(filePath, 'utf8');

// Use global regex to catch any remaining `})}}` and replace with `})}`
content = content.replace(/\}\)\}\}/g, "})}");

fs.writeFileSync(filePath, content, 'utf8');
console.log("Fixed all syntax errors");
