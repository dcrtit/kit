<script lang="ts">
import {defineComponent} from 'vue-demi'

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