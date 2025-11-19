import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  // GitHub Pages configuration with custom domain
  site: 'https://motadivisorias.com.br',

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
  integrations: [sitemap()],
  // Optimize output for production builds
  ...(isProduction && {
    compressHTML: true,
    build: {
      inlineStylesheets: 'auto',
      format: 'file'
    }
  })
});
