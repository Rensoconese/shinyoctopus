import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://shinyoctopus.studio', // Your actual site URL
  output: 'server', // Necesario para Astro Server Actions
  
  // Configurar para Cloudflare Pages
  adapter: await import('@astrojs/cloudflare').then(m => m.default()),
  
  // Integración de sitemap
  integrations: [sitemap()],
  
  vite: {
    // Solo exponer variables con el prefijo PUBLIC_
    envPrefix: 'PUBLIC_',
    // Configuración de compilación mínima
    build: {
      sourcemap: false,
      minify: 'esbuild'
    }
  },
});