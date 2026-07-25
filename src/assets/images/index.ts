/**
 * Image assets — WebP-first with JPEG/PNG fallbacks and intrinsic dimensions.
 * Public photos use /images/*; bundled assets use Vite `new URL` (must be string literals).
 */

import { publicImageMeta, type PublicImageKey } from '../../constants/publicImageMeta';

export type ImageAsset = {
  /** JPEG/PNG fallback */
  src: string;
  /** WebP when available */
  webp?: string;
  width: number;
  height: number;
};

export function resolveImage(img: string | ImageAsset): ImageAsset {
  if (typeof img !== 'string') return img;

  const publicMatch = img.match(/\/images\/([^/.]+)\./);
  if (publicMatch) {
    const key = publicMatch[1] as PublicImageKey;
    const meta = publicImageMeta[key];
    if (meta) {
      return { src: meta.src, webp: meta.webp, width: meta.width, height: meta.height };
    }
  }

  return { src: img, width: 1200, height: 800 };
}

export function imageSrc(img: string | ImageAsset): string {
  const resolved = resolveImage(img);
  return resolved.webp || resolved.src;
}

/** Inject a high-priority preload for a hero/LCP image (WebP + optional responsive hint) */
export function preloadHeroImage(img: string | ImageAsset): HTMLLinkElement {
  const asset = resolveImage(img);
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  if (asset.webp) {
    link.href = asset.webp;
    link.type = 'image/webp';
    // Prefer smaller mobile hero when the 800w variant exists for balcony LCP
    if (asset.webp.includes('balcony-safety-nets-05')) {
      link.setAttribute(
        'imagesrcset',
        '/images/balcony-safety-nets-05-800.webp 800w, /images/balcony-safety-nets-05.webp 1280w'
      );
      link.setAttribute('imagesizes', '100vw');
    }
  } else {
    link.href = asset.src;
  }
  link.setAttribute('fetchpriority', 'high');
  document.head.appendChild(link);
  return link;
}

function pub(key: PublicImageKey): ImageAsset {
  const m = publicImageMeta[key];
  return { src: m.src, webp: m.webp, width: m.width, height: m.height };
}

// ===========================
// LOGO (Vite requires literal new URL paths)
// ===========================
export const logoNavbar: ImageAsset = {
  src: new URL('./logo/logo-navbar.png', import.meta.url).href,
  webp: new URL('./logo/logo-navbar.webp', import.meta.url).href,
  width: 500,
  height: 500,
};

// ===========================
// BUNDLED SERVICE / GALLERY IMAGES
// ===========================
export const balconyNet02: ImageAsset = {
  src: new URL('./pages/balcony-02.jpg', import.meta.url).href,
  webp: new URL('./pages/balcony-02.webp', import.meta.url).href,
  width: 860,
  height: 400,
};
export const balconyNet03: ImageAsset = {
  src: new URL('./pages/balcony-03.jpg', import.meta.url).href,
  webp: new URL('./pages/balcony-03.webp', import.meta.url).href,
  width: 852,
  height: 400,
};

export const pigeonNet: ImageAsset = {
  src: new URL('./pigeon-safety-nets.jpg', import.meta.url).href,
  webp: new URL('./pigeon-safety-nets.webp', import.meta.url).href,
  width: 1000,
  height: 1000,
};
export const pigeonNet01: ImageAsset = {
  src: new URL('./pages/pigeo-net-01.jpg', import.meta.url).href,
  webp: new URL('./pages/pigeo-net-01.webp', import.meta.url).href,
  width: 852,
  height: 400,
};
export const pigeonNet02: ImageAsset = {
  src: new URL('./pages/pigeon-nets-02.jpg', import.meta.url).href,
  webp: new URL('./pages/pigeon-nets-02.webp', import.meta.url).href,
  width: 852,
  height: 400,
};
export const antiBirdNet: ImageAsset = {
  src: new URL('./anti-bird-net.jpg', import.meta.url).href,
  webp: new URL('./anti-bird-net.webp', import.meta.url).href,
  width: 370,
  height: 400,
};
export const birdSafetyNets: ImageAsset = {
  src: new URL('./brids-safty-nets.jpeg', import.meta.url).href,
  webp: new URL('./brids-safty-nets.webp', import.meta.url).href,
  width: 1280,
  height: 960,
};

