# `@dcrtit/eslint-config-nuxt`

Collection of rules based on `eslint-plugin-nuxt`.

## Installation

Assuming you have `eslint` already installed:

```shell
npm i eslint-plugin-nuxt @dcrtit/eslint-config-nuxt -D
```

## Usage

In your `.eslintrc.js` or whatsoever config file just simple extend your existing configuration with provided package:

```js
module.exports = {
  extends: [
    // ...Other configs
    '@dcrtit/eslint-config-nuxt'
  ],
  rules: [
    // Your own rules' overrides, if needed
  ]
}
```