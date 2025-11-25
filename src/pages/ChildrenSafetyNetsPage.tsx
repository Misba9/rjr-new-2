import { useEffect } from 'react';
import { Shield, CheckCircle, Heart, Home, Baby, Lock } from 'lucide-react';
import { updatePageMeta, addSchemaMarkup } from '../utils/seo';
import FAQSection from '../components/FAQSection';
import { services as serviceImages } from '../assets/images';
import HeroCarousel from '../components/HeroCarousel';

export default function ChildrenSafetyNetsPage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Children Safety Nets in Bangalore | Child Protection Nets',
      description: 'Keep your children safe with premium quality children safety nets in Bangalore. RJR Safety Nets offers reliable child protection solutions for balconies, windows, and staircases.',
      keywords: 'Children Safety Nets Bangalore, Child Protection Nets, Kids Safety Nets, Baby Safety Nets Bangalore, Balcony Child Safety',
      canonical: 'https://www.rjrsafetynets.in/children',
      ogTitle: 'Children Safety Nets in Bangalore | RJR Safety Nets',
      ogDescription: 'Child-proof balcony and window nets with professional installation and warranty across Bengaluru.',
      ogType: 'website',
      author: 'RJR Safety Nets',
    });

    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://www.rjrsafetynets.in/children#service',
      serviceType: 'Children Safety Nets Installation',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.rjrsafetynets.in/#organization',
        name: 'RJR Safety Nets',
        telephone: '+91-7075051812',
        areaServed: 'Bangalore',
      },
      description: 'Professional children safety net installation services in Bangalore',
    });

    // Preload LCP hero image for faster first paint
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = serviceImages.children.main;
    (preloadLink as any).fetchPriority = 'high';
    document.head.appendChild(preloadLink);
  }, []);

  const benefits = [
    {
      icon: Baby,
      title: 'Child-Proof Protection',
      description: 'Specifically designed to prevent children from falling through gaps',
    },
    {
      icon: Shield,
      title: 'Extra Strong Material',
      description: 'High-tensile strength nets that can withstand child activities',
    },
    {
      icon: Heart,
      title: 'Peace of Mind',
      description: 'Let your children play freely while ensuring complete safety',
    },
    {
      icon: Lock,
      title: 'Secure Installation',
      description: 'Professional installation ensuring no gaps or weak points',
    },
    {
      icon: Home,
      title: 'Multiple Applications',
      description: 'Perfect for balconies, windows, staircases, and terraces',
    },
    {
      icon: CheckCircle,
      title: 'Invisible Design',
      description: 'Transparent nets that maintain your home aesthetics',
    },
  ];

  const features = [
    'UV-stabilized HDPE material for long-lasting durability',
    'Small mesh size preventing even tiny gaps',
    'Weather-resistant and waterproof construction',
    'Professional measurement and custom fitting',
    'Strong edge reinforcement for extra security',
    'Non-toxic and child-safe materials',
    'Easy to clean and maintain',
    'Available in multiple colors to match décor',
    '5+ years warranty coverage',
    'Quick installation within 2-4 hours',
  ];

  const applications = [
    {
      title: 'Balcony Safety',
      description: 'Prevent falls from balconies in apartments and high-rise buildings',
    },
    {
      title: 'Window Protection',
      description: 'Secure windows to prevent children from leaning out or falling',
    },
    {
      title: 'Staircase Safety',
      description: 'Install safety barriers on staircase railings and open sides',
    },
    {
      title: 'Terrace Security',
      description: 'Protect children playing on terraces and rooftop areas',
    },
  ];

  const faqs = [
    {
      question: 'Why are children safety nets essential?',
      answer: 'Children safety nets are crucial for preventing accidental falls from balconies, windows, and staircases. Young children are naturally curious and may not understand height dangers, making safety nets a vital protection measure in homes with balconies or elevated areas.',
    },
    {
      question: 'What mesh size is recommended for children safety nets?',
      answer: 'We recommend a mesh size of 25mm or smaller for children safety nets. This prevents even small children from getting their heads or bodies through the net, ensuring maximum protection.',
    },
    {
      question: 'Are children safety nets strong enough?',
      answer: 'Yes, our children safety nets are made from high-grade HDPE material with high tensile strength, capable of withstanding significant force and weight. They are specifically designed to handle the activities and movements of active children.',
    },
    {
      question: 'Will safety nets block sunlight or air?',
      answer: 'No, our transparent safety nets allow 90% of light and air to pass through while providing complete protection. They are designed to be virtually invisible and do not obstruct your view or ventilation.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Most children safety net installations are completed within 2-4 hours depending on the area size. Our professional team ensures precise fitting with no gaps.',
    },
    {
      question: 'Can the nets withstand outdoor conditions?',
      answer: 'Absolutely. Our nets are UV-stabilized and weather-resistant, designed to withstand rain, sun, and extreme weather conditions without deteriorating.',
    },
    {
      question: 'What is the warranty period?',
      answer: 'We provide a 5+ year warranty on all children safety net installations, covering both material quality and workmanship.',
    },
    {
      question: 'Are the materials safe for children?',
      answer: 'Yes, all our safety nets are made from non-toxic, child-safe materials that meet international safety standards. They pose no health risks to children.',
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
      <section className="relative text-white overflow-hidden bg-gray-100">
        {/* Hero Carousel */}
        <HeroCarousel
          images={[serviceImages.children.main, ...serviceImages.children.gallery]}
          altText="Children Safety Nets Installation"
          autoPlayInterval={5000}
          overlayOpacity={0.8}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Children Safety Nets in Bangalore
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100 leading-relaxed">
              Protect your little ones with premium child safety nets for balconies, windows, and more
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              RJR Safety Nets provides the highest quality children safety solutions across Bangalore. Our specially designed child-proof nets ensure complete protection while maintaining the beauty of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917075051812"
                className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Call: +91 7075051812
              </a>
              <a
                href="https://wa.me/917075051812"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 transition-colors text-center"
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
              Benefits of Children Safety Nets
            </h2>
            <p className="text-xl text-gray-600">
              Complete protection for your children's safety and your peace of mind
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
                  <div className="bg-pink-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-pink-600" size={28} />
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
              Key Features of Our Children Safety Nets
            </h2>
            <p className="text-xl text-gray-600">
              Premium quality features for maximum protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="text-pink-500 flex-shrink-0 mt-1" size={24} />
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
              Applications of Children Safety Nets
            </h2>
            <p className="text-xl text-gray-600">
              Versatile protection for all areas of your home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3 text-pink-600">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protect Your Children Today
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Free inspection • Expert installation • 5+ years warranty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917075051812"
              className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call: +91 7075051812
            </a>
            <a
              href="tel:+918074514411"
              className="bg-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 transition-colors"
            >
              Call: +91 8074514411
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
