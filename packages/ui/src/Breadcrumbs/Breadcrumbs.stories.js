import CBreadcrumbs from './Breadcrumbs.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Breadcrumbs',
  component: CBreadcrumbs,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CBreadcrumbs },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<CBreadcrumbs v-bind="args" />',
});

export const Main = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Main.args = {
  primary: true,
  label: 'Button',
};