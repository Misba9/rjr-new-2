import { CheckCircle } from 'lucide-react';
import { PHONE_TEL, PHONE_PRIMARY_DISPLAY, WHATSAPP_URL } from '../constants/nap';

export interface ServiceContentBlockProps {
  serviceName: string;
  overview: string;
  benefits: string[];
  pricingRange: string;
  installationSteps: string[];
  faqs: Array<{ question: string; answer: string }>;
  variant: 'blue' | 'green' | 'pink';
}

const variantStyles = {
  blue: {
    accent: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    btn: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  green: {
    accent: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-100',
    btn: 'bg-green-600 hover:bg-green-700 text-white',
  },
  pink: {
    accent: 'text-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
    btn: 'bg-pink-600 hover:bg-pink-700 text-white',
  },
};

export default function ServiceContentBlock({
  serviceName,
  overview,
  benefits,
  pricingRange,
  installationSteps,
  faqs,
  variant,
}: ServiceContentBlockProps) {
  const styles = variantStyles[variant];

  return (
    <section className="py-12 sm:py-16 bg-white" aria-labelledby="service-content-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="service-content-heading" className="sr-only">
          {serviceName} – Complete Guide
        </h2>

        {/* Service Overview */}
        <div className="mb-10">
          <h3 className={`text-xl font-bold mb-3 ${styles.accent}`}>
            About {serviceName} in Bangalore
          </h3>
          <p className="text-gray-700 leading-relaxed">{overview}</p>
        </div>

        {/* Benefits */}
        <div className="mb-10">
          <h3 className={`text-xl font-bold mb-4 ${styles.accent}`}>Key Benefits</h3>
          <ul className="space-y-2">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle
                  size={20}
                  className={`flex-shrink-0 mt-0.5 ${
                    variant === 'blue' ? 'text-blue-600' : variant === 'green' ? 'text-green-600' : 'text-pink-600'
                  }`}
                />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Range */}
        <div className={`mb-10 p-4 rounded-lg ${styles.bg} ${styles.border} border`}>
          <h3 className={`text-xl font-bold mb-2 ${styles.accent}`}>Transparent Pricing</h3>
          <p className="text-gray-700">{pricingRange}</p>
        </div>

        {/* Installation Process */}
        <div className="mb-10">
          <h3 className={`text-xl font-bold mb-4 ${styles.accent}`}>Our Installation Process</h3>
          <ol className="space-y-3">
            {installationSteps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    variant === 'blue' ? 'bg-blue-600' : variant === 'green' ? 'bg-green-600' : 'bg-pink-600'
                  }`}
                >
                  {i + 1}
                </span>
                <span className="text-gray-700 pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Top 3 FAQs */}
        <div className="mb-10">
          <h3 className={`text-xl font-bold mb-4 ${styles.accent}`}>Common Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4 last:border-0">
                <p className="font-semibold text-gray-900 mb-1">{faq.question}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`p-6 rounded-xl ${styles.bg} ${styles.border} border text-center`}>
          <p className="font-semibold text-gray-900 mb-4">
            Ready for {serviceName}? Get a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_TEL}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-colors ${styles.btn}`}
            >
              Call {PHONE_PRIMARY_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 transition-colors"
            >
              WhatsApp for Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
