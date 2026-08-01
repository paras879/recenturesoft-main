const fs = require('fs');
const glob = require('glob');
const files = glob.sync('components/**/*Content.jsx');
let changed = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('setActiveFaq')) {
        let newContent = content;
        
        // Revert px-6 py-3
        newContent = newContent.replace(/className="w-full flex items-center justify-between px-6 py-3/g, 'className="w-full flex items-center justify-between p-6');
        newContent = newContent.replace(/className="px-6 pb-4 pt-0 text-slate-600/g, 'className="p-6 pt-0 text-slate-600');
        
        if (content !== newContent) {
            fs.writeFileSync(file, newContent);
            console.log('Reverted', file);
            changed++;
        }
    }
});
console.log('Total reverted:', changed);
