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
      src: ['assets/src/sass/global.scss', 'assets/src/sass/gutenberg-editor-styles.scss'],
      dest: 'assets/dist/css'
    },
    scripts: {
      src: ['assets/src/js/front-end.js', 'assets/src/js/gutenberg-editor.js'],
      dest: 'assets/dist/js'
    }
  },

  // Files to watch for BrowserSync
  watchFiles: [
    '**/*.php',
    'assets/dist/css/*.css',
    'assets/dist/js/*.js'
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