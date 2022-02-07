import inquirer from 'inquirer'
import dotenv from 'dotenv'
import * as fs from 'fs/promises'

dotenv.config()

export async function setup () {
  const options = {
    'DEFAULT_NAME': process.env.DEFAULT_NAME,
    'DEFAULT_LANG': process.env.DEFAULT_LANG,
    'DEFAULT_CLASS_COMPONENT': process.env.DEFAULT_CLASS_COMPONENT,
    'DEFAULT_STYLE': process.env.DEFAULT_STYLE,
    'DEFAULT_VUE': process.env.DEFAULT_VUE
  }
  const prompts = [
    {
      name: 'name',
      message: 'Имя компонента',
      default: options['DEFAULT_NAME'],
      validate: (value) => !!value
    },
    {
      name: 'lang',
      type: 'list',
      message: 'Язык шаблона компонента',
      choices: ['typescript', 'javascript'],
      default: options['DEFAULT_LANG']
    },
    {
      name: 'classComponent',
      type: 'confirm',
      message: 'Использовать ООП синтаксис для компонентов? (vue-class-components)',
      default: options['DEFAULT_CLASS_COMPONENT']
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
      default: options['DEFAULT_STYLE']
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
      default: options['DEFAULT_VUE']
    }
  ]


  const answers = await inquirer.prompt(prompts)
  const env = `DEFAULT_NAME = "${ answers.name }"\nDEFAULT_LANG = "${ answers.lang }"\nDEFAULT_CLASS_COMPONENT = ${ answers.classComponent }\nDEFAULT_STYLE = "${ answers.style }"\nDEFAULT_VUE = "${ answers.vue }"`

  try {
    await fs.writeFile('.env', env)

    console.log('Значение по умолчанию были обновлены')
    console.dir(env)
  } catch (error) {
    console.error('Произошел непредвиденный пиздец', error)
  }
}
