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
                v-for="i in hotList.sort((a, b) => a.rank - b.rank)"
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
          title="考研缩招话题热度分布地图"
          :title-width="400"
          :animate="false"
        >
          <div class="inner" id="chart-m-1" style="color: white">
            这玩意也再找找
          </div>
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
              v-for="i in hotRT.sort((a, b) => a.rank - b.rank)"
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
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { ref, onMounted, reactive } from "vue";
import * as echarts from "echarts";
import "echarts-wordcloud";
import "echarts/map/js/china.js";
const color_gradient = {
  1: "red",
  2: "orange",
  3: "rgb(255, 196, 0)",
  4: "yellow",
  5: "lightgreen",
};
const route = useRoute();
const screenId = ref(0);
onBeforeRouteUpdate(() => {
  screenId.value = route.params.id;
  console.log(screenId.value);
  //screenId用来传数据
});
/*---start------------------------------------一些需要请求的数据---------------------------------------*/
const hotList = ref([
  { name: "知乎", rank: 2 },
  { name: "微博", rank: 1 },
  { name: "bilibili", rank: 3 },
  { name: "贴吧", rank: 4 },
  { name: "清水河畔", rank: 5 },
]);
const l1_data = {
  title: "考研学校热度排行榜",
  value: [
    { name: "武汉大学", data: 120 },
    { name: "北京大学", data: 200 },
    { name: "清华大学", data: 150 },
    { name: "上海交大", data: 80 },
    { name: "复旦大学", data: 70 },
    { name: "人民大学", data: 40 },
    { name: "哈工大", data: 20 },
  ],
};
const m2_data = {
  title: "考研缩招关键词变化趋势",
  value: [
    { name: "考研", data: [100, 140, 230, 100, 120, 146] },
    { name: "考研缩招", data: [150, 100, 200, 140, 100, 87] },
    { name: "反向考研", data: [190, 212, 181, 202, 218, 197] },
  ],
};
const r1_data = {
  title: "本校考研缩招热门词条",
  value: [
    { name: "电子科大", data: 100 },
    { name: "考研缩招", data: 140 },
    { name: "考研", data: 230 },
    { name: "录取人数", data: 100 },
    { name: "学习", data: 130 },
  ],
};
const l3_data={
  title:"考研缩招话题词云",
  value:[
        { name: "考研", value: 999 },
        { name: "考研缩招", value: 476 },
        { name: "国家线", value: 406 },
        { name: "高考化", value: 376 },
        { name: "反向考研", value: 326 },
        { name: "报名人数", value: 570 },
        { name: "专硕热", value: 221 },
        { name: "卷", value: 299 },
        { name: "研究生", value: 142 },
        { name: "报名", value: 106 },
        { name: "上岸", value: 56 },
        { name: "计算机", value: 23 },
        { name: "肖秀荣", value: 52 },
        { name: "公务员", value: 14 },
        { name: "留学", value: 43 },
        { name: "保研", value: 114 },
        { name: "工作", value: 88 },
        { name: "英语", value: 314 },
        { name: "专硕", value: 214 },
        { name: "学硕", value: 414 },
        { name: "华五", value: 324 },
        { name: "985", value: 374 },
        { name: "复试", value: 374 },
        { name: "调剂", value: 274 },
        { name: "吗喽", value: 16 },
        { name: "吗喽", value: 16 },
        { name: "吗喽", value: 26 },
        { name: "吗喽", value: 11 },
        { name: "吗喽", value: 87 },
        { name: "吗喽", value: 27 },
        { name: "吗喽", value: 65 },
        { name: "吗喽", value: 87 },
        { name: "吗喽", value: 87 },
        { name: "吗喽", value: 17 },
      ]
};
const m1_data={
  title:"考研缩招话题热度分布地图",
  value:[
  { name: "北京", value: 1254 },
  { name: "天津", value: 1 },
  { name: "上海", value: 4390 },
  { name: "重庆", value: 1 },
  { name: "河北", value: 1 },
  { name: "河南", value: 1 },
  { name: "云南", value: 1 },
  { name: "辽宁", value: 1 },
  { name: "黑龙江", value: 1 },
  { name: "湖南", value: 1 },
  { name: "安徽", value: 1 },
  { name: "山东", value: 2450 },
  { name: "新疆", value: 1150 },
  { name: "江苏", value: 1 },
  { name: "浙江", value: 1 },
  { name: "江西", value: 1 },
  { name: "湖北", value: 1 },
  { name: "广西", value: 1 },
  { name: "甘肃", value: 1 },
  { name: "山西", value: 1 },
  { name: "内蒙古", value: 1 },
  { name: "陕西", value: 1 },
  { name: "吉林", value: 1 },
  { name: "福建", value: 1 },
  { name: "贵州", value: 1 },
  { name: "广东", value: 3990 },
  { name: "青海", value: 1 },
  { name: "西藏", value: 1 },
  { name: "四川", value: 3990 },
  { name: "宁夏", value: 1 },
  { name: "海南", value: 1 },
  { name: "台湾", value: 1 },
  { name: "香港", value: 1 },
  { name: "澳门", value: 1 },
]
}
const hotRT = [
  {
    text: "告诉大家一个不太幸运等消息，由于不可抗力原因校区被迫改建，今年部分专业可能会缩招。",
    path: "新浪微博7-15 11:03来自华东政达大学超话",
    rank: 1,
  },
  {
    text: "告诉大家一个不太幸运等消息，由于不可抗力原因校区被迫改建，今年部分专业可能会缩招。",
    path: "新浪微博7-1622:34转发自iPhone 12",
    rank: 2,
  },
  {
    text: "最近很多学校内部都发布了今年考研的政策改革，包括换书，扩招，缩招等，二战被迫换学校真难受",
    path: "新浪微博8-31 12:49来自Redmi 9A",
    rank: 3,
  },
  {
    text: "最近很多学校内部都发布了今年考研的政策改革，包括换书，扩招，缩招等，二战被迫换学校真难受",
    path: "新浪微博9-0116:41转发自OPPO",
    rank: 4,
  },
  {
    text: "其实缩招才是趋势，考研不能向高考看，培养一位合格的研究生成本太高了",
    path: "Bilibili 3-5",
    rank: 5,
  },
  {
    text: "其实缩招才是趋势，考研不能向高考看，培养一位合格的研究生成本太高了",
    path: "Bilibili 3-7转发自iPhone 14",
    rank: 6,
  },
];
/*---end------------------------------------一些需要请求的数据---------------------------------------*/

