/* eslint-disable no-shadow */
/**
 * @vitest-environment happy-dom
 */

import {mount} from '@vue/test-utils'
import {describe, expect, test} from 'vitest'
import CButton from './Button.vue'

describe('UI', () => {
  describe('Button', () => {
    test('exists', () => {
      expect(CButton).toBeTruthy()
    })

    // Button tag case
    test('renders button tag if no `to` is specified', () => {
      const wrapper = mount(CButton)

      expect(wrapper.get('button')).toBeDefined()
    })

    // Plain link case
    test('renders anchor tag if no `to` is specified', () => {
      const wrapper = mount(CButton)

      expect(wrapper.get('button')).toBeDefined()
    })
  })
})