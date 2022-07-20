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

    test('sets correct aria-orientation attribute', async () => {
      const wrapper = mount(CDivider)

      await wrapper.setProps({
        vertical: true,
        role: 'separator'
      })

      // For some reason the real naming is as follows.
      const ariaOrientationKey = 'ariaorientation'

      expect(wrapper.attributes(ariaOrientationKey)).toEqual('vertical')

      await wrapper.setProps({
        vertical: false,
        role: 'separator'
      })

      expect(wrapper.attributes(ariaOrientationKey)).toEqual('horizontal')

      await wrapper.setProps({
        vertical: true,
        role: 'presentation'
      })

      expect(wrapper.attributes(ariaOrientationKey)).toBeUndefined()

      await wrapper.setProps({
        vertical: false,
        role: 'presentation'
      })

      expect(wrapper.attributes(ariaOrientationKey)).toBeUndefined()
    })
  })
})