import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { WHATSAPP_FAB_CLASS } from '../constants/nap';

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
}

export default function FloatingWhatsApp({
  phoneNumber,
  message = "Hi! I'm interested in safety nets for my home in Bangalore.",
}: FloatingWhatsAppProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" role="complementary" aria-label="WhatsApp chat">
      <div className="hidden max-w-xs rounded-2xl bg-white px-4 py-3 shadow-2xl sm:block" role="status">
        <div className="flex items-start gap-2">
          <div className="flex-1">
            <p className="mb-1 text-sm font-semibold text-gray-900">Limited slots available</p>
            <p className="text-xs text-gray-700">Chat now for same-day installation in Bangalore</p>
          </div>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="rounded p-1 text-gray-700 hover:text-gray-900"
            aria-label="Dismiss WhatsApp message"
          >
            <X size={14} aria-hidden="true" />
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={handleClick}
        className={`relative rounded-full p-4 shadow-2xl transition-transform hover:scale-110 group ${WHATSAPP_FAB_CLASS}`}
        aria-label="Chat on WhatsApp for a free quote"
      >
        <MessageCircle size={28} aria-hidden="true" />
        <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 sm:hidden">
          Chat for Free Quote
        </div>
      </button>
    </div>
  );
}
