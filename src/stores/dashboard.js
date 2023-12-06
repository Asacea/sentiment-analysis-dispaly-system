import {ref} from 'vue'
import {defineStore} from 'pinia'
import { viewsAPI, visitrecordAPI, alldataAPI} from '../api/alldata'
export const useVisitorStore = defineStore('visitor',()=>{
    // 各平台数据
    const getplatformData = async()=>{
      const res = await alldataAPI()
      console.log(res)
      return res.data
    }
    
    // 获取浏览量数据
    const getViewsData = async() => {
      const res = await viewsAPI()
      // console.log(res)
      return res.data;
    } 

    // 获取访客记录数据
    const getVisitorData = async() => {
      const res = await visitrecordAPI()
      console.log(res)
      return res.data
    }

    return {
        // visitorRecordData,
        // visitorViewsData,
        getViewsData,
        getVisitorData,
        getplatformData
    }
})
// import { screenadminAPI,screendataAPI } from '../api/screenadmin'
// export const useStatusStore = defineStore('Status',()=>{
//     // 获取大数据管理数据
//     const getscreenData = async() => {
//         const res = await screendataAPI()
//         console.log(res)
//         return res
//     }

//     // 管理开关
//     const sendSwitchStateToBackend = async({topic,showSwitch})=>{
//         // 向后端发送请求
//         const res = await screenadminAPI({topic,showSwitch})
//         console.log(res)
//         return res
//     }

//     // const ScreentableData=ref([
//     //     {
//     //         topic:'考研缩招',
//     //         clicks:178,
//     //         type:'社科',
//     //         value:true
//     //     },
//     //     {
//     //         clicks:178,
//     //         topic:'元宇宙',
//     //         type:'科技',
//     //         value:true
//     //     },
//     //     {
//     //         clicks:178,
//     //         topic:'虚拟货币',
//     //         type:'科技',
//     //         value:true
//     //     },
//     //     {
//     //         clicks:178,
//     //         topic:'web3.0',
//     //         type:'科技',
//     //         value:true
//     //     },
//     //     {
//     //         clicks:178,
//     //         topic:'电子科大专属话题',
//     //         type:'学校专属定制',
//     //         value:false
//     //     }
//     // ])
//     return {
//         // ScreentableData,
//         getscreenData,
//         sendSwitchStateToBackend
//     }
// })

