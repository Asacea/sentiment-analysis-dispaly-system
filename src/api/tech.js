import request from "../utils/http";

// 获取科技1数据Get请求
export const techAPI = (screenId) => {
  return request({
    // 测试url
    // url:'http://localhost:3000/echarts-data//data/asset/data/les-miserables.json',
    // url:`http://localhost:3000/echarts-data/${screenId}`,

    url: '/tech',
  })
}
