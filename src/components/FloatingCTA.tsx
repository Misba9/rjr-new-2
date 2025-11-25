import { Phone, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show popup after 5 seconds
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Hide popup after 10 seconds
    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 15000);

    // Continuous pulse animation
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 2000);

    return () => {
      clearTimeout(popupTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 z-40" role="complementary" aria-label="Quick contact actions">
      {/* Popup notification */}
      {showPopup && (
        <div className="mb-2 animate-fadeInUp bg-white rounded-lg shadow-xl p-3 border border-gray-200 max-w-xs">
          <p className="text-sm font-medium text-gray-800">Need help? Contact us now!</p>
          <button 
            onClick={() => setShowPopup(false)}
            className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
            aria-label="Close popup"
          >
            ×
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917075051812"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center group active:scale-95 animate-bounce-slow"
        aria-label="Contact us on WhatsApp"
        title="WhatsApp Us"
      >
        <MessageCircle size={20} className="sm:w-6 sm:h-6 animate-pulse" />
        <span className="hidden md:block absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none animate-fadeIn">
          WhatsApp Us
        </span>
      </a>
      
      {/* Call Button */}
      <a
        href="tel:+917075051812"
        className="bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 flex items-center justify-center group active:scale-95 animate-pulse-slow"
        aria-label="Call us at +91 7075051812"
        title="Call Now"
        itemProp="telephone"
      >
        <Phone size={20} className="sm:w-6 sm:h-6 animate-ring" />
        <span className="hidden md:block absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none animate-fadeIn">
          Call Now
        </span>
      </a>
    </div>
  );
}