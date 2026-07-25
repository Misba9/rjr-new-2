import { FormEvent, useId, useState } from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_BTN_CLASS } from '../constants/nap';

const SERVICE_OPTIONS = [
  { value: '', label: 'Select service' },
  { value: 'Balcony safety nets', label: 'Balcony Safety Nets' },
  { value: 'Pigeon / bird nets', label: 'Pigeon / Anti Bird Nets' },
  { value: 'Children safety nets', label: 'Children Safety Nets' },
  { value: 'Construction safety nets', label: 'Construction Safety Nets' },
  { value: 'Monkey safety nets', label: 'Monkey Safety Nets' },
  { value: 'Coconut tree safety nets', label: 'Coconut Tree Safety Nets' },
  { value: 'Other', label: 'Other / Not sure' },
];

interface LeadQuoteFormProps {
  id?: string;
  className?: string;
  heading?: string;
  /** Form titles sit under page H2 sections — default H3 avoids skipped levels */
  headingLevel?: 'h2' | 'h3';
}

export default function LeadQuoteForm({
  id = 'lead-quote-form',
  className = '',
  heading = 'Get a free quote',
  headingLevel = 'h3',
}: LeadQuoteFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const reactId = useId();
  const headingId = `${id}-heading-${reactId}`;
  const errorId = `${id}-error-${reactId}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hello RJR Safety Nets, I need a quote.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service || 'Not selected')}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  const HeadingTag = headingLevel;

  return (
    <div id={id} className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      {heading ? (
        <HeadingTag id={headingId} className="mb-4 text-xl font-bold text-gray-900">
          {heading}
        </HeadingTag>
      ) : null}
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        aria-labelledby={heading ? headingId : undefined}
        noValidate={false}
      >
        <div>
          <label htmlFor={`${id}-name`} className="mb-1 block text-sm font-medium text-gray-800">
            Full name <span className="text-red-700" aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-400 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30"
            placeholder="Your name"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="mb-1 block text-sm font-medium text-gray-800">
            Phone number <span className="text-red-700" aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-gray-400 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30"
            placeholder="10-digit mobile"
            aria-required="true"
            aria-describedby={`${id}-phone-hint`}
          />
          <p id={`${id}-phone-hint`} className="mt-1 text-xs text-gray-700">
            We use this number to call or WhatsApp your quote.
          </p>
        </div>
        <div>
          <label htmlFor={`${id}-service`} className="mb-1 block text-sm font-medium text-gray-800">
            Service needed <span className="text-red-700" aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <select
            id={`${id}-service`}
            name="service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-lg border border-gray-400 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30"
            aria-required="true"
          >
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value || 'empty'} value={o.value} disabled={o.value === ''}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <p id={errorId} className="sr-only" aria-live="polite" />
        <button type="submit" className={`w-full rounded-lg py-3.5 text-base font-semibold transition ${WHATSAPP_BTN_CLASS}`}>
          Send quote request on WhatsApp
        </button>
        <p className="text-center text-sm text-gray-700">Prefer voice? Call Now for Free Quote — we respond fast.</p>
      </form>
    </div>
  );
}
