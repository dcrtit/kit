import * as fs from 'fs/promises'
import inquirer from 'inquirer'
import defaults from './defaults'
import {rootPath} from './main'

export async function setup () {
  const options = {
    ...defaults
  }
  const prompts = [
    {
      name: 'name',
      message: 'Имя компонента',
      default: options.DEFAULT_NAME,
      validate: value => Boolean(value)
    },
    {
      name: 'lang',
      type: 'list',
      message: 'Язык шаблона компонента',
      choices: ['typescript', 'javascript'],
      default: options.DEFAULT_LANG
    },
    {
      name: 'classComponent',
      type: 'confirm',
      message: 'Использовать ООП синтаксис для компонентов? (vue-class-components)',
      default: options.DEFAULT_CLASS_COMPONENT
    },
    {
      name: 'style',
      type: 'list',
      message: 'Язык стилей',
      choices: [
        'css',
        'scss',
        'sass',
        'less',
        'stylus'
      ],
      default: options.DEFAULT_STYLE
    },
    {
      name: 'vue',
      type: 'list',
      message: 'Версия Vue',
      choices: [
        {
          name: 'vue-2 - Options API',
          value: 'vue2'
        },
        {
          name: 'vue-3 - Composition API',
          value: 'vue3'
        }
      ],
      default: options.DEFAULT_VUE
    }
  ]


  const answers = await inquirer.prompt(prompts)
  const defaultsFileString = `export default {\n\tDEFAULT_NAME: '${ answers.name }',\n\tDEFAULT_LANG: '${ answers.lang }',\n\tDEFAULT_CLASS_COMPONENT: ${ answers.classComponent },\n\tDEFAULT_STYLE: '${ answers.style }',\n\tDEFAULT_VUE: '${ answers.vue }'\n}`

  try {
    await fs.writeFile(`${ rootPath }/defaults.js`, defaultsFileString)

    console.log('Значение по умолчанию были обновлены')
    console.dir(env)
  }
 catch (error) {
    console.error('Произошел непредвиденный пиздец', error)
  }
}
