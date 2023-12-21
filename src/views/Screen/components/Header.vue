<template>
    <div class="header">
        <div id="decorationTop">
            <dv-decoration5 :dur="3" style="width:100%;height:60px;"/>
        </div>
        <h1 class="title">{{userStore.screenTitle+"舆情分析"}}
            <i class="iconfont icon-htmal5icon28" @click="open"></i>
        </h1>
        <h2 class="time">{{beijingTime}}</h2>
        <div class="navbar">
            <Navbar/>
        </div>
        <div class="back" v-show="userStore.userType=='admin'" @click="goBacktoDashboard">
            <i class="iconfont icon-fanhui"></i>
        </div>
    </div>
</template>
<script setup>
import {ref,onMounted} from 'vue'
import Navbar from '@/views/screen/components/Navbar.vue'
import useSocialScreenStore from '../../../stores/socialStore';
import { useUserStore } from '../../../stores/user';
import {useRouter} from 'vue-router'
const socialStore=useSocialScreenStore()
const userStore=useUserStore()
const router=useRouter()
const beijingTime=ref('')
const option={
    timeZone:'Asia/Shanghai',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}
function getClock(){
    beijingTime.value=new Date().toLocaleDateString('en-US',option)
}
function goBacktoDashboard(){
    socialStore.screenTitle=""
    router.push('/admin')
}
function open(){
    ElMessageBox.alert(
    `<p>${userStore.screenDetail}</p>`,
    '事件详情',
    {
      dangerouslyUseHTMLString: true,
    }
  )
}
onMounted(()=>{
    setInterval(getClock,1000)
    if(!userStore.userType){
        userStore.getUserInfofromToken()
    }
})
</script>
<style scoped lang="scss">

.header{
    position:fixed;
    top:0;
    height: 10%;
    width: 100%;
    //background-color: #000;
    text-align: center;
    #decorationTop{
        margin-top: 1%;
    }
}
.title{
    //background-color:rgba(255,255,255,0.3);
    width: 20%;
    position: fixed;
    top:0;
    margin: 5px 40%;
    font-weight: 500;
    color:white
}
.time{
    position: fixed;
    top:25px;
    left: 50px;
    font-weight: 500;
    font-size: large;
    color:whitesmoke;
    opacity: 0.6;
}
.navbar{
    position: fixed;
    right: 0;
    top:42px;
}
.back{
    position: fixed;
    top:32px;
    left:5px;
    .iconfont{
        font-size: 40px;
        color: aquamarine;
        opacity: 0.8;
        &:hover{
            font-weight: 900;
            opacity: 1;
        }
    }
}
</style>
