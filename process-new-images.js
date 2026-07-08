const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const artifactDir = 'C:\\Users\\Paras Tomar\\.gemini\\antigravity-ide\\brain\\8e1d8df3-27cc-4922-977d-fd0c8663ca78';
const publicImagesDir = path.join(__dirname, 'public', 'images');

const techs = ['laravel', 'php', 'python', 'javascript', 'flutter'];

async function processImages() {
    const files = fs.readdirSync(artifactDir);
    
    for (const tech of techs) {
        // Find latest hero and about for this tech
        const heroFiles = files.filter(f => f.startsWith(`hero_${tech}`) && f.endsWith('.png')).sort().reverse();
        const aboutFiles = files.filter(f => f.startsWith(`about_${tech}`) && f.endsWith('.png')).sort().reverse();
        
        if (heroFiles.length > 0) {
            const sourcePath = path.join(artifactDir, heroFiles[0]);
            const destDir = path.join(publicImagesDir, `${tech}-development`);
            if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
            const destPath = path.join(destDir, `hero_${tech}.webp`);
            
            await sharp(sourcePath)
                .resize({ width: 1200, withoutEnlargement: true })
                .webp({ quality: 60 })
                .toFile(destPath);
            console.log(`Processed: ${destPath}`);
        }
        
        if (aboutFiles.length > 0) {
            const sourcePath = path.join(artifactDir, aboutFiles[0]);
            const destDir = path.join(publicImagesDir, `${tech}-development`);
            if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
            const destPath = path.join(destDir, `about_${tech}.webp`);
            
            await sharp(sourcePath)
                .resize({ width: 1200, withoutEnlargement: true })
                .webp({ quality: 60 })
                .toFile(destPath);
            console.log(`Processed: ${destPath}`);
        }
    }
}

processImages().catch(console.error);
