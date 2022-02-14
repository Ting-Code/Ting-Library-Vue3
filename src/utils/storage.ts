/**
 * 存储数据
 */
export const setItem = (key: string, value: string | object) => {
  // 将数组、对象类型的数据转化为 JSON 字符串进行存储
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 获取数据
 */
export const getItem = (key: string) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data as string)
  } catch (err) {
    return data
  }
}

/**
 * 删除数据
 */
export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}

/**
 * 删除所有数据
 */
export const removeAllItem = (key: string) => {
  window.localStorage.clear()
}

import { TOKEN } from '@/config/constant'

/**
 * 是否登录
 */
export const isLogin = () => {
  return !!localStorage.getItem(TOKEN)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN)
}

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN, token)
}

export const clearToken = () => {
  localStorage.removeItem(TOKEN)
}
