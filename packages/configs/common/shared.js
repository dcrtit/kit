/*
* Contains common rules' definitions for shared usage across different plugins and configs.
*
* Example: `indent` and `@typescript-eslint/indent` - these rules have similar definition format so
* For example: `indent` and `@typescript-eslint/indent` - these rules have similar definition format so
* it's easier for maintainability reasons to have this kind of rules in one place.
* */
module.exports = {
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
  'brace-style': [
    1,
    'stroustrup',
    {
      allowSingleLine: true
    }
  ],
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
  'default-param-last': 1,
  'dot-notation': 1,
  'func-call-spacing': [
    1,
    'never'
  ],
  'init-declarations': 0,
  'keyword-spacing': [
    1,
    {
      before: true,
      after: true
    }
  ],
  'lines-between-class-members': [
    1,
    'always',
    {
      exceptAfterSingleLine: true
    }
  ],
  'no-array-constructor': 2,
  'no-dupe-class-members': 2,
  'no-duplicate-imports': 1,
  'no-empty-function': 1,
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
  'no-implied-eval': 2,
  'no-invalid-this': 0,
  'no-loop-func': 2,
  'no-loss-of-precision': 2,
  'no-magic-numbers': 0,
  'no-redeclare': [
    2,
    {
      builtinGlobals: true
    }
  ],
  'no-restricted-imports': 0,
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
  'no-throw-literal': 1,
  'no-unused-expressions': [
    2,
    {
      allowTaggedTemplates: true
    }
  ],
  'no-unused-vars': [
    1,
    {
      caughtErrors: 'all',
      args: 'after-used',
      ignoreRestSiblings: true
    }
  ],
  'no-use-before-define': 2,
  'no-useless-constructor': 1,
  'object-curly-spacing': [
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
  'quotes': [
    1,
    'single',
    {
      avoidEscape: true
    }
  ],
  'require-await': 2,
  'no-return-await': 1,
  'semi': [
    1,
    'never'
  ],
  'space-before-function-paren': [
    1,
    'always'
  ],
  'space-infix-ops': [
    1,
    {
      int32Hint: true
    }
  ]
}