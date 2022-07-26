<script lang="ts" >
  import {defineComponent} from 'vue-demi'
  import {PropType} from 'vue'
  import {attachClass, isLast} from '../../utils'
  import {
    IBreadcrumb,
    TBreadcrumbTag,
    TLinkBreadcrumbTag,
    THrefAttribute,
    ILinkOptions,
    IBreadcrumbsCSSOptions, EBreadcrumbsCSSClasses
  } from './types'

  export default defineComponent({
    name: 'd-breadcrumbs',
    expose: [],
    props: {
      items: {
        type: Array as PropType<IBreadcrumb[]>,
        required: true,
        default: () => []
      },
      linkComponent: {
        type: String as PropType<TLinkBreadcrumbTag>,
        required: false,
        default: 'a'
      },
      cssOptions: {
        type: Object as PropType<IBreadcrumbsCSSOptions>,
        required: false,
        default: () => ({
          classes: {
            [EBreadcrumbsCSSClasses.List]: '',
            [EBreadcrumbsCSSClasses.ListItem]: '',
            [EBreadcrumbsCSSClasses.ListItemLink]: ''
          },
          mergeWithDefaults: false
        })
      }
    },

    data () {
      return {
        isLast
      }
    },

    computed: {
      hrefAttribute (): THrefAttribute {
        return this.linkComponent === 'a' ? 'href' : 'to'
      },

      attachedClasses (): IBreadcrumbsCSSOptions['classes'] {
        const {classes, mergeWithDefaults} = this.cssOptions

        return Object.entries(classes)
          .reduce((classNamesObject, [className, classValue]) => Object.assign(
            classNamesObject,
            {
              [className]: attachClass(classValue, this.$style[className], {
                mergeWithDefaults
              })
            }
          ), {
            [EBreadcrumbsCSSClasses.List]: '',
            [EBreadcrumbsCSSClasses.ListItem]: '',
            [EBreadcrumbsCSSClasses.ListItemLink]: ''
          })
      }
    },

    methods: {
      getComponent (index: number): TBreadcrumbTag {
        return isLast(index, this.items) ? 'div' : this.linkComponent
      },

      linkOptions (item: IBreadcrumb, index: number): ILinkOptions {
        if (isLast(index, this.items)) {
          return {}
        }

        return {
          [this.hrefAttribute]: item.path
        }
      }
    }
  })
</script>

<template>
  <nav>
    <ul itemscope
        :class="attachedClasses.list"
        itemtype="http://schema.org/BreadcrumbList">
      <li v-for="(item, index) in items"
          :key="item.path"
          :class="attachedClasses.listItem"
          itemprop="itemListElement"
          itemtype="http://schema.org/ListItem"
          itemscope>
        <component :is="getComponent(index)"
                   :class="attachedClasses.listItemLink"
                   v-bind="linkOptions(item, index)"
                   itemprop="item">
          <slot name="item"
                :item="item"
                :isLastItem="isLast(index, items)"
                :attrs="{itemprop: 'name'}"/>
          <meta itemprop="position"
                :content="index">
        </component>
        <slot v-if="!isLast(index, items)"
              name="separator"/>
      </li>
    </ul>
  </nav>
</template>

<style module>
  .list {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
  }

  .listItem {
    display: inline-flex;
    align-items: center;
    position: relative;
  }

  .listItemLink {}
</style>