import {computed, ref} from 'vue'
import {defineStore} from 'pinia'
import { schoolAPI} from '../api/school.js'
import { getTitleAPI } from '../api/alltitle.js'
const useschoolStore = defineStore('school',()=>{
    // 热门舆情数
    const data_opinion = ref([]);
    // 本校热词数据
    const data_school_l1 = ref({});
    // 校内情感数据
    const data_school_l21 = ref({})
    // 校外情感数据
    const data_school_l22 = ref({})
    // 校内外话题热度变化数据
    const data_school_m1 = ref({})
    // 情感走向
    const data_school_m22 = ref({})
    // 本校情感占比
    const data_school_r11 = ref({})
    // 关注度阶段比例
    const data_school_r12 = ref({})
    // 用户来源数据
    const data_school_r13 = ref({})
    // 男女占比
    const data_school_r14 = ref({})
    // 校外
    const data_school_r2 = ref({})

    // 各平台数据
    const getSchooldata = async(screenId)=>{
      const res = await schoolAPI(screenId)
      data_opinion.value = res.data.schoolm21Data

      data_school_l1.value.title = (await getTitleAPI('schooll1')).data
      data_school_l1.value.data = res.data.schooll1Data;

      data_school_l21.value.title = (await getTitleAPI('schooll21')).data
      data_school_l21.value.data = res.data.schooll21Data;

      data_school_l22.value.title = (await getTitleAPI('schooll22')).data
      data_school_l22.value.data = res.data.schooll22Data;

      data_school_m1.value.title = (await getTitleAPI('schoolm1')).data
      data_school_m1.value.data = res.data.schoolm1Data;

      data_school_m22.value.title = (await getTitleAPI('schoolm22')).data
      data_school_m22.value.data = res.data.schoolm22Data;

      data_school_r11.value.title = (await getTitleAPI('schoolr11')).data
      data_school_r11.value.data = res.data.schoolr11Data;

      data_school_r12.value.title = (await getTitleAPI('schoolr12')).data
      data_school_r12.value.data = res.data.schoolr12Data;

      data_school_r13.value.title = (await getTitleAPI('schoolr13')).data
      data_school_r13.value.data = res.data.schoolr13Data;

      data_school_r14.value.title = (await getTitleAPI('schoolr14')).data
      data_school_r14.value.data = res.data.schoolr14Data;

      data_school_r2.value.title = (await getTitleAPI('schoolr2')).data
      data_school_r2.value.data = res.data.schoolr2Data
    }
    // 配置
    // 本校热词配置
    const school_l1_option = computed(()=>{
      let option = {
        // text从后端获取
        title: {
          text: data_school_l1.value.title,
          left: 'center',
          textStyle: {
            color: "#1FACED",
          },
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        // data从后端获取
        series: [
          {
            type: 'graph',
            layout: 'none',
            // progressiveThreshold: 700,
            data: data_school_l1.value.data.map(function (node) {
              return {
                x: node.x,
                y: node.y,
                id: node.id,
                name: node.label,
                symbolSize: node.size,
                itemStyle: {
                  color: node.color
                }
              };
            }),
            emphasis: {
              focus: 'adjacency',
              label: {
                position: 'right',
                show: true
              }
            },
            roam: true,
            lineStyle: {
              width: 0.5,
              curveness: 0.3,
              opacity: 0.7
            }
          }
        ],
        backgroundColor: 'transparent'
      }
      return option;
    })

    // 校内情感
    const school_l21_option = computed(()=>{
      let option = {
        // text从后端获取
        title: {
            text: data_school_l21.value.title,
            left: 'center',
            textStyle: {
              color: "#1FACED",
            },
        },
        tooltip: {
            trigger: 'item'
        },
        // data从后端获取
        legend: {
            // orient: 'horizontal',
            top: 'bottom',
            data:data_school_l21.value.data.map(item=>item.name),
            itemGap: 6
        },
        // data从后端获取
        series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              label: {
                show: false
              },
              data: data_school_l21.value.data,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              
            }
        ],
       
        backgroundColor: 'transparent'
        
      };
      return option;
    })

    // 校外情感
    const school_l22_option = computed(()=>{
      let option = {
        // text从后端获取
        title: {
            text: data_school_l22.value.title,
            left: 'center',
            textStyle: {
              color: "#1FACED",
            },
        },
        tooltip: {
            trigger: 'item'
        },
        // data从后端获取
        legend: {
            // orient: 'horizontal',
            top: 'bottom',
            data:data_school_l22.value.data.map(item=>item.name),
            itemGap: 6
        },
        // data从后端获取
        series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              label: {
                show: false
              },
              itemStyle: {
                // 设置颜色
                color: function(params) {
                  // 自定义颜色，可以根据实际需求修改
                  var colorList = ['#FF6347', '#87CEEB', '#32CD32'];
                  return colorList[params.dataIndex];
                }
              },
              data: data_school_l22.value.data,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              // barWidth: '55%' // 调整柱子的宽度

              
            }
        ],
        grid: {
          top: 20, // 设置整个图表区域的上边距
          bottom: 20 // 设置整个图表区域的下边距
        },
        backgroundColor: 'transparent'
        
    };
      return option
    })

    // 校内外情感热度变化数据
    const school_m1_option = computed(()=>{
      let option = {
        title: {
          text: data_school_m1.value.title,
          left:'center',
          top:'10',
          textStyle: {
            color: "#1FACED",
          }
        },
        
        grid: {
          bottom: "10%",
          with: "80",
          height: "70%",  
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        legend: {
          top:'bottom',
          data:data_school_m1.value.data.map((i)=>i.name),
        },
        series: function () {
          let serie = [];
          data_school_m1.value.data.map((item) => {
            let data = {
              name: item.name,
              type: "line",
              data:item.data,
            };
            serie.push(data);
          });
          return serie;
        }(),

        backgroundColor: "rgba(0,0,0,0)",
      };
      return option;
    })

    // 情感走向
    const school_m22_option = computed(()=>{
      let option = {
        // text从后端获取
        title: {
          text: data_school_m22.value.title,
          left:'center',
          top:'15',
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
        },
        // data从后端获取
        legend: {
          data:data_school_m22.value.data.map((i)=>i.name),
          top:40
        },
        // data从后端获取
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: data_school_m22.value.data.map(i=>i.name),
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        
        // data从后端获取
        series: [
          {
            name:data_school_m22.value.data.name,
            // name:data_school_m22.value.data.map(i=>i.name),
            type:"line",
            areaStyle:{
              opacity:0.3
            },
            data:data_school_m22.value.data.map(i=>i.value)
          }
        ],
        grid: {
          bottom: "3%",
          with: "80",
          height: "70%", 
          containLabel: true,
        },
        backgroundColor: "rgba(0,0,0,0)",
      };
      return option;
    })


    // 校内外占比
    const school_r11_option = computed(()=>{
      let option = {
        // text从后端获取
        title: {
          text: data_school_r11.value.title,
          top: 'bottom',
          left: 'center',
          textStyle: {
            color: "white",
          },
        },
        tooltip: {
            trigger: 'item'
        },
        // data从后端获取
        legend: {
            // orient: 'horizontal',
            top: 'top',
            data:data_school_r11.value.data.map(i=>i.name),
            itemGap: 6
        },
        // data从后端获取
        series: [
            {
              name: data_school_r11.value.data.name,
              type: 'pie',
              radius: '50%',
              label: {
                show: false
              },
              itemStyle: {
                // 设置颜色
                color: function(params) {
                  // 自定义颜色，可以根据实际需求修改
                  var colorList = ['#FF6347', '#87CEEB', '#32CD32'];
                  return colorList[params.dataIndex];
                }
              },
              data: data_school_r11.value.data.value,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              
            }
        ],
        grid: {
          top: 20, // 设置整个图表区域的上边距
          bottom: 20 // 设置整个图表区域的下边距
        },
        backgroundColor: 'transparent'
      };
      return option
    })

    // 关注度阶段比例
    const school_r12_option = computed(()=>{
      let option = {
        // text从后端获取
        title: {
          text: data_school_r12.value.title,
          // subtext: 'Fake Data',
          top:'bottom',
          left: 'center',
          textStyle: {
            color: "white",
          },
        },
        // data从后端获取
        xAxis: {
          type: 'category',
          data: data_school_r12.value.data.map(i=>i.name),
          axisLabel: {fontSize: 10}
        },
        yAxis: {
          type: 'value',
          axisLabel: {fontSize: 9},
          // boundaryGap:[0,'-40%']
        },
        // data从后端获取
        series: [
          {
            data: data_school_r12.value.data.map(i=>i.data),
            type: 'bar',
            barWidth: '55%' // 调整柱子的宽度
          }
        ],
        grid:{
          height:90,
          top:20,
          bottom:5,
        },
        backgroundColor: 'transparent'
      };
      return option;
    })

    // 用户来源
    const school_r13_option = computed(()=>{
      let option = {
        // text从后端获取
        title: {
          text: data_school_r13.value.title,
          top: 'bottom',
          left:'center',
          textStyle: {
            color: "white",
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: 50,
          bottom: 30,
          right: 20
        },
        xAxis: {
          type: 'value',
          position: 'top',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        // data从后端获取
        yAxis: {
          type: 'category',
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: data_school_r13.value.data.map(i=>i.name)
        },
        // data从后端获取
        series: [
          {
            name: 'Cost',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              formatter: '{b}'
            },
            data: data_school_r13.value.data.map(i=>i.data)
          }
        ],
        backgroundColor: 'transparent'

      };
      return option;
    })

    // 男女占比
    const school_r14_option = computed(()=>{
      let option = {
        // text从后端获取
        title: {
          text: data_school_r14.value.title,
          top: 'bottom',
          left:'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        // data从后端获取
        series: [
          {
            name: data_school_r14.value.name,
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
            data: data_school_r14.value.value
          }
        ],
        backgroundColor: 'transparent'
      };
      return option;
    })


    // 校内外用户画像
    const school_r2_option = computed(()=>{
      let option = {
        // text从后端获取
        title: {
          text:data_school_r2.value.title,
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
          left: 'right'
        },
        // data从后端获取
        series: [
          {
            // name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: data_school_r2.value.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        grid: {
          top: 20, // 设置整个图表区域的上边距
          bottom: 20 // 设置整个图表区域的下边距
        },
        backgroundColor: 'transparent'
      };
      return option;
    })

    return {
      getSchooldata,
      data_opinion,
      school_l1_option,
      school_l21_option,
      school_l22_option,
      school_m1_option,
      school_m22_option,
      school_r11_option,
      school_r12_option,
      school_r13_option,
      school_r14_option,
      school_r2_option
    }
})
export default useschoolStore
