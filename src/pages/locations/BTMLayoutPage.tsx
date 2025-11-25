import { useEffect } from 'react';
import { updatePageMeta, addSchemaMarkup } from '../../utils/seo';

export default function BTMLayoutPage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Safety Nets in BTM Layout, Bangalore | Balcony & Bird Nets | RJR',
      description: 'Professional safety net installation in BTM Layout. Balcony, pigeon/bird, children, construction nets. Free inspection, fast install, 5+ years warranty.',
      keywords: 'Safety Nets BTM Layout, Balcony Safety Nets BTM, Pigeon Nets BTM Layout',
      canonical: 'https://www.rjrsafetynets.in/btm-layout',
      ogTitle: 'Safety Nets in BTM Layout | RJR Safety Nets',
      ogDescription: 'Balcony, pigeon/bird, children & construction safety nets in BTM Layout. Free inspection & quick installation.',
      ogType: 'website',
      author: 'RJR Safety Nets',
    });

    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://www.rjrsafetynets.in/btm-layout#service',
      serviceType: 'Safety Net Installation',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'BTM Layout, Bengaluru',
      },
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.rjrsafetynets.in/#organization',
        name: 'RJR Safety Nets',
        telephone: '+917075051812',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
      },
    });
  }, []);

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Safety Nets in BTM Layout</h1>
            <p className="text-xl text-gray-700 mb-6">Balcony, pigeon/bird, children and construction safety nets with professional installation and 5+ years warranty.</p>
            <p className="text-lg text-gray-700 mb-8">Serving BTM 1st Stage, 2nd Stage, Silk Board, and nearby areas with quick inspection and transparent pricing.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+917075051812" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">Call: +91 7075051812</a>
              <a href="https://wa.me/917075051812" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Balcony Safety Nets','Pigeon/Bird Nets','Children Safety Nets','Construction Safety Nets'].map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-blue-600">{s}</h3>
                <p className="text-gray-700">Professional installation in BTM Layout with warranty-backed materials and clean finishing.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Inspection in BTM Layout</h2>
          <p className="text-xl mb-8 text-blue-100">Same-day or next-day slots available. Transparent pricing and quick install.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917075051812" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">Call: +91 7075051812</a>
            <a href="tel:+918074514411" className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-colors">Call: +91 8074514411</a>
          </div>
        </div>
      </section>
    </div>
  );
}
