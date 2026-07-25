import {
  SITE_URL,
  ADDRESS,
  EMAIL,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  SERVICE_AREAS,
  BUSINESS_NAME,
  BUSINESS_DISPLAY_NAME,
} from '../constants/nap';
import { PAGE_TO_PATH, canonicalUrl, type PageKey } from '../constants/routes';

/** Stable @id anchors used across Organization, LocalBusiness, WebSite, and Service graphs */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const LOGO_URL = `${SITE_URL}/logo.png`;
const IMAGE_URL = `${SITE_URL}/og-image.jpg`;

const SAME_AS = [
  'https://www.facebook.com/rjrsafetynets',
  'https://www.instagram.com/rjrsafetynets',
  'https://twitter.com/rjrsafetynets',
] as const;

const GEO = {
  '@type': 'GeoCoordinates' as const,
  latitude: 13.0283,
  longitude: 77.5536,
};

const POSTAL_ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: ADDRESS.streetAddress,
  addressLocality: ADDRESS.addressLocality,
  addressRegion: ADDRESS.addressRegion,
  postalCode: ADDRESS.postalCode,
  addressCountry: ADDRESS.addressCountry,
};

const AREA_SERVED = [
  { '@type': 'City' as const, name: 'Bangalore' },
  { '@type': 'City' as const, name: 'Bengaluru' },
  { '@type': 'State' as const, name: 'Karnataka' },
  ...SERVICE_AREAS.filter((a) => a !== 'Bangalore').map((area) => ({
    '@type': 'City' as const,
    name: area,
  })),
];

const OPENING_HOURS = {
  '@type': 'OpeningHoursSpecification' as const,
  dayOfWeek: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  opens: '08:00',
  closes: '20:00',
};

export type FaqItem = { question: string; answer: string };

export type ServicePageKey = Extract<
  PageKey,
  | 'balcony'
  | 'pigeon'
  | 'children'
  | 'monkey'
  | 'coconut'
  | 'construction'
  | 'invisible-grills'
  | 'cloth-hanger'
  | 'sports'
>;

export type ServiceSchemaInput = {
  /** Router page key — used for canonical URL */
  pageKey: ServicePageKey;
  /** schema.org Service.name */
  name: string;
  /** schema.org Service.description */
  description: string;
  /** schema.org Service.serviceType */
  serviceType: string;
  /** Final breadcrumb label (page name) */
  breadcrumbName: string;
  /** On-page FAQs for FAQPage */
  faqs: FaqItem[];
};

/**
 * Organization — brand / legal entity (schema.org/Organization)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: BUSINESS_NAME,
    alternateName: [BUSINESS_DISPLAY_NAME, 'RJR Safety Nets Bengaluru'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
    image: IMAGE_URL,
    email: EMAIL,
    telephone: [PHONE_PRIMARY, PHONE_SECONDARY],
    address: POSTAL_ADDRESS,
    sameAs: [...SAME_AS],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE_PRIMARY,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Kannada', 'Telugu'],
      },
    ],
  };
}

/**
 * LocalBusiness — NAP-aligned local entity (schema.org/LocalBusiness)
 * Linked to Organization via parentOrganization.
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': LOCAL_BUSINESS_ID,
    name: BUSINESS_NAME,
    alternateName: BUSINESS_DISPLAY_NAME,
    description:
      'Professional safety net installation in Bangalore. Balcony safety nets, pigeon safety nets, children safety nets, invisible grills, and more. 10+ years experience, 5+ years warranty.',
    url: SITE_URL,
    image: [LOGO_URL, IMAGE_URL],
    telephone: [PHONE_PRIMARY, PHONE_SECONDARY],
    email: EMAIL,
    priceRange: '$$',
    address: POSTAL_ADDRESS,
    geo: GEO,
    areaServed: AREA_SERVED,
    openingHoursSpecification: OPENING_HOURS,
    parentOrganization: { '@id': ORGANIZATION_ID },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(GOOGLE_RATING),
      reviewCount: String(GOOGLE_REVIEW_COUNT),
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [...SAME_AS],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Safety net services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Balcony safety nets Bangalore' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pigeon safety nets Bangalore' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Children safety nets Bangalore' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Invisible grill Bangalore' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction safety nets Bangalore' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monkey safety nets Bangalore' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Coconut tree safety nets Bangalore' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloth hanger nets Bangalore' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sports practice nets Bangalore' } },
      ],
    },
  };
}

/**
 * WebSite schema — publisher points at Organization
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: BUSINESS_NAME,
    alternateName: [BUSINESS_DISPLAY_NAME, 'RJR Safety Nets Bengaluru'],
    inLanguage: 'en-IN',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

/**
 * Service schema (schema.org/Service) — dynamic per service page
 */
export function generateServiceSchema(input: Omit<ServiceSchemaInput, 'faqs' | 'breadcrumbName'>) {
  const url = canonicalUrl(input.pageKey);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url,
    provider: { '@id': LOCAL_BUSINESS_ID },
    brand: { '@id': ORGANIZATION_ID },
    areaServed: [
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'City', name: 'Bengaluru' },
      { '@type': 'State', name: 'Karnataka' },
    ],
    offers: {
      '@type': 'Offer',
      url,
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR',
        description: 'Free site inspection and custom quotation',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(GOOGLE_RATING),
      reviewCount: String(GOOGLE_REVIEW_COUNT),
      bestRating: '5',
      worstRating: '1',
    },
  };
}

/**
 * BreadcrumbList (schema.org/BreadcrumbList)
 * Uses ListItem.item as a URL string (Google-supported).
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * FAQPage (schema.org/FAQPage)
 */
export function generateFAQSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Dynamic schema set for every service page:
 * Service + BreadcrumbList + FAQPage
 */
export function buildServicePageSchemas(input: ServiceSchemaInput) {
  const serviceUrl = canonicalUrl(input.pageKey);
  const servicesUrl = `${SITE_URL}${PAGE_TO_PATH.services}`;

  return [
    generateServiceSchema(input),
    generateBreadcrumbSchema([
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: servicesUrl },
      { name: input.breadcrumbName, url: serviceUrl },
    ]),
    generateFAQSchema(input.faqs),
  ];
}

/**
 * WebPage / ContactPage / AboutPage / Blog + BreadcrumbList for hub pages
 */
export function buildHubPageSchemas(input: {
  pageKey: PageKey;
  name: string;
  description: string;
  type?: 'WebPage' | 'ContactPage' | 'AboutPage' | 'CollectionPage' | 'Blog';
  breadcrumbName?: string;
}) {
  const pageUrl = canonicalUrl(input.pageKey);
  const type = input.type ?? 'WebPage';
  const crumbName = input.breadcrumbName ?? input.name;

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: input.name,
    description: input.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
    mainEntity: { '@id': LOCAL_BUSINESS_ID },
    inLanguage: 'en-IN',
  };

  const breadcrumbs =
    input.pageKey === 'home'
      ? generateBreadcrumbSchema([{ name: 'Home', url: `${SITE_URL}/` }])
      : generateBreadcrumbSchema([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: crumbName, url: pageUrl },
        ]);

  return [pageSchema, breadcrumbs];
}

/** Global graph injected once on app mount (and mirrored in index.html for non-JS crawlers) */
export function getGlobalSchemas() {
  return [generateOrganizationSchema(), generateLocalBusinessSchema(), generateWebSiteSchema()];
}
