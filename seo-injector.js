const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            // Skip dynamic routes or admin for now, or just process them but dynamic routes need dynamic canonicals.
            if (!file.includes('(dashboard)') && !file.includes('[slug]') && !file.includes('[route]') && !file.includes('admin')) {
                results = results.concat(walkDir(file));
            }
        } else {
            if (file.endsWith('page.jsx') || file.endsWith('page.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walkDir(appDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Determine route
    let relative = path.relative(appDir, file);
    let route = relative.replace(/\\/g, '/').replace('/page.jsx', '').replace('/page.tsx', '').replace('page.jsx', '').replace('page.tsx', '');
    if (route === '') { route = '/'; } else { route = '/' + route; }

    // Skip layout files or non-pages just in case, though we filtered by page.tsx
    
    let title = "RecentureSoft";
    let desc = "RecentureSoft builds scalable enterprise software, AI products, web platforms, and mobile applications for global businesses.";

    // 1. UPDATE METADATA (Adding Canonical)
    const metadataRegex = /export\s+const\s+metadata\s*(:\s*Metadata\s*)?=\s*{([\s\S]*?)};/m;
    const match = content.match(metadataRegex);

    if (match) {
        let metaBody = match[2];
        
        // Extract title and description for Schema
        const titleMatch = metaBody.match(/title\s*:\s*["'](.*?)["']/);
        if (titleMatch) title = titleMatch[1];
        
        const descMatch = metaBody.match(/description\s*:\s*["'](.*?)["']/);
        if (descMatch) desc = descMatch[1];

        // Remove existing alternates to avoid duplication
        metaBody = metaBody.replace(/alternates\s*:\s*{[\s\S]*?},?/g, '');
        
        // Add alternates
        metaBody = metaBody.trim();
        if (metaBody.endsWith(',')) {
            metaBody += `\n    alternates: { canonical: "${route}" }`;
        } else {
            metaBody += `,\n    alternates: { canonical: "${route}" }`;
        }
        
        const newMetadata = `export const metadata${match[1] || ''} = {\n    ${metaBody}\n};`;
        content = content.replace(metadataRegex, newMetadata);
    } else {
        // If metadata doesn't exist, create it.
        const defaultMetadata = `export const metadata = {
    title: "${route === '/' ? 'Home' : route.replace('/', '').toUpperCase()} | RecentureSoft",
    description: "Explore our expert services and solutions at RecentureSoft.",
    alternates: { canonical: "${route}" }
};\n`;
        // Insert after imports (find last import)
        const importRegex = /(import.*?from.*?['"].*?['"];?\s*)+/m;
        if (importRegex.test(content)) {
            content = content.replace(importRegex, `$&` + `\n` + defaultMetadata);
        } else {
            // just put it at top if no imports
            content = defaultMetadata + '\n' + content;
        }
    }

    // 2. INJECT SCHEMA (JSON-LD)
    if (!content.includes('application/ld+json')) {
        const schemaObj = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "description": desc,
            "url": `https://recenturesoft.com${route === '/' ? '' : route}`
        };
        const schemaString = JSON.stringify(schemaObj);
        
        const schemaScript = `\n            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(${schemaString}) }} />`;
        
        // Find <main> and inject after it
        const mainMatch = content.match(/(<main[^>]*>)/i);
        if (mainMatch) {
            content = content.replace(/(<main[^>]*>)/i, `$1${schemaScript}`);
        } else {
            // Try to find the first <div> inside the return if no main
            content = content.replace(/(return\s*\(\s*<[a-zA-Z]+[^>]*>)/i, `$1${schemaScript}`);
        }
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log('Processed:', route);
});

console.log("SEO Injection Complete.");
