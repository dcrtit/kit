import arg from 'arg'
import defaults from './defaults'
import {create} from './main'

function parseArgumentsIntoOptions (rawArgs) {
  const args = arg(
    {
      '--name': String,
      '--setup': Boolean,
      '--help': Boolean,
      '--lang': String,
      '--class-component': Boolean,
      '--style': String,
      '--vue': String,

      '-n': '--name',
      '-S': '--setup',
      '-h': '--help',
      '-l': '--lang',
      '-cc': '--class-component',
      '-s': '--style',
      '-v': '--vue'
    },
    {
      argv: rawArgs.slice(2)
    }
  )

  return {
    setup: args['--setup'] || false,
    help: args['--help'] || false,
    name: args['--name'] || defaults.DEFAULT_NAME,
    lang: args['--lang'] || defaults.DEFAULT_LANG,
    classStyleComponent: args['--class-component'] || defaults.DEFAULT_CLASS_COMPONENT,
    style: args['--style'] || defaults.DEFAULT_STYLE,
    vue: args['--vue'] || defaults.DEFAULT_VUE
  }
}

export async function cli (args) {
  await create(parseArgumentsIntoOptions(args))
}
