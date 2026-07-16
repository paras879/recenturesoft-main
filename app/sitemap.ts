import { MetadataRoute } from 'next';
import { connectDB } from "@/lib/mongodb";
import SitemapEntry from "@/models/SitemapEntry";
import WebPage from "@/models/WebPage";
import { syncSitemap } from "@/lib/sitemapSync";

export const dynamic = 'force-dynamic';

const baseUrl = 'https://recenturesoft.com';

const FALLBACK_ROUTES = [
  '', '/about', '/ai-seo', '/amazon-store-management',
  '/android-application-development', '/blog', '/career', '/cms',
  '/contact', '/content-writing', '/cookies', '/crm', '/dashboard',
  '/ebay-store-management', '/events', '/ipad-app-development',
  '/iphone-apps-development', '/magento-development', '/news',
  '/next-js', '/node-js', '/opencart-development', '/portfolio',
  '/privacy-policy', '/react', '/react-native', '/salesforce',
  '/seo-package', '/seo-service', '/social-networking', '/solutions',
  '/terms', '/web-design', '/wordpress-development-customization',
  '/generative-ai', '/ai-consulting-services', '/ai-agent-development',
  '/ai-chatbot-development', '/rag-development',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    await connectDB();

    let entries = await SitemapEntry.find({ status: "active" })
      .sort({ priority: -1 })
      .lean();

    if (entries.length === 0) {
      await syncSitemap();
      entries = await SitemapEntry.find({ status: "active" })
        .sort({ priority: -1 })
        .lean();
    }

    if (entries.length > 0) {
      return entries.map((entry: any) => ({
        url: entry.canonical || `${baseUrl}${entry.path}`,
        lastModified: entry.lastModified || new Date(),
        changeFrequency: entry.changeFrequency || "monthly",
        priority: entry.priority || 0.5,
      }));
    }

    const staticMap = FALLBACK_ROUTES.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === '' ? 1.0 : 0.7,
    }));

    const dynamicPages = await WebPage.find({ status: "active" }, { path: 1, updatedAt: 1 }).lean();
    const dynamicMap = dynamicPages.map((page: any) => ({
      url: `${baseUrl}${page.path.startsWith('/') ? page.path : `/${page.path}`}`,
      lastModified: page.updatedAt || new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

    const allUrls = [...staticMap, ...dynamicMap];
    const uniqueUrlsMap = new Map();
    allUrls.forEach((item) => uniqueUrlsMap.set(item.url, item));

    return Array.from(uniqueUrlsMap.values());
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}
