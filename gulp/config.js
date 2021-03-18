const themeDir = './';

module.exports = {
  cleancss: {
    opts: {
      compatibility: 'ie11,-properties.merging',
      level: {
        1: {
          specialComments: false,
          removeQuotes: true,
          removeWhitespace: true,
          tidyAtRules: true,
          cleanupCharsets: true,
          selectorsSortingMethod: 'natural'
        },
        2: {
          mergeSemantically: false,
          overrideProperties: true,
          removeEmpty: true,
          removeDuplicateRules: true,
          reduceNonAdjacentRules: true,
          removeDuplicateFontRules: true,
          removeDuplicateMediaBlocks: true,
          removeUnusedAtRules: true,
          restructureRules: true
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
    watch: [
      themeDir + '**/*.php',
      themeDir + 'js/src/**/*.js'
    ]
  },
  styles: {
    gutenberg: themeDir + 'sass/base/gutenberg.scss',
    src: themeDir + 'sass/*.scss',
    watch: themeDir + 'sass/**/*.{sass,scss}',
    development: themeDir + 'css/dev/',
    production: themeDir + 'css/prod/',
    stylelint: {
      opts: {
        fix: false,
        ignoreFiles: ['!*.scss'],
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
    src: [themeDir + '**/*.php', '!' + themeDir + 'node_modules/**/*']
  },
  phpcs: {
    src: [themeDir + '**/*.php', '!' + themeDir + 'node_modules/**/*'],
    opts: {
      bin: '/usr/local/bin/phpcs',
      standard: themeDir + 'phpcs.xml',
      warningSeverity: 0
    }
  }
};
