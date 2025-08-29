#!/usr/bin/env node

// BrowserSync script using project configuration
const browserSync = require('browser-sync').create();
const config = require('../parcel.config.js');

const bsConfig = {
  proxy: config.proxyUrl,
  files: config.watchFiles,
  https: {
    key: config.ssl.key,
    cert: config.ssl.cert
  },
  open: config.browserSync.open,
  notify: config.browserSync.notify,
  reloadDebounce: config.browserSync.reloadDebounce,
  logLevel: config.browserSync.logLevel
};

browserSync.init(bsConfig);

console.log(`BrowserSync started with proxy: ${config.proxyUrl}`);