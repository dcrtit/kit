import {ref, Ref} from 'vue-demi'
import CRadio from './Radio.vue'

export default {
  title: 'CRadio',

  component: CRadio
}

export const Default = () => ({
  components: {
    'c-radio': CRadio
  },

  setup () {
    const model: Ref<string> = ref('')

    return {
      model
    }
  },

  template: `
    <c-radio v-model="model"
             name="test"
             value="test"
             label="Test 1"/>
  `
})

export const Group = () => ({
  components: {
    'c-radio': CRadio
  },

  setup () {
    const model: Ref<string> = ref('')

    return {
      model
    }
  },

  template: `
    <div>
      <c-radio v-model="model"
               name="test"
               value="test"
               label="Test 1"/>

      <c-radio v-model="model"
               name="test"
               value="test1"
               label="Test 2"/>

      <c-radio v-model="model"
               name="test"
               value="test2"
               label="Test 3"/>

      {{ model }}
    </div>
  `
})
