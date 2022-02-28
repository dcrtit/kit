export type FileInputValidatorTypes = 'size' | 'image-resolution'

export interface IFileInputValidator {
  name: FileInputValidatorTypes
  cb: Function
}
