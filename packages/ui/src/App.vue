<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import Breadcrumbs from './Breadcrumbs/Breadcrumbs.vue'
  import Button from './Button/Button.vue'
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
  <div class="btns ">
    <h2>кнопки</h2>

    <div content="df">
      <Button class="custom-btn mb-24 mr-24"
              to="/">
        кнопка ссылка
      </Button>

      <Button class="custom-btn mb-24 mr-24">
        кнопка кнопка
      </Button>

      <Button class="custom-btn mb-24 mr-24" disabled>
        кнопка disabled
      </Button>

      <Button class="custom-btn mb-24 mr-24"
        >
        <template #prependIcon>
          <span>slot-Icon</span>
        </template>
        кнопка 2
        <template #appendIcon>
          <span>slot-Icon</span>
        </template>
      </Button>
    </div>


  <p>=================================</p>
  </div>
  <div>
    <Breadcrumbs :items="items" class="dc-breadcrumbs-  default">
      <template #item="slotItem">
        <p class="dc-breadcrumbs__name-item" v-bind="slotItem.attrs">
          {{ slotItem.item.name }}
        </p>
      </template>

    </Breadcrumbs>

    <h2>Слот крошки / последний НЕактивный </h2>

    <Breadcrumbs :items="items" class="dc-breadcrumbs">

      <template #item="slotItem">
        <div class="c-breadcrumbs__wrap">
          <h4 class="dc-breadcrumbs__name-item">
            {{ slotItem.item.name }}
          </h4>
        </div>
      </template>

    </Breadcrumbs>


    <h2>Слот крошки / последний НЕактивный кастомизированный </h2>

    <Breadcrumbs :items="items" class="dc-breadcrumbs">

      <template #item="slotItem">
        <div class="c-breadcrumbs__wrap" :class="{'custom-last-item__no-active': slotItem.isLastItem}">
          <h4 class="dc-breadcrumbs__name-item" v-bind="slotItem.attrs">
            {{ slotItem.item.name }}
          </h4>
        </div>
      </template>

    </Breadcrumbs>

    <h2>Слот крошки + слот сепаратор / последний НЕактивный кастомизированный</h2>
    <Breadcrumbs :items="items" class="dc-breadcrumbs">

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
          <h4 class="dc-breadcrumbs__name-item" v-bind="slotItem.attrs">
            {{ slotItem.item.name }} {{slotItem.isLastItem? 'isLastItem' : ''}}
          </h4>
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
  .df{
    display: flex;
  }
  .mb-24{
    margin-bottom: 24px;
  }
  .mr-24{
    margin-right: 24px;
  }
  .custom-btn{
    font-family: "Arial";
    font-size: 16px;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 4px;
    border: 1px solid #5982b9;
    color: black;
    background: #c3d8f5;
    cursor: pointer;
  }
  .custom-btn:disabled{
    cursor: not-allowed ;
    opacity: 0.6;
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
    margin-left: 12px;
    margin-right: 12px;
    border-radius: 20px;
  }
  .custom-separator-round{
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: #2567c9;
    margin-left: 12px;
    margin-right: 12px;
  }
</style>