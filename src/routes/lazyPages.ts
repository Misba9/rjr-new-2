import { lazy, type ComponentType, type LazyExoticComponent } from 'react';
import type { AppRouteKey, PageKey } from '../constants/routes';
import { RELATED_SERVICES, type ServicePageKey } from '../constants/serviceLinks';

/**
 * Dynamic import loaders — one chunk per route (code splitting + prefetchable).
 * Vite tree-shakes unused routes from the entry graph except via these imports.
 */
export const pageLoaders: Record<Exclude<AppRouteKey, 'home'>, () => Promise<{ default: ComponentType<any> }>> = {
  services: () => import('../pages/ServicesPage'),
  balcony: () => import('../pages/BalconyPage'),
  pigeon: () => import('../pages/PigeonPage'),
  children: () => import('../pages/ChildrenSafetyNetsPage'),
  monkey: () => import('../pages/MonkeySafetyNetsPage'),
  coconut: () => import('../pages/CoconutSafetyNetsPage'),
  'cloth-hanger': () => import('../pages/ClothHangerPage'),
  'invisible-grills': () => import('../pages/InvisibleGrillsPage'),
  construction: () => import('../pages/ConstructionSafetyNetsPage'),
  sports: () => import('../pages/SportsPracticeNetsPage'),
  blog: () => import('../pages/BlogPage'),
  about: () => import('../pages/AboutUsPage'),
  contact: () => import('../pages/ContactPage'),
  'privacy-policy': () => import('../pages/PrivacyPolicyPage'),
  'terms-and-conditions': () => import('../pages/TermsAndConditionsPage'),
  'not-found': () => import('../pages/NotFoundPage'),
};

export const lazyPages = Object.fromEntries(
  Object.entries(pageLoaders).map(([key, loader]) => [key, lazy(loader)])
) as Record<Exclude<AppRouteKey, 'home'>, LazyExoticComponent<ComponentType<any>>>;

const prefetched = new Set<string>();

/** Warm a route chunk (idempotent). Safe to call on hover / idle. */
export function prefetchPage(page: string): void {
  if (page === 'home' || prefetched.has(page)) return;
  const loader = pageLoaders[page as Exclude<AppRouteKey, 'home'>];
  if (!loader) return;
  prefetched.add(page);
  void loader().catch(() => {
    prefetched.delete(page);
  });
}

/** High-traffic next hops from a given page */
export function getPrefetchTargets(current: AppRouteKey): PageKey[] {
  const hub: PageKey[] = ['services', 'contact', 'about', 'blog'];

  if (current === 'home') {
    return ['balcony', 'pigeon', 'invisible-grills', 'services', 'contact'];
  }
  if (current === 'services') {
    return ['balcony', 'pigeon', 'children', 'invisible-grills', 'contact'];
  }
  if (current === 'not-found') {
    return ['services', 'contact', 'about'];
  }

  const related = RELATED_SERVICES[current as ServicePageKey];
  if (related?.length) {
    return [...related.slice(0, 3), 'contact', 'services'];
  }

  return hub.filter((p) => p !== current);
}

/** Prefetch likely next pages during browser idle time */
export function prefetchLikelyPages(current: AppRouteKey): () => void {
  const targets = getPrefetchTargets(current);
  let cancelled = false;
  let idleId: number | undefined;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const run = () => {
    if (cancelled) return;
    for (const page of targets) {
      prefetchPage(page);
    }
  };

  if (typeof window.requestIdleCallback === 'function') {
    idleId = window.requestIdleCallback(run, { timeout: 2500 });
  } else {
    timeoutId = setTimeout(run, 1200);
  }

  return () => {
    cancelled = true;
    if (idleId !== undefined && typeof window.cancelIdleCallback === 'function') {
      window.cancelIdleCallback(idleId);
    }
    if (timeoutId !== undefined) clearTimeout(timeoutId);
  };
}
