module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
  },
  env: {
    node: true,
    es6: true
  },
  rules: {
    'no-console': 0,
    'no-var': 2,
    'prefer-const': 2,
    semi: 2
  },
  overrides: [
      {
          files: ['**/spec.js'],
          env: {
              mocha: true
          },
          globals: {
              expect: true
          }
      }
  ]
}
