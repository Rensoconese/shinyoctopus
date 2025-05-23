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
    // Exponer las variables de entorno de RESEND
    envPrefix: ['PUBLIC_', 'RESEND_'],
  },
});