import CButton from './Button.vue'

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {CButton},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return {args}
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <CButton class="p-2 bg-orange-600 rounded" v-bind="args">
      My inner text
    </CButton>
  `
})

const Default = Template.bind({})

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: CButton
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
  Default
}