import { useEffect } from 'react';
import { Shield, CheckCircle, Eye, Wind, Lock, Home } from 'lucide-react';
import { updatePageMeta, addSchemaMarkup } from '../utils/seo';
import FAQSection from '../components/FAQSection';

export default function InvisibleGrillsPage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Invisible Grills in Bangalore | Transparent Window Safety Grills',
      description: 'Install invisible grills in Bangalore for modern window and balcony safety. RJR Safety Nets offers sleek, transparent grill solutions that maintain your view.',
      keywords: 'Invisible Grills Bangalore, Transparent Grills, Window Safety Grills, Invisible Window Grills, Modern Safety Grills',
      canonical: 'https://www.rjrsafetynets.in/invisible-grills',
      ogTitle: 'Invisible Grills in Bangalore | RJR Safety Nets',
      ogDescription: 'Marine-grade 316 stainless steel invisible grills for windows and balconies with modern aesthetics.',
      ogType: 'website',
      author: 'RJR Safety Nets',
    });

    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://www.rjrsafetynets.in/invisible-grills#service',
      serviceType: 'Invisible Grills Installation',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.rjrsafetynets.in/#organization',
        name: 'RJR Safety Nets',
        telephone: '+91-7075051812',
        areaServed: 'Bangalore',
      },
      description: 'Professional invisible grills installation services in Bangalore',
    });
  }, []);

  const benefits = [
    {
      icon: Eye,
      title: 'Unobstructed View',
      description: 'Maintain clear views while ensuring complete safety and security',
    },
    {
      icon: Shield,
      title: 'Maximum Security',
      description: 'Strong stainless steel cables provide superior protection',
    },
    {
      icon: Wind,
      title: 'Natural Ventilation',
      description: 'Allows 100% air flow and natural light into your space',
    },
    {
      icon: Lock,
      title: 'Child & Pet Safety',
      description: 'Prevents falls and ensures safety for children and pets',
    },
    {
      icon: Home,
      title: 'Modern Aesthetics',
      description: 'Sleek, contemporary look that enhances property value',
    },
    {
      icon: CheckCircle,
      title: 'Low Maintenance',
      description: 'Rust-proof materials requiring minimal upkeep',
    },
  ];

  const features = [
    'Marine-grade 316 stainless steel cables',
    '2mm to 2.5mm cable thickness for strength',
    'Horizontal or vertical cable configurations',
    'Corrosion-resistant and weatherproof',
    'UV-resistant powder-coated fixtures',
    'Custom-designed for any opening size',
    'Quick and clean installation',
    'Emergency release mechanism available',
    'Compliant with safety regulations',
    '10+ years lifespan with proper care',
  ];

  const applications = [
    {
      title: 'Windows',
      description: 'Perfect for all types of windows - sliding, casement, or fixed. Provides safety without blocking views.',
    },
    {
      title: 'Balconies',
      description: 'Secure balconies in apartments and high-rises while maintaining the open feel and panoramic views.',
    },
    {
      title: 'Terraces',
      description: 'Protect terrace perimeters and parapet walls with invisible yet strong safety barriers.',
    },
    {
      title: 'Staircases',
      description: 'Modern safety solutions for staircase railings and open sides in multi-level homes.',
    },
  ];

  const whyChoose = [
    'Certified 316-grade stainless steel cables',
    'Professional measurement and custom fitting',
    'Experienced installation team',
    'Weather-tested for Bangalore climate',
    'Child and pet-safe design',
    'Fire-safe and emergency-friendly',
    'Enhances property aesthetics and value',
    'Complies with building safety codes',
    '10-year warranty on materials',
    'Available across all Bangalore localities',
  ];

  const faqs = [
    {
      question: 'What are invisible grills?',
      answer: 'Invisible grills are modern safety solutions made from thin, high-tensile stainless steel cables installed horizontally or vertically across windows and balconies. They provide security and safety while remaining nearly invisible, maintaining clear views.',
    },
    {
      question: 'How strong are invisible grills?',
      answer: 'Invisible grills use marine-grade 316 stainless steel cables with high tensile strength (typically 1800+ kg breaking load). They can withstand significant force and are designed to prevent falls and unauthorized entry.',
    },
    {
      question: 'Are they safe for children?',
      answer: 'Yes, invisible grills are specifically designed with child safety in mind. The cable spacing (typically 2-3 inches) prevents children from slipping through while maintaining visibility and ventilation.',
    },
    {
      question: 'Will they obstruct my view?',
      answer: 'No, invisible grills are designed to be nearly invisible from a distance. The thin cables allow 99% visibility, maintaining your views while providing complete safety.',
    },
    {
      question: 'How long do invisible grills last?',
      answer: 'With proper installation and quality materials (316-grade stainless steel), invisible grills can last 10-15 years or more without rusting or deteriorating.',
    },
    {
      question: 'Can they be installed on all window types?',
      answer: 'Yes, invisible grills can be customized for all window types - sliding windows, casement windows, fixed windows, balconies, and terraces of any size.',
    },
    {
      question: 'Are they better than traditional grills?',
      answer: 'Invisible grills offer several advantages: unobstructed views, better ventilation, modern aesthetics, easier emergency exit, and they don\'t make your home feel caged or confined.',
    },
    {
      question: 'What is the installation time?',
      answer: 'Installation typically takes 3-6 hours depending on the number and size of openings. Our professional team ensures clean, precise installation.',
    },
    {
      question: 'Do they require maintenance?',
      answer: 'Minimal maintenance is required. Occasional cleaning with water is sufficient. The stainless steel cables are rust-proof and weather-resistant.',
    },
  ];

  useEffect(() => {
    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
  }, []);

  return (
    <div className="min-h-screen">
      <section className="py-20 md:py-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Invisible Grills in Bangalore
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-600 leading-relaxed">
              Modern safety solutions that maintain your view and enhance aesthetics
            </p>
            <p className="text-lg mb-8 leading-relaxed text-gray-700">
              RJR Safety Nets provides premium invisible grill installations using marine-grade stainless steel. Enjoy complete safety for your family while preserving unobstructed views and natural ventilation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917075051812"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Call: +91 7075051812
              </a>
              <a
                href="https://wa.me/917075051812"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-400 transition-colors text-center"
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
              Benefits of Invisible Grills
            </h2>
            <p className="text-xl text-gray-600">
              Modern safety with uncompromised aesthetics
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
                  <div className="bg-indigo-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-indigo-600" size={28} />
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
              Applications of Invisible Grills
            </h2>
            <p className="text-xl text-gray-600">
              Versatile solutions for all safety needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3 text-indigo-600">{item.title}</h3>
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
              Features & Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Premium quality for lasting safety
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
                <CheckCircle className="text-indigo-500 flex-shrink-0 mt-1" size={24} />
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
              Why Choose RJR for Invisible Grills?
            </h2>
            <p className="text-xl text-gray-600">
              Expertise and quality you can trust
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

      <FAQSection faqs={faqs} />

      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Modern Safety for Your Home
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Free consultation • Professional installation • 10-year warranty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917075051812"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call: +91 7075051812
            </a>
            <a
              href="tel:+918074514411"
              className="bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-400 transition-colors"
            >
              Call: +91 8074514411
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
