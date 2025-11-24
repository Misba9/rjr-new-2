import { useEffect } from 'react';
import { Shield, CheckCircle, Clock, Award, Users, Star } from 'lucide-react';
import { updatePageMeta, addSchemaMarkup } from '../utils/seo';
import FAQSection from '../components/FAQSection';
import { services as serviceImages } from '../assets/images';
import HeroCarousel from '../components/HeroCarousel';

export default function BalconyPage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Best Balcony Safety Nets in Bangalore | RJR Safety Nets Expert',
      description: 'Protect and keep your family with strong balcony safety nets in Bangalore. RJR Safety Nets ensures safe, long-lasting solutions for apartments and homes. Call us today.',
      keywords: 'Balcony Safety Nets Bangalore, Balcony Protection Net, Balcony Netting, Balcony Safety Nets Price, Balcony Nets Bangalore',
    });

    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Balcony Safety Nets Installation',
      provider: {
        '@type': 'LocalBusiness',
        name: 'RJR Safety Nets',
        telephone: '+91-7075051812',
        areaServed: 'Bangalore',
      },
      description: 'Professional balcony safety net installation services in Bangalore',
    });
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: 'Maximum Protection',
      description: 'Prevents accidents and falls, especially for children and pets',
    },
    {
      icon: Award,
      title: 'Premium Quality Materials',
      description: 'High-grade HDPE nets that are UV stabilized and weather-resistant',
    },
    {
      icon: Clock,
      title: 'Long-lasting Durability',
      description: '5+ years lifespan with proper maintenance and warranty coverage',
    },
    {
      icon: CheckCircle,
      title: 'Invisible Design',
      description: 'Transparent nets that maintain your balcony aesthetics',
    },
    {
      icon: Users,
      title: 'Professional Installation',
      description: 'Expert team with years of experience in balcony safety',
    },
    {
      icon: Star,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality',
    },
  ];

  const whyChoose = [
    'High-quality HDPE safety nets with UV stabilization',
    'Customized solutions for all balcony sizes and types',
    'Quick and hassle-free installation process',
    'Experienced and trained installation team',
    '5+ years warranty on all installations',
    'Free site inspection and quotation',
    'Transparent pricing with no hidden costs',
    'Available across all areas of Bangalore',
    '100% customer satisfaction guarantee',
    'Post-installation support and maintenance',
  ];

  const faqs = [
    {
      question: 'Why do I need balcony safety nets?',
      answer: 'Balcony safety nets are essential for preventing accidents, especially if you have children or pets. They provide a secure barrier without obstructing your view or ventilation.',
    },
    {
      question: 'What material are the balcony nets made of?',
      answer: 'Our balcony safety nets are made from high-grade HDPE (High-Density Polyethylene) material that is UV stabilized, weather-resistant, and extremely durable.',
    },
    {
      question: 'How long does the installation take?',
      answer: 'Most balcony safety net installations are completed within 2-4 hours, depending on the size and number of balconies.',
    },
    {
      question: 'Will the nets affect my balcony appearance?',
      answer: 'No, our safety nets are designed to be transparent and minimal, maintaining the aesthetic appeal of your balcony while providing maximum protection.',
    },
    {
      question: 'What is the warranty period?',
      answer: 'We provide a 5+ year warranty on all our balcony safety net installations, covering both material defects and workmanship.',
    },
    {
      question: 'How much do balcony safety nets cost?',
      answer: 'The cost depends on the size of your balcony and specific requirements. Contact us for a free inspection and quotation.',
    },
    {
      question: 'Can the nets withstand heavy rain and wind?',
      answer: 'Yes, our safety nets are weather-resistant and designed to withstand heavy rain, strong winds, and harsh sun exposure.',
    },
    {
      question: 'Do you provide installation across all areas of Bangalore?',
      answer: 'Yes, we provide balcony safety net installation services across all areas of Bangalore.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Hero Carousel */}
        <HeroCarousel
          images={[serviceImages.balcony.main, ...serviceImages.balcony.gallery]}
          altText="Balcony Safety Nets Installation"
          autoPlayInterval={5000}
          overlayOpacity={0.2}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Balcony Safety Nets in Bangalore
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Protect your family with high-quality, durable balcony safety nets. Professional installation with 5+ years warranty.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              RJR Safety Nets provides premium balcony safety solutions across Bangalore. Our invisible, strong nets ensure maximum protection without compromising your view.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917075051812"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Call: +91 7075051812
              </a>
              <a
                href="https://wa.me/917075051812"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors text-center"
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
              Why Choose RJR Safety Nets for Balcony Protection?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most trusted name for balcony safety solutions in Bangalore
            </p>
          </div>
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
              Benefits of Installing Balcony Safety Nets
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive protection for your peace of mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <img 
                    src={image} 
                    alt={`Balcony Safety Net Installation ${index + 1}`} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-4">Professional Installation #{index + 1}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full">
                <img 
                  src={serviceImages.balcony.main} 
                  alt="Balcony Safety Net Installation" 
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Balcony Safety Nets Installed Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Free inspection • Quick installation • 5+ years warranty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917075051812"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call: +91 7075051812
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
