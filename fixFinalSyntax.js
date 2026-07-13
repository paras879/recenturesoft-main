const fs = require('fs');

// Fix WordPress
const wpPath = "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/wordpress-development-customization/WordPressContent.jsx";
let wpContent = fs.readFileSync(wpPath, 'utf8');

const correctWPEnd = `                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-blue-600 dark:bg-blue-900/40 rounded-3xl p-10 md:p-16 border border-transparent dark:border-blue-800">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">`;

wpContent = wpContent.replace(
    /                            <\/div>\n                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">/,
    correctWPEnd
);
fs.writeFileSync(wpPath, wpContent, 'utf8');


// Fix Magento
const magentoPath = "c:/Users/Paras Tomar/OneDrive/Desktop/RecentureSoft/components/magento-development/MagentoContent.jsx";
let magentoContent = fs.readFileSync(magentoPath, 'utf8');

const correctMagentoProcess = `                    </motion.div>
                ))}
            </div>

            {/* Benefits Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-900 dark:text-white text-center">
                {magentoBenefits.title || "Benefits Of Magento Integration"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">`;

magentoContent = magentoContent.replace(
    /                    <\/motion\.div>\n            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">/,
    correctMagentoProcess
);
fs.writeFileSync(magentoPath, magentoContent, 'utf8');

console.log("Both files fixed completely!");
