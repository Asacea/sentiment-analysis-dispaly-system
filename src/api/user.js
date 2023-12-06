import request from "../utils/http";

// 登录请求
export const loginAPI = (formdata) => {
  const params = new URLSearchParams()
  for(let key in formdata){
    params.append(key,formdata[key])
  }
  return request.post('/user/login',params)
  // return request({
  //   // 测试登录
  //   // url: 'http://localhost:3000/login',
  //   url: '/user/login',
  //   method: 'POST',
  //   data:{
  //     usertype,
  //     username,
  //     password
  //   }
  // })
}

// 注册请求
export const signinAPI = (formdata) => {
  const params = new URLSearchParams()
  for(let key in formdata){
    params.append(key,formdata[key])
  }
  return request.post('/user/register',params)
  // return request({
  //   // 测试注册
  //   url: '/user/register',
  //   // url:'/user/register',
  //   method: 'POST',
  //   data:{
  //     username,
  //     userpswd,
  //     usertype,
  //     userschool,
      
  //     // confirmpassword
  //   }
  // })
}