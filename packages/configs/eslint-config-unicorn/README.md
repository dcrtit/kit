# `@dcrtit/eslint-config-unicorn`

Collection of rules based on `eslint-plugin-unicorn`.

## Installation

Assuming you have `eslint` already installed:

```shell
npm i eslint-plugin-unicorn @dcrtit/eslint-config-unicorn -D
```

## Usage

In your `.eslintrc.js` or whatsoever config file just simple extend your existing configuration with provided package:

```js
module.exports = {
  extends: [
    // ...Other configs
    '@dcrtit/eslint-config-unicorn'
  ],
  rules: [
    // Your own rules' overrides, if needed
  ]
}
```