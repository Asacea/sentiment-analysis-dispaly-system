import request from "../utils/http";

// 更改管理大屏数据
export const screenadminAPI = ({id,showSwitch}) => {
  return request({
    // 测试接口
    url:'http://localhost:3000/screenadmin',
    // url: '/admin/adminscreen',
    method: 'POST',
    data:{
      id,
      showSwitch
    }
  })
}

// 获取管理大屏数据
export const screendataAPI = ()=> {
  return request({
    // 测试接口
    url:'http://localhost:3000/screendata',
    // url: '/admin/screendata',
  })
}
