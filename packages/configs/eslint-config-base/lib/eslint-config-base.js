const sharedRules = require('../../common/shared')

module.exports = {
  rules: {
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': sharedRules['lines-between-class-members'],
    'multiline-comment-style': 0,
    'for-direction': 2,
    'no-await-in-loop': 1,
    'function-paren-newline': [
      1,
      'multiline'
    ],
    'no-compare-neg-zero': 2,
    'no-cond-assign': [
      2,
      'except-parens'
    ],
    'no-console': 0,
    'no-constant-condition': 1,
    'no-control-regex': 1,
    'no-debugger': 1,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 1,
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': sharedRules['no-empty-function'],
    'no-empty-character-class': 1,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': sharedRules['no-extra-parens'],
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': sharedRules['no-extra-semi'],
    'no-func-assign': 2,
    'no-inner-declarations': [
      2,
      'both'
    ],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': [
      2,
      {
        skipComments: true,
        skipTemplates: true,
        skipStrings: true,
        skipRegExps: true
      }
    ],
    'no-obj-calls': 2,
    'no-prototype-builtins': 0,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 1,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'use-isnan': 2,
    'valid-jsdoc': [
      1,
      {
        requireReturn: false,
        prefer: {
          arg: 'param',
          argument: 'param',
          returns: 'return'
        },
        preferType: {
          Boolean: 'boolean',
          Function: 'function',
          Array: 'array',
          Set: 'set',
          Map: 'map',
          Number: 'number',
          Object: 'object',
          String: 'string'
        }
      }
    ],
    'valid-typeof': [
      2,
      {
        requireStringLiterals: true
      }
    ],
    'accessor-pairs': 1,
    'array-callback-return': [
      2,
      {
        allowImplicit: true
      }
    ],
    'block-scoped-var': 2,
    'class-methods-use-this': 1,
    'complexity': 0,
    'consistent-return': 0,
    'curly': [
      1,
      'all'
    ],
    'default-case': 2,
    'dot-location': [
      1,
      'property'
    ],
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': sharedRules['dot-notation'],
    'eqeqeq': [
      2,
      'always'
    ],
    'guard-for-in': 1,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 1,
    'no-else-return': [
      1,
      {
        allowElseIf: true
      }
    ],
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 0,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-global-assign': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 0,
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': sharedRules['no-implied-eval'],
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': sharedRules['no-invalid-this'],
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': sharedRules['no-loop-func'],
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': sharedRules['no-magic-numbers'],
    'no-multi-spaces': [
      1,
      {
        ignoreEOLComments: true
      }
    ],
    'no-multi-str': 2,
    'no-new': 1,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': [
      2,
      {
        props: false
      }
    ],
    'no-proto': 0,
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': sharedRules['no-redeclare'],
    'no-restricted-properties': 0,
    'no-return-assign': [
      2,
      'except-parens'
    ],
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': sharedRules['no-return-await'],
    'no-script-url': 2,
    'no-self-assign': [
      2,
      {
        props: true
      }
    ],
    'no-self-compare': 2,
    'no-sequences': 2,
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': sharedRules['no-throw-literal'],
    'no-unmodified-loop-condition': 1,
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': sharedRules['no-unused-expressions'],
    'no-unused-labels': 1,
    'no-useless-call': 1,
    'no-useless-concat': 1,
    'no-useless-escape': 1,
    'no-useless-return': 1,
    'no-void': 1,
    'no-warning-comments': 0,
    'no-with': 2,
    'prefer-promise-reject-errors': 0,
    'radix': 2,
    // https://eslint.org/docs/rules/require-await
    'require-await': sharedRules['require-await'],
    'vars-on-top': 2,
    'wrap-iife': [
      2,
      'inside',
      {
        functionPrototypeMethods: true
      }
    ],
    'yoda': [
      2,
      'never',
      {
        onlyEquality: true
      }
    ],
    'strict': 0,
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': sharedRules['init-declarations'],
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 0,
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': sharedRules['no-shadow'],
    'no-shadow-restricted-names': 2,
    'no-undef': 1,
    'no-undef-init': 2,
    'no-undefined': 0,
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': sharedRules['no-unused-vars'],
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': sharedRules['no-use-before-define'],
    'callback-return': 0,
    'global-require': 0,
    'handle-callback-err': [
      1,
      '^.*(e|E)rr'
    ],
    'no-buffer-constructor': 2,
    'no-mixed-requires': 0,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-restricted-modules': 0,
    'no-sync': 2,
    'array-bracket-newline': [
      1,
      {
        multiline: true
      }
    ],
    'array-bracket-spacing': [
      1,
      'never'
    ],
    'array-element-newline': 0,
    'block-spacing': [
      1,
      'never'
    ],
    // https://eslint.org/docs/rules/brace-style
    'brace-style': sharedRules['brace-style'],
    'camelcase': [
      1,
      {
        properties: 'never',
        ignoreDestructuring: true
      }
    ],
    'capitalized-comments': 0,
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': sharedRules['comma-dangle'],
    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': sharedRules['comma-spacing'],
    'comma-style': [
      1,
      'last'
    ],
    'computed-property-spacing': [
      1,
      'never'
    ],
    'consistent-this': [
      1,
      'that'
    ],
    'eol-last': 0,
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': sharedRules['func-call-spacing'],
    'func-name-matching': [
      1,
      'always'
    ],
    'func-names': [
      1,
      'as-needed'
    ],
    'func-style': [
      1,
      'declaration',
      {
        allowArrowFunctions: true
      }
    ],
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    // https://eslint.org/docs/rules/indent
    'indent': sharedRules.indent,
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': [
      1,
      'prefer-double'
    ],
    'key-spacing': [
      1,
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': sharedRules['keyword-spacing'],
    'line-comment-position': 0,
    'linebreak-style': 0,
    'lines-around-comment': 0,
    'max-depth': 0,
    'max-len': [
      0,
      {
        code: 85,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreUrls: true,
        tabWidth: 2
      }
    ],
    'max-lines': 0,
    'max-nested-callbacks': [
      1,
      5
    ],
    'max-params': [
      1,
      5
    ],
    'max-statements': [
      2,
      50
    ],
    'max-statements-per-line': [
      1,
      {
        max: 4
      }
    ],
    'multiline-ternary': 0,
    'new-cap': [
      1,
      {
        newIsCap: true,
        capIsNew: false,
        properties: false
      }
    ],
    'new-parens': 2,
    'newline-per-chained-call': 0,
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': sharedRules['no-array-constructor'],
    'no-bitwise': [
      1,
      {
        allow: [
          '~',
          '>>>',
          '>>',
          '<<'
        ],
        int32Hint: true
      }
    ],
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 0,
    'no-multiple-empty-lines': [
      1,
      {
        max: 2
      }
    ],
    'no-negated-condition': 0,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-tabs': 0,
    'no-ternary': 0,
    'no-trailing-spaces': [
      1,
      {
        skipBlankLines: false,
        ignoreComments: true
      }
    ],
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: true
      }
    ],
    'no-whitespace-before-property': 1,
    'nonblock-statement-body-position': [
      1,
      'beside'
    ],
    'object-curly-newline': [
      1,
      {
        multiline: true,
        consistent: true
      }
    ],
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': sharedRules['object-curly-spacing'],
    'object-property-newline': [
      1,
      {
        allowAllPropertiesOnSameLine: true
      }
    ],
    'one-var': 0,
    'one-var-declaration-per-line': [
      1,
      'initializations'
    ],
    'operator-assignment': 0,
    'operator-linebreak': [
      1,
      'after'
    ],
    'padded-blocks': [
      1,
      'never'
    ],
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': sharedRules['padding-line-between-statements'],
    'quote-props': [
      1,
      'consistent-as-needed',
      {
        numbers: true
      }
    ],
    // https://eslint.org/docs/rules/quotes
    'quotes': sharedRules.quotes,
    'require-jsdoc': [
      1,
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false
        }
      }
    ],
    // https://eslint.org/docs/rules/semi
    'semi': sharedRules.semi,
    'semi-spacing': 0,
    'semi-style': 0,
    'sort-keys': 0,
    'sort-vars': 0,
    'space-before-blocks': [
      1,
      'always'
    ],
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': sharedRules['space-before-function-paren'],
    'space-in-parens': [
      1,
      'never'
    ],
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': sharedRules['space-infix-ops'],
    'space-unary-ops': [
      1,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      1,
      'always'
    ],
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': sharedRules['no-useless-constructor'],
    'no-useless-rename': 1,
    'no-var': 2,
    'object-shorthand': [
      1,
      'always'
    ],
    'switch-colon-spacing': [
      1,
      {
        after: true,
        before: false
      }
    ],
    'template-tag-spacing': [
      1,
      'never'
    ],
    'unicode-bom': [
      2,
      'never'
    ],
    'wrap-regex': 1,
    'arrow-body-style': [
      1,
      'as-needed'
    ],
    'arrow-parens': [
      1,
      'as-needed'
    ],
    'arrow-spacing': [
      1,
      {
        before: true,
        after: true
      }
    ],
    'constructor-super': 2,
    'generator-star-spacing': [
      1,
      {
        before: true,
        after: false
      }
    ],
    'no-class-assign': 2,
    'no-confusing-arrow': [
      1,
      {
        allowParens: true
      }
    ],
    'no-const-assign': 2,
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': sharedRules['no-dupe-class-members'],
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': sharedRules['no-duplicate-imports'],
    'no-new-symbol': 2,
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': sharedRules['no-restricted-imports'],
    'no-this-before-super': 2,
    'no-useless-computed-key': 1,
    'prefer-arrow-callback': 0,
    'prefer-const': [
      1,
      {
        destructuring: 'all'
      }
    ],
    'prefer-destructuring': 0,
    'prefer-numeric-literals': 0,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'require-yield': 2,
    'rest-spread-spacing': [
      1,
      'never'
    ],
    'sort-imports': 0,
    'symbol-description': 1,
    'template-curly-spacing': [
      0,
      'never'
    ],
    'yield-star-spacing': [
      1,
      'after'
    ],
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': sharedRules['default-param-last'],
    // https://eslint.org/docs/rules/no-loss-of-precision
    'no-loss-of-precision': sharedRules['no-loss-of-precision']
  }
}