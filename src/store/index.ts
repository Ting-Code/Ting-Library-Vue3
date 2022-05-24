import { createPinia } from 'pinia'
import { App } from 'vue'
import useAppStore from './modules/app.js'
import useUserStore from './modules/permission.js'
export { useAppStore, useUserStore }

export const store = createPinia()
export function setupStore(app: App<Element>) {
  app.use(store)
}
