<template>
    <div class="container">
      <div class="left">
        <div class="l1 outer">
          <dv-border-box12 :dur="5" style="text-align: center;">
            <div class="inner" >
                <!-- <h3>本校热词</h3> -->
                <div id="chart-l-1" style="height: 100%;"></div>
            </div>
          </dv-border-box12>
        </div>
        <div class="l2 outer">
          <dv-border-box12>
            <div class="inner">
              <div class="inner1" id="chart-l-2"></div>
              <div class="inner2" id="chart-l-3"></div>
            </div>
          </dv-border-box12>
        </div>
      </div>
      <div class="mid">
        <div class="m1 outer">
          <dv-border-box12>
            <div class="inner0">>
              <div id="chart-m-1" style="height: 100%;"></div>
            </div>
          </dv-border-box12>
        </div>
        <div class="m2 outer">
          <dv-border-box12>
            <div class="inner1" style="text-align: center;">
              <h3 style="margin-top:15px;margin-bottom:5px">本月热门舆情</h3>
              <div id="chart_m_2_1">
                <!--这里记得修改成store-->
                <div 
                v-for="(item,index) in schoolStore.data_opinion" 
                :style="{
                  backgroundColor:
                    index % 2 == 0 ? '' : 'rgba(255,255,255,0.17)',
                }"
                 class="opinion">
                  <div class="mood" :style="{color:getFontColor[item.mood]}">【{{item.mood}}】</div>
                  <div class="text">{{item.text}}</div>
                </div>
              </div>
            </div>
          </dv-border-box12>
          <dv-border-box12>
            <div class="inner2" id="chart-m-2" style="height: 100%;"></div>
          </dv-border-box12>
        </div>
      </div>
      <div class="right">
        <div class="r1 outer">
          <dv-border-box12>
            <div class="inner">
                <div style="text-align: center;"><h3>校内用户画像</h3></div>

                <div class="inner1">
                    <div class="inner11" id="chart-r-1"></div>
                    <div class="inner12" id="chart-r-2"></div>
                </div>
                <div class="inner2">
                    <div class="inner21" id="chart-r-3"></div>
                    <div class="inner22" id="chart-r-4"></div>
                </div>
            </div>
          </dv-border-box12>
        </div>
        <div class="r2 outer">
          <dv-border-box12 :dur="5" :reverse="true">
            <div class="inner" >
              <!-- <h3 style="">热门信息转发路径</h3> -->
              <div class="chart-r-2-i" id="chart-r-5" style="height: 100%;">
              </div>
            </div>
          </dv-border-box12>
        </div>
      </div>
    </div>
</template>
<script setup>
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { ref, onMounted, reactive, onBeforeUnmount } from "vue";
import * as echarts from "echarts";
import "echarts-wordcloud";
import "echarts/map/js/china.js";
// import 'echarts/extension/bmap/bmap';
// 引入百度地图的 JavaScript API
// import BMap from 'bmap-jsapi';
import useschoolStore from '@/stores/schoolStore.js'
import { useUserStore } from "../../../stores/user";
const schoolStore = useschoolStore()
const userStore=useUserStore()

// 根据内容获取字体颜色
const getFontColor={
  '正向':'green',
  '负向':'red',
  '中性':'orange'
}
// 封装渲染函数
async function createChart(eleID, option) {
  let ele = document.getElementById(eleID);
  let chart = echarts.init(ele, "dark");
  option && chart.setOption(option);
}

async function createAllCharts(){
  createChart("chart-l-1", schoolStore.school_l1_option);
  createChart("chart-l-2", schoolStore.school_l21_option);
  createChart("chart-l-3", schoolStore.school_l22_option);
  createChart("chart-m-1", schoolStore.school_m1_option);
  createChart("chart-m-2", schoolStore.school_m22_option);
  createChart("chart-r-1", schoolStore.school_r11_option);
  createChart("chart-r-2", schoolStore.school_r12_option);
  createChart("chart-r-3", schoolStore.school_r13_option);
  createChart("chart-r-4", schoolStore.school_r14_option);
  createChart("chart-r-5", schoolStore.school_r2_option);

}



async function rotateArray(arr) {
  console.log(arr);
  setInterval(() => {
    arr.push(arr.shift());
  }, 1500);
}
onMounted(async () => {
    await schoolStore.getSchooldata(userStore.screenId)
    await createAllCharts()
    // await rotateArray(schoolStore.data_opinion);
    
});
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
h3{
  color:#1FACED;
  // margin-left:86px
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
      flex: 1;
    }
    .l2 {
      flex: 1;
      .inner{
        display:flex;
        .inner1{
            flex:1
        } 
        .inner2{
            flex:1
        }
      }
    }
  }
  .mid {
    flex: 1;
    display: flex;
    flex-direction: column;
    .m1 {
      flex: 1;
    }
    .m2 {
      flex: 1;
      display:flex;
      .inner1{
        flex:1
      }
      .inner2{
        flex:1
      }

    }
  } 
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 3px;
    .r1 {
      flex: 2;
      .inner{
        display: flex;
        flex-direction: column;
        .inner1{
            flex:1;
            display: flex;
            .inner11{
                flex: 1;
            }
            .inner12{
                flex: 1;
            }

        }
        .inner2{
            flex:1;
            display: flex;
            .inner21{
                flex: 1;
            }
            .inner22{
                flex: 1;
            }

        }
      }
    }
    .r2 {
      flex: 1;
    }
  }
}
a .outer {
  margin: 3px;
}
.inner {
  position: relative;
  top: 5%;
  // left: 2%;
  width: 96%;
  height: 90%;
}

.inner0 {
  position: relative;
  // top: 5%;
  // left: 2%;
  width: 96%;
  height: 90%;
}

#chart_m_2_1{
  position:absolute;
  //background-color:#fff;
  width:80%;
  max-height:270px;
  //bottom:2%;
  left:10%;
  color:white;
  overflow-y: hidden;
  .opinion{
    display:flex;
    flex-direction:row;
    height:30px;
    line-height:30px;
    border-radius: 5px;
    .text{
      font-size:small;
    }
    .mood{
      font-size: medium;
    }
  }
}

.dv-border-svg-container {
  z-index: 999;
}
</style>
