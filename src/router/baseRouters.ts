export const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录页面'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue')
  },
  {
    path: '/',
    component: import('@/layouts/default/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  }
]
