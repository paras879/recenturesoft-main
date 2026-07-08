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
    
    // Replace 'Finance Apps'].map(...) with 'Finance Apps', 'Travel Apps', 'Fitness Apps'].map(...)
    content = content.replace(/'Finance Apps'\]\.map/g, "'Finance Apps',\n                                    'Travel Apps',\n                                    'Fitness Apps'].map");

    fs.writeFileSync(filePath, content);
    console.log(`Added items back to ${filePath}`);
}

files.forEach(file => {
    try {
        processFile(path.join(__dirname, file));
    } catch (e) {
        console.error(`Error processing ${file}:`, e);
    }
});
