import FileInput from './FileInput.vue'

export default {
  title: 'FileInput',

  component: FileInput
}

export const SingleFileLoader = () => ({
  components: {
    FileInput
  },

  data () {
    return {
      file: []
    }
  },

  template: `
    <FileInput v-model="file">
      <template #description>
        Описание
      </template>

      <template #trigger>
        <button>Загрузить файл</button>
      </template>

      <template #files>
        Выберите файлы
      </template>

      <template #preview>
        Тут превью
      </template>
    </FileInput>
  `
})

export const MultipleFileLoader = () => ({
  components: {
    FileInput
  },

  data () {
    return {
      files: []
    }
  },

  template: `
    <FileInput v-model="files"
               multiple>
      <template #description>
        Описание
      </template>

      <template #trigger>
        <button>Загрузить файл</button>
      </template>

      <template #files>
        Выберите файлы
      </template>

      <template #preview>
        Тут превью
      </template>
    </FileInput>
  `
})

export const DragAndDrop = () => ({
  components: {
    FileInput
  },

  data () {
    return {
      files: []
    }
  },

  template: `
    <FileInput v-model="files"
               multiple
               drag-and-drop>
      <template #description>
        Описание
      </template>

      <template #trigger>
        <button>Загрузить файл</button>
      </template>

      <template #files>
        Выберите файлы
      </template>

      <template #preview>
        Тут превью
      </template>
    </FileInput>
  `
})

export const triggerByBlock = () => ({
  components: {
    FileInput
  },

  data () {
    return {
      file: []
    }
  },

  template: `
    <FileInput v-model="file"
               triggerByBlock>
      <template #description>
        Описание
      </template>

      <template #trigger>
        <button>Загрузить файл</button>
      </template>

      <template #files>
        Выберите файлы
      </template>

      <template #preview>
        Тут превью
      </template>
    </FileInput>
  `
})

export const AcceptOnlyImages = () => ({
  components: {
    FileInput
  },

  data () {
    return {
      file: []
    }
  },

  template: `
    <FileInput v-model="file"
               accept="image/*">
      <template #description>
        Описание
      </template>

      <template #trigger>
        <button>Загрузить файл</button>
      </template>

      <template #files>
        Выберите файлы
      </template>

      <template #preview>
        Тут превью
      </template>
    </FileInput>
  `
})

export const Preview = () => ({
  components: {
    FileInput
  },

  data () {
    return {
      files: []
    }
  },

  template: `
    <FileInput v-model="files"
               multiple
               accept="image/*">
      <template #description>
        Описание
      </template>

      <template #trigger>
        <button>Загрузить файл</button>
      </template>

      <template #files>
        Выберите файлы
      </template>

      <template #preview="{previews}">
        <div style="display:flex;align-items:stretch;">
          <div v-for="pic in previews"
               :key="pic.name"
               style="display:flex;flex-direction:column;align-items:center;">
            <img :src="pic.src"
                 style="width:100px;height:100px;object-fit:cover;object-position:center;margin-right:5px;"/>

            <span>{{ pic.name }}</span>
          </div>
        </div>
      </template>
    </FileInput>
  `
})

export const InitMaxFileSize = () => ({
  components: {
    FileInput
  },

  data () {
    return {
      file: []
    }
  },

  template: `
    <FileInput v-model="file"
               :maxSize="1024">
      <template #description>
        Описание
      </template>

      <template #trigger>
        <button>Загрузить файл</button>
      </template>

      <template #files>
        Выберите файлы
      </template>

      <template #preview>
        Тут превью
      </template>
    </FileInput>
  `
})
