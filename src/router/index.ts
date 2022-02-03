import { createRouter, createWebHistory } from "vue-router"



const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes, 
})


export default router