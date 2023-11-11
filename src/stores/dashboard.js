import {ref} from 'vue'
import {defineStore} from 'pinia'
import { viewsAPI, visitrecordAPI, alldataAPI} from '../api/alldata'
const useVisitorStore = defineStore('visitor',()=>{
    // 各平台数据
    const getplatformData = async()=>{
      const res = await alldataAPI()
      console.log(res)
      return res
    }



    
    // 获取浏览量数据
    const getViewsData = async() => {
      const res = await viewsAPI()
      // console.log(res)
      return res;
    } 

    // 获取访客记录数据
    const getVisitorData = async() => {
      const res = await visitrecordAPI()
      console.log(res)
      return res
    }

    return {
        // visitorRecordData,
        // visitorViewsData,
        getViewsData,
        getVisitorData,
        getplatformData
    }
})
export default useVisitorStore
