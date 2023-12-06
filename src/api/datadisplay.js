import request from "../utils/http";

// 网络舆情数据Get请求
export const getdisplaydataAPI = () => {
  return request({
    // 测试url
    url:'http://localhost:3000/admin/displaydata',
    // url: '/admin/displaydata',
  })
}