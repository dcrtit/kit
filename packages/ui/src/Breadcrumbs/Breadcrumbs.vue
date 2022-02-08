<script lang="ts" >
  import {IBreadcrumb, TBreadcrumbTag, TLinkBreadcrumbTag, TLinkAttribute, ILinkOptions} from "./types";
  import {defineComponent} from "vue-demi";
  import {PropType} from "vue";

  export default defineComponent ({
    name: "breadcrumbs",
    props: {
      items:{
        type: Array as PropType<IBreadcrumb[]>,
        required: true,
        default: () => []
      },
      linkComponent: {
        type: String as PropType<TLinkBreadcrumbTag>,
        required: false,
        default: "a"
      }
    },

    computed: {
      typeLinkAtrr(): TLinkAttribute {
        return  this.linkComponent === "a" ? 'href' : 'to'
      }
    },

    methods: {
      isLastItem(index: number): boolean {
        return index === this.items.length - 1
      },

      componentName(index: number): TBreadcrumbTag {
        return this.isLastItem(index) ? "div" : this.linkComponent
      },

      linkOptions(item: IBreadcrumb, index: number): ILinkOptions {
        if (this.isLastItem(index)) {
          return {}
        }
        return {
          [this.typeLinkAtrr]: item.path,
        }
      }
    }
  });
</script>

<template>
  <nav>
    <ul itemscope
        itemtype="http://schema.org/BreadcrumbList"
        style="list-style: none; display: flex; align-items: center; justify-content: flex-start; margin: 0; padding: 0;">
      <li v-for="(item, index) in items"
          :key="item.path"
          itemprop="itemListElement"
          itemtype="http://schema.org/ListItem"
          itemscope
          style="display: inline-flex; align-items: center; position: relative;">
        <component :is="componentName(index)"
                   v-bind="linkOptions(item, index)"
                   itemprop="item"
                   style="">
          <slot name="item" :item="item" :isLastItem="isLastItem(index)" :attrs="{itemprop: 'name'}"></slot>
          <meta itemprop="position"
                :content="index">
        </component>
        <slot v-if="!isLastItem(index)" name="separator"></slot>
      </li>
    </ul>
  </nav>
</template>

<style/>