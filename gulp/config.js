/**
 * @Author: Roni Laukkarinen
 * @Date:   2021-04-22 08:06:03
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2021-11-23 09:52:07
 */
// Set theme dir
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
          mergeAdjacentRules: true,
          mergeIntoShorthands: true,
          mergeMedia: false,
          mergeNonAdjacentRules: true,
          mergeSemantically: true,
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
    src: [themeDir + 'css/**/*', themeDir + 'js/dev/**/*'],
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
    development: themeDir + 'css/dev/',
    production: themeDir + 'css/prod/',
    watch: {
      development: themeDir + 'sass/**/*.scss',
      production: themeDir + 'css/dev/*.css',
    },
    stylelint: {
      src: themeDir + 'sass/**/*.scss',
      opts: {
        fix: false,
        reporters: [{
          formatter: 'string',
          console: true,
          failAfterError: false,
          debug: false
        }]
      },
    },
    opts: {
      development: {
        verbose: true,
        bundleExec: false,
        outputStyle: 'expanded',
        debugInfo: true,
        errLogToConsole: true,
        includePaths: [themeDir + 'node_modules/'],
        quietDeps: true,
      },
      production: {
        verbose: false,
        bundleExec: false,
        outputStyle: 'compressed',
        debugInfo: false,
        errLogToConsole: false,
        includePaths: [themeDir + 'node_modules/'],
        quietDeps: true,
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
