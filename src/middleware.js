// Función para generar un nonce aleatorio base64
function generateNonce() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode.apply(null, array));
}

export function onRequest({ request }, next) {
  // Generar un nonce único para esta solicitud
  const nonce = generateNonce();

  return next().then(response => {
    const url = new URL(request.url);
    if (url.pathname === '/contact' || url.pathname.startsWith('/contact/')) {
      // Obtener el cuerpo de la respuesta como texto
      return response.text().then(text => {
        // Reemplazar scripts con nonce, excepto los que ya tienen src externo
        // (los scripts externos se autorizan via CSP script-src, no via nonce)
        let modifiedText = text.replace(/<script(?![^>]*src=)([^>]*)>/g, `<script nonce="${nonce}"$1>`);

        // Clonar la respuesta para poder modificarla
        const newResponse = new Response(modifiedText, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });

        // Añadir headers de seguridad con el nonce generado
        newResponse.headers.set('Content-Security-Policy',
          `default-src 'self'; ` +
          `script-src 'self' 'nonce-${nonce}' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://static.cloudflareinsights.com https://unpkg.com https://challenges.cloudflare.com; ` +
          `style-src 'self' 'unsafe-inline' blob: https://use.typekit.net; ` +
          `img-src 'self' data: blob: https://p.typekit.net; ` +
          `font-src 'self' https://use.typekit.net https://p.typekit.net; ` +
          `connect-src 'self' https://api.resend.com https://prod.spline.design https://unpkg.com https://*.cloudflare.com https://cloudflareinsights.com https://static.cloudflareinsights.com https://use.typekit.net https://p.typekit.net; ` +
          `frame-src https://challenges.cloudflare.com; ` +
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
        newResponse.headers.set('Permissions-Policy', "accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=*, publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=*");

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
