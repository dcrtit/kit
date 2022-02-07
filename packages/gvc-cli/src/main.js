import { generate } from './generate'
import { help } from './help'
import { setup } from './setup'

export const rootPath = __dirname

export async function create (options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd()
  }

  if (options.help) {
    console.log(help)

    return
  }

  if (options.setup) {
    setup()

    return
  }

  generate(options)

  return true
}
