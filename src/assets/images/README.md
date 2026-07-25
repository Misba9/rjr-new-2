# Image assets

- **WebP-first** with JPEG/PNG fallbacks via `<picture>` (`OptimizedImage`, heroes)
- Intrinsic **width/height** on every `ImageAsset` (CLS)
- **Lazy loading** below the fold; hero slide 0 is eager + preloaded
- Home LCP preload is in `index.html`: `/images/balcony-safety-nets-05.webp`

## Commands

```bash
npm run optimize:images   # resize, compress, generate WebP + publicImageMeta.ts
```

## Layout

| Path | Role |
|------|------|
| `public/images/` | Site photos (JPEG + WebP) |
| `src/assets/images/` | Bundled service/about/logo images |
| `src/constants/publicImageMeta.ts` | Auto-generated dimensions for public images |
| `src/assets/images/index.ts` | `ImageAsset` registry used by the app |

Do not re-add unused folders (`slid/`, `slider/`, icon CTAs). Prefer WebP for new photos.
