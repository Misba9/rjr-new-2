import { Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PHONE_TEL, PHONE_PRIMARY_DISPLAY, WHATSAPP_URL } from '../constants/nap';

export default function FloatingCTA() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const popupTimer = setTimeout(() => setShowPopup(true), 5000);
    const hideTimer = setTimeout(() => setShowPopup(false), 15000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(popupTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {/* Sticky lead bar — mobile: call; desktop: call + WhatsApp */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-blue-700 text-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] safe-area-pb ${
          isMobile ? '' : 'hidden md:block'
        }`}
        role="complementary"
        aria-label="Call Now for Free Quote"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-stretch justify-center gap-2 px-3 py-2 sm:flex-row sm:items-center sm:gap-4 sm:py-2.5">
          <a
            href={PHONE_TEL}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-center text-sm font-bold text-blue-700 hover:bg-gray-100 sm:text-base"
            aria-label={`Call RJR Safety Nets at ${PHONE_PRIMARY_DISPLAY}`}
          >
            <Phone size={20} className="flex-shrink-0" aria-hidden="true" />
            <span>Call Now for Free Quote · {PHONE_PRIMARY_DISPLAY}</span>
          </a>
          {!isMobile && (
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-center text-sm font-bold text-white hover:bg-[#20bd5a] sm:text-base"
              aria-label="WhatsApp RJR Safety Nets"
            >
              <MessageCircle size={20} className="flex-shrink-0" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          )}
        </div>
      </div>

      {/* Floating WhatsApp + Call buttons - positioned above sticky bar on mobile */}
      <div
        className={`fixed right-4 sm:right-6 z-40 flex flex-col gap-3 ${
          isMobile ? 'bottom-28' : 'bottom-24'
        }`}
        role="complementary"
        aria-label="Quick contact actions"
      >
        {/* Popup notification */}
        {showPopup && (
          <div className="mb-2 animate-fadeInUp bg-white rounded-lg shadow-xl p-3 border border-gray-200 max-w-xs">
            <p className="text-sm font-medium text-gray-800">Need help? Call or WhatsApp us now!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
              aria-label="Close popup"
            >
              ×
            </button>
          </div>
        )}

        {/* WhatsApp Button - Primary CTA (green, prominent) */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 flex items-center justify-center group active:scale-95"
          aria-label="Contact us on WhatsApp"
          title="WhatsApp Us - Get instant quote"
        >
          <MessageCircle size={24} className="sm:w-6 sm:h-6" aria-hidden="true" />
          <span className="hidden md:block absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            WhatsApp Us
          </span>
        </a>

      </div>
    </>
  );
}
