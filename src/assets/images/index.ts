/**
 * Image Assets Index
 * Centralized image imports for the RJR Safety Nets application
 * This file provides a single source of truth for all image references
 */

// ===========================
// LOGO IMAGES
// ===========================
export const logoNavbar = new URL('./logo/logo-navbar.png', import.meta.url).href;
export const logoFooter = new URL('./logo/logo-footer.png', import.meta.url).href;
export const logoHome = new URL('./logo/logo-home-welcome.png', import.meta.url).href;

// ===========================
// SERVICE/PRODUCT IMAGES
// ===========================

// Balcony Safety Nets
export const balconyNet = new URL('./balcony.jpg', import.meta.url).href;
export const balconyNet02 = new URL('./pages/balcony-02.jpg', import.meta.url).href;
export const balconyNet03 = new URL('./pages/balcony-03.jpg', import.meta.url).href;

// Pigeon/Bird Safety Nets
export const pigeonNet = new URL('./pigeon-safety-nets.jpg', import.meta.url).href;
export const pigeonNet01 = new URL('./pages/pigeo-net-01.jpg', import.meta.url).href;
export const pigeonNet02 = new URL('./pages/pigeon-nets-02.jpg', import.meta.url).href;
export const antiBirdNet = new URL('./anti-bird-net.jpg', import.meta.url).href;
export const birdSafetyNets = new URL('./brids-safty-nets.jpeg', import.meta.url).href;
export const antiBirdSpikes = new URL('./Anti-Bird-Spikes.jpg', import.meta.url).href;

// Children Safety Nets
export const childrenSafetyNet = new URL('./children.jpg', import.meta.url).href;
export const childrenSafetyNet02 = new URL('./pages/children-safety-net.jpg', import.meta.url).href;

// Monkey Safety Nets
export const monkeySafetyNet = new URL('./monkey Safety Nets.jpg', import.meta.url).href;

// Construction Safety Nets
export const constructionNet = new URL('./Construction Safety Nets-2.jpg', import.meta.url).href;
export const constructionBuilding = new URL('./pages/building-1.jpg', import.meta.url).href;
export const ductAreaSafetyNet = new URL('./duct-area-safety-nets.jpg', import.meta.url).href;

// Sports Practice Nets
export const cricketNet = new URL('./cricket-nets.jpg', import.meta.url).href;
export const cricketNet02 = new URL('./pages/cricket.jpg', import.meta.url).href;
export const sportsNet = new URL('./pages/sports.jpg', import.meta.url).href;
export const sportsNet01 = new URL('./pages/sports-01.jpg', import.meta.url).href;
export const sportsNet02 = new URL('./pages/sports-2.jpg', import.meta.url).href;
export const allSportsNet = new URL('./pages/all-sports.jpg', import.meta.url).href;

// Coconut Tree Safety Nets
export const coconutTreeNet = new URL('./Coconut-Tree-Safety-Nets.jpg', import.meta.url).href;

// ===========================
// HIGH-RES SITE PHOTOS (/public/images — served as-is, sharp JPEGs)
// ===========================

export const sitePhotos = {
  balconySafetyNets01: '/images/balcony-safety-nets-01.jpeg',
  balconySafetyNets02: '/images/balcony-safety-nets-02.jpeg',
  balconySafetyNets03: '/images/balcony-safety-nets-03.jpeg',
  balconySafetyNets04: '/images/balcony-safety-nets-04.jpeg',
  balconySafetyNets05: '/images/balcony-safety-nets-05.jpeg',
  balconySafetyNets06: '/images/balcony-safety-nets-06.jpeg',
  balconySafetyNets07: '/images/balcony-safety-nets-07.jpeg',
  clothHanger01: '/images/clouth-hanger-01.jpeg',
  invisibleGrill01: '/images/invisible-grill-01.jpeg',
  invisibleGrill02: '/images/invisible-grill-02.jpeg',
  invisibleGrill03: '/images/invisible-grill-03.jpeg',
  invisibleGrill04: '/images/invisible-grill-04.jpeg',
  invisibleGrill05: '/images/invisible-grill-05.jpeg',
  invisibleGrill06: '/images/invisible-grill-06.jpeg',
  invisibleGrill07: '/images/invisible-grill-07.jpeg',
  invisibleGrill08: '/images/invisible-grill-08.jpeg',
  pigeonSpikes01: '/images/pigeon-spikes-01.jpeg',
  pigeonSpikes02: '/images/pigeon-spikes-02.jpeg',
  pigeonSpikes03: '/images/pigeon-spikes-03.jpeg',
} as const;

