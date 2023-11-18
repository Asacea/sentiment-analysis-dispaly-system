import {ref,computed} from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import { socialAPI } from '../api/social';
const useSocialScreenStore=defineStore('social',()=>{
    const hotList=ref([])
    const l1_data=ref({});
    const wordCloud_data=ref({});
    const m2_data=ref({});
    const hotMap=ref({});
    const r1_data=ref({})
    const hotRT = ref([]);
    //和科技和学校和的时候，这两个参数合并
    // const screenId=ref(0)
    // const screenTitle=ref('')
    //--------------------------
    const l1_option=computed(()=>{
        let option= {
            grid: {
              width: "80%",
              right: "4%",
              height: "66%",
              top: "20%",
            },
            title: {
              text: l1_data.value.title,
              textStyle: {
                color: "#1FACED",
              },
              padding: [5, 100],
              boundaryGap: false,
            },
            yAxis: {
              type: "category",
              data: l1_data.value.value.map((i) => i.name),
              axisLabel: {
                fontSize: "10",
                interval: 0, // 让字体完全显示
              },
              axisTick: {
                show: false,
              },
            },
            xAxis: {
              type: "value",
            },
            series: [
              {
                data: l1_data.value.value.map((i) => i.data),
                type: "bar",
                backgroundColor: "rgba(0,0,0,0)",
              },
            ],
            backgroundColor: "rgba(0,0,0,0)",
          };
          return option
    });
    const l3_option=computed(()=>{
        let option={
            title: {
              text: wordCloud_data.value.title,
              textStyle: {
                color: "#1FACED",
              },
              padding: [5, 96],
              boundaryGap: false,
            },
            backgroundColor: "rgba(0,0,0,0)",
            series: [
              {
                type: "wordCloud",
                shape: "diamond",
                keepAspect: false,
                // maskImage: maskImage,
                left: "center",
                top: "13%",
                width: "100%",
                height: "85%",
                right: null,
                bottom: null,
                sizeRange: [12, 60],
                rotationRange: [-90, 90],
                rotationStep: 45,
                gridSize: 8,
                drawOutOfBound: false,
                layoutAnimation: true,
                textStyle: {
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: function () {
                    return (
                      "rgb(" +
                      [
                        Math.round(Math.random() * 255),
                        Math.round(Math.random() * 255),
                        Math.round(Math.random() * 255),
                      ].join(",") +
                      ")"
                    );
                  },
                },
                emphasis: {
                  // focus: 'se
                  textStyle: {
                    textShadowBlur: 1,
                    textShadowColor: "#1FACED",
                  },
                },
                //data属性中的value值却大，权重就却大，展示字体就却大
                data: wordCloud_data.value.value,
              },
            ],
          };
          return option;
    })
    const m1_option=computed(()=>{
        let option={
            backgroundColor: "rgba(0,0,0,0)",
            grid: {
              width: "80%",
              right: "4%",
              height: "50%",
              top: "20%",
              bottom: "10%",
            },
            series: [
              {
                type: "map",
                map: "china",
                layoutCenter: ["40%", "50%"], // 地图布局中心点
                layoutSize: 270,
                label: {
                  show: false,
                  color: "#ffffff",
                  fontSize: 10,
                },
                itemStyle: {
                //   areaColor: "#eee",
                  areaColor: "rgba(0,0,0,0)",
                  borderColor: "#24dafe",
                },
                roam: true,
                zoom: 1.2,
                emphasis: {
                  label: {
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: "bold",
                  },
                  itemStyle: {
                    areaColor: "none",
                    borderColor: "#77ebff",
                    borderWidth: 2,
                  },
                },
                data: hotMap.value.value,
              },
            ],
            visualMap: [
              {
                type: "piecewise",
                show: true,
                pieces: [
                  { min: 500, max: 1999 },
                  { min: 2000, max: 2999 },
                  { min: 3000, max: 3999 },
                  { min: 4000 },
                ],
                textStyle: {
                  color: "#828994",
                },
                itemWidth: 64, // 每个图元的宽度
                itemHeight: 12,
                top: "top",
                right: "0",
                inRange: {
                  borderRadius: 4,
                  // color: ["#84bbff", "#70b4ff", "#61a7ff", "#4d90f2"],
                  color: [
                    "red",
                    "orange",
                    "rgb(255, 196, 0)",
                    "yellow",
                    "lightgreen",
                  ].reverse(),
                },
              },
            ],
            tooltip: {
              trigger: "item", //数据项图形触发
              backgroundColor: "#fff",
              borderWidth: 0,
              //borderRadius:100,
              formatter: (params) => {
                if (params.value > 1) {
                  //console.log(params.value);
                  return `${params.name}<i class="iconfont icon-xiaopangchetubiao-copy" style="color:red;text-algin:center" </i><br/>话题量：${params.value}`;
                } else return `地区：${params.name}<br/>数据：${params.value}`;
              },
            },
            toolbox: {
              show: true,
              orient: "vertical",
              left: "right",
              bottom: "0",
            },
          };
        return option
    });
    const m2_option=computed(()=>{
        // console.log(m2_data)
       let option={
        title: {
          text: m2_data.value.title,
          textStyle: {
            color: "#1FACED",
          }
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
        legend: {
          data:m2_data.value.value.map((i)=>i.name),
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
            data: ["1月", "2月", "3月", "4月", "5月", "6月"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: function () {
          let serie = [];
          m2_data.value.value.map((item) => {
            let data = {
              name: item.name,
              type: "line",
              areaStyle: {
                opacity: 0.3,
              },
              data:item.data,
            };
            serie.push(data);
          });
          return serie;
        }(),//疯了！这个bug我找了20分钟！！！
        backgroundColor: "rgba(0,0,0,0)",
      }; 
    //   console.log(option)
      return option
    });
    const r1_option =computed(()=>{
        let option = {
            title: {
              text: r1_data.value.title,
              textStyle: {
                color: "#1FACED",
              },
              padding: [5, 100],
              boundaryGap: false,
            },
            grid: {
              width: "80%",
              right: "4%",
              height: "66%",
              top: "20%",
            },
            backgroundColor: "rgba(0,0,0,0)",
            xAxis: {
              type: "category",
              data: r1_data.value.value.map((i) => i.name),
              axisLabel: {fontSize: 10}
          
            },
            yAxis: {
              type: "value",
            },
            series: [
              {
                data: l1_data.value.value.map((i) => i.data),
                type: "bar",
              },
            ],
          };
        return option
    })
    const getSocialData= async (screenId)=>{
        console.log("getSocialData")
        const res= await socialAPI(screenId)
        console.log(res)
        hotList.value=res.hotList;
        l1_data.value=res.l1_data;
        wordCloud_data.value=res.wordCloud_data;
        m2_data.value=res.m2_data;
        hotMap.value=res.hotMap;
        r1_data.value=res.r1_data;
        hotRT.value=res.hotRT;
    }
    return {
        // screenId,screenTitle,
        l1_option,l3_option,m1_option,m2_option,r1_option,
        hotList,hotRT,hotMap,
        getSocialData
    }
})
export default useSocialScreenStore
