self.addEventListener("install", event => {
    event.waitUntil(
      caches.open("v1").then(cache => {
        return cache.addAll([
          "/",
          "/index.html",
          "/images/manifest.json",
          "/images/android-icon-192x192.png" // Add your main icon here
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  