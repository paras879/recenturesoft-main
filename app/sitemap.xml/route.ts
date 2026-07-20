import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";

export const dynamic = 'force-dynamic';

const baseUrl = 'https://recenturesoft.com';

const MAIN_PATHS = new Set([
  '/', '/about', '/contact', '/portfolio', '/blog', '/news', '/events', '/career',
]);

const LEGAL_PATHS = new Set([
  '/privacy-policy', '/terms', '/cookies',
]);

const STATIC_INFORMATION_PATHS = [
  '/', '/about', '/ai-seo', '/amazon-store-management',
  '/android-application-development', '/blog', '/career', '/cms',
  '/contact', '/content-writing', '/crm', '/dashboard',
  '/ebay-store-management', '/events', '/ipad-app-development',
  '/iphone-apps-development', '/magento-development', '/news',
  '/next-js', '/node-js', '/opencart-development', '/portfolio',
  '/react', '/react-native', '/salesforce',
  '/seo-package', '/seo-service', '/social-networking', '/solutions',
  '/web-design', '/wordpress-development-customization',
  '/generative-ai', '/ai-consulting-services', '/ai-agent-development',
  '/ai-chatbot-development', '/rag-development',
];

function getPriority(path: string): number {
  if (path === '/') return 1.0;
  if (MAIN_PATHS.has(path)) return 0.9;
  if (LEGAL_PATHS.has(path)) return 0.3;
  return 0.8;
}

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function normalizePath(p: string): string {
  return p.startsWith('/') ? p : `/${p}`;
}

export async function GET() {
  try {
    await connectDB();

    const entries: Array<{ loc: string; priority: number; group: string }> = [];
    const seen = new Set<string>();

    const addEntry = (path: string, priority: number, group: string) => {
      const key = path.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      entries.push({ loc: `${baseUrl}${path}`, priority, group });
    };

    for (const p of STATIC_INFORMATION_PATHS) {
      if (LEGAL_PATHS.has(p)) continue;
      addEntry(p, getPriority(p), 'information');
    }

    for (const p of ['/privacy-policy', '/terms', '/cookies']) {
      addEntry(p, 0.3, 'legal');
    }

    const webPages = await WebPage.find(
      {},
      { path: 1, templateType: 1, status: 1 },
    ).lean();

    for (const page of webPages) {
      const p = normalizePath(page.path);

      if (LEGAL_PATHS.has(p) && page.status === 'active') {
        addEntry(p, 0.3, 'legal');
      } else if (page.templateType === 'location-template' && page.status === 'active') {
        addEntry(p, 0.8, 'location');
      } else if (page.status === 'active') {
        addEntry(p, 0.8, 'information');
      }
    }

    const groupOrder: Record<string, number> = { information: 0, location: 1, legal: 2 };
    entries.sort((a, b) => groupOrder[a.group] - groupOrder[b.group]);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:rs="https://recenturesoft.com/sitemap-ext">
`;

    for (const entry of entries) {
      xml += `  <url>\n    <loc>${escapeXml(entry.loc)}</loc>\n    <priority>${entry.priority}</priority>\n    <rs:group>${entry.group}</rs:group>\n  </url>\n`;
    }

    xml += `</urlset>`;

    return new NextResponse(xml, {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse(
      '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:rs="https://recenturesoft.com/sitemap-ext"></urlset>',
      { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
    );
  }
}
