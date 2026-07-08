const fs = require('fs');
const path = require('path');

const mappings = [
    { file: 'components/flutter/FlutterDevelopmentContent.jsx', tech: 'flutter' },
    { file: 'components/php/PHPDevelopmentContent.jsx', tech: 'php' },
    { file: 'components/javascript/JavaScriptDevelopmentContent.jsx', tech: 'javascript' },
    { file: 'components/python/PythonDevelopmentContent.jsx', tech: 'python' },
    { file: 'components/laravel/LaravelDevelopmentContent.jsx', tech: 'laravel' }
];

function processFile(filePath, tech) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We will find all `src="/images/...` and replace them sequentially.
    let imgCounter = 0;
    
    const newContent = content.replace(/src="\/images\/[^"]+\.webp"/g, (match) => {
        imgCounter++;
        // Alternate between hero and about
        const imgName = imgCounter % 2 !== 0 ? `hero_${tech}` : `about_${tech}`;
        return `src="/images/${tech}-development/${imgName}.webp"`;
    });

    fs.writeFileSync(filePath, newContent);
    console.log(`Updated images in ${filePath}`);
}

mappings.forEach(m => {
    try {
        processFile(path.join(__dirname, m.file), m.tech);
    } catch (e) {
        console.error(`Error processing ${m.file}:`, e);
    }
});
