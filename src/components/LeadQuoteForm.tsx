import { FormEvent, useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants/nap';

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
}

export default function LeadQuoteForm({
  id = 'lead-quote-form',
  className = '',
  heading = 'Get a free quote',
}: LeadQuoteFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hello RJR Safety Nets, I need a quote.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service || 'Not selected')}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id={id} className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      {heading ? <h2 className="text-xl font-bold text-gray-900 mb-4">{heading}</h2> : null}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor={`${id}-name`} className="mb-1 block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="mb-1 block text-sm font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
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
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
            placeholder="10-digit mobile"
          />
        </div>
        <div>
          <label htmlFor={`${id}-service`} className="mb-1 block text-sm font-medium text-gray-700">
            Service <span className="text-red-500">*</span>
          </label>
          <select
            id={`${id}-service`}
            name="service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          >
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value || 'empty'} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-green-600 py-3.5 text-base font-semibold text-white transition hover:bg-green-700"
        >
          Send on WhatsApp
        </button>
        <p className="text-center text-sm text-gray-600">Prefer voice? Call Now for Free Quote — we respond fast.</p>
      </form>
    </div>
  );
}
