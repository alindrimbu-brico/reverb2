import { NextResponse } from "next/server";

const SW_CODE = `/* Reverb Studio AI — Service Worker dedicat (/studio) */
const CACHE_NAME = 'reverb-studio-pwa-v4';
const OFFLINE_HTML = '<!doctype html><html lang="ro"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Fără conexiune · Reverb Studio AI</title><style>body{margin:0;font:16px/1.5 system-ui,sans-serif;background:#260840;color:#FFFFFF;display:flex;min-height:100vh;align-items:center;justify-content:center;text-align:center;padding:24px}img{width:72px;height:72px;border-radius:16px}h1{font-size:20px;margin:16px 0 8px}button{margin-top:16px;background:#F43F5E;color:#FFFFFF;border:0;border-radius:999px;padding:12px 24px;font-size:14px;font-weight:700;cursor:pointer}</style></head><body><div><img src="/icon-studio-192.png?v=3" alt=""><h1>Nu ai conexiune la internet</h1><p>Verifică conexiunea Wi-Fi sau datele mobile și încearcă din nou.</p><button onclick="location.reload()">Reîncearcă</button></div></body></html>';

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return Promise.resolve(false);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  var reqUrl = '';
  try {
    reqUrl = new URL(event.request.url).pathname;
  } catch (e) {}

  /* Network-only garantat pentru API-ul Studio (zero cache pe date confidențiale) */
  if (reqUrl.indexOf('/api/studio') === 0) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
    );
    return;
  }

  if (event.request.method !== 'GET' || event.request.mode !== 'navigate') {
    return;
  }
  event.respondWith(
    fetch(event.request, { cache: 'no-store' }).catch(function () {
      return new Response(OFFLINE_HTML, {
        headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
      });
    })
  );
});
`;

export async function GET() {
  return new NextResponse(SW_CODE, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Service-Worker-Allowed": "/studio",
    },
  });
}
