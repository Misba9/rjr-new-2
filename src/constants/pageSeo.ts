import { SITE_URL } from './nap';
import { PAGE_TO_PATH, canonicalUrl, type PageKey } from './routes';

export type PageSeoMeta = {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
};

/**
 * Single source of truth for unique titles, descriptions, and canonicals.
 * Prevents duplicate meta across pages.
 */
export const PAGE_SEO: Record<PageKey, PageSeoMeta> = {
  home: {
    title: 'RJR Safety Nets | Balcony, Pigeon & Invisible Grill in Bangalore',
    description:
      'RJR Safety Nets installs balcony safety nets, pigeon nets, invisible grills, and children safety nets in Bengaluru. Free inspection, professional installation, 5+ years warranty. Call 7075051812.',
    keywords:
      'RJR Safety Nets, safety nets in Bangalore, balcony safety nets Bangalore, pigeon safety nets Bangalore, invisible grill Bangalore, children safety nets Bangalore, safety nets installation Bangalore, safety nets near me',
    canonical: canonicalUrl('home'),
  },
  services: {
    title: 'Safety Net Services in Bangalore | RJR Safety Nets',
    description:
      'Explore balcony, pigeon, children, invisible grill, construction, monkey, and coconut tree safety nets in Bangalore. Free quote and professional installation from RJR Safety Nets.',
    keywords:
      'safety nets in Bangalore, balcony safety nets Bangalore, pigeon safety nets Bangalore, bird net Bangalore, children safety nets Bangalore, safety nets installation Bangalore',
    canonical: canonicalUrl('services'),
  },
  balcony: {
    title: 'Balcony Safety Nets Bangalore | RJR Safety Nets',
    description:
      'Professional balcony safety net installation in Bangalore by RJR Safety Nets. Affordable, durable HDPE nets with neat fitting and 5+ years warranty. Free inspection.',
    keywords:
      'balcony safety nets Bangalore, balcony safety nets in Bangalore, balcony net price Bangalore, safety nets installation Bangalore',
    canonical: canonicalUrl('balcony'),
  },
  pigeon: {
    title: 'Pigeon Safety Nets Bangalore | Anti Bird Net | RJR Safety Nets',
    description:
      'Humane pigeon safety nets and anti bird net installation in Bangalore. Neat finishing, free inspection, and warranty-backed bird exclusion by RJR Safety Nets.',
    keywords:
      'pigeon safety nets Bangalore, bird net Bangalore, anti bird net Bangalore, pigeon nets installation Bangalore',
    canonical: canonicalUrl('pigeon'),
  },
  children: {
    title: 'Children Safety Nets Bangalore | Child Balcony Protection | RJR',
    description:
      'Child-safe balcony, window, and staircase nets in Bangalore. Fine-mesh HDPE, secure anchoring, free inspection, and warranty-backed fitting by RJR Safety Nets.',
    keywords:
      'children safety nets Bangalore, child balcony nets Bangalore, kids safety nets Bangalore',
    canonical: canonicalUrl('children'),
  },
  monkey: {
    title: 'Monkey Safety Nets Bangalore | Anti-Monkey Protection | RJR',
    description:
      'Humane anti-monkey safety nets for homes, kitchens, gardens, and balconies in Bengaluru. Strong HDPE barriers, free inspection, warranty-backed installs.',
    keywords: 'monkey safety nets Bangalore, anti monkey nets Bangalore, monkey nets installation',
    canonical: canonicalUrl('monkey'),
  },
  coconut: {
    title: 'Coconut Tree Safety Nets Bangalore | Falling Coconut Protection',
    description:
      'Coconut tree safety nets in Bangalore that protect driveways, paths, and homes from falling coconuts. UV-durable netting and professional installation by RJR.',
    keywords: 'coconut tree safety nets Bangalore, coconut safety nets, falling coconut protection',
    canonical: canonicalUrl('coconut'),
  },
  'cloth-hanger': {
    title: 'Cloth Hanger Nets Bangalore | Balcony Clothes Drying Nets | RJR',
    description:
      'Install durable cloth hanger nets in Bangalore for safe balcony drying. Wind-resistant, custom-fit cloth drying solutions from RJR Safety Nets.',
    keywords: 'cloth hanger nets Bangalore, balcony cloth drying nets, clothes drying nets Bangalore',
    canonical: canonicalUrl('cloth-hanger'),
  },
  'invisible-grills': {
    title: 'Invisible Grill Bangalore | Stainless Cable Grills | RJR Safety Nets',
    description:
      'Invisible grill installation in Bangalore with marine-grade stainless steel cables. Child-safe spacing, neat finishing, free consultation from RJR Safety Nets.',
    keywords: 'invisible grill Bangalore, invisible grills Bangalore, window safety grills Bangalore',
    canonical: canonicalUrl('invisible-grills'),
  },
  construction: {
    title: 'Construction Safety Nets Bangalore | Industrial Site Netting | RJR',
    description:
      'Industrial construction safety nets in Bangalore for worker and debris protection. Site-ready netting scoped to your project with professional installation.',
    keywords: 'construction safety nets Bangalore, industrial safety nets Bangalore, site safety nets',
    canonical: canonicalUrl('construction'),
  },
  sports: {
    title: 'Sports Practice Nets Bangalore | Cricket & Multi-Sport Nets | RJR',
    description:
      'Sports practice nets in Bangalore for cricket, tennis, badminton, and multi-sport training. Durable netting for homes, schools, and clubs by RJR Safety Nets.',
    keywords: 'sports practice nets Bangalore, cricket practice nets, tennis nets Bangalore',
    canonical: canonicalUrl('sports'),
  },
  blog: {
    title: 'Safety Nets Blog | Guides & Tips | RJR Safety Nets Bangalore',
    description:
      'Expert guides on balcony nets, pigeon control, children safety, and installation tips from RJR Safety Nets in Bangalore.',
    keywords: 'safety nets blog Bangalore, balcony net guides, pigeon net tips',
    canonical: canonicalUrl('blog'),
  },
  about: {
    title: 'About RJR Safety Nets Bangalore | Trusted Installers Since Years',
    description:
      'Meet RJR Safety Nets — Bangalore\'s trusted safety net specialists with 1000+ customers, premium materials, professional installation, and 5+ years warranty.',
    keywords: 'About RJR Safety Nets, safety net company Bangalore, trusted safety net installers',
    canonical: canonicalUrl('about'),
  },
  contact: {
    title: 'Contact RJR Safety Nets Bangalore | Free Inspection & Quote',
    description:
      'Call or WhatsApp RJR Safety Nets for a free site inspection in Bangalore. Phone +91 7075051812 / +91 8074514411. Mathikere, Bengaluru.',
    keywords: 'contact RJR Safety Nets, safety nets Bangalore phone, free inspection Bangalore',
    canonical: canonicalUrl('contact'),
  },
  'privacy-policy': {
    title: 'Privacy Policy | RJR Safety Nets Bangalore',
    description:
      'How RJR Safety Nets collects, uses, and protects your information when you use our website and installation services in Bangalore.',
    keywords: 'RJR Safety Nets privacy policy, data protection Bangalore',
    canonical: canonicalUrl('privacy-policy'),
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions | RJR Safety Nets Bangalore',
    description:
      'Terms for using the RJR Safety Nets website and installation services — quotations, warranty, liability, and governing law in Karnataka.',
    keywords: 'RJR Safety Nets terms and conditions, service terms Bangalore',
    canonical: canonicalUrl('terms-and-conditions'),
  },
};

export function getPageSeo(page: PageKey): PageSeoMeta {
  return PAGE_SEO[page];
}

/** Absolute path helper for crawlable internal links */
export function absolutePath(page: PageKey): string {
  const path = PAGE_TO_PATH[page];
  return path === '/' ? SITE_URL + '/' : `${SITE_URL}${path}`;
}
