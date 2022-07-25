/* eslint-disable no-shadow */
/**
 * @vitest-environment happy-dom
 */

import {beforeEach, describe, expect, test} from 'vitest'
import {mount, VueWrapper} from '@vue/test-utils'
import CBreadcrumbs from './Breadcrumbs.vue'

const wrapper: VueWrapper<any> = mount(CBreadcrumbs)

describe('UI', () => {
  describe('Breadcrumbs', () => {
    beforeEach(async () => {
      await wrapper.setProps({
        items: [
          {
            name: 'Name of the page',
            path: '/page'
          },
          {
            name: 'Name of the page 2',
            path: '/page_2'
          },
          {
            name: 'Name of the page 3',
            path: '/page_3'
          }
        ]
      })
    })

    test('exists', () => {
      expect(CBreadcrumbs).toBeTruthy()
    })

    test('has correct semantics', () => {
      expect(() => wrapper.get('nav')).not.toThrowError()
      expect(() => wrapper.get('nav').get('ul')).not.toThrowError()
      expect(() => wrapper.get('nav').get('ul').get('li')).not.toThrowError()
    })

    test('has correct Microdata attrs', () => {
      const ul = wrapper.get('ul')

      expect(ul.attributes('itemscope')).toBeDefined()
      expect(ul.attributes('itemtype')).toEqual('http://schema.org/BreadcrumbList')

      const li = ul.get('li')

      expect(li.attributes('itemscope')).toBeDefined()
      expect(li.attributes('itemprop')).toEqual('itemListElement')
      expect(li.attributes('itemtype')).toEqual('http://schema.org/ListItem')

      const a = li.get('a')

      expect(a.attributes('href')).toBeDefined()
      expect(a.attributes('itemprop')).toEqual('item')
    })

    test('computes correct link attribute', () => {
      console.log(wrapper, 'hui')

      expect(wrapper.vm.hrefAttribute).toEqual('href')
    })
  })
})