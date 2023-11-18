<template>
  <div class="container">
    <div
      class="outer"
      v-for="screen in screendata"
      :key="screen.id"
    >
      <dv-border-box7>
        <RouterLink
          :to="{
            path: `/screen/${screen.type}/${screen.id}`,
          }"
          @click="changeScreen(screen)"
          >{{ screen.topic }}</RouterLink>
      </dv-border-box7>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import useStatusStore from "@/stores/screenStatus.js";
import useSocialScreenStore from '@/stores/socialStore.js'
import { useUserStore } from "../../../stores/user";
const statusStore = useStatusStore();
const socialStore=useSocialScreenStore();
const userStore=useUserStore();
const screendata = ref([])
// const getTopic = async()=>{
//   screendata.value = await statusStore.getscreenData()
// }
async function identifyUser(){
  if(userStore.userType=='admin'){
    screendata.value=statusStore.screenData
  }else{
    screendata.value=statusStore.visitorScreen
  }
  console.log("screendata:",screendata.value)
}
onMounted(async ()=>{
  // getTopic()
  console.log("hello")
  await statusStore.getscreenData()
  // console.log(userStore.userType)
  await identifyUser()
})
const changeScreen=(screen)=>{
  userStore.screenId=screen.id;
  userStore.screenTitle=screen.topic
}
</script>
<style scoped lang="scss">
.container {
  //background-color: rgba(255,255,255,0.3);
  width: 360px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-small;
  .outer {
    height: 90%;
    flex: 1 50px;
    padding: 5px 10px;
    text-align: center;
    line-height: 28px;
    a {
      text-align: center;
      text-decoration: none;
      color: white ;
      font-size:10px;
    }
  }
}
</style>
