<script >
export default {
    name: "breadcrumbs",
    props: {
      items:{
        type: Array,
        required: true,
        default: () => []
      },
      isActiveLastItem: {
        type: Boolean,
        default: true
      },
      linkComponent: {
        type:String,
        required: false,
        // todo подумать над default linkComponent
        default: "a"
      }
    },

    methods: {
      isLastItem(index) {
        return index === this.items.length - 1
      },

      componentName(index) {
        if (this.isLastItem(index)){
          return this.isActiveLastItem ? this.linkComponent : 'div'
        }
        return this.linkComponent
      },
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
        <component :is="componentName(index)" itemprop="item"
           :href="item.path">
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