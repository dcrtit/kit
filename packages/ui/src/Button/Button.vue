<script lang="ts">
  import {defineComponent} from 'vue-demi'

  export default defineComponent({
    name: 'c-button',
    props:{

      linkComponent: {
        type: String,
        required: false,
        default: 'a'
      },
      type: {
        type: String,
        default: 'button'
      },
      to: {
        type: String,
        required: false,
        default: null
      },
      disabled: {
        type: Boolean,
        default: false
      },
      //todo как использовать?
      loading: {
        type: Boolean,
        default: false
      },

    },

    computed: {
      component () {
        return this.to ? this.linkComponent : 'button'
      },

      isLink () {
        return this.component !== 'button'
      },

      typeLinkAtrr() {

        return  this.linkComponent === "a" ? 'href' : 'to'
      },

      options() {
        if (this.isLink) {
          //если ссылка
          return {
            [this.typeLinkAtrr]: this.to,
            event: this.isLink && !this.disabled ? 'click' : null
          }
        }
        // если кнопка
        return {
          disabled: this.disabled,
          type: this.type,
        }
      },
    },

    methods: {
      onClick() {
        console.log('btn click')
      }
    }
  })
</script>

<template>
  <component :is="component"
             v-bind="options"
             @click="onClick">

    <slot name="prependIcon"/>
    <slot/>
    <slot name="appendIcon"/>

  </component>
</template>

<style/>


