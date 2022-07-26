/* eslint-disable no-shadow */
/**
 * @vitest-environment happy-dom
 */

import {describe, expect, test} from 'vitest'
import {getAttachedClasses} from '../../utils'

describe('UI', () => {
  describe('Utils', () => {
    describe('getAttachedClasses', () => {
      test('merges classes if mergeWithDefaults=true passed in options', () => {
        expect(getAttachedClasses('foo', 'bar', {
          mergeWithDefaults: true
        })).toEqual('bar foo')
      })

      test('returns correct class if mergeWithDefaults=false passed in options', () => {
        expect(getAttachedClasses('', '', {
          mergeWithDefaults: false
        })).toEqual('')

        expect(getAttachedClasses('', 'bar', {
          mergeWithDefaults: false
        })).toEqual('bar')

        expect(getAttachedClasses('foo', 'bar', {
          mergeWithDefaults: false
        })).toEqual('foo')
      })

      test('returns correct class if mergeWithDefaults is not specified', () => {
        expect(getAttachedClasses('', '')).toEqual('')

        expect(getAttachedClasses('', 'bar')).toEqual('bar')

        expect(getAttachedClasses('foo', 'bar')).toEqual('foo')
      })
    })
  })
})