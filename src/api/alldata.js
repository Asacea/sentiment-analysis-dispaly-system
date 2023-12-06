import request from "../utils/http";

// 网络舆情数据Get请求
export const alldataAPI = () => {
  return request({
    // 测试url
    // url:'http://localhost:3000/platformdata',
    url: '/admin/platformdata',
  })
}

// 浏览量记录请求(一年中的请求)
export const viewsAPI = () => {
  return request({
    // 测试url
    // url: 'http://localhost:3000/views',
    url:'/admin/viewsdata',
  })
}

// 访客浏览记录请求
export const visitrecordAPI = ()=>{
  return request({
    // 测试url
    // url: 'http://localhost:3000/visitrecord',
    url:'/admin/visitordata'
  })
}


