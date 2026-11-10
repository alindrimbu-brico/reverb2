/* Reverb.ro & Reverb Studio AI — Service Worker pentru instalare PWA directă din buton (beforeinstallprompt) */
const CACHE_NAME = 'reverb-pwa-v3';
const OFFLINE_HTML = '<!doctype html><html lang="ro"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Fără conexiune · Reverb.ro</title><style>body{margin:0;font:16px/1.5 system-ui,sans-serif;background:#06090F;color:#F8FAFC;display:flex;min-height:100vh;align-items:center;justify-content:center;text-align:center;padding:24px}img{width:72px;height:72px;border-radius:16px}h1{font-size:20px;margin:16px 0 8px}button{margin-top:16px;background:#00E5FF;color:#06090F;border:0;border-radius:999px;padding:12px 24px;font-size:14px;font-weight:700;cursor:pointer}</style></head><body><div><img src="/icon-192.png?v=3" alt=""><h1>Nu ai conexiune la internet</h1><p>Verifică conexiunea Wi-Fi sau datele mobile și încearcă din nou.</p><button onclick="location.reload()">Reîncearcă</button></div></body></html>';

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET' || event.request.mode !== 'navigate') {
    return;
  }
  event.respondWith(
    fetch(event.request).catch(function () {
      return new Response(OFFLINE_HTML, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    })
  );
});
