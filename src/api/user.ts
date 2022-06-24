import { http } from '@/utils/http/axios'

export interface BasicResponseModel<T = any> {
  code: number
  message: string
  result: T
}

export interface BasicPageParams {
  pageNumber: number
  pageSize: number
  total: number
}

/**
 * @description: 获取用户信息
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
 * @description: 用户修改密码
 */
export function changePassword(params: any, uid: any) {
  return http.request(
    {
      url: `/user/u${uid}/changepw`,
      method: 'POST',
      params
    },
    {
      isTransformResponse: false
    }
  )
}

/**
 * @description: 用户登出
 */
export function logout(params: any) {
  return http.request({
    url: '/login/logout',
    method: 'POST',
    params
  })
}

/**
 * @description: 根据用户id获取用户菜单
 */
export function adminMenus() {
  return http.request({
    url: '/menus',
    method: 'GET'
  })
}

/**
 * 获取tree菜单列表
 * @param params
 */
export function getMenuList(params?: any) {
  return http.request({
    url: '/menu/list',
    method: 'GET',
    params
  })
}
