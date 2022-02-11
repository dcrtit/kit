import {readFileSync} from 'fs'
import path from 'path'
import {rootPath} from '../main'

export function generateVueFile (options, component) {
  const templateDir = path.resolve(
    rootPath,
    'templates/template.html'
  )

  const templateFileString = readFileSync(templateDir, {
    encoding: 'utf-8'
  })

  const template = templateFileString
    .replace('%COMPONENT_CLASS%', component.class)
    .replace('%STYLE_LANG%', options.style)
    .replace('%STYLE_FILE%', `${component.kebab }.${ options.style}`)

  let scriptFile = 'javascript/v2.js'

  /**
   * TODO: Refactor
   * но я хз на самом деле, это мне че плодить кучу коллбэков,
   * примерно та же мешанина получится, потому запрошу в дискусиях помощи
   */
  if (options.lang === 'javascript' && options.vue === 'vue2' && !options.classStyleComponent) {
    scriptFile = 'javascript/v2.js'
  }
 else if (options.lang === 'javascript' && options.vue === 'vue2' && options.classStyleComponent) {
    scriptFile = 'javascript/v2cc.js'
  }
 else if (options.lang === 'javascript' && options.vue === 'vue3') {
    scriptFile = 'javascript/v3.js'
  }
 else if (options.lang === 'typescript' && options.vue === 'vue2' && !options.classStyleComponent) {
    scriptFile = 'typescript/v2.ts'
  }
 else if (options.lang === 'typescript' && options.vue === 'vue2' && options.classStyleComponent) {
    scriptFile = 'typescript/v2cc.ts'
  }
 else if (options.lang === 'typescript' && options.vue === 'vue3') {
    scriptFile = 'typescript/v3.ts'
  }

  const resolvedScriptFile = path.resolve(
    rootPath,
    'templates',
    scriptFile
  )
  const scriptFileString = readFileSync(resolvedScriptFile, {
    encoding: 'utf-8'
  })

  let script, templateScript

  if (!options.classStyleComponent) {
    script = scriptFileString.replace('%COMPONENT_NAME%', component.class)
  }
 else {
    script = scriptFileString.replace('%CLASS_COMPONENT%', component.capital)
  }

  if (options.lang === 'typescript') {
    templateScript = `<script lang="ts">\n${ script }\n</script>`
  }
 else {
    templateScript = `<script>\n${ script }\n</script>`
  }

  return `${ templateScript }\n\n${ template }`
}
