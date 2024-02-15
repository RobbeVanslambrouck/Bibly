/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />
import { build, files, version } from '$service-worker'

declare let self: ServiceWorkerGlobalScope

// unique cache name 
const CACHE = `cache-${version}`;

const ASSETS = [
    ...build, // the app itself 
    ...files, // everything in `static`
]


// install service worker

self.addEventListener('install', (event) => {
    event.waitUntil(addFilesToCache());

    async function addFilesToCache() {
        const cache = await caches.open(CACHE);
        await cache.addAll(ASSETS);
    }

})
// activate service worker 

self.addEventListener('activate', (event) => {
    event.waitUntil(deleteOldCache());

    async function deleteOldCache() {
        for (const key of await caches.keys()) {
            if (key !== CACHE) {
                await caches.delete(key);
            }
        }

    }
})
// listen to fetch events 

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    event.respondWith(respond());

    async function respond() {
        const url = new URL(event.request.url);
        const cache = await caches.open(CACHE);

        if (ASSETS.includes(url.pathname)) {
            const response = await cache.match(url.pathname);
            if (response) return response;
        }

        try {
            const response = await fetch(event.request);

            if (!(response instanceof Response)) {
                throw new Error('invalid response form fetch')
            }
            if (response.status === 200) {
                cache.put(event.request, response.clone());
            }
            return response
        } catch (err) {
            const response = await cache.match(event.request);

            if (response) return response
            return new Response('Not found', { status: 404 })
        }
    }
})