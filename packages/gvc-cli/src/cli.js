import arg from 'arg'
import dotenv from 'dotenv'
import { create } from './main'

dotenv.config()

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
      argv: rawArgs.slice(2),
    }
  )

  return {
    setup: args['--setup'] || false,
    help: args['--help'] || false,
    name: args['--name'] || process.env.DEFAULT_NAME,
    lang: args['--lang'] || process.env.DEFAULT_LANG,
    classStyleComponent: args['--class-component'] || process.env.DEFAULT_CLASS_COMPONENT,
    style: args['--style'] || process.env.DEFAULT_STYLE,
    vue: args['--vue'] || process.env.DEFAULT_VUE
  }
}

export async function cli (args) {
  await create(parseArgumentsIntoOptions(args))
}
