import {computed, ref} from 'vue'
import {defineStore} from 'pinia'
import { getdisplaydataAPI } from '../api/datadisplay'
import * as echarts from 'echarts';

export const usedisplayStore = defineStore('displaydata',()=>{
  const data1 = ref({})
  const data2 = ref({})
  const data3 = ref({})
  const data4 = ref({})
  const data5 = ref({})

  const res = ref({})


  // 获取所有数据
  const getdata = async()=>{
    res.value = await getdisplaydataAPI();
    data1.value = res.value.data1;
    data2.value = res.value.data2;
    data3.value = res.value.data3;
    data4.value = res.value.data4;
    data5.value = res.value.data5;
  }

  const option1 = computed(()=>{
    let option = {
      color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
      title: {
        text: data1.value.title,
        left:23,
        top:5
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        top:5,
        data: data1.value.value.map(i=>i.name)
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: (data1.value.value)[0].name,
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgb(1, 191, 236)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: (data1.value.value)[0].data
        },
        {
          name: (data1.value.value)[1].name,
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(0, 221, 255)'
              },
              {
                offset: 1,
                color: 'rgb(77, 119, 255)'
              }
            ])
          },
        emphasis: {
          focus: 'series'
        },
        data: (data1.value.value)[1].data
        },
        {
          name: (data1.value.value)[2].name,
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(55, 162, 255)'
              },
              {
                offset: 1,
                color: 'rgb(116, 21, 219)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: (data1.value.value)[2].data
        },
        {
          name: (data1.value.value)[3].name,
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 0, 135)'
              },
              {
                offset: 1,
                color: 'rgb(135, 0, 157)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: (data1.value.value)[3].data
        },
        {
          name: (data1.value.value)[4].name,
          type: 'line',
          stack: 'Total',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(255, 191, 0)'
              },
              {
                offset: 1,
                color: 'rgb(224, 62, 76)'
              }
            ])
          },
          emphasis: {
            focus: 'series'
          },
          data: (data1.value.value)[4].data
      }
      ],
    backgroundColor: 'transparent'
    };
    return option;
  })

  const option2 = computed(()=>{
    let opt1=generateOption((data3.value.value)[0].name,(data3.value.value)[0].value);
    let opt2=generateOption((data3.value.value)[1].name,(data3.value.value)[1].value);
    let opt3=generateOption((data3.value.value)[2].name,(data3.value.value)[2].value);
    let opt4=generateOption((data3.value.value)[3].name,(data3.value.value)[3].value);
    return [opt1,opt2,opt3,opt4];
  })

  const generateOption = (name,value)=>{
    let option = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          name: 'Pressure',
          type: 'gauge',
          radius: '99%',
          progress: {
            show: true
          },
          axisTick: {
            axisLabel: {
              fontSize: 6
            }
          },
          pointer: {
            length: '40%' // 设置指针长度，这里调整为仪表盘半径的一半
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}',
            offsetCenter: [0, '60%'], // 设置位置偏移
            textStyle: {
              fontSize: 18,
            }
          },
          data: [
            {
              name:name,
              value: value,
              title: {
                offsetCenter: [0, '100%'], // 设置位置偏移
                textStyle: {
                  fontSize: 16 // 设置“SCORE”文字大小
                }
              }      
            }
          ]
        }
      ],
      backgroundColor: 'transparent'
    };
    return option;
  }

  const option3 = computed(()=>{
    let option = {
      title: {
        text: '各平台热度',
        top: 10,
        left: 90
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        type: 'scroll',
        bottom: 20,
        data: (function () {
          var list = [];
          for (var i = 1; i <= 12; i++) {
            list.push(i  + '');
          }
          return list;
        })()
      },
      visualMap: {
        top: 'middle',
        right: 0,
        color: ['red', 'yellow'],
        calculable: true,
        align:"left", 
        max:50,
        min:0 
      },
      radar: {
        radius: '58%', // 设置雷达图的大小
        center: ['40%', '50%'], // 调整雷达图的中心位置
        indicator: data4.value.indicator
      },
      series: (function () {
        var series = [];
        for (var i = 1; i <= 12; i++) {
          series.push({
            type: 'radar',
            symbol: 'none',
            lineStyle: {
              width: 1
            },
            emphasis: {
              areaStyle: {
                color: 'rgba(0,250,0,0.3)'
              }
            },
            data: [
              {
                value: [
                  (40 - i) * 5,
                  (38 - i) * 2 + 30,
                  i * 2.5 + 5,
                  i * 4.5,
                  (i * i) / 4
                ],
                name: i + ''
              }
            ]
          });
        }
      return series;
      })(),
      backgroundColor: 'transparent'  
    };

    return option;
  })

  

  return {option1,data2,option2,option3,data5,getdata}
})