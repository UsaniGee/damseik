import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { SITE_URL, canonicalUrl } from '../src/config/site.js';
import { routes } from '../src/routes/manifest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const escapeXml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Sitemap of indexable routes only, as canonical production URLs.
 * `lastmod` is emitted only for routes that declare a genuine modification date.
 * @param {{ path: string, indexable: boolean, lastmod?: string }[]} routeList
 * @returns {string}
 */
export const buildSitemap = (routeList) => {
  const urls = routeList
    .filter((route) => route.indexable)
    .map((route) => {
      const lastmod = route.lastmod ? `\n    <lastmod>${route.lastmod}</lastmod>` : '';
      return `  <url>\n    <loc>${escapeXml(canonicalUrl(route.path))}</loc>${lastmod}\n  </url>`;
    });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
};

/**
 * robots.txt allowing all crawling and pointing to the canonical sitemap.
 * @param {string} siteUrl canonical origin without trailing slash
 * @returns {string}
 */
export const buildRobotsTxt = (siteUrl) => `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  const distDir = path.join(__dirname, '..', 'dist');
  const sitemap = buildSitemap(routes);
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
  fs.writeFileSync(path.join(distDir, 'robots.txt'), buildRobotsTxt(SITE_URL), 'utf8');
  console.log(`sitemap.xml (${sitemap.match(/<url>/g).length} URLs) and robots.txt written to ${distDir}`);
}
