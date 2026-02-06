module.exports = {
  root: true,
  ignorePatterns: [
    '**/js/dev/*.js',
    '**/js/prod/*.js',
    '**/node_modules/*.js',
    '**/gulp/**/*.js',
    '**/gulp/*.js',
    'gulpfile.js',
    'blocks/**/*.js',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    indent: ['error', 2],
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-console': 'warn',
    'prefer-template': 'off',
    'no-shadow': 'off',
    'consistent-return': 'off',
    'brace-style': 'off',
    'semi-style': 'off',
    'no-use-before-define': 'off',
  },
  env: {
    browser: true,
    jquery: true,
  },
};
