<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import Breadcrumbs from './Breadcrumbs/Breadcrumbs.vue'
  import {reactive} from 'vue-demi'

  const items = reactive([
    {
      name: "Главная",
      path: '/',
    },
    {
      name: "Категория 1",
      path: "/category_1",
    },
    {
      name: "Категория 1.2",
      path: "/category_1/category_1.2",
    },
    {
      name: "Товар",
      path: "/category_1/category_1.2/product",
    },
  ])


</script>

<template>
  <div>

    <h2>Слот крошки / последний НЕактивный </h2>

    <Breadcrumbs :items="items" :isActiveLastItem="false" class="dc-breadcrumbs">

      <template #item="slotItem">
        <div class="c-breadcrumbs__wrap">
          <h4 class="dc-breadcrumbs__name-item">
            {{ slotItem.item.name }}
          </h4>
          <span class="dc-breadcrumbs__path">
            ({{ slotItem.item.path }})
          </span>
        </div>
      </template>

    </Breadcrumbs>


    <h2>Слот крошки / последний НЕактивный кастомизированный </h2>

    <Breadcrumbs :items="items" :isActiveLastItem="false" class="dc-breadcrumbs">

      <template #item="slotItem">
        <div class="c-breadcrumbs__wrap" :class="{'custom-last-item__no-active': slotItem.isLastItem}">
          <h4 class="dc-breadcrumbs__name-item">
            {{ slotItem.item.name }}
          </h4>
        </div>
      </template>

    </Breadcrumbs>

    <h2>Слот крошки + слот сепаратор / последний НЕактивный кастомизированный</h2>
    <Breadcrumbs :items="items" :isActiveLastItem="false"  class="dc-breadcrumbs">

      <template #item="slotItem">
        <div class="c-breadcrumbs__wrap" :class="{'custom-last-item': slotItem.isLastItem}">
          <h4 class="dc-breadcrumbs__name-item">
            {{ slotItem.item.name }}
          </h4>
          <span v-if="slotItem.isLastItem">
            -isLastItem
          </span>
        </div>
      </template>

      <template #separator>
        <span class="custom-separator-round">

        </span>
      </template>

    </Breadcrumbs>

    <h2>Слот крошки + слот сепаратор / последний активный кастомизированный</h2>
    <Breadcrumbs :items="items" class="dc-breadcrumbs">

      <template #item="slotItem">
        <div class="c-breadcrumbs__wrap" :class="{'custom-last-item': slotItem.isLastItem}">
          <h4 class="dc-breadcrumbs__name-item">
            {{ slotItem.item.name }}
          </h4>
          <span> {{slotItem.attrs}}</span>
          <span v-if="slotItem.isLastItem">
             -isLastItem
          </span>
        </div>
      </template>

      <template #separator>
        <span class="custom-separator">
            |
        </span>
      </template>

    </Breadcrumbs>

  </div>
</template>

<style>
  .dc-breadcrumbs{

  }
  ul{
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
  }
  li{
    margin-right: 12px;
  }
  a{
    /*padding: 8px;*/
    /*background: aquamarine;*/
  }
  .c-breadcrumbs__wrap{
    display: inline-flex;
    align-items: center;
  }
  .dc-breadcrumbs__name-item{
    display: inline;
  }
  .custom-last-item{
    color: brown;
  }
  .custom-last-item__no-active{
    color: gray;
    font-size: 25px;
  }

  .custom-separator{
    display: inline-block;
    padding-left: 8px;
    padding-right: 8px;
    background: burlywood;
    margin-left: 20px;
    margin-right: 8px;
    border-radius: 20px;
  }
  .custom-separator-round{
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: #2567c9;
    margin-left: 20px;
    margin-right: 8px;

  }
</style>