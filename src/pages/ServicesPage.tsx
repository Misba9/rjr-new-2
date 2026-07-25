import { type MouseEvent } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { buildHubPageSchemas } from '../utils/seo';
import { PAGE_TO_PATH, type PageKey } from '../constants/routes';
import { getPageSeo } from '../constants/pageSeo';
import { SERVICE_HUB_LINKS } from '../constants/serviceLinks';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import LeadQuoteForm from '../components/LeadQuoteForm';
import SectionLeadCTA from '../components/SectionLeadCTA';
import ServiceBreadcrumbBar from '../components/ServiceBreadcrumbBar';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const coreServices: Array<{ key: PageKey; title: string; blurb: string }> = [
  {
    key: 'balcony',
    title: 'Balcony safety nets in Bangalore',
    blurb: 'Fall protection for apartments and villas — discreet HDPE nets with professional installation.',
  },
  {
    key: 'pigeon',
    title: 'Pigeon & anti bird net Bangalore',
    blurb: 'Humane bird exclusion for balconies, ducts, and windows — cleaner spaces, fewer droppings.',
  },
  {
    key: 'children',
    title: 'Children safety nets Bangalore',
    blurb: 'Child-safe balcony and window protection with secure anchoring and neat finishing.',
  },
  {
    key: 'invisible-grills',
    title: 'Invisible grill Bangalore',
    blurb: '316 stainless cable grills for windows and balconies — safety with minimal visual impact and strong ventilation.',
  },
  {
    key: 'construction',
    title: 'Construction safety nets Bangalore',
    blurb: 'Site and industrial netting for fall and debris risk — scoped to your project needs.',
  },
  {
    key: 'monkey',
    title: 'Monkey safety nets Bangalore',
    blurb: 'Stronger barriers for monkey-prone zones — practical surveys and durable installs.',
  },
  {
    key: 'coconut',
    title: 'Coconut tree safety nets Bangalore',
    blurb: 'Reduce risk from falling coconuts over driveways, paths, and play areas.',
  },
];

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const servicesSeo = getPageSeo('services');

  const handleNav = (e: MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead {...servicesSeo} />
      <JsonLd
        data={buildHubPageSchemas({
          pageKey: 'services',
          name: 'Safety Net Services in Bangalore',
          description: servicesSeo.description,
          type: 'CollectionPage',
          breadcrumbName: 'Services',
        })}
      />

      <ServiceBreadcrumbBar pageKey="services" onNavigate={onNavigate} />

      <section className="border-b border-gray-100 bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Safety nets in Bangalore — our services</h1>
          <p className="mb-8 max-w-3xl text-lg text-gray-700 md:text-xl">
            RJR Safety Nets installs balcony nets, pigeon safety nets Bangalore, anti bird net Bangalore solutions, children
            nets, construction netting, monkey barriers, and coconut tree protection. Explore each service page and Call
            Now for Free Quote.
          </p>
          <SectionLeadCTA />
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Core services</h2>
            <ul className="space-y-4">
              {coreServices.map((s) => (
                <li key={s.key}>
                  <a
                    href={PAGE_TO_PATH[s.key]}
                    onClick={(e) => handleNav(e, s.key)}
                    className="flex w-full items-start justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-md"
                  >
                    <span>
                      <span className="block text-lg font-semibold text-gray-900">{s.title}</span>
                      <span className="mt-1 block text-gray-600">{s.blurb}</span>
                    </span>
                    <ArrowRight className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>

            <nav className="mt-10" aria-label="More pages">
              <h2 className="mb-3 text-lg font-bold text-gray-900">More from RJR Safety Nets</h2>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {SERVICE_HUB_LINKS.filter((l) => l.page !== 'services').map(({ label, page }) => (
                  <li key={page}>
                    <a
                      href={PAGE_TO_PATH[page]}
                      className="font-medium text-blue-700 hover:underline"
                      onClick={(e) => handleNav(e, page)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={PAGE_TO_PATH.sports}
                    className="font-medium text-blue-700 hover:underline"
                    onClick={(e) => handleNav(e, 'sports')}
                  >
                    Sports practice nets
                  </a>
                </li>
                <li>
                  <a
                    href={PAGE_TO_PATH['cloth-hanger']}
                    className="font-medium text-blue-700 hover:underline"
                    onClick={(e) => handleNav(e, 'cloth-hanger')}
                  >
                    Cloth hanger nets
                  </a>
                </li>
              </ul>
            </nav>

            <h2 className="mb-4 mt-12 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <MapPin className="h-7 w-7 text-blue-600" aria-hidden />
              Local areas we serve
            </h2>
            <p className="mb-4 text-gray-600">
              We schedule installs across busy corridors including Whitefield, HSR Layout, Electronic City, Indiranagar,
              Koramangala, Marathahalli, BTM Layout, and the rest of Bengaluru — call or WhatsApp for the next available
              slot.
            </p>

            <div className="mt-10">
              <SectionLeadCTA variant="blue" />
            </div>
          </div>

          <aside className="lg:col-span-1" aria-labelledby="services-quote-heading">
            <h2 id="services-quote-heading" className="sr-only">
              Request a quote
            </h2>
            <LeadQuoteForm heading="Book installation (WhatsApp)" />
            <p className="mt-4 text-sm text-gray-500">
              Looking for sports nets, invisible grills, or cloth hanger nets? Use the links above — or call for a free
              survey across Bangalore.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
