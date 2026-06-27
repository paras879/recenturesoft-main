/**
 * @jest-environment node
 */
import fs from 'fs';
import path from 'path';

describe('SEO & Metadata Tests', () => {
    it('should have a layout file with generateMetadata or static metadata', () => {
        const layoutPath = path.join(process.cwd(), 'app', 'layout.tsx');
        
        // If it's a js file instead
        const jsLayoutPath = path.join(process.cwd(), 'app', 'layout.jsx');
        
        let content = '';
        if (fs.existsSync(layoutPath)) {
            content = fs.readFileSync(layoutPath, 'utf8');
        } else if (fs.existsSync(jsLayoutPath)) {
            content = fs.readFileSync(jsLayoutPath, 'utf8');
        } else {
            throw new Error('Root layout file not found');
        }

        // Verify standard meta properties are present
        expect(content).toMatch(/title:/);
        expect(content).toMatch(/description:/);
        expect(content).toMatch(/metadataBase:/);
    });

    it('should have a robots.txt file in the public directory or app directory', () => {
        const robotsPublicPath = path.join(process.cwd(), 'public', 'robots.txt');
        const robotsAppPath = path.join(process.cwd(), 'app', 'robots.ts');
        const robotsAppPathJs = path.join(process.cwd(), 'app', 'robots.js');

        const hasRobotsTxt = fs.existsSync(robotsPublicPath) || fs.existsSync(robotsAppPath) || fs.existsSync(robotsAppPathJs);
        expect(hasRobotsTxt).toBe(true);
    });

    it('should have a sitemap.xml file in public directory or app directory', () => {
        const sitemapPublicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
        const sitemapAppPath = path.join(process.cwd(), 'app', 'sitemap.ts');
        const sitemapAppPathJs = path.join(process.cwd(), 'app', 'sitemap.js');

        const hasSitemap = fs.existsSync(sitemapPublicPath) || fs.existsSync(sitemapAppPath) || fs.existsSync(sitemapAppPathJs);
        expect(hasSitemap).toBe(true);
    });
});
