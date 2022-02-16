const sharedRules = require('../../common/shared')

module.exports = {
  rules: {
    'vue/attribute-hyphenation': [
      2,
      'never'
    ],
    'vue/attributes-order': [
      2,
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ],
    'vue/component-name-in-template-casing': [
      2,
      'kebab-case',
      {
        ignores: []
      }
    ],
    'vue/html-closing-bracket-newline': [
      2,
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never'
      }
    ],
    'vue/html-end-tags': 2,
    'vue/html-indent': [
      1,
      2
    ],
    // https://eslint.vuejs.org/rules/html-quotes.html
    'vue/html-quotes': [
      2,
      'double'
    ],
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/first-attribute-linebreak': [
      2,
      {
        singleline: 'beside',
        multiline: 'beside'
      }
    ],
    'vue/multiline-html-element-content-newline': [
      2,
      {
        ignores: [
          'pre',
          'textarea'
        ]
      }
    ],
    'vue/mustache-interpolation-spacing': [
      2,
      'always'
    ],
    'vue/name-property-casing': [
      2,
      'kebab-case'
    ],
    'vue/no-async-in-computed-properties': 2,
    'vue/no-dupe-keys': [
      2,
      {
        groups: []
      }
    ],
    'vue/no-duplicate-attributes': [
      2,
      {
        allowCoexistClass: true,
        allowCoexistStyle: true
      }
    ],
    'vue/no-multi-spaces': [
      2,
      {
        ignoreProperties: true
      }
    ],
    'vue/no-parsing-error': [
      2,
      {
        'abrupt-closing-of-empty-comment': true,
        'absence-of-digits-in-numeric-character-reference': true,
        'cdata-in-html-content': true,
        'character-reference-outside-unicode-range': true,
        'control-character-in-input-stream': true,
        'control-character-reference': true,
        'eof-before-tag-name': true,
        'eof-in-cdata': true,
        'eof-in-comment': true,
        'eof-in-tag': true,
        'incorrectly-closed-comment': true,
        'incorrectly-opened-comment': true,
        'invalid-first-character-of-tag-name': true,
        'missing-attribute-value': true,
        'missing-end-tag-name': true,
        'missing-semicolon-after-character-reference': true,
        'missing-whitespace-between-attributes': true,
        'nested-comment': true,
        'noncharacter-character-reference': true,
        'noncharacter-in-input-stream': true,
        'null-character-reference': true,
        'surrogate-character-reference': true,
        'surrogate-in-input-stream': true,
        'unexpected-character-in-attribute-name': true,
        'unexpected-character-in-unquoted-attribute-value': true,
        'unexpected-equals-sign-before-attribute-name': true,
        'unexpected-null-character': true,
        'unexpected-question-mark-instead-of-tag-name': true,
        'unexpected-solidus-in-tag': true,
        'unknown-named-character-reference': true,
        'end-tag-with-attributes': true,
        'duplicate-attribute': true,
        'end-tag-with-trailing-solidus': true,
        'non-void-html-element-start-tag-with-trailing-solidus': false,
        'x-invalid-end-tag': true,
        'x-invalid-namespace': true
      }
    ],
    'vue/no-reserved-keys': [
      2,
      {
        reserved: [],
        groups: []
      }
    ],
    'vue/no-shared-component-data': 2,
    'vue/no-side-effects-in-computed-properties': 1,
    'vue/no-spaces-around-equal-signs-in-attribute': 2,
    'vue/no-template-key': 2,
    'vue/no-template-shadow': 2,
    'vue/no-textarea-mustache': 2,
    'vue/no-unused-components': [
      1,
      {
        ignoreWhenBindingPresent: false
      }
    ],
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-unused-vars.md
    'vue/no-unused-vars': 1,
    'vue/no-use-v-if-with-v-for': [
      2,
      {
        allowUsingIterationVar: true
      }
    ],
    'vue/no-v-html': 0,
    'vue/order-in-components': [
      2,
      {
        order: [
          'el',
          'name',
          'parent',
          'layout',
          'key',
          'functional',
          'loading',
          [
            'delimiters',
            'comments'
          ],
          [
            'components',
            'directives',
            'filters'
          ],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          [
            'props',
            'propsData'
          ],
          'watchQuery',
          'asyncData',
          'fetch',
          'data',
          'computed',
          'watch',
          'channels',
          'validations',
          'head',
          'middleware',
          'validate',
          'beforeRouteEnter',
          'beforeRouteUpdate',
          'beforeRouteLeave',
          'beforeCreate',
          'created',
          'beforeMount',
          'mounted',
          'beforeUpdate',
          'updated',
          'activated',
          'deactivated',
          'beforeDestroy',
          'destroyed',
          'methods',
          [
            'template',
            'render'
          ],
          'renderError',
          'scrollToTop',
          'transition'
        ]
      }
    ],
    'vue/prop-name-casing': [
      2,
      'camelCase'
    ],
    'vue/require-component-is': 2,
    'vue/require-default-prop': 2,
    'vue/require-prop-type-constructor': 2,
    'vue/require-prop-types': 2,
    'vue/require-render-return': 2,
    'vue/require-v-for-key': 2,
    'vue/require-valid-default-prop': 2,
    'vue/return-in-computed-property': [
      2,
      {
        treatUndefinedAsUnspecified: false
      }
    ],
    'vue/script-indent': [
      1,
      2,
      {
        baseIndent: 1,
        switchCase: 0,
        ignores: []
      }
    ],
    'vue/singleline-html-element-content-newline': [
      2,
      {
        ignoreWhenNoAttributes: false,
        ignores: [
          'pre',
          'textarea'
        ]
      }
    ],
    'vue/this-in-template': [
      2,
      'never'
    ],
    'vue/use-v-on-exact': 1,
    'vue/v-bind-style': [
      1,
      'shorthand'
    ],
    'vue/v-on-style': [
      1,
      'shorthand'
    ],
    'vue/valid-template-root': 2,
    'vue/valid-v-bind': 2,
    'vue/valid-v-cloak': 2,
    'vue/valid-v-else-if': 2,
    'vue/valid-v-else': 2,
    'vue/valid-v-for': 2,
    'vue/valid-v-html': 2,
    'vue/valid-v-if': 2,
    'vue/valid-v-model': 2,
    'vue/valid-v-on': 2,
    'vue/valid-v-once': 2,
    'vue/valid-v-pre': 2,
    'vue/valid-v-show': 2,
    'vue/valid-v-text': 2,
    'vue/v-on-function-call': [
      2,
      'never'
    ],
    'vue/require-direct-export': 0,
    'vue/no-boolean-default': 0,
    'vue/match-component-file-name': 0,
    'vue/array-bracket-spacing': [
      1,
      'never'
    ],
    'vue/eqeqeq': [
      2,
      'always'
    ],
    'vue/key-spacing': [
      1,
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    // https://eslint.vuejs.org/rules/object-curly-spacing.html
    'vue/object-curly-spacing': sharedRules['object-curly-spacing'],
    // https://eslint.vuejs.org/rules/space-infix-ops.html
    'vue/space-infix-ops': sharedRules['space-infix-ops'],
    'vue/space-unary-ops': [
      1,
      {
        words: true,
        nonwords: false
      }
    ],
    'vue/no-restricted-syntax': 0,
    'vue/arrow-spacing': [
      1,
      {
        before: true,
        after: true
      }
    ],
    'vue/block-spacing': [
      1,
      'never'
    ],
    // https://eslint.vuejs.org/rules/brace-style.html
    'vue/brace-style': sharedRules['brace-style'],
    'vue/camelcase': [
      1,
      {
        properties: 'never',
        ignoreDestructuring: true
      }
    ],
    // https://eslint.vuejs.org/rules/comma-dangle.html
    'vue/comma-dangle': sharedRules['comma-dangle'],
    'vue/padding-line-between-blocks': [
      1,
      'always'
    ],
    'vue/component-definition-name-casing': [2, 'kebab-case'],
    'vue/comment-directive': [
      2, {
        reportUnusedDisableDirectives: false
      }
    ],
    'vue/jsx-uses-vars': 0,
    'vue/no-deprecated-scope-attribute': 2,
    'vue/no-deprecated-slot-attribute': 2,
    'vue/no-deprecated-slot-scope-attribute': 2,
    'vue/no-v-for-template-key': 2,
    'vue/multi-word-component-names': 0,
    'vue/no-arrow-functions-in-watch': 2,
    'vue/no-computed-properties-in-data': 2,
    'vue/no-custom-modifiers-on-v-model': 2,
    'vue/no-dupe-v-else-if': 2,
    'vue/no-multiple-template-root': 2,
    'vue/no-mutating-props': 2,
    'vue/no-reserved-props': [
      2,
      {
        vueVersion: 2
      }
    ],
    'vue/no-useless-template-attributes': 2,
    'vue/no-v-model-argument': 2,
    'vue/valid-next-tick': 2,
    'vue/valid-v-bind-sync': 2,
    'vue/valid-v-slot': [
      2,
      {
        allowModifiers: false
      }
    ],
    'vue/one-component-per-file': 2,
    'vue/v-slot-style': [
      2,
      {
        atComponent: 'shorthand',
        default: 'shorthand',
        named: 'shorthand'
      }
    ],
    'vue/component-tags-order': [
      2,
      {
        order: ['script', 'template', 'style']
      }
    ],
    'vue/no-lone-template': [
      2,
      {
        ignoreAccessible: false
      }
    ],
    'vue/no-multiple-slot-args': 2,
    'vue/block-lang': [
      2,
      {
        script: {
          lang: 'ts'
        }
      }
    ],
    'vue/block-tag-newline': 0,
    'vue/component-api-style': 0,
    'vue/component-options-name-casing': [
      2,
      'kebab-case'
    ],
    'vue/custom-event-name-casing': [
      2,
      'kebab-case',
      {
        ignores: []
      }
    ],
    'vue/html-button-has-type': [
      2,
      {
        button: true,
        submit: true,
        reset: true
      }
    ],
    'vue/html-comment-content-newline': [
      2,
      {
        singleline: 'never',
        multiline: 'always'
      },
      {
        exceptions: []
      }
    ],
    'vue/html-comment-content-spacing': [
      2,
      'always',
      {
        exceptions: []
      }
    ],
    'vue/html-comment-indent': [
      2,
      2
    ],
    'vue/new-line-between-multi-line-property': 0,
    'vue/next-tick-style': [
      2,
      'promise'
    ],
    'vue/no-bare-strings-in-template': 0,
    'vue/no-child-content': [
      2,
      {
        additionalDirectives: []
      }
    ],
    'vue/no-duplicate-attr-inheritance': 2,
    'vue/no-empty-component-block': 0,
    'vue/no-expose-after-await': 2,
    'vue/no-invalid-model-keys': 2,
    'vue/no-multiple-objects-in-class': 2,
    'vue/no-potential-component-option-typo': [
      2,
      {
        presets: ['vue', 'vue-router', 'nuxt'],
        custom: [],
        threshold: 1
      }
    ],
    'vue/no-reserved-component-names': [
      2,
      {
        disallowVueBuiltInComponents: true,
        disallowVue3BuiltInComponents: false
      }
    ],
    'vue/no-restricted-block': 0,
    'vue/no-restricted-call-after-await': 0,
    'vue/no-restricted-class': 0,
    'vue/no-restricted-component-options': 0,
    'vue/no-restricted-custom-event': 0,
    'vue/no-restricted-props': 0,
    'vue/no-restricted-static-attribute': 0,
    'vue/no-restricted-v-bind': 0,
    'vue/no-static-inline-styles': 0,
    'vue/no-template-target-blank': [
      2,
      {
        allowReferrer: false,
        enforceDynamicLinks: 'always'
      }
    ],
    'vue/no-this-in-before-route-enter': 2,
    'vue/no-undef-components': 0,
    'vue/no-undef-properties': [
      2,
      {
        ignores: []
      }
    ],
    // @todo: Describe in readme that you need to specify used vuejs version by yourself
    'vue/no-unsupported-features': [
      2,
      {
        version: '^3.2.29',
        ignores: []
      }
    ],
    'vue/no-unused-properties': [
      2,
      {
        groups: ['props'],
        deepData: false,
        ignorePublicMembers: false
      }
    ],
    'vue/no-unused-refs': 2,
    'vue/no-use-computed-property-like-method': 2,
    'vue/no-useless-mustaches': [
      2,
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],
    'vue/no-useless-v-bind': [
      2,
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],
    'vue/no-v-text-v-html-on-component': 2,
    'vue/no-v-text': 2,
    'vue/prefer-separate-static-class': 2,
    'vue/require-emit-validator': 2,
    'vue/require-expose': 0,
    'vue/require-name-property': 2,
    'vue/sort-keys': 0,
    'vue/static-class-names-order': 0,
    'vue/v-for-delimiter-style': [
      2,
      'in'
    ],
    'vue/array-bracket-newline': [
      1,
      {
        multiline: true
      }
    ],
    // https://eslint.vuejs.org/rules/comma-spacing.html
    'vue/comma-spacing': sharedRules['comma-spacing'],
    'vue/comma-style': [
      1,
      'last'
    ],
    'vue/dot-location': [
      1,
      'property'
    ],
    // https://eslint.vuejs.org/rules/dot-notation.html
    'vue/dot-notation': sharedRules['dot-notation'],
    // https://eslint.vuejs.org/rules/func-call-spacing.html
    'vue/func-call-spacing': sharedRules['func-call-spacing'],
    // https://eslint.vuejs.org/rules/keyword-spacing.html
    'vue/keyword-spacing': sharedRules['keyword-spacing'],
    'vue/max-len': [
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
    'vue/no-constant-condition': 1,
    'vue/no-empty-pattern': 2,
    // https://eslint.vuejs.org/rules/no-extra-parens.html
    'vue/no-extra-parens': sharedRules['no-extra-parens'],
    'vue/no-irregular-whitespace': [
      2,
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
        skipHTMLAttributeValues: false,
        skipHTMLTextContents: false
      }
    ],
    // https://eslint.vuejs.org/rules/no-loss-of-precision.html
    'vue/no-loss-of-precision': sharedRules['no-loss-of-precision'],
    'vue/no-sparse-arrays': 2,
    'vue/no-useless-concat': 1,
    'vue/object-curly-newline': [
      1,
      {
        multiline: true,
        consistent: true
      }
    ],
    'vue/object-property-newline': [
      1,
      {
        allowAllPropertiesOnSameLine: true
      }
    ],
    'vue/object-shorthand': [
      1,
      'always'
    ],
    'vue/operator-linebreak': [
      1,
      'after'
    ],
    'vue/prefer-template': 1,
    'vue/quote-props': [
      1,
      'consistent-as-needed',
      {
        numbers: true
      }
    ],
    'vue/space-in-parens': [
      1,
      'never'
    ],
    'vue/template-curly-spacing': [
      0,
      'never'
    ]
  }
}