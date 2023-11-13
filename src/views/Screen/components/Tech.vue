<template>
    <div class="container">
        <div class="left">
            <div class="l1 outer">
                <dv-border-box12 style="text-align: center; display: flex;">
                  <h4 style="margin-top: 10px;">热门话题</h4>
                    <div class="inner" id="chart-l-1" >                       
                          <div class="inner1" >
                            <div class="inner11" style="color: white; font-size: 12px; margin-top: 5px;">
                              <img src="../../../../src/img/马立奥.png" alt="" style="width: 50px;">
                              <div style="margin-top: 10px;">新华社</div>
                              <div style="margin-top: 5px;">微博认证</div>
                            </div>
                          </div>
                          <div class="inner2">
                            <div class="inner22" style="text-align: left; color: white; font-size: 14px;">
                              <div>20世纪70年代到95年代出现了大量的开放性多人游戏，游戏本身的开放世界形成了元宇宙的早期基础。2003年，游戏《Second Life》发布，它在理念上给大家部分解放了现实世界所面临的窘境，大家在现实世界中不能快速调整自己的身份</div>
                              <br/>
                              <div>[转发：1000，评论数：200，点赞：3000]</div>
                            </div>
                          </div>
                    </div>
                </dv-border-box12>
            </div>
            <div class="l2 outer">
                <dv-border-box12 >
                    <div class="inner" style="text-align: center;">
                      <h4>关键传播信息账号</h4>
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
                      <h4>话题情感分析</h4>
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
                        <h4>关系节点发现</h4>
                        <div id="chart-m-1" ref="chartm1" style="height: 100%">
                        </div>
                    </div>
                </dv-border-box12>
            </div>
            <div class="m2 outer">
                <dv-border-box12>
                    <div class="inner" style="text-align: center">
                        <h4 >话题热度趋势变化</h4>
                        <div id="chart-m-2" style="height: 120%;margin-left:20px;margin-top: -25px;;">

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
                            <h4 style="margin-top: -35px;;">用户年龄</h4>
                        </div>
                        <div class="inner2" style="text-align: center;">
                            <div id="chart-r-1-2" style="height: 100%;"></div>
                            <h4 style="margin-top: -35px;;">用户类别</h4>
                        </div>
                        <div class="inner3" style="text-align: center;">
                            <div id="chart-r-1-3" style="height: 100%;"></div>
                            <h4 style="margin-top: -35px;;">用户占比</h4>
                        </div>
                    </div>
                </dv-border-box12>
            </div>
            <div class="r2 outer">
                <dv-border-box10 :dur="5" :reverse="true" style="text-align: center;">
                  <h4 style="padding-top: 5px;">用户来源分布</h4>
                    <div class="inner" id="chart-r-2">
                        <div id="chart-r-2" ref="chinaMap" style="height: 100%;"></div>
                    </div>
                </dv-border-box10>
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
const screenId=ref(0)
const techStore = usetechStore()


// 关系节点发现图表chart-m-1
const createChartm1 = async() => {
  const myChart = echarts.init(document.getElementById('chart-m-1'), 'dark', {
    renderer: 'canvas',
    useDirtyRect: false
  });
  const chartm1Data =await techStore.getmid1()

  myChart.showLoading();
  const graph = chartm1Data;

  graph.nodes.forEach(function (node) {
    node.symbolSize /= 1.5
    node.label = {
      show: node.symbolSize > 25
    };
  });

  const option = {
  //   title: {
//     text: 'Les Miserables',
//     subtext: 'Default layout',
//     top: 'bottom',
//     left: 'right'
//   },
    tooltip: {},
    legend: [{
        data: graph.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: 'Les Miserables',
        type: 'graph',
        layout: 'none',
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 10
          }
        }
      }
    ],
  backgroundColor: 'transparent'
};

myChart.setOption(option);
myChart.hideLoading();

}

// 话题热度趋势变化图
const createChartm2 = async() => {
    echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
    let chartDom = document.getElementById('chart-m-2');
    let myChart = echarts.init(chartDom);
    let option;

    // 配置项
    option = {
      // 坐标
      xAxis: {
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ],
      // 背景设置为透明
      backgroundColor: 'transparent'
    };

    option && myChart.setOption(option);
}

// 用户年龄趋势图
const createChartr11 =async() =>{
    let dom = document.getElementById('chart-r-1-1');
    let myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    let option;

    // 配置项
    option = {
      // 调整位置
      grid: {
        // top: '30%', // 调整顶部边距
        // bottom: '10%', // 调整底部边距
        left: '15%', // 调整左侧边距
        // right: '10%' // 调整右侧边距
      },
      // 坐标
      xAxis: {
        type: 'category',
        data: ['<15', '15-18', '18-30', '30-45', '>45'],
        // 字体大小调整
        axisLabel: {fontSize: 7}
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70],
          type: 'bar',
          barWidth: '55%' // 调整柱子的宽度
        }
      ],
      // 设置背景透明
      backgroundColor: 'transparent'

};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
}

