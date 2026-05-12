import { useEffect, type MouseEvent } from 'react';
import {
  Baby,
  Bird,
  CalendarClock,
  CheckCircle,
  Dumbbell,
  Eye,
  HardHat,
  MapPin,
  MessageCircle,
  PawPrint,
  Phone,
  Shield,
  Shirt,
  Trees,
} from 'lucide-react';
import { updatePageMeta, addSchemaMarkup, generateFAQSchema } from '../utils/seo';
import { PAGE_TO_PATH, type PageKey } from '../constants/routes';
import HeroSlider from '../components/HeroSlider';
import OptimizedImage from '../components/OptimizedImage';
import TrustReviewsSection from '../components/TrustReviewsSection';
import { services as serviceImages, sliderC as sliderCImages } from '../assets/images';
import {
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  PHONE_PRIMARY_DISPLAY,
  PHONE_TEL,
  WARRANTY_YEARS,
  WHATSAPP_URL,
} from '../constants/nap';

import FAQSection from '../components/FAQSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HOME_FAQS = [
  {
    question: 'Do you install safety nets across Bangalore and Bengaluru?',
    answer:
      'Yes. RJR Safety Nets provides inspection and installation across Bengaluru, including Whitefield, HSR Layout, Electronic City, JP Nagar, Marathahalli, Indiranagar, Hebbal, Yelahanka, and many other neighborhoods. Contact us with your pin code to confirm the next available slot.',
  },
  {
    question: 'What is the difference between balcony safety nets and pigeon safety nets?',
    answer:
      'Both often use durable mesh, but the goal differs: balcony nets prioritize fall protection for people and pets, while pigeon nets focus on humane bird exclusion and hygiene. Many balconies benefit from a solution that addresses both risks—our site visit helps you choose the correct mesh and coverage.',
  },
  {
    question: 'Do you install invisible grills in Bangalore?',
    answer:
      'Yes. We install stainless steel invisible grills for windows, balconies, terraces, and staircases. Invisible grills are a strong option when you want safety with minimal visual obstruction and maximum ventilation.',
  },
  {
    question: 'How do I book a free inspection?',
    answer:
      'Call or WhatsApp our team, or use the contact page to request a visit. We typically schedule a convenient time, measure your openings, recommend the right product, and share a transparent quote.',
  },
  {
    question: 'What warranty do you provide?',
    answer:
      'Safety net installations are backed by a 5+ years warranty on standard terms. Warranty scope is explained clearly at quotation so you know what is covered for materials and workmanship.',
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  useEffect(() => {
    updatePageMeta({
      title: 'RJR Safety Nets | Balcony, Pigeon & Invisible Grill in Bangalore',
      description:
        'RJR Safety Nets installs balcony safety nets, pigeon safety nets, invisible grills, and children safety nets in Bangalore (Bengaluru). Free inspection, neat installation, 5+ years warranty. Call 7075051812.',
      keywords:
        'RJR Safety Nets, safety nets in Bangalore, balcony safety nets Bangalore, pigeon safety nets Bangalore, invisible grill Bangalore, children safety nets Bangalore, safety nets installation Bangalore, safety nets near me',
      canonical: 'https://www.rjrsafetynets.in/',
      ogTitle: 'RJR Safety Nets | Balcony, Pigeon & Invisible Grill in Bangalore',
      ogDescription:
        'Trusted safety nets and invisible grill installation in Bengaluru. Free inspection, transparent quotes, professional fitting.',
      ogType: 'website',
      author: 'RJR Safety Nets',
    });

    addSchemaMarkup(generateFAQSchema(HOME_FAQS));

    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = sliderCImages.balcony;
    preloadLink.setAttribute('fetchpriority', 'high');
    document.head.appendChild(preloadLink);
  }, []);

  const handleInternalLink = (e: MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  const primaryH1 = 'Balcony, Pigeon & Children Safety Nets in Bangalore';

  const allServiceCards: Array<{
    key: PageKey;
    icon: typeof Shield;
    heading: string;
    image: string;
    alt: string;
    description: string;
  }> = [
    {
      key: 'balcony',
      icon: Shield,
      heading: 'Balcony Safety Nets in Bangalore',
      image: serviceImages.balcony.main,
      alt: 'Balcony safety nets in Bangalore installation for apartments',
      description:
        'Invisible-looking protection for high-rise balconies. Helps prevent falls and keeps the balcony usable without blocking the view.',
    },
    {
      key: 'pigeon',
      icon: Bird,
      heading: 'Pigeon Safety Nets in Bangalore',
      image: serviceImages.pigeon.main,
      alt: 'Pigeon safety nets in Bangalore to keep balconies bird-free',
      description:
        'Humane anti-bird netting to stop nesting and droppings. Keeps balconies cleaner while maintaining ventilation and light.',
    },
    {
      key: 'children',
      icon: Baby,
      heading: 'Children Safety Nets in Bangalore',
      image: serviceImages.children.main,
      alt: 'Children safety nets in Bangalore for child protection on balconies and windows',
      description:
        'Child-safe netting for balconies and windows with secure fittings. Built for daily family life with durable materials and neat finishing.',
    },
    {
      key: 'monkey',
      icon: PawPrint,
      heading: 'Monkey Safety Nets in Bangalore',
      image: serviceImages.monkey.main,
      alt: 'Monkey safety nets Bangalore installation for stronger barriers',
      description:
        'Stronger barriers for monkey-prone zones — practical surveys and durable installs for villas and apartments near green belts.',
    },
    {
      key: 'coconut',
      icon: Trees,
      heading: 'Coconut Tree Safety Nets in Bangalore',
      image: serviceImages.coconutTree.main,
      alt: 'Coconut tree safety nets Bangalore over driveways and paths',
      description:
        'Reduce risk from falling coconuts over driveways, paths, and play areas with properly tensioned overhead netting.',
    },
    {
      key: 'cloth-hanger',
      icon: Shirt,
      heading: 'Cloth Hanger Nets in Bangalore',
      image: serviceImages.clothHanger.main,
      alt: 'Balcony cloth drying and cloth hanger nets in Bangalore',
      description:
        'Safe balcony cloth drying — keep laundry secure in wind while maximising sun and airflow on your drying area.',
    },
    {
      key: 'invisible-grills',
      icon: Eye,
      heading: 'Invisible Grills in Bangalore',
      image: serviceImages.invisibleGrills.main,
      alt: 'Invisible grills Bangalore for windows and balconies',
      description:
        'Sleek stainless cable grills for windows and balconies — safety with minimal visual impact and good ventilation.',
    },
    {
      key: 'construction',
      icon: HardHat,
      heading: 'Construction Safety Nets in Bangalore',
      image: serviceImages.construction.main,
      alt: 'Construction safety nets Bangalore for sites and buildings',
      description:
        'Site and industrial netting for fall and debris risk — scoped to your project with professional installation.',
    },
    {
      key: 'sports',
      icon: Dumbbell,
      heading: 'Sports Practice Nets in Bangalore',
      image: serviceImages.sports.main,
      alt: 'Sports practice nets Bangalore cricket and multi-sport',
      description:
        'Cricket and multi-sport practice nets for homes, academies, and terraces — durable mesh and clean setup.',
    },
  ];

  const renderCTAButtons = () => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <a
        href={PHONE_TEL}
        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        <Phone size={20} aria-hidden="true" />
        Call Now
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
      >
        <MessageCircle size={20} aria-hidden="true" />
        WhatsApp Now
      </a>
      <a
        href="/contact"
        onClick={(e) => handleInternalLink(e, 'contact')}
        className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 border border-blue-200 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
      >
        <CalendarClock size={20} aria-hidden="true" />
        Book Free Inspection
      </a>
    </div>
  );

  const serviceAreaHighlights = [
    'Whitefield',
    'HSR Layout',
    'Electronic City',
    'Marathahalli',
    'JP Nagar',
    'Indiranagar',
    'Bangalore',
  ];

  return (
    <div>
      <HeroSlider
        slides={[
          {
            image: sliderCImages.balcony,
            title: primaryH1,
            subtitle: 'Professional Installation • Free Inspection • 5 Years Warranty',
            description:
              'Get the right net for your balcony, pigeon problem, or child protection—installed neatly by trained experts across Bengaluru.',
            alt: 'Safety nets in Bangalore for balcony, pigeon and child protection',
          },
          {
            image: sliderCImages.pigeon,
            title: primaryH1,
            subtitle: 'Humane Bird Control • Clean Balconies',
            description:
              'Stop nesting and droppings with durable anti-bird netting installed without blocking airflow and light.',
            alt: 'Pigeon safety nets Bangalore installation for bird control',
          },
          {
            image: sliderCImages.children,
            title: primaryH1,
            subtitle: 'Child-Safe Netting • Secure Fittings',
            description:
              'Add a safer layer for balconies and windows with strong netting and clean finishing.',
            alt: 'Children safety nets Bangalore installation for balconies and windows',
          },
        ]}
        autoPlayInterval={6000}
        overlayOpacity={0.75}
      >
        {() => (
          <div className="max-w-3xl">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{primaryH1}</h1>
              <p className="text-lg md:text-xl mb-8 text-blue-50 leading-relaxed">
                Professional safety net installation in Bangalore for balconies, pigeon control and child protection.
                Get a free inspection and a clear quote.
              </p>
              {renderCTAButtons()}
              <p className="mt-4 text-sm text-blue-100">
                Call <span className="font-semibold">{PHONE_PRIMARY_DISPLAY}</span> for quick assistance.
              </p>
            </div>
          </div>
        )}
      </HeroSlider>

      <section className="py-14 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Safety Net Services
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
              Balcony, bird, child, monkey, coconut, construction, sports, cloth drying, and invisible grills — installed
              across Bengaluru.
            </p>
          </header>

          <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-4 mb-10">
            <p>
              RJR Safety Nets provides <strong>safety nets Bangalore</strong> homeowners trust for everyday protection.
              Whether you need support for a high-rise balcony, a clean bird-free balcony, or added child protection on
              windows, we help you select the right mesh and fitment for your space. Explore our dedicated pages for{' '}
              <a
                href={PAGE_TO_PATH.balcony}
                onClick={(e) => handleInternalLink(e, 'balcony')}
                className="text-blue-700 font-semibold hover:underline"
              >
                Balcony Safety Nets
              </a>
              ,{' '}
              <a
                href={PAGE_TO_PATH.pigeon}
                onClick={(e) => handleInternalLink(e, 'pigeon')}
                className="text-blue-700 font-semibold hover:underline"
              >
                Pigeon Safety Nets
              </a>
              ,{' '}
              <a
                href={PAGE_TO_PATH['invisible-grills']}
                onClick={(e) => handleInternalLink(e, 'invisible-grills')}
                className="text-blue-700 font-semibold hover:underline"
              >
                Invisible Grill Bangalore
              </a>
              ,{' '}
              <a
                href={PAGE_TO_PATH.children}
                onClick={(e) => handleInternalLink(e, 'children')}
                className="text-blue-700 font-semibold hover:underline"
              >
                Children Safety Nets
              </a>
              , and our{' '}
              <a href={PAGE_TO_PATH.about} onClick={(e) => handleInternalLink(e, 'about')} className="text-blue-700 font-semibold hover:underline">
                About
              </a>{' '}
              page to learn how we work.
            </p>
            <p>
              Customers searching specifically for <strong>balcony safety nets Bangalore</strong>,{' '}
              <strong>pigeon safety nets Bangalore</strong>, or <strong>children safety nets Bangalore</strong> typically want a
              solution that is strong, neat, and suitable for apartments. Our focus is to deliver “Safety Nets in
              Bangalore – Balcony, Pigeon &amp; Child Protection” with correct material selection, safe anchoring and a clean
              finish.
            </p>
            <p>
              Each solution is installed with attention to safety, neat finishing and long-term durability. If you are
              not sure which option is best, our team can guide you based on your balcony design, bird activity and family
              requirements—then help you book a site visit via{' '}
              <a
                href="/contact"
                onClick={(e) => handleInternalLink(e, 'contact')}
                className="text-blue-700 font-semibold hover:underline"
              >
                Contact
              </a>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServiceCards.map((service) => {
              const Icon = service.icon;
              const href = PAGE_TO_PATH[service.key];
              return (
                <article key={service.key} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="relative h-48">
                    <OptimizedImage
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      width={1600}
                      height={900}
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Icon className="text-blue-600" size={22} aria-hidden="true" />
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">RJR</span> • Bengaluru
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.heading}</h3>
                    <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
                    <a
                      href={href}
                      onClick={(e) => handleInternalLink(e, service.key)}
                      className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              View services hub
            </button>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50" aria-labelledby="why-choose-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose RJR Safety Nets?
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
              Neat installation, clear communication and dependable materials—trusted by Bengaluru customers.
            </p>
          </header>

          <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-4 mb-10">
            <p>
              When you choose RJR, you get a service-first team that focuses on safety and long-term reliability—not just
              quick fitting. From the first call to final handover, we aim for fast response, clear pricing and a neat
              finish that blends into your balcony or window setup.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Reasons to choose RJR Safety Nets">
              <li className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900">Warranty</p>
                <p className="text-gray-700">{WARRANTY_YEARS} years warranty and dependable fitment.</p>
              </li>
              <li className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900">Fast installation</p>
                <p className="text-gray-700">Quick scheduling for most Bangalore locations.</p>
              </li>
              <li className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900">Affordable pricing</p>
                <p className="text-gray-700">Transparent quotes based on real measurements.</p>
              </li>
              <li className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900">Expert team</p>
                <p className="text-gray-700">Trained installers for apartments and high-rise work.</p>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { text: `${WARRANTY_YEARS} years warranty on installations` },
              { text: 'Fast installation scheduling for most areas' },
              { text: 'Affordable pricing with transparent quotes' },
              { text: 'Expert team for apartments and high-rise work' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-0.5" size={20} aria-hidden="true" />
                  <p className="text-gray-800 font-medium leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white" aria-labelledby="inspection-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <h2 id="inspection-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Safety Net Installation in Bangalore
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
              Professional net selection, secure fitment and clean finishing for balcony, pigeon and child protection.
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Looking for <strong>Safety Nets in Bangalore</strong> that are installed safely and neatly? RJR specializes in
                end-to-end <strong>safety net installation</strong> for residential and commercial properties. We help you choose
                the right net grade, mesh size and fixing method based on your balcony design, bird activity and family
                needs—especially for balcony, pigeon &amp; child protection.
              </p>
              <p>
                Quality is not just the net—it’s the installation. Our experienced team uses secure anchors, proper
                tensioning and careful edge finishing to reduce gaps and improve long-term performance in Bangalore’s sun,
                rain and wind. We also keep the work area clean and aim for minimal disruption to your daily routine.
              </p>
              <p>
                We cover major neighborhoods across the city and can schedule a <strong>free inspection</strong> to measure your
                space and recommend the best option for your requirement. Installations are backed by{' '}
                <strong>5 years warranty</strong> (standard terms apply), so you get peace of mind along with reliable protection.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6" aria-label="Inspection and installation steps">
              <li className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <p className="text-sm font-semibold text-blue-700">Step 1</p>
                <p className="mt-1 font-bold text-gray-900">Free Site Visit</p>
                <p className="mt-2 text-gray-600">We inspect and measure, then recommend the correct net and mesh.</p>
              </li>
              <li className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <p className="text-sm font-semibold text-blue-700">Step 2</p>
                <p className="mt-1 font-bold text-gray-900">Clear Quote</p>
                <p className="mt-2 text-gray-600">Transparent pricing based on the actual site requirement.</p>
              </li>
              <li className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <p className="text-sm font-semibold text-blue-700">Step 3</p>
                <p className="mt-1 font-bold text-gray-900">Neat Installation</p>
                <p className="mt-2 text-gray-600">Secure fittings, tension checks, and gap checks before handover.</p>
              </li>
            </ul>

            <div className="mt-8">{renderCTAButtons()}</div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <h2 id="areas-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Service Areas in Bangalore
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
              We provide on-site inspection and installation across Bengaluru—including popular neighborhoods and
              apartment zones.
            </p>
          </header>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600 mt-1" size={22} aria-hidden="true" />
              <div>
                <p className="text-gray-800 font-semibold">Local areas we frequently serve</p>
                <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700" aria-label="Service areas list">
                  {serviceAreaHighlights.map((area) => (
                    <li key={area} className="bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  If you don’t see your location listed, contact us—our team covers most parts of Bangalore based on
                  schedule availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white" aria-labelledby="home-faq-title">
        <h2 id="home-faq-title" className="sr-only">
          Frequently asked questions
        </h2>
        <FAQSection faqs={HOME_FAQS} />
      </section>

      <section className="py-14 bg-white" aria-labelledby="reviews-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Testimonials
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
              Rated by Bengaluru customers for responsiveness, neat work and long-lasting net quality.
            </p>
          </header>
        </div>

        <TrustReviewsSection
          rating={GOOGLE_RATING}
          customerCount={GOOGLE_REVIEW_COUNT}
          testimonial={{
            name: 'Ramesh Kumar',
            location: 'Whitefield, Bangalore',
            rating: 5,
            text: 'Excellent service! The team was professional and installed the balcony safety nets quickly. Very satisfied with the quality.',
          }}
          variant="blue"
        />
      </section>

      <section className="py-14 bg-gray-50" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-gray-900">
              Contact Us
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
              Call or WhatsApp for quick assistance, or book a free inspection through the contact page.
            </p>
          </header>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-900 font-semibold">Quick links</p>
                <nav className="mt-3 space-y-2" aria-label="Internal links">
                  <a href={PAGE_TO_PATH.about} onClick={(e) => handleInternalLink(e, 'about')} className="block text-blue-700 hover:underline">
                    About RJR Safety Nets
                  </a>
                  <a
                    href={PAGE_TO_PATH.balcony}
                    onClick={(e) => handleInternalLink(e, 'balcony')}
                    className="block text-blue-700 hover:underline"
                  >
                    Balcony safety nets Bangalore
                  </a>
                  <a
                    href={PAGE_TO_PATH['invisible-grills']}
                    onClick={(e) => handleInternalLink(e, 'invisible-grills')}
                    className="block text-blue-700 hover:underline"
                  >
                    Invisible grill Bangalore
                  </a>
                  <a
                    href={PAGE_TO_PATH.pigeon}
                    onClick={(e) => handleInternalLink(e, 'pigeon')}
                    className="block text-blue-700 hover:underline"
                  >
                    Pigeon safety nets Bangalore
                  </a>
                  <a href={PAGE_TO_PATH.contact} onClick={(e) => handleInternalLink(e, 'contact')} className="block text-blue-700 hover:underline">
                    Contact &amp; book inspection
                  </a>
                </nav>
                <p className="mt-6 text-gray-700 leading-relaxed">
                  Need help choosing between balcony nets, pigeon nets or child protection nets? Share your location and
                  requirement—we’ll guide you with the right option.
                </p>
              </div>

              <address className="not-italic">
                <p className="text-gray-900 font-semibold">Call us</p>
                <a href={PHONE_TEL} className="mt-2 inline-block text-blue-700 font-semibold hover:underline">
                  {PHONE_PRIMARY_DISPLAY}
                </a>
                <p className="mt-4 text-gray-900 font-semibold">WhatsApp</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-blue-700 font-semibold hover:underline"
                >
                  Chat on WhatsApp
                </a>
                <p className="mt-4 text-gray-600">Working hours: 8:00 AM – 8:00 PM (All days)</p>
              </address>
            </div>

            <div className="mt-8">{renderCTAButtons()}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
