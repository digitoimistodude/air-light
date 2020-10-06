module.exports = {
  parser: 'babel-eslint',
  extends: 'eslint-config-airbnb/base',
  rules: {
    indent: ['error', 2],
    'func-names': 0,
    'no-param-reassign': ['error', { props: false }],
  },
  env: {
    browser: true,
    jquery: true,
  },
};
