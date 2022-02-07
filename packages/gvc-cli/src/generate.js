import { generateVueFile } from './generators/generateVueFile'
import { generateStyleFile } from './generators/generateStyleFile'
import { generateIndexFile } from './generators/generateIndexFile'
import { camelize, capitalize, kebabize } from './utils'
import fs from 'fs'
import path from 'path'

export function generate (options) {
  console.log(options)
  const component = {
    camel: camelize(options.name),
    capital: capitalize(options.name),
    kebab: kebabize(options.name),
    class: 'c-' + kebabize(options.name)
  }

  const vue = generateVueFile(options, component)
  const style = generateStyleFile(component)
  const index = generateIndexFile(component)

  try {
    build(vue, style, index, component, options)

    console.log('\x1b[36m%s\x1b[0m', 'Component generate succesfuly!')
  } catch (error) {
    console.log('\x1b[41m%s\x1b[0m', 'Something wrong...')
    console.error(error)
  }
}

function build (vue, style, index, component, options) {
  const componentsDir = process.cwd() + '/components'
  const componentDir = componentsDir + '/' + component.capital
  const config = {
    encoding: 'utf-8'
  }

  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true })
  }

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true })
  }

  fs.writeFileSync(`${ componentDir }/${ component.capital }.vue`, vue, config)
  fs.writeFileSync(`${ componentDir }/${ component.kebab }.${ options.style }`, style, config)
  fs.writeFileSync(`${ componentDir }/index.${ options.lang === 'typescript' ? 'ts' : 'js' }`, index, config)
}
