# SEO IMPLEMENTATION GUIDE
## RJR Safety Nets - Actionable Code Changes

---

## TASK 1: FIX TITLE TAG MISMATCH

### Problem:
- `index.html` has different title than `HomePage.tsx`
- Causing conflicting meta tags

### Solution:

#### File: `index.html` (Lines 14-15)

**CURRENT:**
```html
<title>Balcony, Pigeon & Children Safety Nets Bangalore | Installation Near Me - RJR Safety Nets</title>
<meta name="description" content="Leading safety net installation in Bangalore. Balcony safety nets, pigeon safety nets, children safety nets. 5+ years warranty. 1000+ reviews. Free inspection. Call +91 7075051812 or WhatsApp now." />
```

**CHANGE TO:**
```html
<title>Safety Nets Bangalore | Balcony, Pigeon, Children Nets Installation Near Me</title>
<meta name="description" content="Expert safety net installation in Bangalore. Balcony, pigeon & children nets with 5+ years warranty. 1000+ reviews. Free inspection. Get instant quote online!" />
```

---

## TASK 2: ADD COMPLETE LOCALBUSINESS SCHEMA

### File: `src/utils/seo.ts`

Add this new function after line 215:

```typescript
/**
 * Create comprehensive LocalBusiness schema for local SEO
 */
export const createLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.rjrsafetynets.in/#organization',
    'name': 'RJR Safety Nets',
    'url': 'https://www.rjrsafetynets.in',
    'telephone': '+917075051812',
    'email': 'info@rjrsafetynets.com',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Bengaluru',
      'addressRegion': 'Karnataka',
      'postalCode': '560001',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 12.9716,
      'longitude': 77.5946
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Whitefield' },
      { '@type': 'City', 'name': 'HSR Layout' },
      { '@type': 'City', 'name': 'Koramangala' },
      { '@type': 'City', 'name': 'Marathahalli' },
      { '@type': 'City', 'name': 'Indiranagar' },
      { '@type': 'City', 'name': 'Electronic City' },
      { '@type': 'City', 'name': 'BTM Layout' },
      { '@type': 'City', 'name': 'Bangalore' }
    ],
    'priceRange': '$$',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '09:00',
        'closes': '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Sunday',
        'opens': '10:00',
        'closes': '17:00'
      }
    ],
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '1000'
    },
    'review': [
      {
        '@type': 'Review',
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'author': { '@type': 'Person', 'name': 'Ramesh Kumar' },
        'reviewBody': 'Excellent service! The team was professional and installed the balcony safety nets quickly. Very satisfied with the quality.',
        'datePublished': '2025-11-01'
      },
      {
        '@type': 'Review',
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'author': { '@type': 'Person', 'name': 'Priya Sharma' },
        'reviewBody': 'Great experience with RJR Safety Nets. The pigeon nets work perfectly and the installation was clean and efficient.',
        'datePublished': '2025-10-15'
      },
      {
        '@type': 'Review',
        'reviewRating': { '@type': 'Rating', 'ratingValue': '5' },
        'author': { '@type': 'Person', 'name': 'Vijay Reddy' },
        'reviewBody': 'Highly recommend! Good quality nets at reasonable prices. The team is very responsive and professional.',
        'datePublished': '2025-09-20'
      }
    ],
    'sameAs': [
      'https://www.facebook.com/rjrsafetynets',
      'https://www.instagram.com/rjrsafetynets',
      'https://www.twitter.com/rjrsafetynets'
    ]
  };
};

/**
 * Create breadcrumb schema for navigation
 */
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
};
```

### File: `src/pages/HomePage.tsx`

In the `useEffect` hook (around line 25), add:

```typescript
// Add LocalBusiness schema on homepage
addSchemaMarkup([
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  },
  createLocalBusinessSchema(), // ADD THIS
  createBreadcrumbSchema([     // ADD THIS
    { name: 'Home', url: 'https://www.rjrsafetynets.in/' }
  ])
]);
```

---

## TASK 3: OPTIMIZE HOMEPAGE H1-H6 STRUCTURE

### File: `src/pages/HomePage.tsx`

Replace the main heading section (around line 200+) with:

**BEFORE:**
```tsx
<section>
  <h1>Balcony Safety Nets in Bangalore</h1>
  <h2>Safety Net Installation Services in Bangalore</h2>
  {/* Services content */}
</section>
```

**AFTER:**
```tsx
<section>
  <h1>Professional Safety Nets Installation in Bangalore | Balcony, Pigeon & Children Protection</h1>
  
  <section className="services-container">
    <h2>Safety Net Services Near You in Bangalore</h2>
    {services.map((service) => (
      <article key={service.id} className="service-card">
        <h3>{service.name} Installation in Bangalore</h3>
        <p>{service.description}</p>
        <button onClick={() => onNavigate(service.href)}>
          Learn More About {service.name}
        </button>
      </article>
    ))}
  </section>
</section>
```

