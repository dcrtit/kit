# `@dcrtit/eslint-config-vue`

Collection of rules based on `eslint-plugin-vue`.

## Installation

Assuming you have `eslint` already installed:

```shell
npm i eslint-plugin-vue @dcrtit/eslint-config-vue -D
```

## Usage

In your `.eslintrc.js` or whatsoever config file just simple extend your existing configuration with provided package:

```js
module.exports = {
  extends: [
    // ...Other configs
    '@dcrtit/eslint-config-vue'
  ],
  rules: [
    // Your own rules' overrides, if needed
  ]
}
```