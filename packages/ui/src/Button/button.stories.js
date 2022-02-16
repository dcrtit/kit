import {ref} from 'vue-demi'
import CButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/CButton',
  component: CButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   onClick: {},
  //   size: {
  //     control: { type: 'select' },
  //     options: ['small', 'medium', 'large'],
  //   },
  // },
};

const Template = (args) => ({
  components: { CButton },
  setup() {
    const styleBtn = {
      fontFamily: 'Arial',
      fontSize: '16px',
      padding: '12px 24px',
      borderRadius: '4px',
      border: '1px solid #5982b9',
      color: 'black',
      background: '#c3d8f5',
      cursor: 'pointer',
      width: '200px',
      opacity: args.disabled? '0.6' :'1',
    }

    return { args, styleBtn, };
  },
  template: `
    <div style="width: 500px;">
      <CButton v-bind="args" :style="styleBtn">
        Button
      </CButton>
    </div>
    
  `
});

export const Btn = Template.bind({});
Btn.args = {

};

export const BtnLink = Template.bind({});
BtnLink.args = {
  to: '#'
};


const TemplateSlotIcon = (args) => ({
  components: { CButton },
  setup() {
    const styleBtn = {
      fontFamily: 'Arial',
      fontSize: '16px',
      padding: '12px 24px',
      borderRadius: '4px',
      border: '1px solid #5982b9',
      color: 'black',
      background: '#c3d8f5',
      cursor: 'pointer',
      width: '200px',
      opacity: args.disabled? '0.6' :'1',
    }
    const styleBtnIcon = {
      margin: '0 8px',
      background: '#ea5353',
      height: '40px',
      width: '40px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    return { args, styleBtn, styleBtnIcon };
  },
  template: `
    <div style="width: 500px;">
      <CButton v-bind="args" :style="styleBtn" >
        <template #prependIcon>
          <span class="btn-icon" :style="styleBtnIcon">Icon</span>
        </template>
        <span style="padding: 0 24px">Button</span>
        <template #appendIcon>
          <span class="btn-icon" :style="styleBtnIcon">Icon</span>
        </template>
      </CButton>
    </div>
    
  `
});

export const BtnSlotIcon = TemplateSlotIcon.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
  BtnSlotIcon.args = {

  };

export const BtnLinkSlotIcon = TemplateSlotIcon.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
  BtnLinkSlotIcon.args = {
    to: '#'
  };

