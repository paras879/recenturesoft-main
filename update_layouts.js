const fs = require('fs');
const path = require('path');

const targetDirs = [
  'components/about',
  'app/about',
  'components/portfolio',
  'app/portfolio',
  'components/blog',
  'app/blog',
  'components/events',
  'app/events',
  'components/news',
  'app/news',
  'components/contact',
  'app/contact',
  'components/shared',
  'components'
];

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (dir.startsWith('app') || targetDirs.includes(fullPath.replace(/\\/g, '/'))) {
          processDir(fullPath);
      }
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.tsx')) {
      if (dir === 'components' && !['PageHero.jsx', 'ContentHero.jsx'].includes(file)) {
          continue;
      }
      
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      
      content = content.replace(/\\bmax-w-\\[1400px\\]/g, 'w-full');
      content = content.replace(/\\bmax-w-\\[1200px\\]/g, 'w-full');
      content = content.replace(/\\bmax-w-\\[1500px\\]/g, 'w-full');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

targetDirs.forEach(dir => {
    if (dir.split('/').length <= 2) {
        processDir(dir);
    }
});