export const childrenSafetyNet: ImageAsset = {
  src: new URL('./children.jpg', import.meta.url).href,
  webp: new URL('./children.webp', import.meta.url).href,
  width: 416,
  height: 306,
};
export const childrenSafetyNet02: ImageAsset = {
  src: new URL('./pages/children-safety-net.jpg', import.meta.url).href,
  webp: new URL('./pages/children-safety-net.webp', import.meta.url).href,
  width: 268,
  height: 268,
};

export const monkeySafetyNet: ImageAsset = {
  src: new URL('./monkey Safety Nets.jpg', import.meta.url).href,
  webp: new URL('./monkey Safety Nets.webp', import.meta.url).href,
  width: 565,
  height: 420,
};

export const constructionNet: ImageAsset = {
  src: new URL('./Construction Safety Nets-2.jpg', import.meta.url).href,
  webp: new URL('./Construction Safety Nets-2.webp', import.meta.url).href,
  width: 1365,
  height: 1305,
};
export const constructionBuilding: ImageAsset = {
  src: new URL('./pages/building-1.jpg', import.meta.url).href,
  webp: new URL('./pages/building-1.webp', import.meta.url).href,
  width: 860,
  height: 400,
};
export const ductAreaSafetyNet: ImageAsset = {
  src: new URL('./duct-area-safety-nets.jpg', import.meta.url).href,
  webp: new URL('./duct-area-safety-nets.webp', import.meta.url).href,
  width: 565,
  height: 420,
};

export const sportsNet: ImageAsset = {
  src: new URL('./pages/sports.jpg', import.meta.url).href,
  webp: new URL('./pages/sports.webp', import.meta.url).href,
  width: 1600,
  height: 1412,
};
export const sportsNet01: ImageAsset = {
  src: new URL('./pages/sports-01.jpg', import.meta.url).href,
  webp: new URL('./pages/sports-01.webp', import.meta.url).href,
  width: 860,
  height: 400,
};
export const sportsNet02: ImageAsset = {
  src: new URL('./pages/sports-2.jpg', import.meta.url).href,
  webp: new URL('./pages/sports-2.webp', import.meta.url).href,
  width: 1600,
  height: 1067,
};
export const allSportsNet: ImageAsset = {
  src: new URL('./pages/all-sports.jpg', import.meta.url).href,
  webp: new URL('./pages/all-sports.webp', import.meta.url).href,
  width: 800,
  height: 450,
};

export const coconutTreeNet: ImageAsset = {
  src: new URL('./Coconut-Tree-Safety-Nets.jpg', import.meta.url).href,
  webp: new URL('./Coconut-Tree-Safety-Nets.webp', import.meta.url).href,
  width: 870,
  height: 500,
};

export const aboutUs: ImageAsset = {
  src: new URL('./about.jpg', import.meta.url).href,
  webp: new URL('./about.webp', import.meta.url).href,
  width: 276,
  height: 183,
};
export const aboutUsNew: ImageAsset = {
  src: new URL('./about-new.jpg', import.meta.url).href,
  webp: new URL('./about-new.webp', import.meta.url).href,
  width: 552,
  height: 366,
};

