export function onRequest({ request }, next) {
  return next().then(response => {
    // Solo aplicar headers a rutas dinámicas (como la página de contacto)
    // Las rutas estáticas ya tendrán headers del archivo _headers
    
    // Verificar si es una ruta dinámica (podemos asumir que la página de contacto lo es)
    const url = new URL(request.url);
    if (url.pathname === '/contact' || url.pathname.startsWith('/contact/')) {
      // Clonar la respuesta para poder modificarla
      const newResponse = new Response(response.body, response);
      
      // Añadir headers de seguridad
      newResponse.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' blob:; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' https://api.resend.com https://prod.spline.design https://unpkg.com https://*.cloudflare.com https://cloudflareinsights.com https://static.cloudflareinsights.com; frame-src 'none'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests;");
      newResponse.headers.set('Strict-Transport-Security', "max-age=31536000; includeSubDomains; preload");
      newResponse.headers.set('Cross-Origin-Opener-Policy', "same-origin");
      newResponse.headers.set('X-Frame-Options', "DENY");
      newResponse.headers.set('X-Content-Type-Options', "nosniff");
      newResponse.headers.set('X-XSS-Protection', "0");
      newResponse.headers.set('Referrer-Policy', "strict-origin-when-cross-origin");
      newResponse.headers.set('Permissions-Policy', "accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()");
      
      return newResponse;
    }
    
    // Para otras rutas, devolver la respuesta sin modificar
    return response;
  }).catch(error => {
    console.error('Error en middleware:', error);
    return new Response('Error interno del servidor', { status: 500 });
  });
}
