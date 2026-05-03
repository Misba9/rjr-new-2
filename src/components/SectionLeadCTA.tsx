import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_TEL, PHONE_PRIMARY_DISPLAY, WHATSAPP_URL } from '../constants/nap';

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
        ? 'bg-blue-600 text-white border border-blue-500'
        : 'bg-blue-50 text-gray-900 border border-blue-100';

  const phoneBtn =
    variant === 'blue'
      ? 'bg-white text-blue-700 hover:bg-gray-100'
      : 'bg-blue-600 text-white hover:bg-blue-700';

  return (
    <div className={`rounded-xl p-6 sm:p-8 ${wrap} ${className}`}>
      <p className="mb-4 text-center text-lg font-semibold sm:text-xl">{headline ?? 'Call Now for Free Quote'}</p>
      <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center">
        <a
          href={PHONE_TEL}
          className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition ${phoneBtn}`}
        >
          <Phone size={20} aria-hidden />
          {PHONE_PRIMARY_DISPLAY}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#20bd5a]"
        >
          <MessageCircle size={20} aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
