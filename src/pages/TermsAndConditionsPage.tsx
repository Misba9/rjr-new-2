import { buildHubPageSchemas } from '../utils/seo';
import { getPageSeo } from '../constants/pageSeo';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import { BUSINESS_NAME, EMAIL, PHONE_PRIMARY_DISPLAY, SITE_URL, WARRANTY_YEARS } from '../constants/nap';

interface TermsAndConditionsPageProps {
  onNavigate?: (page: string) => void;
}

const sections: Array<{ title: string; paragraphs: string[] }> = [
  {
    title: 'Agreement',
    paragraphs: [
      `These Terms and Conditions (“Terms”) govern your use of the website at ${SITE_URL} and your engagement with ${BUSINESS_NAME} for quotations, site visits, and installation of safety nets, grills, and related products in Bengaluru and areas we serve.`,
      'By requesting a quote, booking a visit, or using our services, you agree to these Terms. If you are accepting on behalf of a company or housing society, you confirm you are authorised to do so.',
    ],
  },
  {
    title: 'Services and quotations',
    paragraphs: [
      'We provide on-site inspection, measurement, and installation of safety netting and related solutions as described on our website or in written quotations.',
      'Quotations are based on information observed at the site and materials selected. Final scope and price may be confirmed in writing before work begins. Verbal estimates are indicative only unless confirmed in writing.',
    ],
  },
  {
    title: 'Site access and customer responsibilities',
    paragraphs: [
      'You agree to provide safe access to the installation area, reasonable cooperation with our team, and any permissions required by your apartment association, landlord, or applicable authority.',
      'You are responsible for the accuracy of information you provide about the site and for disclosing conditions that may affect installation (for example, structural constraints or restricted working hours).',
    ],
  },
  {
    title: 'Payments',
    paragraphs: [
      'Payment terms will be communicated with your quotation or invoice. Unless otherwise agreed, materials may be ordered and installation scheduled after acceptance of the quote and any required advance.',
      'Taxes or statutory charges applicable at the time of invoicing will be added as required by law.',
    ],
  },
  {
    title: 'Warranty and workmanship',
    paragraphs: [
      `We stand behind our installations with the warranty period and terms communicated to you at the time of service (commonly ${WARRANTY_YEARS}+ years on eligible installations, subject to written warranty terms).`,
      'Warranty does not cover damage from misuse, unauthorised modification, natural disasters, or normal wear beyond product specifications. Specific exclusions will be explained in your warranty or service documentation.',
    ],
  },
  {
    title: 'Limitation of liability',
    paragraphs: [
      'To the maximum extent permitted by applicable law, our total liability arising from any installation or service shall not exceed the amount you paid us for that specific scope of work, except where liability cannot be limited by law.',
      'We are not liable for indirect, incidental, or consequential losses, including loss of profit, except where such exclusion is not permitted by law.',
    ],
  },
  {
    title: 'Cancellations and rescheduling',
    paragraphs: [
      'If you need to cancel or reschedule a confirmed visit or installation, please notify us as early as possible. Reasonable cancellation or rescheduling fees may apply if materials have been ordered or teams have been deployed, as communicated at the time.',
    ],
  },
  {
    title: 'Website use',
    paragraphs: [
      'Website content is for general information. We strive for accuracy but do not warrant that the site is error-free or uninterrupted. Links to third-party sites are provided for convenience; we are not responsible for their content or policies.',
    ],
  },
  {
    title: 'Governing law',
    paragraphs: [
      'These Terms are governed by the laws of India. Courts at Bengaluru, Karnataka, shall have exclusive jurisdiction over disputes arising from these Terms or our services, subject to applicable consumer protection laws.',
    ],
  },
  {
    title: 'Changes',
    paragraphs: [
      'We may update these Terms from time to time. The “Last updated” date below will change when we do. Material changes may be communicated where appropriate; continued use of the website or services after updates constitutes acceptance where permitted by law.',
    ],
  },
];

export default function TermsAndConditionsPage({ onNavigate }: TermsAndConditionsPageProps) {
  const termsSeo = getPageSeo('terms-and-conditions');

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead {...termsSeo} />
      <JsonLd
        data={buildHubPageSchemas({
          pageKey: 'terms-and-conditions',
          name: 'Terms and Conditions',
          description: termsSeo.description,
          breadcrumbName: 'Terms & Conditions',
        })}
      />
      <section className="border-b border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: 12 May 2026</p>
          <p className="mt-6 text-gray-700 leading-relaxed">
            Please read these terms carefully before using our website or booking our services.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-semibold text-gray-900">{s.title}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 text-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Questions about these Terms? Contact {BUSINESS_NAME}:{' '}
              <a href={`mailto:${EMAIL}`} className="text-blue-700 hover:underline">
                {EMAIL}
              </a>
              , or{' '}
              <a href="tel:+917075051812" className="text-blue-700 hover:underline">
                {PHONE_PRIMARY_DISPLAY}
              </a>
              .
            </p>
          </section>
        </div>

        {onNavigate && (
          <nav className="mt-12 border-t border-gray-200 pt-8" aria-label="Related pages">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="text-sm font-medium text-blue-700 hover:underline"
            >
              Back to home
            </button>
            <span className="mx-2 text-gray-400" aria-hidden>
              ·
            </span>
            <button
              type="button"
              onClick={() => onNavigate('privacy-policy')}
              className="text-sm font-medium text-blue-700 hover:underline"
            >
              Privacy Policy
            </button>
            <span className="mx-2 text-gray-400" aria-hidden>
              ·
            </span>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="text-sm font-medium text-blue-700 hover:underline"
            >
              Contact
            </button>
          </nav>
        )}
      </article>
    </div>
  );
}
