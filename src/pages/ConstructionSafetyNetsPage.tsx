import { useEffect } from 'react';
import { Shield, CheckCircle, HardHat, Building2, Users, AlertTriangle } from 'lucide-react';
import { buildServicePageSchemas } from '../utils/seo';
import { getPageSeo } from '../constants/pageSeo';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import LongFormArticle from '../components/LongFormArticle';
import { constructionLongFormParagraphs } from '../content/serviceLongFormArticles';
import LeadQuoteForm from '../components/LeadQuoteForm';
import SectionLeadCTA from '../components/SectionLeadCTA';
import FAQSection from '../components/FAQSection';
import { preloadHeroImage, services as serviceImages } from '../assets/images';
import HeroCarousel from '../components/HeroCarousel';
import ServiceBreadcrumbBar from '../components/ServiceBreadcrumbBar';
import ServiceInternalLinks from '../components/ServiceInternalLinks';

interface ConstructionSafetyNetsPageProps {
  onNavigate?: (page: string) => void;
}

const CONSTRUCTION_FAQS = [
  {
    question: 'Why are construction safety nets important?',
    answer:
      'Construction safety nets are crucial for preventing worker fatalities from falls, which are among the leading causes of construction site deaths. They also protect the public from falling debris and materials.',
  },
  {
    question: 'What standards do your safety nets meet?',
    answer:
      'Our construction safety nets comply with OSHA standards, IS codes, and international safety regulations. They are tested for impact resistance and load-bearing capacity.',
  },
  {
    question: 'How strong are construction safety nets?',
    answer:
      'Our safety nets are made from high-tenacity HDPE with breaking strength suitable for catching falling personnel and debris. They undergo rigorous testing to ensure reliability.',
  },
  {
    question: 'Can safety nets be reused on different projects?',
    answer:
      'Yes, quality safety nets can be reused multiple times if properly maintained and inspected. We also offer rental options for temporary projects.',
  },
  {
    question: 'How are construction safety nets installed?',
    answer:
      'Installation is performed by trained professionals using proper anchoring systems, support cables, and attachment points. Installation methods vary based on site conditions and requirements.',
  },
];

export default function ConstructionSafetyNetsPage({ onNavigate }: ConstructionSafetyNetsPageProps) {
  useEffect(() => {
    const link = preloadHeroImage(serviceImages.construction.main);
    return () => link.remove();
  }, []);

  const benefits = [
    {
      icon: HardHat,
      title: 'Worker Safety',
      description: 'Prevents fatal falls and protects workers at height',
    },
    {
      icon: Building2,
      title: 'Site Compliance',
      description: 'Meets OSHA and local safety regulations',
    },
    {
      icon: Shield,
      title: 'Debris Protection',
      description: 'Catches falling tools, materials, and debris',
    },
    {
      icon: AlertTriangle,
      title: 'Accident Prevention',
      description: 'Significantly reduces workplace accidents and injuries',
    },
    {
      icon: Users,
      title: 'Public Safety',
      description: 'Protects pedestrians and public from falling objects',
    },
    {
      icon: CheckCircle,
      title: 'Cost-Effective',
      description: 'Prevents costly accidents and project delays',
    },
  ];

  const features = [
    'High-density polyethylene (HDPE) construction',
    'High tensile strength for heavy-duty use',
    'UV-stabilized for outdoor durability',
    'Flame-retardant materials available',
    'Multiple mesh sizes for different applications',
    'Easy installation and repositioning',
    'Weather-resistant and long-lasting',
    'Customizable to any site dimensions',
    'Compliant with safety standards',
    'Available for rent or purchase',
  ];

  const applications = [
    {
      title: 'High-Rise Construction',
      description: 'Essential fall protection for multi-story building construction, protecting workers and pedestrians below.',
    },
    {
      title: 'Scaffolding Safety',
      description: 'Installed around scaffolding perimeters to prevent falls and contain debris during construction activities.',
    },
    {
      title: 'Bridge Construction',
      description: 'Specialized netting for bridge and flyover projects to ensure worker safety at extreme heights.',
    },
    {
      title: 'Demolition Sites',
      description: 'Contain dust, debris, and materials during demolition work, protecting surrounding areas.',
    },
    {
      title: 'Renovation Projects',
      description: 'Temporary safety barriers for building renovation and maintenance work at height.',
    },
    {
      title: 'Industrial Facilities',
      description: 'Permanent or semi-permanent safety solutions for warehouses, factories, and industrial complexes.',
    },
  ];

  const types = [
    {
      title: 'Personnel Safety Nets',
      description: 'Designed to catch and protect falling workers. Tested to withstand impact loads.',
    },
    {
      title: 'Debris Containment Nets',
      description: 'Fine mesh netting to catch small debris, dust, and materials during construction.',
    },
    {
      title: 'Vertical Safety Nets',
      description: 'Installed vertically along building facades and scaffolding sides.',
    },
    {
      title: 'Horizontal Safety Nets',
      description: 'Installed horizontally at various levels to provide fall arrest protection.',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead {...getPageSeo('construction')} />
      <JsonLd
        data={buildServicePageSchemas({
          pageKey: 'construction',
          name: 'Construction Safety Nets Installation in Bangalore',
          description:
            'Industrial construction safety nets in Bangalore for fall protection, debris control, and scaffolding sites.',
          serviceType: 'Construction Safety Nets Installation',
          breadcrumbName: 'Construction Safety Nets Bangalore',
          faqs: CONSTRUCTION_FAQS,
        })}
      />
      <section className="relative text-white overflow-hidden bg-gray-100">
        {/* Hero Carousel */}
        <HeroCarousel
          images={[serviceImages.construction.main, ...serviceImages.construction.gallery]}
          altText="construction safety nets Bangalore industrial nets"
          autoPlayInterval={5000}
          overlayOpacity={0.55}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Construction Safety Nets in Bangalore | Industrial Nets
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 leading-relaxed">
              Industrial-grade safety netting for construction sites and high-rise buildings
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              RJR Safety Nets provides OSHA-compliant construction safety nets for builders, contractors, and industrial facilities across Bangalore. Protect your workers and comply with safety regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917075051812"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Call Now for Free Quote
              </a>
              <a
                href="https://wa.me/917075051812"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400 transition-colors text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServiceBreadcrumbBar pageKey="construction" onNavigate={onNavigate} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Construction Safety Nets
            </h2>
            <p className="text-xl text-gray-600">
              Essential protection for construction sites
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
                  <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-orange-600" size={28} />
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
              Types of Construction Safety Nets
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for different applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {types.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3 text-orange-600">{item.title}</h3>
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
              Applications of Construction Safety Nets
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive protection for all construction scenarios
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-orange-600">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Features & Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Industrial-grade quality and compliance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={24} />
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
          <LeadQuoteForm id="construction-lead" heading="WhatsApp — site details" />
        </div>
      </section>

      <LongFormArticle
        title="Construction safety nets in Bangalore — scope & planning"
        paragraphs={constructionLongFormParagraphs}
        id="construction-longform"
      />

      <section className="bg-white py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionLeadCTA variant="blue" />
        </div>
      </section>

      <FAQSection faqs={CONSTRUCTION_FAQS} />

      <ServiceInternalLinks pageKey="construction" onNavigate={onNavigate} />

      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Construction Site Today
          </h2>
          <p className="text-xl mb-8 text-white/95">
            OSHA-compliant • Professional installation • Rental available
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917075051812"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call: +91 7075051812
            </a>
            <a
              href="tel:+918074514411"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400 transition-colors"
            >
              Call: +91 8074514411
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
