/* eslint-disable no-restricted-globals */

// Install
self.addEventListener('install', (event) => {
    console.log('[SW] Install');
    self.skipWaiting();
  });
  
  // Activate
  self.addEventListener('activate', (event) => {
    console.log('[SW] Activate');
    self.clients.claim();
  });
  
  // Fetch (네트워크 그대로 사용)
  self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
  });
  