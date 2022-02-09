'use strict'

import path from 'path'
import {
  camelize,
  capitalize,
  kebabize
} from '../src/utils'
import defaults from '../src/defaults'
import { generateVueFile } from '../src/generators/generateVueFile'
import { generateStyleFile } from '../src/generators/generateStyleFile'
import { generateIndexFile } from '../src/generators/generateIndexFile'
import { generate } from '../src/generate'

describe('gvc-cli/utils', () => {
  it('Camelize String Function', () => {
    const text = 'i wanna be in camel case'
    const result = 'iWannaBeInCamelCase'

    expect(camelize(text)).toBe(result)
  })

  it('Capitalize String Function', () => {
    const text = 'i wanna be in capitalize case'
    const result = 'IWannaBeInCapitalizeCase'

    expect(capitalize(text)).toBe(result)
  })

  it('Kebabize String Function', () => {
    const text = 'i wanna be in kebab case'
    const result = 'i-wanna-be-in-kebab-case'

    expect(kebabize(text)).toBe(result)
  })
})

describe('gvc-cli/generators', () => {
  const options = {
    style: 'less',
    lang: 'typescript',
    vue: 'vue2',
    classStyleComponent: true
  }
  const componentName = 'DataTable'
  const component = {
    capital: capitalize(componentName),
    kebab: kebabize(componentName),
    class: 'c-' + kebabize(componentName)
  }

  it('Vue file generate', () => {
    const vue = generateVueFile(options, component)
    const condition = (typeof vue === 'string') // Is String
      && (vue.length > 0) // Is not empty
      && !(/%CLASS_COMPONENT%/gm.test(vue)) // String not contain substring '%CLASS_COMPONENT%' replaced by DataTable
      && (/DataTable/gm.test(vue)) // String contain substring 'DataTable'

    expect(condition).toBeTruthy()
  })

  it('Style file generate', () => {
    const style = generateStyleFile(component)
    const condition = (typeof style === 'string')
      && (style.length > 0)
      && (/.c-data-table/gm.test(style)) // String has a class substring

    expect(condition).toBeTruthy()
  })

  it('Index file generate', () => {
    const index = generateIndexFile(component)
    const condition = (typeof index === 'string')
      && (index.length > 0)
      && (/DataTable/gm.test(index)) // String has a capitalize component name

    expect(condition).toBeTruthy()
  })
})

describe('gvc-cli/main', () => {
  it('Defaults contains necessary keys', () => {
    const defaultKeys = Object.keys(defaults)
    const necessaryKeys = [
      'DEFAULT_NAME',
      'DEFAULT_LANG',
      'DEFAULT_CLASS_COMPONENT',
      'DEFAULT_STYLE',
      'DEFAULT_VUE'
    ]

    expect(defaultKeys.every(key => necessaryKeys.includes(key))).toBeTruthy()
  })

  // it('Generator is worked', () => {
  //   const options = {
  //     style: 'less',
  //     lang: 'typescript',
  //     vue: 'vue2',
  //     classStyleComponent: true
  //   }

  //   generate(options)

  //   expect(path.existsSync('./components/DataTable')).toBeTruthy()
  //   expect(path.existsSync('./components/DataTable/DataTable.vue')).toBeTruthy()
  //   expect(path.existsSync('./components/DataTable/data-table.less')).toBeTruthy()
  //   expect(path.existsSync('./components/DataTable/index.ts')).toBeTruthy()
  // })
})
