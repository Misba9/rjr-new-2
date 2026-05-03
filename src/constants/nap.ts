/**
 * NAP (Name, Address, Phone) constants - MUST match Google Business Profile exactly
 * Update these values only when GBP is updated to maintain citation consistency
 */
export const BUSINESS_NAME = 'RJR Safety Nets';
export const BUSINESS_DISPLAY_NAME = 'RJR Safety Nets Bangalore';

export const PHONE_PRIMARY = '+917075051812';
export const PHONE_SECONDARY = '+918074514411';

/** Format for display (with space) */
export const PHONE_PRIMARY_DISPLAY = '+91 7075051812';
export const PHONE_SECONDARY_DISPLAY = '+91 8074514411';

/** For tel: links - use digits only */
export const PHONE_TEL = 'tel:+917075051812';
export const PHONE_SECONDARY_TEL = 'tel:+918074514411';

/** WhatsApp - use primary with country code, no + */
export const WHATSAPP_NUMBER = '917075051812';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const ADDRESS = {
  streetAddress: 'Bengaluru',
  addressLocality: 'Bengaluru',
  addressRegion: 'Karnataka',
  postalCode: '560001',
  addressCountry: 'IN',
};

/** Full address string for display */
export const ADDRESS_DISPLAY = 'Bengaluru, Karnataka, India';

export const EMAIL = 'info@rjrsafetynets.com';

export const SITE_URL = 'https://www.rjrsafetynets.in';

/** Service areas for local SEO - Bangalore localities */
export const SERVICE_AREAS = [
  'Whitefield',
  'HSR Layout',
  'Electronic City',
  'Indiranagar',
  'Koramangala',
  'Marathahalli',
  'BTM Layout',
  'Jayanagar',
  'JP Nagar',
  'Hebbal',
  'Yelahanka',
  'Mathikere',
  'Yeshwanthpur',
  'Gokula Extension',
  'Bellandur',
  'Sarjapur Road',
  'Bannerghatta Road',
  'Malleshwaram',
  'Bangalore',
];

/** Trust signals - update with actual GBP data */
export const GOOGLE_RATING = 4.8;
export const GOOGLE_REVIEW_COUNT = 1000;
export const YEARS_EXPERIENCE = 10;
export const WARRANTY_YEARS = 5;
