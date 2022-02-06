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
          "max": 1
        },
        multiline: {
          "max": 1
        }
      }
    ],
    'vue/first-attribute-linebreak': [
      2,
      {
        "singleline": "beside",
        "multiline": "beside"
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
    'vue/object-curly-spacing': [
      1,
      'never'
    ],
    'vue/space-infix-ops': [
      1,
      {
        int32Hint: true
      }
    ],
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
    'vue/brace-style': [
      1,
      'stroustrup',
      {
        allowSingleLine: true
      }
    ],
    'vue/camelcase': [
      1,
      {
        properties: 'never',
        ignoreDestructuring: true
      }
    ],
    'vue/comma-dangle': [
      1,
      'never'
    ],
    'vue/padding-line-between-blocks': [
      1,
      'always'
    ],
    'vue/component-definition-name-casing': [2, 'kebab-case']
  }
}