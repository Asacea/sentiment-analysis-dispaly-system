<template>
  <div class="container">
    <div
      class="outer"
      v-for="screen in screendata.filter(i=>i.value==true)"
      :key="screen.id"
    >
      <dv-border-box7>
        <RouterLink
          :to="{
            path: `/screen/${screen.type}/${screen.id}`,
          }"
          @click="$emit('screenChange',screen.topic)"
          >{{ screen.topic }}</RouterLink>
      </dv-border-box7>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import useStatusStore from "@/stores/screenStatus.js";
const statusStore = useStatusStore();
const screendata = ref([])

const getTopic = async()=>{
  screendata.value = await statusStore.getscreenData()
}
onMounted(()=>getTopic())

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
      color: white;
      font-size:10px;
    }
  }
}
</style>
