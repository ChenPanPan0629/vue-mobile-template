import axios from 'axios'
// import store from '@/store'
import config from '@/config'
// 引入接口模块
import user from './interface/user'
import city from './interface/city'

axios.defaults.baseURL = config.baseUrl
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.timeout = 30000

function init (vm) {
  interceptorReq(vm)
  interceptorRes(vm)
}

function interceptorReq (vm) {
// axios 拦截器, 每次请求的时候加上loading动画
  axios.interceptors.request.use(
    config => {
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
}
function interceptorRes (vm) {
  axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 404: {
            // do something
            break
          }
          case 500: {
            // do something
            break
          }
          default: {
            // do something
          }
        }
      }
      return Promise.reject(error)
    }
  )
}

export default {
  init,
  user,
  city
}
