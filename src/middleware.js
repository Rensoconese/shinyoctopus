// CSP base directives — single source of truth
// _headers uses these same values for static pages
const CSP_BASE = {
  "default-src": "'self'",
  "style-src": "'self' 'unsafe-inline' blob:",
  "img-src": "'self' data: blob:",
  "font-src": "'self'",
  "connect-src": "'self' https://api.resend.com https://prod.spline.design https://unpkg.com https://*.cloudflare.com https://cloudflareinsights.com https://static.cloudflareinsights.com",
  "frame-src": "'none'",
  "object-src": "'none'",
  "base-uri": "'none'",
  "frame-ancestors": "'none'",
  "form-action": "'self'",
};

const CSP_SCRIPT_SOURCES = [
  "'self'",
  "'unsafe-inline'",
  "'unsafe-eval'",
  "'wasm-unsafe-eval'",
  "https://static.cloudflareinsights.com",
  "https://unpkg.com",
];

const CSP_REPORT_URI = "https://shinyoctopus.report-uri.com/r/d/csp/enforce";

// Read script hashes from _headers at build time isn't possible,
// so we extract them from the response's existing CSP header set by _headers
function extractHashesFromCSP(cspHeader) {
  if (!cspHeader) return [];
  const scriptMatch = cspHeader.match(/script-src\s+([^;]+)/);
  if (!scriptMatch) return [];
  const hashes = scriptMatch[1].match(/'sha256-[A-Za-z0-9+/=]+'/g);
  return hashes || [];
}

function buildCSP(nonce, scriptHashes) {
  const scriptSrc = [
    `'nonce-${nonce}'`,
    ...CSP_SCRIPT_SOURCES,
    ...scriptHashes,
  ].join(" ");

  const directives = Object.entries(CSP_BASE)
    .map(([key, val]) => `${key} ${val}`)
    .join("; ");

  return `${directives}; script-src ${scriptSrc}; upgrade-insecure-requests; report-uri ${CSP_REPORT_URI}; report-to csp-endpoint;`;
}

function generateNonce() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode.apply(null, array));
}

const SECURITY_HEADERS = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "Cross-Origin-Opener-Policy": "same-origin",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "X-XSS-Protection": "0",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Cross-Origin-Embedder-Policy": "credentialless",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Report-To": '{"group":"csp-endpoint","max_age":10886400,"endpoints":[{"url":"https://shinyoctopus.report-uri.com/r/d/csp/enforce"}]}',
  "Permissions-Policy": "accelerometer=(), autoplay=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()",
};

export function onRequest({ request }, next) {
  const nonce = generateNonce();

  return next().then(response => {
    const url = new URL(request.url);
    if (url.pathname === '/contact' || url.pathname.startsWith('/contact/')) {
      return response.text().then(text => {
        let modifiedText = text.replace(/<script([^>]*)>/g, `<script nonce="${nonce}"$1>`);

        const newResponse = new Response(modifiedText, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });

        // Extract hashes from the static _headers CSP so we don't duplicate them
        const existingCSP = response.headers.get('Content-Security-Policy');
        const scriptHashes = extractHashesFromCSP(existingCSP);

        newResponse.headers.set('Content-Security-Policy', buildCSP(nonce, scriptHashes));

        for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
          newResponse.headers.set(key, value);
        }

        return newResponse;
      });
    }

    return response;
  }).catch(error => {
    console.error('Error en middleware:', error);
    return new Response('Error interno del servidor', { status: 500 });
  });
}
