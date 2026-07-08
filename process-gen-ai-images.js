const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const artifactDir = 'C:\\Users\\Paras Tomar\\.gemini\\antigravity-ide\\brain\\8e1d8df3-27cc-4922-977d-fd0c8663ca78';
const publicImagesDir = path.join(__dirname, 'public', 'images', 'generative-ai');

if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
}

async function processImages() {
    const files = fs.readdirSync(artifactDir);
    
    // Find latest hero and about for generative
    const heroFiles = files.filter(f => f.startsWith('hero_generative') && f.endsWith('.png')).sort().reverse();
    const aboutFiles = files.filter(f => f.startsWith('about_generative') && f.endsWith('.png')).sort().reverse();
    
    if (heroFiles.length > 0) {
        const sourcePath = path.join(artifactDir, heroFiles[0]);
        const destPath = path.join(publicImagesDir, `hero_generative.webp`);
        await sharp(sourcePath)
            .resize({ width: 1200, withoutEnlargement: true })
            .webp({ quality: 60 })
            .toFile(destPath);
        console.log(`Processed: ${destPath}`);
    }
    
    if (aboutFiles.length > 0) {
        const sourcePath = path.join(artifactDir, aboutFiles[0]);
        const destPath = path.join(publicImagesDir, `about_generative.webp`);
        await sharp(sourcePath)
            .resize({ width: 1200, withoutEnlargement: true })
            .webp({ quality: 60 })
            .toFile(destPath);
        console.log(`Processed: ${destPath}`);
    }
}

processImages().catch(console.error);
