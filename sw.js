var C='companion-v1';
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'])}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request).then(function(r){return r||caches.match('./index.html')})}));
});
