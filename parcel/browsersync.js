#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const browserSync = require('browser-sync').create();
const config = require('../parcel.config.js');

// Derive theme slug from directory name (matches WordPress block namespace)
const themeSlug = path.basename(path.join(__dirname, '..'));

browserSync.init({
  proxy: config.proxyUrl,
  files: [
    {
      match: ['assets/dist/css/*.css'],
      fn: (event) => {
        if (event === 'change') {
          browserSync.reload('*.css');
        }
      }
    },
    {
      match: ['blocks/*/build/*.css'],
      fn: (event, file) => {
        if (event !== 'change' && event !== 'add') return;

        const parts = file.split(path.sep);
        const blocksIdx = parts.indexOf('blocks');
        if (blocksIdx === -1) return;

        const blockName = parts[blocksIdx + 1];
        const fileName = parts[parts.length - 1];
        if (fileName.includes('-rtl')) return;
        const isEditor = fileName === 'index.css';
        const suffix = isEditor ? 'editor-style' : 'style';
        const styleId = `${themeSlug}-${blockName}-${suffix}-inline-css`;

        const cssContent = fs.readFileSync(path.resolve(file), 'utf8');
        browserSync.sockets.emit('inline:css', { id: styleId, css: cssContent });
        console.log(`[Browsersync] Emitted inline CSS for #${styleId}`);
      }
    },
    {
      match: ['assets/dist/js/*.js'],
      fn: (event) => {
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
  rewriteRules: [
    {
      match: /<\/body>/i,
      fn: () => `<script>
(function waitForBS() {
  var bs = window.___browserSync___;
  if (!bs || !bs.socket) return setTimeout(waitForBS, 50);
  console.log('[BS] Inline CSS injection listener ready');
  bs.socket.on('inline:css', function(data) {
    console.log('[BS] Received inline:css for #' + data.id);
    var el = document.getElementById(data.id);
    if (el && el.tagName === 'STYLE') {
      el.textContent = data.css;
      console.log('[BS] Injected CSS into #' + data.id);
    } else {
      console.warn('[BS] Style element not found: #' + data.id);
    }
  });
})();
</script></body>`
    }
  ],
  logLevel: 'debug',
  open: false,
  notify: true
});
