type TInputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'search'
type TInputModelValue = string

export interface IInputProps {
  type?: TInputType
  modelValue?: TInputModelValue
  disabled?: boolean
  placeholder?: string
}

export interface IInputEmits {
  (name: 'update:modelValue', event: InputEvent): void
}

export interface IInputOptions {
  value: TInputModelValue
  type: IInputProps['type']
  disabled: boolean
  placeholder: string
  [key: string]: any
}