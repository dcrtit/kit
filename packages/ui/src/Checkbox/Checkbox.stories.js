import CCheckbox from './Checkbox.vue';
import {ref} from "vue-demi";

export default {
    title: 'Example/Checkbox',
    component: CCheckbox,
};

const Template = (args) => ({
    components: { CCheckbox },
    setup() {
        const disabledBtn = ref('')
        return { args, disabledBtn };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `
      <div style="width: 300px; padding: 12px; background: #ace4e8">
      <CCheckbox v-bind="args" v-model="disabledBtn">
        Disabled button
      </CCheckbox>
      <button :disabled="disabledBtn"
              style="height:40px; margin: 12px">
        Кнопка disabled={{ disabledBtn }}
      </button>
      </div>

    `
});

export const OneCheckbox = Template.bind({});
OneCheckbox.args = {
    disabled: false,
    reverse: true,
};


const TemplateArray = (args) => ({
    components: { CCheckbox },
    setup() {
        const checkedValues = ref([])
        const arrValues = ref([1,2,3,4,5,6,7,8,9])
        return { args, checkedValues, arrValues };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `
      <div class="checkbox-group">
      <h3>default стиль чекбокса</h3>
      <p><b>Отмеченные</b> {{ checkedValues }}</p>

      <CCheckbox v-for="(val, index) in arrValues"
                 v-bind="args"
                 v-model="checkedValues"
                 :value="val"
                  style="align-items: center">
        <span style="margin: 4px 12px;"> value = "{{ val }}"</span>
      </CCheckbox>
      </div>

    `
});

export const ArrayCheckboxDefault = TemplateArray.bind({});
ArrayCheckboxDefault.args = {

};

const TemplateArrayCustom_1 = (args) => ({
    components: { CCheckbox },
    setup() {
        const checkedValues = ref([])
        const arrValues = ref([11,22,33,44,55,66,77,88,99])
        const customStyle = {
            position: 'relative',
            width: '20px',
            height: '20px',
            marginRight: '32px',
            marginLeft: args.reverse? 'auto' :'8px',
            border: '1px solid #292929',
            borderRadius: '2px',
            backgroundColor:' #fff',
            opacity: args.disabled? '0.6' :'1',
        }
        return { args, checkedValues, arrValues, customStyle };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `

      <style>
          .checkbox-group{
            width: 250px;
            margin-right: 32px;
            padding: 32px;
            border-right: 1px solid #67a5f5;
          }
          label{
            margin: 12px;
            align-items: center;
          }
    
          .custom-style-checkbox{
            position: relative;
            width: 20px;
            height: 20px;
            margin-right: 32px;
            margin-left: 8px;
            border: 1px solid #292929;
            border-radius: 2px;
            background-color: #fff;
          }
          input:checked + .custom-style-checkbox {
            border: 1px solid #d92e2e;
          }
          input:checked + .custom-style-checkbox:before {
            position: absolute;
            content: "";
            height: 10px;
            width: 10px;
            left: 3px;
            bottom: 3px;
            background-color: #1d1212;
            border: solid 2px #67a5f5;
            border-radius: 50%;
            transition: .8s;
          }
      </style>
      <h3>Custom стиль чекбокса через слоот - customCheckbox</h3>
      <p>Стилизация в состоянии checked через CSS c помощью селекторов <i>"input:checked + .custom-style-checkbox" , " input:checked +
        .custom-style-checkbox:before"</i></p>
      <p><b>Отмеченные</b> {{ checkedValues }}</p>
      <div class="checkbox-group"  style="width: 220px; padding: 12px;">
        <CCheckbox v-for="(val, index) in arrValues"
                     v-bind="args"
                     v-model="checkedValues"
                     :value="val"
                      style="align-items: center">
          <span style="margin: 4px 12px;"> value = "{{ val }}"</span>
          <template #customCheckbox>
            <span class="custom-style-checkbox"
                  :style="customStyle"></span>
          </template>
        </CCheckbox>
      </div>
    `

});

export const ArrayCheckboxCustom_1 = TemplateArrayCustom_1.bind({});
ArrayCheckboxCustom_1.args = {

};

const TemplateArrayCustom_2 = (args) => ({
    components: { CCheckbox },
    setup() {
        const checkedValues = ref(['антошка','сашок'])
        const arrValues = ref([
            'леня', 'сашок', 'антошка', 'пашок', 'дядя миша', 'димас', 'вовчик'
        ])
        const styleIconOff = {
            position: 'relative',
            width: '24px',
            height: '18px',
            marginRight: '32px',
            marginLeft: args.reverse? 'auto' :'8px',
            padding: '4px',
            border: '1px solid #292929',
            borderRadius: '2px',
            backgroundColor:' #d92e2e',
            color: '#fff',
            opacity: args.disabled? '0.6' :'1',
        }
        const styleIconOn = {
            position: 'relative',
            width: '24px',
            height: '18px',
            marginRight: '32px',
            marginLeft: args.reverse? 'auto' :'8px',
            padding: '4px',
            border: '1px solid #292929',
            borderRadius: '2px',
            backgroundColor:' #51d237',
            color: '#000',
            opacity: args.disabled? '0.6' :'1',
        }
        return { args, checkedValues, arrValues, styleIconOn, styleIconOff };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: `

      <style>
      .checkbox-icon {
        position: relative;
        display: inline-block;
        margin-right: 32px;
        margin-left: 8px;
        padding: 4px;
        width: 24px;
        height: 18px;
        border-radius: 2px;
        border: 1px solid #292929;
      }

      .checkbox-icon__off {
        background: #d92e2e;
      }

      .checkbox-icon__on {
        background: #51d237;
      }
      </style>

      <h3>Custom стиль чекбокса через слоты:  - iconCheckOff  и iconCheckOn</h3>
      <p>
        iconCheckOff - иконка для чекбокса в состоянии OFF
        <br>
        iconCheckOn - иконка для чекбокса в состоянии ON
      </p>
      <p><b>Отмеченные</b> {{ checkedValues }}</p>
      <div class="checkbox-group" style="width: 220px; padding: 12px;">

      <CCheckbox v-for="(val, index) in arrValues"
                 v-bind="args"
                 v-model="checkedValues"
                 :value="val"
                 style="margin: 12px; align-items: center">
        <span style="margin: 4px 12px;"> {{ val }}</span>

        <template #iconCheckOff>
          <span class="checkbox-icon checkbox-icon__off" :style="styleIconOff">off</span>
          <!--            иконка для чекбокса ON-->
          <!--            <img class="checkbox-icon" src ="~assets/img/icons/checkbox-default.svg"/>-->
        </template>
        <template #iconCheckOn>
            <span class="checkbox-icon checkbox-icon__on"
                  :style="styleIconOn">ON</span>
          <!--            иконка для чекбокса OFF-->
          <!--            <img class="checkbox-icon" src ="~assets/img/icons/checkbox-active.svg"/>-->
        </template>
      </CCheckbox>
      </div>
    `
});

export const ArrayCheckboxCustom_2 = TemplateArrayCustom_2.bind({});
ArrayCheckboxCustom_2.args = {

};
