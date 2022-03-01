<script lang="ts">
  import {PropType} from 'vue'
  import {
    defineComponent,
    computed,
    ComputedRef
  } from 'vue-demi'
  import {IRadioOptions} from './Radio.types'

  export default defineComponent({
    name: 'c-radio',

    emits: ['input:modelValue'],

    expose: [
      'isChecked',
      'options',
      'handleChange'
    ],

    inheritAttrs: false,

    model: {
      prop: 'modelValue',
      event: 'input'
    },

    props: {
      modelValue: {
        type: String as PropType<string>,
        default: ''
      },

      value: {
        type: String as PropType<string | undefined>,
        default: undefined
      },

      label: {
        type: String as PropType<string>,
        default: ''
      },

      name: {
        type: [String, undefined] as PropType<string | undefined>,
        default: undefined
      },

      id: {
        type: [String, undefined] as PropType<string | undefined>,
        default: undefined
      }
    },

    setup (props, context) {
      const isChecked: ComputedRef<boolean> = computed(() => props.modelValue === props.value)
      const options: ComputedRef<IRadioOptions> = computed(() => ({
        name: props.name || undefined,
        id: props.id || undefined
      }))

      const handleChange = (e: InputEvent): void => {
        const target = e.target as HTMLInputElement

        context.emit('input:modelValue', target.value)
      }

      return {
        isChecked,
        options,
        handleChange
      }
    }
  })
</script>

<template>
  <label class="c-radio">
    <input type="radio"
           :checked="isChecked"
           :value="value"
           v-bind="options"
           @change="handleChange">

    {{ label }}
  </label>
</template>
