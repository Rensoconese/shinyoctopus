import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import fs from 'node:fs';
import path from 'node:path';

function readBlogLastmodMap() {
  const blogDir = path.resolve('./src/content/blog');
  const map = new Map();
  if (!fs.existsSync(blogDir)) return map;
  for (const f of fs.readdirSync(blogDir)) {
    if (!f.endsWith('.md')) continue;
    const content = fs.readFileSync(path.join(blogDir, f), 'utf8');
    const fm = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fm) continue;
    const pub = fm[1].match(/^pubDate:\s*['"]?([^'"\r\n]+?)['"]?\s*$/m)?.[1];
    const upd = fm[1].match(/^updatedDate:\s*['"]?([^'"\r\n]+?)['"]?\s*$/m)?.[1];
    const date = upd || pub;
    if (date && !isNaN(Date.parse(date))) {
      const slug = f.replace(/\.md$/, '');
      map.set(`/blog/${slug}/`, new Date(date).toISOString());
    }
  }
  return map;
}
const blogLastmod = readBlogLastmodMap();

// https://astro.build/config
export default defineConfig({
  site: 'https://shinyoctopus.studio', // Your actual site URL
  output: 'static', // En Astro v5, el modo 'static' funciona como el antiguo modo 'hybrid'
  
  // Configurar para Cloudflare Pages
  adapter: cloudflare(),
  
  // Compile image service (no sharp dependency needed)
  image: {
    service: { entrypoint: 'astro/assets/services/compile' },
  },

  // Integración de sitemap
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/contact/'),
      serialize(item) {
        const url = new URL(item.url);
        const lm = blogLastmod.get(url.pathname);
        if (lm) item.lastmod = lm;
        return item;
      },
    }),
  ],
  
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