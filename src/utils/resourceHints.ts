/**
 * DOM helpers for resource hints (preload / prefetch / preconnect).
 */

export function ensurePreconnect(href: string, crossOrigin?: boolean): void {
  if (typeof document === 'undefined') return;
  const selector = crossOrigin
    ? `link[rel="preconnect"][href="${href}"][crossorigin]`
    : `link[rel="preconnect"][href="${href}"]`;
  if (document.head.querySelector(selector)) return;
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = href;
  if (crossOrigin) link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
}

export function ensureDnsPrefetch(href: string): void {
  if (typeof document === 'undefined') return;
  if (document.head.querySelector(`link[rel="dns-prefetch"][href="${href}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = href;
  document.head.appendChild(link);
}

/** Prefetch a same-origin document URL (HTML) for next navigation */
export function prefetchDocument(href: string): void {
  if (typeof document === 'undefined') return;
  if (document.head.querySelector(`link[rel="prefetch"][href="${href}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  link.as = 'document';
  document.head.appendChild(link);
}

/** Warm third-party origins used by CTAs (WhatsApp, Maps, phone) */
export function warmThirdPartyOrigins(): void {
  ensureDnsPrefetch('https://wa.me');
  ensureDnsPrefetch('https://api.whatsapp.com');
  ensurePreconnect('https://maps.google.com');
}
