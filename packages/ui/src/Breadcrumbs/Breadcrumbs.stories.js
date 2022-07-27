import CBreadcrumbs from './Breadcrumbs.vue'

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {CBreadcrumbs},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return {args}
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <CBreadcrumbs v-bind="args">
      <template #item="{ item }">
        <div class="p-2">
          {{ item.name }}
        </div>
      </template>
    </CBreadcrumbs>
  `
})

const TemplateSeparator = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {CBreadcrumbs},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return {args}
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <CBreadcrumbs v-bind="args">
      <template #item="{ item }">
        <div class="p-2">
          {{ item.name }}
        </div>
      </template>
      <template #separator>
        <span>
          |
        </span>
       </template>
    </CBreadcrumbs>
  `
})

const NoSeparator = Template.bind({})

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
NoSeparator.args = {
  items: [
    {
      name: 'Главная',
      path: '/'
    },
    {
      name: 'Категория 1',
      path: '/category_1'
    },
    {
      name: 'Категория 1.2',
      path: '/category_1/category_1.2'
    },
    {
      name: 'Товар',
      path: '/category_1/category_1.2/product'
    }
  ]
}

const Separator = TemplateSeparator.bind({})

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Separator.args = {
  items: [
    {
      name: 'Главная',
      path: '/'
    },
    {
      name: 'Каталог',
      path: '/category_1'
    },
    {
      name: 'Категория',
      path: '/category_1/category_1.2'
    },
    {
      name: 'Под Категория',
      path: '/category_1/category_1.2'
    },
    {
      name: 'Товар',
      path: '/category_1/category_1.2/product'
    }
  ]
}

const routerLink = TemplateSeparator.bind({})

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
routerLink.args = {
  linkComponent: 'router-link',
  items: [
    {
      name: 'Главная',
      path: '/'
    },
    {
      name: 'Каталог',
      path: '/category_1'
    },
    {
      name: 'Категория',
      path: '/category_1/category_1.2'
    },
    {
      name: 'Под Категория',
      path: '/category_1/category_1.2'
    },
    {
      name: 'Товар',
      path: '/category_1/category_1.2/product'
    }
  ]
}

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Breadcrumbs',
  component: CBreadcrumbs
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   onClick: {},
  //   size: {
  //     control: { type: 'select' },
  //     options: ['small', 'medium', 'large'],
  //   },
  // },
}

export {
  NoSeparator,
  Separator,
  routerLink
}