self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
          '/Gugu/',  // Update this path
          '/Gugu/index.html',  // Update this path
          '/Gugu/styles/styles.css',  // Update this path
          '/Gugu/scripts/script.js',  // Update this path
          '/Gugu/favicons/favicon-192x192.png',  // Update this path
          '/Gugu/favicons/favicon-512x512.png'  // Update this path
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
