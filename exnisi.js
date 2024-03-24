async function cacheResources(resourceCacheName) {
  const cache = await caches.open(resourceCacheName);
  // You can then add or retrieve assets from the cache
  // For example, to add assets:
  // await cache.addAll(['/', '/styles/main.css', '/script/main.js']);
  
  // Or to fetch and add a single asset:
  // const response = await fetch('/example.png');
  // cache.put('/example.png', response);
}
