<template>
  <div class="container">
    <div class="left">
      <div class="l1 outer">
        <dv-border-box8 :dur="5">
          <div class="inner" id="chart-l-1"></div>
        </dv-border-box8>
      </div>
      <div class="l2 outer">
        <dv-border-box10>
          <div class="inner">
            <h4 style="color: #1faced; margin-left: 86px">
              各平台讨论度实时排名
            </h4>
            <div id="chart-l-2">
              <div
                class="chart-l-2-i"
                v-for="i in socialStore.hotList.sort((a, b) => a.rank - b.rank)"
              >
                <h3
                  :style="{ color: color_gradient[i.rank] }"
                  style="font-style: italic"
                >
                  0{{ i.rank }}
                </h3>
                <h4 style="margin: 0 10px">{{ i.name }}</h4>
                <div :style="{ color: color_gradient[i.rank] }">
                  <i
                    class="iconfont icon-xiaopangchetubiao-copy"
                    v-for="i in 5 - i.rank"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </dv-border-box10>
      </div>
      <div class="l3 outer">
        <dv-border-box7>
          <div class="inner" id="chart-l-3" style="color: white"></div>
        </dv-border-box7>
      </div>
    </div>
    <div class="mid">
      <div class="m1 outer">
        <dv-border-box11
          :title="socialStore.hotMap.title"
          :title-width="400"
          :animate="false"
        >
          <div class="inner" id="chart-m-1" style="color: white"></div>
        </dv-border-box11>
      </div>
      <div class="m2 outer">
        <dv-border-box12>
          <div class="inner" id="chart-m-2"></div>
        </dv-border-box12>
      </div>
    </div>
    <div class="right">
      <div class="r1 outer">
        <dv-border-box12>
          <div class="inner" id="chart-r-1"></div>
        </dv-border-box12>
      </div>
      <div class="r2 outer">
        <dv-border-box8 :dur="5" :reverse="true">
          <div class="inner" id="chart-r-2">
            <h3>热门信息转发路径</h3>
            <div
              class="chart-r-2-i"
              v-for="i in socialStore.hotRT.sort((a, b) => a.rank - b.rank)"
              :style="{
                backgroundColor:
                  i.rank % 2 == 0 ? '' : 'rgba(255,255,255,0.07)',
              }"
            >
              <h4>
                <strong>0{{ i.rank }}</strong
                >{{ i.text }}
              </h4>
              <p>{{ i.path }}</p>
            </div>
          </div>
        </dv-border-box8>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, reactive, computed } from "vue";
import * as echarts from "echarts";
import "echarts-wordcloud";
import "echarts/map/js/china.js";
import useSocialScreenStore from "@/stores/socialStore.js";
import { useUserStore } from "../../../stores/user";
const socialStore = useSocialScreenStore();
const userStore=useUserStore()
const color_gradient = {
  1: "red",
  2: "orange",
  3: "rgb(255, 196, 0)",
  4: "yellow",
  5: "lightgreen",
};
async function createChart(eleID, option) {
  var ele = document.getElementById(eleID);
  var chart = echarts.init(ele, "dark");
  option && chart.setOption(option);
}
async function createAllCharts(){
  console.log("开始建表")
   createChart("chart-l-1", socialStore.l1_option);
   createChart("chart-l-3", socialStore.l3_option);
   createChart("chart-m-1", socialStore.m1_option);
   createChart("chart-m-2", socialStore.m2_option);
   createChart("chart-r-1", socialStore.r1_option);
}
onMounted(async () => {
  await socialStore.getSocialData(userStore.screenId);
  await createAllCharts()
});
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.container {
  position: fixed;
  bottom: 0;
  height: 90%;
  width: 100%;
  //background-color: #fff;
  display: flex;
  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    .l1 {
      flex: 2;
    }
    .l2 {
      flex: 1;
    }
    .l3 {
      flex: 2;
    }
  }
  .mid {
    flex: 2;
    display: flex;
    flex-direction: column;
    .m1 {
      flex: 5;
    }
    .m2 {
      flex: 3;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 3px;
    .r1 {
      flex: 1;
    }
    .r2 {
      flex: 2;
    }
  }
}
.outer {
  margin: 3px;
}
.inner {
  position: relative;
  top: 5%;
  left: 2%;
  width: 96%;
  height: 90%;
}
#chart-l-2 {
  //background-color: #fff;
  position: relative;
  width: 96%;
  top: 0;
  padding: 10px;
  margin: 0 2%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;

  .chart-l-2-i {
    //background-color: #c1b1b1;
    margin-bottom: 5px;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    font-family: "Times New Roman", Times, serif;
    color: white;
  }
}
#chart-r-2 {
  //background-color:#fff;
  position: relative;
  width: 90%;
  height: 94%;
  top: 1%;
  margin: 0 3%;
  display: flex;
  flex-direction: column;
  h3 {
    color: #1faced;
    text-align: center;
    //padding-top:8px;
    justify-content: center;
    flex: 1;
  }
  .chart-r-2-i {
    flex: 1;
    padding: 2px px;
    border-radius: 8px;
    h4 {
      strong {
        font-size: x-large;
        //float:left;
        color: #1faced;
        font-family: "Times New Roman", Times, serif;
      }
      color: white;
      font-size: x-small;
      font-weight: 400;
    }
    p {
      //margin-top:4px;
      color: white;
      font-style: italic;
      font-size: x-small;
      text-align: end;
      opacity: 0.6;
    }
  }
}
#chart-m-1 {
  height: 85%;
  top: 13%;
  bottom: 2%;
  //margin:0 3%;
  //padding:20px 0 40px 0;
  z-index: 0;
  border-radius: 5px;
}
.dv-border-svg-container {
  z-index: 999;
}
</style>
