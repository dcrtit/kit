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
  name: "c-checkbox"
})
</script>

<template>
  <label >
    <input type="checkbox">

    <slot/>
    <slot name="checkboxIcon"></slot>
  </label>
</template>


<style/>