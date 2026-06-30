import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://recenturesoft.com';

  const routes = [
    '',
    '/about',
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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}
