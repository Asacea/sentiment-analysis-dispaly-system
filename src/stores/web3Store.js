import {ref,computed} from 'vue'
import { defineStore } from 'pinia'
import { socialAPI } from '../api/social';//这里就不改了，反正最后都要合并
import axios from 'axios';
const useWeb3ScreenStore=defineStore('web3',()=>{
    const l1_chart_data=ref({})
    const l2_chart_data=ref({})
    const m_chart_data=ref()
    const keyUsers=ref([])
    const keyforward=ref([])
    const r3_chart_data=ref()

    const l1_option=computed(()=>{
        let option = {
            title: {
              text: l1_chart_data.value.title,
              textStyle: {
                color: "#1FACED",
              },
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross",
                label: {
                  backgroundColor: "#6a7985",
                },
              },
              formatter:(params)=>{
                for(let i of l1_chart_data.value.events){
                  if(i.month==params[0].axisValue){
                    return `<strong>事件：</strong>${i.detail}<br/><div style="color:#409eff"><strong>关注度：</strong>${params[0].data}</div><div style="color:#95d475"><strong>讨论度：</strong>${params[1].data}</div>`
                  }
                }
              return `<div style="color:#409eff"><strong>关注度：</strong>${params[0].data}</div><div style="color:#95d475"><strong>讨论度：</strong>${params[1].data}</div>`
              }
            },
            legend: {
              data: ["关注度", "讨论度"],
              right: "0",
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              height: "80%",
              containLabel: true,
            },
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                axisLabel: { fontSize: 10 },
                data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
              },
            ],
            yAxis: [
              {
                type: "value",
              },
            ],
            series: [
              {
                name: l1_chart_data.value.info[0].name,
                type: "line",
                areaStyle: {
                  opacity: 0.3,
                },
                data:l1_chart_data.value.info[0].data,
              },
              {
                name: l1_chart_data.value.info[1].name,
                type: "line",
                areaStyle: {
                  opacity: 0.3,
                },
                data: l1_chart_data.value.info[1].data,
              },
            ],
            backgroundColor: "rgba(0,0,0,0)",
          };
          return option
    });
    const l2_option=computed(()=>{
      function calculateAverage(data, dim) {
        if(!data) return 0  //真是奇了怪了 为什么只读的到一个？？？？？
        console.log("in calculateAverage:",data)
        let total = 0;
        for (var i = 0; i < data.length; i++) {
          total += data[i][dim];
        }
        return (total /= data.length);
      }
        const scatterOption = {
            backgroundColor: "rgba(0,0,0,0)",
            title: {
                  text: "用户对抗网络模型",
                  textStyle: {
                    color: "#1FACED",
                  },
                  padding: [5, 130],
                  boundaryGap: false,
                },
            grid: {
                      width: "88%",
                      right: "4%",
                      height: "78%",
                      top: "16%",
                    },
            xAxis: {
              scale: true,
            },
            yAxis: {
              scale: true,
            },
            series: [
              {
                type: "scatter",
                id: "female",
                dataGroupId: "female",
                universalTransition: {
                  enabled: true,
                  delay: function (idx, count) {
                    return Math.random() * 400;
                  },
                },
                data: l2_chart_data.value.data.femaleData,
              },
              {
                type: "scatter",
                id: "male",
                dataGroupId: "male",
                universalTransition: {
                  enabled: true,
                  delay: function (idx, count) {
                    return Math.random() * 400;
                  },
                },
                data: l2_chart_data.value.data.maleData,
              },
            ],
          };
        const barOption = {
        backgroundColor: "rgba(0,0,0,0)",
        title: {
                text: "用户对抗网络模型",
                textStyle: {
                color: "#1FACED",
                },
                padding: [5, 130],
                boundaryGap: false,
            },
        grid: {
                    width: "88%",
                    right: "4%",
                    height: "78%",
                    top: "16%",
                },
        xAxis: {
            type: "category",
            data: ["Female", "Male"],
        },
        yAxis: {},
        series: [
            {
            type: "bar",
            id: "total",
            data: [
                {
                value: calculateAverage(l2_chart_data.value.data.maleData, 0),
                groupId: "male",
                },
                {
                value: calculateAverage(l2_chart_data.value.data.femaleData, 0),
                groupId: "female",
                },
            ],
            universalTransition: {
                enabled: true,
                seriesKey: ["male", "female"],
                delay: function (idx, count) {
                return Math.random() * 300;
                },
            },
            colorBy:'data'
            },
        ],
        };
        return {scatterOption:scatterOption,barOption:barOption}
    })
    const m_option=computed(()=>{
        const option= {
            title: {
                  text: "用户对抗网络模型",
                  textStyle: {
                    color: "#1FACED",
                  },
                  padding: [0, 250],
                  boundaryGap: false,
                },
            legend: {
              data: m_chart_data.value.data.categories.map(i=>i.name),
              bottom:"0"
            },
            series: [
              {
                type: 'graph',
                layout: 'force',
                animation: false,
                label: {
                  position: 'right',
                  formatter: '{b}'
                },
                draggable: true,
                data: m_chart_data.value.data.nodes.map(function (node, idx) {
                  node.id = idx;
                  return node;
                }),
                categories: m_chart_data.value.data.categories,
                force: {
                  edgeLength: 5,
                  repulsion: 20,
                  gravity: 0.2
                },
                edges: m_chart_data.value.data.links
              }
            ],
            tooltip:{
              trigger:'item',
              formatter:(params)=>{
                if(params.dataType=='node'){
                // console.log(params)
                  let index=params.data.category
                let color=params.color
                let detail=m_chart_data.value.data.categories[index].detail
                return `<div style="color:${color}">${detail}</div>`
                }
              }
            }
          };
        return option
    })
    const r3_option=computed(()=>{
        const lineStyle = {
            width: 1,
            opacity: 0.5
          };
        const option={
            backgroundColor: 'rgba(0,0,0,0)',
            title: {
              text: r3_chart_data.value.title,
              left: '0',
              textStyle: {
                color: '#eee'
              }
            },
            legend: {
              bottom: 5,
              data: r3_chart_data.value.data.map(i=>i.source),
              itemGap: 100,
              textStyle: {
                color: '#fff',
                fontSize: 10
              },
              selectedMode: 'single',
              left:'center'
            },
            radar: {
              indicator: [
                { name: '学生', max: 300 },
                { name: '程序员', max: 250 },
                { name: '科研人员', max: 300 },
                { name: '投资人', max: 5 },
                { name: '其他', max: 200 },
                { name: '其他行业', max: 100 }
              ],
              shape: 'circle',
              splitNumber: 5,
              axisName: {
                color: 'rgb(238, 197, 102)'
              },
              splitLine: {
                lineStyle: {
                  color: [
                    'rgba(238, 197, 102, 0.1)',
                    'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)',
                    'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)',
                    'rgba(238, 197, 102, 1)'
                  ].reverse()
                }
              },
              splitArea: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(238, 197, 102, 0.5)'
                }
              }
            },
            series: [
              {
                name: r3_chart_data.value.data[0].source,
                type: 'radar',
                lineStyle: lineStyle,
                data: r3_chart_data.value.data[0].data,
                symbol: 'none',
                itemStyle: {
                  color: '#F9713C'
                },
                areaStyle: {
                  opacity: 0.1
                }
              },
              {
                name: r3_chart_data.value.data[1].source,
                type: 'radar',
                lineStyle: lineStyle,
                data:  r3_chart_data.value.data[1].data,
                symbol: 'none',
                itemStyle: {
                  color: '#B3E4A1'
                },
                areaStyle: {
                  opacity: 0.05
                }
              }
            ]
          };
        return option
    })
    const getWeb3Data= async (screenId)=>{
        console.log("getWeb3Data")
        const res= await socialAPI(screenId)
        console.log(res)
        l1_chart_data.value=res.l1_chart_data;
        l2_chart_data.value=res.l2_chart_data;
        m_chart_data.value=res.m_chart_data;
        keyforward.value=res.keyforward;
        keyUsers.value=res.keyUsers;
        keyforward.value=res.keyforward;
        r3_chart_data.value=res.r3_chart_data;
    }
    return {
        // screenId,screenTitle,
        l1_option,l2_option,m_option,r3_option,
        keyUsers,keyforward,
        getWeb3Data
    }
})
export default useWeb3ScreenStore
