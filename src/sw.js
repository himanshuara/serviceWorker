

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
      fetch('http://www.html5rocks.com/en/tutorials/service-worker/introduction/images/sw-lifecycle.png', {
        mode: 'no-cors'
      })
    );
  }
});
