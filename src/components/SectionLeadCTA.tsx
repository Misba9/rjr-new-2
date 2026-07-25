import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_TEL, PHONE_PRIMARY_DISPLAY, WHATSAPP_URL, WHATSAPP_BTN_CLASS } from '../constants/nap';

interface SectionLeadCTAProps {
  variant?: 'light' | 'dark' | 'blue';
  className?: string;
  /** Override default “Call Now for Free Quote” line */
  headline?: string;
}

export default function SectionLeadCTA({ variant = 'light', className = '', headline }: SectionLeadCTAProps) {
  const wrap =
    variant === 'dark'
      ? 'bg-gray-900 text-white border border-gray-800'
      : variant === 'blue'
        ? 'bg-blue-700 text-white border border-blue-600'
        : 'bg-blue-50 text-gray-900 border border-blue-100';

  const phoneBtn =
    variant === 'blue'
      ? 'bg-white text-blue-800 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
      : 'bg-blue-700 text-white hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700';

  return (
    <div className={`rounded-xl border p-6 sm:p-8 ${wrap} ${className}`}>
      <p className="mb-4 text-center text-lg font-semibold sm:text-xl">{headline ?? 'Call Now for Free Quote'}</p>
      <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
        <a
          href={PHONE_TEL}
          className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition ${phoneBtn}`}
          aria-label={`Call RJR Safety Nets at ${PHONE_PRIMARY_DISPLAY}`}
        >
          <Phone size={20} aria-hidden="true" />
          {PHONE_PRIMARY_DISPLAY}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition ${WHATSAPP_BTN_CLASS}`}
          aria-label="WhatsApp RJR Safety Nets for a free quote"
        >
          <MessageCircle size={20} aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
