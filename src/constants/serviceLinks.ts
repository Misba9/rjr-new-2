import { PAGE_TO_PATH, type PageKey } from './routes';
import type { BreadcrumbItem } from '../components/Breadcrumbs';

/** Human-readable labels for service (and hub) pages */
export const SERVICE_PAGE_LABELS: Partial<Record<PageKey, string>> = {
  balcony: 'Balcony Safety Nets',
  pigeon: 'Pigeon Safety Nets',
  children: 'Children Safety Nets',
  monkey: 'Monkey Safety Nets',
  coconut: 'Coconut Safety Nets',
  'invisible-grills': 'Invisible Grill',
  construction: 'Construction Safety Nets',
  sports: 'Sports Practice Nets',
  'cloth-hanger': 'Cloth Hanger Nets',
  services: 'Services',
};

/** Related services for internal linking (excludes current page) */
export const RELATED_SERVICES: Partial<Record<PageKey, PageKey[]>> = {
  balcony: ['children', 'pigeon', 'invisible-grills', 'cloth-hanger'],
  pigeon: ['balcony', 'children', 'monkey', 'invisible-grills'],
  children: ['balcony', 'pigeon', 'invisible-grills'],
  monkey: ['pigeon', 'balcony', 'coconut'],
  coconut: ['monkey', 'balcony', 'construction'],
  'invisible-grills': ['balcony', 'children', 'pigeon'],
  construction: ['sports', 'balcony', 'coconut'],
  sports: ['construction', 'balcony', 'children'],
  'cloth-hanger': ['balcony', 'pigeon', 'children'],
};

export type ServicePageKey = keyof typeof RELATED_SERVICES;

/** Core hub links every service page should expose for crawlability */
export const SERVICE_HUB_LINKS: Array<{ label: string; page: PageKey }> = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Contact', page: 'contact' },
  { label: 'All services', page: 'services' },
  { label: 'Blog', page: 'blog' },
];

export function getRelatedServiceLinks(pageKey: ServicePageKey) {
  return (RELATED_SERVICES[pageKey] ?? []).map((page) => ({
    page,
    label: SERVICE_PAGE_LABELS[page] ?? page,
    href: PAGE_TO_PATH[page],
  }));
}

/** Home → Services → current service (or Home → current for hub pages) */
export function getServiceBreadcrumbs(
  pageKey: ServicePageKey | 'services',
  currentLabel?: string
): BreadcrumbItem[] {
  const label = currentLabel ?? SERVICE_PAGE_LABELS[pageKey] ?? 'Services';

  if (pageKey === 'services') {
    return [
      { name: 'Home', href: PAGE_TO_PATH.home, page: 'home' },
      { name: 'Services', href: PAGE_TO_PATH.services },
    ];
  }

  return [
    { name: 'Home', href: PAGE_TO_PATH.home, page: 'home' },
    { name: 'Services', href: PAGE_TO_PATH.services, page: 'services' },
    { name: label, href: PAGE_TO_PATH[pageKey] },
  ];
}
