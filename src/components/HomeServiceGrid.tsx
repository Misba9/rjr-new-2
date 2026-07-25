import type { MouseEvent } from 'react';
import {
  Baby,
  Bird,
  Dumbbell,
  Eye,
  HardHat,
  PawPrint,
  Shield,
  Shirt,
  Trees,
  type LucideIcon,
} from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { PAGE_TO_PATH, type PageKey } from '../constants/routes';
import type { ImageAsset } from '../assets/images';
import { services as serviceImages } from '../assets/images';

export type HomeServiceCard = {
  key: PageKey;
  icon: LucideIcon;
  heading: string;
  image: ImageAsset;
  alt: string;
  description: string;
};

const SERVICE_CARDS: HomeServiceCard[] = [
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
    alt: 'Sports practice nets Bangalore for cricket and multi-sport training',
    description:
      'Durable practice nets for cricket, tennis, badminton and more — homes, schools, clubs and academies.',
  },
];

interface HomeServiceGridProps {
  onNavigate: (page: string) => void;
}

/**
 * Below-fold home service cards — lazy-loaded chunk to keep home LCP JS smaller.
 */
export default function HomeServiceGrid({ onNavigate }: HomeServiceGridProps) {
  const handleInternalLink = (e: MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICE_CARDS.map((service) => {
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
                width={service.image.width}
                height={service.image.height}
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
  );
}
