import { useEffect } from 'react';
import { Shield, CheckCircle, Heart, Home, Baby, Lock } from 'lucide-react';
import { buildServicePageSchemas } from '../utils/seo';
import { getPageSeo } from '../constants/pageSeo';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import LongFormArticle from '../components/LongFormArticle';
import { childrenLongFormParagraphs } from '../content/serviceLongFormArticles';
import LeadQuoteForm from '../components/LeadQuoteForm';
import SectionLeadCTA from '../components/SectionLeadCTA';
import FAQSection from '../components/FAQSection';
import ServiceContentBlock from '../components/ServiceContentBlock';
import { preloadHeroImage, services as serviceImages } from '../assets/images';
import HeroCarousel from '../components/HeroCarousel';
import ServiceBreadcrumbBar from '../components/ServiceBreadcrumbBar';
import ServiceInternalLinks from '../components/ServiceInternalLinks';

interface ChildrenSafetyNetsPageProps {
  onNavigate?: (page: string) => void;
}

const CHILDREN_FAQS = [
  {
    question: 'Why are children safety nets essential?',
    answer:
      'Children safety nets are crucial for preventing accidental falls from balconies, windows, and staircases. Young children are naturally curious and may not understand height dangers, making safety nets a vital protection measure in homes with balconies or elevated areas.',
  },
  {
    question: 'What mesh size is recommended for children safety nets?',
    answer:
      'We recommend a mesh size of 25mm or smaller for children safety nets. This prevents even small children from getting their heads or bodies through the net, ensuring maximum protection.',
  },
  {
    question: 'Are children safety nets strong enough?',
    answer:
      'Yes, our children safety nets are made from high-grade HDPE material with high tensile strength, capable of withstanding significant force and weight. They are specifically designed to handle the activities and movements of active children.',
  },
  {
    question: 'Will safety nets block sunlight or air?',
    answer:
      'No, our transparent safety nets allow 90% of light and air to pass through while providing complete protection. They are designed to be virtually invisible and do not obstruct your view or ventilation.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'Most children safety net installations are completed within 2-4 hours depending on the area size. Our professional team ensures precise fitting with no gaps.',
  },
];

