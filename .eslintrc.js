module.exports = {
  parser: 'babel-eslint',
  extends: 'eslint-config-airbnb/base',
  rules: {
    indent: ['error', 2],
    'func-names': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
  env: {
    browser: true,
    jquery: true,
  },
};
