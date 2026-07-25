import { useEffect } from 'react';
import { Shield, Clock, MapPin, Building2, Users, Star, CheckCircle, AlertTriangle } from 'lucide-react';
import { addSchemaMarkup } from '../../utils/seo';
import SEOHead from '../../components/SEOHead';
import FAQSection from '../../components/FAQSection';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';

interface WhitefieldBalconyPageProps {
  onNavigate: (page: string) => void;
}

export default function WhitefieldBalconyPage({ onNavigate }: WhitefieldBalconyPageProps) {
  useEffect(() => {
    // LocalBusiness Schema for Whitefield
    addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'RJR Safety Nets - Whitefield',
      image: 'https://www.rjrsafetynets.in/logo.png',
      '@id': 'https://www.rjrsafetynets.in/balcony-safety-nets-whitefield',
      url: 'https://www.rjrsafetynets.in/balcony-safety-nets-whitefield',
      telephone: '+917075051812',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Whitefield',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560066',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.9698,
        longitude: 77.7499
      },
      areaServed: {
        '@type': 'City',
        name: 'Whitefield, Bangalore'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '500'
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '20:00'
      }
    });
  }, []);

  const whiteFieldLandmarks = [
    'Prestige Shantiniketan',
    'Sobha Dream Acres',
    'Brigade Meadows',
    'Phoenix Marketcity',
    'VR Bengaluru',
    'ITPL (International Tech Park)',
    'Graphite India Road',
    'Whitefield Main Road',
    'Varthur Road',
    'Hope Farm Junction',
  ];

  const whyChooseWhitefield = [
    {
      icon: MapPin,
      title: 'Whitefield Specialists',
      description: 'We\'ve installed safety nets in 500+ Whitefield apartments. We know every complex from Prestige to Brigade. Your neighbors trust us.',
    },
    {
      icon: Clock,
      title: 'Same-Day Service in Whitefield',
      description: 'Call before 12 PM, get installed same day. Serving all areas: ITPL, Varthur, Graphite India Road, Hope Farm. No weekend wait.',
    },
    {
      icon: Shield,
      title: '5+ Year Warranty',
      description: 'Monsoons, UV rays, Whitefield weather - our nets handle it all. Medical-grade HDPE that lasts. Free repairs for 5+ years guaranteed.',
    },
    {
      icon: Users,
      title: '500+ Whitefield Families Protected',
      description: 'From Sobha residents to Prestige towers, Whitefield families choose RJR. Check our work at your neighbor\'s balcony!',
    },
  ];

  const testimonials = [
    {
      name: 'Arjun Mehta',
      apartment: 'Prestige Shantiniketan',
      rating: 5,
      text: 'Living on the 18th floor with a toddler was stressful. RJR installed our balcony nets in 3 hours. Same-day service! The nets are completely invisible. My daughter plays safely now. Best decision we made.',
    },
    {
      name: 'Lakshmi Iyer',
      apartment: 'Sobha Dream Acres',
      rating: 5,
      text: 'Called RJR on Monday morning, they came for inspection by 11 AM, installed by 4 PM. Professional team. The entire Sobha community is using their service. Highly recommend for Whitefield residents.',
    },
    {
      name: 'Karthik Reddy',
      apartment: 'Brigade Meadows',
      rating: 5,
      text: 'After seeing a child fall incident at another complex, I immediately called RJR. They understood the urgency. Installed within 24 hours. Sleep peacefully now. Worth every rupee.',
    },
  ];

  const faqs = [
    {
      question: 'Do you provide same-day installation in Whitefield?',
      answer: 'Yes! Call us before 12 PM and we can install the same day across all Whitefield areas including ITPL, Varthur Road, Graphite India Road, Hope Farm Junction, and surrounding localities. We keep our Whitefield team ready for urgent installations.',
    },
    {
      question: 'How much does balcony safety net installation cost in Whitefield?',
      answer: 'For a standard 100 sq ft balcony in Whitefield apartments (like Prestige, Sobha, Brigade), the cost ranges from ₹1,800 to ₹2,800 depending on net quality and height. We provide free on-site inspection and exact quotation. No hidden charges. Weekend installations available.',
    },
    {
      question: 'Which apartments in Whitefield have you worked in?',
      answer: 'We\'ve completed 500+ installations across Whitefield including: Prestige Shantiniketan, Sobha Dream Acres, Brigade Meadows, Purva Venezia, Gopalan Atlantis, Mantri Serenity, Salarpuria Sattva, and many independent villas near ITPL and Phoenix Marketcity areas.',
    },
    {
      question: 'Will the nets withstand Whitefield weather and monsoons?',
      answer: 'Absolutely. Whitefield gets heavy monsoons and strong UV exposure. We use weather-resistant HDPE nets specifically tested for Bangalore climate. UV stabilized, rust-proof fixtures, and monsoon-proof installation. 5+ year warranty covers all weather damage.',
    },
    {
      question: 'Are the nets visible from outside? Will they affect my apartment\'s look?',
      answer: 'Our premium invisible nets are nearly transparent. From 10 feet away, they\'re undetectable. Perfect for high-rise Whitefield apartments where aesthetics matter. Multiple Prestige and Sobha residents choose us specifically for invisible protection.',
    },
    {
      question: 'How long does installation take in a Whitefield apartment?',
      answer: 'Standard 2-3 balcony installation in Whitefield high-rises takes 2-4 hours. We work cleanly and efficiently. No drilling noise after 8 PM. Apartment society permissions handled by us. Your balcony is ready to use immediately after installation.',
    },
    {
      question: 'Do you have permits to work in Whitefield gated communities?',
      answer: 'Yes, we have existing permissions and relationships with major Whitefield apartment managements. We carry proper vendor IDs, insurance certificates, and follow all society guidelines. Prestige, Sobha, Brigade - we\'re approved vendors.',
    },
    {
      question: 'What warranty do you provide for Whitefield installations?',
      answer: '5+ years comprehensive warranty covering material defects, installation issues, weather damage, and wear & tear. For Whitefield customers, we provide annual free inspection. Call us anytime for repairs - we reach within 24 hours.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        robots="noindex, follow"
        title="Balcony Safety Nets in Whitefield, Bangalore | Same Day Installation - RJR Safety Nets"
        description="Professional balcony safety nets installation in Whitefield. Trusted by 500+ apartments including Prestige, Sobha, Brigade. 5+ year warranty. Call +91 7075051812 for same-day service."
        keywords="balcony safety nets Whitefield, safety nets in Whitefield, balcony nets Whitefield Bangalore, safety net installation near me Whitefield, child safety nets Whitefield, balcony protection Whitefield"
        canonical="https://www.rjrsafetynets.in/balcony-safety-nets-whitefield"
        ogTitle="Balcony Safety Nets in Whitefield, Bangalore | RJR Safety Nets"
        ogDescription="Professional balcony safety nets installation in Whitefield. Same-day service. 5+ year warranty. Call +91 7075051812."
        ogType="website"
        author="RJR Safety Nets"
      />
      {/* Floating WhatsApp */}
      <FloatingWhatsApp phoneNumber="917075051812" message="Hi! I need balcony safety nets in Whitefield, Bangalore." />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <MapPin size={16} />
              Serving Whitefield in 24 Hours
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Balcony Safety Nets in Whitefield, Bangalore
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Trusted by 500+ Whitefield Apartments • Same-Day Installation • 5+ Year Warranty
            </p>
            <p className="text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              From Prestige Shantiniketan to Sobha Dream Acres, Brigade Meadows to ITPL area - Whitefield families trust RJR Safety Nets for invisible balcony protection. Professional installation, transparent pricing, zero waiting period.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917075051812"
                className="bg-white text-blue-600 px-10 py-5 rounded-lg text-xl hover:bg-gray-100 transition-colors font-bold shadow-2xl"
              >
                ☎️ Call: +91 7075051812
              </a>
              <a
                href="https://wa.me/917075051812?text=Hi!%20I%20need%20balcony%20safety%20nets%20in%20Whitefield"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#075E54] text-white px-10 py-5 rounded-lg text-xl hover:bg-[#064e46] transition-colors font-bold shadow-2xl"
              >
                💬 WhatsApp Now
              </a>
            </div>
            <p className="text-sm text-yellow-300 mt-6 font-bold animate-pulse">
              ⚡ Same-day installation available - Call before 12 PM
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-center text-sm">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={18} />
              <span className="font-semibold">4.8★ Rated (500+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-blue-600" size={18} />
              <span className="font-semibold">5+ Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600" size={18} />
              <span className="font-semibold">500+ Whitefield Installations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - SEO Rich */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Why Whitefield Families Need Balcony Safety Nets Now
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whitefield has transformed into Bangalore's premier residential hub, with towering apartments like <strong>Prestige Shantiniketan</strong>, <strong>Sobha Dream Acres</strong>, and <strong>Brigade Meadows</strong> redefining luxury living. However, this vertical growth brings serious safety challenges. Living on the 15th, 20th, or 25th floor with children, pets, or elderly family members means <strong>balcony safety nets in Whitefield</strong> aren't optional—they're essential.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Every month, Bangalore newspapers report tragic incidents of children falling from high-rise balconies. Whitefield, with its concentration of young families working in nearby tech parks like <strong>ITPL (International Tech Park)</strong>, <strong>Prestige Tech Park</strong>, and <strong>RMZ Ecospace</strong>, has seen exponential apartment growth. These modern apartments have aesthetic glass railings and wide balcony spaces—beautiful to look at, but dangerous for curious toddlers and adventurous children.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-10">
              The Whitefield Safety Challenge: High-Rise Living Reality
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Whitefield isn't just another Bangalore locality—it's a unique ecosystem. With tech professionals working long hours, children spend considerable time on balconies. The wide-open spaces of apartments along <strong>Whitefield Main Road</strong>, <strong>Varthur Road</strong>, and <strong>ITPL Main Road</strong> offer stunning views but pose serious risks:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>Railing gaps in modern apartments:</strong> Many Whitefield luxury apartments have horizontal railings with 6-8 inch gaps—enough for a child to slip through.</li>
              <li className="mb-2"><strong>Glass balconies:</strong> Beautiful but climbable. Children use furniture to climb and peer over.</li>
              <li className="mb-2"><strong>Double-height balconies:</strong> Premium apartments near Phoenix Marketcity and VR Bengaluru have extra-tall balconies, increasing fall risk.</li>
              <li className="mb-2"><strong>Strong winds:</strong> Whitefield's open terrain means strong gusts, especially during monsoons, making open balconies dangerous for lightweight items and children.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              Professional <strong>safety nets in Whitefield</strong> provide invisible protection without compromising your apartment's premium look. Our medical-grade HDPE nets are UV-stabilized for Bangalore's harsh sun and monsoon-tested for Whitefield's heavy seasonal rains.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-10">
              RJR Safety Nets: Whitefield's Most Trusted Balcony Safety Partner
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Since 2015, we've been Whitefield's go-to <strong>safety net installation</strong> experts. We've protected over 500 families across every major apartment complex in the area. When you call RJR Safety Nets, you're not getting a generic service—you're getting Whitefield specialists who understand:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>Whitefield apartment layouts:</strong> We know Prestige's balcony designs, Sobha's railing systems, Brigade's specifications.</li>
              <li className="mb-2"><strong>Society permissions:</strong> We have existing approvals and vendor registrations with major Whitefield apartment managements.</li>
              <li className="mb-2"><strong>Local logistics:</strong> Our team is based near Whitefield, enabling same-day service from ITPL to Hope Farm Junction.</li>
              <li className="mb-2"><strong>Whitefield weather patterns:</strong> We use installation techniques proven effective during Bangalore's monsoons and summer heat.</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-10">
              Our Balcony Safety Net Installation Process in Whitefield
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We've perfected a streamlined, society-friendly installation process specifically for Whitefield's high-rise apartments:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Step 1: Free On-Site Inspection (Within 2 Hours)</h3>
              <p className="text-gray-700 mb-4">
                Call us before 12 PM, and our Whitefield team reaches your apartment for a free inspection. We measure your balcony dimensions, assess railing type, check for drilling requirements, and provide an exact quote—all within 30 minutes. No obligation, no pressure.
              </p>

              <h3 className="text-xl font-bold mb-4 text-gray-900">Step 2: Society Permission (We Handle It)</h3>
              <p className="text-gray-700 mb-4">
                We coordinate with your apartment management, provide necessary documents, and ensure compliance with society guidelines. For major Whitefield complexes, we're already approved vendors—no delay.
              </p>

              <h3 className="text-xl font-bold mb-4 text-gray-900">Step 3: Same-Day or Next-Day Installation</h3>
              <p className="text-gray-700 mb-4">
                Our professional installers arrive with all equipment, complete installation in 2-4 hours (depending on balcony count), and clean up entirely. We follow Whitefield apartment noise guidelines—no drilling after 8 PM or before 8 AM on weekends.
              </p>

              <h3 className="text-xl font-bold mb-4 text-gray-900">Step 4: Quality Check & Warranty Documentation</h3>
              <p className="text-gray-700 mb-4">
                Before leaving, we conduct a thorough tension test, provide warranty documentation, and explain maintenance (basically none needed). Your balcony is immediately safe and ready to use.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-10">
              Areas We Cover in Whitefield, Bangalore
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>balcony safety nets in Whitefield</strong> service covers every corner of the locality:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {whiteFieldLandmarks.map((landmark, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={18} />
                  <span className="text-sm font-semibold text-gray-700">{landmark}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you're in a premium apartment near Phoenix Marketcity, a villa on Graphite India Road, or a high-rise near ITPL, we provide <strong>safety net installation near me</strong> with same-day availability. Our Whitefield-based team knows every lane, every apartment complex, and every landmark.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-10">
              Why Whitefield Parents Choose Invisible Safety Nets
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Traditional metal grills ruin your apartment's aesthetics and block natural light. Whitefield's premium apartments are designed with floor-to-ceiling windows and open balconies for breathtaking views. Why compromise?
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our <strong>invisible balcony safety nets</strong> provide complete protection while maintaining your apartment's luxury appeal:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>Transparent from 10 feet away:</strong> Guests won't even notice them. Your view remains unobstructed.</li>
              <li className="mb-2"><strong>UV-stabilized material:</strong> Doesn't yellow or degrade under Bangalore's harsh sun.</li>
              <li className="mb-2"><strong>High tensile strength:</strong> Supports 200+ kg weight—strong enough to prevent any fall.</li>
              <li className="mb-2"><strong>Weather-resistant:</strong> Whitefield monsoons and summer heat won't affect performance.</li>
              <li className="mb-2"><strong>Zero maintenance:</strong> Install once, forget for 5+ years. No painting, no repairs.</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-10">
              Real Stories: Whitefield Families We've Protected
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Don't take our word for it. Ask your neighbors at Prestige Shantiniketan, Sobha Dream Acres, or Brigade Meadows. Chances are, they've already installed our safety nets. Here's what Whitefield residents say:
            </p>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6 mb-6">
              <p className="text-gray-800 italic mb-3">
                "I was terrified every time my 2-year-old went near the balcony. After seeing RJR's work at my neighbor's flat in the same Prestige tower, I called immediately. Same-day installation, completely invisible nets, and now I can breathe easy. Worth every rupee."
              </p>
              <p className="font-bold text-gray-900">— Priya Sharma, Prestige Shantiniketan, Tower 5</p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-10">
              Transparent Pricing for Whitefield Apartments
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Unlike competitors who quote one price and charge another, we believe in complete transparency. Here's what you can expect for <strong>balcony safety nets in Whitefield</strong>:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>Standard 100 sq ft balcony:</strong> ₹1,800 - ₹2,200 (premium invisible nets)</li>
              <li className="mb-2"><strong>Large 150-200 sq ft balcony:</strong> ₹2,800 - ₹3,500</li>
              <li className="mb-2"><strong>Multiple balconies:</strong> Discounted package pricing</li>
              <li className="mb-2"><strong>Entire apartment bulk orders:</strong> Special rates for 10+ flats</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              All prices include installation, materials, fixtures, 5+ year warranty, and annual free inspection. No hidden charges. No surprise bills. What we quote is what you pay.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-10">
              Safety Nets for Every Whitefield Need
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While balcony safety is our specialty, Whitefield residents also trust us for:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">
                <strong>
                  <button
                    onClick={() => onNavigate('children')}
                    className="text-blue-600 hover:underline"
                  >
                    Children Safety Nets
                  </button>
                </strong> - Extra-strong nets specifically for staircase protection and window safety in Whitefield villas and duplex apartments.
              </li>
              <li className="mb-2">
                <strong>
                  <button
                    onClick={() => onNavigate('pigeon')}
                    className="text-blue-600 hover:underline"
                  >
                    Pigeon Safety Nets
                  </button>
                </strong> - Essential for Whitefield apartments facing Victoria Layout and rural areas where pigeon infestation is high.
              </li>
              <li className="mb-2">
                <strong>
                  <button
                    onClick={() => onNavigate('monkey')}
                    className="text-blue-600 hover:underline"
                  >
                    Monkey Safety Nets
                  </button>
                </strong> - Critical for ground floor and low-rise apartments near ITPL, where monkey menace is a daily problem.
              </li>
              <li className="mb-2">
                <strong>
                  <button
                    onClick={() => onNavigate('invisible-grills')}
                    className="text-blue-600 hover:underline"
                  >
                    Invisible Grills
                  </button>
                </strong> - For those who prefer steel cable systems over nets, available for Whitefield luxury apartments.
              </li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6 mt-10">
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Don't Wait for a Tragedy</h3>
                  <p className="text-gray-700 mb-4">
                    Every week, we get calls from Whitefield parents who say "I wish I had installed these nets earlier." The fear of "what if" haunts every parent of a toddler in a high-rise apartment. That split second when your child runs toward the balcony while you're in the kitchen... Don't risk it.
                  </p>
                  <p className="text-gray-700 font-semibold">
                    Professional balcony safety nets cost ₹2,000-3,000. Your child's safety? Priceless.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-10">
              Why RJR Safety Nets for Whitefield?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You could call any safety net installer in Bangalore. But only RJR offers Whitefield-specific advantages:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>500+ Whitefield installations completed:</strong> We're not beginners. We're specialists.</li>
              <li className="mb-2"><strong>Same-day service:</strong> Call before noon, installed by evening. No 3-day wait.</li>
              <li className="mb-2"><strong>Approved by major apartment managements:</strong> Prestige, Sobha, Brigade know us and trust us.</li>
              <li className="mb-2"><strong>5+ year comprehensive warranty:</strong> Not just for defects—covers everything including weather damage.</li>
              <li className="mb-2"><strong>Local Whitefield team:</strong> We're 10-15 minutes away, not coming from across Bangalore.</li>
              <li className="mb-2"><strong>Transparent pricing:</strong> What we quote on phone is what you pay. Period.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Whitefield Trusts RJR Safety Nets</h2>
            <p className="text-xl text-gray-600">Not just another safety net company. We're Whitefield specialists.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseWhitefield.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow border-2 border-blue-100"
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

      {/* CTA Section - Urgency */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚨 Serving Whitefield in 24 Hours - Call Now!
          </h2>
          <p className="text-xl mb-2 text-orange-100">
            <strong>FREE Inspection • Same-Day Installation • 5+ Year Warranty</strong>
          </p>
          <p className="text-lg mb-8 text-orange-100">
            From Prestige to Sobha, ITPL to Phoenix Marketcity - we cover all of Whitefield. Your family's safety can't wait.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917075051812"
              className="bg-white text-red-600 px-10 py-5 rounded-lg text-xl hover:bg-gray-100 transition-colors font-bold shadow-2xl"
            >
              ☎️ CALL NOW: +91 7075051812
            </a>
            <a
              href="https://wa.me/917075051812?text=Hi!%20I%20need%20balcony%20safety%20nets%20in%20Whitefield"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#075E54] text-white px-10 py-5 rounded-lg text-xl hover:bg-[#064e46] transition-colors font-bold shadow-2xl"
            >
              💬 WhatsApp Us
            </a>
          </div>
          <p className="text-sm text-yellow-300 mt-6 font-bold animate-pulse">
            ⏰ Limited slots for today - Book before 12 PM for same-day installation!
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Whitefield Residents, Real Results</h2>
            <p className="text-xl text-gray-600">Ask your neighbors - they've probably used our service!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-lg border-2 border-blue-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic text-sm">
                  "{testimonial.text}"
                </p>
                <div className="border-t-2 border-blue-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-blue-600 font-semibold flex items-center gap-1">
                    <Building2 size={14} />
                    {testimonial.apartment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protect Your Whitefield Home Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 500+ Whitefield families who sleep peacefully. Same-day installation available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917075051812"
              className="bg-white text-blue-600 px-10 py-5 rounded-lg text-xl hover:bg-gray-100 transition-colors font-bold shadow-2xl"
            >
              ☎️ Call: +91 7075051812
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#075E54] text-white px-10 py-5 rounded-lg text-xl hover:bg-[#064e46] transition-colors font-bold shadow-2xl"
            >
              📝 Book Free Inspection
            </button>
          </div>
          <p className="text-sm text-blue-100 mt-6">
            ✓ Free Inspection ✓ Transparent Pricing ✓ Same-Day Service ✓ 5+ Year Warranty
          </p>
        </div>
      </section>
    </div>
  );
}
