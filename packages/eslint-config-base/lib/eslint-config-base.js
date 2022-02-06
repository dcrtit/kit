module.exports = {
  rules: {
    'lines-between-class-members': [
      1,
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
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
    'no-empty-function': 1,
    'no-empty-character-class': 1,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [
      1,
      'all',
      {
        conditionalAssign: true,
        returnAssign: true,
        nestedBinaryExpressions: true,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false
      }
    ],
    'no-extra-semi': 2,
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
    'dot-notation': 1,
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
    'no-implied-eval': 2,
    'no-invalid-this': 0,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 0,
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
    'no-redeclare': [
      2,
      {
        builtinGlobals: true
      }
    ],
    'no-restricted-properties': 0,
    'no-return-assign': [
      2,
      'except-parens'
    ],
    'no-return-await': 1,
    'no-script-url': 2,
    'no-self-assign': [
      2,
      {
        props: true
      }
    ],
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 1,
    'no-unmodified-loop-condition': 1,
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true
      }
    ],
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
    'require-await': 2,
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
    'init-declarations': 0,
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 0,
    'no-shadow': [
      2,
      {
        builtinGlobals: true,
        hoist: 'all',
        allow: [
          'name',
          'event',
          'e',
          'error',
          'context'
        ]
      }
    ],
    'no-shadow-restricted-names': 2,
    'no-undef': 1,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-unused-vars': [
      1,
      {
        caughtErrors: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'no-use-before-define': 2,
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
    'brace-style': [
      1,
      'stroustrup',
      {
        allowSingleLine: true
      }
    ],
    'camelcase': [
      1,
      {
        properties: 'never',
        ignoreDestructuring: true
      }
    ],
    'capitalized-comments': 0,
    'comma-dangle': [
      1,
      'never'
    ],
    'comma-spacing': [
      1,
      {
        before: false,
        after: true
      }
    ],
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
    'func-call-spacing': [
      1,
      'never'
    ],
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
    'indent': [
      1,
      2,
      {
        VariableDeclarator: {
          var: 2,
          let: 2,
          const: 3
        },
        FunctionExpression: {
          body: 1,
          parameters: 'first'
        },
        FunctionDeclaration: {
          body: 1,
          parameters: 'first'
        },
        MemberExpression: 1,
        ArrayExpression: 1,
        ObjectExpression: 1,
        CallExpression: {
          arguments: 1
        },
        SwitchCase: 1,
        outerIIFEBody: 1
      }
    ],
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
    'keyword-spacing': [
      1,
      {
        before: true,
        after: true
      }
    ],
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
    'no-array-constructor': 2,
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
    'object-curly-spacing': [
      1,
      'never'
    ],
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
    'padding-line-between-statements': [
      1,
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'continue'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'break'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'function'
      },
      {
        blankLine: 'always',
        prev: 'function',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'for'
      },
      {
        blankLine: 'always',
        prev: 'for',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: [
          'const',
          'let',
          'var'
        ],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: [
          'const',
          'let',
          'var'
        ],
        next: [
          'const',
          'let',
          'var'
        ]
      },
      {
        blankLine: 'always',
        prev: 'import',
        next: '*'
      },
      {
        blankLine: 'any',
        prev: 'import',
        next: 'import'
      },
      {
        blankLine: 'always',
        prev: 'for',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: 'if',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if'
      },
      {
        blankLine: 'any',
        prev: 'if',
        next: 'if'
      }
    ],
    'quote-props': [
      1,
      'consistent-as-needed',
      {
        numbers: true
      }
    ],
    'quotes': [
      1,
      'single',
      {
        avoidEscape: true
      }
    ],
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
    'semi': [
      1,
      'never'
    ],
    'semi-spacing': 0,
    'semi-style': 0,
    'sort-keys': 0,
    'sort-vars': 0,
    'space-before-blocks': [
      1,
      'always'
    ],
    'space-before-function-paren': [
      1,
      'always'
    ],
    'space-in-parens': [
      1,
      'never'
    ],
    'space-infix-ops': [
      1,
      {
        int32Hint: true
      }
    ],
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
    'no-useless-constructor': 1,
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
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 1,
    'no-new-symbol': 2,
    'no-restricted-imports': 0,
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
    ]
  }
}