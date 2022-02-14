<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  import Breadcrumbs from './Breadcrumbs/Breadcrumbs.vue'
  import CButton from './Button/Button.vue'
  import {reactive, ref} from 'vue-demi'

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
  let counter: number = 0
  let counter2: number =0

  const onClick = ()=>  {
    counter ++
    console.log('btn - onClick', counter)
  }

  const onClick2 = ()=>  {
    counter2 ++
    console.log('btn - onClick2', counter2)
  }


</script>

<template>
  <div class="btns ">
    <h2>кнопки</h2>

    <div>
      <CButton class="custom-btn mb-24 mr-24"
              fullWidth
              to="#"
              >
        ссылка
      </CButton>

      <CButton class="custom-btn mb-24 mr-24" fullWidth>
        кнопка
      </CButton>

      <div style="width: 100%; display: flex;">
        <div style="width: 400px; flex-shrink: 0; margin: 24px; padding: 12px; background: antiquewhite;">
          <CButton class="custom-btn mb-24 mr-24" fullWidth>
            кнопка
          </CButton>

          <CButton class="custom-btn mb-24 mr-24" fullWidth disabled @click="onClick">
            кнопка disabled @click
          </CButton>

          <CButton class="custom-btn mb-24 mr-24" fullWidth @click="onClick2">
            кнопка @click2
          </CButton>
        </div>

        <div style="width: 100%; padding: 32px;">
          <CButton class="custom-btn mb-24 mr-24" to="#">
            ссылка
          </CButton>
          <CButton class="custom-btn mb-24 mr-24" disabled to="#">
            ссылка disabled
          </CButton>
          <CButton class="custom-btn mb-24 mr-24" to="#" @click="onClick">
            ссылка @click
          </CButton>
          <CButton class="custom-btn mb-24 mr-24" disabled to="#" @click="onClick">
            ссылка disabled @click
          </CButton>

        </div>
        <div style="width: 100%; padding: 32px;">
          <CButton class="custom-btn mb-24 mr-24" linkTag="nuxt-link" to="#">
            nuxt-link
          </CButton>
          <CButton class="custom-btn mb-24 mr-24" linkTag="nuxt-link" to="#" disabled>
            nuxt-link disabled
          </CButton>
          <CButton class="custom-btn mb-24 mr-24" linkTag="nuxt-link" to="#" @click="onClick2">
            nuxt-link @click
          </CButton>
          <CButton class="custom-btn mb-24 mr-24" linkTag="nuxt-link" to="#" disabled @click="onClick2">
            nuxt-link disabled @click
          </CButton>

          <CButton class="custom-btn mb-24 mr-24"
                   to="https://dcrt.it/" @click.prevent="onClick">
            <template #prependIcon>
              <span class="btn-icon">slot-Icon</span>
            </template>
            ссылка https://dcrt.it/
            <template #appendIcon>
              <span class="btn-icon">slot-Icon</span>
            </template>
          </CButton>
        </div>
      </div>
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
  * {
    box-sizing: border-box;
  }
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
    padding: 12px 24px;
    border-radius: 4px;
    border: 1px solid #5982b9;
    color: black;
    background: #c3d8f5;
    cursor: pointer;
    min-width: 200px;
  }
  .custom-btn:disabled, .custom-btn[disabled='true']{
    cursor: not-allowed ;
    opacity: 0.6;
  }
  .btn-icon {
    margin: 0 8px;
    background: #ea5353;
    height: 40px;
    width: 80px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
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