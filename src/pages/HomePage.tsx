import { useEffect } from 'react';
import { Shield, Award, Clock, Users, Star, ChevronRight } from 'lucide-react';
import { updatePageMeta, addSchemaMarkup } from '../utils/seo';
import FAQSection from '../components/FAQSection';
import { services as serviceImages } from '../assets/images';
import HeroSlider from '../components/HeroSlider';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  useEffect(() => {
    updatePageMeta({
      title: 'Best Safety Nets in Bangalore | RJR Safety Nets - 5+ Years Warranty',
      description: 'Professional safety net installation in Bangalore. Balcony, pigeon, children, construction safety nets. 1000+ happy customers. Free inspection. Call +91 7075051812 for expert service.',
      keywords: 'Safety Nets Bangalore, Balcony Safety Nets Bangalore, Pigeon Safety Nets, Children Safety Nets, Construction Safety Nets, Safety Net Installation, Best Safety Nets Bangalore, Safety Net Price',
      canonical: 'https://rjrsafetynets.com/',
      ogTitle: 'Best Safety Nets in Bangalore | RJR Safety Nets',
      ogDescription: 'Professional safety net installation services in Bangalore. 1000+ satisfied customers. 5+ years warranty. Expert installation.',
      ogType: 'website',
      author: 'RJR Safety Nets',
    });

    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://rjrsafetynets.com/#organization',
      name: 'RJR Safety Nets',
      image: 'https://rjrsafetynets.com/logo.png',
      description: 'Professional safety net installation services in Bangalore for balconies, pigeon control, children safety, construction sites, and sports facilities.',
      url: 'https://rjrsafetynets.com',
      telephone: '+917075051812',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bangalore',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.9716,
        longitude: 77.5946,
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Bangalore',
        },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '08:00',
          closes: '20:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '1000',
      },
      sameAs: [
        'https://www.facebook.com/rjrsafetynets',
        'https://www.instagram.com/rjrsafetynets',
        'https://twitter.com/rjrsafetynets',
      ],
    });
  }, []);

  const services = [
    {
      id: 'balcony',
      name: 'Balcony Safety Nets',
      description: 'Protect your family with high-quality balcony safety nets. Durable, weather-resistant, and invisible design for apartments and homes.',
      icon: Shield,
      href: 'balcony',
      featured: true,
      image: serviceImages.balcony.main,
    },
    {
      id: 'pigeon',
      name: 'Pigeon Safety Nets',
      description: 'Keep pigeons away with our specialized anti-bird nets. Humane, effective, and long-lasting protection for balconies.',
      icon: Shield,
      href: 'pigeon',
      featured: true,
      image: serviceImages.pigeon.main,
    },
    {
      id: 'children',
      name: 'Children Safety Nets',
      description: 'Child-proof your balconies and windows with strong safety nets designed for maximum protection and peace of mind.',
      icon: Shield,
      href: 'children',
      featured: true,
      image: serviceImages.children.main,
    },
    {
      id: 'monkey',
      name: 'Monkey Safety Nets',
      description: 'Effective anti-monkey netting solutions to protect your property from monkey menace. Humane and durable.',
      icon: Shield,
      href: 'monkey',
      featured: true,
      image: serviceImages.monkey.main,
    },
    {
      id: 'cloth-hanger',
      name: 'Cloth Hanger Nets',
      description: 'Safe and convenient balcony cloth drying solutions. Prevents clothes from falling in windy conditions.',
      icon: Shield,
      href: 'cloth-hanger',
      featured: false,
      image: serviceImages.balcony.main, // Using balcony as placeholder
    },
    {
      id: 'invisible-grills',
      name: 'Invisible Grills',
      description: 'Modern safety grills with unobstructed views. Marine-grade stainless steel for windows and balconies.',
      icon: Shield,
      href: 'invisible-grills',
      featured: true,
      image: serviceImages.balcony.main, // Using balcony as placeholder
    },
    {
      id: 'construction',
      name: 'Construction Safety Nets',
      description: 'Industrial-grade OSHA-compliant safety nets for construction sites, high-rise buildings, and scaffolding.',
      icon: Shield,
      href: 'construction',
      featured: false,
      image: serviceImages.construction.main,
    },
    {
      id: 'sports',
      name: 'Sports Practice Nets',
      description: 'Professional sports netting for cricket, tennis, badminton, and multi-sport practice facilities.',
      icon: Shield,
      href: 'sports',
      featured: false,
      image: serviceImages.sports.main,
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'High-grade HDPE nets that are UV stabilized and weather-resistant',
    },
    {
      icon: Clock,
      title: 'Quick Installation',
      description: 'Professional installation within 24-48 hours of booking',
    },
    {
      icon: Shield,
      title: '5+ Years Warranty',
      description: 'Comprehensive warranty on all our safety net installations',
    },
    {
      icon: Users,
      title: '1000+ Happy Customers',
      description: 'Trusted by families and businesses across Bangalore',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      rating: 5,
      text: 'Excellent service! The team was professional and installed the balcony safety nets quickly. Very satisfied with the quality.',
      location: 'Whitefield, Bangalore',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      rating: 5,
      text: 'Great experience with RJR Safety Nets. The pigeon nets work perfectly and the installation was clean and efficient.',
      location: 'Koramangala, Bangalore',
    },
    {
      id: 3,
      name: 'Vijay Reddy',
      rating: 5,
      text: 'Highly recommend! Good quality nets at reasonable prices. The team is very responsive and professional.',
      location: 'HSR Layout, Bangalore',
    },
  ];

  const faqs = [
    {
      question: 'What types of safety nets do you provide?',
      answer: 'We provide balcony safety nets, pigeon safety nets, children safety nets, bird protection nets, window safety nets, and construction safety nets.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Most installations are completed within 2-4 hours depending on the size of the area. We ensure quick and professional service.',
    },
    {
      question: 'What is the warranty period?',
      answer: 'We offer a 5+ year warranty on all our safety net installations, covering material defects and workmanship.',
    },
    {
      question: 'Are the safety nets visible from outside?',
      answer: 'Our safety nets are designed to be transparent and minimal, maintaining the aesthetic appeal of your property while providing maximum protection.',
    },
    {
      question: 'Do you provide free inspection?',
      answer: 'Yes, we provide free site inspection and quotation. Our experts will assess your requirements and recommend the best solution.',
    },
    {
      question: 'What areas in Bangalore do you serve?',
      answer: 'We provide services across all areas of Bangalore including Whitefield, Koramangala, HSR Layout, Marathahalli, Indiranagar, and more.',
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSlider
        slides={[
          {
            image: serviceImages.balcony.main,
            title: 'Balcony Safety Nets in Bangalore',
            subtitle: 'Premium Protection for Your Balconies',
            description: 'Protect your family with high-quality, invisible balcony safety nets. Professional installation with 5+ years warranty across all Bangalore areas.',
          },
          {
            image: serviceImages.pigeon.main,
            title: 'Pigeon Safety Nets in Bangalore',
            subtitle: 'Keep Your Balconies Clean & Bird-Free',
            description: 'Effective and humane pigeon control solutions. Say goodbye to bird droppings and nesting with our premium anti-bird nets.',
          },
          {
            image: serviceImages.children.main,
            title: 'Children Safety Nets in Bangalore',
            subtitle: 'Complete Protection for Your Little Ones',
            description: 'Child-proof safety nets designed for balconies, windows, and stairs. Give your children the freedom to play safely at home.',
          },
          {
            image: serviceImages.monkey.main,
            title: 'Monkey Safety Nets in Bangalore',
            subtitle: 'Effective Protection from Monkey Menace',
            description: 'Specialized anti-monkey netting solutions to keep monkeys away while ensuring no harm to animals. Protect your property and food storage areas.',
          },
          {
            image: serviceImages.construction.main,
            title: 'Construction Safety Nets in Bangalore',
            subtitle: 'Industrial-Grade Safety for Construction Sites',
            description: 'OSHA-compliant construction safety nets for builders and contractors. Protect workers and comply with safety regulations.',
          },
          {
            image: serviceImages.sports.main,
            title: 'Sports Practice Nets in Bangalore',
            subtitle: 'Professional Netting for Sports Facilities',
            description: 'High-quality sports practice nets for cricket, tennis, badminton, and more. Create dedicated practice spaces for homes, schools, and clubs.',
          },
        ]}
        autoPlayInterval={5000}
        overlayOpacity={0.3}
      >
        {(currentSlide) => (
          <div className="max-w-3xl">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {currentSlide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                {currentSlide.subtitle}
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                {currentSlide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+917075051812"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
                >
                  Call Now: +91 7075051812
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-colors"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </HeroSlider>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Safety Net Products & Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium quality safety net products for residential, commercial, and industrial applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border border-gray-100 relative"
                  onClick={() => onNavigate(service.href)}
                >
                  {service.featured && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      POPULAR
                    </div>
                  )}
                  {service.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-blue-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(service.href);
                      }}
                      className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      View Product Details <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg">
              Explore our complete range of safety net products designed for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917075051812"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call for Product Inquiry: +91 7075051812
              </a>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">The trusted name in safety net solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Reviews</h2>
            <p className="text-xl text-gray-600">What our customers say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Home?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free inspection and quote today. Expert installation guaranteed.
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
