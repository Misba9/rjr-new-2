const GA_MEASUREMENT_ID = 'G-KWN154BVLM';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Track a SPA route change (initial page_view is sent by the gtag config in index.html). */
export function trackPageView(path: string, title?: string): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title ?? document.title,
  });
}
