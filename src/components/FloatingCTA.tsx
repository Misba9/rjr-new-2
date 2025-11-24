import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      <a
        href="https://wa.me/917075051812"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          WhatsApp Us
        </span>
      </a>
      <a
        href="tel:+917075051812"
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Call Now"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Call Now
        </span>
      </a>
    </div>
  );
}
