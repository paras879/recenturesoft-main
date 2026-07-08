const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const artifactDir = 'C:\\Users\\Paras Tomar\\.gemini\\antigravity-ide\\brain\\8e1d8df3-27cc-4922-977d-fd0c8663ca78';
const publicImagesDir = path.join(__dirname, 'public', 'images', 'common');

if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
}

const names = ['generic_platform', 'generic_process', 'generic_dashboard', 'generic_team', 'generic_cta'];

async function processImages() {
    const files = fs.readdirSync(artifactDir);
    
    for (const name of names) {
        // Find latest
        const matches = files.filter(f => f.startsWith(name) && f.endsWith('.png')).sort().reverse();
        
        if (matches.length > 0) {
            const sourcePath = path.join(artifactDir, matches[0]);
            const destPath = path.join(publicImagesDir, `${name}.webp`);
            
            await sharp(sourcePath)
                .resize({ width: 1200, withoutEnlargement: true })
                .webp({ quality: 60 })
                .toFile(destPath);
            console.log(`Processed: ${destPath}`);
        }
    }
}

processImages().catch(console.error);
