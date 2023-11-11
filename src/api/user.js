import request from "../utils/http";

// 登录请求
export const loginAPI = ({ usertype, username, password}) => {
  return request({
    // 测试登录
    url: 'http://localhost:3000/login',
    // url: '/user/login',
    method: 'POST',
    data:{
      usertype,
      username,
      password
    }
  })
}

// 注册请求
export const signinAPI = ({userschool,usertype,username,userpswd,confirmpassword}) => {
  return request({
    // 测试注册
    url: 'http://localhost:3000/register',
    // url:'/user/register',
    method: 'POST',
    data:{
      userschool,
      usertype,
      username,
      userpswd,
      confirmpassword
    }
  })
}