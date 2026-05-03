import { useEffect } from 'react';
import { Shield, CheckCircle, Bird, Home, Sparkles, Clock } from 'lucide-react';
import { updatePageMeta, addSchemaMarkup, generateFAQSchema } from '../utils/seo';
import { canonicalUrl } from '../constants/routes';
import LongFormArticle from '../components/LongFormArticle';
import { pigeonLongFormParagraphs } from '../content/serviceLongFormArticles';
import LeadQuoteForm from '../components/LeadQuoteForm';
import SectionLeadCTA from '../components/SectionLeadCTA';
import FAQSection from '../components/FAQSection';
import ServiceContentBlock from '../components/ServiceContentBlock';
import { services as serviceImages } from '../assets/images';
import HeroCarousel from '../components/HeroCarousel';

interface PigeonPageProps {
  onNavigate?: (page: string) => void;
}

const PIGEON_FAQS = [
  {
    question: 'Why do I need pigeon safety nets?',
    answer:
      'Pigeon safety nets prevent birds from entering your balconies and windows, keeping your space clean, protecting your health from diseases carried by bird droppings, and preventing damage to your property.',
  },
  {
    question: 'Are pigeon nets safe for birds?',
    answer:
      'Yes, our pigeon nets are completely safe and humane. They simply prevent birds from entering your space without causing any harm to them.',
  },
  {
    question: 'How long do pigeon nets last?',
    answer:
      'Our high-quality HDPE pigeon nets are UV-stabilized and weather-resistant, typically lasting 5+ years with proper installation.',
  },
  {
    question: 'Will the nets be visible from outside?',
    answer:
      'Our pigeon safety nets are designed to be transparent and virtually invisible from a distance, maintaining the aesthetic appeal of your building.',
  },
  {
    question: 'What is the cost of pigeon net installation?',
    answer:
      'The cost depends on the area to be covered and specific requirements. Contact us for a free inspection and customized quotation.',
  },
];

