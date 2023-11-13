import request from "../utils/http";

// 获取科技mid1数据Get请求
export const socialAPI = (id) => {
  return request({
    // 测试url
    url:`http://localhost:3000/echarts-data/${id}`,
  })
}
