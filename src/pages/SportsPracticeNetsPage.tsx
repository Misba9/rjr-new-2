import { useEffect } from 'react';
import { Shield, CheckCircle, Target, Users, Trophy, Zap } from 'lucide-react';
import { updatePageMeta, addSchemaMarkup } from '../utils/seo';
import FAQSection from '../components/FAQSection';

export default function SportsPracticeNetsPage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Sports Practice Nets in Bangalore | Cricket, Tennis & Multi-Sport Nets',
      description: 'Professional sports practice nets in Bangalore for cricket, tennis, badminton, and more. RJR Safety Nets provides durable sports netting solutions.',
      keywords: 'Sports Practice Nets Bangalore, Cricket Practice Nets, Tennis Practice Nets, Badminton Nets, Multi-Sport Nets Bangalore',
    });

    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Sports Practice Nets Installation',
      provider: {
        '@type': 'LocalBusiness',
        name: 'RJR Safety Nets',
        telephone: '+91-7075051812',
        areaServed: 'Bangalore',
      },
      description: 'Professional sports practice net installation services in Bangalore',
    });
  }, []);

  const benefits = [
    {
      icon: Target,
      title: 'Focused Practice',
      description: 'Dedicated space for uninterrupted sports training and skill development',
    },
    {
      icon: Shield,
      title: 'Safety & Protection',
      description: 'Prevents balls from damaging property or injuring bystanders',
    },
    {
      icon: Users,
      title: 'All Skill Levels',
      description: 'Perfect for beginners, amateurs, and professional athletes',
    },
    {
      icon: Zap,
      title: 'Durable Materials',
      description: 'Weather-resistant nets that withstand intense practice sessions',
    },
    {
      icon: Trophy,
      title: 'Multi-Sport Use',
      description: 'Adaptable for cricket, tennis, badminton, football, and more',
    },
    {
      icon: CheckCircle,
      title: 'Custom Solutions',
      description: 'Tailored designs for terrace, garden, or dedicated sports areas',
    },
  ];

  const sportsTypes = [
    {
      title: 'Cricket Practice Nets',
      description: 'Standard or custom-sized cricket nets for batting and bowling practice. Available in various lengths and heights with proper pitch markings.',
    },
    {
      title: 'Tennis Practice Nets',
      description: 'Full court enclosures or practice walls for tennis training. Designed to contain balls during serves and ground strokes.',
    },
    {
      title: 'Badminton Nets',
      description: 'Complete court installations with proper height specifications and boundary netting to prevent shuttlecock loss.',
    },
    {
      title: 'Football Practice Nets',
      description: 'Goal practice nets and field enclosures for soccer training, shooting practice, and goalkeeper training.',
    },
    {
      title: 'Golf Practice Nets',
      description: 'Impact-resistant netting for golf driving ranges and chipping practice areas. Available in various sizes.',
    },
    {
      title: 'Multi-Purpose Nets',
      description: 'Versatile sports netting suitable for multiple sports activities in schools, clubs, and residential complexes.',
    },
  ];

  const features = [
    'High-quality HDPE material with UV protection',
    'High impact resistance for ball sports',
    'Weather-resistant and waterproof',
    'Knotted or knotless net options',
    'Custom mesh sizes for different sports',
    'Professional-grade stitching and borders',
    'Easy installation and removal',
    'Available in standard and custom sizes',
    'Multiple color options available',
    'Long-lasting durability (5-7 years)',
  ];

  const applications = [
    {
      title: 'Residential Complexes',
      description: 'Create dedicated sports areas in apartment complexes and gated communities.',
    },
    {
      title: 'Schools & Colleges',
      description: 'Essential infrastructure for physical education and sports programs.',
    },
    {
      title: 'Sports Clubs & Academies',
      description: 'Professional-grade practice facilities for sports training centers.',
    },
    {
      title: 'Terrace Sports',
      description: 'Convert rooftop spaces into functional sports practice areas.',
    },
  ];

  const faqs = [
    {
      question: 'What sports can I practice with your nets?',
      answer: 'Our sports nets are suitable for cricket, tennis, badminton, football, golf, volleyball, and other ball sports. We provide customized solutions for each sport\'s specific requirements.',
    },
    {
      question: 'What size cricket practice net do I need?',
      answer: 'Standard cricket practice nets are typically 60-80 feet long, 12-15 feet wide, and 10-12 feet high. We can customize based on your available space and requirements.',
    },
    {
      question: 'Are the nets suitable for outdoor use?',
      answer: 'Yes, all our sports practice nets are made from UV-stabilized HDPE material designed for outdoor use. They withstand sun, rain, and other weather conditions.',
    },
    {
      question: 'How long do sports practice nets last?',
      answer: 'With quality materials and proper installation, our sports nets typically last 5-7 years or more, depending on usage intensity and weather exposure.',
    },
    {
      question: 'Can I install nets on my terrace?',
      answer: 'Yes, we specialize in terrace sports net installations. We can design cricket nets, multi-sport enclosures, or practice walls for rooftop spaces.',
    },
    {
      question: 'What is the installation time?',
      answer: 'Installation time varies based on the size and complexity. Typically, a standard cricket net installation takes 4-6 hours, while larger multi-sport enclosures may take 1-2 days.',
    },
    {
      question: 'Do you provide nets for sports academies?',
      answer: 'Yes, we provide professional-grade sports netting solutions for academies, coaching centers, and training facilities with appropriate quality and durability.',
    },
    {
      question: 'Can the nets be removed and reinstalled?',
      answer: 'Yes, our sports nets can be designed for easy removal and reinstallation if needed. We use appropriate fixing systems based on your requirements.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-emerald-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sports Practice Nets in Bangalore
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed">
              Professional sports netting for cricket, tennis, badminton, and multi-sport facilities
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              RJR Safety Nets provides high-quality sports practice nets for homes, schools, clubs, and academies across Bangalore. Create dedicated practice spaces with our durable, weather-resistant netting solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917075051812"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Call: +91 7075051812
              </a>
              <a
                href="https://wa.me/917075051812"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400 transition-colors text-center"
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
              Benefits of Sports Practice Nets
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your sports training with professional netting
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
                  <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-emerald-600" size={28} />
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
              Types of Sports Practice Nets
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for every sport
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsTypes.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-emerald-600">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
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
              Professional-grade quality for serious athletes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg shadow-sm">
                <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={24} />
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
              Applications of Sports Practice Nets
            </h2>
            <p className="text-xl text-gray-600">
              Perfect for various settings and environments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3 text-emerald-600">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build Your Sports Practice Area
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Custom design • Professional installation • Durable materials
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917075051812"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call: +91 7075051812
            </a>
            <a
              href="tel:+918074514411"
              className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-400 transition-colors"
            >
              Call: +91 8074514411
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
