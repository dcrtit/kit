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
    'plugin:vue/vue3-recommended',
    '@dcrtit/eslint-config-base',
    '@dcrtit/eslint-config-import',
    '@dcrtit/eslint-config-unicorn',
    '@dcrtit/eslint-config-vue'
  ],
  rules: {
    // indent: 0
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        '@typescript-eslint/indent': 'off'
      }
    }
  ]
}