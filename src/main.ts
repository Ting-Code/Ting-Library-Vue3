import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installIcon from '@/components'
import 'virtual:svg-icons-register'

const app = createApp(App)
installIcon(app)
app
  .use(router)
  .mount('#app')
