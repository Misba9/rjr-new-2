import { useEffect } from 'react';
import { Shield, CheckCircle, HardHat, Building2, Users, AlertTriangle } from 'lucide-react';
import { updatePageMeta, addSchemaMarkup } from '../utils/seo';
import FAQSection from '../components/FAQSection';
import { services as serviceImages } from '../assets/images';
import HeroCarousel from '../components/HeroCarousel';

export default function ConstructionSafetyNetsPage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Construction Safety Nets in Bangalore | Industrial Safety Nets',
      description: 'High-quality construction safety nets in Bangalore for building sites. RJR Safety Nets provides OSHA-compliant industrial safety netting solutions.',
      keywords: 'Construction Safety Nets Bangalore, Industrial Safety Nets, Building Safety Nets, Scaffolding Safety Nets, Fall Protection Nets',
    });

    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Construction Safety Nets Installation',
      provider: {
        '@type': 'LocalBusiness',
        name: 'RJR Safety Nets',
        telephone: '+91-7075051812',
        areaServed: 'Bangalore',
      },
      description: 'Professional construction and industrial safety net installation services in Bangalore',
    });
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

  const faqs = [
    {
      question: 'Why are construction safety nets important?',
      answer: 'Construction safety nets are crucial for preventing worker fatalities from falls, which are among the leading causes of construction site deaths. They also protect the public from falling debris and materials.',
    },
    {
      question: 'What standards do your safety nets meet?',
      answer: 'Our construction safety nets comply with OSHA standards, IS codes, and international safety regulations. They are tested for impact resistance and load-bearing capacity.',
    },
    {
      question: 'How strong are construction safety nets?',
      answer: 'Our safety nets are made from high-tenacity HDPE with breaking strength suitable for catching falling personnel and debris. They undergo rigorous testing to ensure reliability.',
    },
    {
      question: 'Can safety nets be reused on different projects?',
      answer: 'Yes, quality safety nets can be reused multiple times if properly maintained and inspected. We also offer rental options for temporary projects.',
    },
    {
      question: 'How are construction safety nets installed?',
      answer: 'Installation is performed by trained professionals using proper anchoring systems, support cables, and attachment points. Installation methods vary based on site conditions and requirements.',
    },
    {
      question: 'What mesh size is appropriate?',
      answer: 'Mesh size depends on the application - larger mesh for personnel protection (100mm-150mm) and smaller mesh (10mm-25mm) for debris containment.',
    },
    {
      question: 'Do you provide rental services?',
      answer: 'Yes, we offer both purchase and rental options for construction safety nets, making it cost-effective for short-term and long-term projects.',
    },
    {
      question: 'How long do construction safety nets last?',
      answer: 'With proper care and storage, quality construction safety nets can last 3-5 years, depending on usage intensity and weather exposure.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-700 to-gray-900 text-white overflow-hidden">
        {/* Hero Carousel */}
        <HeroCarousel
          images={[serviceImages.construction.main, ...serviceImages.construction.gallery]}
          altText="Construction Safety Nets Installation"
          autoPlayInterval={5000}
          overlayOpacity={0.2}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/90 to-gray-900/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Construction Safety Nets in Bangalore
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
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
                Call: +91 7075051812
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

      <FAQSection faqs={faqs} />

      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Construction Site Today
          </h2>
          <p className="text-xl mb-8 text-orange-100">
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
