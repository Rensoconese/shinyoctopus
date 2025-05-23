import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Necesario para Astro Server Actions
  
  // Configurar para Cloudflare Pages
  adapter: await import('@astrojs/cloudflare').then(m => m.default()),
  
  vite: {
    // Exponer las variables de entorno de RESEND
    envPrefix: ['PUBLIC_', 'RESEND_'],
  },
});