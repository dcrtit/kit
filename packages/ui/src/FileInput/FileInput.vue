<script lang="ts">
  import {
    defineComponent,
    Ref,
    ref,
    computed,
    onMounted
  } from 'vue-demi'
  import {ComputedRef, PropType} from 'vue'

  interface IFileInputPreview {
    name: string
    src: string | ArrayBuffer
  }

  export default defineComponent({
    name: 'file-input',

    emits: ['update:modelValue'],

    expose: [
      'listeners',
      'onPickFile',
      'onFilePicked',
      'determineDragAndDropCapable',
      'prevent',
      'onDragAndDropFilePicked',
      'buildFilesPreview'
    ],

    props: {
      modelValue: {
        type: [Array, null] as PropType<File[] | null>,
        default: null
      },

      multiple: {
        type: Boolean as PropType<boolean>,
        default: false
      },

      dragAndDrop: {
        type: Boolean as PropType<boolean>,
        default: false
      },

      triggerByBlock: {
        type: Boolean as PropType<boolean>,
        default: false
      },

      accept: {
        type: String as PropType<string>,
        default: ''
      },

      previewMock: {
        type: [String, ArrayBuffer] as PropType<string | ArrayBuffer>,
        default: '@/images/file.png'
      },

      maxSize: {
        /**
         * Max size in kB
         * 0 - with no limits
         */
        type: Number as PropType<number>,
        default: 0
      }
    },

    setup (props, context) {
      const fileInput: Ref<HTMLElement> = ref(null)
      const dropArea: Ref<HTMLElement> = ref(null)
      const error: Ref<string> = ref('')
      const dragAndDropCapable: Ref<boolean> = ref(true)
      const previews: Ref<IFileInputPreview[]> = ref([])

      const filesCollectionString: ComputedRef<string> = computed(() => {
        if (props.modelValue && props.modelValue.length) {
          return Array.from(props.modelValue)
            .reduce((accumulator, current, currentIndex) => {
              if (currentIndex === 0) {
                return accumulator + current.name
              }

              return `${accumulator }, ${ current.name}`
            }, '')
        }

        return 'Выберите файл'
      })
      const slotFilesIsAccessible: ComputedRef<boolean> = computed(() => context.slots.files &&
        context.slots.files().findIndex(o => o.type !== Comment) !== -1 &&
        !props.modelValue &&
        !props.modelValue.length)

      const readUploadedFileAsText = (inputFile: File): Promise<string | ArrayBuffer> => {
        const temporaryFileReader = new FileReader()

        return new Promise((resolve, reject) => {
          temporaryFileReader.onerror = () => {
            temporaryFileReader.abort()
            reject(new DOMException('Problem parsing input file.'))
          }

          temporaryFileReader.onload = () => {
            resolve(temporaryFileReader.result)
          }
          temporaryFileReader.readAsText(inputFile)
        })
      }
      const buildFilesPreview = async (): Promise<void> => {
        const innerPreviews: IFileInputPreview[] = []

        for (let i = 0; i < props.modelValue.length; i++) {
          if ((/\.(jpe?g|png|gif|webp)$/i).test(props.modelValue[i].name)) {
            const result: string | ArrayBuffer = await readUploadedFileAsText(props.modelValue[i])

            innerPreviews.push({
              name: props.modelValue[i].name,
              src: result
            })
          }
          else {
            innerPreviews.push({
              name: props.modelValue[i].name,
              src: props.previewMock
            })
          }
        }

        previews.value = innerPreviews
      }
      const onPickFile = (): void => {
        fileInput.value.click()
      }
      const onFilePicked = (event: InputEvent): void => {
        const files: File[] = []
        const target = event.target as HTMLInputElement

        for (let i = 0; i < target.files.length; i++) {
          if (target.files[i].size * 1024 <= props.maxSize) {
            files.push(target.files[i])
          }
          else {
            error.value = `Max available size is ${ props.maxSize } kilobytes`

            return
          }
        }

        context.emit('update:modelValue', files)
        buildFilesPreview()
      }
      const determineDragAndDropCapable = (): boolean => {
        const div = document.createElement('div')

        return ('draggable' in div ||
          'ondragstart' in div && 'ondrop' in div) &&
          'FormData' in window &&
          'FileReader' in window
      }
      const prevent = (e: Event): void => {
        e.preventDefault()
        e.stopPropagation()
      }
      const onDragAndDropFilePicked = (e: DragEvent): void => {
        const files: File[] = []

        for (let i = 0; i < e.dataTransfer.files.length; i++) {
          if (e.dataTransfer.files[i].size * 1024 <= props.maxSize) {
            files.push(e.dataTransfer.files[i])
          }
          else {
            error.value = `Max available size is ${ props.maxSize } kilobytes`

            return
          }
        }

        context.emit('update:modelValue', files)
        buildFilesPreview()
      }
      const listeners = (isBlock: boolean = false): {onClick?: Function} => {
        if (props.triggerByBlock && isBlock || !props.triggerByBlock && !isBlock) {
          return {
            onClick: onPickFile
          }
        }

        return {}
      }

      onMounted(() => {
        if (props.dragAndDrop) {
          dragAndDropCapable.value = determineDragAndDropCapable()

          if (dragAndDropCapable) {
            ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(event => {
              dropArea.value.addEventListener(event, prevent, false)
            })

            dropArea.value.addEventListener('drop', onDragAndDropFilePicked)
          }
        }
      })

      return {
        fileInput,
        dropArea,
        error,
        dragAndDropCapable,
        previews,
        filesCollectionString,
        slotFilesIsAccessible,
        listeners,
        onPickFile,
        onFilePicked,
        determineDragAndDropCapable,
        prevent,
        onDragAndDropFilePicked,
        buildFilesPreview
      }
    }
  })
</script>

<template>
  <div ref="dropArea"
       class="file-input"
       v-bind="listeners(true)">
    <div class="file-input__description">
      <slot name="description"/>
    </div>

    <div class="file-input__block">
      <div class="file-input__trigger"
           v-bind="listeners()">
        <slot name="trigger"/>
      </div>

      <div class="file-input__files">
        <!--
          Текст "Выберите файл", при загрузке файлов отдает массив с файлами, либо объект файла,
          по дефолту отображает список файлов формата {file-name}.{file-extension}[]
         -->
        <slot v-if="slotFilesIsAccessible"
              name="files"
              :files="modelValue"/>

        <div v-if="modelValue && modelValue.length"
             class="file-input__files-text">
          {{ filesCollectionString }}
        </div>
      </div>
    </div>

    <div class="file-input__preview">
      <slot name="preview"
            :previews="previews"/>
    </div>

    <div v-if="error"
         class="file-input__error">
      {{ error }}
    </div>

    <input ref="fileInput"
           type="file"
           style="display:none;"
           :multiple="multiple"
           :accept="accept"
           @change="onFilePicked">
  </div>
</template>

<style>
.file-input {
  display: flex;
  align-items: center;

  flex-wrap: wrap;

  padding: 4px;

  border: 1px solid black;
  border-radius: 4px;
}

.file-input_highlight {
  border-color: red;
}

.file-input__description {
  flex-basis: 100%;
}

.file-input__block {
  display: flex;
  align-items: center;
}

.file-input__target {
  flex: 30% 0 0;
}

.file-input__files {
  flex: 70%;
}

.file-input__preview {
  flex: 100%;
}

.file-input__error {
  flex: 100%;

  color: red;
}
</style>
