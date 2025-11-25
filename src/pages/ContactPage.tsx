import { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { updatePageMeta, addSchemaMarkup } from '../utils/seo';

export default function ContactPage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Contact Us - RJR Safety Nets Bangalore | Free Inspection & Quote',
      description: 'Contact RJR Safety Nets for professional safety net installation in Bangalore. Free site inspection. Call +91 7075051812 or +91 8074514411 for expert consultation.',
      keywords: 'Contact RJR Safety Nets, Safety Nets Bangalore Contact, Free Inspection Bangalore, Safety Net Quote, RJR Safety Nets Phone Number',
      canonical: 'https://www.rjrsafetynets.in/contact',
      ogTitle: 'Contact RJR Safety Nets Bangalore',
      ogDescription: 'Get in touch for free inspection and quote. Professional safety net installation services.',
      author: 'RJR Safety Nets',
    });

    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      '@id': 'https://www.rjrsafetynets.in/contact#webpage',
      url: 'https://www.rjrsafetynets.in/contact',
      name: 'Contact RJR Safety Nets',
      description: 'Contact page for RJR Safety Nets - Professional safety net installation services in Bangalore',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.rjrsafetynets.in/#organization',
        name: 'RJR Safety Nets',
        telephone: ['+917075051812', '+918074514411'],
        email: 'info@rjrsafetynets.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch for a free inspection and quotation
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get Free Consultation</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Contact RJR Safety Nets for professional safety net installation services in Bangalore.
                We offer free site inspection and customized solutions for all your safety needs.
              </p>

              <address className="not-italic space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                    <a 
                      href="tel:+917075051812" 
                      className="text-blue-600 hover:underline block"
                      itemProp="telephone"
                    >
                      +91 7075051812
                    </a>
                    <a 
                      href="tel:+918074514411" 
                      className="text-blue-600 hover:underline block"
                      itemProp="telephone"
                    >
                      +91 8074514411
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Service Area</h3>
                    <p className="text-gray-600">Bengaluru, Karnataka</p>
                    <p className="text-sm text-gray-500 mt-1">We serve all areas of Bangalore</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                    <p className="text-gray-600">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a
                      href="mailto:info@rjrsafetynets.com"
                      className="text-blue-600 hover:underline block"
                      itemProp="email"
                    >
                      info@rjrsafetynets.com
                    </a>
                  </div>
                </div>
              </address>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-lg mb-3">Why Choose Us?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Free site inspection and quotation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Same-day or next-day installation available
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    5+ years warranty on all installations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Experienced and professional team
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600">✓</span>
                    Affordable and transparent pricing
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your location in Bangalore"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="balcony">Balcony Safety Nets</option>
                    <option value="pigeon">Pigeon Safety Nets</option>
                    <option value="children">Children Safety Nets</option>
                    <option value="bird">Bird Protection Nets</option>
                    <option value="window">Window Safety Nets</option>
                    <option value="construction">Construction Safety Nets</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Request
                </button>

                <p className="text-center text-sm text-gray-600">
                  Or call us directly at{' '}
                  <a href="tel:+917075051812" className="text-blue-600 font-semibold hover:underline">
                    +91 7075051812
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free inspection and quotation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917075051812"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Call Now: +91 7075051812
            </a>
            <a
              href="https://wa.me/917075051812"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