export default function PigeonPage({ onNavigate }: PigeonPageProps) {
  const serviceUrl = canonicalUrl('pigeon');

  useEffect(() => {
    updatePageMeta({
      title: 'Pigeon Safety Nets in Bangalore | Anti Bird Nets',
      description: 'Protect your home with pigeon safety nets in Bangalore. High quality anti bird nets. Book installation today.',
      keywords:
        'pigeon safety nets Bangalore, bird net Bangalore, anti bird net Bangalore, pigeon safety nets in Bangalore, safety nets in Bangalore, safety nets installation Bangalore',
      canonical: serviceUrl,
      ogTitle: 'Pigeon Safety Nets in Bangalore | Anti Bird Nets',
      ogDescription: 'Protect your home with pigeon safety nets in Bangalore. High quality anti bird nets. Book installation today.',
      ogType: 'website',
      author: 'RJR Safety Nets',
    });

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${serviceUrl}#service`,
      serviceType: 'Pigeon Safety Nets Installation',
      url: serviceUrl,
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.rjrsafetynets.in/#organization',
        name: 'RJR Safety Nets',
        telephone: '+917075051812',
        areaServed: { '@type': 'City', name: 'Bangalore' },
      },
      description: 'Professional pigeon and bird protection net installation services in Bangalore',
    };

    addSchemaMarkup([serviceSchema, generateFAQSchema(PIGEON_FAQS)]);

    // Preload LCP hero image for faster first paint
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = serviceImages.pigeon.main;
    (preloadLink as any).fetchPriority = 'high';
    document.head.appendChild(preloadLink);
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: 'Effective Bird Protection',
      description: 'Prevents pigeons and other birds from entering your balconies and windows',
    },
    {
      icon: Sparkles,
      title: 'Clean & Hygienic',
      description: 'Keeps your space clean by preventing bird droppings and nesting',
    },
    {
      icon: Home,
      title: 'Protects Property',
      description: 'Prevents damage to your furniture, AC units, and balcony items',
    },
    {
      icon: Clock,
      title: 'Long-lasting Solution',
      description: 'Durable nets that provide years of protection',
    },
    {
      icon: CheckCircle,
      title: 'Humane Method',
      description: 'Safe and humane way to keep birds away without harming them',
    },
    {
      icon: Bird,
      title: 'Transparent Design',
      description: 'Virtually invisible nets that maintain your balcony aesthetics',
    },
  ];

  const whyChoose = [
    'High-quality, UV-stabilized anti-bird nets',
    'Customized solutions for all types of balconies',
    'Expert installation with precision fitting',
    'Prevents health hazards from bird droppings',
    'Protects your property from bird damage',
    'Long-lasting and weather-resistant materials',
    'Free site inspection and quotation',
    'Quick and clean installation process',
    '5+ years warranty coverage',
    'Available across all areas of Bangalore',
  ];

  const importance = [
    {
      title: 'Health Protection',
      description: 'Bird droppings carry diseases and bacteria that can affect your family\'s health. Our nets prevent birds from entering your space.',
    },
    {
      title: 'Property Maintenance',
      description: 'Pigeons can damage AC units, solar panels, and furniture. Protection nets save you from expensive repairs and cleaning.',
    },
    {
      title: 'Peace of Mind',
      description: 'Enjoy a clean, bird-free environment without constant cleaning and maintenance hassles.',
    },
    {
      title: 'Aesthetic Value',
      description: 'Maintain the beauty of your home with transparent nets that are practically invisible.',
    },
  ];

  const choosingTips = [
    {
      title: 'Material Quality',
      description: 'Choose UV-stabilized HDPE nets that withstand weather conditions',
    },
    {
      title: 'Mesh Size',
      description: 'Proper mesh size to prevent even small birds from entering',
    },
    {
      title: 'Installation Expertise',
      description: 'Professional installation ensures gaps are properly covered',
    },
    {
      title: 'Warranty Coverage',
      description: 'Look for providers offering comprehensive warranty on materials and installation',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative text-white overflow-hidden bg-gray-100">
        {/* Hero Carousel */}
        <HeroCarousel
          images={[serviceImages.pigeon.main, ...serviceImages.pigeon.gallery]}
          altText="pigeon safety nets installation"
          autoPlayInterval={5000}
          overlayOpacity={0.8}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pigeon Safety Nets in Bangalore | Anti Bird Nets
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
              Keep your balconies clean and bird-free with our premium pigeon protection nets
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              RJR Safety Nets offers effective, humane, and long-lasting pigeon control solutions. Protect your property from bird droppings, nesting, and damage with our high-quality anti-bird nets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917075051812"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Call Now for Free Quote
              </a>
              <a
                href="https://wa.me/917075051812"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition-colors text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <SectionLeadCTA />
          </div>
          <LeadQuoteForm id="pigeon-lead-top" heading="WhatsApp — free quote" />
        </div>
      </section>

      <ServiceContentBlock
        serviceName="Pigeon Safety Nets"
        overview="Pigeon safety nets from RJR Safety Nets keep your balconies and windows bird-free across Bengaluru. Our humane, UV-stabilized anti-bird nets prevent nesting, droppings, and property damage while remaining virtually invisible. Trusted by 1000+ customers, we offer professional installation with a 5+ year warranty and same-day service in most areas."
        benefits={[
          'Prevents bird droppings and nesting—keeps balconies clean',
          'Protects AC units, solar panels, and furniture from damage',
          'Humane solution—no harm to birds',
          'Transparent nets preserve your balcony aesthetics',
          '5+ years warranty; minimal maintenance required',
        ]}
        pricingRange="Pigeon safety nets in Bangalore typically cost ₹20–55 per sq ft based on area coverage and mesh type. Full balcony installations often range from ₹2,500–12,000. We provide free inspection and a detailed quote with no hidden fees."
        installationSteps={[
          'Free inspection: We assess your balcony or window area and bird entry points.',
          'Quote & scheduling: Receive a transparent quote and book your preferred slot.',
          'Installation: Our team installs nets with precision fitting—typically 2–4 hours.',
          'Handover: We ensure no gaps and provide basic care guidance.',
        ]}
        faqs={[
          {
            question: 'What is the cost of pigeon net installation in Bangalore?',
            answer: 'Cost depends on area size. Standard balcony pigeon nets usually range from ₹2,500–12,000. We offer free site visit and written quotation with itemised pricing.',
          },
          {
            question: 'Are pigeon nets safe for birds?',
            answer: 'Yes. Our nets are completely humane—they simply prevent birds from entering your space without causing any harm. No chemicals or spikes are used.',
          },
          {
            question: 'How long do pigeon nets last?',
            answer: 'Our UV-stabilized HDPE nets last 5+ years with minimal maintenance. They withstand Bangalore\'s sun, rain, and wind. We provide warranty on materials and installation.',
          },
        ]}
        variant="green"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Pigeon Protection Nets
            </h2>
            <p className="text-xl text-gray-600">
              Complete protection from birds and their associated problems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-green-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {onNavigate && (
            <p className="text-center text-gray-600 mb-6">
              Also see:{' '}
              <button type="button" onClick={() => onNavigate('services')} className="text-blue-600 font-medium hover:underline">
                All services
              </button>
              ,{' '}
              <button type="button" onClick={() => onNavigate('balcony')} className="text-blue-600 font-medium hover:underline">
                Balcony safety nets
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose RJR for Pigeon Safety Nets in Bangalore?
            </h2>
            <p className="text-xl text-gray-600">
              The experts in bird protection solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Importance of Pigeon Safety Nets
            </h2>
            <p className="text-xl text-gray-600">
              Why every home and office needs pigeon protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {importance.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3 text-green-600">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Choose Pigeon Netting in Bangalore
            </h2>
            <p className="text-xl text-gray-600">
              Key factors to consider for effective bird protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {choosingTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Pigeon Net Installations
            </h2>
            <p className="text-xl text-gray-600">
              Professional installations keeping balconies bird-free
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceImages.pigeon.gallery && serviceImages.pigeon.gallery.length > 0 ? (
              serviceImages.pigeon.gallery.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src={image} 
                    alt={`Pigeon Safety Net Installation in Bangalore - Project ${index + 1}`} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    style={{ aspectRatio: '4/3' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-4">Bird-Free Installation #{index + 1}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full">
                <img 
                  src={serviceImages.pigeon.main} 
                  alt="Professional Pigeon Safety Net Installation in Bangalore" 
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Location-specific service sections - SEO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pigeon Safety Nets Across Bangalore – Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Effective pigeon and bird net installation near you in North and North-West Bangalore
            </p>
          </div>
          <div className="space-y-10">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-green-600">Pigeon Safety Nets in Mathikere</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Keep balconies bird-free near RWF, ISRO Layout, and Mathikere Lake. Our humane pigeon nets prevent nesting and droppings while remaining virtually invisible. Free inspection and quick installation.
              </p>
              <a href="tel:+917075051812" className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">Call for Free Quote</a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-green-600">Pigeon Safety Nets in Yeshwanthpur</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Bird net installation for apartments near Yeshwanthpur Junction and Railway Station. Pigeons are common in this area—our durable anti-bird nets provide long-lasting protection with 5+ years warranty.
              </p>
              <a href="https://wa.me/917075051812" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-600 transition-colors">WhatsApp for Quote</a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-green-600">Pigeon Safety Nets in Gokula Extension</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Pigeon control solutions for homes in Gokula Extension and Vijayanagar. UV-stabilized nets that withstand Bangalore weather. Humane bird protection without harming wildlife.
              </p>
              <a href="tel:+917075051812" className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">Call for Free Quote</a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-green-600">Pigeon Safety Nets in Hebbal</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Bird net installation near Hebbal Flyover, Manyata Tech Park, and residential layouts. Keep AC units, solar panels, and balconies clean from pigeon droppings. Expert fitting with no gaps.
              </p>
              <a href="https://wa.me/917075051812" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-600 transition-colors">WhatsApp for Quote</a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-green-600">Pigeon Safety Nets in Yelahanka</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Pigeon safety nets for Yelahanka Town and areas near Air Force Station. Our transparent bird nets protect property and health. Fast installation, minimal maintenance, 5+ years warranty.
              </p>
              <a href="tel:+917075051812" className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">Call for Free Quote</a>
            </div>
          </div>
        </div>
      </section>

      <LongFormArticle
        title="Pigeon safety nets in Bangalore — full guide"
        paragraphs={pigeonLongFormParagraphs}
        id="pigeon-longform"
      />

      <section className="bg-white py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionLeadCTA variant="blue" />
        </div>
      </section>

      <FAQSection faqs={PIGEON_FAQS} />

      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Pigeon-Free Balconies Today
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Free inspection • Expert installation • Long-lasting protection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917075051812"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call: +91 7075051812
            </a>
            <a
              href="tel:+918074514411"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition-colors"
            >
              Call: +91 8074514411
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