const l1_option = {
  grid: {
    width: "80%",
    right: "4%",
    height: "66%",
    top: "20%",
  },
  title: {
    text: l1_data.title,
    textStyle: {
      color: "#1FACED",
    },
    padding: [5, 100],
    boundaryGap: false,
  },
  yAxis: {
    type: "category",
    data: l1_data.value.map((i) => i.name),
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
      data: l1_data.value.map((i) => i.data),
      type: "bar",
      backgroundColor: "rgba(0,0,0,0)",
    },
  ],
  backgroundColor: "rgba(0,0,0,0)",
};
const m2_option = {
  title: {
    text: "考研缩招关键词变化趋势",
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
  legend: {
    data:m2_data.value.map((i)=>i.name),
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
    m2_data.value.map((item) => {
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
const r1_option = {
  title: {
    text: r1_data.title,
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
    data: r1_data.value.map((i) => i.name),
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: l1_data.value.map((i) => i.data),
      type: "bar",
    },
  ],
};
const l3_option = {
  title: {
    text: l3_data.title,
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
      data: l3_data.value,
    },
  ],
};
const m1_option = {
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
        // areaColor: "#eee",
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
      data: m1_data.value,
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
    // feature: {
    //   restore: {},
    //   saveAsImage: {},
    // },
  },
};
function createChart(eleID, option) {
  var ele = document.getElementById(eleID);
  var chart = echarts.init(ele, "dark");
  option && chart.setOption(option);
}
onMounted(() => {
  createChart("chart-l-1", l1_option);
  createChart("chart-m-2", m2_option);
  createChart("chart-r-1", r1_option);
  createChart("chart-l-3", l3_option);
  createChart("chart-m-1", m1_option);
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
a .outer {
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
