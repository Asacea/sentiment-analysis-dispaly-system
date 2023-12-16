import {defineStore} from 'pinia'
import { viewsAPI, visitrecordAPI, alldataAPI} from '../api/alldata'
export const useVisitorStore = defineStore('visitor',()=>{
    // 各平台数据
    const getplatformData = async()=>{
      const res = await alldataAPI()
      return res.data
    }
    
    // 获取浏览量数据
    const getViewsData = async() => {
      const res = await viewsAPI()
      return res.data;
    } 

    // 获取访客记录数据
    const getVisitorData = async() => {
      const res = await visitrecordAPI()
      console.log(res)
      return res.data
    }

    return {
        getViewsData,
        getVisitorData,
        getplatformData
    }
})

