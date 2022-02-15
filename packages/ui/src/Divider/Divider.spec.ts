/* eslint-disable no-shadow */
/**
 * @vitest-environment happy-dom
 */

import {mount} from '@vue/test-utils'
import {describe, expect, test} from 'vitest'
import CDivider from './Divider.vue'

describe('UI', () => {
  describe('Divider', () => {
    test('exists', () => {
      expect(CDivider).toBeTruthy()
    })

    test('mounts and renders root element', () => {
      const wrapper = mount(CDivider),
            root = wrapper.find('hr')

      expect(root.exists()).toBeTruthy()
    })

    test('sets correct role attribute', async () => {
      const wrapper = mount(CDivider)

      await wrapper.setProps({role: 'separator'})

      expect(wrapper.attributes('role')).toEqual('separator')

      await wrapper.setProps({role: 'presentation'})

      expect(wrapper.attributes('role')).toEqual('presentation')
    })


    /*
    * @bug: Not passing. Needs investigation.
    * */
    test('sets correct aria-orientation attribute', async () => {
      const wrapper = mount(CDivider)

      await wrapper.setProps({
        vertical: true,
        role: 'separator'
      })

      expect(wrapper.attributes('aria-orientation')).toEqual('vertical')

      await wrapper.setProps({
        vertical: false,
        role: 'separator'
      })

      expect(wrapper.attributes('aria-orientation')).toEqual('horizontal')

      await wrapper.setProps({
        vertical: true,
        role: 'presentation'
      })

      console.log(wrapper.attributes())

      expect(wrapper.attributes('aria-orientation')).toBeUndefined()

      await wrapper.setProps({
        vertical: false,
        role: 'presentation'
      })

      expect(wrapper.attributes('aria-orientation')).toBeUndefined()
    })
  })
})
// test('mount component', async () => {
//   expect(Hello).toBeTruthy()
//
//   // const wrapper = mount(Hello, {
//   //   props: {
//   //     count: 4
//   //   }
//   // })
//   //
//   // expect(wrapper.text()).toContain('4 x 2 = 8')
//   // expect(wrapper.html()).toMatchSnapshot()
//   //
//   // await wrapper.get('button').trigger('click')
//   //
//   // expect(wrapper.text()).toContain('4 x 3 = 12')
//   //
//   // await wrapper.get('button').trigger('click')
//   //
//   // expect(wrapper.text()).toContain('4 x 4 = 16')
// })