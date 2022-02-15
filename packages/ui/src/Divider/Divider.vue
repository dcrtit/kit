<script lang="ts">
  import {defineComponent} from 'vue-demi'
  import {PropType} from 'vue'
  import {TDividerAriaOrientation, TDividerOptions, TDividerRole, TDividerStyle} from './Divider.types'
  import {dividerRoleVariants} from './libs/variants'

  export default defineComponent({
    name: 'c-divider',
    inheritAttrs: false,
    props: {
      vertical: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: false
      },
      role: {
        type: String as PropType<TDividerRole>,
        required: false,
        default: 'separator',
        validator (role: TDividerRole): boolean {
          return dividerRoleVariants.includes(role)
        }
      }
    },
    expose: [],
    computed: {
      ariaOrientation (): TDividerAriaOrientation | undefined {
        const {role} = this

        if (role === 'separator') {
          if (this.vertical) {
            return 'vertical'
          }

          return 'horizontal'
        }

        return undefined
      },
      style (): TDividerStyle {
        return {
          display: this.vertical ? 'inline-flex' : 'block',
          flex: '1 1 0px',
          width: this.vertical ? '0px' : undefined,
          maxWidth: this.vertical ? '0px' : '100%',
          height: this.vertical ? 'inherit' : '0px',
          minHeight: this.vertical ? '100%' : undefined,
          maxHeight: this.vertical ? '100%' : '0px',
          border: 'solid',
          borderWidth: this.vertical ? '0 thin 0 0' : 'thin 0 0 0',
          transition: 'inherit',
          alignSelf: this.vertical ? 'stretch' : undefined,
          verticalAlign: this.vertical ? 'text-bottom' : undefined,
          margin: this.vertical ? '0 -1px' : undefined
        }
      },
      options (): TDividerOptions {
        return {
          ariaOrientation: this.ariaOrientation,
          role: this.role,
          style: this.style,
          ...this.$attrs
        }
      }
    }
  })
</script>

<template>
  <hr v-bind="options">
</template>