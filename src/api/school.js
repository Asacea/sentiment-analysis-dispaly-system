import request from "../utils/http";

// 获取学校mid1数据Get请求
export const schoolleft1API = () => {
  return request({
    // 测试url
    // url:'http://localhost:3000/echarts-data//data/asset/data/les-miserables.json',
    url:'http://localhost:3000/school',

    // url: '/admin/alldata',
  })
}