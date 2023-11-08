<template>
    <div class="header">
        <div id="decorationTop">
            <dv-decoration5 :dur="3" style="width:100%;height:60px;"/>
        </div>
        <h1 class="title">社会科学舆情分析</h1>
        <h2 class="time">{{beijingTime}}</h2>
        <div class="navbar">
            <Navbar/>
        </div>
    </div>
</template>
<script setup>
import {ref,onMounted} from 'vue'
import Navbar from './Navbar.vue'
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
onMounted(()=>{
    setInterval(getClock,1000)
})
const beijingTime=ref('')
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
    left: 10px;
    font-weight: 500;
    font-size: large;
    color:rgba(63,150,165,0.9);
}
.navbar{
    position: fixed;
    right: 0;
    top:42px;
}
</style>