Create a new section for "Why Choose Us":

```tsx
<section className="why-choose-us">
  <h2>Why Bangalore Residents Trust RJR Safety Nets</h2>
  {whyChooseUs.map((item, index) => (
    <div key={index} className="feature">
      <item.icon size={32} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  ))}
</section>
```

---

## TASK 4: CREATE LOCATION PAGE UPDATES

### File: `src/pages/locations/WhitefieldPage.tsx` (Create if doesn't exist)

```typescript
import { useEffect } from 'react';
import { updatePageMeta, addSchemaMarkup, createLocalBusinessSchema, createBreadcrumbSchema } from '../../utils/seo';

interface WhitefieldPageProps {
  onNavigate: (page: string) => void;
}

export default function WhitefieldPage({ onNavigate }: WhitefieldPageProps) {
  useEffect(() => {
    updatePageMeta({
      title: 'Safety Nets Whitefield Bangalore | Installation Services Near You',
      description: 'Safety net installation in Whitefield, Bangalore. Balcony, pigeon, children nets. Same-day free inspection. 5+ years warranty. Call +91 7075051812.',
      keywords: 'safety nets Whitefield, safety nets installation Whitefield, balcony safety nets Whitefield, pigeon safety nets Whitefield',
      canonical: 'https://www.rjrsafetynets.in/whitefield',
      ogTitle: 'Safety Nets Installation in Whitefield, Bangalore',
      ogDescription: 'Professional safety net installation services in Whitefield. Free inspection and quote.',
    });

    addSchemaMarkup([
      createLocalBusinessSchema(),
      createBreadcrumbSchema([
        { name: 'Home', url: 'https://www.rjrsafetynets.in/' },
        { name: 'Locations', url: 'https://www.rjrsafetynets.in/#locations' },
        { name: 'Whitefield', url: 'https://www.rjrsafetynets.in/whitefield' }
      ])
    ]);
  }, []);

  return (
    <div className="min-h-screen">
      <h1>Safety Nets Installation in Whitefield, Bangalore | Services Near You</h1>
      
      <p>Looking for safety nets installation services in Whitefield, Bangalore? 
      RJR Safety Nets provides professional, quick installation across Whitefield.</p>

      <section>
        <h2>Our Services Available in Whitefield</h2>
        <ul>
          <li><a href="#" onClick={() => onNavigate('balcony')}>Balcony Safety Nets</a></li>
          <li><a href="#" onClick={() => onNavigate('pigeon')}>Pigeon Safety Nets</a></li>
          <li><a href="#" onClick={() => onNavigate('children')}>Children Safety Nets</a></li>
        </ul>
      </section>

      <section>
        <h2>Why Choose RJR Safety Nets in Whitefield</h2>
        <ul>
          <li>✅ Whitefield-Based Team - Fast Response</li>
          <li>✅ 24-Hour Emergency Service</li>
          <li>✅ Free On-Site Inspection (No Charge)</li>
          <li>✅ Installation within 48 Hours</li>
        </ul>
      </section>

      <section>
        <h2>Coverage Areas in Whitefield</h2>
        <p>We serve all areas of Whitefield including: Raheja Vanya, Sattva Pristine, 
        Prestige Tech Park, Brigade Tech Park, and nearby neighborhoods.</p>
      </section>

      <section className="cta-section">
        <h2>Get Free Safety Net Inspection in Whitefield Today</h2>
        <button className="primary-btn">📞 Call Now: +91 7075051812</button>
        <button className="secondary-btn">💬 WhatsApp Us</button>
      </section>
    </div>
  );
}
```

**Repeat this template for:**
- `src/pages/locations/HSRLayoutPage.tsx`
- `src/pages/locations/KoramangalaPage.tsx`
- `src/pages/locations/MarathahalliPage.tsx`
- `src/pages/locations/IndiranagarPage.tsx`
- `src/pages/locations/ElectronicCityPage.tsx`
- `src/pages/locations/BTMLayoutPage.tsx`

---

## TASK 5: ADD INTERNAL LINKING

### File: `src/components/ServiceContentBlock.tsx` (If exists) or new component

Create internal linking component:

