const fs = require('fs');
const glob = require('glob');
const files = glob.sync('components/**/*Content.jsx');
let changed = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('setActiveFaq')) {
        let newContent = content;
        
        // Pattern 1: Revert to p-6
        newContent = newContent.replace(/className="w-full flex items-center justify-between px-4 py-3 md:px-6 md:py-3/g, 'className="w-full flex items-center justify-between p-6');
        newContent = newContent.replace(/className="px-4 pb-4 md:px-6 md:pb-4 pt-0 text-slate-600/g, 'className="p-6 pt-0 text-slate-600');
        
        // Pattern 2: Revert to px-6 py-5
        newContent = newContent.replace(/className="w-full px-4 py-3 md:px-6 md:py-3 flex items-center/g, 'className="w-full px-6 py-5 flex items-center');
        newContent = newContent.replace(/className="px-4 pb-4 md:px-6 md:pb-4 text-slate-600/g, 'className="px-6 pb-6 text-slate-600');

        // Pattern 3: Specifically for the one I targeted exactly
        newContent = newContent.replace(/className="w-full flex items-center justify-between px-4 py-3 md:px-6 md:py-3 text-left"/g, 'className="w-full flex items-center justify-between p-6 text-left"');
        newContent = newContent.replace(/className="w-full px-4 py-3 md:px-6 md:py-3 flex items-center justify-between text-left focus:outline-none"/g, 'className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"');

        if (content !== newContent) {
            fs.writeFileSync(file, newContent);
            console.log('Reverted', file);
            changed++;
        }
    }
});
console.log('Total reverted:', changed);
