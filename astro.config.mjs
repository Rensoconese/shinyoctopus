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
      minify: 'esbuild',
      // Configuración para CSS crítico (Punto 3)
      cssCodeSplit: true,
      cssMinify: 'lightningcss'
    },
    // Configuración de LightningCSS
    css: {
      transformer: "lightningcss",
      lightningcss: {
        // Punto 1: Transformaciones automáticas de CSS moderno
        minify: true,
        browserslist: ">= 0.25%",
        // Habilitar transformaciones automáticas
        drafts: {
          nesting: true,
          customMedia: true
        },
        // Comprimir clases CSS
        cssModules: {
          pattern: "shiny_[hash]"
        },
        // Punto 2: Optimización de URL de imágenes en CSS
        cssUrl: {
          process: true,
          rebase: true
        },
        // Punto 6: Compresión avanzada
        targets: {
          // Compatibilidad con navegadores modernos
          safari: 13,
          ios_saf: 13,
          edge: 90,
          firefox: 90,
          chrome: 90
        },
        // Eliminar comentarios y optimizar valores
        removeComments: "all",
        unusedSymbols: []
      }
    }
  },
});