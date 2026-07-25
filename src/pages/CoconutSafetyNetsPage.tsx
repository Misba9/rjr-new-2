import { useEffect } from 'react';
import { Shield, Leaf, AlertTriangle, CheckCircle, Sun } from 'lucide-react';
import { buildServicePageSchemas } from '../utils/seo';
import { getPageSeo } from '../constants/pageSeo';
import SEOHead from '../components/SEOHead';
import JsonLd from '../components/JsonLd';
import FAQSection from '../components/FAQSection';
import HeroCarousel from '../components/HeroCarousel';
import { preloadHeroImage, services as serviceImages } from '../assets/images';
import LongFormArticle from '../components/LongFormArticle';
import { coconutLongFormParagraphs } from '../content/serviceLongFormArticles';
import LeadQuoteForm from '../components/LeadQuoteForm';
import SectionLeadCTA from '../components/SectionLeadCTA';
import ServiceBreadcrumbBar from '../components/ServiceBreadcrumbBar';
import ServiceInternalLinks from '../components/ServiceInternalLinks';

interface CoconutSafetyNetsPageProps {
  onNavigate?: (page: string) => void;
}

export default function CoconutSafetyNetsPage({ onNavigate }: CoconutSafetyNetsPageProps) {
  const faqs = [
    {
      question: 'Why install coconut tree safety nets in Bangalore?',
      answer:
        'Falling coconuts can injure people and damage vehicles. Netting reduces risk in busy driveways, walkways, and play areas while allowing professional tree maintenance when planned correctly.',
    },
    {
      question: 'Will netting damage the tree?',
      answer:
        'Correct installation focuses on support lines and mesh placement that avoids bark damage. We discuss anchor strategy based on your tree and surroundings.',
    },
    {
      question: 'How is pricing calculated?',
      answer:
        'Pricing depends on canopy spread, working height, access complexity, and span length. Photos and approximate measurements help us guide you before a site visit.',
    },
    {
      question: 'Do you serve residential and commercial properties?',
      answer:
        'Yes—villas, schools, temples, apartments with driveway overhangs, and commercial parking zones are common use cases.',
    },
    {
      question: 'How quickly can you install?',
      answer:
        'Timelines vary by access and weather. Share your location and photos for the fastest scheduling guidance.',
    },
  ];

  useEffect(() => {
    const link = preloadHeroImage(serviceImages.coconutTree.main);
    return () => link.remove();
  }, []);

  const benefits = [
    { icon: Shield, title: 'Impact containment', description: 'Designed to catch falling nuts and reduce ground-level risk.' },
    { icon: Leaf, title: 'Outdoor durability', description: 'Materials selected for UV exposure and Bengaluru weather.' },
    { icon: AlertTriangle, title: 'Risk reduction', description: 'Especially useful over driveways, paths, and gathering areas.' },
    { icon: CheckCircle, title: 'Clear scope', description: 'We explain spans, anchors, and inspection expectations up front.' },
    { icon: Sun, title: 'Practical installs', description: 'Scheduling and access planning for homes and institutions.' },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead {...getPageSeo('coconut')} />
      <JsonLd
        data={buildServicePageSchemas({
          pageKey: 'coconut',
          name: 'Coconut Tree Safety Nets Installation in Bangalore',
          description:
            'Coconut tree safety net installation in Bangalore to protect driveways, paths, and homes from falling coconuts.',
          serviceType: 'Coconut Tree Safety Nets Installation',
          breadcrumbName: 'Coconut Tree Safety Nets Bangalore',
          faqs,
        })}
      />
      <section className="relative overflow-hidden bg-gray-100 text-white">
        <HeroCarousel
          images={[serviceImages.coconutTree.main]}
          altText="Coconut tree safety nets Bangalore installation"
          overlayOpacity={0.55}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-32 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Coconut Tree Safety Nets in Bangalore</h1>
            <p className="mb-8 text-xl leading-relaxed text-white/95 md:text-2xl">
              Prevent falling coconuts with strong safety nets in Bangalore — practical surveys and professional installation.
            </p>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+917075051812"
                className="rounded-lg bg-white px-8 py-4 text-center text-lg font-semibold text-emerald-700 transition hover:bg-gray-100"
              >
                Call Now for Free Quote
              </a>
              <a
                href="https://wa.me/917075051812"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-500 px-8 py-4 text-center text-lg font-semibold text-white transition hover:bg-emerald-400"
              >
                WhatsApp photos
              </a>
            </div>
          </div>
        </div>
      </section>

      <ServiceBreadcrumbBar pageKey="coconut" onNavigate={onNavigate} />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Benefits & use cases</h2>
            <p className="text-xl text-gray-600">Strong netting for real-world outdoor hazards</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-100">
                    <Icon className="text-emerald-700" size={28} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-3 text-2xl font-bold text-gray-900">Pricing & survey</h2>
              <p className="text-gray-700 leading-relaxed">
                Coconut tree safety nets in Bangalore are priced by span, height access, and anchor feasibility. Send photos
                from multiple angles for a faster ballpark, then confirm with a site visit. Call Now for Free Quote if you
                have an active risk near a driveway or walkway.
              </p>
              <div className="mt-6">
                <SectionLeadCTA />
              </div>
            </div>
            <LeadQuoteForm id="coconut-lead-form" heading="WhatsApp quote" />
          </div>
        </div>
      </section>

      <LongFormArticle
        title="Complete guide: coconut tree safety nets in Bangalore"
        paragraphs={coconutLongFormParagraphs}
        id="coconut-longform"
      />

      <FAQSection faqs={faqs} />

      <ServiceInternalLinks pageKey="coconut" onNavigate={onNavigate} />

      <section className="bg-emerald-700 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Call Now for Free Quote</h2>
          <p className="mb-8 text-xl text-white/95">We respond quickly on phone and WhatsApp.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+917075051812"
              className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-emerald-800 transition hover:bg-gray-100"
            >
              Call: +91 7075051812
            </a>
            <a
              href="tel:+918074514411"
              className="rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-emerald-500"
            >
              Call: +91 8074514411
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
