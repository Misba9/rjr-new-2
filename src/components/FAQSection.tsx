import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import { FAQ } from '../types';

interface FAQSectionProps {
  faqs: FAQ[];
  /** Visible section title (always one H2) */
  title?: string;
  headingId?: string;
}

/**
 * FAQ accordion with a single H2 and H3 per question (no skipped levels).
 */
export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  headingId,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const autoId = useId();
  const titleId = headingId ?? `faq-heading-${autoId}`;

  return (
    <section className="py-16 bg-gray-50" aria-labelledby={titleId}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id={titleId} className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          {title}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const panelId = `${titleId}-panel-${index}`;
            const buttonId = `${titleId}-button-${index}`;
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <h3 className="text-base font-semibold text-gray-900 m-0">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50 focus-visible:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-600"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={isOpen ? 'px-6 pb-4 text-gray-700 leading-relaxed' : undefined}
                >
                  {isOpen ? faq.answer : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