// ===========================
// PUBLIC SITE PHOTOS
// ===========================
export const sitePhotos = {
  balconySafetyNets01: pub('balcony-safety-nets-01'),
  balconySafetyNets02: pub('balcony-safety-nets-02'),
  balconySafetyNets03: pub('balcony-safety-nets-03'),
  balconySafetyNets04: pub('balcony-safety-nets-04'),
  balconySafetyNets05: pub('balcony-safety-nets-05'),
  balconySafetyNets06: pub('balcony-safety-nets-06'),
  balconySafetyNets07: pub('balcony-safety-nets-07'),
  clothHanger01: pub('clouth-hanger-01'),
  invisibleGrill01: pub('invisible-grill-01'),
  invisibleGrill02: pub('invisible-grill-02'),
  invisibleGrill03: pub('invisible-grill-03'),
  invisibleGrill04: pub('invisible-grill-04'),
  invisibleGrill05: pub('invisible-grill-05'),
  invisibleGrill06: pub('invisible-grill-06'),
  invisibleGrill07: pub('invisible-grill-07'),
  invisibleGrill08: pub('invisible-grill-08'),
  pigeonSpikes01: pub('pigeon-spikes-01'),
  pigeonSpikes02: pub('pigeon-spikes-02'),
  pigeonSpikes03: pub('pigeon-spikes-03'),
  childrenSafetyNetsHero: {
    src: '/images/children-safety-nets-hero.jpg',
    webp: '/images/children-safety-nets-hero.webp',
    width: 1920,
    height: 960,
  } satisfies ImageAsset,
} as const;

const balconyInstallGallery: ImageAsset[] = [
  sitePhotos.balconySafetyNets02,
  sitePhotos.balconySafetyNets03,
  sitePhotos.balconySafetyNets04,
  sitePhotos.balconySafetyNets05,
  sitePhotos.balconySafetyNets06,
  sitePhotos.balconySafetyNets07,
  balconyNet02,
  balconyNet03,
];

const invisibleGrillGallery: ImageAsset[] = [
  sitePhotos.invisibleGrill02,
  sitePhotos.invisibleGrill03,
  sitePhotos.invisibleGrill04,
  sitePhotos.invisibleGrill05,
  sitePhotos.invisibleGrill06,
  sitePhotos.invisibleGrill07,
  sitePhotos.invisibleGrill08,
];

// ===========================
// ORGANIZED EXPORTS
// ===========================

export const logos = {
  navbar: logoNavbar,
};

export const services = {
  balcony: {
    main: sitePhotos.balconySafetyNets01,
    gallery: balconyInstallGallery,
  },
  pigeon: {
    main: pigeonNet,
    gallery: [
      sitePhotos.pigeonSpikes01,
      sitePhotos.pigeonSpikes02,
      sitePhotos.pigeonSpikes03,
      pigeonNet01,
      pigeonNet02,
      antiBirdNet,
      birdSafetyNets,
    ],
  },
  children: {
    main: childrenSafetyNet,
    gallery: [childrenSafetyNet02],
  },
  monkey: {
    main: monkeySafetyNet,
  },
  construction: {
    main: constructionNet,
    gallery: [constructionBuilding, ductAreaSafetyNet],
  },
  sports: {
    main: sportsNet,
    gallery: [sportsNet01, sportsNet02, allSportsNet],
  },
  coconutTree: {
    main: coconutTreeNet,
  },
  clothHanger: {
    main: sitePhotos.clothHanger01,
  },
  invisibleGrills: {
    main: sitePhotos.invisibleGrill01,
    gallery: invisibleGrillGallery,
  },
};

export const about = {
  main: aboutUs,
  alternative: aboutUsNew,
};

/** Home hero slides — WebP-first public assets for LCP preload */
export const sliderC = {
  balcony: sitePhotos.balconySafetyNets05,
  pigeon: sitePhotos.pigeonSpikes03,
  children: sitePhotos.childrenSafetyNetsHero,
};

/** Home LCP hero — referenced in index.html preload */
export const HOME_LCP_PRELOAD = {
  href: sitePhotos.balconySafetyNets05.webp!,
  type: 'image/webp' as const,
  width: sitePhotos.balconySafetyNets05.width,
  height: sitePhotos.balconySafetyNets05.height,
};

export default {
  logos,
  services,
  sitePhotos,
  about,
  sliderC,
};
