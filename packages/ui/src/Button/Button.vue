<script lang="ts">
  import {defineComponent} from 'vue-demi'
  import {PropType} from 'vue'
  import {TLinkButtonTag, TButtonComponent, TButtonType, TLinkAttribute, IButtonOptions} from './Button.types'

  export default defineComponent({
    name: 'c-button',
    props:{

      linkTag: {
        type: String as PropType<TLinkButtonTag>,
        required: false,
        default: 'a'
      },
      type: {
        type: String as PropType<TButtonType>,
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
      component (): TButtonComponent {
        return this.to ? this.linkTag : 'button'
      },

      isLink (): Boolean {
        return this.component !== 'button'
      },

      typeLinkAtrr(): TLinkAttribute {
        return  this.linkTag === 'a' ? 'href' : 'to'
      },

      options(): IButtonOptions {
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


