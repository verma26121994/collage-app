const CACHE='college-lesson-hub-v2-1';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return; if(e.request.url.includes('docs.google.com'))return; e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});
