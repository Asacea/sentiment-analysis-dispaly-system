// 管理用户相关数据
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { loginAPI } from '../api/user.js'

export const useUserStore = defineStore('user',()=>{
  // 1. 定义管理用户数据的state
  const userInfo = ref({})
  //全局参数usertype
  const userType=ref("");
  // 2. 定义获取接口数据的action函数
  // 登录时获取用户相关信息
  const getUserInfo = async ({  usertype, username, password }) => {
    const res = await loginAPI({  usertype, username, password })
    //userInfo.value = res.data.result
    userType.value=res.usertype
    return res
  }
    const screenId=ref(0)
    const screenTitle=ref('')
    const screenDetail=ref('')

  // 3. 以对象的格式把state和action return
  return {
    userInfo,userType,
    getUserInfo,
    screenId,screenTitle,screenDetail
  }
},
{
  persist: true
})

