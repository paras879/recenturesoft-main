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
    
    // The buggy class string: `relative lg:h-[200px] md:h-[450px] lg:h-[600px] flex items-center justify-center`
    // Wait, let's just find `relative lg:h-[200px] md:h-[450px]` and replace it with `relative h-[200px] md:h-[450px] lg:h-[600px] mt-12 md:mt-16 lg:mt-12 flex items-center justify-center`
    
    // Actually let's use a regex that matches variations just in case
    content = content.replace(/relative (?:lg:)?h-\[200px\] md:h-\[450px\] lg:h-\[600px\] flex items-center justify-center/g, 
        'relative h-[200px] md:h-[450px] lg:h-[600px] mt-8 lg:mt-12 flex items-center justify-center'
    );
    
    // There is another image size for some pages: `h-[180px] md:h-[400px] lg:h-[500px]`
    content = content.replace(/relative h-\[180px\] md:h-\[400px\] lg:h-\[500px\]/g, 
        'relative h-[180px] md:h-[400px] lg:h-[500px] mt-8 lg:mt-12'
    );

    fs.writeFileSync(filePath, content);
    console.log(`Updated margins in ${filePath}`);
}

files.forEach(file => {
    try {
        processFile(path.join(__dirname, file));
    } catch (e) {
        console.error(`Error processing ${file}:`, e);
    }
});
