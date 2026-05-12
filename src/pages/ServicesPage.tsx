import { useEffect } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { updatePageMeta, addSchemaMarkup } from '../utils/seo';
import { canonicalUrl } from '../constants/routes';
import LeadQuoteForm from '../components/LeadQuoteForm';
import SectionLeadCTA from '../components/SectionLeadCTA';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const coreServices: Array<{ key: string; title: string; blurb: string }> = [
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
  useEffect(() => {
    updatePageMeta({
      title: 'Safety Net Services in Bangalore | RJR Safety Nets',
      description:
        'Balcony, pigeon, children, invisible grill, construction, monkey, and coconut tree safety nets in Bangalore. Safety nets installation Bengaluru with free quote — call or WhatsApp RJR Safety Nets.',
      keywords:
        'safety nets in Bangalore, balcony safety nets Bangalore, pigeon safety nets Bangalore, bird net Bangalore, children safety nets Bangalore, safety nets installation Bangalore, safety nets near me',
      canonical: canonicalUrl('services'),
      ogTitle: 'Safety Net Services in Bangalore | RJR Safety Nets',
      ogDescription: 'Full-service safety netting for homes and sites across Bengaluru.',
      author: 'RJR Safety Nets',
    });

    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonicalUrl('services')}#webpage`,
      name: 'Safety Net Services in Bangalore',
      url: canonicalUrl('services'),
      isPartOf: { '@type': 'WebSite', name: 'RJR Safety Nets', url: 'https://www.rjrsafetynets.in' },
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
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
                  <button
                    type="button"
                    onClick={() => onNavigate(s.key)}
                    className="flex w-full items-start justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-md"
                  >
                    <span>
                      <span className="block text-lg font-semibold text-gray-900">{s.title}</span>
                      <span className="mt-1 block text-gray-600">{s.blurb}</span>
                    </span>
                    <ArrowRight className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden />
                  </button>
                </li>
              ))}
            </ul>

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

          <div className="lg:col-span-1">
            <LeadQuoteForm heading="Book installation (WhatsApp)" />
            <p className="mt-4 text-sm text-gray-500">
              Looking for sports nets, invisible grills, or cloth hanger nets? Use the header menu — this hub focuses on the
              highest-demand safety netting categories for Bangalore homes and sites.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
