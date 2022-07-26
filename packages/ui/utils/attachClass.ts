interface IAttachClassOptions {
  mergeWithDefaults: boolean
}

const defaultOptions = {
  mergeWithDefaults: false
}

export default function attachClass (cssClass: string, defaultClass: string, options: IAttachClassOptions = defaultOptions): string {
  if (options.mergeWithDefaults) {
    return [defaultClass, cssClass].join(' ')
  }

  return cssClass || defaultClass
}