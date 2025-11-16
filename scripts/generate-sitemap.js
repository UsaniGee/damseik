import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://damseikservices.com'; 

const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/services/equipment-leasing', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/coating-and-repair-products', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/process-instrumentation', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/quality-control-services', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/pipeline-facility-production-maintenace', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/valve-services', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/marine-support-services', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/procurement', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/well-service', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/production-chemical-services', changefreq: 'monthly', priority: 0.7 },
  { url: '/projects', changefreq: 'weekly', priority: 0.8 },
  { url: '/projects/water-re-injection-project-umusadege-1-kwale-delta-state', changefreq: 'monthly', priority: 0.6 },
  { url: '/projects/well-intervention-rivers-state', changefreq: 'monthly', priority: 0.6 },
  { url: '/projects/high-Pressure-pumping-support-for-coil-tubing-operation-rivers-state', changefreq: 'monthly', priority: 0.6 },
  { url: '/projects/nitrogen-lift-operation-cawc-well-45T-rivers-state-swamp', changefreq: 'monthly', priority: 0.6 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/careers', changefreq: 'monthly', priority: 0.7 },
  { url: '/media', changefreq: 'weekly', priority: 0.6 },
];

const generateSitemap = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`Sitemap generated successfully at ${sitemapPath}`);
  console.log(`   Total URLs: ${routes.length}`);
};

generateSitemap();

