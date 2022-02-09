export function generateIndexFile (component) {
  return `import ${ component.capital } from './${ component.capital }.vue'\n\nexport default ${ component.capital }`
}
