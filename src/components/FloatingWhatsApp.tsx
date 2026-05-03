import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
}

export default function FloatingWhatsApp({ phoneNumber, message = "Hi! I'm interested in safety nets for my home in Bangalore." }: FloatingWhatsAppProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip/Message bubble */}
        <div className="hidden sm:block bg-white shadow-2xl rounded-2xl px-4 py-3 max-w-xs animate-bounce">
          <div className="flex items-start gap-2">
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                🚨 Limited Slots Available!
              </p>
              <p className="text-xs text-gray-600">
                Chat now for same-day installation in Bangalore
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close message"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} className="animate-pulse" />
          
          {/* Pulsing ring effect */}
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></span>
          
          {/* Mobile tooltip */}
          <div className="sm:hidden absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat for Free Quote
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
          </div>
        </button>
      </div>
    </>
  );
}
