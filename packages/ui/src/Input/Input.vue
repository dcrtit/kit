<script lang="ts">
  import {PropType} from 'vue'
  import {defineComponent} from 'vue-demi'
  import {IInputOptions, IInputProps} from './Input.types'

  export default defineComponent({
    name: 'c-input',
    inheritAttrs: false,
    props: {
      type: {
        type: String as PropType<IInputProps['type']>,
        default: 'text',
        required: false
      },
      modelValue: {
        type: String as PropType<IInputProps['modelValue']>,
        default: '',
        required: false
      },
      disabled: {
        type: Boolean as PropType<IInputProps['disabled']>,
        default: false,
        required: false
      },
      placeholder: {
        type: String as PropType<IInputProps['placeholder']>,
        default: '',
        required: false
      }
    },
    computed: {
      inputOptions (): IInputOptions {
        return {
          value: this.modelValue || '',
          type: this.type,
          placeholder: this.placeholder || '',
          disabled: this.disabled || false,
          ...this.$attrs
        }
      }
    }
  })
</script>

<template>
  <input type="text"
         v-bind="inputOptions">
</template>