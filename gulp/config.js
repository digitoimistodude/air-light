const themeDir = './';

module.exports = {
  cleancss: {
    opts: {
      compatibility: '-properties.merging',
      level: {
        1: {
          optimizeFont: false,
          optimizeFontWeight: true,
          optimizeOutline: true,
          specialComments: false,
          removeQuotes: false,
          removeWhitespace: true,
          removeEmpty: true,
          tidyAtRules: true,
          tidyBlockScopes: true,
          tidySelectors: true,
          cleanupCharsets: true,
          replaceMultipleZeros: true,
          selectorsSortingMethod: 'standard'
        },
        2: {
          mergeSemantically: false,
          mergeMedia: false,
          mergeIntoShorthands: true,
          overrideProperties: true,
          removeEmpty: true,
          removeDuplicateRules: true,
          reduceNonAdjacentRules: true,
          removeDuplicateFontRules: true,
          removeDuplicateMediaBlocks: true,
          removeUnusedAtRules: false,
          restructureRules: false,
          urlQuotes: true
        }
      }
    }
  },
  rename: {
    min: {
      suffix: '.min'
    }
  },
  browsersync: {
    // Important! If src is wrong, styles will not inject to the browser
    src: [themeDir + 'css/**/*'],
    opts: {
      logLevel: 'debug',
      injectChanges: true,
      proxy: 'https://airdev.test',
      browser: 'Google Chrome',
      open: false,
      notify: true,
      // Generate with: mkdir -p /var/www/certs && cd /var/www/certs && mkcert localhost 192.168.x.xxx ::1
      https: {
        key: "/var/www/certs/localhost-key.pem",
        cert: "/var/www/certs/localhost.pem",
      }
    },
  },
  styles: {
    gutenberg: themeDir + 'sass/base/gutenberg.scss',
    src: themeDir + 'sass/*.scss',
    watch: themeDir + 'sass/**/*.{sass,scss}',
    watchprod: themeDir + 'css/dev/*.css',
    development: themeDir + 'css/dev/',
    production: themeDir + 'css/prod/',
    stylelint: {
      src: themeDir + 'sass/*/*.scss',
      opts: {
        fix: false,
        reporters: [{
          formatter: 'string',
          console: true,
          failAfterError: false,
          debug: false
        }]
      }
    },
    opts: {
      development: {
        bundleExec: true,
        outputStyle: 'expanded',
        debugInfo: true,
        errLogToConsole: true,
        includePaths: [themeDir + 'node_modules/']
      },
      production: {
        bundleExec: true,
        outputStyle: 'compressed',
        debugInfo: true,
        errLogToConsole: true,
        includePaths: [themeDir + 'node_modules/']
      }
    }
  },
  js: {
    src: themeDir + 'js/src/*.js',
    watch: themeDir + 'js/src/**/*',
    production: themeDir + 'js/prod/',
    development: themeDir + 'js/dev/',
  },
  php: {
    watch: [
      themeDir + '*.php',
      themeDir + 'inc/**/*.php',
      themeDir + 'template-parts/**/*.php'
    ]
  },
  phpcs: {
    opts: {
      bin: '/usr/local/bin/phpcs',
      standard: themeDir + 'phpcs.xml',
      warningSeverity: 0
    }
  }
};
