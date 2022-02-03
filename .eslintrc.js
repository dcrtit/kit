module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    '@dcrtit/eslint-config-base'
  ],
  rules: {},
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        '@typescript-eslint/indent': 'off'
      }
    }
  ]
}