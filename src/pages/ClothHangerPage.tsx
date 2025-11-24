import { useEffect } from 'react';
import { Shield, CheckCircle, Sun, Wind, Droplet, Sparkles } from 'lucide-react';
import { updatePageMeta, addSchemaMarkup } from '../utils/seo';
import FAQSection from '../components/FAQSection';

export default function ClothHangerPage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Cloth Hanger Nets in Bangalore | Balcony Cloth Drying Nets',
      description: 'Install premium cloth hanger nets in Bangalore for safe and convenient cloth drying. RJR Safety Nets provides durable balcony cloth drying solutions.',
      keywords: 'Cloth Hanger Nets Bangalore, Balcony Cloth Drying Nets, Clothes Drying Nets, Cloth Hanger Safety Nets',
    });

    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Cloth Hanger Nets Installation',
      provider: {
        '@type': 'LocalBusiness',
        name: 'RJR Safety Nets',
        telephone: '+91-7075051812',
        areaServed: 'Bangalore',
      },
      description: 'Professional cloth hanger net installation services in Bangalore',
    });
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: 'Prevents Cloth Falls',
      description: 'Keeps your clothes secure even in windy conditions',
    },
    {
      icon: Sun,
      title: 'Efficient Drying',
      description: 'Allows maximum sunlight and air circulation for quick drying',
    },
    {
      icon: Wind,
      title: 'Wind Protection',
      description: 'Prevents clothes from being blown away during strong winds',
    },
    {
      icon: Droplet,
      title: 'Rain Protection',
      description: 'Optional coverage to protect drying clothes from unexpected rain',
    },
    {
      icon: Sparkles,
      title: 'Clean & Hygienic',
      description: 'Keeps clothes away from birds and external contamination',
    },
    {
      icon: CheckCircle,
      title: 'Space Optimization',
      description: 'Maximizes balcony space for cloth drying needs',
    },
  ];

  const features = [
    'High-quality UV-stabilized HDPE nets',
    'Customized to fit any balcony size',
    'Rust-proof stainless steel hooks and fixtures',
    'Weather-resistant and durable materials',
    'Easy installation and removal',
    'Transparent design for aesthetic appeal',
    'Strong load-bearing capacity',
    'Low maintenance requirements',
    'Available in multiple configurations',
    '5+ years warranty coverage',
  ];

  const types = [
    {
      title: 'Fixed Cloth Hanger Nets',
      description: 'Permanent installation providing continuous cloth drying protection. Ideal for regular daily use.',
    },
    {
      title: 'Retractable Systems',
      description: 'Flexible solutions that can be extended when needed and retracted when not in use.',
    },
    {
      title: 'Covered Drying Nets',
      description: 'Complete enclosure protecting clothes from rain, birds, and dust while allowing air circulation.',
    },
    {
      title: 'Multi-Tier Systems',
      description: 'Maximize vertical space with multiple levels of cloth drying capacity.',
    },
  ];

  const faqs = [
    {
      question: 'What are cloth hanger nets?',
      answer: 'Cloth hanger nets are protective netting systems installed on balconies or terraces to prevent clothes from falling while drying, especially during windy conditions. They provide a safe and convenient solution for apartment living.',
    },
    {
      question: 'How do cloth hanger nets work?',
      answer: 'The nets are installed around your balcony clothesline or drying area, creating a protective barrier. Clothes can dry naturally with full sun and air exposure while being secured from falling or being blown away.',
    },
    {
      question: 'Will the nets block sunlight?',
      answer: 'No, our cloth hanger nets are made from transparent or semi-transparent materials that allow maximum sunlight penetration while providing protection.',
    },
    {
      question: 'Can the nets withstand heavy loads?',
      answer: 'Yes, our cloth hanger nets are designed with strong HDPE material and reinforced edges that can support the weight of wet clothes without sagging.',
    },
    {
      question: 'Are they suitable for all types of balconies?',
      answer: 'Yes, we provide customized solutions for all balcony sizes and configurations, whether small apartment balconies or large terrace areas.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Most cloth hanger net installations are completed within 2-3 hours, depending on the balcony size and configuration.',
    },
    {
      question: 'Do you offer rain protection options?',
      answer: 'Yes, we can install covered cloth drying systems that protect from rain while maintaining air circulation for effective drying.',
    },
    {
      question: 'What is the maintenance required?',
      answer: 'Minimal maintenance is needed. Occasional cleaning with water is sufficient to keep the nets in good condition.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-teal-600 to-cyan-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cloth Hanger Nets in Bangalore
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100 leading-relaxed">
              Safe and convenient cloth drying solutions for your balcony
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              RJR Safety Nets provides premium cloth hanger netting systems that prevent clothes from falling while ensuring efficient drying with maximum sun and air exposure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917075051812"
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Call: +91 7075051812
              </a>
              <a
                href="https://wa.me/917075051812"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-colors text-center"
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
              Benefits of Cloth Hanger Nets
            </h2>
            <p className="text-xl text-gray-600">
              Smart solutions for worry-free cloth drying
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
                  <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-teal-600" size={28} />
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
              Types of Cloth Hanger Net Systems
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect solution for your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {types.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3 text-teal-600">{item.title}</h3>
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
              Features of Our Cloth Hanger Nets
            </h2>
            <p className="text-xl text-gray-600">
              Quality features for lasting performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
                <CheckCircle className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Cloth Hanger Nets Installed
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Free consultation • Custom solutions • Professional installation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917075051812"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call: +91 7075051812
            </a>
            <a
              href="tel:+918074514411"
              className="bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-400 transition-colors"
            >
              Call: +91 8074514411
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
