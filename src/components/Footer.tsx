import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">RJR Safety Nets</h3>
            <p className="text-sm mb-4">
              Professional safety net installation services in Bangalore. Protecting your family and property with quality solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('balcony')} className="hover:text-white transition-colors">
                  Balcony Safety Nets
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pigeon')} className="hover:text-white transition-colors">
                  Pigeon Safety Nets
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Bird Protection Nets
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Children Safety Nets
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+917075051812" className="hover:text-white transition-colors block">
                    +91 7075051812
                  </a>
                  <a href="tel:+918074514411" className="hover:text-white transition-colors block">
                    +91 8074514411
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Bengaluru, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} RJR Safety Nets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
