const fs = require('fs');

const filePath = "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/opencart-development/OpenCartContent.jsx";
let content = fs.readFileSync(filePath, 'utf8');

const correctEnd = `                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-blue-600 dark:bg-blue-900/40 rounded-3xl p-10 md:p-16 border border-transparent dark:border-blue-800">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">`;

content = content.replace(
    /                                <\/div>\n                            \);\n                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">/,
    correctEnd
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Fixed!");
