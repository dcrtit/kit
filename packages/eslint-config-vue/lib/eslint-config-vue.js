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
    'vue/component-definition-name-casing': [2, 'kebab-case'],
    'vue/comment-directive': [
      2, {
        reportUnusedDisableDirectives: false
      }
    ],
    'vue/jsx-uses-vars': 0,
    'vue/script-setup-uses-vars': 2,
    'vue/no-deprecated-data-object-declaration': 2,
    // @todo: Enable when migrating to Vue 3.
    'vue/no-deprecated-destroyed-lifecycle': 0,
    // @todo: Enable when migrating to Vue 3.
    'vue/no-deprecated-dollar-listeners-api': 0,
    // @todo: Enable when migrating to Vue 3.
    'vue/no-deprecated-dollar-scopedslots-api': 0,
    // @todo: Enable when migrating to Vue 3.
    'vue/no-deprecated-events-api': 0,
    // No matter what version of vue we are using, it was a bad idea to use filters anyway.
    'vue/no-deprecated-filter': 2,
    // @todo: Enable when migrating to Vue 3.
    'vue/no-deprecated-functional-template': 0,
    'vue/no-deprecated-html-element-is': 2,
    'vue/no-deprecated-inline-template': 2,
    // @todo: Enable when migrating to Vue 3.
    'vue/no-deprecated-props-default-this': 0,
    'vue/no-deprecated-router-link-tag-prop': [],
    'vue/no-deprecated-scope-attribute': [],
    'vue/no-deprecated-slot-attribute': [],
    'vue/no-deprecated-slot-scope-attribute': [],
    'vue/no-deprecated-v-bind-sync': [],
    'vue/no-deprecated-v-is': [],
    'vue/no-deprecated-v-on-native-modifier': [],
    'vue/no-deprecated-v-on-number-modifiers': [],
    'vue/no-deprecated-vue-config-keycodes': [],
    'vue/no-dupe-v-else-if': [],
    'vue/no-export-in-script-setup': [],
    'vue/no-lifecycle-after-await': [],
    'vue/no-mutating-props': [],
    'vue/no-ref-as-operand': [],
    'vue/no-reserved-props': [],
    'vue/no-setup-props-destructure': [],
    'vue/no-useless-template-attributes': [],
    'vue/no-v-for-template-key-on-child': [],
    'vue/no-watch-after-await': [],
    'vue/require-slots-as-functions': [],
    'vue/require-toggle-inside-transition': [],
    'vue/return-in-emits-validator': [],
    'vue/valid-define-emits': [],
    'vue/valid-define-props': [],
    'vue/valid-next-tick': [],
    'vue/valid-v-is': [],
    'vue/valid-v-memo': [],
    'vue/valid-v-slot': [],
    'vue/one-component-per-file': [],
    'vue/require-explicit-emits': [],
    'vue/v-on-event-hyphenation': [],
    'vue/v-slot-style': [],
    'vue/component-tags-order': [],
    'vue/no-lone-template': [],
    'vue/no-multiple-slot-args': [],
    'vue/multi-word-component-names': [],
    'vue/no-arrow-functions-in-watch': [],
    'vue/no-computed-properties-in-data': [],
    'vue/no-custom-modifiers-on-v-model': [],
    'vue/no-dupe-v-else-if': [],
    'vue/no-multiple-template-root': [],
    'vue/no-mutating-props': [],
    'vue/no-reserved-props': [],
    'vue/no-useless-template-attributes': [],
    'vue/no-v-for-template-key': [],
    'vue/no-v-model-argument': [],
    'vue/valid-next-tick': [],
    'vue/valid-v-bind-sync': [],
    'vue/valid-v-slot': [],
    'vue/one-component-per-file': [],
    'vue/v-slot-style': [],
    'vue/component-tags-order': [],
    'vue/no-lone-template': [],
    'vue/no-multiple-slot-args': [],
    'vue/block-lang': [],
    'vue/block-tag-newline': [],
    'vue/component-api-style': [],
    'vue/component-options-name-casing': [],
    'vue/custom-event-name-casing': [],
    'vue/html-button-has-type': [],
    'vue/html-comment-content-newline': [],
    'vue/html-comment-content-spacing': [],
    'vue/html-comment-indent': [],
    'vue/new-line-between-multi-line-property': [],
    'vue/next-tick-style': [],
    'vue/no-bare-strings-in-template': [],
    'vue/no-child-content': [],
    'vue/no-duplicate-attr-inheritance': [],
    'vue/no-empty-component-block': [],
    'vue/no-expose-after-await': [],
    'vue/no-invalid-model-keys': [],
    'vue/no-multiple-objects-in-class': [],
    'vue/no-potential-component-option-typo': [],
    'vue/no-reserved-component-names': [],
    'vue/no-restricted-block': [],
    'vue/no-restricted-call-after-await': [],
    'vue/no-restricted-class': [],
    'vue/no-restricted-component-options': [],
    'vue/no-restricted-custom-event': [],
    'vue/no-restricted-props': [],
    'vue/no-restricted-static-attribute': [],
    'vue/no-restricted-v-bind': [],
    'vue/no-static-inline-styles': [],
    'vue/no-template-target-blank': [],
    'vue/no-this-in-before-route-enter': [],
    'vue/no-undef-components': [],
    'vue/no-undef-properties': [],
    'vue/no-unsupported-features': [],
    'vue/no-unused-properties': [],
    'vue/no-unused-refs': [],
    'vue/no-use-computed-property-like-method': [],
    'vue/no-useless-mustaches': [],
    'vue/no-useless-v-bind': [],
    'vue/no-v-text-v-html-on-component': [],
    'vue/no-v-text': [],
    'vue/prefer-separate-static-class': [],
    'vue/require-emit-validator': [],
    'vue/require-expose': [],
    'vue/require-name-property': [],
    'vue/sort-keys': [],
    'vue/static-class-names-order': [],
    'vue/v-for-delimiter-style': [],
    'vue/array-bracket-newline': [],
    'vue/comma-spacing': [],
    'vue/comma-style': [],
    'vue/dot-location': [],
    'vue/dot-notation': [],
    'vue/func-call-spacing': [],
    'vue/keyword-spacing': [],
    'vue/max-len': [],
    'vue/no-constant-condition': [],
    'vue/no-empty-pattern': [],
    'vue/no-extra-parens': [],
    'vue/no-irregular-whitespace': [],
    'vue/no-loss-of-precision': [],
    'vue/no-sparse-arrays': [],
    'vue/no-useless-concat': [],
    'vue/object-curly-newline': [],
    'vue/object-property-newline': [],
    'vue/object-shorthand': [],
    'vue/operator-linebreak': [],
    'vue/prefer-template': [],
    'vue/quote-props': [],
    'vue/space-in-parens': [],
    'vue/template-curly-spacing': [],
    'vue/experimental-script-setup-vars': [],
    'vue/no-confusing-v-for-v-if': [],
    'vue/no-unregistered-components': []
  }
}