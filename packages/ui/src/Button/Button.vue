<script lang="ts">
  import {defineComponent} from 'vue-demi'
  import {PropType} from 'vue'
  import {THrefAttribute, TLinkTag} from '../../types'
  import {getAttachedClasses} from '../../utils'
  import {TButtonTag} from './types'

  export default defineComponent({
    name: 'd-button',
    expose: [],
    props: {
      to: {
        type: String,
        required: false,
        default: ''
      },
      href: {
        type: String,
        required: false,
        default: ''
      },
      loading: {
        type: Boolean,
        required: false,
        default: false
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      },
      linkComponent: {
        type: String as PropType<TLinkTag>,
        required: false,
        default: 'a'
      },
      cssOptions: {
        type: Object,
        required: false,
        default: () => ({
          classes: {
            button: '',
            prependIcon: '',
            text: '',
            appendIcon: ''
          },
          mergeWithDefaults: false
        })
      }
    },
    computed: {
      buttonClasses () {
        return getAttachedClasses(this.cssOptions.classes.button, this.$style.button, {
          mergeWithDefaults: this.cssOptions.mergeWithDefaults
        })
      },

      component (): TButtonTag {
        return this.to ? this.linkComponent : 'button'
      },

      isLink (): boolean {
        return this.component !== 'button'
      },

      hrefAttribute (): THrefAttribute {
        return this.linkComponent === 'a' ? 'href' : 'to'
      }
    }
  })
</script>

<template>
  <component :is="component">
    <span v-if="$slots.prependIcon">
      <slot name="prependIcon"
            :loading="loading"
            :disabled="disabled"/>
    </span>
    <span>
      <slot :loading="loading"
            :disabled="disabled"/>
    </span>
    <span v-if="$slots.appendIcon">
      <slot name="appendIcon"
            :loading="loading"
            :disabled="disabled"/>
    </span>
  </component>
</template>

display: this.fullWidth? 'flex' : 'inline-flex',
flex: this.fullWidth? '1 0 auto' : '0 0 auto',
minWidth: this.fullWidth? '100%!important' : 'auto',
alignItems: 'center',
justifyContent: 'center',
position: 'relative',
textDecoration: 'none',
<style module>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    appearance: none;
    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
  }

  .prependIcon {
    display: block;
  }

  .text {

  }

  .appendIcon {
    display: block;
  }
</style>