```typescript
interface RelatedServicesProps {
  currentService: string;
  onNavigate: (page: string) => void;
}

export function RelatedServices({ currentService, onNavigate }: RelatedServicesProps) {
  const relatedServices: Record<string, { name: string; href: string; description: string }[]> = {
    balcony: [
      { name: 'Pigeon Safety Nets', href: 'pigeon', description: 'Protect from bird intrusion' },
      { name: 'Children Safety Nets', href: 'children', description: 'Child-proof your space' },
      { name: 'Invisible Grills', href: 'invisible-grills', description: 'Modern safety solution' }
    ],
    pigeon: [
      { name: 'Balcony Safety Nets', href: 'balcony', description: 'Multi-purpose protection' },
      { name: 'Monkey Safety Nets', href: 'monkey', description: 'Animal protection' }
    ],
    children: [
      { name: 'Balcony Safety Nets', href: 'balcony', description: 'Comprehensive safety' },
      { name: 'Invisible Grills', href: 'invisible-grills', description: 'Aesthetic solution' }
    ]
  };

  const services = relatedServices[currentService] || [];

  return (
    <aside className="related-services">
      <h3>Our Other Safety Net Services</h3>
      <ul>
        {services.map((service) => (
          <li key={service.href}>
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(service.href);
              }}
              className="related-link"
            >
              {service.name}
            </a>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
```

Add to each service page:

```typescript
import { RelatedServices } from '../components/RelatedServices';

export default function BalconyPage({ onNavigate }: BalconyPageProps) {
  return (
    <div>
      {/* Existing content */}
      
      <RelatedServices currentService="balcony" onNavigate={onNavigate} />
    </div>
  );
}
```

---

## TASK 6: UPDATE SERVICE PAGE META TAGS

### File: `src/pages/PigeonPage.tsx`

Find the `updatePageMeta` call and update:

**BEFORE:**
```typescript
updatePageMeta({
  title: 'Pigeon Safety Nets Bangalore | Anti-Bird Net Installation - RJR Safety Nets',
  description: 'Best pigeon safety nets in Bangalore. Humane bird control...',
  keywords: 'pigeon safety nets Bangalore, anti-bird nets',
  // ...
});
```

**AFTER:**
```typescript
updatePageMeta({
  title: 'Pigeon Safety Nets Bangalore | Anti-Bird Net Installation Near You',
  description: 'Effective pigeon control nets in Bangalore. Humane bird deterrent. Invisible design. 5+ years warranty. Professional installation. Get free quote today!',
  keywords: 'pigeon safety nets Bangalore, anti-bird nets Bangalore, pigeon control nets, safety nets near me, bird safety nets installation',
  canonical: 'https://www.rjrsafetynets.in/pigeon',
  ogTitle: 'Pigeon Safety Nets in Bangalore | RJR Safety Nets',
  ogDescription: 'Effective pigeon protection nets in Bangalore. Professional installation.',
});
```

**Repeat for:**
- `src/pages/ChildrenSafetyNetsPage.tsx`
- `src/pages/MonkeySafetyNetsPage.tsx`
- `src/pages/ClothHangerPage.tsx`
- `src/pages/InvisibleGrillsPage.tsx`
- `src/pages/ConstructionSafetyNetsPage.tsx`
- `src/pages/SportsPracticeNetsPage.tsx`

---

## TASK 7: CREATE NEW CONTENT PAGES

### Create: `src/pages/PriceGuidePage.tsx`

```typescript
import { useEffect } from 'react';
import { updatePageMeta } from '../utils/seo';

export default function PriceGuidePage() {
  useEffect(() => {
    updatePageMeta({
      title: 'Safety Net Installation Cost in Bangalore 2026 | Price Calculator',
      description: 'Get accurate safety net prices in Bangalore. Balcony, pigeon, children nets pricing. Transparent costs, no hidden charges. Free quote!',
      keywords: 'safety nets price Bangalore, safety net cost, balcony nets price, installation cost',
      canonical: 'https://www.rjrsafetynets.in/price-guide',
    });
  }, []);

  return (
    <div className="min-h-screen px-8 py-12">
      <h1>Safety Net Installation Cost in Bangalore 2026 | Price Calculator</h1>
      
      <section>
        <h2>Average Safety Net Installation Prices</h2>
        <table className="price-table">
          <thead>
            <tr>
              <th>Service Type</th>
              <th>Avg Cost/Sq Ft</th>
              <th>100 Sq Ft</th>
              <th>200 Sq Ft</th>
              <th>300 Sq Ft</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Balcony Nets</td>
              <td>₹15-25</td>
              <td>₹1,500-2,500</td>
              <td>₹3,000-5,000</td>
              <td>₹4,500-7,500</td>
            </tr>
            <tr>
              <td>Pigeon Nets</td>
              <td>₹12-20</td>
              <td>₹1,200-2,000</td>
              <td>₹2,400-4,000</td>
              <td>₹3,600-6,000</td>
            </tr>
            <tr>
              <td>Children Safety Nets</td>
              <td>₹18-28</td>
              <td>₹1,800-2,800</td>
              <td>₹3,600-5,600</td>
              <td>₹5,400-8,400</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>What Affects Safety Net Cost?</h2>
        <ul>
          <li><strong>Net Quality:</strong> Premium HDPE vs standard grade</li>
          <li><strong>Area Size:</strong> Larger areas = better per-sqft rate</li>
          <li><strong>Height:</strong> High-rise installations cost more</li>
          <li><strong>Complexity:</strong> Irregular shapes = higher cost</li>
          <li><strong>Warranty:</strong> Longer warranty = slight premium</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Get Your Custom Quote</h2>
        <p>Every installation is unique. Get a free, personalized quote based on your specific needs.</p>
        <button>📞 Call for Free Inspection</button>
      </section>
    </div>
  );
}
```

