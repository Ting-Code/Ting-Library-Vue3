import { http } from '@/utils/http/axios'

export interface BasicResponseModel<T = any> {
  code: number
  message: string
  result: T
}

/**
 * @description: 获取用户信息 （前端权限）
 */
export function getUserInfo() {
  return http.request({
    url: '/admin_info',
    method: 'get'
  })
}

/**
 * @description: 用户登录
 */
export function login(params: any) {
  return http.request<BasicResponseModel>(
    {
      url: '/login',
      method: 'POST',
      params
    },
    {
      isTransformResponse: false
    }
  )
}

/**
 * @description: 根据用户id获取用户菜单 （后端权限）
 */
export function adminMenus() {
  return http.request({
    url: '/menus',
    method: 'GET'
  })
}
