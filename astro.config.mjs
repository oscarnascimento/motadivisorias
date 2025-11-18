import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  // GitHub Pages configuration
  site: 'https://oscarnascimento.github.io',
  base: '/motadivisorias',

  // Use static output for all builds
  output: 'static',
  build: {
    format: 'file'
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['flyonui']
    },
    build: {
      rollupOptions: {
        external: []
      }
    }
  },
  integrations: [],
  // Optimize output for production builds
  ...(isProduction && {
    compressHTML: true,
    build: {
      inlineStylesheets: 'auto',
      format: 'file'
    }
  })
});
