import {ref} from 'vue'
import {defineStore} from 'pinia'
import { viewsAPI, visitrecordAPI } from '../api/alldata'
const useVisitorStore = defineStore('visitor',()=>{
    // 各平台数据


    // 浏览量数据
    // const visitorViewsData=ref([12,43,56,2,4,123,56,23,23,0,23,2])
    // const visitorRecordData=ref([
    //     {
    //       date: '2023-05-03',
    //       name: '张伟',
    //       count: 1,
    //       school: '电子科技大学',
    //     },
    //     {
    //       date: '2023-05-02',
    //       count: 1,
    //       name: '张伟',
    //       school: '电子科技大学',
    //     },
    //     {
    //       date: '2023-05-04',
    //       name: '张伟',
    //       count: 1,
    //       school: '电子科技大学',
    //     },
    //     {
    //       date: '2023-05-01',
    //       name: '张伟',
    //       count: 1,
    //       school: '电子科技大学',
    //     },
    //     {
    //       date: '2023-05-08',
    //       name: '张伟',
    //       count: 1,
    //       school: '电子科技大学',
    //     },
    //     {
    //       date: '2023-05-06',
    //       name: '张伟',
    //       count: 1,
    //       school: '电子科技大学',
    //     },
    //     {
    //       date: '2023-05-07',
    //       name: '张伟',
    //       count: 1,
    //       school: '电子科技大学',
    //     },
    //   ])
    
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
        getVisitorData
    }
})
export default useVisitorStore
