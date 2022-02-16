# `@dcrtit/eslint-config-base`

Basic ESLint config with primary Javascript rules.

## Installation

```shell
npm i eslint @typescript-eslint/parser @dcrtit/eslint-config-base -D
```

## Usage

In your `.eslintrc.js` or whatsoever config file just simple extend your existing configuration with provided package:

```js
module.exports = {
  extends: [
    // ...Other configs
    '@dcrtit/eslint-config-base'
  ],
  rules: [
    // Your own rules' overrides, if needed
  ]
}
```