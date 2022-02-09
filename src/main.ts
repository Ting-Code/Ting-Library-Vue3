import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installIcon from '@/components/index'
import 'virtual:svg-icons-register'

const app = createApp(App)
installIcon(app)
app.use(router).use(store).mount('#app')
