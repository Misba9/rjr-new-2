# Quick Start & Deployment Guide
**RJR Safety Nets - Testing & Launch Instructions**

---

## 🚀 Local Development

### 1. Install Dependencies
```powershell
cd "C:\Users\new\Desktop\New folder\rjr-safety-nets-v2\project"
npm install
```

### 2. Run Development Server
```powershell
npm run dev
```
- Opens at `http://localhost:5173`
- Hot reload enabled for instant changes

### 3. Test Key Features
**Navigation:**
- Click through all service pages
- Test location pages via Footer links
- Verify Services dropdown works on mobile/desktop

**SEO Verification:**
- Right-click → Inspect → Elements tab
- Check `<head>` for:
  - Title tags
  - Meta description
  - Canonical URL
  - Open Graph tags
  - JSON-LD schema scripts

**Performance Check:**
- Open DevTools → Network tab
- Verify hero images load with priority
- Check gallery images lazy load
- Monitor LCP time (should be < 2.5s)

---

## 🔍 Pre-Deployment Checklist

### Build Test
```powershell
npm run build
```
✅ Should complete without errors
✅ Check `dist/` folder is created
✅ Verify file sizes are optimized

### Preview Production Build
```powershell
npm run preview
```
- Test at `http://localhost:4173`
- Verify all pages work in production mode

### SEO Validation
**Google Rich Results Test:**
1. Build and deploy to staging
2. Visit: https://search.google.com/test/rich-results
3. Enter each page URL
4. Verify schema validation (LocalBusiness, Service, FAQPage)

**Mobile-Friendly Test:**
1. Visit: https://search.google.com/test/mobile-friendly
2. Test homepage and key service pages
3. Verify "Page is mobile-friendly" result

**PageSpeed Insights:**
1. Visit: https://pagespeed.web.dev/
2. Test homepage, balcony page, location pages
3. Target: 90+ mobile, 95+ desktop

---

## 📦 Deployment Steps

### Option 1: Netlify (Recommended)
```powershell
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

**Netlify Configuration:**
- Build command: `npm run build`
- Publish directory: `dist`
- Domain: Point to `www.rjrsafetynets.in`

**Redirects & Headers:**
Create `public/_redirects`:
```
# Force HTTPS
http://rjrsafetynets.in/* https://www.rjrsafetynets.in/:splat 301!
http://www.rjrsafetynets.in/* https://www.rjrsafetynets.in/:splat 301!

# Non-www to www
https://rjrsafetynets.in/* https://www.rjrsafetynets.in/:splat 301!

# SPA fallback
/*    /index.html   200
```

Create `public/_headers`:
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  
/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

### Option 2: Vercel
```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Option 3: Manual FTP/cPanel
1. Run `npm run build`
2. Upload contents of `dist/` folder to public_html
3. Ensure `.htaccess` has proper redirects (see below)

---

## ⚙️ Server Configuration

### Apache `.htaccess` (for cPanel/shared hosting)
```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Force www
RewriteCond %{HTTP_HOST} !^www\.
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# SPA routing - all requests to index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/avif "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-Content-Type-Options "nosniff"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### Nginx Configuration
```nginx
server {
    listen 443 ssl http2;
    server_name www.rjrsafetynets.in;

    # SSL configuration
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    root /var/www/rjrsafetynets/dist;
    index index.html;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|webp|avif)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}

# Redirect non-www to www
server {
    listen 443 ssl http2;
    server_name rjrsafetynets.in;
    return 301 https://www.rjrsafetynets.in$request_uri;
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name rjrsafetynets.in www.rjrsafetynets.in;
    return 301 https://www.rjrsafetynets.in$request_uri;
}
```

---

## 🔧 Post-Deployment Tasks

### 1. Verify Live Site
- [ ] Visit https://www.rjrsafetynets.in
- [ ] Test all pages load correctly
- [ ] Verify HTTPS works (padlock icon)
- [ ] Test on mobile devices
- [ ] Check Forms and CTAs work

### 2. Google Search Console Setup
```
1. Go to: https://search.google.com/search-console
2. Add property: www.rjrsafetynets.in
3. Verify ownership (DNS TXT record or HTML file)
4. Submit sitemap: https://www.rjrsafetynets.in/sitemap.xml
5. Request indexing for key pages
```

### 3. Google Analytics 4
```
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to src/main.tsx or index.html
4. Verify data collection within 24 hours
```

### 4. Google Business Profile
- [ ] Claim/verify listing
- [ ] Add website URL
- [ ] Upload 20+ photos
- [ ] Complete all sections
- [ ] Set service areas (Bangalore localities)
- [ ] Create first post

### 5. SSL Certificate Check
```powershell
# Test SSL configuration
https://www.ssllabs.com/ssltest/
```
Target: A+ rating

### 6. Speed Test
```
Run on:
- PageSpeed Insights
- GTmetrix
- WebPageTest
```

### 7. Sitemap Ping (Optional)
```
https://www.google.com/ping?sitemap=https://www.rjrsafetynets.in/sitemap.xml
https://www.bing.com/ping?sitemap=https://www.rjrsafetynets.in/sitemap.xml
```

---

## 📊 Monitoring Setup

### Weekly Checks
- [ ] Google Search Console: Index coverage
- [ ] GA4: Traffic trends
- [ ] GBP Insights: Views & actions
- [ ] Review new Google/Facebook reviews
- [ ] Check for 404 errors

### Monthly Tasks
- [ ] Run PageSpeed audit
- [ ] Update blog content (2-4 posts)
- [ ] Refresh GBP photos
- [ ] Analyze keyword rankings
- [ ] Competitor analysis
- [ ] Backlink monitoring

---

## 🐛 Troubleshooting

### Issue: Pages return 404 on refresh
**Solution:** Ensure SPA routing is configured (see .htaccess or nginx config above)

### Issue: Slow initial load
**Solution:**
1. Run `npm run build` - check bundle size
2. Consider code splitting if bundle > 500KB
3. Verify CDN is caching assets
4. Enable compression (gzip/brotli)

### Issue: Schema validation errors
**Solution:**
1. Visit Google Rich Results Test
2. Copy error message
3. Fix schema in respective page's `addSchemaMarkup` call
4. Re-test

### Issue: Images not optimized
**Solution:**
1. Convert to WebP: Use https://squoosh.app/
2. Batch convert: Use imagemin or sharp (Node.js)
3. Add responsive images (srcset)

---

## 📈 Next Steps After Launch

### Week 1
- Monitor Google Search Console for index status
- Set up Google Ads (if budget allows)
- Create 2 social media posts
- Reach out to 5 local directories

### Week 2-4
- Publish 4 blog posts
- Collect 20+ Google reviews
- Submit to 15 business directories
- Create video testimonials

### Month 2
- Analyze GA4 data
- Adjust SEO strategy based on rankings
- Launch link building campaign
- Optimize underperforming pages

---

## 💡 Quick Wins Checklist

**Immediate (Day 1):**
- [x] Site live and accessible
- [x] HTTPS working
- [x] Sitemap submitted to GSC
- [x] GA4 installed
- [x] GBP updated

**Week 1:**
- [ ] 50+ photos on GBP
- [ ] 10 Google reviews
- [ ] 2 blog posts published
- [ ] 5 directory listings

**Month 1:**
- [ ] 100+ Google reviews
- [ ] 8-10 blog posts live
- [ ] 20+ backlinks acquired
- [ ] First 1,000 organic visitors

---

**Document Status:** Launch Ready
**Last Updated:** November 26, 2025
