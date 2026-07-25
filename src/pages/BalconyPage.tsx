import { useEffect } from 'react';
import { Shield, CheckCircle, Clock, Cloud, Users } from 'lucide-react';
import { buildServicePageSchemas } from '../utils/seo';
import { getPageSeo } from '../constants/pageSeo';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import LongFormArticle from '../components/LongFormArticle';
import { balconyLongFormParagraphs } from '../content/serviceLongFormArticles';
import LeadQuoteForm from '../components/LeadQuoteForm';
import SectionLeadCTA from '../components/SectionLeadCTA';
import FAQSection from '../components/FAQSection';
import ServiceContentBlock from '../components/ServiceContentBlock';
import { preloadHeroImage, services as serviceImages } from '../assets/images';
import ServiceBreadcrumbBar from '../components/ServiceBreadcrumbBar';
import ServiceInternalLinks from '../components/ServiceInternalLinks';
import HeroCarousel from '../components/HeroCarousel';
import OptimizedImage from '../components/OptimizedImage';

interface BalconyPageProps {
  onNavigate?: (page: string) => void;
}

const BALCONY_FAQS = [
  {
    question: 'Why do I need balcony safety nets?',
    answer:
      'Balcony safety nets are essential for preventing accidents, especially if you have children or pets. They provide a secure barrier without obstructing your view or ventilation.',
  },
  {
    question: 'What material are the balcony nets made of?',
    answer:
      'Our balcony safety nets are made from high-grade HDPE (High-Density Polyethylene) material that is UV stabilized, weather-resistant, and extremely durable.',
  },
  {
    question: 'How long does the installation take?',
    answer:
      'Most balcony safety net installations are completed within 2-4 hours, depending on the size and number of balconies.',
  },
  {
    question: 'Will the nets affect my balcony appearance?',
    answer:
      'No, our safety nets are designed to be transparent and minimal, maintaining the aesthetic appeal of your balcony while providing maximum protection.',
  },
  {
    question: 'What is the warranty period?',
    answer:
      'We provide a 5+ year warranty on all our balcony safety net installations, covering both material defects and workmanship.',
  },
];

