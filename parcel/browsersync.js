#!/usr/bin/env node
const browserSync = require('browser-sync').create();
const config = require('../parcel.config.js');

browserSync.init({
  proxy: config.proxyUrl,
  files: [
    {
      match: ['assets/dist/css/*.css'],
      fn: (event, file) => {
        if (event === 'change') {
          browserSync.reload('*.css');
        }
      }
    },
    {
      match: ['assets/dist/js/*.js'],
      fn: (event, file) => {
        if (event === 'change') {
          browserSync.reload();
        }
      }
    },
    '**/*.php'
  ],
  https: {
    key: config.ssl.key,
    cert: config.ssl.cert,
  },
  logLevel: 'debug',
  open: false,
  notify: true
});
