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
  | 'whitefield'
  | 'hsr-layout'
  | 'electronic-city'
  | 'indiranagar'
  | 'koramangala'
  | 'marathahalli'
  | 'btm-layout';

export const PAGE_TO_PATH: Record<PageKey, string> = {
  home: '/',
  services: '/services',
  balcony: '/services/balcony-safety-nets-bangalore',
  pigeon: '/services/pigeon-safety-nets-bangalore',
  children: '/services/children-safety-nets-bangalore',
  monkey: '/services/monkey-safety-nets-bangalore',
  coconut: '/services/coconut-safety-nets-bangalore',
  'cloth-hanger': '/cloth-hanger',
  'invisible-grills': '/invisible-grills',
  construction: '/services/construction-safety-nets-bangalore',
  sports: '/sports',
  blog: '/blog',
  about: '/about',
  contact: '/contact',
  whitefield: '/location/whitefield-safety-nets',
  'hsr-layout': '/hsr-layout',
  'electronic-city': '/location/electronic-city-safety-nets',
  indiranagar: '/location/indiranagar-safety-nets',
  koramangala: '/koramangala',
  marathahalli: '/location/marathahalli-safety-nets',
  'btm-layout': '/location/btm-safety-nets',
};

export const canonicalUrl = (page: PageKey): string => `${SITE_URL}${PAGE_TO_PATH[page]}`;

const normalizePath = (pathname: string) => {
  const withLeading = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const trimmed = withLeading.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

/**
 * Resolve browser path to internal page key. Supports legacy URLs for redirects.
 */
export function getPageKeyFromPath(pathname: string): PageKey {
  const path = normalizePath(pathname);

  const map: Record<string, PageKey> = {
    '/': 'home',
    '/services': 'services',
    '/about': 'about',
    '/about-us': 'about',
    '/contact': 'contact',
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
    '/construction': 'construction',
    '/sports': 'sports',
    '/whitefield': 'whitefield',
    '/location/whitefield-safety-nets': 'whitefield',
    '/hsr-layout': 'hsr-layout',
    '/electronic-city': 'electronic-city',
    '/location/electronic-city-safety-nets': 'electronic-city',
    '/indiranagar': 'indiranagar',
    '/location/indiranagar-safety-nets': 'indiranagar',
    '/koramangala': 'koramangala',
    '/marathahalli': 'marathahalli',
    '/location/marathahalli-safety-nets': 'marathahalli',
    '/btm-layout': 'btm-layout',
    '/location/btm-safety-nets': 'btm-layout',
    '/services/balcony-safety-nets-bangalore': 'balcony',
    '/services/pigeon-safety-nets-bangalore': 'pigeon',
    '/services/children-safety-nets-bangalore': 'children',
    '/services/construction-safety-nets-bangalore': 'construction',
    '/services/monkey-safety-nets-bangalore': 'monkey',
    '/services/coconut-safety-nets-bangalore': 'coconut',
  };

  return map[path] ?? 'home';
}

export function getPathForPageKey(page: string): string {
  const key = page as PageKey;
  if (key in PAGE_TO_PATH) return PAGE_TO_PATH[key];
  return '/';
}
