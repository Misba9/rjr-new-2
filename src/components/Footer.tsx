import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { PHONE_TEL, PHONE_SECONDARY_TEL, ADDRESS_DISPLAY, EMAIL } from '../constants/nap';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">RJR Safety Nets Bangalore</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Leading balcony safety nets, pigeon safety nets & children safety nets installation in Bangalore. 5+ years warranty. Free inspection.
            </p>
            <div className="flex gap-4" role="navigation" aria-label="Social media links">
              <a 
                href="https://www.facebook.com/rjrsafetynets" 
                className="hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/rjrsafetynets" 
                className="hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/rjrsafetynets" 
                className="hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <nav aria-label="Services navigation">
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left w-full">
                    All Services
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('balcony')} className="hover:text-white transition-colors text-left w-full">
                    Balcony Safety Nets Bangalore
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('pigeon')} className="hover:text-white transition-colors text-left w-full">
                    Pigeon Safety Nets Bangalore
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('children')} className="hover:text-white transition-colors text-left w-full">
                    Children Safety Nets Bangalore
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('monkey')} className="hover:text-white transition-colors text-left w-full">
                    Monkey Safety Nets Bangalore
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('coconut')} className="hover:text-white transition-colors text-left w-full">
                    Coconut Tree Safety Nets
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('construction')} className="hover:text-white transition-colors text-left w-full">
                    Construction Safety Nets
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('sports')} className="hover:text-white transition-colors text-left w-full">
                    Sports Practice Nets
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav aria-label="Quick links navigation">
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors text-left w-full">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left w-full">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors text-left w-full">
                    Blog
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left w-full">
                    Contact Us
                  </button>
                </li>
              </ul>
            </nav>
            <h4 className="text-white font-semibold mt-8 mb-4">Locations</h4>
            <nav aria-label="Locations navigation">
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => onNavigate('whitefield')} className="hover:text-white transition-colors text-left w-full">
                    Whitefield
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('hsr-layout')} className="hover:text-white transition-colors text-left w-full">
                    HSR Layout
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('electronic-city')} className="hover:text-white transition-colors text-left w-full">
                    Electronic City
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('indiranagar')} className="hover:text-white transition-colors text-left w-full">
                    Indiranagar
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('koramangala')} className="hover:text-white transition-colors text-left w-full">
                    Koramangala
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('marathahalli')} className="hover:text-white transition-colors text-left w-full">
                    Marathahalli
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('btm-layout')} className="hover:text-white transition-colors text-left w-full">
                    BTM Layout
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <address className="not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <a href={PHONE_TEL} className="hover:text-white transition-colors block" itemProp="telephone">
                      +91 7075051812
                    </a>
                    <a href={PHONE_SECONDARY_TEL} className="hover:text-white transition-colors block" itemProp="telephone">
                      +91 8074514411
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" aria-hidden="true" />
                  <span itemProp="address">{ADDRESS_DISPLAY}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-1 flex-shrink-0" aria-hidden="true" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors" itemProp="email">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-center sm:text-left">
            <p>&copy; {currentYear} RJR Safety Nets. All rights reserved.</p>
            <div className="flex gap-4">
              <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