// 用户类别
const createChartr12 = async()=>{
    let dom = document.getElementById('chart-r-1-2');
    let myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    
    let option;

    option = {
      // title: {
      //   text: 'Basic Radar Chart'
      // },

      legend: {
        data: ['知乎', '贴吧','微博', 'B站', '清水河畔']
      },
      // 雷达图
      radar: {
        // 雷达图的形状
        // shape: 'circle',
        // 用于定义指标轴
        indicator: [
          { name: '个体认证', max: 6500 },
          { name: '达人', max: 16000 },
          { name: '普通用户', max: 30000 },
          { name: '大V', max: 38000 },
          { name: '公号', max: 52000 },
          // { name: 'Marketing', max: 25000 }
        ],
        // 调整雷达图的大小
        radius: '60%' 
      },
      series: [
        {
          name: '各平台数据对比',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000],
              name: '知乎'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: '贴吧'
            },
            {
              value: [3000, 1000, 21000, 2600, 42300, 2200],
              name: '微博'
            },
            {
              value: [5030, 4000, 18000, 20000, 12000, 31000],
              name: '清水河畔'
            },
            {
              value: [3000, 4000, 18000, 29000, 40000, 23000],
              name: 'B站'
            }
          ]
        }
      ],
      backgroundColor: 'transparent'
    };

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
}

// 用户性别
const createChartr13 = async()=>{
    let dom = document.getElementById('chart-r-1-3');
    let myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });    
    let option;

    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: '评论人数',
          type: 'pie',
          radius: ['30%', '60%'],
          avoidLabelOverlap: false,
          label: {
          show: false,
          position: 'center'
          },
          emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
          },
          labelLine: {
          show: false
          },
          data: [
          { value: 1048, name: '男' },
          { value: 735, name: '女' },
          ]
        }
      ],
      backgroundColor: 'transparent'
    };

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
}


// 话题情感分析
const createChartl3 = async()=>{
  let dom = document.getElementById('chart-l-3');
  let myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
  });    

  let  option = {
    // title: {
    //   text: 'Referer of a Website',
    //   subtext: 'Fake Data',
    //   left: 'center'
    // },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '评论数量',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: '消极' },
          { value: 735, name: '积极' },
          { value: 580, name: '中立' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ],
    backgroundColor: 'transparent'
  };

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

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

// 地图
const createChartr2 = ()=>{
  let mapcharts = echarts.init(document.getElementById('chart-r-2'))
  let option;
  option = {
    series: [{
      type: 'map',
      map: 'china',
      layoutCenter: ['40%', '50%'], // 地图布局中心点
      layoutSize: 270, 
      label: {
        show: true,
        color: '#ffffff',
        fontSize: 10,
      },
      itemStyle: {
        areaColor: '#eee',
        borderColor: '#24dafe',
      },
      roam: true,
      zoom: 1.1,
      emphasis: {
        label: {
          color: '#fff',
          fontSize: 12,
          fontWeight:'bold'
        },
        itemStyle: {
          areaColor: 'none',
          borderColor: '#77ebff',
          borderWidth: 2
        }
      },
      data: [
        { name: '北京', value: 17 },
        { name: '天津', value: 12 },
        { name: '上海', value: 15 },
        { name: '重庆', value: 15 },
        { name: '河北', value: 15 },
        { name: '河南', value: 15 },
        { name: '云南', value: 5 },
        { name: '辽宁', value: 15 },
        { name: '黑龙江', value: 15 },
        { name: '湖南', value: 2 },
        { name: '安徽', value: 15 },
        { name: '山东', value: 15 },
        { name: '新疆', value: 3 },
        { name: '江苏', value: 3 },
        { name: '浙江', value: 9 },
        { name: '江西', value: 15 },
        { name: '湖北', value: 4 },
        { name: '广西', value: 4 },
        { name: '甘肃', value: 10 },
        { name: '山西', value: 15 },
        { name: '内蒙古', value: 15 },
        { name: '陕西', value: 9 },
        { name: '吉林', value: 8 },
        { name: '福建', value: 9 },
        { name: '贵州', value: 9 },
        { name: '广东', value: 8 },
        { name: '青海', value: 3 },
        { name: '西藏', value: 9 },
        { name: '四川', value: 0 },
        { name: '宁夏', value: 15 },
        { name: '海南', value: 7 },
        { name: '台湾', value: 4 },
        { name: '香港', value: 4 },
        { name: '澳门', value: 3 }
      ]
    }],
    visualMap: [{
      type: 'piecewise',
      show: true,
      pieces: [
        { min: 0, max:4 },
        { min: 5, max: 9 },
        { min: 10, max: 14},
        { min: 14},
      ],
      textStyle: {
        color: '#828994'
      },
      itemWidth: 64, // 每个图元的宽度
      itemHeight:12,
      top: "top",                               
      right: "0",
      inRange: {
        borderRadius: 4,
        color: [ 
          '#84bbff',
          '#70b4ff',
          '#61a7ff',
          '#4d90f2',
        ]
      },
    }],
    tooltip: { 
      trigger: 'item',  //数据项图形触发
      backgroundColor: "#fff",  
      borderWidth: 0,    
      formatter: '地区：{b}<br/>数据：{c}'
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      bottom: '0',
      feature: {
          restore: {},
          saveAsImage: {}
      }
    },
    backgroundColor: 'transparent'
  }
  // 绘制图表
  mapcharts.setOption(option);    
}

onMounted(()=>{
    createChartl3()
    createChartm1()
    createChartm2()
    createChartr11()
    createChartr12()
    createChartr13()
    createChartr2()
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

h4{
    color:#1FACED;
    // margin-left:86px
}


</style>
