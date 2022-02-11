import path from 'path'

export function camelize (string) {
  if (string) {
    return string.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase())).replace(/\s+/g, '')
  }

  return new Error('String is empty...')
}

export function capitalize (string) {
  if (string) {
    return string.replace(/(?:^\w|[A-Z]|\b\w)/g, word => word.toUpperCase()).replace(/\s+/g, '')
  }

  return new Error('String is empty...')
}

export function kebabize (string) {
  if (string) {
    return string
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase()
  }

  return new Error('String is empty...')
}
