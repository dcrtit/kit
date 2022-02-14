<script lang="ts">
import {defineComponent} from 'vue-demi'
import {
  TCheckboxValueObject,
  TCheckboxModel,
  TCheckboxValue,
  ICheckboxOptions
} from "./Checkbox.types";
import { IEvent } from '../libs/types';
import {PropType} from "vue";

export default defineComponent ({
  name: "c-checkbox",
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: {
      type: [Array,Boolean] as PropType<TCheckboxModel>,
      default: false
    },
    value: {
      type: [String, Object, Number, Boolean] as PropType<TCheckboxValue>,
      default: ''
    },
    comparatorField: {
      type: String,
      required: false,
      default: 'value'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
  },

  computed: {
    isChecked (): boolean {
      let checked: boolean = false

      if (typeof this.modelValue === 'boolean') {
        // если булев тип, равно значению modelValue
        checked = this.modelValue
      }
      else if (Array.isArray(this.modelValue)) {
        // если массив значений
        if (['string', 'number'].includes(typeof this.value)) {
          // массив примитивов - проверяем содержит ли он значение "value"
          checked = this.modelValue.includes(this.value)
        }
        else if (typeof this.value === 'object') {
          // массив объектов проверяем содержит ли он объект "value"
          checked = Boolean(this.modelValue.find((value: TCheckboxValue): boolean =>
              (value as TCheckboxValueObject)[this.comparatorField] === (this.value as TCheckboxValueObject)[this.comparatorField]))
        }
      }

      return checked
    },

    checkboxOptions (): ICheckboxOptions {
      return {
        disabled: this.disabled,
        checked: this.isChecked,
        required: this.required
      }
    }
  },

  methods: {
    onChange (e: IEvent<HTMLInputElement>): void {
      if (!this.disabled) {
        const checked: boolean = e.target.checked

        if (typeof this.modelValue === 'boolean') {
          this.$emit('change', e, checked)
        }
        else if (Array.isArray(this.modelValue)) {
          const newModelValue: TCheckboxModel = this.modelValue.slice()

          if (['string', 'number'].includes(typeof this.value)) {
            if (checked) {
              newModelValue.push(this.value)
            }
            else {
              newModelValue.splice(newModelValue.indexOf(this.value), 1)
            }
          }
          else if (typeof this.value === 'object') {
            console.log('object!!!')
            if (!this.comparatorField) {
              throw new Error('comparatorField should be specified when the checkbox value\'s type is object')
            }

            const valueIndex: number = newModelValue.findIndex((value: TCheckboxValue): boolean => (value as TCheckboxValueObject)[this.comparatorField] === (this.value as TCheckboxValueObject)[this.comparatorField])

            if (checked) {
              newModelValue.push(this.value)
            }
            else {
              newModelValue.splice(valueIndex, 1)
            }
          }
          this.$emit('change', e, newModelValue)
        }
      }
    }
  }

})

</script>

<template>
  <label >
    <input type="checkbox"
           v-bind="checkboxOptions"
           @change.stop="onChange">

    <slot/>
    <slot name="checkboxIcon"></slot>
  </label>
</template>


<style/>