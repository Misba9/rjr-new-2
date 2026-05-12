import type { ReactNode } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { PHONE_TEL, PHONE_SECONDARY_TEL, ADDRESS_DISPLAY, EMAIL } from '../constants/nap';
import { PAGE_TO_PATH, type PageKey } from '../constants/routes';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS_DISPLAY)}&hl=en&z=14&output=embed`;

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  function FooterNavLink({ page, children, className = '' }: { page: PageKey; children: ReactNode; className?: string }) {
    const href = PAGE_TO_PATH[page];
    return (
      <a
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(page);
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">RJR Safety Nets Bangalore</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Professional balcony safety nets, pigeon nets, invisible grill installation, and children safety nets across
              Bengaluru — Whitefield, HSR Layout, Electronic City, Hebbal, Yelahanka, JP Nagar, Marathahalli, Indiranagar,
              and surrounding areas. Free inspection, transparent quotes, 5+ years warranty on netting installs.
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
                  <FooterNavLink page="services" className="hover:text-white transition-colors text-left w-full inline-block">
                    All Services
                  </FooterNavLink>
                </li>
                <li>
                  <FooterNavLink page="balcony" className="hover:text-white transition-colors text-left w-full inline-block">
                    Balcony Safety Nets Bangalore
                  </FooterNavLink>
                </li>
                <li>
                  <FooterNavLink page="pigeon" className="hover:text-white transition-colors text-left w-full inline-block">
                    Pigeon Safety Nets Bangalore
                  </FooterNavLink>
                </li>
                <li>
                  <FooterNavLink
                    page="invisible-grills"
                    className="hover:text-white transition-colors text-left w-full inline-block"
                  >
                    Invisible Grill Bangalore
                  </FooterNavLink>
                </li>
                <li>
                  <FooterNavLink page="children" className="hover:text-white transition-colors text-left w-full inline-block">
                    Children Safety Nets Bangalore
                  </FooterNavLink>
                </li>
                <li>
                  <FooterNavLink page="monkey" className="hover:text-white transition-colors text-left w-full inline-block">
                    Monkey Safety Nets Bangalore
                  </FooterNavLink>
                </li>
                <li>
                  <FooterNavLink page="coconut" className="hover:text-white transition-colors text-left w-full inline-block">
                    Coconut Tree Safety Nets
                  </FooterNavLink>
                </li>
                <li>
                  <FooterNavLink
                    page="construction"
                    className="hover:text-white transition-colors text-left w-full inline-block"
                  >
                    Construction Safety Nets
                  </FooterNavLink>
                </li>
                <li>
                  <FooterNavLink page="sports" className="hover:text-white transition-colors text-left w-full inline-block">
                    Sports Practice Nets
                  </FooterNavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav aria-label="Quick links navigation">
              <ul className="space-y-2 text-sm">
                <li>
                  <FooterNavLink page="home" className="hover:text-white transition-colors text-left w-full inline-block">
                    Home
                  </FooterNavLink>
                </li>
                <li>
                  <FooterNavLink page="about" className="hover:text-white transition-colors text-left w-full inline-block">
                    About Us
                  </FooterNavLink>
                </li>
                <li>
                  <FooterNavLink page="blog" className="hover:text-white transition-colors text-left w-full inline-block">
                    Blog
                  </FooterNavLink>
                </li>
                <li>
                  <FooterNavLink page="contact" className="hover:text-white transition-colors text-left w-full inline-block">
                    Contact Us
                  </FooterNavLink>
                </li>
                <li>
                  <FooterNavLink
                    page="privacy-policy"
                    className="hover:text-white transition-colors text-left w-full inline-block"
                  >
                    Privacy Policy
                  </FooterNavLink>
                </li>
                <li>
                  <FooterNavLink
                    page="terms-and-conditions"
                    className="hover:text-white transition-colors text-left w-full inline-block"
                  >
                    Terms &amp; Conditions
                  </FooterNavLink>
                </li>
              </ul>
            </nav>
            <h4 className="text-white font-semibold mt-8 mb-4">Areas we serve</h4>
            <p className="text-sm leading-relaxed">
              Whitefield, HSR Layout, Electronic City, Hebbal, Yelahanka, JP Nagar, Marathahalli, Indiranagar, Koramangala,
              BTM Layout, and across Bangalore / Bengaluru.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <address className="not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <a href={PHONE_TEL} className="hover:text-white transition-colors block">
                      +91 7075051812
                    </a>
                    <a href={PHONE_SECONDARY_TEL} className="hover:text-white transition-colors block">
                      +91 8074514411
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>{ADDRESS_DISPLAY}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-1 flex-shrink-0" aria-hidden="true" />
                  <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </address>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_DISPLAY)}`}
              className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-xl overflow-hidden border border-gray-800 bg-gray-800/50">
          <iframe
            title="RJR Safety Nets — Mathikere, Bengaluru map"
            src={mapEmbedSrc}
            className="w-full h-56 sm:h-64"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-center sm:text-left">
            <p>&copy; {currentYear} RJR Safety Nets. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:justify-end">
              <FooterNavLink page="privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </FooterNavLink>
              <FooterNavLink page="terms-and-conditions" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </FooterNavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
