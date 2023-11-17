<template>
    <div class="container">
        <div class="left">
            <div class="l1 outer">
                <dv-border-box12 style="text-align: center; display: flex;">
                  <h3 style="margin-top: 10px;">热门话题</h3>
                    <div class="inner" id="chart-l-1" >                       
                          <div class="inner1" >
                            <div class="inner11" style="color: white; font-size: 13px; margin-top: 5px;">
                              <img src="../../../../src/img/马立奥.png" alt="" style="width: 85px;">
                              <div style="margin-top: 10px;">{{techStore.data_tech_topic.platform}}</div>
                              <!-- <div style="margin-top: 5px;">微博认证</div> -->
                            </div>
                          </div>
                          <div class="inner2">
                            <div class="inner22" style="text-align: left; color: white; font-size: 13px; margin:3px">
                              <div>{{techStore.data_tech_topic.text}}</div>
                              <br/>
                              <div>【转发：{{techStore.data_tech_topic.num_forward}}，评论数：{{techStore.data_tech_topic.num_comment}}，点赞：{{techStore.data_tech_topic.num_like}}】</div>
                            </div>
                          </div>
                    </div>
                </dv-border-box12>
            </div>
            <div class="l2 outer">
                <dv-border-box12 >
                    <div class="inner" style="text-align: center;">  
                      <h3>关键传播信息账号</h3>
                      <div id="chart-l-2" style="height: 100%;">
                        <div demo-bg>
                          <dv-scroll-board :config="config" style="height: 100%;font-size: 8px;" />
                        </div>
                      </div>
                    </div>
                </dv-border-box12>
            </div>
            <div class="l3 outer">
                <dv-border-box12 >
                    <div class="inner" style="text-align: center;">
                      <!-- <h3>话题情感分析</h3> -->
                      <div id="chart-l-3" style="height: 100%;"></div>
                    </div>
                </dv-border-box12>
            </div>
        </div>
        <div class="mid">
            <!-- 节点发现图 -->
            <div class="m1 outer">
                <dv-border-box12>
                    <div class="inner" >
                        <!-- <h3>关系节点发现</h3> -->
                        <div id="chart-m-1" ref="chartm1" style="height: 100%">
                        </div>
                    </div>
                </dv-border-box12>
            </div>
            <div class="m2 outer">
                <dv-border-box12>
                    <div class="inner" style="text-align: center">
                        <!-- <h3>话题热度趋势变化</h3> -->
                        <div id="chart-m-2" style="height: 100%;margin-left:0px;margin-top: 0px;;">

                        </div>
                    </div>
                </dv-border-box12>
            </div>
        </div>
        <div class="right">
            <div class="r1 outer">
                <dv-border-box12 >
                    <div class="inner" >
                        <div class="inner1" style="text-align: center;">
                            <div id="chart-r-1-1" style="height: 100%;"></div>
                            <!-- <h3 style="margin-top: -35px;;">用户年龄</h3> -->
                        </div>
                        <div class="inner2" style="text-align: center;">
                            <div id="chart-r-1-2" style="height: 100%;"></div>
                            <!-- <h3 style="margin-top: -35px;;">用户类别</h3> -->
                        </div>
                        <div class="inner3" style="text-align: center;">
                            <div id="chart-r-1-3" style="height: 100%;"></div>
                            <!-- <h3 style="margin-top: -35px;;">用户占比</h3> -->
                        </div>
                    </div>
                </dv-border-box12>
            </div>
            <div class="r2 outer">
                <dv-border-box12 :dur="5" :reverse="true" style="text-align: center;">
                    <div class="inner" id="chart-r-2">
                        <div id="chart-r-2" ref="chinaMap" style="height: 100%;"></div>
                    </div>
                </dv-border-box12>
            </div>
        </div>
    </div>

</template>

<script setup>
import 'echarts-wordcloud';
import {useRoute,onBeforeRouteUpdate} from 'vue-router'
import {ref,reactive,onMounted,watch,onBeforeUnmount} from 'vue'
import * as echarts from 'echarts';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import usetechStore from '@/stores/techStore.js'
import 'echarts-wordcloud';
import 'echarts/map/js/china.js'

const route = useRoute()
const screenId=ref(2)
const techStore = usetechStore()
// 渲染图表函数封装
async function createChart(eleID,option){
  let ele = document.getElementById(eleID);
  let chart = echarts.init(ele, "dark");
  option && chart.setOption(option);
  window.addEventListener('resize', function () {
    chart.resize();
})
}

// 渲染图表
async function createAllCharts(){
  console.log('科技科技')
  createChart("chart-l-3",techStore.tech_l3_option);
  createChart("chart-m-1",techStore.tech_m1_option);
  createChart("chart-m-2",techStore.tech_m2_option);
  createChart("chart-r-1-1",techStore.tech_r11_option);
  createChart("chart-r-1-2",techStore.tech_r12_option);
  createChart("chart-r-1-3",techStore.tech_r13_option);
  createChart("chart-r-2",techStore.tech_r2_option);
}


// 关键传播账号
const config = reactive({
  header: ['账号名', '粉丝数', '用户类型','转发时间','二次转发'],
  data: [
    ['张三', '300','普通用户','2023-9-19','8'],
    ['张三', '300','普通用户','2023-9-19','8'],
    ['张三', '300','普通用户','2023-9-19','8'],
    ['张三', '300','普通用户','2023-9-19','8'],
    ['张三', '300','普通用户','2023-9-19','8'],
    ['张三', '300','普通用户','2023-9-19','8'],
    ['张三', '300','普通用户','2023-9-19','8'],
    ['张三', '300','普通用户','2023-9-19','8'],
    ['张三', '300','普通用户','2023-9-19','8'],
  ],
  index: true,
  columnWidth: [45],
  align: ['center'],
  // 表头高度
  headerHeight: 20,
  // 表行数
  rowNum: 7
})



onMounted(async()=>{
  await techStore.getdata()
  await createAllCharts()
})


</script>
<style scoped lang="scss">
*{
    margin: 0;
    padding: 0;
}
.container{
    position: fixed;
    bottom: 0;
    height: 90%;
    width: 100%;
    //background-color: #fff;
    display: flex;
    .left{
        flex:2;
        display: flex;
        flex-direction: column;
        .l1{
            flex: 5;
            display: flex;
            .inner{
              display: flex;
              flex: 1;
              justify-content: space-between;

              .inner1{
                flex: 1;
                .inner11{
                  flex-shrink: 0;
                }
              }
              .inner2{
                flex: 3;
              }
            }
        }
        .l2{
            flex: 5;
        }
        .l3{
            flex: 4;
        }
    }
    .mid{
        flex: 2;
        display: flex;
        flex-direction: column;
        .m1{
            flex: 1;
        }
        .m2{
            flex: 1;
        }

    }
    .right{
        flex:3;
        display: flex;
        flex-direction: column;
        .r1{
            flex: 2;

            .inner{
                display: flex;
                justify-content: space-between;
                .inner1,
                .inner2,
                .inner3{
                    flex: 1;
                }
            }
        }
        .r2{
            flex: 2;
        }
    }
}
.outer{
    margin: 3px;
}
.inner{
    position: relative;
    top:5%;
    left: 2%;
    width: 96%;
    height: 90%;    
}

h3{
    color:#1FACED;
    // margin-left:86px
}


</style>
