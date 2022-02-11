module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    // '@nuxtjs/eslint-config-typescript',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:nuxt/recommended',
    '@dcrtit/eslint-config-base'
  ],

  rules: {
    // TODO: Правила eslint для TS можно тоже вынести в пакет, как появится время
    // 'indent': 'off',
    // '@typescript-eslint/indent': [
    //   1,
    //   2,
    //   {
    //     VariableDeclarator: {
    //       var: 2,
    //       let: 2,
    //       const: 3
    //     },
    //     FunctionExpression: {
    //       body: 1,
    //       parameters: 'first'
    //     },
    //     FunctionDeclaration: {
    //       body: 1,
    //       parameters: 'first'
    //     },
    //     MemberExpression: 1,
    //     ArrayExpression: 1,
    //     ObjectExpression: 1,
    //     CallExpression: {
    //       arguments: 1
    //     },
    //     SwitchCase: 1,
    //     outerIIFEBody: 1
    //   }
    // ],
    // '@typescript-eslint/no-namespace': [
    //   2, {
    //     allowDeclarations: true,
    //     allowDefinitionFiles: true
    //   }
    // ],
    // 'no-shadow': 0,
    // '@typescript-eslint/no-shadow': [
    //   2,
    //   {
    //     builtinGlobals: false,
    //     hoist: 'all',
    //     allow: [
    //       'name',
    //       'event',
    //       'e',
    //       'error',
    //       'context'
    //     ],
    //     ignoreTypeValueShadow: true,
    //     ignoreFunctionTypeParameterNameValueShadow: true
    //   }
    // ],
    // '@typescript-eslint/no-inferrable-types': 0,
    // 'no-extra-parens': 0,
    // '@typescript-eslint/no-extra-parens': 1,
    // 'no-redeclare': 0,
    // '@typescript-eslint/no-redeclare': 2,
    // 'no-unused-vars': 0,
    // '@typescript-eslint/no-unused-vars': 1,
    // '@typescript-eslint/ban-ts-comment': [
    //   2, {
    //     'ts-expect-error': 'allow-with-description',
    //     'ts-ignore': 'allow-with-description',
    //     'ts-nocheck': 'allow-with-description',
    //     'ts-check': false,
    //     'minimumDescriptionLength': 5
    //   }
    // ],
    // 'no-empty-function': 0,
    // '@typescript-eslint/no-empty-function': 1,
    // // Не хочу видеть варнинги по этому делу. В некоторых ситуациях TS не может знать,
    // // что будет лежать в переменной на этапе исполнения, но ты как разработчик точно знаешь.
    // '@typescript-eslint/no-non-null-assertion': 0,
    // 'import/named': 0
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