

this.addEventListener('install', function(event) {
  /*event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/src/',
        '/src/index.html',
        '/src/style.css',
        '/src/app.js',
        '/src/image-list.js',
        '/src/star-wars-logo.jpg',
        '/src/gallery/',
        '/src/gallery/bountyHunters.jpg',
        '/src/gallery/myLittleVader.jpg',
        '/src/gallery/snowTroopers.jpg'
      ]);
    })
  );*/
console.log("installing");
});

/*this.addEventListener('fetch', function(event) {
  var response;
  var cachedResponse = caches.match(event.request).catch(function() {
    return fetch(event.request);
  }).then(function(r) {
    response = r;
    caches.open('v1').then(function(cache) {
      cache.put(event.request, response);
    });  
    return response.clone();
  }).catch(function() {
    return caches.match('/sw-test/gallery/myLittleVader.jpg');
  });
});*/

this.addEventListener('fetch', function(event) {
  if (/\.jpg$/.test(event.request.url)) {
    event.respondWith(
      fetch('https://www.google.co.uk/logos/doodles/2014/60th-anniversary-of-the-unveiling-of-the-first-routemaster-bus-4922931108904960.3-hp.gif', {
        mode: 'no-cors'
      })
    );
  }
});
