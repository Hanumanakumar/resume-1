self.addEventListener(install, event=>{
event.waitUntill(
caches.open('v1').then(cache=>{
return cache.All([
'index.html'
]);
});
)
});
