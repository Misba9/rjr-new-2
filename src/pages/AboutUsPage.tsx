import { useEffect } from 'react';
import { Shield, Award, Users, Clock, CheckCircle, Phone, MapPin, Star } from 'lucide-react';
import { updatePageMeta, addSchemaMarkup } from '../utils/seo';
import { about } from '../assets/images';
import HeroCarousel from '../components/HeroCarousel';

export default function AboutUsPage() {
  useEffect(() => {
    updatePageMeta({
      title: 'About Us - RJR Safety Nets Bangalore | Expert Safety Solutions',
      description: 'Learn about RJR Safety Nets - Bangalore\'s trusted safety net specialists with 1000+ happy customers. Premium quality, professional installation, 5+ years warranty.',
      keywords: 'About RJR Safety Nets, Safety Net Company Bangalore, Professional Safety Nets, Trusted Safety Solutions',
    });

    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'RJR Safety Nets',
      description: 'Professional safety net installation services in Bangalore',
      telephone: '+91-7075051812',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      areaServed: 'Bangalore',
      priceRange: '$$',
    });
  }, []);

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize the safety and security of your family and property above all else. Every installation meets the highest safety standards.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the highest grade materials - UV-stabilized HDPE nets and 316-grade stainless steel for invisible grills.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do. We provide personalized solutions and exceptional after-sales support.',
    },
    {
      icon: CheckCircle,
      title: 'Professional Excellence',
      description: 'Our trained installation team brings years of expertise to ensure perfect fitting and long-lasting results.',
    },
  ];

  const stats = [
    { number: '1000+', label: 'Happy Customers' },
    { number: '5+', label: 'Years Warranty' },
    { number: '100+', label: 'Areas Served' },
    { number: '24/7', label: 'Support Available' },
  ];

  const services = [
    'Balcony Safety Nets',
    'Pigeon Safety Nets',
    'Children Safety Nets',
    'Monkey Safety Nets',
    'Cloth Hanger Nets',
    'Invisible Grills',
    'Construction Safety Nets',
    'Sports Practice Nets',
  ];

  const whyChoose = [
    {
      icon: Clock,
      title: 'Quick Installation',
      description: 'Professional installation within 24-48 hours of booking. We value your time.',
    },
    {
      icon: Award,
      title: 'Certified Materials',
      description: 'All our materials are tested and certified for quality, strength, and durability.',
    },
    {
      icon: Star,
      title: 'Transparent Pricing',
      description: 'No hidden costs. What you see is what you pay. Free inspection and quotation.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Trained and experienced installation professionals who ensure perfect results.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative text-white py-20 overflow-hidden bg-gray-100">
        {/* Hero Carousel */}
        <HeroCarousel
          images={[about.main, about.alternative]}
          altText="RJR Safety Nets Company"
          autoPlayInterval={6000}
          overlayOpacity={0.8}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About RJR Safety Nets
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Bangalore's trusted name in safety net solutions since years. Protecting families and properties with premium quality installations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  RJR Safety Nets was founded with a simple mission: to provide the highest quality safety solutions to homes and businesses across Bangalore. What started as a small operation has grown into one of the most trusted names in safety net installations.
                </p>
                <p>
                  We understand that safety is not just about installing nets - it's about peace of mind. That's why we go the extra mile to ensure every installation is perfect, every customer is satisfied, and every product meets our rigorous quality standards.
                </p>
                <p>
                  Today, with over 1000 happy customers and countless successful installations, we continue to set the standard for safety net solutions in Bangalore. Our commitment to quality, professionalism, and customer satisfaction remains unwavering.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={about.alternative || about.main} 
                alt="RJR Safety Nets Team and Services" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive safety solutions for all needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="text-blue-600 mx-auto mb-3" size={32} />
                <p className="font-semibold text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RJR Safety Nets?</h2>
            <p className="text-xl text-gray-600">The reasons our customers trust us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4 items-start bg-gray-50 rounded-xl p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We're here to help with all your safety net needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center">
              <Phone className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Call Us</h3>
              <p className="text-gray-700 mb-4">Speak to our experts for immediate assistance</p>
              <div className="space-y-2">
                <a href="tel:+917075051812" className="block text-blue-600 font-semibold text-lg hover:text-blue-700">
                  +91 7075051812
                </a>
                <a href="tel:+918074514411" className="block text-blue-600 font-semibold text-lg hover:text-blue-700">
                  +91 8074514411
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <MapPin className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-3">Service Area</h3>
              <p className="text-gray-700 mb-4">We serve all areas across Bangalore</p>
              <p className="text-gray-600">
                Whitefield, Koramangala, HSR Layout, Marathahalli, Indiranagar, Jayanagar, and all other localities
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free inspection and quote from Bangalore's most trusted safety net experts
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
