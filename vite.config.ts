import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { generateSeoFiles } from './scripts/generate-seo.mjs';

function seoFilesPlugin(): Plugin {
  let generated = false;

  const run = async () => {
    if (generated) return;
    generated = true;
    await generateSeoFiles();
  };

  return {
    name: 'generate-seo-files',
    async buildStart() {
      await run();
    },
    async configureServer() {
      generated = false;
      await run();
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), seoFilesPlugin()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-helmet-async'],
  },
  esbuild: {
    legalComments: 'none',
    ...(mode === 'production' ? { drop: ['console', 'debugger'] as const } : {}),
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 600,
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          // Keep react, react-dom, and react-helmet-async in one chunk.
          // Splitting helmet out creates a circular chunk (react-vendor <-> helmet)
          // that crashes at runtime: "Cannot access 'f' before initialization".
          if (
            id.includes('react-dom') ||
            id.includes('react-helmet-async') ||
            id.includes('/react/') ||
            id.includes('\\react\\')
          ) {
            return 'react-vendor';
          }
          if (id.includes('lucide-react')) {
            return 'icons';
          }
          if (id.includes('@fontsource')) {
            return 'fonts';
          }
        },
      },
    },
  },
}));
