import fs from 'node:fs';

const HOST = 'shinyoctopus.studio';
const KEY = process.env.INDEXNOW_KEY;

if (!KEY) {
  console.warn('[indexnow] INDEXNOW_KEY no seteada en env, skip');
  process.exit(0);
}

const sitemapPath = './dist/sitemap-0.xml';
if (!fs.existsSync(sitemapPath)) {
  console.warn(`[indexnow] ${sitemapPath} no existe, skip`);
  process.exit(0);
}

const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urls.length === 0) {
  console.warn('[indexnow] no URLs encontradas en sitemap-0.xml, skip');
  process.exit(0);
}

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: urls,
};

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});

const ok = res.status >= 200 && res.status < 300;
console.log(`[indexnow] ${res.status} ${res.statusText} (${urls.length} URLs)`);
if (!ok) {
  const text = await res.text().catch(() => '');
  console.error(`[indexnow] body: ${text}`);
  process.exit(1);
}
