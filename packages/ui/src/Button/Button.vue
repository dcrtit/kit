<script lang="ts">
  import {defineComponent} from 'vue-demi'
  import {PropType} from 'vue'
  import {
    TLinkButtonTag,
    TButtonComponent,
    TButtonType,
    TLinkAttribute,
    IButtonOptions,
    TPath,
    IStyleOptions
  } from './Button.types'

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
        //todo type? default: null
        type: String as PropType<TPath>,
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
      fullWidth: {
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

      buttonOptions(): IButtonOptions {
        if (this.isLink) {
          //если ссылка
          return {
            [this.typeLinkAtrr]: this.to,
            event: this.isLink && !this.disabled ? 'click' : null,
            style: this.buttonStyle
          }
        }
        // если кнопка
        return {
          disabled: this.disabled,
          type: this.type,
          style: this.buttonStyle
        }
      },

      buttonStyle(): IStyleOptions {
        return {
          display: this.fullWidth? 'flex' : 'inline-flex',
          flex: this.fullWidth? '1 0 auto' : '0 0 auto',
          minWidth: this.fullWidth? '100%!important' : 'auto',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          textDecoration: 'none',
        }
      }
    },
  })
</script>

<template>
  <component :is="component"
             v-bind="buttonOptions">

    <slot name="prependIcon"/>
    <slot/>
    <slot name="appendIcon"/>

  </component>
</template>

<style/>

