import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import NProgress from 'nprogress' // progress bar
import admin from '@/views/admin/index.vue'
import HandbookRouter from './modules/HandbookRouter'
import store from '@/store'

/**
 * 私有路由表
 */
export const privateRoutes = [HandbookRouter]

/**
 * 公开路由表
 */
export const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    redirect: '/index',
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/admin',
    component: admin,
    redirect: '/admin',
    children: [
      {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/admin/index.vue'),
        meta: {
          title: 'admin',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401.vue')
      }
    ]
  }
]

/**
 * 初始化路由表
 */
export function resetRouter() {
  if (
    store.getters.userInfo &&
    store.getters.userInfo.permission &&
    store.getters.userInfo.permission.menus
  ) {
    const menus = store.getters.userInfo.permission.menus
    menus.forEach(menu => {
      router.removeRoute(menu)
    })
  }
}

const router = createRouter({
  history:
    process.env.NODE_ENV === 'production'
      ? createWebHistory()
      : createWebHashHistory(),
  routes: publicRoutes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const userStore = useUserStore()
  async function crossroads() {
    const Permission = usePermission()
    if (Permission.accessRouter(to)) await next()
    else {
      const destination = Permission.findFirstPermissionRoute(
        appRoutes,
        userStore.role
      ) || {
        name: 'notFound'
      }
      await next(destination)
    }
    NProgress.done()
  }
  if (isLogin()) {
    if (userStore.role) {
      crossroads()
    } else {
      try {
        await userStore.info()
        crossroads()
      } catch (error) {
        next({
          name: 'login',
          query: {
            redirect: to.name,
            ...to.query
          } as LocationQueryRaw
        })
        NProgress.done()
      }
    }
  } else {
    if (to.name === 'login') {
      next()
      NProgress.done()
      return
    }
    next({
      name: 'login',
      query: {
        redirect: to.name,
        ...to.query
      } as LocationQueryRaw
    })
    NProgress.done()
  }
})

export default router
