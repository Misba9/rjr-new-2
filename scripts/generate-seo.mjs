/**
 * Generates public/sitemap.xml and public/robots.txt from app routes.
 *
 * Source of truth: src/constants/routes.ts → PAGE_TO_PATH / getSitemapRoutes()
 * Admin paths (/(^|\/)admin(\/|$)/) are excluded from the sitemap and Disallow'd.
 *
 * Run: npm run generate:seo
 * Also runs on Vite buildStart / configureServer via vite.config.ts
 */
import { buildSync } from 'esbuild';
import { writeFileSync, mkdirSync, unlinkSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');
const tmpBundle = join(__dirname, '.seo-routes.bundle.mjs');

function loadRoutesModule() {
  buildSync({
    entryPoints: [join(root, 'src/constants/routes.ts')],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: tmpBundle,
    logLevel: 'silent',
  });
}

function formatPriority(priority) {
  // Keep one or two decimals (e.g. 1.0, 0.95, 0.85) without float noise
  const rounded = Math.round(priority * 100) / 100;
  return Number.isInteger(rounded * 10) ? rounded.toFixed(1) : rounded.toFixed(2);
}

function buildSitemapXml(routes, lastmod) {
  const urls = routes
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${formatPriority(entry.priority)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobotsTxt(siteUrl) {
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /admin
Disallow: /404

User-agent: Googlebot
Allow: /
Disallow: /admin/
Disallow: /admin
Disallow: /404

User-agent: Bingbot
Allow: /
Disallow: /admin/
Disallow: /admin
Disallow: /404

Sitemap: ${siteUrl}/sitemap.xml
`;
}

export async function generateSeoFiles() {
  loadRoutesModule();

  try {
    const { getSitemapRoutes, isAdminPath } = await import(`${pathToFileURL(tmpBundle).href}?t=${Date.now()}`);

    const routes = getSitemapRoutes().filter((r) => !isAdminPath(r.path));
    if (routes.length === 0) {
      throw new Error('No public routes found for sitemap generation');
    }

    const siteUrl = new URL(routes[0].loc).origin;
    const lastmod = new Date().toISOString().slice(0, 10);

    mkdirSync(publicDir, { recursive: true });

    const sitemapPath = join(publicDir, 'sitemap.xml');
    const robotsPath = join(publicDir, 'robots.txt');

    writeFileSync(sitemapPath, buildSitemapXml(routes, lastmod), 'utf8');
    writeFileSync(robotsPath, buildRobotsTxt(siteUrl), 'utf8');

    console.log(`Generated ${sitemapPath} (${routes.length} URLs)`);
    console.log(`Generated ${robotsPath}`);
    console.log(`Sitemap: ${siteUrl}/sitemap.xml`);

    return { routeCount: routes.length, siteUrl };
  } finally {
    if (existsSync(tmpBundle)) {
      unlinkSync(tmpBundle);
    }
  }
}

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isDirectRun) {
  await generateSeoFiles();
}
