// eslint-disable-next-line spaced-comment
/// <reference types="vitest" />
import * as path from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ui'
    },
    outDir: './lib'
  },
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  test: {}
})