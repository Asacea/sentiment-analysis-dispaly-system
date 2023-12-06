import {defineStore} from 'pinia'
import {computed, ref} from 'vue'
import { screenadminAPI,screendataAPI } from '../api/screenadmin'
const useStatusStore = defineStore('Status',()=>{
    const screenData=ref([])
    const visitorScreen=ref([])
    // 获取大数据管理数据
    const getscreenData = async() => {
        const res = await screendataAPI()
        // console.log("res",res)
        screenData.value=res.data
        visitorScreen.value=res.data.filter(i=>i.value==true)
        return res.data
    }

    // 管理开关
    const sendSwitchStateToBackend = async(newScreenData)=>{
        console.log(newScreenData)
        // 向后端发送请求
        const res = await screenadminAPI(newScreenData)
        console.log(res)
        // console.log(id)
        // return res
    }

    return {
        // ScreentableData,
        screenData,visitorScreen,
        getscreenData,
        sendSwitchStateToBackend
    }
})
export default useStatusStore
