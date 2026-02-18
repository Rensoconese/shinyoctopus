globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_5mYLDON5.mjs';
import './chunks/astro/server_DSLlg3OJ.mjs';
import { s as sequence } from './chunks/index_BWVoepeD.mjs';

// Función para generar un nonce aleatorio base64
function generateNonce() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode.apply(null, array));
}

function onRequest$2({ request }, next) {
  // Generar un nonce único para esta solicitud
  const nonce = generateNonce();
  
  return next().then(response => {
    // Solo aplicar headers a rutas dinámicas (como la página de contacto)
    // Las rutas estáticas ya tendrán headers del archivo _headers
    
    // Verificar si es una ruta dinámica (podemos asumir que la página de contacto lo es)
    const url = new URL(request.url);
    if (url.pathname === '/contact' || url.pathname.startsWith('/contact/')) {
      // Obtener el cuerpo de la respuesta como texto
      return response.text().then(text => {
        // Reemplazar todos los scripts inline con el atributo nonce
        let modifiedText = text.replace(/<script([^>]*)>/g, `<script nonce="${nonce}"$1>`);
        
        // Clonar la respuesta para poder modificarla
        const newResponse = new Response(modifiedText, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
        
        // Añadir headers de seguridad con el nonce generado
        newResponse.headers.set('Content-Security-Policy', 
          `default-src 'self'; ` +
          `script-src 'nonce-${nonce}' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com https://unpkg.com 'sha256-cBVrusr2PR1XcMX+BKTkc9l1M8TByJzbifBxQQlplQY=' 'sha256-CDe7I5zev8hYxsFkEMrjck6U7gfCS0LW/uufeTgtC0g='; ` +
          `style-src 'self' 'unsafe-inline' blob:; ` +
          `img-src 'self' data: blob:; ` +
          `font-src 'self'; ` +
          `connect-src 'self' https://api.resend.com https://prod.spline.design https://unpkg.com https://*.cloudflare.com https://cloudflareinsights.com https://static.cloudflareinsights.com; ` +
          `frame-src 'none'; ` +
          `object-src 'none'; ` +
          `base-uri 'none'; ` +
          `frame-ancestors 'none'; ` +
          `form-action 'self'; ` +
          `upgrade-insecure-requests; ` +
          `report-uri https://shinyoctopus.report-uri.com/r/d/csp/enforce;`);
        
        newResponse.headers.set('Strict-Transport-Security', "max-age=31536000; includeSubDomains; preload");
        newResponse.headers.set('Cross-Origin-Opener-Policy', "same-origin");
        newResponse.headers.set('X-Frame-Options', "DENY");
        newResponse.headers.set('X-Content-Type-Options', "nosniff");
        newResponse.headers.set('X-XSS-Protection', "0");
        newResponse.headers.set('Referrer-Policy', "strict-origin-when-cross-origin");
        newResponse.headers.set('Permissions-Policy', "accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()");
        
        return newResponse;
      });
    }
    
    // Para otras rutas, devolver la respuesta sin modificar
    return response;
  }).catch(error => {
    console.error('Error en middleware:', error);
    return new Response('Error interno del servidor', { status: 500 });
  });
}

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	onRequest$2
	
);

export { onRequest };