export default function ChildrenSafetyNetsPage({ onNavigate }: ChildrenSafetyNetsPageProps) {
  useEffect(() => {
    const link = preloadHeroImage(serviceImages.children.main);
    return () => link.remove();
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

  return (
    <div className="min-h-screen">
      <SEOHead {...getPageSeo('children')} />
      <JsonLd
        data={buildServicePageSchemas({
          pageKey: 'children',
          name: 'Children Safety Nets Installation in Bangalore',
          description:
            'Child-safe balcony, window, and staircase net installation in Bangalore with fine mesh and secure anchoring.',
          serviceType: 'Children Safety Nets Installation',
          breadcrumbName: 'Children Safety Nets Bangalore',
          faqs: CHILDREN_FAQS,
        })}
      />
      <section className="relative text-white overflow-hidden bg-gray-100">
        {/* Hero Carousel */}
        <HeroCarousel
          images={[serviceImages.children.main, ...serviceImages.children.gallery]}
          altText="children safety nets Bangalore balcony protection"
          autoPlayInterval={5000}
          overlayOpacity={0.55}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Children Safety Nets in Bangalore | Balcony Protection
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 leading-relaxed">
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
                Call Now for Free Quote
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

      <ServiceBreadcrumbBar pageKey="children" onNavigate={onNavigate} />

      <ServiceContentBlock
        serviceName="Children Safety Nets"
        overview="RJR Safety Nets provides child-proof safety nets for balconies, windows, and staircases across Bengaluru. Our small-mesh nets (25mm or less) prevent accidental falls while allowing light and air. Non-toxic, high-tensile HDPE materials and professional installation give parents peace of mind. Trusted by families in apartments and villas, with 5+ years warranty."
        benefits={[
          'Child-proof mesh prevents even small children from passing through',
          'Non-toxic, UV-stabilized materials safe for kids',
          'Covers balconies, windows, staircases, and terraces',
          'Transparent design keeps your home bright and airy',
          '5+ years warranty; strong enough for active play',
        ]}
        pricingRange="Children safety nets in Bangalore typically range from ₹30–70 per sq ft, depending on area size and mesh specification. Balcony installations often cost ₹4,000–18,000. We offer free measurement and a clear, itemised quote before you commit."
        installationSteps={[
          'Free assessment: We measure areas and recommend mesh size for child safety.',
          'Quote & planning: You receive a detailed quote; we schedule at your convenience.',
          'Installation: Trained technicians install in 2–4 hours with zero gaps.',
          'Safety verification: We double-check tension and fittings before handover.',
        ]}
        faqs={[
          {
            question: 'How much do children safety nets cost in Bangalore?',
            answer: 'Cost varies by area. Child-proof balcony nets typically range from ₹4,000–18,000. We provide free site visit and a written quote. No hidden charges.',
          },
          {
            question: 'What mesh size is safe for children?',
            answer: 'We use 25mm or smaller mesh for children safety nets. This prevents heads and bodies from passing through while allowing airflow. Our team recommends the right size during the free inspection.',
          },
          {
            question: 'Are the materials safe for children?',
            answer: 'Yes. All our nets are non-toxic and child-safe, meeting international standards. They are UV-stabilized HDPE with no harmful chemicals or sharp edges.',
          },
        ]}
        variant="pink"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits of Children Safety Nets in Bangalore
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

      {/* Location-specific service sections - SEO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Children Safety Nets Across Bangalore – Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Child-proof safety net installation near you in North and North-West Bangalore
            </p>
          </div>
          <div className="space-y-10">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-pink-600">Children Safety Nets in Mathikere</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Child-proof balconies and windows for families near RWF, ISRO Layout, and Mathikere Lake. Our small-mesh nets prevent little ones from accidental falls. Non-toxic, strong, and virtually invisible.
              </p>
              <a href="tel:+917075051812" className="inline-flex items-center gap-2 bg-pink-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-pink-700 transition-colors">Call for Free Quote</a>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-pink-600">Children Safety Nets in Yeshwanthpur</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Child safety nets for apartments near Yeshwanthpur Junction and Metro. High-rise living requires extra protection—our nets secure balconies, windows, and staircases for complete peace of mind.
              </p>
              <a href="https://wa.me/917075051812" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#075E54] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#064e46] transition-colors">WhatsApp for Quote</a>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-pink-600">Children Safety Nets in Gokula Extension</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Child protection nets for homes in Gokula Extension and Vijayanagar. Let your kids play safely with our durable, UV-stabilized nets. Professional installation ensuring no gaps or weak points.
              </p>
              <a href="tel:+917075051812" className="inline-flex items-center gap-2 bg-pink-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-pink-700 transition-colors">Call for Free Quote</a>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-pink-600">Children Safety Nets in Hebbal</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Child safety net installation near Hebbal Flyover, Manyata Tech Park, and Bangalore University. Ideal for families in apartments and villas. 5+ years warranty, quick installation within 2–4 hours.
              </p>
              <a href="https://wa.me/917075051812" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#075E54] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#064e46] transition-colors">WhatsApp for Quote</a>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-pink-600">Children Safety Nets in Yelahanka</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Protect your children in Yelahanka Town and near Air Force Station. Our child-proof nets are designed for balconies, windows, and terraces. High-tensile strength, easy maintenance, peace of mind.
              </p>
              <a href="tel:+917075051812" className="inline-flex items-center gap-2 bg-pink-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-pink-700 transition-colors">Call for Free Quote</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <SectionLeadCTA />
          </div>
          <LeadQuoteForm id="children-lead" heading="WhatsApp — free quote" />
        </div>
      </section>

      <LongFormArticle
        title="Children safety nets in Bangalore — detailed guide"
        paragraphs={childrenLongFormParagraphs}
        id="children-longform"
      />

      <section className="bg-white py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionLeadCTA variant="blue" />
        </div>
      </section>

      <FAQSection faqs={CHILDREN_FAQS} />

      <ServiceInternalLinks pageKey="children" onNavigate={onNavigate} />

      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protect Your Children Today
          </h2>
          <p className="text-xl mb-8 text-white/95">
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
