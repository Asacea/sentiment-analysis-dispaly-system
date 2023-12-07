import {computed, ref} from 'vue'
import {defineStore} from 'pinia'
import { techAPI} from '../api/tech.js'
import { getTitleAPI } from '../api/alltitle.js'
const usetechStore = defineStore('tech',()=>{
    // 热点话题数据
    const data_tech_topic = ref({}) 
    //关键传播信息账号
    const data_tech_l2=ref({})
    // 话题情感数据
    const data_tech_l3 = ref({})
    // 关键节点数据
    const data_tech_m1 = ref({})
    // 情感话题热度数据
    const data_tech_m2 = ref({})
    // 用户年龄趋势数据
    const data_tech_r11 = ref({})
    // 用户类别数据
    const data_tech_r12 = ref({})
    // 用户性别数据
    const data_tech_r13 = ref({})
    // 用户来源
    const data_tech_r2 = ref({})

    // 各平台数据
    const getdata = async(screenId)=>{
      // console.log(screenId)
      const res = await (await techAPI(screenId)).data
      const res1 = await getTitleAPI('tech1l3');

      data_tech_topic.value.title = (await getTitleAPI('tech1l1')).data
      data_tech_topic.value.data = await res.techl1Data[0]  

      data_tech_l2.value.title = (await getTitleAPI('tech1l2')).data
      data_tech_l2.value.data=res.techl2Data 

      data_tech_l2.value.title = (await getTitleAPI('tech1l3')).data
      data_tech_l3.value.data = res.techl3Data

      // 关键节点发现
      data_tech_m1.value.title = (await getTitleAPI('tech1m1')).data
      data_tech_m1.value.nodes = res.techm1nodesData;
      data_tech_m1.value.links = res.techm1linksData;
      data_tech_m1.value.categories = res.techm1categoriesData;


      data_tech_m2.value.title = (await getTitleAPI('tech1m2')).data
      data_tech_m2.value.data = res.techm2Data

      data_tech_r11.value.title = (await getTitleAPI('tech1r11')).data
      data_tech_r11.value.data = res.techr11Data

      data_tech_r12.value.title = (await getTitleAPI('tech1r12')).data
      data_tech_r12.value.indicator = res.techr12indicatorData
      data_tech_r12.value.value = res.techr12valueData


      data_tech_r13.value.title = (await getTitleAPI('tech1r13')).data
      data_tech_r13.value.data = res.techr13Data

      data_tech_r2.value.title = (await getTitleAPI('tech1r2')).data
      data_tech_r2.value.data = res.techr2Data
      // return res
      console.log(res)
    }

    // 配置项
    // 话题情感分析配置项
    const tech_l3_option = computed(()=>{
      getdata()
      let option = {
        // text后端获取
        title:{
          text: data_tech_l2.value.title,
          // text: '测试',
          left: 'center',
          textStyle: {
            color: "#1FACED",
          },
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          top:'30'
        },
        
        // data后端获取
        series: [
          {
            name: '评论数量',
            type: 'pie',
            radius: '50%',
            data:data_tech_l3.value.data,
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
      }
      return option
    })

    // 关键节点发展配置项
    const tech_m1_option = computed(()=>{
      let graph = data_tech_m1.value
      // graph.nodes = data_tech_m1.tech
      let option = {
        // text从后端获取
        title:{
          text: data_tech_m1.value.title,
          // text: '测试',
          left: 'center',
          textStyle: {
            color: "#1FACED",
          },
        },
        tooltip: {},
        // graph从后端获取
        legend: {
          data: graph.categories.map(function (a) {
            return a.name;
          }),
          top:'bottom'
          
        },
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
      }
      return option;
    })

    // 情感话题热度趋势变化图配置项
    const tech_m2_option =computed(()=>{
      let option =  {
        // text从后端获取
        title:{
          text: data_tech_m2.value.title,
          // text: '好好好',
          left: 'center',
          textStyle: {
            color: "#1FACED",
          },
        },
        // 坐标
        xAxis: {
          type: 'category',
          // data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
          data: data_tech_m2.value.data.map(item=>item.month)
        },
        yAxis: {
          type: 'value'
        },
        // data从后端获取
        series: [
          {
            // 图例名称
            name: '转发量', 
            // name: data_tech_m2.month, 
            data: data_tech_m2.value.data.map(item=>item.data),
            type: 'line'
          }
        ],
        legend: {
          top:'bottom',
          // 图例名称
          data: ['转发量'], 
          textStyle: {
            color: '#1FACED',
          },
        },
        // 背景设置为透明
        backgroundColor: 'transparent'
      }

      return option
    })

    // 用户年龄趋势图配置项
    const tech_r11_option = computed(()=>{
      let option = {
        // text从后端获取
        title:{
          text: data_tech_r11.value.title,
          // text: '1111',
          top:'bottom',
          left: 'center',
          textStyle: {
            color: "#1FACED",
          },
        },
        // 调整位置
        grid: {
          // 调整左侧边距
          left: '15%', 
        },
        // 坐标
        // data从后端获取
        xAxis: {
          type: 'category',
          // data: ['<15', '15-18', '18-30', '30-45', '>45'],
          data: data_tech_r11.value.data.map(item=>item.age),
          // 字体大小调整
          axisLabel: {fontSize: 7}
        },
        yAxis: {
          type: 'value'
        },
        // data从后端获取
        series: [
          {
            data: data_tech_r11.value.data.map(item=>item.data),
            type: 'bar',
            barWidth: '55%' // 调整柱子的宽度
          }
        ],
        // 设置背景透明
        backgroundColor: 'transparent'
      }
      return option
    })

    // 用户类别图配置项
    const tech_r12_option = computed(()=>{
      let option =  {
        // text从后端获取
        title:{
          text: data_tech_r12.value.title,
          // text:'222',
          top:'bottom',
          left: 'center',
          textStyle: {
            color: "#1FACED",
          },
        },
        // 图例data数据从后端获取
        legend: {
          // data: ['知乎', '贴吧','微博', 'B站', '清水河畔']
          data: data_tech_r12.value.value.map(item=>item.name)
        },
        // 雷达图
        // indicator从后端获取
        radar: {
          // 雷达图的形状
          // shape: 'circle',
          // 用于定义指标轴
          indicator: data_tech_r12.value.indicator,
          // 调整雷达图的大小
          radius: '60%' 
        },
        // data从后端获取
        series: [
          {
            name: '各平台数据对比',
            type: 'radar',
            data: data_tech_r12.value.value
          }
        ],
        backgroundColor: 'transparent'
      }
      return option
    })

    // 用户性别
    const tech_r13_option = computed(()=>{
      let option = {
        // text从后端获取
        title:{
          text: data_tech_r13.value.title,
          // text: '3333',
          top:'bottom',
          left: 'center',
          textStyle: {
            color: "#1FACED",
          },
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          // data: data_tech_r13.value.data.map(item=>item.name)
        },
        // data从后端获取
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
            data: data_tech_r13.value.data
          }
        ],
        backgroundColor: 'transparent'
      };
      return option
    })

    // 用户分布来源
    const tech_r2_option = computed(()=>{
      let option = {
        // text从后端获取
        title:{
          text: data_tech_r2.value.title,
          // text: '地图',
          left: 'center',
          textStyle: {
            color: "#1FACED",
          },
        },
        // data从后端获取
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
          data: data_tech_r2.value.data
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
      return option
    })



    return {
      // getmid1,
      getdata,
      data_tech_topic,
      data_tech_l2,
      tech_l3_option,
      tech_m1_option,
      tech_m2_option,
      tech_r11_option,
      tech_r12_option,
      tech_r13_option,
      tech_r2_option
    }
})
export default usetechStore
