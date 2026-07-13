const fs = require('fs');

const filePath = "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/opencart-development/OpenCartContent.jsx";
let content = fs.readFileSync(filePath, 'utf8');

const correctStructure = `                    <div className="space-y-6">
                        {(openProcess.steps?.length > 0 ? openProcess.steps : process).map((step, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center shrink-0">
                                    {i + 1}
                                </div>
                                <span className="text-slate-700 dark:text-slate-300 font-medium text-lg">{typeof step === 'string' ? step : step.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Industries */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">{openIndustries.title || "Rich Industry Experience"}</h3>
                    <div className="grid grid-cols-2 gap-4">`;

content = content.replace(
    /                    <div className="space-y-6">\n                        \{\(openProcess\.steps\?\.length > 0 \? openProcess\.steps : process\)\.map\(\(step, i\) => \(\n                            <div key=\{i\} className="flex items-center gap-4">\n                                <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center shrink-0">\n                                    \{i \+ 1\}\n                                <\/div>\n                                <span className="text-slate-700 dark:text-slate-300 font-medium text-lg">\{typeof step === 'string' \? step : step\.title\}<\/span>\n                            <\/div>\n                    <div className="grid grid-cols-2 gap-4">/,
    correctStructure
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Fixed part 2!");
