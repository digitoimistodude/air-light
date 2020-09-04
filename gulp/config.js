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
    src: ['css/*'],
    opts: {
      logLevel: 'debug',
      injectChanges: true,
      proxy: 'airdev.test',
      browser: 'Google Chrome',
      open: false,
      notify: true
    },
    watch: [
      '**/*.php',
      'js/src/**/*.js'
    ]
  },
  styles: {
    gutenberg: 'sass/base/gutenberg.scss',
    main: 'sass/base/global.scss',
    src: 'sass/**/*.{sass,scss}',
    dest: 'css',
    scsslintexcludes: ['!' + 'sass/navigation/_burger.scss', '!' + 'sass/base/_normalize.scss'],
    opts: {
      development: {
        bundleExec: true,
        style: 'expanded',
        debugInfo: true,
        lineNumbers: true,
        errLogToConsole: true,
        includePaths: ['node_modules/']
      },
      production: {
        bundleExec: true,
        style: 'compressed',
        debugInfo: true,
        lineNumbers: true,
        errLogToConsole: true,
        includePaths: ['node_modules/']
      }
    }
  },
  js: {
    main: 'js/src/scripts.js',
    src: 'js/src/**/*.js',
    dest: 'js',
    uglify: {
      opts: {
        compress: true,
        mangle: true
      }
    }
  },
  php: {
    src: '**/*.php'
  },
  phpcs: {
    src: ['**/*.php', '!' + 'node_modules/**/*'],
    opts: {
      bin: '/usr/local/bin/phpcs',
      standard: 'phpcs.xml',
      warningSeverity: 0
    }
  }
};