export default function BalconyPage({ onNavigate }: BalconyPageProps) {
  useEffect(() => {
    const link = preloadHeroImage(serviceImages.balcony.main);
    return () => link.remove();
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: 'Prevents accidental falls',
      description: 'A secure barrier for open balconies, windows and ledges.',
    },
    {
      icon: Users,
      title: 'Safe for children and pets',
      description: 'Designed for families who need dependable everyday protection.',
    },
    {
      icon: Cloud,
      title: 'Weather resistant material',
      description: 'HDPE netting suited to Bangalore sun and monsoon conditions.',
    },
    {
      icon: Clock,
      title: 'Long-lasting durability',
      description: 'Quality materials and correct tensioning for years of use.',
    },
  ];

  const whyChoose = [
    'Experienced installation team',
    'Affordable pricing',
    'Quick service across Bangalore',
    'High-quality materials',
  ];

  return (
    <div className="min-h-screen">
      <SEOHead {...getPageSeo('balcony')} />
      <JsonLd
        data={buildServicePageSchemas({
          pageKey: 'balcony',
          name: 'Balcony Safety Nets Installation in Bangalore',
          description:
            'Professional balcony safety net installation in Bangalore. UV-stabilized, weather-resistant HDPE nets with neat fitting and 5+ years warranty.',
          serviceType: 'Balcony Safety Nets Installation',
          breadcrumbName: 'Balcony Safety Nets Bangalore',
          faqs: BALCONY_FAQS,
        })}
      />
      <section className="relative text-white overflow-hidden bg-gray-100">
        {/* Hero Carousel */}
        <HeroCarousel
          images={[serviceImages.balcony.main, ...serviceImages.balcony.gallery]}
          altText="balcony safety nets Bangalore"
          autoPlayInterval={5000}
          overlayOpacity={0.55}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Balcony Safety Nets Bangalore
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white/95 leading-relaxed">
              Looking for the best balcony safety nets in Bangalore? We provide high-quality, durable and affordable safety net
              solutions to protect your family and pets.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-white/95">
              Our balcony safety nets are designed to prevent accidents, especially for children and pets, while maintaining the
              aesthetics of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917075051812"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Call Now for Instant Installation!
              </a>
              <a
                href="https://wa.me/917075051812"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#075E54] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#064e46] transition-colors text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServiceBreadcrumbBar pageKey="balcony" onNavigate={onNavigate} />

      <section className="border-b border-gray-100 bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <SectionLeadCTA headline="Call Now for Instant Installation!" />
          </div>
          <aside>
            <LeadQuoteForm id="balcony-lead" heading="WhatsApp — free quote" headingLevel="h2" />
          </aside>
        </div>
      </section>

      <ServiceContentBlock
        serviceName="Balcony Safety Nets"
        overview="Looking for the best balcony safety nets in Bangalore? We provide high-quality, durable and affordable safety net solutions to protect your family and pets. Our balcony safety nets are designed to prevent accidents, especially for children and pets, while maintaining the aesthetics of your home."
        benefits={[
          'Prevents accidental falls',
          'Safe for children and pets',
          'Weather resistant material',
          'Long-lasting durability',
        ]}
        pricingRange="Balcony safety nets price in Bangalore depends on size and area. Contact us for a free quote."
        installationSteps={[
          'Free site visit: Our team measures your balcony and assesses requirements.',
          'Quote & approval: You receive a detailed quote within 24 hours.',
          'Installation: Our trained technicians install within 2–4 hours with minimal disruption.',
          'Quality check: We verify tension, fittings, and safety before handover.',
        ]}
        faqs={[
          {
            question: 'How much do balcony safety nets cost in Bangalore?',
            answer: 'Cost varies by balcony size and mesh type. Standard installations typically range from ₹3,000–15,000 per balcony. We provide free site inspection and a written quote with no obligation.',
          },
          {
            question: 'How long does balcony net installation take?',
            answer: 'Most installations are completed within 2–4 hours. We schedule visits at your convenience and ensure minimal disruption to your daily routine.',
          },
          {
            question: 'Do balcony nets block sunlight or ventilation?',
            answer: 'No. Our nets are transparent and allow 90%+ light and air flow. They are virtually invisible from a distance and do not affect your balcony\'s appearance.',
          },
        ]}
        variant="blue"
      />

      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionLeadCTA headline="Call Now for Instant Installation!" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced team, fair pricing and fast service across Bangalore
            </p>
          </div>
          {onNavigate && (
            <p className="text-gray-600 mb-6">
              Also see:{' '}
              <button type="button" onClick={() => onNavigate('services')} className="text-blue-600 font-medium hover:underline">
                All safety net services
              </button>
              ,{' '}
              <button type="button" onClick={() => onNavigate('pigeon')} className="text-blue-600 font-medium hover:underline">
                Pigeon safety nets Bangalore
              </button>
              ,{' '}
              <button type="button" onClick={() => onNavigate('children')} className="text-blue-600 font-medium hover:underline">
                Children safety nets
              </button>
              ,{' '}
              <button type="button" onClick={() => onNavigate('contact')} className="text-blue-600 font-medium hover:underline">
                Contact for free quote
              </button>
              .
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Protection that fits your balcony and your lifestyle
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Work Gallery
            </h2>
            <p className="text-xl text-gray-600">
              See our professional balcony safety net installations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceImages.balcony.gallery && serviceImages.balcony.gallery.length > 0 ? (
              serviceImages.balcony.gallery.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                  <OptimizedImage
                    src={image}
                    alt={`Balcony safety net installation in Bangalore — project photo ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-4">Professional Installation #{index + 1}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full">
                <OptimizedImage
                  src={serviceImages.balcony.main}
                  alt="Balcony safety net installation in Bangalore — project photo"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Location-specific service sections - SEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Balcony Safety Nets Across Bangalore – Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional balcony safety net installation near you in North and North-West Bangalore
            </p>
          </div>
          <div className="space-y-10">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-600">Balcony Safety Nets in Mathikere</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Serving apartments and homes near RWF, ISRO Layout, and Mathikere Lake. Our invisible balcony safety nets protect your family while keeping your views clear. Quick installation with 5+ years warranty.
              </p>
              <a href="tel:+917075051812" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Call for Free Quote</a>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-600">Balcony Safety Nets in Yeshwanthpur</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Trusted balcony safety net installation for residents near Yeshwanthpur Junction, Railway Station, and Metro. Many high-rise apartments in this area rely on RJR for durable, invisible protection.
              </p>
              <a href="https://wa.me/917075051812" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#075E54] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#064e46] transition-colors">WhatsApp for Quote</a>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-600">Balcony Safety Nets in Gokula Extension</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Premium balcony safety nets for homes in Gokula Extension and nearby Vijayanagar. Our UV-stabilized HDPE nets are ideal for Bangalore’s climate. Free site inspection and same-day installation available.
              </p>
              <a href="tel:+917075051812" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Call for Free Quote</a>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-600">Balcony Safety Nets in Hebbal</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Professional balcony safety net installation near Hebbal Flyover, Manyata Tech Park, and Bangalore University. Protect your family with our strong, transparent nets. Installation within 24–48 hours.
              </p>
              <a href="https://wa.me/917075051812" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#075E54] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#064e46] transition-colors">WhatsApp for Quote</a>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-600">Balcony Safety Nets in Yelahanka</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Reliable balcony safety nets for Yelahanka Town, near Air Force Station and Metro. Our expert team serves residential colonies and apartments with quality HDPE nets and professional fitting.
              </p>
              <a href="tel:+917075051812" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Call for Free Quote</a>
            </div>
          </div>
        </div>
      </section>

      <LongFormArticle
        title="Balcony safety nets in Bangalore — expert guide"
        paragraphs={balconyLongFormParagraphs}
        id="balcony-longform"
      />

      <section className="bg-white py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionLeadCTA variant="blue" headline="Call Now for Instant Installation!" />
        </div>
      </section>

      <FAQSection faqs={BALCONY_FAQS} />

      <ServiceInternalLinks pageKey="balcony" onNavigate={onNavigate} />

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Call Now for Instant Installation!
          </h2>
          <p className="text-xl mb-8 text-white/95">
            Balcony safety nets price in Bangalore depends on size and area — contact us for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917075051812"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call Now for Instant Installation!
            </a>
            <a
              href="tel:+918074514411"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-colors"
            >
              Call: +91 8074514411
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
