module.exports = {
  root: true,
  ignorePatterns: ['**/assets/dist/**', '**/node_modules/**', '**/vendor/**', '**/parcel/**'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@wordpress/babel-preset-default']
    }
  },
  rules: {
    indent: ['error', 2],
  },
  env: {
    browser: true,
    jquery: true,
    es6: true,
  },
};
