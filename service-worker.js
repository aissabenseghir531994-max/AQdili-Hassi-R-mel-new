const CACHE_NAME = "iqdili-hassi-ramel-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll([
        "/AQdili-Hassi-R-mel-new/",
        "/AQdili-Hassi-R-mel-new/index.html",
        "/AQdili-Hassi-R-mel-new/manifest.json"
      ])
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
