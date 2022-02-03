# `@dcrtit/eslint-config-base`

Basic ESLint config with primary Javascript rules

## Installation

```
npm i eslint @dcrtit/eslint-config-base -D
```

In your `.eslintrc.js` or whatsoever config file just simple extend your existing configuration with provided package:

```js
module.exports = {
  extends: [
    // ...Other configs
    '@dcrtit/eslint-config'
  ],
  rules: [
    // Your own rules' overrides, if needed
  ]
}
```