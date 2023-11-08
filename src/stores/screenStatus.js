import {defineStore} from 'pinia'
import {ref} from 'vue'
const useStatusStore = defineStore('Status',()=>{
    const ScreentableData=ref([
        {
            id:0,
            topic:'考研缩招',
            clicks:178,
            type:'社科',
            value:true
        },
        {
            id:1,
            clicks:178,
            topic:'元宇宙',
            type:'科技',
            value:true
        },
        {
            id:2,
            clicks:178,
            topic:'虚拟货币',
            type:'科技',
            value:true
        },
        {
            id:3,
            clicks:178,
            topic:'web3.0',
            type:'科技',
            value:true
        },
        {
            id:4,
            clicks:178,
            topic:'电子科大',
            type:'学校专属定制',
            value:false
        }
    ])
    return {
        ScreentableData
    }
})
export default useStatusStore
