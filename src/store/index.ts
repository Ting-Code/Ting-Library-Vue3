import { createPinia } from 'pinia'
import { App } from 'vue'
import useAppStore from './modules/app/app'
// import useUserStore from './modules/user'
// export { useAppStore, useUserStore }

export const store = createPinia()
export function setupStore(app: App<Element>) {
  app.use(store)
}
