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
    
    let imgCounter = 0;
    
    const newContent = content.replace(/src="\/images\/[^"]+\.webp"/g, (match) => {
        imgCounter++;
        
        switch (imgCounter) {
            case 1:
                return `src="/images/${tech}-development/hero_${tech}.webp"`;
            case 2:
                return `src="/images/${tech}-development/about_${tech}.webp"`;
            case 3:
                return `src="/images/common/generic_platform.webp"`;
            case 4:
                return `src="/images/common/generic_process.webp"`;
            case 5:
                return `src="/images/common/generic_dashboard.webp"`;
            case 6:
                return `src="/images/common/generic_team.webp"`;
            case 7:
                return `src="/images/common/generic_cta.webp"`;
            default:
                return `src="/images/common/generic_platform.webp"`; // Fallback
        }
    });

    fs.writeFileSync(filePath, newContent);
    console.log(`Updated 7 unique images in ${filePath}`);
}

mappings.forEach(m => {
    try {
        processFile(path.join(__dirname, m.file), m.tech);
    } catch (e) {
        console.error(`Error processing ${m.file}:`, e);
    }
});
