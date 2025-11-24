# Image Assets Structure

This directory contains all static images used in the RJR Safety Nets application.

## Directory Structure

```
images/
├── index.ts                    # Central image export file
├── logo/                       # Company logos
│   ├── logo-navbar.png        # Header navigation logo
│   ├── logo-footer.png        # Footer logo
│   └── logo-home-welcome.png  # Home page hero logo
├── pages/                      # Page-specific images
│   ├── balcony-02.jpg
│   ├── balcony-03.jpg
│   ├── pigeo-net-01.jpg
│   ├── pigeon-nets-02.jpg
│   ├── children-safety-net.jpg
│   ├── building-1.jpg
│   ├── cricket.jpg
│   ├── sports-01.jpg
│   ├── sports-2.jpg
│   ├── sports.jpg
│   └── all-sports.jpg
├── slider/                     # Homepage slider images
├── slider-c/                   # Category slider images
├── slid/                       # Additional slider assets
└── [Product Images]            # Root level product images
    ├── balcony.jpg
    ├── pigeon-safety-nets.jpg
    ├── children.jpg
    ├── monkey Safety Nets.jpg
    ├── Construction Safety Nets-2.jpg
    ├── cricket-nets.jpg
    └── ...
```

## Usage

### Importing Images

**Method 1: Using the centralized index (Recommended)**
```typescript
import { services, logos, icons } from '@/assets/images';

// Use in component
<img src={services.balcony.main} alt="Balcony Safety Net" />
<img src={logos.navbar} alt="RJR Safety Nets" />
```

**Method 2: Using helper functions**
```typescript
import { getServiceImage, getServiceGallery } from '@/assets/images';

const mainImage = getServiceImage('balcony');
const galleryImages = getServiceGallery('pigeon');
```

**Method 3: Direct import (for specific cases)**
```typescript
import balconyNet from '@/assets/images/balcony.jpg';
```

## Image Categories

### 1. Service/Product Images
- **Balcony Safety Nets**: `balcony.jpg`, `pages/balcony-02.jpg`, `pages/balcony-03.jpg`
- **Pigeon Safety Nets**: `pigeon-safety-nets.jpg`, `pages/pigeo-net-01.jpg`, etc.
- **Children Safety Nets**: `children.jpg`, `pages/children-safety-net.jpg`
- **Monkey Safety Nets**: `monkey Safety Nets.jpg`
- **Construction Nets**: `Construction Safety Nets-2.jpg`, `pages/building-1.jpg`
- **Sports Nets**: `cricket-nets.jpg`, `pages/sports.jpg`, `pages/all-sports.jpg`

### 2. Logos
- Navbar Logo: High-contrast version for header
- Footer Logo: Inverted/white version for dark footer
- Home Welcome Logo: Large version for hero section

### 3. Icons & Badges
- 24/7 Service: `24-hours.png`
- Affordable Price: `Affordable Price.png`
- Free Inspection: `free.png`
- Quality Assurance: `quality-rem.png`, `quality-rem2.png`
- Safety: `safty-rem.png`
- Fast Service: `time-rem.png`

### 4. CTA Buttons
- Call Button: `call-btn-rem.png`
- WhatsApp Button: `whatsapp-btn-rem.png`

### 5. About Us
- Team/Company images: `about.jpg`, `about-new.jpg`

## Image Optimization

All images should be:
- Optimized for web (compressed)
- Properly sized for their use case
- In appropriate formats (JPG for photos, PNG for logos/icons)
- Named descriptively with kebab-case

## Adding New Images

1. Place the image in the appropriate subfolder
2. Add the import to `index.ts`
3. Export it in the relevant category object
4. Update this README if adding a new category

## TypeScript Support

The `index.ts` file provides full TypeScript support with:
- Typed service image getters
- Autocomplete for image categories
- Type-safe helper functions

## Vite Image Handling

Images are imported as ES modules using Vite's asset handling:
```typescript
new URL('./path/to/image.jpg', import.meta.url).href
```

This ensures:
- Proper bundling and optimization
- Correct paths in production builds
- Tree-shaking of unused images
- Cache-busting via content hashing
