import CDivider from './Divider.vue'
import {dividerRoleVariants} from './libs/variants'

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'c-divider': CDivider
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return {args}
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div style="height: 24px;">
      <c-divider v-bind="args"/> 
    </div>
  `
})

const Horizontal = Template.bind({})

Horizontal.args = {
  vertical: false
}

const Vertical = Template.bind({})

Vertical.args = {
  vertical: true
}

const WithSeparatorRole = Template.bind({})

WithSeparatorRole.args = {
  role: 'separator'
}

const WithPresentationRole = Template.bind({})

WithPresentationRole.args = {
  role: 'presentation'
}

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Divider',
  component: CDivider,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    vertical: {
      description: 'Whether component should be positioned horizontally or vertically.',
      defaultValue: false
    },
    role: {
      description: 'Role attribute value for better A11Y.',
      control: {
        type: 'select'
      },
      options: dividerRoleVariants,
      defaultValue: 'separator'
    }
  }
}

export {
  Horizontal,
  Vertical,
  WithSeparatorRole,
  WithPresentationRole
}