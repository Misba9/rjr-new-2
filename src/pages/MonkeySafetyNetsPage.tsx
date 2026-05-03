import { useEffect } from 'react';
import { Shield, CheckCircle, AlertTriangle, Home, Leaf, Clock } from 'lucide-react';
import { updatePageMeta, addSchemaMarkup, generateFAQSchema } from '../utils/seo';
import { canonicalUrl } from '../constants/routes';
import LongFormArticle from '../components/LongFormArticle';
import { monkeyLongFormParagraphs } from '../content/serviceLongFormArticles';
import LeadQuoteForm from '../components/LeadQuoteForm';
import SectionLeadCTA from '../components/SectionLeadCTA';
import FAQSection from '../components/FAQSection';
import { services as serviceImages } from '../assets/images';
import HeroCarousel from '../components/HeroCarousel';

interface MonkeySafetyNetsPageProps {
  onNavigate?: (page: string) => void;
}

const MONKEY_FAQS = [
  {
    question: 'Why do I need monkey safety nets?',
    answer:
      'Monkey safety nets are essential in areas with monkey populations. They prevent property damage, protect food from contamination, ensure safety from aggressive monkeys, and maintain hygiene by preventing monkey droppings.',
  },
  {
    question: 'Are monkey nets different from bird nets?',
    answer:
      'Yes, monkey nets are made with stronger, thicker material and larger mesh sizes designed to withstand monkey attempts to bite or tear through. They require more robust installation than bird nets.',
  },
  {
    question: 'Will the nets harm monkeys?',
    answer:
      'No, our monkey safety nets are a humane solution. They simply create a physical barrier preventing monkeys from entering without causing any harm to the animals.',
  },
  {
    question: 'How strong are monkey safety nets?',
    answer:
      'Our monkey safety nets are made from high-grade HDPE with extra tensile strength, specifically designed to resist monkey biting, pulling, and other attempts to breach them.',
  },
  {
    question: 'What areas need monkey netting?',
    answer:
      'Common areas include balconies, terraces, windows, gardens, AC outdoor units, solar panel areas, and any openings where monkeys can enter your property.',
  },
];

