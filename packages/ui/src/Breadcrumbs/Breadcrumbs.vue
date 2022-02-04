<script >
  export default {
    name: "breadcrumbs",
    props: {
      items:{
        type: Array,
        required: true,
        default: () => []
      },
      linkComponent: {
        type:String,
        required: false,
        default: "a"
      }
    },

    computed: {
      typeLinkAtrr() {
        return  this.linkComponent === "a" ? 'href' : 'to'
      }
    },

    methods: {
      isLastItem(index) {
        return index === this.items.length - 1
      },

      componentName(index) {
        return this.isLastItem(index) ? "div" : this.linkComponent
      },

      linkOptions(item, index) {
        if (this.isLastItem(index)) {
          return {}
        }
        return {
          [this.typeLinkAtrr]: item.path,
        }
      }
    }
  };
</script>

<template>
  <nav>
    <ul itemscope
        itemtype="http://schema.org/BreadcrumbList">
      <li v-for="(item, index) in items"
          :key="item.path"
          itemprop="itemListElement"
          itemtype="http://schema.org/ListItem"
          itemscope>
        <component :is="componentName(index)"
                   v-bind="linkOptions(item, index)"
                   itemprop="item">

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