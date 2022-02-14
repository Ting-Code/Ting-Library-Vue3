import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import installIcon from '@/components/index'
import 'virtual:svg-icons-register'

async function bootstrap() {
  const app = createApp(App)
  installIcon(app)
  setupStore(app)
  setupRouter(app)
  app.mount('#app')
}

bootstrap()
