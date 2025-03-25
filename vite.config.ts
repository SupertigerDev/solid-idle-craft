import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  base: '/solid-idle-craft/',
  build: {
    target: 'ES2022'
  }
})
