const fs = require('fs');
const path = require('path');

// Map each page route to its display name for the serviceName prop
const serviceNames = {
  'ai-seo': 'AI SEO',
  'amazon-store-management': 'Amazon Store Management',
  'android-application-development': 'Android Application Development',
  'cms': 'CMS Development',
  'content-writing': 'Content Writing',
  'crm': 'CRM Development',
  'dashboard': 'Dashboard Development',
  'ebay-store-management': 'eBay Store Management',
  'ipad-app-development': 'iPad App Development',
  'iphone-apps-development': 'iPhone Apps Development',
  'magento-development': 'Magento Development',
  'next-js': 'Next.js Development',
  'node-js': 'Node.js Development',
  'opencart-development': 'OpenCart Development',
  'react': 'React Development',
  'react-native': 'React Native Development',
  'salesforce': 'Salesforce Development',
  'seo-package': 'SEO Package',
  'seo-service': 'SEO Service',
  'social-networking': 'Social Networking',
  'web-design': 'Web Design',
  'wordpress-development-customization': 'WordPress Development',
};

const appDir = path.join(__dirname, 'app');

Object.entries(serviceNames).forEach(([route, serviceName]) => {
  const pagePath = path.join(appDir, route, 'page.jsx');
  if (!fs.existsSync(pagePath)) {
    console.log(`SKIP (not found): ${route}`);
    return;
  }

  let content = fs.readFileSync(pagePath, 'utf-8');

  // Skip if already injected
  if (content.includes('SolutionContactForm')) {
    console.log(`SKIP (already done): ${route}`);
    return;
  }

  // 1. Add import after last import line
  const importLine = `import SolutionContactForm from "@/components/shared/SolutionContactForm";\n`;
  // Find position after last import
  const lastImportMatch = [...content.matchAll(/^import .+;?\r?\n/gm)];
  if (lastImportMatch.length === 0) {
    console.log(`SKIP (no imports): ${route}`);
    return;
  }
  const lastImport = lastImportMatch[lastImportMatch.length - 1];
  const insertPos = lastImport.index + lastImport[0].length;
  content = content.slice(0, insertPos) + importLine + content.slice(insertPos);

  // 2. Replace <FutureFooter /> with form + footer
  const footerPattern = /(\s*)(<FutureFooter\s*\/>)/;
  if (!footerPattern.test(content)) {
    console.log(`SKIP (no FutureFooter): ${route}`);
    return;
  }

  content = content.replace(footerPattern, (match, whitespace) => {
    return `${whitespace}<SolutionContactForm serviceName="${serviceName}" />\n${whitespace}<FutureFooter />`;
  });

  fs.writeFileSync(pagePath, content, 'utf-8');
  console.log(`DONE: ${route}`);
});

console.log('\n✅ Injection complete.');
