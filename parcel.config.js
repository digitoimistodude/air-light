// Parcel configuration for air-light theme
const path = require('path');

// Project-specific configuration
const config = {
  // Theme directory
  themeDir: './',
  
  // Proxy URL for BrowserSync
  proxyUrl: 'https://airdev.test',
  
  // SSL certificates
  ssl: {
    key: '/var/www/certs/localhost-key.pem',
    cert: '/var/www/certs/localhost.pem'
  },
  
  // Source and destination paths
  paths: {
    styles: {
      src: ['sass/global.scss', 'sass/gutenberg-editor-styles.scss'],
      dev: 'assets',
      prod: 'assets'
    },
    scripts: {
      src: ['js/src/front-end.js', 'js/src/gutenberg-editor.js'],
      dev: 'assets/js',
      prod: 'assets/js'
    }
  },
  
  // Files to watch for BrowserSync
  watchFiles: [
    '**/*.php',
    'assets/*.css',
    'assets/js/*.js'
  ],
  
  // BrowserSync options
  browserSync: {
    open: false,
    notify: true,
    reloadDebounce: 100,
    logLevel: 'info'
  }
};

module.exports = config;