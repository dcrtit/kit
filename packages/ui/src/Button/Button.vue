<script lang="ts">

</script>

<template>
  <component :is="componentName"
             v-bind="options"
             @click="onClick">

    <slot name="prependIcon"/>
    <slot/>
    <slot name="appendIcon"/>

  </component>
</template>

<style/>


