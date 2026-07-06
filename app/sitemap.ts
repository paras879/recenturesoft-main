import { MetadataRoute } from 'next';
import { connectDB } from "@/lib/mongodb";
import WebPage from "@/models/WebPage";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://recenturesoft.com';

  const routes = [
    '',
    '/about',
    '/ai-seo',
    '/amazon-store-management',
    '/android-application-development',
    '/blog',
    '/career',
    '/cms',
    '/contact',
    '/content-writing',
    '/cookies',
    '/crm',
    '/dashboard',
    '/ebay-store-management',
    '/events',
    '/ipad-app-development',
    '/iphone-apps-development',
    '/magento-development',
    '/news',
    '/next-js',
    '/node-js',
    '/opencart-development',
    '/portfolio',
    '/privacy-policy',
    '/react',
    '/react-native',
    '/salesforce',
    '/seo-package',
    '/seo-service',
    '/social-networking',
    '/solutions',
    '/terms',
    '/web-design',
    '/wordpress-development-customization'
  ];

  const staticSitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  let dynamicSitemap: MetadataRoute.Sitemap = [];
  try {
    await connectDB();
    // Fetch all active dynamic pages created from Admin Panel
    const dynamicPages = await WebPage.find({ status: "active" }, { path: 1 }).lean();
    
    dynamicSitemap = dynamicPages.map((page: any) => ({
      url: `${baseUrl}${page.path.startsWith('/') ? page.path : `/${page.path}`}`,
      lastModified: new Date(),
    }));
  } catch (error) {
    console.error("Error fetching dynamic pages for sitemap:", error);
  }

  // Deduplicate URLs in case a dynamic page overwrites a static route path
  const allUrls = [...staticSitemap, ...dynamicSitemap];
  const uniqueUrlsMap = new Map();
  allUrls.forEach((item) => {
    uniqueUrlsMap.set(item.url, item);
  });

  return Array.from(uniqueUrlsMap.values());
}
