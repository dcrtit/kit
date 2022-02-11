<script lang="ts">
import {defineComponent} from 'vue-demi'
import {
  TCheckboxValueObject,
  TCheckboxModel,
  TCheckboxValue,
  ICheckboxOptions
} from "./Checkbox.types";
import {PropType} from "vue";

export default defineComponent ({
  name: "c-checkbox",
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    //modelValue - может содержать массив [выбранных значений] или просто true/false
    modelValue: {
      type: Array as PropType<TCheckboxModel>,
      default: false
    },
    // значение чекбокса
    value: {
      type: String as PropType<TCheckboxValue>,
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

})

</script>

<template>
  <label >
    <input type="checkbox"
           v-bind="checkboxOptions" >

    <slot/>
    <slot name="checkboxIcon"></slot>
  </label>
</template>


<style/>