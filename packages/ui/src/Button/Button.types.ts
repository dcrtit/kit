export type TLinkButtonTag = 'a' | 'router-link' | 'nuxt-link'
export type TButtonComponent = TLinkButtonTag | 'button'
export type TButtonType = 'submit' | 'reset' | 'button'
export type TLinkAttribute = 'href' | 'to'
export type TPath = string | null


export interface IButtonOptions {
  disabled?: boolean | null
  type?: TButtonType | null
  to?: TPath
  event?: 'click' | null
  style?: IStyleOptions
}

export interface IStyleOptions {
  [key: string] : string
}
