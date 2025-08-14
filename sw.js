const CACHE_NAME = 'gugu-v1';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        './',                     // root (index.html)
        './index.html',            // main page
        './styles/styles.css',     // CSS
        './scripts/script.js',     // JS
        './favicons/android-icon-192x192.png', // favicons
        './favicons/android-icon-512x512.png',
        './favicons/manifest.json' // manifest
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
