import {ref} from 'vue'
import {defineStore} from 'pinia'
import { schoolleft1API} from '../api/school.js'
const useschoolStore = defineStore('tech',()=>{
    // 各平台数据
    const getleft1 = async()=>{
      const res = await schoolleft1API()
      console.log(res)
      return res
    }

    return {
        getleft1
    }
})
export default useschoolStore
