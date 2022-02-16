# `@dcrtit/eslint-config-import`

Collection of rules based on `eslint-plugin-import`.

## Installation

Assuming you have `eslint` already installed:

```shell
npm i eslint-plugin-import @dcrtit/eslint-config-import -D
```

## Usage

In your `.eslintrc.js` or whatsoever config file just simple extend your existing configuration with provided package:

```js
module.exports = {
  extends: [
    // ...Other configs
    '@dcrtit/eslint-config-import'
  ],
  rules: [
    // Your own rules' overrides, if needed
  ]
}
```