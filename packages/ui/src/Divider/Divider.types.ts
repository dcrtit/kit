export type TDividerRole = 'separator' | 'presentation'
export type TDividerAriaOrientation = 'vertical' | 'horizontal'
// @todo: Move this type on project level
export type TDividerStyle = Partial<CSSStyleDeclaration>
export type TDividerOptions = {
  ariaOrientation?: TDividerAriaOrientation
  role: TDividerRole
  style: TDividerStyle
  [key: string]: any
}