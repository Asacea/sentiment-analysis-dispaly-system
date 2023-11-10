import {defineStore} from 'pinia'
import {ref} from 'vue'
import { screenadminAPI,screendataAPI } from '../api/screenadmin'
const useStatusStore = defineStore('Status',()=>{
    // 获取大数据管理数据
    const getscreenData = async() => {
        const res = await screendataAPI()
        console.log(res)
        return res
    }

    // 管理开关
    const sendSwitchStateToBackend = async({topic,showSwitch})=>{
        // 向后端发送请求
        const res = await screenadminAPI({topic,showSwitch})
        console.log(res)
        return res
    }

    // const ScreentableData=ref([
    //     {
    //         topic:'考研缩招',
    //         clicks:178,
    //         type:'社科',
    //         value:true
    //     },
    //     {
    //         clicks:178,
    //         topic:'元宇宙',
    //         type:'科技',
    //         value:true
    //     },
    //     {
    //         clicks:178,
    //         topic:'虚拟货币',
    //         type:'科技',
    //         value:true
    //     },
    //     {
    //         clicks:178,
    //         topic:'web3.0',
    //         type:'科技',
    //         value:true
    //     },
    //     {
    //         clicks:178,
    //         topic:'电子科大专属话题',
    //         type:'学校专属定制',
    //         value:false
    //     }
    // ])
    return {
        // ScreentableData,
        getscreenData,
        sendSwitchStateToBackend
    }
})
export default useStatusStore
