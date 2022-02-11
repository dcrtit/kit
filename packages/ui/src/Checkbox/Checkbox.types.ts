export type TCheckboxValueObject = Record<string, unknown>
export type TCheckboxValue = TCheckboxValueObject | string | number | boolean
export type TCheckboxModel = TCheckboxValue[] | boolean

export interface ICheckboxOptions {
    checked: boolean
    disabled: boolean
    required: boolean
}