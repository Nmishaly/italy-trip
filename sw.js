/* Service worker for the Engel-Italy trip app.
   Intentionally minimal: it exists to (a) satisfy the PWA install criteria and
   (b) handle notification clicks so tapping a notification focuses the app.
   It deliberately has NO fetch handler — data offline-caching is done in-page via
   localStorage, and a caching SW here would fight the app's own update flow. */
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const target = (e.notification.data && e.notification.data.tab) || 'board';
  e.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of all) {
      if ('focus' in c) { try { c.postMessage({ type: 'open-tab', tab: target }); } catch (_) {} return c.focus(); }
    }
    if (self.clients.openWindow) return self.clients.openWindow('./#' + target);
  })());
});
