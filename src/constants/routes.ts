import { SITE_URL } from './nap';

/** Internal router keys used by App state */
export type PageKey =
  | 'home'
  | 'services'
  | 'balcony'
  | 'pigeon'
  | 'children'
  | 'monkey'
  | 'coconut'
  | 'cloth-hanger'
  | 'invisible-grills'
  | 'construction'
  | 'sports'
  | 'blog'
  | 'about'
  | 'contact'
  | 'privacy-policy'
  | 'terms-and-conditions';

/** Includes soft-404 route (never in sitemap) */
export type AppRouteKey = PageKey | 'not-found';

export const PAGE_TO_PATH: Record<PageKey, string> = {
  home: '/',
  services: '/services',
  balcony: '/services/balcony-safety-nets-bangalore',
  pigeon: '/services/pigeon-safety-nets-bangalore',
  children: '/services/children-safety-nets-bangalore',
  monkey: '/services/monkey-safety-nets-bangalore',
  coconut: '/services/coconut-safety-nets-bangalore',
  'cloth-hanger': '/cloth-hanger',
  'invisible-grills': '/invisible-grill-bangalore',
  construction: '/services/construction-safety-nets-bangalore',
  sports: '/sports',
  blog: '/blog',
  about: '/about',
  contact: '/contact',
  'privacy-policy': '/privacy-policy',
  'terms-and-conditions': '/terms-and-conditions',
};

/** True for admin / internal paths that must not appear in sitemap or be crawlable. */
export function isAdminPath(path: string): boolean {
  return /(^|\/)admin(\/|$)/i.test(path);
}

export type SitemapChangefreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export type SitemapRouteEntry = {
  key: PageKey;
  path: string;
  loc: string;
  changefreq: SitemapChangefreq;
  priority: number;
};

const SITEMAP_META: Record<PageKey, { changefreq: SitemapChangefreq; priority: number }> = {
  home: { changefreq: 'weekly', priority: 1.0 },
  services: { changefreq: 'weekly', priority: 0.95 },
  balcony: { changefreq: 'monthly', priority: 0.9 },
  pigeon: { changefreq: 'monthly', priority: 0.9 },
  children: { changefreq: 'monthly', priority: 0.9 },
  'invisible-grills': { changefreq: 'monthly', priority: 0.9 },
  construction: { changefreq: 'monthly', priority: 0.85 },
  monkey: { changefreq: 'monthly', priority: 0.85 },
  coconut: { changefreq: 'monthly', priority: 0.85 },
  blog: { changefreq: 'weekly', priority: 0.8 },
  sports: { changefreq: 'monthly', priority: 0.75 },
  'cloth-hanger': { changefreq: 'monthly', priority: 0.7 },
  about: { changefreq: 'monthly', priority: 0.7 },
  contact: { changefreq: 'yearly', priority: 0.65 },
  'privacy-policy': { changefreq: 'yearly', priority: 0.4 },
  'terms-and-conditions': { changefreq: 'yearly', priority: 0.4 },
};

/**
 * Every public (non-admin) route for sitemap generation.
 * Derived from PAGE_TO_PATH so new pages are included automatically.
 */
export function getSitemapRoutes(): SitemapRouteEntry[] {
  return (Object.keys(PAGE_TO_PATH) as PageKey[])
    .map((key) => {
      const path = PAGE_TO_PATH[key];
      const meta = SITEMAP_META[key];
      return {
        key,
        path,
        loc: `${SITE_URL}${path === '/' ? '/' : path}`,
        changefreq: meta.changefreq,
        priority: meta.priority,
      };
    })
    .filter((entry) => !isAdminPath(entry.path))
    .sort((a, b) => b.priority - a.priority || a.path.localeCompare(b.path));
}

export const canonicalUrl = (page: PageKey): string => `${SITE_URL}${PAGE_TO_PATH[page]}`;

const normalizePath = (pathname: string) => {
  const withLeading = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const trimmed = withLeading.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

/**
 * Resolve browser path to internal page key. Supports legacy URLs for redirects.
 * Unknown paths return `not-found` (no soft-404 to home).
 */
export function getPageKeyFromPath(pathname: string): AppRouteKey {
  const path = normalizePath(pathname);

  const map: Record<string, PageKey> = {
    '/': 'home',
    '/services': 'services',
    '/about': 'about',
    '/about-us': 'about',
    '/contact': 'contact',
    '/privacy-policy': 'privacy-policy',
    '/terms-and-conditions': 'terms-and-conditions',
    '/blog': 'blog',
    '/balcony': 'balcony',
    '/balcony-safety-nets-bangalore': 'balcony',
    '/pigeon': 'pigeon',
    '/pigeon-safety-nets-bangalore': 'pigeon',
    '/children': 'children',
    '/children-safety-nets-bangalore': 'children',
    '/monkey': 'monkey',
    '/coconut': 'coconut',
    '/coconut-safety-nets-bangalore': 'coconut',
    '/cloth-hanger': 'cloth-hanger',
    '/invisible-grills': 'invisible-grills',
    '/invisible-grill-bangalore': 'invisible-grills',
    '/construction': 'construction',
    '/sports': 'sports',
    '/services/balcony-safety-nets-bangalore': 'balcony',
    '/services/pigeon-safety-nets-bangalore': 'pigeon',
    '/services/children-safety-nets-bangalore': 'children',
    '/services/construction-safety-nets-bangalore': 'construction',
    '/services/monkey-safety-nets-bangalore': 'monkey',
    '/services/coconut-safety-nets-bangalore': 'coconut',
  };

  return map[path] ?? 'not-found';
}

export function getPathForPageKey(page: string): string {
  if (page === 'not-found') return '/404';
  const key = page as PageKey;
  if (key in PAGE_TO_PATH) return PAGE_TO_PATH[key];
  return '/';
}

/** True when path is a known public page (or known legacy alias). */
export function isKnownPublicPath(pathname: string): boolean {
  return getPageKeyFromPath(pathname) !== 'not-found';
}
