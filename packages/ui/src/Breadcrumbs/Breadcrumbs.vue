<script setup>
  import {ref} from 'vue-demi'

  const testVModelVar = ref('')
</script>

<template>
  <div>
    Hello, Im breadcrumbs
    <input type="text" v-model="testVModelVar">
    {{ testVModelVar }}
  </div>
</template>

<style/>