export default function MonkeySafetyNetsPage({ onNavigate }: MonkeySafetyNetsPageProps) {
  const serviceUrl = canonicalUrl('monkey');

  useEffect(() => {
    updatePageMeta({
      title: 'Monkey Safety Nets in Bangalore | Protection Nets',
      description: 'Protect your home from monkeys with strong safety nets in Bangalore.',
      keywords:
        'monkey safety nets Bangalore, monkey safety nets in Bangalore, safety nets in Bangalore, safety nets installation Bangalore, safety nets near me',
      canonical: serviceUrl,
      ogTitle: 'Monkey Safety Nets in Bangalore | Protection Nets',
      ogDescription: 'Protect your home from monkeys with strong safety nets in Bangalore.',
      ogType: 'website',
      author: 'RJR Safety Nets',
    });

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${serviceUrl}#service`,
      url: serviceUrl,
      serviceType: 'Monkey Safety Nets Installation',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.rjrsafetynets.in/#organization',
        name: 'RJR Safety Nets',
        telephone: '+917075051812',
        areaServed: { '@type': 'City', name: 'Bangalore' },
      },
      description: 'Professional monkey protection net installation services in Bangalore',
    };

    addSchemaMarkup([serviceSchema, generateFAQSchema(MONKEY_FAQS)]);

    // Preload LCP hero image for faster first paint
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = serviceImages.monkey.main;
    (preloadLink as any).fetchPriority = 'high';
    document.head.appendChild(preloadLink);
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: 'Complete Monkey Protection',
      description: 'Prevents monkeys from entering your property and causing damage',
    },
    {
      icon: Home,
      title: 'Property Safety',
      description: 'Protects furniture, food, plants, and valuables from monkey damage',
    },
    {
      icon: Leaf,
      title: 'Humane Solution',
      description: 'Safe and ethical way to keep monkeys away without harming them',
    },
    {
      icon: Clock,
      title: 'Long-Lasting',
      description: 'Durable nets that provide years of reliable monkey protection',
    },
    {
      icon: AlertTriangle,
      title: 'Health & Hygiene',
      description: 'Prevents health hazards from monkey droppings and contamination',
    },
    {
      icon: CheckCircle,
      title: 'Discreet Installation',
      description: 'Nearly invisible nets that maintain your property appearance',
    },
  ];

  const features = [
    'Extra-strong HDPE material resistant to monkey biting',
    'UV-stabilized for outdoor durability',
    'Appropriate mesh size to prevent monkey entry',
    'Weather-resistant and waterproof',
    'Professional edge reinforcement',
    'Custom-fit for any property size',
    'Easy to clean and maintain',
    'No harm to animals',
    '5+ years warranty',
    'Available across all Bangalore areas',
  ];

  const whyNeed = [
    {
      title: 'Property Damage Prevention',
      description: 'Monkeys can cause extensive damage to homes, gardens, AC units, solar panels, and electrical wiring. Safety nets prevent entry and protect your investments.',
    },
    {
      title: 'Food Contamination',
      description: 'Monkeys often steal and contaminate food, creating health hazards. Our nets keep your kitchen and food storage areas secure.',
    },
    {
      title: 'Safety Concerns',
      description: 'Monkeys can be aggressive and pose risks, especially to children and elderly. Safety nets provide a protective barrier.',
    },
    {
      title: 'Garden Protection',
      description: 'Protect your plants, vegetables, and garden from monkey destruction with effective netting solutions.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative text-white overflow-hidden bg-gray-100">
        {/* Hero Carousel */}
        <HeroCarousel
          images={[serviceImages.monkey.main]}
          altText="monkey safety nets Bangalore"
          autoPlayInterval={5000}
          overlayOpacity={0.8}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Monkey Safety Nets in Bangalore | Protection Nets
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 leading-relaxed">
              Effective protection from monkey menace for your home and property
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              RJR Safety Nets offers specialized anti-monkey netting solutions designed to keep monkeys away while ensuring no harm to animals. Protect your property, food, and family with our durable monkey safety nets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917075051812"
                className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Call: +91 7075051812
              </a>
              <a
                href="https://wa.me/917075051812"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 transition-colors text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Monkey Safety Nets
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive protection from monkey-related problems
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
                  <div className="bg-amber-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-amber-600" size={28} />
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why You Need Monkey Safety Nets
            </h2>
            <p className="text-xl text-gray-600">
              Essential protection for monkey-prone areas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyNeed.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3 text-amber-600">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Features of Our Monkey Safety Nets
            </h2>
            <p className="text-xl text-gray-600">
              Premium quality for maximum protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
                <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <SectionLeadCTA />
          </div>
          <LeadQuoteForm id="monkey-lead" heading="WhatsApp — free quote" />
        </div>
      </section>

      <LongFormArticle
        title="Monkey safety nets in Bangalore — practical guide"
        paragraphs={monkeyLongFormParagraphs}
        id="monkey-longform"
      />

      {onNavigate ? (
        <section className="bg-gray-50 py-8">
          <div className="mx-auto max-w-4xl px-4 text-center text-gray-700 sm:px-6 lg:px-8">
            <button type="button" onClick={() => onNavigate('services')} className="font-semibold text-blue-600 hover:underline">
              View all safety net services
            </button>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionLeadCTA variant="blue" />
        </div>
      </section>

      <FAQSection faqs={MONKEY_FAQS} />

      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Monkey-Free Property Today
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Free inspection • Professional installation • Humane solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917075051812"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call: +91 7075051812
            </a>
            <a
              href="tel:+918074514411"
              className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 transition-colors"
            >
              Call: +91 8074514411
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
