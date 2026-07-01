const fs = require('fs');
const path = require('path');

function findPages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'admin' && file !== 'api' && file !== 'cms' && file !== 'dashboard' && file !== '[...slug]') {
        findPages(filePath, fileList);
      }
    } else {
      if (file === 'page.jsx' || file === 'page.tsx') {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

const appDir = path.join(__dirname, 'app');
const pages = findPages(appDir);

pages.forEach(pagePath => {
  let content = fs.readFileSync(pagePath, 'utf-8');

  // Skip if already injected
  if (content.includes('checkPageStatus')) return;

  // Calculate relative URL path
  // e.g. /app/contact/page.jsx -> /contact
  // e.g. /app/page.tsx -> /
  let relativePath = pagePath.replace(appDir, '').replace(/\\/g, '/');
  relativePath = relativePath.replace(/\/page\.(jsx|tsx)$/, '');
  if (relativePath === '') relativePath = '/';

  // Add imports
  const importLines = `import { checkPageStatus } from "@/lib/checkPageStatus";\nimport { notFound } from "next/navigation";\n`;
  content = importLines + content;

  // Make default export async
  content = content.replace(/export\s+default\s+function/g, 'export default async function');

  // Inject check at the beginning of the default export function
  const functionMatch = content.match(/export\s+default\s+async\s+function\s+[a-zA-Z0-9_]*\s*\([^\)]*\)\s*\{/);
  
  if (functionMatch) {
    const injection = `\n    const isActive = await checkPageStatus("${relativePath}");\n    if (!isActive) return notFound();\n`;
    const insertIndex = functionMatch.index + functionMatch[0].length;
    content = content.slice(0, insertIndex) + injection + content.slice(insertIndex);
    fs.writeFileSync(pagePath, content, 'utf-8');
    console.log(`Injected into ${relativePath}`);
  } else {
    console.log(`Could not find default export in ${relativePath}`);
  }
});
console.log('Injection complete.');
