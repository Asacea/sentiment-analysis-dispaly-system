import request from "../utils/http";

// 登录请求
export const loginAPI = (formdata) => {
  const params = new URLSearchParams()
  for(let key in formdata){
    params.append(key,formdata[key])
  }
  return request.post('/user/login',params)
}

// 注册请求
export const signinAPI = (formdata) => {
  const params = new URLSearchParams()
  for(let key in formdata){
    params.append(key,formdata[key])
  }
  return request.post('/user/register',params)
}

// 获取用户信息
export const getuserinfoAPI = (username) => {
  return request.get('/user/userInfo',username)
}