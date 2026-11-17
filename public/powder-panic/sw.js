// Powder Panic's service worker (build 127). The game page is fetched network-first, so a new deploy shows up straight away,
// and the copy kept from the last visit is used when there's no network (offline play). The icons and the manifest come from
// the cache first. Everything stays inside /powder-panic/.
const BUILD = 127;
const CACHE = `powder-panic-${BUILD}`;
const BASE = new URL('./', self.location).pathname;   // /powder-panic/
const ASSETS = ['./', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'favicon-32.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(ASSETS.map(a => c.add(a)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {   // drop older builds' caches
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('powder-panic-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request, url = new URL(r.url);
  if (r.method !== 'GET' || url.origin !== self.location.origin || !url.pathname.startsWith(BASE)) return;
  const page = r.mode === 'navigate' || url.pathname === BASE || url.pathname === BASE + 'index.html';
  if (page) {   // the game: the network first, the kept copy offline
    e.respondWith(fetch(r).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./', copy)); } return res; })
      .catch(() => caches.open(CACHE).then(c => c.match('./')).then(m => m || Response.error())));
    return;
  }
  e.respondWith(caches.open(CACHE).then(c => c.match(r).then(m => m || fetch(r).then(res => { if (res.ok) c.put(r, res.clone()); return res; }))));
});
