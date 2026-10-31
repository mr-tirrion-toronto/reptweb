self.addEventListener('push',e=>{let d={};try{d=e.data.json()}catch(_){}
e.waitUntil((async()=>{const l=await clients.matchAll({type:'window'});if(l.some(c=>c.visibilityState==='visible'))return;
await self.registration.showNotification(d.title||'New message',{body:d.body||'',icon:'logo.webp',badge:'favicon.png',tag:d.tag,renotify:true,data:{url:d.url||'/'}})})())});
self.addEventListener('notificationclick',e=>{e.notification.close();const u=new URL(e.notification.data.url,self.registration.scope).href;
e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{for(const c of l){if('focus' in c){if(c.navigate)c.navigate(u);return c.focus()}}return clients.openWindow(u)}))});
