import request from "../utils/http";

// 获取科技mid1数据Get请求
export const techmid1API = () => {
  return request({
    // 测试url
    // url:'http://localhost:3000/echarts-data//data/asset/data/les-miserables.json',
    url:'http://localhost:3000/echarts-data/',

    // url: '/admin/alldata',
  })
}