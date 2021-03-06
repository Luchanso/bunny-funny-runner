module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  rules: {
    'class-methods-use-this': 0,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }]
  }
};
