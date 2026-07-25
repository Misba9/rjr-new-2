import type { MouseEvent } from 'react';
import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../constants/nap';
import { PAGE_TO_PATH } from '../constants/routes';

interface NotFoundPageProps {
  onNavigate?: (page: string) => void;
}

/**
 * Soft-404 page for unknown URLs — noindex so crawlers do not index junk paths.
 */
export default function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  const handle = (page: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) return;
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <div className="min-h-[60vh] bg-white px-4 py-20 sm:px-6 lg:px-8">
      <SEOHead
        title="Page Not Found | RJR Safety Nets Bangalore"
        description="This page does not exist. Return to RJR Safety Nets home for balcony, pigeon, and invisible grill services in Bangalore."
        keywords="RJR Safety Nets, page not found"
        canonical={`${SITE_URL}/404`}
        robots="noindex, follow"
      />
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">404</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">Page not found</h1>
        <p className="mt-4 text-gray-700">
          The link may be outdated or typed incorrectly. Try one of these pages instead:
        </p>
        <nav className="mt-8 flex flex-wrap justify-center gap-4" aria-label="Helpful links">
          <a href={PAGE_TO_PATH.home} onClick={handle('home')} className="font-semibold text-blue-700 hover:underline">
            Home
          </a>
          <a href={PAGE_TO_PATH.services} onClick={handle('services')} className="font-semibold text-blue-700 hover:underline">
            Services
          </a>
          <a href={PAGE_TO_PATH.contact} onClick={handle('contact')} className="font-semibold text-blue-700 hover:underline">
            Contact
          </a>
          <a href={PAGE_TO_PATH.blog} onClick={handle('blog')} className="font-semibold text-blue-700 hover:underline">
            Blog
          </a>
        </nav>
      </div>
    </div>
  );
}
