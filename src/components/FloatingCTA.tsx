import { Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  PHONE_TEL,
  PHONE_PRIMARY_DISPLAY,
  WHATSAPP_URL,
  WHATSAPP_BTN_CLASS,
  WHATSAPP_FAB_CLASS,
} from '../constants/nap';

/**
 * Floating CTAs — CSS-only responsive layout (no isMobile state) to avoid CLS.
 */
export default function FloatingCTA() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupTimer = setTimeout(() => setShowPopup(true), 5000);
    const hideTimer = setTimeout(() => setShowPopup(false), 15000);
    return () => {
      clearTimeout(popupTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-blue-800 text-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
        role="complementary"
        aria-label="Call Now for Free Quote"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-stretch justify-center gap-2 px-3 py-2 sm:flex-row sm:items-center sm:gap-4 sm:py-2.5">
          <a
            href={PHONE_TEL}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-center text-sm font-bold text-blue-800 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
            aria-label={`Call RJR Safety Nets at ${PHONE_PRIMARY_DISPLAY}`}
          >
            <Phone size={20} className="flex-shrink-0" aria-hidden="true" />
            <span>Call Now for Free Quote · {PHONE_PRIMARY_DISPLAY}</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-center text-sm font-bold transition-colors sm:text-base md:flex ${WHATSAPP_BTN_CLASS}`}
            aria-label="WhatsApp RJR Safety Nets"
          >
            <MessageCircle size={20} className="flex-shrink-0" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <div
        className="fixed bottom-28 right-4 z-40 flex flex-col gap-3 sm:right-6 md:bottom-24"
        role="complementary"
        aria-label="Quick contact actions"
      >
        {showPopup && (
          <div
            className="relative mb-2 max-w-xs animate-fadeInUp rounded-lg border border-gray-200 bg-white p-3 shadow-xl"
            role="status"
            aria-live="polite"
          >
            <p className="pr-6 text-sm font-medium text-gray-900">Need help? Call or WhatsApp us now!</p>
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className="absolute right-1 top-1 rounded p-1 text-gray-700 hover:text-gray-900"
              aria-label="Close help popup"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        )}

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative flex items-center justify-center rounded-full p-3 shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 group sm:p-4 ${WHATSAPP_FAB_CLASS}`}
          aria-label="Contact us on WhatsApp"
          title="WhatsApp Us - Get instant quote"
        >
          <MessageCircle size={24} className="sm:h-6 sm:w-6" aria-hidden="true" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded bg-gray-900 px-3 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
            WhatsApp Us
          </span>
        </a>
      </div>
    </>
  );
}