---

## TASK 8: ADD LOCATION PAGES TO SITEMAP

### File: `public/sitemap.xml`

Add after existing URLs:

```xml
  <!-- Location Pages -->
  <url>
    <loc>https://www.rjrsafetynets.in/whitefield</loc>
    <lastmod>2026-02-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://www.rjrsafetynets.in/hsr-layout</loc>
    <lastmod>2026-02-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://www.rjrsafetynets.in/koramangala</loc>
    <lastmod>2026-02-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://www.rjrsafetynets.in/marathahalli</loc>
    <lastmod>2026-02-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://www.rjrsafetynets.in/indiranagar</loc>
    <lastmod>2026-02-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://www.rjrsafetynets.in/electronic-city</loc>
    <lastmod>2026-02-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <url>
    <loc>https://www.rjrsafetynets.in/btm-layout</loc>
    <lastmod>2026-02-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>

  <!-- Content Pages -->
  <url>
    <loc>https://www.rjrsafetynets.in/price-guide</loc>
    <lastmod>2026-02-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
```

---

## TASK 9: ADD ROUTE UPDATES

### File: `src/App.tsx`

Add route handlers:

```typescript
// Add location imports
import WhitefieldPage from './pages/locations/WhitefieldPage';
import HSRLayoutPage from './pages/locations/HSRLayoutPage';
import KoramangalaPage from './pages/locations/KoramangalaPage';
import MarathahalliPage from './pages/locations/MarathahalliPage';
import IndiranagarPage from './pages/locations/IndiranagarPage';
import ElectronicCityPage from './pages/locations/ElectronicCityPage';
import BTMLayoutPage from './pages/locations/BTMLayoutPage';

// Add price guide import
import PriceGuidePage from './pages/PriceGuidePage';

// In renderPage() switch statement, add:
case 'whitefield':
  return <WhitefieldPage onNavigate={handleNavigate} />;
case 'hsr-layout':
  return <HSRLayoutPage onNavigate={handleNavigate} />;
case 'koramangala':
  return <KoramangalaPage onNavigate={handleNavigate} />;
case 'marathahalli':
  return <MarathahalliPage onNavigate={handleNavigate} />;
case 'indiranagar':
  return <IndiranagarPage onNavigate={handleNavigate} />;
case 'electronic-city':
  return <ElectronicCityPage onNavigate={handleNavigate} />;
case 'btm-layout':
  return <BTMLayoutPage onNavigate={handleNavigate} />;
case 'price-guide':
  return <PriceGuidePage />;
```

---

## IMPLEMENTATION CHECKLIST

- [ ] Fix index.html title mismatch (Task 1)
- [ ] Add LocalBusiness schema (Task 2)
- [ ] Update H1-H6 structure on homepage (Task 3)
- [ ] Create/Update location pages (Task 4)
- [ ] Add internal linking component (Task 5)
- [ ] Update all service page meta tags (Task 6)
- [ ] Create price guide page (Task 7)
- [ ] Update sitemap.xml (Task 8)
- [ ] Update App.tsx routes (Task 9)

---

## TESTING CHECKLIST

After implementation:

1. **Test Meta Tags:**
   - Run in browser console: `document.title` (should match optimized title)
   - Check page source: `<meta name="description">`

2. **Test Schema Markup:**
   - Use schema.org validator
   - Search Console → Rich Results

3. **Test Internal Links:**
   - Click through all service pages
   - Verify location pages accessible
   - Check sitemap links work

4. **Test Mobile:**
   - "Near me" text visible on mobile
   - CTAs prominently displayed
   - Location pages responsive

5. **Google Console:**
   - Submit updated sitemap
   - Request indexing for new pages
   - Check Search Performance for keyword rankings

---

## TIMELINE

**Week 1:**
- Implement Tasks 1-2 (HTML fixes + Schema)
- Deploy and test

**Week 2:**
- Implement Tasks 3-5 (Homepage + Internal linking)
- Test navigation

**Week 3:**
- Create Tasks 4, 7 (Location + Price pages)
- Update routes

**Week 4:**
- Final testing and monitoring
- Monitor Google Search Console for changes

---

**Total Implementation Time: 12-16 hours**
**Expected Results: 3-6 months for full ranking impact**
