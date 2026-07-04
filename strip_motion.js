const fs = require('fs');
let content = fs.readFileSync('components/NavbarClient.jsx', 'utf8');

// Remove import
content = content.replace(/import \{ motion, AnimatePresence.*?\} from "framer-motion";\n/, '');

// Replace tags
content = content.replace(/<motion\./g, '<');
content = content.replace(/<\/motion\./g, '</');
content = content.replace(/<AnimatePresence[^>]*>/g, '');
content = content.replace(/<\/AnimatePresence>/g, '');

// Strip props
content = content.replace(/initial=\{[^\}]+\}\s*/g, '');
content = content.replace(/animate=\{[^\}]+\}\s*/g, '');
content = content.replace(/exit=\{[^\}]+\}\s*/g, '');
content = content.replace(/transition=\{[^\}]+\}\s*/g, '');
content = content.replace(/whileHover=\{[^\}]+\}\s*/g, '');
content = content.replace(/whileTap=\{[^\}]+\}\s*/g, '');
content = content.replace(/layoutId="[^"]+"\s*/g, '');

fs.writeFileSync('components/NavbarClient.jsx', content);
console.log('NavbarClient.jsx updated');
