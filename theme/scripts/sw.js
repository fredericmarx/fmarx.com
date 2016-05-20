const fontLocation = 'https://fmarx.com/fonts/'

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('fonts').then(cache => {
      return cache.addAll([
        fontLocation + 'nittigrotesk-bold-v20.woff2',
        fontLocation + 'nittigrotesk-normal-v20.woff2',
        fontLocation + 'nittigrotesk-normalitalic-v20.woff2'
      ]).then(() => self.skipWaiting())
    })
  )
})

self.addEventListener('fetch', event => {
  console.log(event.request.url)
})
