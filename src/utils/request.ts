import { clearToken, getToken, setToken } from './storage'
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { isValidKey } from './validate'

// 是否正在刷新的标记
let isRefreshing = false
// 请求栈
let retryRequests: ((token: string) => void)[] = []

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000,
  withCredentials: true // cookie跨域必备
})

// http request 拦截器 Request
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken()
    if (token) {
      ;(config.headers as AxiosRequestHeaders)['Authorization'] = token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// http response 拦截器 Response
request.interceptors.response.use(
  response => {
    // code == 0: 成功
    const res = response.data
    if (res.code !== 0) {
      if (res.message) {
        ElMessage({
          message: res.message,
          type: 'error',
          duration: 5 * 1000
        })
      }
      return Promise.reject(res)
    } else {
      return response.data
    }
  },
  error => {
    if (!error.response) return Promise.reject(error)
    // 根据refreshtoken重新获取token
    // 5000系统繁忙
    // 5001参数错误
    // 1003该用户权限不足以访问该资源接口
    // 1004访问此资源需要完全的身份验证
    // 1001access_token无效
    // 1002refresh_token无效
    if (
      error.response.data.code === 1004 ||
      error.response.data.code === 1001
    ) {
      const config = error.config
      if (!isRefreshing) {
        isRefreshing = true
        return getRefreshTokenFunc()
          .then(res => {
            // 重新设置token
            setToken(res.data)
            config.headers['Authorization'] = getToken()
            // 已经刷新了token，将所有队列中的请求进行重试
            retryRequests.forEach(cb => cb(getToken() || ''))
            // 重试完清空这个队列
            retryRequests = []
            // 这边不需要baseURL是因为会重新请求url，url中已经包含baseURL的部分了
            config.baseURL = ''
            return request(config)
          })
          .catch(() => {
            resetLogin()
          })
          .finally(() => {
            isRefreshing = false
          })
      } else {
        // 正在刷新token，返回一个未执行resolve的promise
        return new Promise(resolve => {
          // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
          // @ts-ignore
          retryRequests.push((token: string) => {
            config.baseURL = ''
            config.headers['Authorization'] = token
            resolve(request(config))
          })
        })
      }
    } else if (error.response.data.code === 1002) {
      resetLogin()
    } else {
      ElMessage({
        message: error.response.data.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  }
)
// 刷新token的请求方法
function getRefreshTokenFunc() {
  const params = {
    refresh_token: getToken() || ''
  }
  return axios.post(
    process.env.VUE_APP_BASE_API + 'auth-center/auth/refresh_token',
    params
  )
}
function resetLogin(title = '身份验证失败，请重新登录！') {
  if (window.location.href.indexOf('/login') === -1) {
    ElMessageBox.confirm(title, '退出', {
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      clearToken()
      location.reload() // To prevent bugs from vue-router
    })
  }
}
/**
 * []请求
 * @param url  接口
 * @param data  参数
 */
const rawGet = request.get
request.get = (url, data: object, headers = {}) => {
  if (data && JSON.stringify(data) !== '{}') {
    const params = new URLSearchParams()
    for (const key in data) {
      if (isValidKey(key, data)) {
        params.append(key, data[key])
      }
    }
    return rawGet(url, { params, headers })
  } else {
    return rawGet(url)
  }
}

const rawPost = request.post
request.post = (url, data) => {
  if (data) return rawPost(url, data)
  else return rawPost(url)
}

const rawDelete = request.delete
request.delete = (url, data) => {
  if (data) return rawDelete(url, data)
  else return rawDelete(url)
}

const rawPut = request.put
request.put = (url, data) => {
  if (data) return rawPut(url, data)
  else return rawPut(url)
}

export { request }
