const fs = require('fs');
const path = require('path');

const targetDirs = [
  'components/about',
  'components/portfolio',
  'components/blog',
  'components/events',
  'components/news',
  'components/contact',
  'components/shared'
];

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      content = content.replace(/max-w-\\[1400px\\]/g, 'w-full');
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

targetDirs.forEach(dir => processDir(dir));
