import request from "../utils/http";

// 更改管理大屏数据
export const screenadminAPI = (newScreenData) => {
  console.log(newScreenData)
  return request({
    // 测试接口
    // url:'http://localhost:3000/screenadmin',
    url: '/admin/screenstatus',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data:
      newScreenData
    
  })
}

// 获取管理大屏数据
export const screendataAPI = ()=> {
  return request({
    // 测试接口
    // url:'http://localhost:3000/screendata',
    url: '/admin/screendata',
  })
}
