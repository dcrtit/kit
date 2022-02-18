module.exports = {
  root: true,
  env: {
    'node': true,
    'browser': true,
    'shared-node-browser': true,
    'worker': true,
    'serviceworker': true,
    'commonjs': true,
    'jquery': true,
    'mongo': true,
    'jasmine': true,
    'mocha': true,
    'es6': true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['import', 'unicorn', 'vue'],
  extends: [
    'plugin:vue/base',
    '@dcrtit/eslint-config-base',
    '@dcrtit/eslint-config-ts',
    '@dcrtit/eslint-config-import',
    '@dcrtit/eslint-config-unicorn',
    '@dcrtit/eslint-config-vue',
    '@dcrtit/eslint-config-vue3'
  ],
  rules: {},
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'indent': 0,
        '@typescript-eslint/indent': 'off'
      }
    }
  ]
}