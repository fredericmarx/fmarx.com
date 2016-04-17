(() => {
  // Update 'version' if you need to refresh the cache
  const cacheVersion = '2.0.3'; // gets replaced with package.version
  const alwaysCache = [
    '/',
    '/main.css'
  ];

  // Store core files in a cache (including a page to display when offline)
  const updateStaticCache = () =>
    caches.open(cacheVersion)
      .then((cache) => cache.addAll(alwaysCache));


  self.addEventListener('install', (e) => {
    e.waitUntil(updateStaticCache());
  });

  self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys()
      // Remove caches whose name is no longer valid
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.indexOf(cacheVersion) !== 0)
          .map((key) => caches.delete(key))
        )
      )
    );
  });

  self.addEventListener('fetch', (e) => {
    let request = e.request;

    // Always fetch non-GET requests from the network
    if (request.method !== 'GET') {
      e.respondWith(fetch(request).catch(() => caches.match('/offline.html')));
      return;
    }

    // For HTML requests, try the network first, fall back to the cache, finally the offline page
    if (request.headers.get('Accept').indexOf('text/html') !== -1) {
      // Fix for Chrome bug: https://code.google.com/p/chromium/issues/detail?id=573937
      if (request.mode !== 'navigate') {
        request = new Request(request.url, {
          method: 'GET',
          headers: request.headers,
          mode: request.mode === 'navigate' ? 'cors' : request.mode,
          credentials: request.credentials,
          redirect: request.redirect
        });
      }

      e.respondWith(
        fetch(request)
          .then((response) => {
            // Stash a copy of this page in the cache
            const copy = response.clone();

            caches.open(cacheVersion)
            .then((cache) => {
              cache.put(request, copy);
            });

            return response;
          })

          .catch(() => caches.match(request)
            .then((response) => response || caches.match('/offline'))
          )
      );
      return;
    }
  });

})();
