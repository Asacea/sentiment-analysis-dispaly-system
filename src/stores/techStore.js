import {ref} from 'vue'
import {defineStore} from 'pinia'
import { techmid1API} from '../api/tech.js'
const usetechStore = defineStore('tech',()=>{
    // 各平台数据
    const getmid1 = async()=>{
      const res = await techmid1API()
      console.log(res)
      return res
    }

    return {
        getmid1
    }
})
export default usetechStore
