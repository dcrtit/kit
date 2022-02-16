module.exports = {
  rules: {
    'vue/script-setup-uses-vars': 2,
    'vue/no-deprecated-data-object-declaration': 2,
    'vue/no-deprecated-destroyed-lifecycle': 2,
    'vue/no-deprecated-dollar-listeners-api': 2,
    'vue/no-deprecated-dollar-scopedslots-api': 2,
    'vue/no-deprecated-events-api': 2,
    // No matter what version of vue we are using, it was a bad idea to use filters anyway.
    'vue/no-deprecated-filter': 2,
    'vue/no-deprecated-functional-template': 2,
    'vue/no-deprecated-html-element-is': 2,
    'vue/no-deprecated-inline-template': 2,
    'vue/no-deprecated-props-default-this': 2,
    'vue/no-deprecated-router-link-tag-prop': [
      2,
      {
        components: ['RouterLink', 'NuxtLink']
      }
    ],
    'vue/no-deprecated-v-bind-sync': 2,
    'vue/no-deprecated-v-is': 2,
    'vue/no-deprecated-v-on-native-modifier': 2,
    'vue/no-deprecated-v-on-number-modifiers': 2,
    'vue/no-deprecated-vue-config-keycodes': 2,
    'vue/no-export-in-script-setup': 2,
    'vue/no-lifecycle-after-await': 2,
    'vue/no-ref-as-operand': 2,
    'vue/no-setup-props-destructure': 2,
    'vue/no-v-for-template-key-on-child': 2,
    // Conflicts with `vue/no-v-for-template-key-on-child`.
    'vue/no-v-for-template-key': 0,
    'vue/no-watch-after-await': 2,
    'vue/require-slots-as-functions': 2,
    'vue/require-toggle-inside-transition': 2,
    'vue/return-in-emits-validator': 2,
    'vue/valid-define-emits': 2,
    'vue/valid-define-props': 2,
    'vue/valid-v-is': 2,
    'vue/valid-v-memo': 2,
    'vue/require-explicit-emits': [
      2,
      {
        allowProps: false
      }
    ],
    'vue/v-on-event-hyphenation': [
      2,
      'always',
      {
        autofix: true
      }
    ],
    'vue/no-reserved-props': [
      2,
      {
        vueVersion: 3
      }
    ],
    'vue/no-lone-template': [
      2,
      {
        ignoreAccessible: true
      }
    ],
    'vue/no-reserved-component-names': [
      2,
      {
        disallowVueBuiltInComponents: true,
        disallowVue3BuiltInComponents: true
      }
    ],
    'vue/require-expose': 2
  }
}