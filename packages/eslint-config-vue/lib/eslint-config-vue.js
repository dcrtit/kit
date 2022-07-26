module.exports = {
  rules: {
    // https://eslint.vuejs.org/rules/attribute-hyphenation.html
    'vue/attribute-hyphenation': [
      2,
      'never'
    ],
    // https://eslint.vuejs.org/rules/attributes-order.html
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
    // https://eslint.vuejs.org/rules/component-name-in-template-casing.html
    'vue/component-name-in-template-casing': [
      2,
      'kebab-case',
      {
        ignores: []
      }
    ],
    // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
    'vue/html-closing-bracket-newline': [
      2,
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    // https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never'
      }
    ],
    // https://eslint.vuejs.org/rules/html-end-tags.html
    'vue/html-end-tags': 2,
    // https://eslint.vuejs.org/rules/html-indent.html
    'vue/html-indent': [
      1,
      2
    ],
    // https://eslint.vuejs.org/rules/html-quotes.html
    'vue/html-quotes': [
      2,
      'double'
    ],
    // https://eslint.vuejs.org/rules/html-self-closing.html
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
    // https://eslint.vuejs.org/rules/max-attributes-per-line.html
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
    // https://eslint.vuejs.org/rules/first-attribute-linebreak.html
    'vue/first-attribute-linebreak': [
      2,
      {
        singleline: 'beside',
        multiline: 'beside'
      }
    ],
    // https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
    'vue/multiline-html-element-content-newline': [
      2,
      {
        ignores: [
          'pre',
          'textarea'
        ]
      }
    ],
    // https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
    'vue/mustache-interpolation-spacing': [
      2,
      'always'
    ],
    // https://eslint.vuejs.org/rules/name-property-casing.html
    'vue/name-property-casing': [
      2,
      'kebab-case'
    ],
    // https://eslint.vuejs.org/rules/no-async-in-computed-properties.html
    'vue/no-async-in-computed-properties': 2,
    // https://eslint.vuejs.org/rules/no-dupe-keys.html
    'vue/no-dupe-keys': [
      2,
      {
        groups: []
      }
    ],
    // https://eslint.vuejs.org/rules/no-duplicate-attributes.html
    'vue/no-duplicate-attributes': [
      2,
      {
        allowCoexistClass: true,
        allowCoexistStyle: true
      }
    ],
    // https://eslint.vuejs.org/rules/no-multi-spaces.html
    'vue/no-multi-spaces': [
      2,
      {
        ignoreProperties: true
      }
    ],
    // https://eslint.vuejs.org/rules/no-parsing-error.html
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
    // https://eslint.vuejs.org/rules/no-reserved-keys.html
    'vue/no-reserved-keys': [
      2,
      {
        reserved: [],
        groups: []
      }
    ],
    // https://eslint.vuejs.org/rules/no-shared-component-data.html
    'vue/no-shared-component-data': 2,
    // https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
    'vue/no-side-effects-in-computed-properties': 1,
    // https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html
    'vue/no-spaces-around-equal-signs-in-attribute': 2,
    // https://eslint.vuejs.org/rules/no-template-key.html
    'vue/no-template-key': 2,
    // https://eslint.vuejs.org/rules/no-template-shadow.html
    'vue/no-template-shadow': 2,
    // https://eslint.vuejs.org/rules/no-textarea-mustache.html
    'vue/no-textarea-mustache': 2,
    // https://eslint.vuejs.org/rules/no-unused-components.html
    'vue/no-unused-components': [
      1,
      {
        ignoreWhenBindingPresent: false
      }
    ],
    // https://eslint.vuejs.org/rules/no-unused-vars.html
    'vue/no-unused-vars': 1,
    // https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
    'vue/no-use-v-if-with-v-for': [
      2,
      {
        allowUsingIterationVar: true
      }
    ],
    // https://eslint.vuejs.org/rules/no-v-html.html
    'vue/no-v-html': 0,
    // https://eslint.vuejs.org/rules/order-in-components.html
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
    // https://eslint.vuejs.org/rules/prop-name-casing.html
    'vue/prop-name-casing': [
      2,
      'camelCase'
    ],
    // https://eslint.vuejs.org/rules/require-component-is.html
    'vue/require-component-is': 2,
    // https://eslint.vuejs.org/rules/require-default-prop.html
    'vue/require-default-prop': 2,
    // https://eslint.vuejs.org/rules/require-prop-type-constructor.html
    'vue/require-prop-type-constructor': 2,
    // https://eslint.vuejs.org/rules/require-prop-types.html
    'vue/require-prop-types': 2,
    // https://eslint.vuejs.org/rules/require-render-return.html
    'vue/require-render-return': 2,
    // https://eslint.vuejs.org/rules/require-v-for-key.html
    'vue/require-v-for-key': 2,
    // https://eslint.vuejs.org/rules/require-valid-default-prop.html
    'vue/require-valid-default-prop': 2,
    // https://eslint.vuejs.org/rules/return-in-computed-property.html
    'vue/return-in-computed-property': [
      2,
      {
        treatUndefinedAsUnspecified: false
      }
    ],
    // https://eslint.vuejs.org/rules/script-indent.html
    'vue/script-indent': [
      1,
      2,
      {
        baseIndent: 1,
        switchCase: 0,
        ignores: []
      }
    ],
    // https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
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
    // https://eslint.vuejs.org/rules/this-in-template.html
    'vue/this-in-template': [
      2,
      'never'
    ],
    // https://eslint.vuejs.org/rules/use-v-on-exact.html
    'vue/use-v-on-exact': 1,
    // https://eslint.vuejs.org/rules/v-bind-style.html
    'vue/v-bind-style': [
      1,
      'shorthand'
    ],
    // https://eslint.vuejs.org/rules/v-on-style.html
    'vue/v-on-style': [
      1,
      'shorthand'
    ],
    // https://eslint.vuejs.org/rules/valid-template-root.html
    'vue/valid-template-root': 2,
    // https://eslint.vuejs.org/rules/valid-v-bind.html
    'vue/valid-v-bind': 2,
    // https://eslint.vuejs.org/rules/valid-v-cloak.html
    'vue/valid-v-cloak': 2,
    // https://eslint.vuejs.org/rules/valid-v-else-if.html
    'vue/valid-v-else-if': 2,
    // https://eslint.vuejs.org/rules/valid-v-else.html
    'vue/valid-v-else': 2,
    // https://eslint.vuejs.org/rules/valid-v-for.html
    'vue/valid-v-for': 2,
    // https://eslint.vuejs.org/rules/valid-v-html.html
    'vue/valid-v-html': 2,
    // https://eslint.vuejs.org/rules/valid-v-if.html
    'vue/valid-v-if': 2,
    // https://eslint.vuejs.org/rules/valid-v-model.html
    'vue/valid-v-model': 2,
    // https://eslint.vuejs.org/rules/valid-v-on.html
    'vue/valid-v-on': 2,
    // https://eslint.vuejs.org/rules/valid-v-once.html
    'vue/valid-v-once': 2,
    // https://eslint.vuejs.org/rules/valid-v-pre.html
    'vue/valid-v-pre': 2,
    // https://eslint.vuejs.org/rules/valid-v-show.html
    'vue/valid-v-show': 2,
    // https://eslint.vuejs.org/rules/valid-v-text.html
    'vue/valid-v-text': 2,
    // https://eslint.vuejs.org/rules/v-on-function-call.html
    'vue/v-on-function-call': [
      2,
      'never'
    ],
    // https://eslint.vuejs.org/rules/require-direct-export.html
    'vue/require-direct-export': 0,
    // https://eslint.vuejs.org/rules/no-boolean-default.html
    'vue/no-boolean-default': 0,
    // https://eslint.vuejs.org/rules/match-component-file-name.html
    'vue/match-component-file-name': 0,
    // https://eslint.vuejs.org/rules/array-bracket-spacing.html
    'vue/array-bracket-spacing': [
      1,
      'never'
    ],
    // https://eslint.vuejs.org/rules/eqeqeq.html
    'vue/eqeqeq': [
      2,
      'always'
    ],
    // https://eslint.vuejs.org/rules/key-spacing.html
    'vue/key-spacing': [
      1,
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    // https://eslint.vuejs.org/rules/object-curly-spacing.html
    'vue/object-curly-spacing': [
      1,
      'never'
    ],
    // https://eslint.vuejs.org/rules/space-infix-ops.html
    'vue/space-infix-ops': [
      1,
      {
        int32Hint: true
      }
    ],
    // https://eslint.vuejs.org/rules/space-unary-ops.html
    'vue/space-unary-ops': [
      1,
      {
        words: true,
        nonwords: false
      }
    ],
    // https://eslint.vuejs.org/rules/no-restricted-syntax.html
    'vue/no-restricted-syntax': 0,
    // https://eslint.vuejs.org/rules/arrow-spacing.html
    'vue/arrow-spacing': [
      1,
      {
        before: true,
        after: true
      }
    ],
    // https://eslint.vuejs.org/rules/block-spacing.html
    'vue/block-spacing': [
      1,
      'never'
    ],
    // https://eslint.vuejs.org/rules/brace-style.html
    'vue/brace-style': [
      1,
      'stroustrup',
      {
        allowSingleLine: true
      }
    ],
    // https://eslint.vuejs.org/rules/camelcase.html
    'vue/camelcase': [
      1,
      {
        properties: 'never',
        ignoreDestructuring: true
      }
    ],
    // https://eslint.vuejs.org/rules/comma-dangle.html
    'vue/comma-dangle': [
      1,
      'never'
    ],
    // https://eslint.vuejs.org/rules/padding-line-between-blocks.html
    'vue/padding-line-between-blocks': [
      1,
      'always'
    ],
    // https://eslint.vuejs.org/rules/component-definition-name-casing.html
    'vue/component-definition-name-casing': [2, 'kebab-case'],
    // https://eslint.vuejs.org/rules/comment-directive.html
    'vue/comment-directive': [
      2, {
        reportUnusedDisableDirectives: false
      }
    ],
    // https://eslint.vuejs.org/rules/jsx-uses-vars.html
    'vue/jsx-uses-vars': 0,
    // https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html
    'vue/no-deprecated-scope-attribute': 2,
    // https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html
    'vue/no-deprecated-slot-attribute': 2,
    // https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html
    'vue/no-deprecated-slot-scope-attribute': 2,
    // https://eslint.vuejs.org/rules/no-v-for-template-key.html
    'vue/no-v-for-template-key': 2,
    // https://eslint.vuejs.org/rules/multi-word-component-names.html
    'vue/multi-word-component-names': 0,
    // https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html
    'vue/no-arrow-functions-in-watch': 2,
    // https://eslint.vuejs.org/rules/no-computed-properties-in-data.html
    'vue/no-computed-properties-in-data': 2,
    // https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html
    'vue/no-custom-modifiers-on-v-model': 2,
    // https://eslint.vuejs.org/rules/no-dupe-v-else-if.html
    'vue/no-dupe-v-else-if': 2,
    // https://eslint.vuejs.org/rules/no-multiple-template-root.html
    'vue/no-multiple-template-root': 2,
    // https://eslint.vuejs.org/rules/no-mutating-props.html
    'vue/no-mutating-props': 2,
    // https://eslint.vuejs.org/rules/no-reserved-props.html
    'vue/no-reserved-props': [
      2,
      {
        vueVersion: 2
      }
    ],
    // https://eslint.vuejs.org/rules/no-useless-template-attributes.html
    'vue/no-useless-template-attributes': 2,
    // https://eslint.vuejs.org/rules/no-v-model-argument.html
    'vue/no-v-model-argument': 2,
    // https://eslint.vuejs.org/rules/valid-next-tick.html
    'vue/valid-next-tick': 2,
    // https://eslint.vuejs.org/rules/valid-v-bind-sync.html
    'vue/valid-v-bind-sync': 2,
    // https://eslint.vuejs.org/rules/valid-v-slot.html
    'vue/valid-v-slot': [
      2,
      {
        allowModifiers: false
      }
    ],
    // https://eslint.vuejs.org/rules/one-component-per-file.html
    'vue/one-component-per-file': 2,
    // https://eslint.vuejs.org/rules/v-slot-style.html
    'vue/v-slot-style': [
      2,
      {
        atComponent: 'shorthand',
        default: 'shorthand',
        named: 'shorthand'
      }
    ],
    // https://eslint.vuejs.org/rules/component-tags-order.html
    'vue/component-tags-order': [
      2,
      {
        order: ['script', 'template', 'style']
      }
    ],
    // https://eslint.vuejs.org/rules/no-lone-template.html
    'vue/no-lone-template': [
      2,
      {
        ignoreAccessible: false
      }
    ],
    // https://eslint.vuejs.org/rules/no-multiple-slot-args.html
    'vue/no-multiple-slot-args': 2,
    // https://eslint.vuejs.org/rules/block-lang.html
    'vue/block-lang': [
      2,
      {
        script: {
          lang: 'ts'
        }
      }
    ],
    // https://eslint.vuejs.org/rules/block-tag-newline.html
    'vue/block-tag-newline': 0,
    // https://eslint.vuejs.org/rules/component-api-style.html
    'vue/component-api-style': 0,
    // https://eslint.vuejs.org/rules/component-options-name-casing.html
    'vue/component-options-name-casing': [
      2,
      'kebab-case'
    ],
    // https://eslint.vuejs.org/rules/custom-event-name-casing.html
    'vue/custom-event-name-casing': [
      2,
      'kebab-case',
      {
        ignores: []
      }
    ],
    // https://eslint.vuejs.org/rules/html-button-has-type.html
    'vue/html-button-has-type': [
      2,
      {
        button: true,
        submit: true,
        reset: true
      }
    ],
    // https://eslint.vuejs.org/rules/html-comment-content-newline.html
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
    // https://eslint.vuejs.org/rules/html-comment-content-spacing.html
    'vue/html-comment-content-spacing': [
      2,
      'always',
      {
        exceptions: []
      }
    ],
    // https://eslint.vuejs.org/rules/html-comment-indent.html
    'vue/html-comment-indent': [
      2,
      2
    ],
    // https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html
    'vue/new-line-between-multi-line-property': 0,
    // https://eslint.vuejs.org/rules/next-tick-style.html
    'vue/next-tick-style': [
      2,
      'promise'
    ],
    // https://eslint.vuejs.org/rules/no-bare-strings-in-template.html
    'vue/no-bare-strings-in-template': 0,
    // https://eslint.vuejs.org/rules/no-child-content.html
    'vue/no-child-content': 2,
    // https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html
    'vue/no-duplicate-attr-inheritance': 2,
    // https://eslint.vuejs.org/rules/no-empty-component-block.html
    'vue/no-empty-component-block': 0,
    // https://eslint.vuejs.org/rules/no-expose-after-await.html
    'vue/no-expose-after-await': 2,
    // https://eslint.vuejs.org/rules/no-invalid-model-keys.html
    'vue/no-invalid-model-keys': 2,
    // https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html
    'vue/no-multiple-objects-in-class': 2,
    // https://eslint.vuejs.org/rules/no-potential-component-option-typo.html
    'vue/no-potential-component-option-typo': [
      2,
      {
        presets: ['vue', 'vue-router', 'nuxt'],
        custom: [],
        threshold: 1
      }
    ],
    // https://eslint.vuejs.org/rules/no-reserved-component-names.html
    'vue/no-reserved-component-names': [
      2,
      {
        disallowVueBuiltInComponents: true,
        disallowVue3BuiltInComponents: false
      }
    ],
    // https://eslint.vuejs.org/rules/no-restricted-block.html
    'vue/no-restricted-block': 0,
    // https://eslint.vuejs.org/rules/no-restricted-call-after-await.html
    'vue/no-restricted-call-after-await': 0,
    // https://eslint.vuejs.org/rules/no-restricted-class.html
    'vue/no-restricted-class': 0,
    // https://eslint.vuejs.org/rules/no-restricted-component-options.html
    'vue/no-restricted-component-options': 0,
    // https://eslint.vuejs.org/rules/no-restricted-custom-event.html
    'vue/no-restricted-custom-event': 0,
    // https://eslint.vuejs.org/rules/no-restricted-props.html
    'vue/no-restricted-props': 0,
    // https://eslint.vuejs.org/rules/no-restricted-static-attribute.html
    'vue/no-restricted-static-attribute': 0,
    // https://eslint.vuejs.org/rules/no-restricted-v-bind.html
    'vue/no-restricted-v-bind': 0,
    // https://eslint.vuejs.org/rules/no-static-inline-styles.html
    'vue/no-static-inline-styles': 0,
    // https://eslint.vuejs.org/rules/no-template-target-blank.html
    'vue/no-template-target-blank': [
      2,
      {
        allowReferrer: false,
        enforceDynamicLinks: 'always'
      }
    ],
    // https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html
    'vue/no-this-in-before-route-enter': 2,
    // https://eslint.vuejs.org/rules/no-undef-components.html
    'vue/no-undef-components': 0,
    // https://eslint.vuejs.org/rules/no-undef-properties.html
    'vue/no-undef-properties': [
      2,
      {
        ignores: []
      }
    ],
    // @todo: Describe in readme that you need to specify used vuejs version by yourself
    // https://eslint.vuejs.org/rules/no-unsupported-features.html
    'vue/no-unsupported-features': [
      2,
      {
        version: '^3.2.29',
        ignores: []
      }
    ],
    // https://eslint.vuejs.org/rules/no-unused-properties.html
    'vue/no-unused-properties': [
      2,
      {
        groups: ['props'],
        deepData: false,
        ignorePublicMembers: false
      }
    ],
    // https://eslint.vuejs.org/rules/no-unused-refs.html
    'vue/no-unused-refs': 2,
    // https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html
    'vue/no-use-computed-property-like-method': 2,
    // https://eslint.vuejs.org/rules/no-useless-mustaches.html
    'vue/no-useless-mustaches': [
      2,
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],
    // https://eslint.vuejs.org/rules/no-useless-v-bind.html
    'vue/no-useless-v-bind': [
      2,
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],
    // https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html
    'vue/no-v-text-v-html-on-component': 2,
    // https://eslint.vuejs.org/rules/no-v-text.html
    'vue/no-v-text': 2,
    // https://eslint.vuejs.org/rules/prefer-separate-static-class.html
    'vue/prefer-separate-static-class': 2,
    // https://eslint.vuejs.org/rules/require-emit-validator.html
    'vue/require-emit-validator': 2,
    // https://eslint.vuejs.org/rules/require-expose.html
    'vue/require-expose': 0,
    // https://eslint.vuejs.org/rules/require-name-property.html
    'vue/require-name-property': 2,
    // https://eslint.vuejs.org/rules/sort-keys.html
    'vue/sort-keys': 0,
    // https://eslint.vuejs.org/rules/static-class-names-order.html
    'vue/static-class-names-order': 0,
    // https://eslint.vuejs.org/rules/v-for-delimiter-style.html
    'vue/v-for-delimiter-style': [
      2,
      'in'
    ],
    // https://eslint.vuejs.org/rules/array-bracket-newline.html
    'vue/array-bracket-newline': [
      1,
      {
        multiline: true
      }
    ],
    // https://eslint.vuejs.org/rules/comma-spacing.html
    'vue/comma-spacing': [
      1,
      {
        before: false,
        after: true
      }
    ],
    // https://eslint.vuejs.org/rules/comma-style.html
    'vue/comma-style': [
      1,
      'last'
    ],
    // https://eslint.vuejs.org/rules/dot-location.html
    'vue/dot-location': [
      1,
      'property'
    ],
    // https://eslint.vuejs.org/rules/dot-notation.html
    'vue/dot-notation': 1,
    // https://eslint.vuejs.org/rules/func-call-spacing.html
    'vue/func-call-spacing': [
      1,
      'never'
    ],
    // https://eslint.vuejs.org/rules/keyword-spacing.html
    'vue/keyword-spacing': [
      1,
      {
        before: true,
        after: true
      }
    ],
    // https://eslint.vuejs.org/rules/max-len.html
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
    // https://eslint.vuejs.org/rules/no-constant-condition.html
    'vue/no-constant-condition': 1,
    // https://eslint.vuejs.org/rules/no-empty-pattern.html
    'vue/no-empty-pattern': 2,
    // https://eslint.vuejs.org/rules/no-extra-parens.html
    'vue/no-extra-parens': [
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
    // https://eslint.vuejs.org/rules/no-irregular-whitespace.html
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
    'vue/no-loss-of-precision': 2,
    // https://eslint.vuejs.org/rules/no-sparse-arrays.html
    'vue/no-sparse-arrays': 2,
    // https://eslint.vuejs.org/rules/no-useless-concat.html
    'vue/no-useless-concat': 1,
    // https://eslint.vuejs.org/rules/object-curly-newline.html
    'vue/object-curly-newline': [
      1,
      {
        multiline: true,
        consistent: true
      }
    ],
    // https://eslint.vuejs.org/rules/object-property-newline.html
    'vue/object-property-newline': [
      1,
      {
        allowAllPropertiesOnSameLine: true
      }
    ],
    // https://eslint.vuejs.org/rules/object-shorthand.html
    'vue/object-shorthand': [
      1,
      'always'
    ],
    // https://eslint.vuejs.org/rules/operator-linebreak.html
    'vue/operator-linebreak': [
      1,
      'after'
    ],
    // https://eslint.vuejs.org/rules/prefer-template.html
    'vue/prefer-template': 1,
    // https://eslint.vuejs.org/rules/quote-props.html
    'vue/quote-props': [
      1,
      'consistent-as-needed',
      {
        numbers: true
      }
    ],
    // https://eslint.vuejs.org/rules/space-in-parens.html
    'vue/space-in-parens': [
      1,
      'never'
    ],
    // https://eslint.vuejs.org/rules/template-curly-spacing.html
    'vue/template-curly-spacing': [
      0,
      'never'
    ]
  }
}