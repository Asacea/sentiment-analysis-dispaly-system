import axios from 'axios'
import router from "@/router";

const request = axios.create({
    baseURL: "/",
    timeout: 10000
})


// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
  response => {
      let res = response.data;
      // 如果是返回的文件
      if (response.config.responseType === 'blob') {
          return res
      }
      // 兼容服务端返回的字符串数据
      if (typeof res === 'string') {
          res = res ? JSON.parse(res) : res
      }
      // 验证token
      // if (res.code === '401') {
      //     console.error("token过期，重新登录")
      //     router.push("/login")
      // }
      return res;
  },
  error => {
      console.log('err' + error) // for debug
      return Promise.reject(error)
  }
)


export default request
