import { PageMeta } from '../types';

const SITE_URL = 'https://rjrsafetynets.com'; // Update with actual domain
const DEFAULT_IMAGE = '/og-image.jpg'; // Default Open Graph image

/**
 * Set or update a meta tag
 */
const setMetaTag = (selector: string, attribute: string, value: string) => {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    if (selector.includes('property=')) {
      const prop = selector.match(/property="([^"]+)"/)?.[1];
      if (prop) element.setAttribute('property', prop);
    } else if (selector.includes('name=')) {
      const name = selector.match(/name="([^"]+)"/)?.[1];
      if (name) element.setAttribute('name', name);
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
};

/**
 * Set canonical URL
 */
const setCanonicalUrl = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
};

/**
 * Update all page meta tags including SEO, Open Graph, and Twitter Cards
 */
export const updatePageMeta = (meta: PageMeta) => {
  // Basic meta tags
  document.title = meta.title;
  setMetaTag('meta[name="description"]', 'content', meta.description);
  setMetaTag('meta[name="keywords"]', 'content', meta.keywords);
  
  // Author
  if (meta.author) {
    setMetaTag('meta[name="author"]', 'content', meta.author);
  }
  
  // Robots
  const robots = meta.robots || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  setMetaTag('meta[name="robots"]', 'content', robots);
  setMetaTag('meta[name="googlebot"]', 'content', robots);
  
  // Canonical URL
  if (meta.canonical) {
    setCanonicalUrl(meta.canonical);
  }
  
  // Open Graph tags
  const ogTitle = meta.ogTitle || meta.title;
  const ogDescription = meta.ogDescription || meta.description;
  const ogImage = meta.ogImage || DEFAULT_IMAGE;
  const ogType = meta.ogType || 'website';
  
  setMetaTag('meta[property="og:title"]', 'content', ogTitle);
  setMetaTag('meta[property="og:description"]', 'content', ogDescription);
  setMetaTag('meta[property="og:image"]', 'content', ogImage);
  setMetaTag('meta[property="og:type"]', 'content', ogType);
  setMetaTag('meta[property="og:url"]', 'content', meta.canonical || window.location.href);
  setMetaTag('meta[property="og:site_name"]', 'content', 'RJR Safety Nets Bangalore');
  setMetaTag('meta[property="og:locale"]', 'content', 'en_IN');
  
  // Twitter Card tags
  const twitterCard = meta.twitterCard || 'summary_large_image';
  const twitterTitle = meta.twitterTitle || ogTitle;
  const twitterDescription = meta.twitterDescription || ogDescription;
  const twitterImage = meta.twitterImage || ogImage;
  
  setMetaTag('meta[name="twitter:card"]', 'content', twitterCard);
  setMetaTag('meta[name="twitter:title"]', 'content', twitterTitle);
  setMetaTag('meta[name="twitter:description"]', 'content', twitterDescription);
  setMetaTag('meta[name="twitter:image"]', 'content', twitterImage);
  
  // Additional SEO tags
  setMetaTag('meta[name="viewport"]', 'content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
  setMetaTag('meta[http-equiv="X-UA-Compatible"]', 'content', 'IE=edge');
  setMetaTag('meta[name="format-detection"]', 'content', 'telephone=no');
  setMetaTag('meta[name="theme-color"]', 'content', '#2563eb');
};

/**
 * Add structured data (Schema.org) markup
 */
export const addSchemaMarkup = (schema: object) => {
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Generate breadcrumb schema
 */
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
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
};

/**
 * Generate FAQ schema
 */
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
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
};

/**
 * Generate LocalBusiness schema for better local SEO
 */
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: 'RJR Safety Nets',
    image: `${SITE_URL}/logo.png`,
    description: 'Professional safety net installation services in Bangalore for balconies, pigeon control, children safety, construction sites, and sports facilities.',
    url: SITE_URL,
    telephone: '+917075051812',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bangalore',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9716,
      longitude: 77.5946,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Bangalore',
      },
      {
        '@type': 'State',
        name: 'Karnataka',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1000',
    },
    sameAs: [
      'https://www.facebook.com/rjrsafetynets',
      'https://www.instagram.com/rjrsafetynets',
      'https://twitter.com/rjrsafetynets',
    ],
  };
};

/**
 * Preload critical resources
 */
export const preloadResources = (resources: Array<{ href: string; as: string; type?: string }>) => {
  resources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) {
      link.type = resource.type;
    }
    document.head.appendChild(link);
  });
};

