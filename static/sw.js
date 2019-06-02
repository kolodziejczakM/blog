/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

self.addEventListener('install', evt => {
    console.log('Service worker has been installed: ', evt);
});

self.addEventListener('activate', evt => {
    console.log('Service worker has been activated: ', evt);
});