const balconyInstallGallery = [
  sitePhotos.balconySafetyNets02,
  sitePhotos.balconySafetyNets03,
  sitePhotos.balconySafetyNets04,
  sitePhotos.balconySafetyNets05,
  sitePhotos.balconySafetyNets06,
  sitePhotos.balconySafetyNets07,
  balconyNet02,
  balconyNet03,
] as const;

const invisibleGrillGallery = [
  sitePhotos.invisibleGrill02,
  sitePhotos.invisibleGrill03,
  sitePhotos.invisibleGrill04,
  sitePhotos.invisibleGrill05,
  sitePhotos.invisibleGrill06,
  sitePhotos.invisibleGrill07,
  sitePhotos.invisibleGrill08,
] as const;

// ===========================
// HOMEPAGE HERO (SLIDER-C) — fallbacks when no /public/images match
// ===========================

export const sliderCBalconySafetyNets = new URL('./slider-c/balcony-safety-nets.png', import.meta.url).href;
export const sliderCPigeonProtectionNets = new URL('./slider-c/pigeon-protection-nets.png', import.meta.url).href;
export const sliderCChildrenSafetyNets = new URL('./slider-c/children-safety-nets.png', import.meta.url).href;

// ===========================
// ABOUT US IMAGES
// ===========================
export const aboutUs = new URL('./about.jpg', import.meta.url).href;
export const aboutUsNew = new URL('./about-new.jpg', import.meta.url).href;

// ===========================
// ICON/BADGE IMAGES
// ===========================
export const icon24Hours = new URL('./24-hours.png', import.meta.url).href;
export const iconAffordablePrice = new URL('./Affordable Price.png', import.meta.url).href;
export const iconFree = new URL('./free.png', import.meta.url).href;
export const iconQuality = new URL('./quality-rem.png', import.meta.url).href;
export const iconQuality2 = new URL('./quality-rem2.png', import.meta.url).href;
export const iconSafety = new URL('./safty-rem.png', import.meta.url).href;
export const iconTime = new URL('./time-rem.png', import.meta.url).href;

// ===========================
// CTA BUTTONS
// ===========================
export const callButton = new URL('./call-btn-rem.png', import.meta.url).href;
export const whatsappButton = new URL('./whatsapp-btn-rem.png', import.meta.url).href;

// ===========================
// ORGANIZED EXPORTS BY CATEGORY
// ===========================

export const logos = {
  navbar: logoNavbar,
  footer: logoFooter,
  home: logoHome,
};

export const services = {
  balcony: {
    main: sitePhotos.balconySafetyNets01,
    gallery: [...balconyInstallGallery],
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
    spikes: antiBirdSpikes,
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
    cricket: [cricketNet, cricketNet02],
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
    gallery: [...invisibleGrillGallery],
  },
};

export const about = {
  main: aboutUs,
  alternative: aboutUsNew,
};

export const icons = {
  hours24: icon24Hours,
  affordablePrice: iconAffordablePrice,
  free: iconFree,
  quality: iconQuality,
  quality2: iconQuality2,
  safety: iconSafety,
  time: iconTime,
};

export const ctaButtons = {
  call: callButton,
  whatsapp: whatsappButton,
};

/** Home hero: full-res JPEGs from /public/images (slides 1–2); slide 3 uses packaged PNG */
export const sliderC = {
  balcony: sitePhotos.balconySafetyNets05,
  pigeon: sitePhotos.pigeonSpikes03,
  children: sliderCChildrenSafetyNets,
};

// ===========================
// HELPER FUNCTIONS
// ===========================

/**
 * Get service image by service type
 * @param serviceType - The type of service (balcony, pigeon, children, etc.)
 * @returns The main image URL for the service
 */
export const getServiceImage = (serviceType: keyof typeof services): string => {
  const entry = services[serviceType];
  if (entry && 'main' in entry) return entry.main;
  return sitePhotos.balconySafetyNets01;
};

/**
 * Get service gallery images
 * @param serviceType - The type of service
 * @returns Array of gallery image URLs
 */
export const getServiceGallery = (serviceType: keyof typeof services): string[] => {
  const service = services[serviceType];
  if ('gallery' in service) {
    return service.gallery;
  }
  return [];
};

// Default export for convenience
export default {
  logos,
  services,
  sitePhotos,
  about,
  icons,
  ctaButtons,
  sliderC,
  getServiceImage,
  getServiceGallery,
};
