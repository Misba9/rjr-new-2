/**
 * Optimize images: resize, compress JPEG/PNG, generate WebP, write dimensions meta.
 * Run: npm run optimize:images
 */
import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, extname, basename, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const TARGETS = [
  { dir: join(root, 'src/assets/images'), recursive: true },
  { dir: join(root, 'public/images'), recursive: false },
];

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const SKIP_NAMES = new Set(['README.md', 'index.ts', 'imageMeta.json']);

/** Max width by role heuristics */
function maxWidthFor(filePath, width) {
  const name = basename(filePath).toLowerCase();
  if (name.includes('logo') || name.includes('icon') || name.includes('btn')) return Math.min(width, 512);
  if (filePath.includes('slider-c') || name.includes('hero')) return Math.min(width, 1920);
  return Math.min(width, 1600);
}

function walk(dir, recursive, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    if (SKIP_NAMES.has(entry) || entry.startsWith('.')) continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (recursive) walk(full, true, out);
      continue;
    }
    const ext = extname(entry).toLowerCase();
    if (IMAGE_EXT.has(ext)) out.push(full);
  }
  return out;
}

async function optimizeFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  const meta = await sharp(filePath).metadata();
  const origW = meta.width || 1;
  const origH = meta.height || 1;
  const targetW = maxWidthFor(filePath, origW);
  const needsResize = targetW < origW;

  const pipeline = sharp(filePath).rotate();
  if (needsResize) {
    pipeline.resize({ width: targetW, withoutEnlargement: true });
  }

  const webpPath = filePath.replace(/\.(jpe?g|png|webp)$/i, '.webp');
  const isAlreadyWebp = ext === '.webp';

  // Write optimized WebP (always)
  const webpBuf = await pipeline
    .clone()
    .webp({ quality: 78, effort: 4 })
    .toBuffer();
  writeFileSync(webpPath, webpBuf);

  const webpMeta = await sharp(webpPath).metadata();

  // Recompress original JPEG/PNG when large or oversized
  let fallbackPath = filePath;
  if (!isAlreadyWebp) {
    const before = statSync(filePath).size;
    if (ext === '.png' && before > 200_000) {
      // Photos stored as PNG → JPEG fallback (much smaller) + keep webp primary
      const jpegPath = filePath.replace(/\.png$/i, '.jpg');
      const jpegBuf = await sharp(filePath)
        .rotate()
        .resize({ width: targetW, withoutEnlargement: true })
        .jpeg({ quality: 82, mozjpeg: true })
        .toBuffer();
      writeFileSync(jpegPath, jpegBuf);
      fallbackPath = jpegPath;
      // Remove huge PNG if we created jpeg sibling (except if same path)
      if (jpegPath !== filePath) {
        const { unlinkSync } = await import('node:fs');
        unlinkSync(filePath);
      }
    } else if (ext === '.jpg' || ext === '.jpeg') {
      const jpegBuf = await sharp(filePath)
        .rotate()
        .resize({ width: targetW, withoutEnlargement: true })
        .jpeg({ quality: 82, mozjpeg: true })
        .toBuffer();
      if (jpegBuf.length < before * 0.95 || needsResize) {
        writeFileSync(filePath, jpegBuf);
      }
    }
  }

  const fallbackMeta = await sharp(fallbackPath).metadata();
  const relWebp = '/' + relative(root, webpPath).replace(/\\/g, '/');
  const relFallback = '/' + relative(root, fallbackPath).replace(/\\/g, '/');

  // Keys usable from public/ or for docs — vite hashed URLs handled separately in index.ts
  return {
    source: relative(root, filePath).replace(/\\/g, '/'),
    webp: relative(root, webpPath).replace(/\\/g, '/'),
    fallback: relative(root, fallbackPath).replace(/\\/g, '/'),
    width: fallbackMeta.width || webpMeta.width || targetW,
    height: fallbackMeta.height || webpMeta.height || Math.round((origH / origW) * targetW),
    bytes: {
      webp: webpBuf.length,
      fallback: statSync(fallbackPath).size,
    },
    publicWebp: relWebp.startsWith('/public/') ? relWebp.replace(/^\/public/, '') : null,
    publicFallback: relFallback.startsWith('/public/') ? relFallback.replace(/^\/public/, '') : null,
  };
}

async function main() {
  const files = TARGETS.flatMap((t) => walk(t.dir, t.recursive));
  // Deduplicate (webp generated mid-run shouldn't reprocess)
  const unique = [...new Set(files)].filter((f) => !f.endsWith('.webp') || basename(dirname(f)) === 'images');

  // Prefer processing non-webp sources first; skip orphan webp that we'll regenerate
  const sources = unique.filter((f) => !f.endsWith('.webp'));

  console.log(`Optimizing ${sources.length} images…`);
  const results = [];
  for (const file of sources) {
    try {
      const r = await optimizeFile(file);
      results.push(r);
      const saved = `${(r.bytes.webp / 1024).toFixed(0)}KB webp`;
      console.log(`✓ ${r.fallback} → ${r.webp} (${r.width}×${r.height}, ${saved})`);
    } catch (err) {
      console.error(`✗ ${file}:`, err.message);
    }
  }

  const metaPath = join(root, 'src/assets/images/imageMeta.json');
  writeFileSync(metaPath, JSON.stringify({ generatedAt: new Date().toISOString(), images: results }, null, 2));
  console.log(`\nWrote ${metaPath} (${results.length} entries)`);

  // Public images meta for easy lookup by basename
  const publicMeta = {};
  for (const r of results) {
    if (r.publicWebp) {
      const key = basename(r.publicFallback || r.fallback).replace(/\.(jpe?g|png|webp)$/i, '');
      publicMeta[key] = {
        src: r.publicFallback,
        webp: r.publicWebp,
        width: r.width,
        height: r.height,
      };
    }
  }
  mkdirSync(join(root, 'src/constants'), { recursive: true });
  writeFileSync(
    join(root, 'src/constants/publicImageMeta.ts'),
    `/** Auto-generated by scripts/optimize-images.mjs — do not edit by hand */\n` +
      `export const publicImageMeta = ${JSON.stringify(publicMeta, null, 2)} as const;\n` +
      `export type PublicImageKey = keyof typeof publicImageMeta;\n`
  );
  console.log('Wrote src/constants/publicImageMeta.ts');
}

await main();
