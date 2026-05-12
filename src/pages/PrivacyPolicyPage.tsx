import { useEffect } from 'react';
import { updatePageMeta, addSchemaMarkup } from '../utils/seo';
import { canonicalUrl } from '../constants/routes';
import { BUSINESS_NAME, EMAIL, PHONE_PRIMARY_DISPLAY, SITE_URL } from '../constants/nap';

interface PrivacyPolicyPageProps {
  onNavigate?: (page: string) => void;
}

const sections: Array<{ title: string; paragraphs: string[] }> = [
  {
    title: 'Introduction',
    paragraphs: [
      `${BUSINESS_NAME} (“we”, “us”, “our”) respects your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website, contact us, or use our installation services in Bengaluru and surrounding areas.`,
      'By using our website or services, you agree to this policy. If you do not agree, please discontinue use of the site and contact us only through other channels you are comfortable with.',
    ],
  },
  {
    title: 'Information we may collect',
    paragraphs: [
      'Contact and enquiry details you provide voluntarily, such as your name, phone number, email address, property locality, and service requirements when you call, message on WhatsApp, email us, or submit a form.',
      'Technical data typical of websites, such as browser type, general device or network information, and pages visited, as recorded by our hosting or analytics tools if enabled.',
    ],
  },
  {
    title: 'How we use your information',
    paragraphs: [
      'To respond to enquiries, provide quotations, schedule site visits, and deliver and support our safety net and related installation services.',
      'To communicate with you about your project, warranty, or service follow-up where relevant.',
      'To improve our website and customer experience, and to meet legal or regulatory obligations where applicable.',
    ],
  },
  {
    title: 'Cookies and similar technologies',
    paragraphs: [
      'Our site may use cookies or similar technologies that are necessary for the site to function, or that help us understand aggregate usage. You can control cookies through your browser settings; disabling some cookies may affect site functionality.',
    ],
  },
  {
    title: 'Sharing of information',
    paragraphs: [
      'We do not sell your personal information. We may share information only with trusted service providers who assist our business (for example, hosting or communication tools) under appropriate confidentiality, or when required by law.',
    ],
  },
  {
    title: 'Data retention and security',
    paragraphs: [
      'We retain enquiry and project-related information only as long as needed for the purposes above, including warranty and customer support, unless a longer period is required by law.',
      'We use reasonable administrative and technical measures to protect information against unauthorised access, loss, or misuse. No method of transmission over the internet is completely secure.',
    ],
  },
  {
    title: 'Your choices',
    paragraphs: [
      'You may request access to or correction of personal information we hold about you, or ask questions about this policy, by contacting us using the details below. We will respond within a reasonable time.',
    ],
  },
  {
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. Continued use of the website after changes constitutes acceptance of the revised policy.',
    ],
  },
];

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  const pageUrl = canonicalUrl('privacy-policy');

  useEffect(() => {
    updatePageMeta({
      title: 'Privacy Policy | RJR Safety Nets Bangalore',
      description:
        'Privacy Policy for RJR Safety Nets — how we collect, use, and protect your information when you use our website and services in Bangalore.',
      keywords: 'RJR Safety Nets privacy policy, data protection, Bangalore safety nets',
      canonical: pageUrl,
      ogTitle: 'Privacy Policy | RJR Safety Nets',
      ogDescription: 'How we handle your personal information and enquiries.',
      ogType: 'website',
      author: BUSINESS_NAME,
    });

    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'Privacy Policy',
      isPartOf: { '@type': 'WebSite', name: BUSINESS_NAME, url: SITE_URL },
    });
  }, [pageUrl]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="border-b border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: 12 May 2026</p>
          <p className="mt-6 text-gray-700 leading-relaxed">
            This policy applies to {SITE_URL} and offline enquiries handled by {BUSINESS_NAME}.
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
            <h2 className="text-xl font-semibold text-gray-900">Contact us</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              For privacy-related questions or requests, contact {BUSINESS_NAME}:{' '}
              <a href={`mailto:${EMAIL}`} className="text-blue-700 hover:underline">
                {EMAIL}
              </a>
              , or call{' '}
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
              onClick={() => onNavigate('terms-and-conditions')}
              className="text-sm font-medium text-blue-700 hover:underline"
            >
              Terms &amp; Conditions
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
