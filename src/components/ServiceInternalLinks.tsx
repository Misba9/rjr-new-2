import type { MouseEvent } from 'react';
import { PAGE_TO_PATH } from '../constants/routes';
import {
  getRelatedServiceLinks,
  SERVICE_HUB_LINKS,
  type ServicePageKey,
} from '../constants/serviceLinks';

type ServiceInternalLinksProps = {
  /** Current service page key — related links exclude this page */
  pageKey: ServicePageKey;
  onNavigate?: (page: string) => void;
  className?: string;
};

/**
 * Crawlable internal links for every service page:
 * Home, About, Contact, Blog, All services + related service URLs.
 */
export default function ServiceInternalLinks({
  pageKey,
  onNavigate,
  className = '',
}: ServiceInternalLinksProps) {
  const related = getRelatedServiceLinks(pageKey);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, page: string) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <section
      className={`border-t border-gray-100 bg-gray-50 py-12 ${className}`}
      aria-labelledby="service-internal-links-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 id="service-internal-links-heading" className="text-2xl font-bold text-gray-900 md:text-3xl">
          Explore more
        </h2>
        <p className="mt-2 text-gray-600">
          Continue browsing RJR Safety Nets — useful pages and related installation services in Bangalore.
        </p>

        <nav className="mt-8" aria-label="Site pages">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Site pages</h3>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {SERVICE_HUB_LINKS.map(({ label, page }) => (
              <li key={page}>
                <a
                  href={PAGE_TO_PATH[page]}
                  className="font-medium text-blue-700 hover:underline"
                  onClick={(e) => handleClick(e, page)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {related.length > 0 ? (
          <nav className="mt-8" aria-label="Related services">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Related services
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {related.map(({ page, label, href }) => (
                <li key={page}>
                  <a
                    href={href}
                    className="font-medium text-blue-700 hover:underline"
                    onClick={(e) => handleClick(e, page)}
                  >
                    {label} in Bangalore
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </section>
  );
}
