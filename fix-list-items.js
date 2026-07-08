const fs = require('fs');
const path = require('path');

const files = [
    'components/flutter/FlutterDevelopmentContent.jsx',
    'components/php/PHPDevelopmentContent.jsx',
    'components/javascript/JavaScriptDevelopmentContent.jsx',
    'components/python/PythonDevelopmentContent.jsx',
    'components/laravel/LaravelDevelopmentContent.jsx'
];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Fix the block/flex override issue ONLY for the space-y-3 container (Apps list)
    // We find the line containing `space-y-3` and replace `:block` with `:flex`
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('space-y-3')) {
            lines[i] = lines[i].replace(/md:\[&>\*:nth-child\(n\+4\)\]:block/g, 'md:[&>*:nth-child(n+4)]:flex');
        }
    }
    content = lines.join('\n');

    // 2. Remove the last 2 items from the array
    content = content.replace(/(\[\s*)([^\]]+)(\s*\]\.map\(\(app, idx\))/g, (match, p1, p2, p3) => {
        const items = p2.split(',').map(item => item.trim()).filter(Boolean);
        if (items.length > 2) {
            items.splice(-2, 2); // Remove last 2 items
        }
        return p1 + items.join(',\n                                    ') + p3;
    });

    fs.writeFileSync(filePath, content);
    console.log(`Fixed CSS and removed 2 array items in ${filePath}`);
}

files.forEach(file => {
    try {
        processFile(path.join(__dirname, file));
    } catch (e) {
        console.error(`Error processing ${file}:`, e);
    }
});
