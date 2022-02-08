export type TLinkButtonTag = 'a' | 'router-link' | 'nuxt-link'
export type TButtonComponent = TLinkButtonTag | 'button'
export type TButtonType = 'submit' | 'reset' | 'button'
export type TLinkAttribute = 'href' | 'to'

export interface IButtonOptions {
  disabled?: boolean | null
  type?: TButtonType | null
  to?: string | null
  event?: 'click' | null
}

