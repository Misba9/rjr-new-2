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
    main: balconyNet,
    gallery: [balconyNet02, balconyNet03],
  },
  pigeon: {
    main: pigeonNet,
    gallery: [pigeonNet01, pigeonNet02, antiBirdNet, birdSafetyNets],
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

// ===========================
// HELPER FUNCTIONS
// ===========================

/**
 * Get service image by service type
 * @param serviceType - The type of service (balcony, pigeon, children, etc.)
 * @returns The main image URL for the service
 */
export const getServiceImage = (serviceType: keyof typeof services): string => {
  return services[serviceType]?.main || balconyNet;
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
  about,
  icons,
  ctaButtons,
  getServiceImage,
  getServiceGallery,
};
