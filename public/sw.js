console.log("hello sw")


let cacheData = "SMSPWAV1";
this.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/favicon.ico',
                '/manifest.json',
                '/static/js/vendors~main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/users',
                '/about',
                '/login',
                '/'
            ])
        })
    )
})
this.addEventListener("fetch", (e) => {
    if (!navigator.onLine) {
        e.respondWith(
            caches.match(e.request).then((res) => {
                if (res) {
                    return res;
                }
                let reqUrl = e.request.clone();
                fetch(reqUrl);
            })
        )
    }
})

