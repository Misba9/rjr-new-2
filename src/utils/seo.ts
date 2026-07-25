import { getGlobalSchemas } from './schema';

// Re-export schema helpers so existing imports from utils/seo keep working
export {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  buildServicePageSchemas,
  buildHubPageSchemas,
  getGlobalSchemas,
  ORGANIZATION_ID,
  LOCAL_BUSINESS_ID,
  WEBSITE_ID,
} from './schema';

/**
 * Add structured data (Schema.org) markup.
 * Removes only page-level dynamic schemas (`data-dynamic-schema`).
 * Preserves index.html static graph and `data-global-schema` injected on app load.
 */
export const addSchemaMarkup = (schema: object | object[]) => {
  const schemas = Array.isArray(schema) ? schema : [schema];
  document.querySelectorAll('script[type="application/ld+json"][data-dynamic-schema]').forEach((s) => s.remove());

  schemas.forEach((s) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-dynamic-schema', 'true');
    script.text = JSON.stringify(s);
    document.head.appendChild(script);
  });
};

/**
 * Organization + LocalBusiness + WebSite JSON-LD.
 * Call once on app mount. Skips if index.html (or a prior inject) already provides Organization.
 */
export const injectGlobalSchemasOnce = () => {
  if (document.querySelector('script[type="application/ld+json"][data-global-schema]')) return;

  // Avoid duplicating the static @graph from index.html
  const existing = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
  const alreadyPresent = existing.some((el) => el.textContent?.includes('"#organization"') || el.textContent?.includes('/#organization'));
  if (alreadyPresent) return;

  getGlobalSchemas().forEach((schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-global-schema', 'true');
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });
};

/** @deprecated Use injectGlobalSchemasOnce */
export const injectGlobalWebSiteSchemaOnce = injectGlobalSchemasOnce;

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
