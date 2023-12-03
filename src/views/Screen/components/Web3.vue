<template>
  <div class="container">
    <!-- 3 4 2 -->
    <div class="left">
      <div class="left-1 outer">
        <dv-border-box8 :dur="5">
          <div id="l1-chart"></div>
        </dv-border-box8>
      </div>
      <div class="left-2 outer">
        <dv-border-box12>
          <div id="l2-chart"></div>
        </dv-border-box12>
      </div>
    </div>
    <div class="mid outer">
      <dv-border-box10>
        <div id="m-chart"></div>
      </dv-border-box10>
    </div>
    <div class="right">
      <div class="right-1 outer">
        <dv-border-box7>
            <div class="rtitle">关键用户详情</div>
            <div class="rcontent">
                <div class="inRight1"
                v-for="(item,index) in keyUsers" :key="item.id"
                :style="{backgroundColor:index%2==1? '':'rgba(255,255,255,0.15)'}"
                >
                    <div class="accountInfo">
                        <div class="A_icon">
                            <i class="iconfont icon-mianxing-yonghutouxiang"></i>
                        </div>
                        <div class="A_publisher">{{item.publisher}}</div>
                        <div class="A_fans">粉丝{{item.fans}}</div>
                        <div class="A_follows">关注{{item.follows}}</div>
                    </div>
                    <div class="accountlastday">{{item.text}}</div>
                </div>
            </div>
        </dv-border-box7>
      </div>
      <div class="right-2 outer">
        <dv-border-box7>
            <div class="rtitle">关键转发信息</div>
            <div class="rcontent">
                <div class="inRight2"
                v-for="(item,index) in keyforward" :key="item.id"
                :style="{backgroundColor:index%2==1? '':'rgba(255,255,255,0.15)'}"
                >
                    <div class="infoSources">
                        <i class="iconfont icon-youjian"></i>
                        <div class="account">{{item.account}}</div>
                        <div class="time">{{item.time}}</div>
                        <div class="source">{{item.sources}}</div>
                    </div>
                    <div class="infobody">{{item.text}}</div>
                    <div class="infoData">
                        <div class="likes">点赞 {{item.likes}}</div>
                        <div class="reply">回复 {{item.reply}}</div>
                        <div class="forward">转发 {{item.forwards}}</div>
                    </div>
                </div>
            </div>
        </dv-border-box7>
      </div>
      <div class="right-3 outer">
        <dv-border-box8 :dur="5">
            <div id="r-chart"></div>
        </dv-border-box8>
      </div>
    </div>
  </div>
</template>
<script setup>
import * as echarts from "echarts";
import { onMounted ,ref} from "vue";
function initchart1() {
  var chartDom = document.getElementById("l1-chart");
  // console.log(chartDom)
  var myChart = echarts.init(chartDom, "dark");
  var option;

  option = {
    title: {
      text: "关键推手发现",
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
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "关注度",
        type: "line",
        areaStyle: {
          opacity: 0.3,
        },
        data: [100, 130, 235, 150, 110, 80, 143, 120, 140, 100, 130, 90],
      },
      {
        name: "讨论度",
        type: "line",
        areaStyle: {
          opacity: 0.3,
        },
        data: [50, 100, 200, 140, 80, 60, 143, 170, 160, 70, 192, 70],
      },
    ],
    backgroundColor: "rgba(0,0,0,0)",
  };

  option && myChart.setOption(option);
}
function initchart2() {
  var chartDom = document.getElementById("l2-chart");
  var myChart = echarts.init(chartDom, "dark");
  var option;

  // prettier-ignore
  const femaleData = [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
    [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
    [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
    [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
    [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
    [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
    [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
    [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
    [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
    [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
    [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
    [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
    [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
    [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
    [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
    [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
    [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
    [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
    [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
    [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
    [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
    [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
    [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
    [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
    [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
    [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
    [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
    [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
    [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
    [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
    [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
    [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
    [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
    [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
    [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
    [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
    [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
    [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
    [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
    [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
    [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
    [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
    [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
    [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
    [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
    [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
    [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
    [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
    [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
    [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
    [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
    [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
];
  // prettier-ignore
  const maleDeta = [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
    [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
    [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
    [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
    [176.0, 78.8], [180.5, 77.8], [176.0, 86.4], [173.5, 81.8],
    [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
    [183.5, 74.8], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
    [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
    [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
    [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
    [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
    [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
    [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
    [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
    [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
    [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
    [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
    [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
    [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
    [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
    [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
    [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
    [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
    [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
    [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
    [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
    [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
    [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
    [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
    [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
    [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
    [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
    [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
    [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
    [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
    [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
    [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
    [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
    [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
    [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
    [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
    [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [180.3, 88.6],
    [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
    [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
    [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
    [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
    [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
    [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
    [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
    [180.3, 83.2], [180.3, 83.2]
];
  function calculateAverage(data, dim) {
    let total = 0;
    for (var i = 0; i < data.length; i++) {
      total += data[i][dim];
    }
    return (total /= data.length);
  }
  const scatterOption = (option = {
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
        data: femaleData,
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
        data: maleDeta,
      },
    ],
  });
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
            value: calculateAverage(maleDeta, 0),
            groupId: "male",
          },
          {
            value: calculateAverage(femaleData, 0),
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
  let currentOption = scatterOption;
  setInterval(function () {
    currentOption = currentOption === scatterOption ? barOption : scatterOption;
    myChart.setOption(currentOption, true);
  }, 3000);

  option && myChart.setOption(option);
}
function initchart3(){
    var m_data={
    type: "force",
    categories: [
        {
            name: "HTMLElement",
            keyword: {},
            base: "HTMLElement"
        },
        {
            name: "WebGL",
            keyword: {},
            base: "WebGLRenderingContext"
        },
        {
            name: "SVG",
            keyword: {},
            base: "SVGElement"
        },
        {
            name: "CSS",
            keyword: {},
            base: "CSSRule"
        },
        {
            name: "Other",
            keyword: {}
        }
    ],
    nodes: [
        {
            name: "AnalyserNode",
            value: 1,
            category: 4
        },
        {
            name: "AudioNode",
            value: 1,
            category: 4
        },
        {
            name: "Uint8Array",
            value: 1,
            category: 4
        },
        {
            name: "Float32Array",
            value: 1,
            category: 4
        },
        {
            name: "ArrayBuffer",
            value: 1,
            category: 4
        },
        {
            name: "ArrayBufferView",
            value: 1,
            category: 4
        },
        {
            name: "Attr",
            value: 1,
            category: 4
        },
        {
            name: "Node",
            value: 1,
            category: 4
        },
        {
            name: "Element",
            value: 1,
            category: 4
        },
        {
            name: "AudioBuffer",
            value: 1,
            category: 4
        },
        {
            name: "AudioBufferCallback",
            value: 1,
            category: 4
        },
        {
            name: "AudioBufferSourceNode",
            value: 1,
            category: 4
        },
        {
            name: "AudioSourceNode",
            value: 1,
            category: 4
        },
        {
            name: "AudioGain",
            value: 1,
            category: 4
        },
        {
            name: "AudioParam",
            value: 1,
            category: 4
        },
        {
            name: "AudioContext",
            value: 1,
            category: 4
        },
        {
            name: "AudioDestinationNode",
            value: 1,
            category: 4
        },
        {
            name: "AudioListener",
            value: 1,
            category: 4
        },
        {
            name: "BiquadFilterNode",
            value: 1,
            category: 4
        },
        {
            name: "ChannelMergerNode",
            value: 1,
            category: 4
        },
        {
            name: "ChannelSplitterNode",
            value: 1,
            category: 4
        },
        {
            name: "ConvolverNode",
            value: 1,
            category: 4
        },
        {
            name: "DelayNode",
            value: 1,
            category: 4
        },
        {
            name: "DynamicsCompressorNode",
            value: 1,
            category: 4
        },
        {
            name: "GainNode",
            value: 1,
            category: 4
        },
        {
            name: "MediaElementAudioSourceNode",
            value: 1,
            category: 4
        },
        {
            name: "MediaStreamAudioDestinationNode",
            value: 1,
            category: 4
        },
        {
            name: "MediaStreamAudioSourceNode",
            value: 1,
            category: 4
        },
        {
            name: "OscillatorNode",
            value: 1,
            category: 4
        },
        {
            name: "PannerNode",
            value: 1,
            category: 4
        },
        {
            name: "ScriptProcessorNode",
            value: 1,
            category: 4
        },
        {
            name: "WaveShaperNode",
            value: 1,
            category: 4
        },
        {
            name: "WaveTable",
            value: 1,
            category: 4
        },
        {
            name: "CanvasRenderingContext",
            value: 1,
            category: 4
        },
        {
            name: "HTMLCanvasElement",
            value: 1,
            category: 0
        },
        {
            name: "CanvasRenderingContext2D",
            value: 1,
            category: 4
        },
        {
            name: "ImageData",
            value: 1,
            category: 4
        },
        {
            name: "CanvasGradient",
            value: 1,
            category: 4
        },
        {
            name: "CanvasPattern",
            value: 1,
            category: 4
        },
        {
            name: "HTMLImageElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLVideoElement",
            value: 1,
            category: 0
        },
        {
            name: "TextMetrics",
            value: 1,
            category: 4
        },
        {
            name: "CDATASection",
            value: 1,
            category: 4
        },
        {
            name: "Text",
            value: 1,
            category: 4
        },
        {
            name: "CharacterData",
            value: 1,
            category: 4
        },
        {
            name: "ClientRectList",
            value: 1,
            category: 4
        },
        {
            name: "ClientRect",
            value: 1,
            category: 4
        },
        {
            name: "Clipboard",
            value: 1,
            category: 4
        },
        {
            name: "FileList",
            value: 1,
            category: 4
        },
        {
            name: "DataTransferItemList",
            value: 1,
            category: 4
        },
        {
            name: "Comment",
            value: 1,
            category: 4
        },
        {
            name: "Console",
            value: 1,
            category: 4
        },
        {
            name: "MemoryInfo",
            value: 1,
            category: 4
        },
        {
            name: "Crypto",
            value: 1,
            category: 4
        },
        {
            name: "CSSCharsetRule",
            value: 1,
            category: 3
        },
        {
            name: "CSSRule",
            value: 3,
            category: 3
        },
        {
            name: "CSSFontFaceRule",
            value: 1,
            category: 3
        },
        {
            name: "CSSStyleDeclaration",
            value: 1,
            category: 3
        },
        {
            name: "CSSImportRule",
            value: 1,
            category: 3
        },
        {
            name: "MediaList",
            value: 1,
            category: 4
        },
        {
            name: "CSSStyleSheet",
            value: 1,
            category: 3
        },
        {
            name: "CSSMediaRule",
            value: 1,
            category: 3
        },
        {
            name: "CSSRuleList",
            value: 1,
            category: 3
        },
        {
            name: "CSSPageRule",
            value: 1,
            category: 3
        },
        {
            name: "CSSPrimitiveValue",
            value: 1,
            category: 3
        },
        {
            name: "CSSValue",
            value: 1,
            category: 3
        },
        {
            name: "Counter",
            value: 1,
            category: 4
        },
        {
            name: "RGBColor",
            value: 1,
            category: 4
        },
        {
            name: "Rect",
            value: 1,
            category: 4
        },
        {
            name: "CSSStyleRule",
            value: 1,
            category: 3
        },
        {
            name: "StyleSheet",
            value: 1,
            category: 4
        },
        {
            name: "CSSUnknownRule",
            value: 1,
            category: 3
        },
        {
            name: "CSSValueList",
            value: 1,
            category: 3
        },
        {
            name: "Database",
            value: 1,
            category: 4
        },
        {
            name: "SQLTransactionCallback",
            value: 1,
            category: 4
        },
        {
            name: "DatabaseCallback",
            value: 1,
            category: 4
        },
        {
            name: "DatabaseSync",
            value: 1,
            category: 4
        },
        {
            name: "SQLTransactionSyncCallback",
            value: 1,
            category: 4
        },
        {
            name: "DataTransferItem",
            value: 1,
            category: 4
        },
        {
            name: "StringCallback",
            value: 1,
            category: 4
        },
        {
            name: "Entry",
            value: 1,
            category: 4
        },
        {
            name: "File",
            value: 1,
            category: 4
        },
        {
            name: "DataView",
            value: 1,
            category: 4
        },
        {
            name: "DedicatedWorkerContext",
            value: 1,
            category: 4
        },
        {
            name: "WorkerContext",
            value: 1,
            category: 4
        },
        {
            name: "DirectoryEntry",
            value: 1,
            category: 4
        },
        {
            name: "DirectoryReader",
            value: 1,
            category: 4
        },
        {
            name: "VoidCallback",
            value: 1,
            category: 4
        },
        {
            name: "DirectoryEntrySync",
            value: 1,
            category: 4
        },
        {
            name: "EntrySync",
            value: 1,
            category: 4
        },
        {
            name: "DirectoryReaderSync",
            value: 1,
            category: 4
        },
        {
            name: "FileEntrySync",
            value: 1,
            category: 4
        },
        {
            name: "EntriesCallback",
            value: 1,
            category: 4
        },
        {
            name: "EntryArraySync",
            value: 1,
            category: 4
        },
        {
            name: "DocumentFragment",
            value: 1,
            category: 4
        },
        {
            name: "NodeList",
            value: 1,
            category: 4
        },
        {
            name: "DocumentType",
            value: 1,
            category: 4
        },
        {
            name: "NamedNodeMap",
            value: 1,
            category: 4
        },
        {
            name: "DOMFileSystem",
            value: 1,
            category: 4
        },
        {
            name: "DOMFileSystemSync",
            value: 1,
            category: 4
        },
        {
            name: "DOMImplementation",
            value: 1,
            category: 4
        },
        {
            name: "HTMLDocument",
            value: 1,
            category: 0
        },
        {
            name: "DOMMimeType",
            value: 1,
            category: 4
        },
        {
            name: "DOMPlugin",
            value: 1,
            category: 4
        },
        {
            name: "DOMMimeTypeArray",
            value: 1,
            category: 4
        },
        {
            name: "DOMPluginArray",
            value: 1,
            category: 4
        },
        {
            name: "DOMSelection",
            value: 1,
            category: 4
        },
        {
            name: "Range",
            value: 1,
            category: 4
        },
        {
            name: "DOMSettableTokenList",
            value: 1,
            category: 4
        },
        {
            name: "DOMTokenList",
            value: 1,
            category: 4
        },
        {
            name: "DOMStringMap",
            value: 1,
            category: 4
        },
        {
            name: "ShadowRoot",
            value: 1,
            category: 4
        },
        {
            name: "Entity",
            value: 1,
            category: 4
        },
        {
            name: "EntityReference",
            value: 1,
            category: 4
        },
        {
            name: "EntryArray",
            value: 1,
            category: 4
        },
        {
            name: "MetadataCallback",
            value: 1,
            category: 4
        },
        {
            name: "EntryCallback",
            value: 1,
            category: 4
        },
        {
            name: "Metadata",
            value: 1,
            category: 4
        },
        {
            name: "ErrorCallback",
            value: 1,
            category: 4
        },
        {
            name: "FileError",
            value: 1,
            category: 4
        },
        {
            name: "FileCallback",
            value: 1,
            category: 4
        },
        {
            name: "FileEntry",
            value: 1,
            category: 4
        },
        {
            name: "FileWriterCallback",
            value: 1,
            category: 4
        },
        {
            name: "FileWriterSync",
            value: 1,
            category: 4
        },
        {
            name: "FileReader",
            value: 1,
            category: 4
        },
        {
            name: "FileReaderSync",
            value: 1,
            category: 4
        },
        {
            name: "FileSystemCallback",
            value: 1,
            category: 4
        },
        {
            name: "FileWriter",
            value: 1,
            category: 4
        },
        {
            name: "Float64Array",
            value: 1,
            category: 4
        },
        {
            name: "GamepadList",
            value: 1,
            category: 4
        },
        {
            name: "Gamepad",
            value: 1,
            category: 4
        },
        {
            name: "Geolocation",
            value: 1,
            category: 4
        },
        {
            name: "PositionCallback",
            value: 1,
            category: 4
        },
        {
            name: "Geoposition",
            value: 1,
            category: 4
        },
        {
            name: "Coordinates",
            value: 1,
            category: 4
        },
        {
            name: "HTMLAllCollection",
            value: 1,
            category: 0
        },
        {
            name: "HTMLAnchorElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLElement",
            value: 3,
            category: 0
        },
        {
            name: "HTMLAppletElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLAreaElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLAudioElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLMediaElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLBaseElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLBaseFontElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLBodyElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLBRElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLButtonElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLFormElement",
            value: 1,
            category: 0
        },
        {
            name: "ValidityState",
            value: 1,
            category: 4
        },
        {
            name: "HTMLCollection",
            value: 1,
            category: 0
        },
        {
            name: "HTMLContentElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLDataListElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLDetailsElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLDirectoryElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLDivElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLDListElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLEmbedElement",
            value: 1,
            category: 0
        },
        {
            name: "SVGDocument",
            value: 1,
            category: 2
        },
        {
            name: "HTMLFieldSetElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLFontElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLFormControlsCollection",
            value: 1,
            category: 0
        },
        {
            name: "HTMLFrameElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLFrameSetElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLHeadElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLHeadingElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLHRElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLHtmlElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLIFrameElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLInputElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLKeygenElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLLabelElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLLegendElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLLIElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLLinkElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLMapElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLMarqueeElement",
            value: 1,
            category: 0
        },
        {
            name: "TimeRanges",
            value: 1,
            category: 4
        },
        {
            name: "MediaController",
            value: 1,
            category: 4
        },
        {
            name: "MediaError",
            value: 1,
            category: 4
        },
        {
            name: "TextTrackList",
            value: 1,
            category: 4
        },
        {
            name: "TextTrack",
            value: 1,
            category: 4
        },
        {
            name: "HTMLMenuElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLMetaElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLMeterElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLModElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLObjectElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLOListElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLOptGroupElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLOptionElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLOptionsCollection",
            value: 1,
            category: 0
        },
        {
            name: "HTMLOutputElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLParagraphElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLParamElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLPreElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLProgressElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLQuoteElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLScriptElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLSelectElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLShadowElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLSourceElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLSpanElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLStyleElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLTableCaptionElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLTableCellElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLTableColElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLTableElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLTableSectionElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLTableRowElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLTextAreaElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLTitleElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLTrackElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLUListElement",
            value: 1,
            category: 0
        },
        {
            name: "HTMLUnknownElement",
            value: 1,
            category: 0
        },
        {
            name: "IDBCursor",
            value: 1,
            category: 4
        },
        {
            name: "IDBAny",
            value: 1,
            category: 4
        },
        {
            name: "IDBKey",
            value: 1,
            category: 4
        },
        {
            name: "IDBRequest",
            value: 1,
            category: 4
        },
        {
            name: "IDBCursorWithValue",
            value: 1,
            category: 4
        },
        {
            name: "IDBDatabase",
            value: 1,
            category: 4
        },
        {
            name: "DOMStringList",
            value: 1,
            category: 4
        },
        {
            name: "IDBObjectStore",
            value: 1,
            category: 4
        },
        {
            name: "IDBTransaction",
            value: 1,
            category: 4
        },
        {
            name: "IDBFactory",
            value: 1,
            category: 4
        },
        {
            name: "IDBVersionChangeRequest",
            value: 1,
            category: 4
        },
        {
            name: "IDBOpenDBRequest",
            value: 1,
            category: 4
        },
        {
            name: "IDBIndex",
            value: 1,
            category: 4
        },
        {
            name: "IDBKeyRange",
            value: 1,
            category: 4
        },
        {
            name: "DOMError",
            value: 1,
            category: 4
        },
        {
            name: "Int16Array",
            value: 1,
            category: 4
        },
        {
            name: "Int32Array",
            value: 1,
            category: 4
        },
        {
            name: "Int8Array",
            value: 1,
            category: 4
        },
        {
            name: "JavaScriptCallFrame",
            value: 1,
            category: 4
        },
        {
            name: "LocalMediaStream",
            value: 1,
            category: 4
        },
        {
            name: "MediaStream",
            value: 1,
            category: 4
        },
        {
            name: "Location",
            value: 1,
            category: 4
        },
        {
            name: "MediaQueryList",
            value: 1,
            category: 4
        },
        {
            name: "MediaQueryListListener",
            value: 1,
            category: 4
        },
        {
            name: "MediaSource",
            value: 1,
            category: 4
        },
        {
            name: "SourceBufferList",
            value: 1,
            category: 4
        },
        {
            name: "SourceBuffer",
            value: 1,
            category: 4
        },
        {
            name: "MediaStreamTrackList",
            value: 1,
            category: 4
        },
        {
            name: "MediaStreamList",
            value: 1,
            category: 4
        },
        {
            name: "MediaStreamTrack",
            value: 1,
            category: 4
        },
        {
            name: "MessageChannel",
            value: 1,
            category: 4
        },
        {
            name: "MessagePort",
            value: 1,
            category: 4
        },
        {
            name: "MutationObserver",
            value: 1,
            category: 4
        },
        {
            name: "MutationRecord",
            value: 1,
            category: 4
        },
        {
            name: "Navigator",
            value: 1,
            category: 4
        },
        {
            name: "BatteryManager",
            value: 1,
            category: 4
        },
        {
            name: "NavigatorUserMediaErrorCallback",
            value: 1,
            category: 4
        },
        {
            name: "NavigatorUserMediaError",
            value: 1,
            category: 4
        },
        {
            name: "NavigatorUserMediaSuccessCallback",
            value: 1,
            category: 4
        },
        {
            name: "NodeFilter",
            value: 1,
            category: 4
        },
        {
            name: "NodeIterator",
            value: 1,
            category: 4
        },
        {
            name: "Notation",
            value: 1,
            category: 4
        },
        {
            name: "Notification",
            value: 1,
            category: 4
        },
        {
            name: "NotificationPermissionCallback",
            value: 1,
            category: 4
        },
        {
            name: "NotificationCenter",
            value: 1,
            category: 4
        },
        {
            name: "OESVertexArrayObject",
            value: 1,
            category: 4
        },
        {
            name: "WebGLVertexArrayObjectOES",
            value: 1,
            category: 1
        },
        {
            name: "Performance",
            value: 1,
            category: 4
        },
        {
            name: "PerformanceNavigation",
            value: 1,
            category: 4
        },
        {
            name: "PerformanceTiming",
            value: 1,
            category: 4
        },
        {
            name: "PositionErrorCallback",
            value: 1,
            category: 4
        },
        {
            name: "PositionError",
            value: 1,
            category: 4
        },
        {
            name: "ProcessingInstruction",
            value: 1,
            category: 4
        },
        {
            name: "RadioNodeList",
            value: 1,
            category: 4
        },
        {
            name: "RTCDataChannel",
            value: 1,
            category: 4
        },
        {
            name: "RTCPeerConnection",
            value: 1,
            category: 4
        },
        {
            name: "RTCSessionDescription",
            value: 1,
            category: 4
        },
        {
            name: "RTCIceCandidate",
            value: 1,
            category: 4
        },
        {
            name: "RTCSessionDescriptionCallback",
            value: 1,
            category: 4
        },
        {
            name: "RTCStatsCallback",
            value: 1,
            category: 4
        },
        {
            name: "RTCStatsResponse",
            value: 1,
            category: 4
        },
        {
            name: "RTCStatsReport",
            value: 1,
            category: 4
        },
        {
            name: "RTCStatsElement",
            value: 1,
            category: 4
        },
        {
            name: "ScriptProfile",
            value: 1,
            category: 4
        },
        {
            name: "ScriptProfileNode",
            value: 1,
            category: 4
        },
        {
            name: "SharedWorker",
            value: 1,
            category: 4
        },
        {
            name: "AbstractWorker",
            value: 1,
            category: 4
        },
        {
            name: "SharedWorkerContext",
            value: 1,
            category: 4
        },
        {
            name: "SpeechGrammarList",
            value: 1,
            category: 4
        },
        {
            name: "SpeechGrammar",
            value: 1,
            category: 4
        },
        {
            name: "SpeechInputResultList",
            value: 1,
            category: 4
        },
        {
            name: "SpeechInputResult",
            value: 1,
            category: 4
        },
        {
            name: "SpeechRecognition",
            value: 1,
            category: 4
        },
        {
            name: "SpeechRecognitionResult",
            value: 1,
            category: 4
        },
        {
            name: "SpeechRecognitionAlternative",
            value: 1,
            category: 4
        },
        {
            name: "SpeechRecognitionResultList",
            value: 1,
            category: 4
        },
        {
            name: "SQLResultSet",
            value: 1,
            category: 4
        },
        {
            name: "SQLResultSetRowList",
            value: 1,
            category: 4
        },
        {
            name: "SQLStatementCallback",
            value: 1,
            category: 4
        },
        {
            name: "SQLTransaction",
            value: 1,
            category: 4
        },
        {
            name: "SQLStatementErrorCallback",
            value: 1,
            category: 4
        },
        {
            name: "SQLTransactionErrorCallback",
            value: 1,
            category: 4
        },
        {
            name: "SQLError",
            value: 1,
            category: 4
        },
        {
            name: "SQLTransactionSync",
            value: 1,
            category: 4
        },
        {
            name: "StorageInfo",
            value: 1,
            category: 4
        },
        {
            name: "StorageInfoUsageCallback",
            value: 1,
            category: 4
        },
        {
            name: "StorageInfoQuotaCallback",
            value: 1,
            category: 4
        },
        {
            name: "StorageInfoErrorCallback",
            value: 1,
            category: 4
        },
        {
            name: "DOMCoreException",
            value: 1,
            category: 4
        },
        {
            name: "StyleSheetList",
            value: 1,
            category: 4
        },
        {
            name: "SVGAElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGTransformable",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimatedString",
            value: 1,
            category: 2
        },
        {
            name: "SVGAltGlyphDefElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGElement",
            value: 3,
            category: 2
        },
        {
            name: "SVGAltGlyphElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGURIReference",
            value: 1,
            category: 2
        },
        {
            name: "SVGAltGlyphItemElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimateColorElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimationElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimatedAngle",
            value: 1,
            category: 2
        },
        {
            name: "SVGAngle",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimatedLength",
            value: 1,
            category: 2
        },
        {
            name: "SVGLength",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimatedLengthList",
            value: 1,
            category: 2
        },
        {
            name: "SVGLengthList",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimatedNumberList",
            value: 1,
            category: 2
        },
        {
            name: "SVGNumberList",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimatedPreserveAspectRatio",
            value: 1,
            category: 2
        },
        {
            name: "SVGPreserveAspectRatio",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimatedRect",
            value: 1,
            category: 2
        },
        {
            name: "SVGRect",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimatedTransformList",
            value: 1,
            category: 2
        },
        {
            name: "SVGTransformList",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimateElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimateMotionElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimateTransformElement",
            value: 1,
            category: 2
        },
        {
            name: "ElementTimeControl",
            value: 1,
            category: 4
        },
        {
            name: "SVGCircleElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGClipPathElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimatedEnumeration",
            value: 1,
            category: 2
        },
        {
            name: "SVGColor",
            value: 1,
            category: 2
        },
        {
            name: "SVGComponentTransferFunctionElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimatedNumber",
            value: 1,
            category: 2
        },
        {
            name: "SVGCursorElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGExternalResourcesRequired",
            value: 1,
            category: 2
        },
        {
            name: "SVGDefsElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGDescElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGStylable",
            value: 1,
            category: 2
        },
        {
            name: "SVGSVGElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGElementInstance",
            value: 1,
            category: 2
        },
        {
            name: "EventTarget",
            value: 1,
            category: 4
        },
        {
            name: "SVGElementInstanceList",
            value: 1,
            category: 2
        },
        {
            name: "SVGUseElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGEllipseElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimatedBoolean",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEBlendElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFilterPrimitiveStandardAttributes",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEColorMatrixElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEComponentTransferElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFECompositeElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEConvolveMatrixElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGAnimatedInteger",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEDiffuseLightingElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEDisplacementMapElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEDistantLightElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEDropShadowElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEFloodElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEFuncAElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEFuncBElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEFuncGElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEFuncRElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEGaussianBlurElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEImageElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEMergeElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEMergeNodeElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEMorphologyElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEOffsetElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFEPointLightElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFESpecularLightingElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFESpotLightElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFETileElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFETurbulenceElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFilterElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFitToViewBox",
            value: 1,
            category: 2
        },
        {
            name: "SVGFontElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFontFaceElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFontFaceFormatElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFontFaceNameElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFontFaceSrcElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGFontFaceUriElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGForeignObjectElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGGElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGGlyphElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGGlyphRefElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGGradientElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGHKernElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGImageElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGLinearGradientElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGLineElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGLocatable",
            value: 1,
            category: 2
        },
        {
            name: "SVGMatrix",
            value: 1,
            category: 2
        },
        {
            name: "SVGMarkerElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGMaskElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGMetadataElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGMissingGlyphElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGMPathElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGNumber",
            value: 1,
            category: 2
        },
        {
            name: "SVGPaint",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegList",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegArcAbs",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegArcRel",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegClosePath",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegCurvetoCubicAbs",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegCurvetoCubicRel",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegCurvetoCubicSmoothAbs",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegCurvetoCubicSmoothRel",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegCurvetoQuadraticAbs",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegCurvetoQuadraticRel",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegCurvetoQuadraticSmoothAbs",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegCurvetoQuadraticSmoothRel",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegLinetoAbs",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegLinetoHorizontalAbs",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegLinetoHorizontalRel",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegLinetoRel",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegLinetoVerticalAbs",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegLinetoVerticalRel",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegMovetoAbs",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSegMovetoRel",
            value: 1,
            category: 2
        },
        {
            name: "SVGPoint",
            value: 1,
            category: 2
        },
        {
            name: "SVGPathSeg",
            value: 1,
            category: 2
        },
        {
            name: "SVGPatternElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGPointList",
            value: 1,
            category: 2
        },
        {
            name: "SVGPolygonElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGPolylineElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGRadialGradientElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGRectElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGScriptElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGSetElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGStopElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGStyleElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGLangSpace",
            value: 1,
            category: 2
        },
        {
            name: "SVGZoomAndPan",
            value: 1,
            category: 2
        },
        {
            name: "SVGViewSpec",
            value: 1,
            category: 2
        },
        {
            name: "SVGTransform",
            value: 1,
            category: 2
        },
        {
            name: "SVGSwitchElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGSymbolElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGTests",
            value: 1,
            category: 2
        },
        {
            name: "SVGStringList",
            value: 1,
            category: 2
        },
        {
            name: "SVGTextContentElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGTextElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGTextPathElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGTextPositioningElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGTitleElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGTRefElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGTSpanElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGViewElement",
            value: 1,
            category: 2
        },
        {
            name: "SVGVKernElement",
            value: 1,
            category: 2
        },
        {
            name: "TextTrackCueList",
            value: 1,
            category: 4
        },
        {
            name: "TextTrackCue",
            value: 1,
            category: 4
        },
        {
            name: "Touch",
            value: 1,
            category: 4
        },
        {
            name: "TouchList",
            value: 1,
            category: 4
        },
        {
            name: "TreeWalker",
            value: 1,
            category: 4
        },
        {
            name: "Uint16Array",
            value: 1,
            category: 4
        },
        {
            name: "Uint32Array",
            value: 1,
            category: 4
        },
        {
            name: "Uint8ClampedArray",
            value: 1,
            category: 4
        },
        {
            name: "WebGLRenderingContext",
            value: 3,
            category: 1
        },
        {
            name: "WebGLProgram",
            value: 1,
            category: 1
        },
        {
            name: "WebGLBuffer",
            value: 1,
            category: 1
        },
        {
            name: "WebGLFramebuffer",
            value: 1,
            category: 1
        },
        {
            name: "WebGLRenderbuffer",
            value: 1,
            category: 1
        },
        {
            name: "WebGLTexture",
            value: 1,
            category: 1
        },
        {
            name: "WebGLShader",
            value: 1,
            category: 1
        },
        {
            name: "WebGLActiveInfo",
            value: 1,
            category: 1
        },
        {
            name: "WebGLContextAttributes",
            value: 1,
            category: 1
        },
        {
            name: "WebGLShaderPrecisionFormat",
            value: 1,
            category: 1
        },
        {
            name: "WebGLUniformLocation",
            value: 1,
            category: 1
        },
        {
            name: "WebKitAnimationList",
            value: 1,
            category: 4
        },
        {
            name: "WebKitAnimation",
            value: 1,
            category: 4
        },
        {
            name: "WebKitCSSFilterValue",
            value: 1,
            category: 4
        },
        {
            name: "WebKitCSSKeyframeRule",
            value: 1,
            category: 4
        },
        {
            name: "WebKitCSSKeyframesRule",
            value: 1,
            category: 4
        },
        {
            name: "WebKitCSSMatrix",
            value: 1,
            category: 4
        },
        {
            name: "WebKitCSSMixFunctionValue",
            value: 1,
            category: 4
        },
        {
            name: "WebKitCSSTransformValue",
            value: 1,
            category: 4
        },
        {
            name: "WebKitNamedFlow",
            value: 1,
            category: 4
        },
        {
            name: "WebSocket",
            value: 1,
            category: 4
        },
        {
            name: "Worker",
            value: 1,
            category: 4
        },
        {
            name: "WorkerLocation",
            value: 1,
            category: 4
        },
        {
            name: "WorkerNavigator",
            value: 1,
            category: 4
        },
        {
            name: "XMLHttpRequest",
            value: 1,
            category: 4
        },
        {
            name: "XMLHttpRequestUpload",
            value: 1,
            category: 4
        },
        {
            name: "DOMFormData",
            value: 1,
            category: 4
        },
        {
            name: "XPathEvaluator",
            value: 1,
            category: 4
        },
        {
            name: "XPathExpression",
            value: 1,
            category: 4
        },
        {
            name: "XPathNSResolver",
            value: 1,
            category: 4
        },
        {
            name: "XPathResult",
            value: 1,
            category: 4
        },
        {
            name: "XSLTProcessor",
            value: 1,
            category: 4
        }
    ],
    links: [
        {
            source: 0,
            target: 1
        },
        {
            source: 0,
            target: 2
        },
        {
            source: 0,
            target: 3
        },
        {
            source: 4,
            target: 4
        },
        {
            source: 5,
            target: 4
        },
        {
            source: 6,
            target: 7
        },
        {
            source: 6,
            target: 8
        },
        {
            source: 9,
            target: 3
        },
        {
            source: 10,
            target: 9
        },
        {
            source: 11,
            target: 12
        },
        {
            source: 11,
            target: 9
        },
        {
            source: 11,
            target: 13
        },
        {
            source: 11,
            target: 14
        },
        {
            source: 15,
            target: 16
        },
        {
            source: 15,
            target: 17
        },
        {
            source: 15,
            target: 0
        },
        {
            source: 15,
            target: 18
        },
        {
            source: 15,
            target: 9
        },
        {
            source: 15,
            target: 11
        },
        {
            source: 15,
            target: 19
        },
        {
            source: 15,
            target: 20
        },
        {
            source: 15,
            target: 21
        },
        {
            source: 15,
            target: 22
        },
        {
            source: 15,
            target: 23
        },
        {
            source: 15,
            target: 24
        },
        {
            source: 15,
            target: 25
        },
        {
            source: 15,
            target: 26
        },
        {
            source: 15,
            target: 27
        },
        {
            source: 15,
            target: 28
        },
        {
            source: 15,
            target: 29
        },
        {
            source: 15,
            target: 30
        },
        {
            source: 15,
            target: 31
        },
        {
            source: 15,
            target: 32
        },
        {
            source: 15,
            target: 4
        },
        {
            source: 16,
            target: 1
        },
        {
            source: 13,
            target: 14
        },
        {
            source: 1,
            target: 15
        },
        {
            source: 1,
            target: 1
        },
        {
            source: 1,
            target: 14
        },
        {
            source: 14,
            target: 3
        },
        {
            source: 12,
            target: 1
        },
        {
            source: 18,
            target: 1
        },
        {
            source: 18,
            target: 14
        },
        {
            source: 18,
            target: 3
        },
        {
            source: 33,
            target: 34
        },
        {
            source: 35,
            target: 33
        },
        {
            source: 35,
            target: 36
        },
        {
            source: 35,
            target: 37
        },
        {
            source: 35,
            target: 38
        },
        {
            source: 35,
            target: 39
        },
        {
            source: 35,
            target: 34
        },
        {
            source: 35,
            target: 40
        },
        {
            source: 35,
            target: 41
        },
        {
            source: 42,
            target: 43
        },
        {
            source: 19,
            target: 1
        },
        {
            source: 20,
            target: 1
        },
        {
            source: 44,
            target: 7
        },
        {
            source: 45,
            target: 46
        },
        {
            source: 47,
            target: 48
        },
        {
            source: 47,
            target: 49
        },
        {
            source: 47,
            target: 39
        },
        {
            source: 50,
            target: 44
        },
        {
            source: 51,
            target: 52
        },
        {
            source: 21,
            target: 1
        },
        {
            source: 21,
            target: 9
        },
        {
            source: 53,
            target: 5
        },
        {
            source: 54,
            target: 55
        },
        {
            source: 56,
            target: 55
        },
        {
            source: 56,
            target: 57
        },
        {
            source: 58,
            target: 55
        },
        {
            source: 58,
            target: 59
        },
        {
            source: 58,
            target: 60
        },
        {
            source: 61,
            target: 55
        },
        {
            source: 61,
            target: 62
        },
        {
            source: 61,
            target: 59
        },
        {
            source: 63,
            target: 55
        },
        {
            source: 63,
            target: 57
        },
        {
            source: 64,
            target: 65
        },
        {
            source: 64,
            target: 66
        },
        {
            source: 64,
            target: 67
        },
        {
            source: 64,
            target: 68
        },
        {
            source: 55,
            target: 55
        },
        {
            source: 55,
            target: 60
        },
        {
            source: 62,
            target: 55
        },
        {
            source: 57,
            target: 55
        },
        {
            source: 57,
            target: 65
        },
        {
            source: 69,
            target: 55
        },
        {
            source: 69,
            target: 57
        },
        {
            source: 60,
            target: 70
        },
        {
            source: 60,
            target: 62
        },
        {
            source: 60,
            target: 55
        },
        {
            source: 71,
            target: 55
        },
        {
            source: 72,
            target: 65
        },
        {
            source: 73,
            target: 74
        },
        {
            source: 75,
            target: 73
        },
        {
            source: 75,
            target: 76
        },
        {
            source: 76,
            target: 77
        },
        {
            source: 78,
            target: 79
        },
        {
            source: 78,
            target: 80
        },
        {
            source: 49,
            target: 81
        },
        {
            source: 49,
            target: 78
        },
        {
            source: 82,
            target: 5
        },
        {
            source: 83,
            target: 84
        },
        {
            source: 22,
            target: 1
        },
        {
            source: 22,
            target: 14
        },
        {
            source: 85,
            target: 80
        },
        {
            source: 85,
            target: 86
        },
        {
            source: 85,
            target: 87
        },
        {
            source: 88,
            target: 89
        },
        {
            source: 88,
            target: 90
        },
        {
            source: 88,
            target: 88
        },
        {
            source: 88,
            target: 91
        },
        {
            source: 86,
            target: 92
        },
        {
            source: 90,
            target: 93
        },
        {
            source: 94,
            target: 7
        },
        {
            source: 94,
            target: 8
        },
        {
            source: 94,
            target: 95
        },
        {
            source: 96,
            target: 7
        },
        {
            source: 96,
            target: 97
        },
        {
            source: 98,
            target: 85
        },
        {
            source: 99,
            target: 88
        },
        {
            source: 100,
            target: 60
        },
        {
            source: 100,
            target: 96
        },
        {
            source: 100,
            target: 101
        },
        {
            source: 102,
            target: 103
        },
        {
            source: 104,
            target: 102
        },
        {
            source: 103,
            target: 102
        },
        {
            source: 105,
            target: 103
        },
        {
            source: 106,
            target: 7
        },
        {
            source: 106,
            target: 107
        },
        {
            source: 108,
            target: 109
        },
        {
            source: 23,
            target: 1
        },
        {
            source: 23,
            target: 14
        },
        {
            source: 8,
            target: 7
        },
        {
            source: 8,
            target: 109
        },
        {
            source: 8,
            target: 110
        },
        {
            source: 8,
            target: 8
        },
        {
            source: 8,
            target: 57
        },
        {
            source: 8,
            target: 6
        },
        {
            source: 8,
            target: 46
        },
        {
            source: 8,
            target: 45
        },
        {
            source: 8,
            target: 95
        },
        {
            source: 8,
            target: 111
        },
        {
            source: 112,
            target: 7
        },
        {
            source: 113,
            target: 7
        },
        {
            source: 92,
            target: 114
        },
        {
            source: 80,
            target: 98
        },
        {
            source: 80,
            target: 85
        },
        {
            source: 80,
            target: 115
        },
        {
            source: 80,
            target: 116
        },
        {
            source: 80,
            target: 87
        },
        {
            source: 114,
            target: 80
        },
        {
            source: 93,
            target: 89
        },
        {
            source: 116,
            target: 80
        },
        {
            source: 89,
            target: 99
        },
        {
            source: 89,
            target: 89
        },
        {
            source: 89,
            target: 117
        },
        {
            source: 89,
            target: 88
        },
        {
            source: 118,
            target: 119
        },
        {
            source: 120,
            target: 81
        },
        {
            source: 121,
            target: 80
        },
        {
            source: 121,
            target: 122
        },
        {
            source: 121,
            target: 120
        },
        {
            source: 91,
            target: 89
        },
        {
            source: 91,
            target: 123
        },
        {
            source: 91,
            target: 81
        },
        {
            source: 48,
            target: 81
        },
        {
            source: 124,
            target: 119
        },
        {
            source: 125,
            target: 4
        },
        {
            source: 126,
            target: 98
        },
        {
            source: 127,
            target: 119
        },
        {
            source: 122,
            target: 127
        },
        {
            source: 3,
            target: 5
        },
        {
            source: 3,
            target: 3
        },
        {
            source: 128,
            target: 5
        },
        {
            source: 128,
            target: 128
        },
        {
            source: 24,
            target: 1
        },
        {
            source: 24,
            target: 13
        },
        {
            source: 129,
            target: 130
        },
        {
            source: 131,
            target: 132
        },
        {
            source: 133,
            target: 134
        },
        {
            source: 135,
            target: 7
        },
        {
            source: 135,
            target: 95
        },
        {
            source: 136,
            target: 137
        },
        {
            source: 138,
            target: 137
        },
        {
            source: 139,
            target: 137
        },
        {
            source: 140,
            target: 141
        },
        {
            source: 142,
            target: 137
        },
        {
            source: 143,
            target: 137
        },
        {
            source: 144,
            target: 137
        },
        {
            source: 145,
            target: 137
        },
        {
            source: 146,
            target: 137
        },
        {
            source: 146,
            target: 147
        },
        {
            source: 146,
            target: 95
        },
        {
            source: 146,
            target: 148
        },
        {
            source: 34,
            target: 137
        },
        {
            source: 149,
            target: 7
        },
        {
            source: 150,
            target: 137
        },
        {
            source: 150,
            target: 95
        },
        {
            source: 151,
            target: 137
        },
        {
            source: 151,
            target: 149
        },
        {
            source: 152,
            target: 137
        },
        {
            source: 153,
            target: 137
        },
        {
            source: 154,
            target: 137
        },
        {
            source: 155,
            target: 137
        },
        {
            source: 101,
            target: 8
        },
        {
            source: 101,
            target: 135
        },
        {
            source: 101,
            target: 149
        },
        {
            source: 137,
            target: 8
        },
        {
            source: 137,
            target: 149
        },
        {
            source: 156,
            target: 137
        },
        {
            source: 156,
            target: 157
        },
        {
            source: 158,
            target: 137
        },
        {
            source: 158,
            target: 149
        },
        {
            source: 158,
            target: 147
        },
        {
            source: 158,
            target: 148
        },
        {
            source: 159,
            target: 137
        },
        {
            source: 160,
            target: 149
        },
        {
            source: 160,
            target: 7
        },
        {
            source: 147,
            target: 137
        },
        {
            source: 147,
            target: 149
        },
        {
            source: 161,
            target: 137
        },
        {
            source: 161,
            target: 157
        },
        {
            source: 162,
            target: 137
        },
        {
            source: 163,
            target: 137
        },
        {
            source: 164,
            target: 137
        },
        {
            source: 165,
            target: 137
        },
        {
            source: 166,
            target: 137
        },
        {
            source: 167,
            target: 137
        },
        {
            source: 167,
            target: 157
        },
        {
            source: 39,
            target: 137
        },
        {
            source: 168,
            target: 137
        },
        {
            source: 168,
            target: 48
        },
        {
            source: 168,
            target: 147
        },
        {
            source: 168,
            target: 95
        },
        {
            source: 168,
            target: 148
        },
        {
            source: 168,
            target: 114
        },
        {
            source: 169,
            target: 137
        },
        {
            source: 169,
            target: 147
        },
        {
            source: 169,
            target: 95
        },
        {
            source: 169,
            target: 148
        },
        {
            source: 170,
            target: 137
        },
        {
            source: 170,
            target: 147
        },
        {
            source: 171,
            target: 137
        },
        {
            source: 171,
            target: 147
        },
        {
            source: 172,
            target: 137
        },
        {
            source: 173,
            target: 137
        },
        {
            source: 173,
            target: 70
        },
        {
            source: 173,
            target: 108
        },
        {
            source: 174,
            target: 137
        },
        {
            source: 174,
            target: 149
        },
        {
            source: 175,
            target: 137
        },
        {
            source: 141,
            target: 137
        },
        {
            source: 141,
            target: 176
        },
        {
            source: 141,
            target: 177
        },
        {
            source: 141,
            target: 178
        },
        {
            source: 141,
            target: 179
        },
        {
            source: 141,
            target: 180
        },
        {
            source: 181,
            target: 137
        },
        {
            source: 182,
            target: 137
        },
        {
            source: 183,
            target: 137
        },
        {
            source: 183,
            target: 95
        },
        {
            source: 184,
            target: 137
        },
        {
            source: 185,
            target: 137
        },
        {
            source: 185,
            target: 147
        },
        {
            source: 185,
            target: 148
        },
        {
            source: 185,
            target: 157
        },
        {
            source: 186,
            target: 137
        },
        {
            source: 187,
            target: 137
        },
        {
            source: 188,
            target: 137
        },
        {
            source: 188,
            target: 147
        },
        {
            source: 189,
            target: 149
        },
        {
            source: 189,
            target: 188
        },
        {
            source: 189,
            target: 7
        },
        {
            source: 190,
            target: 137
        },
        {
            source: 190,
            target: 147
        },
        {
            source: 190,
            target: 108
        },
        {
            source: 190,
            target: 95
        },
        {
            source: 190,
            target: 148
        },
        {
            source: 191,
            target: 137
        },
        {
            source: 192,
            target: 137
        },
        {
            source: 193,
            target: 137
        },
        {
            source: 194,
            target: 137
        },
        {
            source: 194,
            target: 95
        },
        {
            source: 195,
            target: 137
        },
        {
            source: 196,
            target: 137
        },
        {
            source: 197,
            target: 137
        },
        {
            source: 197,
            target: 147
        },
        {
            source: 197,
            target: 95
        },
        {
            source: 197,
            target: 189
        },
        {
            source: 197,
            target: 149
        },
        {
            source: 197,
            target: 148
        },
        {
            source: 197,
            target: 7
        },
        {
            source: 198,
            target: 137
        },
        {
            source: 199,
            target: 137
        },
        {
            source: 200,
            target: 137
        },
        {
            source: 201,
            target: 137
        },
        {
            source: 201,
            target: 70
        },
        {
            source: 202,
            target: 137
        },
        {
            source: 203,
            target: 137
        },
        {
            source: 204,
            target: 137
        },
        {
            source: 205,
            target: 137
        },
        {
            source: 205,
            target: 202
        },
        {
            source: 205,
            target: 149
        },
        {
            source: 205,
            target: 206
        },
        {
            source: 207,
            target: 137
        },
        {
            source: 207,
            target: 149
        },
        {
            source: 206,
            target: 137
        },
        {
            source: 206,
            target: 149
        },
        {
            source: 208,
            target: 137
        },
        {
            source: 208,
            target: 147
        },
        {
            source: 208,
            target: 95
        },
        {
            source: 208,
            target: 148
        },
        {
            source: 209,
            target: 137
        },
        {
            source: 210,
            target: 137
        },
        {
            source: 210,
            target: 180
        },
        {
            source: 211,
            target: 137
        },
        {
            source: 212,
            target: 137
        },
        {
            source: 40,
            target: 141
        },
        {
            source: 213,
            target: 214
        },
        {
            source: 213,
            target: 215
        },
        {
            source: 213,
            target: 216
        },
        {
            source: 217,
            target: 213
        },
        {
            source: 218,
            target: 219
        },
        {
            source: 218,
            target: 214
        },
        {
            source: 218,
            target: 220
        },
        {
            source: 218,
            target: 221
        },
        {
            source: 222,
            target: 215
        },
        {
            source: 222,
            target: 223
        },
        {
            source: 222,
            target: 224
        },
        {
            source: 222,
            target: 216
        },
        {
            source: 225,
            target: 214
        },
        {
            source: 225,
            target: 220
        },
        {
            source: 225,
            target: 216
        },
        {
            source: 226,
            target: 215
        },
        {
            source: 226,
            target: 226
        },
        {
            source: 220,
            target: 219
        },
        {
            source: 220,
            target: 214
        },
        {
            source: 220,
            target: 221
        },
        {
            source: 220,
            target: 216
        },
        {
            source: 220,
            target: 225
        },
        {
            source: 224,
            target: 216
        },
        {
            source: 216,
            target: 227
        },
        {
            source: 216,
            target: 214
        },
        {
            source: 216,
            target: 221
        },
        {
            source: 221,
            target: 218
        },
        {
            source: 221,
            target: 227
        },
        {
            source: 221,
            target: 220
        },
        {
            source: 223,
            target: 216
        },
        {
            source: 228,
            target: 5
        },
        {
            source: 228,
            target: 228
        },
        {
            source: 229,
            target: 5
        },
        {
            source: 229,
            target: 229
        },
        {
            source: 230,
            target: 5
        },
        {
            source: 230,
            target: 230
        },
        {
            source: 231,
            target: 231
        },
        {
            source: 232,
            target: 233
        },
        {
            source: 234,
            target: 219
        },
        {
            source: 177,
            target: 176
        },
        {
            source: 25,
            target: 12
        },
        {
            source: 25,
            target: 141
        },
        {
            source: 235,
            target: 236
        },
        {
            source: 236,
            target: 235
        },
        {
            source: 237,
            target: 238
        },
        {
            source: 237,
            target: 239
        },
        {
            source: 233,
            target: 240
        },
        {
            source: 26,
            target: 12
        },
        {
            source: 26,
            target: 233
        },
        {
            source: 27,
            target: 12
        },
        {
            source: 27,
            target: 233
        },
        {
            source: 241,
            target: 233
        },
        {
            source: 240,
            target: 242
        },
        {
            source: 243,
            target: 244
        },
        {
            source: 115,
            target: 117
        },
        {
            source: 245,
            target: 7
        },
        {
            source: 246,
            target: 95
        },
        {
            source: 246,
            target: 7
        },
        {
            source: 97,
            target: 7
        },
        {
            source: 247,
            target: 131
        },
        {
            source: 247,
            target: 104
        },
        {
            source: 247,
            target: 105
        },
        {
            source: 247,
            target: 248
        },
        {
            source: 247,
            target: 129
        },
        {
            source: 249,
            target: 250
        },
        {
            source: 251,
            target: 232
        },
        {
            source: 7,
            target: 97
        },
        {
            source: 7,
            target: 95
        },
        {
            source: 7,
            target: 7
        },
        {
            source: 7,
            target: 8
        },
        {
            source: 252,
            target: 7
        },
        {
            source: 253,
            target: 252
        },
        {
            source: 253,
            target: 7
        },
        {
            source: 95,
            target: 7
        },
        {
            source: 254,
            target: 7
        },
        {
            source: 255,
            target: 256
        },
        {
            source: 257,
            target: 255
        },
        {
            source: 257,
            target: 87
        },
        {
            source: 258,
            target: 259
        },
        {
            source: 28,
            target: 12
        },
        {
            source: 28,
            target: 14
        },
        {
            source: 28,
            target: 32
        },
        {
            source: 29,
            target: 1
        },
        {
            source: 260,
            target: 52
        },
        {
            source: 260,
            target: 261
        },
        {
            source: 260,
            target: 262
        },
        {
            source: 132,
            target: 133
        },
        {
            source: 263,
            target: 264
        },
        {
            source: 265,
            target: 7
        },
        {
            source: 265,
            target: 70
        },
        {
            source: 266,
            target: 95
        },
        {
            source: 107,
            target: 7
        },
        {
            source: 107,
            target: 94
        },
        {
            source: 107,
            target: 107
        },
        {
            source: 107,
            target: 46
        },
        {
            source: 107,
            target: 45
        },
        {
            source: 68,
            target: 64
        },
        {
            source: 67,
            target: 64
        },
        {
            source: 267,
            target: 4
        },
        {
            source: 267,
            target: 5
        },
        {
            source: 268,
            target: 269
        },
        {
            source: 268,
            target: 241
        },
        {
            source: 268,
            target: 270
        },
        {
            source: 268,
            target: 233
        },
        {
            source: 268,
            target: 271
        },
        {
            source: 268,
            target: 267
        },
        {
            source: 268,
            target: 272
        },
        {
            source: 271,
            target: 269
        },
        {
            source: 272,
            target: 273
        },
        {
            source: 274,
            target: 275
        },
        {
            source: 30,
            target: 1
        },
        {
            source: 276,
            target: 277
        },
        {
            source: 111,
            target: 94
        },
        {
            source: 111,
            target: 8
        },
        {
            source: 111,
            target: 7
        },
        {
            source: 111,
            target: 95
        },
        {
            source: 111,
            target: 106
        },
        {
            source: 278,
            target: 279
        },
        {
            source: 278,
            target: 244
        },
        {
            source: 280,
            target: 84
        },
        {
            source: 239,
            target: 176
        },
        {
            source: 239,
            target: 2
        },
        {
            source: 238,
            target: 239
        },
        {
            source: 281,
            target: 282
        },
        {
            source: 283,
            target: 284
        },
        {
            source: 285,
            target: 281
        },
        {
            source: 286,
            target: 287
        },
        {
            source: 288,
            target: 286
        },
        {
            source: 289,
            target: 290
        },
        {
            source: 291,
            target: 292
        },
        {
            source: 293,
            target: 292
        },
        {
            source: 74,
            target: 292
        },
        {
            source: 294,
            target: 295
        },
        {
            source: 296,
            target: 289
        },
        {
            source: 77,
            target: 296
        },
        {
            source: 297,
            target: 298
        },
        {
            source: 297,
            target: 299
        },
        {
            source: 300,
            target: 301
        },
        {
            source: 70,
            target: 59
        },
        {
            source: 70,
            target: 7
        },
        {
            source: 70,
            target: 70
        },
        {
            source: 302,
            target: 70
        },
        {
            source: 303,
            target: 304
        },
        {
            source: 303,
            target: 305
        },
        {
            source: 306,
            target: 307
        },
        {
            source: 308,
            target: 309
        },
        {
            source: 310,
            target: 307
        },
        {
            source: 311,
            target: 312
        },
        {
            source: 313,
            target: 314
        },
        {
            source: 315,
            target: 316
        },
        {
            source: 317,
            target: 318
        },
        {
            source: 319,
            target: 320
        },
        {
            source: 321,
            target: 322
        },
        {
            source: 323,
            target: 324
        },
        {
            source: 325,
            target: 326
        },
        {
            source: 327,
            target: 312
        },
        {
            source: 328,
            target: 312
        },
        {
            source: 329,
            target: 312
        },
        {
            source: 312,
            target: 330
        },
        {
            source: 312,
            target: 307
        },
        {
            source: 331,
            target: 304
        },
        {
            source: 331,
            target: 315
        },
        {
            source: 332,
            target: 304
        },
        {
            source: 332,
            target: 333
        },
        {
            source: 334,
            target: 65
        },
        {
            source: 334,
            target: 67
        },
        {
            source: 335,
            target: 307
        },
        {
            source: 335,
            target: 336
        },
        {
            source: 335,
            target: 319
        },
        {
            source: 335,
            target: 333
        },
        {
            source: 337,
            target: 338
        },
        {
            source: 337,
            target: 315
        },
        {
            source: 339,
            target: 304
        },
        {
            source: 340,
            target: 341
        },
        {
            source: 157,
            target: 342
        },
        {
            source: 307,
            target: 8
        },
        {
            source: 307,
            target: 342
        },
        {
            source: 307,
            target: 307
        },
        {
            source: 343,
            target: 344
        },
        {
            source: 343,
            target: 345
        },
        {
            source: 343,
            target: 307
        },
        {
            source: 343,
            target: 346
        },
        {
            source: 343,
            target: 343
        },
        {
            source: 345,
            target: 343
        },
        {
            source: 347,
            target: 304
        },
        {
            source: 347,
            target: 315
        },
        {
            source: 338,
            target: 348
        },
        {
            source: 349,
            target: 350
        },
        {
            source: 349,
            target: 305
        },
        {
            source: 349,
            target: 333
        },
        {
            source: 351,
            target: 350
        },
        {
            source: 351,
            target: 305
        },
        {
            source: 351,
            target: 333
        },
        {
            source: 351,
            target: 319
        },
        {
            source: 352,
            target: 350
        },
        {
            source: 352,
            target: 305
        },
        {
            source: 353,
            target: 350
        },
        {
            source: 353,
            target: 305
        },
        {
            source: 353,
            target: 336
        },
        {
            source: 353,
            target: 333
        },
        {
            source: 354,
            target: 350
        },
        {
            source: 354,
            target: 336
        },
        {
            source: 354,
            target: 333
        },
        {
            source: 354,
            target: 305
        },
        {
            source: 354,
            target: 319
        },
        {
            source: 354,
            target: 355
        },
        {
            source: 354,
            target: 348
        },
        {
            source: 356,
            target: 350
        },
        {
            source: 356,
            target: 336
        },
        {
            source: 356,
            target: 305
        },
        {
            source: 357,
            target: 350
        },
        {
            source: 357,
            target: 305
        },
        {
            source: 357,
            target: 336
        },
        {
            source: 357,
            target: 333
        },
        {
            source: 358,
            target: 307
        },
        {
            source: 358,
            target: 336
        },
        {
            source: 359,
            target: 350
        },
        {
            source: 359,
            target: 336
        },
        {
            source: 359,
            target: 305
        },
        {
            source: 360,
            target: 350
        },
        {
            source: 361,
            target: 335
        },
        {
            source: 362,
            target: 335
        },
        {
            source: 363,
            target: 335
        },
        {
            source: 364,
            target: 335
        },
        {
            source: 365,
            target: 350
        },
        {
            source: 365,
            target: 305
        },
        {
            source: 365,
            target: 336
        },
        {
            source: 366,
            target: 350
        },
        {
            source: 366,
            target: 321
        },
        {
            source: 367,
            target: 350
        },
        {
            source: 368,
            target: 307
        },
        {
            source: 368,
            target: 305
        },
        {
            source: 369,
            target: 350
        },
        {
            source: 369,
            target: 305
        },
        {
            source: 369,
            target: 333
        },
        {
            source: 369,
            target: 336
        },
        {
            source: 370,
            target: 350
        },
        {
            source: 370,
            target: 336
        },
        {
            source: 370,
            target: 305
        },
        {
            source: 371,
            target: 307
        },
        {
            source: 371,
            target: 336
        },
        {
            source: 372,
            target: 350
        },
        {
            source: 372,
            target: 305
        },
        {
            source: 372,
            target: 336
        },
        {
            source: 373,
            target: 307
        },
        {
            source: 373,
            target: 336
        },
        {
            source: 374,
            target: 350
        },
        {
            source: 374,
            target: 305
        },
        {
            source: 375,
            target: 350
        },
        {
            source: 375,
            target: 336
        },
        {
            source: 375,
            target: 355
        },
        {
            source: 375,
            target: 333
        },
        {
            source: 376,
            target: 341
        },
        {
            source: 376,
            target: 355
        },
        {
            source: 376,
            target: 333
        },
        {
            source: 376,
            target: 315
        },
        {
            source: 350,
            target: 341
        },
        {
            source: 350,
            target: 315
        },
        {
            source: 350,
            target: 305
        },
        {
            source: 377,
            target: 321
        },
        {
            source: 377,
            target: 323
        },
        {
            source: 378,
            target: 307
        },
        {
            source: 379,
            target: 307
        },
        {
            source: 380,
            target: 307
        },
        {
            source: 381,
            target: 307
        },
        {
            source: 382,
            target: 307
        },
        {
            source: 383,
            target: 307
        },
        {
            source: 384,
            target: 304
        },
        {
            source: 384,
            target: 315
        },
        {
            source: 385,
            target: 304
        },
        {
            source: 386,
            target: 307
        },
        {
            source: 387,
            target: 341
        },
        {
            source: 388,
            target: 341
        },
        {
            source: 388,
            target: 325
        },
        {
            source: 388,
            target: 333
        },
        {
            source: 389,
            target: 307
        },
        {
            source: 390,
            target: 304
        },
        {
            source: 390,
            target: 315
        },
        {
            source: 390,
            target: 321
        },
        {
            source: 318,
            target: 316
        },
        {
            source: 391,
            target: 388
        },
        {
            source: 391,
            target: 315
        },
        {
            source: 392,
            target: 304
        },
        {
            source: 392,
            target: 315
        },
        {
            source: 393,
            target: 307
        },
        {
            source: 393,
            target: 324
        },
        {
            source: 393,
            target: 394
        },
        {
            source: 395,
            target: 377
        },
        {
            source: 395,
            target: 315
        },
        {
            source: 395,
            target: 333
        },
        {
            source: 395,
            target: 313
        },
        {
            source: 395,
            target: 314
        },
        {
            source: 396,
            target: 341
        },
        {
            source: 396,
            target: 315
        },
        {
            source: 396,
            target: 333
        },
        {
            source: 394,
            target: 394
        },
        {
            source: 397,
            target: 307
        },
        {
            source: 398,
            target: 307
        },
        {
            source: 399,
            target: 338
        },
        {
            source: 320,
            target: 400
        },
        {
            source: 401,
            target: 334
        },
        {
            source: 402,
            target: 304
        },
        {
            source: 402,
            target: 403
        },
        {
            source: 402,
            target: 336
        },
        {
            source: 402,
            target: 404
        },
        {
            source: 402,
            target: 405
        },
        {
            source: 402,
            target: 406
        },
        {
            source: 402,
            target: 407
        },
        {
            source: 402,
            target: 408
        },
        {
            source: 402,
            target: 409
        },
        {
            source: 402,
            target: 410
        },
        {
            source: 402,
            target: 411
        },
        {
            source: 402,
            target: 412
        },
        {
            source: 402,
            target: 413
        },
        {
            source: 402,
            target: 414
        },
        {
            source: 402,
            target: 415
        },
        {
            source: 402,
            target: 416
        },
        {
            source: 402,
            target: 417
        },
        {
            source: 402,
            target: 418
        },
        {
            source: 402,
            target: 419
        },
        {
            source: 402,
            target: 420
        },
        {
            source: 402,
            target: 421
        },
        {
            source: 402,
            target: 422
        },
        {
            source: 402,
            target: 423
        },
        {
            source: 404,
            target: 424
        },
        {
            source: 405,
            target: 424
        },
        {
            source: 406,
            target: 424
        },
        {
            source: 407,
            target: 424
        },
        {
            source: 408,
            target: 424
        },
        {
            source: 409,
            target: 424
        },
        {
            source: 410,
            target: 424
        },
        {
            source: 411,
            target: 424
        },
        {
            source: 412,
            target: 424
        },
        {
            source: 413,
            target: 424
        },
        {
            source: 414,
            target: 424
        },
        {
            source: 415,
            target: 424
        },
        {
            source: 416,
            target: 424
        },
        {
            source: 417,
            target: 424
        },
        {
            source: 418,
            target: 424
        },
        {
            source: 419,
            target: 424
        },
        {
            source: 420,
            target: 424
        },
        {
            source: 403,
            target: 424
        },
        {
            source: 421,
            target: 424
        },
        {
            source: 422,
            target: 424
        },
        {
            source: 425,
            target: 377
        },
        {
            source: 425,
            target: 315
        },
        {
            source: 425,
            target: 333
        },
        {
            source: 425,
            target: 325
        },
        {
            source: 423,
            target: 423
        },
        {
            source: 426,
            target: 423
        },
        {
            source: 427,
            target: 304
        },
        {
            source: 427,
            target: 426
        },
        {
            source: 428,
            target: 304
        },
        {
            source: 428,
            target: 426
        },
        {
            source: 429,
            target: 388
        },
        {
            source: 429,
            target: 315
        },
        {
            source: 430,
            target: 304
        },
        {
            source: 430,
            target: 315
        },
        {
            source: 431,
            target: 338
        },
        {
            source: 432,
            target: 312
        },
        {
            source: 433,
            target: 341
        },
        {
            source: 433,
            target: 336
        },
        {
            source: 341,
            target: 305
        },
        {
            source: 341,
            target: 57
        },
        {
            source: 341,
            target: 65
        },
        {
            source: 434,
            target: 435
        },
        {
            source: 342,
            target: 436
        },
        {
            source: 342,
            target: 423
        },
        {
            source: 342,
            target: 437
        },
        {
            source: 342,
            target: 315
        },
        {
            source: 342,
            target: 324
        },
        {
            source: 342,
            target: 307
        },
        {
            source: 342,
            target: 314
        },
        {
            source: 342,
            target: 316
        },
        {
            source: 342,
            target: 394
        },
        {
            source: 342,
            target: 400
        },
        {
            source: 342,
            target: 438
        },
        {
            source: 342,
            target: 8
        },
        {
            source: 342,
            target: 95
        },
        {
            source: 439,
            target: 304
        },
        {
            source: 440,
            target: 377
        },
        {
            source: 441,
            target: 442
        },
        {
            source: 443,
            target: 341
        },
        {
            source: 443,
            target: 333
        },
        {
            source: 443,
            target: 315
        },
        {
            source: 443,
            target: 423
        },
        {
            source: 443,
            target: 324
        },
        {
            source: 444,
            target: 304
        },
        {
            source: 445,
            target: 309
        },
        {
            source: 445,
            target: 333
        },
        {
            source: 445,
            target: 315
        },
        {
            source: 446,
            target: 443
        },
        {
            source: 446,
            target: 317
        },
        {
            source: 446,
            target: 319
        },
        {
            source: 447,
            target: 341
        },
        {
            source: 438,
            target: 394
        },
        {
            source: 304,
            target: 393
        },
        {
            source: 304,
            target: 325
        },
        {
            source: 326,
            target: 438
        },
        {
            source: 448,
            target: 309
        },
        {
            source: 449,
            target: 446
        },
        {
            source: 309,
            target: 305
        },
        {
            source: 346,
            target: 304
        },
        {
            source: 346,
            target: 343
        },
        {
            source: 346,
            target: 315
        },
        {
            source: 450,
            target: 436
        },
        {
            source: 450,
            target: 442
        },
        {
            source: 437,
            target: 321
        },
        {
            source: 437,
            target: 326
        },
        {
            source: 437,
            target: 323
        },
        {
            source: 437,
            target: 307
        },
        {
            source: 451,
            target: 307
        },
        {
            source: 43,
            target: 44
        },
        {
            source: 43,
            target: 43
        },
        {
            source: 180,
            target: 452
        },
        {
            source: 180,
            target: 453
        },
        {
            source: 453,
            target: 180
        },
        {
            source: 453,
            target: 94
        },
        {
            source: 452,
            target: 453
        },
        {
            source: 179,
            target: 180
        },
        {
            source: 454,
            target: 344
        },
        {
            source: 455,
            target: 454
        },
        {
            source: 456,
            target: 7
        },
        {
            source: 456,
            target: 252
        },
        {
            source: 457,
            target: 5
        },
        {
            source: 457,
            target: 457
        },
        {
            source: 458,
            target: 5
        },
        {
            source: 458,
            target: 458
        },
        {
            source: 2,
            target: 5
        },
        {
            source: 2,
            target: 2
        },
        {
            source: 459,
            target: 2
        },
        {
            source: 459,
            target: 459
        },
        {
            source: 31,
            target: 1
        },
        {
            source: 31,
            target: 3
        },
        {
            source: 460,
            target: 33
        },
        {
            source: 460,
            target: 461
        },
        {
            source: 460,
            target: 462
        },
        {
            source: 460,
            target: 463
        },
        {
            source: 460,
            target: 464
        },
        {
            source: 460,
            target: 465
        },
        {
            source: 460,
            target: 4
        },
        {
            source: 460,
            target: 5
        },
        {
            source: 460,
            target: 466
        },
        {
            source: 460,
            target: 467
        },
        {
            source: 460,
            target: 468
        },
        {
            source: 460,
            target: 469
        },
        {
            source: 460,
            target: 470
        },
        {
            source: 460,
            target: 36
        },
        {
            source: 460,
            target: 39
        },
        {
            source: 460,
            target: 34
        },
        {
            source: 460,
            target: 40
        },
        {
            source: 460,
            target: 3
        },
        {
            source: 471,
            target: 472
        },
        {
            source: 473,
            target: 72
        },
        {
            source: 474,
            target: 55
        },
        {
            source: 474,
            target: 57
        },
        {
            source: 475,
            target: 55
        },
        {
            source: 475,
            target: 62
        },
        {
            source: 475,
            target: 474
        },
        {
            source: 476,
            target: 476
        },
        {
            source: 477,
            target: 72
        },
        {
            source: 478,
            target: 72
        },
        {
            source: 479,
            target: 95
        },
        {
            source: 480,
            target: 4
        },
        {
            source: 480,
            target: 5
        },
        {
            source: 481,
            target: 279
        },
        {
            source: 84,
            target: 222
        },
        {
            source: 84,
            target: 482
        },
        {
            source: 84,
            target: 483
        },
        {
            source: 84,
            target: 84
        },
        {
            source: 84,
            target: 257
        },
        {
            source: 84,
            target: 73
        },
        {
            source: 84,
            target: 76
        },
        {
            source: 84,
            target: 126
        },
        {
            source: 84,
            target: 99
        },
        {
            source: 84,
            target: 89
        },
        {
            source: 484,
            target: 485
        },
        {
            source: 484,
            target: 4
        },
        {
            source: 484,
            target: 5
        },
        {
            source: 484,
            target: 486
        },
        {
            source: 487,
            target: 488
        },
        {
            source: 487,
            target: 489
        },
        {
            source: 487,
            target: 490
        },
        {
            source: 488,
            target: 490
        },
        {
            source: 490,
            target: 7
        },
        {
            source: 491,
            target: 7
        },
        {
            source: 491,
            target: 94
        }
    ]
}

var chartDom = document.getElementById('m-chart');
var myChart = echarts.init(chartDom);
var option;

myChart.showLoading();
myChart.showLoading();
  myChart.hideLoading();
  option = {
    title: {
          text: "用户对抗网络模型",
          textStyle: {
            color: "#1FACED",
          },
          padding: [0, 250],
          boundaryGap: false,
        },
    legend: {
      data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other'],
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
        data: m_data.nodes.map(function (node, idx) {
          node.id = idx;
          return node;
        }),
        categories: m_data.categories,
        force: {
          edgeLength: 5,
          repulsion: 20,
          gravity: 0.2
        },
        edges: m_data.links
      }
    ]
  };
  myChart.setOption(option);


option && myChart.setOption(option);
}
const keyUsers=ref([
    {
        id:1,
        publisher:"新华社",
        fans:"1.11亿",
        follows:3077,
        text:"昨日发博17，阅读量100万+，互动数37万"
    },
    {
        id:2,
        publisher:"财联社APP",
        fans:"1.11亿",
        follows:3077,
        text:"昨日发博17，阅读量100万+，互动数37万"
    },
    {
        id:3,
        publisher:"观察者网",
        fans:"1.11亿",
        follows:3077,
        text:"昨日发博17，阅读量100万+，互动数37万"
    }
])
const keyforward=ref([
    {
        id:1,
        account:"ZEALER",
        time:'2021-04-09',
        sources:'新浪微博',
        text:"#林俊杰买虚拟地产浮亏91%# 近日，各类虚拟资产相继爆雷，虚拟货币价格暴跌。",
        likes: 3700   ,
        reply: 2089,
        forwards: 3010
    },
    {
        id:2,
        account:"新华社",
        time:'2021-04-09',
        sources:'新浪微博',
        text:"#林俊杰买虚拟地产浮亏91%# 近日，各类虚拟资产相继爆雷，虚拟货币价格暴跌。",
        likes: 3700   ,
        reply: 2089,
        forwards: 3010
    }
])
function initchart4(){
    var chartDom = document.getElementById('r-chart');
var myChart = echarts.init(chartDom, 'dark');
var option;

// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
const dataBJ = [
  [55, 9, 56, 0.46, 18, 6, 1],
  [25, 11, 21, 0.65, 34, 9, 2],
  [56, 7, 63, 0.3, 14, 5, 3],
  [33, 7, 29, 0.33, 16, 6, 4],
  [42, 24, 44, 0.76, 40, 16, 5],
  [82, 58, 90, 1.77, 68, 33, 6],
  [74, 49, 77, 1.46, 48, 27, 7],
  [78, 55, 80, 1.29, 59, 29, 8],
  [267, 216, 280, 4.8, 108, 64, 9],
  [185, 127, 216, 2.52, 61, 27, 10],
  [39, 19, 38, 0.57, 31, 15, 11],
  [41, 11, 40, 0.43, 21, 7, 12],
  [64, 38, 74, 1.04, 46, 22, 13],
  [108, 79, 120, 1.7, 75, 41, 14],
  [108, 63, 116, 1.48, 44, 26, 15],
  [33, 6, 29, 0.34, 13, 5, 16],
  [94, 66, 110, 1.54, 62, 31, 17],
  [186, 142, 192, 3.88, 93, 79, 18],
  [57, 31, 54, 0.96, 32, 14, 19],
  [22, 8, 17, 0.48, 23, 10, 20],
  [39, 15, 36, 0.61, 29, 13, 21],
  [94, 69, 114, 2.08, 73, 39, 22],
  [99, 73, 110, 2.43, 76, 48, 23],
  [31, 12, 30, 0.5, 32, 16, 24],
  [42, 27, 43, 1, 53, 22, 25],
  [154, 117, 157, 3.05, 92, 58, 26],
  [234, 185, 230, 4.09, 123, 69, 27],
  [160, 120, 186, 2.77, 91, 50, 28],
  [134, 96, 165, 2.76, 83, 41, 29],
  [52, 24, 60, 1.03, 50, 21, 30],
  [46, 5, 49, 0.28, 10, 6, 31]
];

const dataSH = [
  [91, 45, 125, 0.82, 34, 23, 1],
  [65, 27, 78, 0.86, 45, 29, 2],
  [83, 60, 84, 1.09, 73, 27, 3],
  [109, 81, 121, 1.28, 68, 51, 4],
  [106, 77, 114, 1.07, 55, 51, 5],
  [109, 81, 121, 1.28, 68, 51, 6],
  [106, 77, 114, 1.07, 55, 51, 7],
  [89, 65, 78, 0.86, 51, 26, 8],
  [53, 33, 47, 0.64, 50, 17, 9],
  [80, 55, 80, 1.01, 75, 24, 10],
  [117, 81, 124, 1.03, 45, 24, 11],
  [99, 71, 142, 1.1, 62, 42, 12],
  [95, 69, 130, 1.28, 74, 50, 13],
  [116, 87, 131, 1.47, 84, 40, 14],
  [108, 80, 121, 1.3, 85, 37, 15],
  [134, 83, 167, 1.16, 57, 43, 16],
  [79, 43, 107, 1.05, 59, 37, 17],
  [71, 46, 89, 0.86, 64, 25, 18],
  [97, 71, 113, 1.17, 88, 31, 19],
  [84, 57, 91, 0.85, 55, 31, 20],
  [87, 63, 101, 0.9, 56, 41, 21],
  [104, 77, 119, 1.09, 73, 48, 22],
  [87, 62, 100, 1, 72, 28, 23],
  [168, 128, 172, 1.49, 97, 56, 24],
  [65, 45, 51, 0.74, 39, 17, 25],
  [39, 24, 38, 0.61, 47, 17, 26],
  [39, 24, 39, 0.59, 50, 19, 27],
  [93, 68, 96, 1.05, 79, 29, 28],
  [188, 143, 197, 1.66, 99, 51, 29],
  [174, 131, 174, 1.55, 108, 50, 30],
  [187, 143, 201, 1.39, 89, 53, 31]
];
const lineStyle = {
  width: 1,
  opacity: 0.5
};
option = {
  backgroundColor: 'rgba(0,0,0,0)',
  title: {
    text: '用户角色画像',
    left: '0',
    textStyle: {
      color: '#eee'
    }
  },
  legend: {
    bottom: 5,
    data: ['微博', '知乎'],
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
      name: '微博',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataBJ,
      symbol: 'none',
      itemStyle: {
        color: '#F9713C'
      },
      areaStyle: {
        opacity: 0.1
      }
    },
    {
      name: '知乎',
      type: 'radar',
      lineStyle: lineStyle,
      data: dataSH,
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

option && myChart.setOption(option);
}
onMounted(() => {
  console.log("mounted");
  initchart1();
  initchart2();
  initchart3();
  initchart4();
});
</script>
<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}
.container {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 89%;
  //background-color: #fff;
  display: flex;
  .left {
    flex: 4;
    //background-color: #ba8e8e;
    display: flex;
    flex-direction: column;
    .left-1 {
      flex: 8;
    }
    .left-2 {
      flex: 9;
    }
  }
  .mid {
    flex: 6;
    //background-color: #df80d8;
  }
  .right {
    flex: 3;
    //background-color: #13cfff;
    display: flex;
    flex-direction: column;
    .right-1 {
      flex: 2;
    }
    .right-2 {
      flex: 2;
    }
    .right-3 {
      flex: 3;
    }
  }
}
.outer {
  padding: 2px;
}
#l1-chart {
  position: relative;
  top: 5%;
  left: 2%;
  width: 96%;
  height: 90%;
  //background-color: #fff;
}
#l2-chart {
  position: relative;
  top: 5%;
  left: 2%;
  width: 96%;
  height: 90%;
  //background-color: #fff;
}
#m-chart{
  position: relative;
  top: 3%;
  left: 2%;
  width: 96%;
  height: 90%;
}
.rtitle{
    color: #1FACED;
    font-size: large;
    font-weight: 600;
    width: fit-content;
    margin: 0 auto;
    height: 20px;
    line-height: 20px;
}
.rcontent{
    //background-color: #fff;
    position: absolute;
    top:20px;
    width: 96%;
    bottom: 0;
    left:2%;
    display: flex;
    flex-direction: column;
}
.inRight1{
    flex: 1;
    margin:3px 0;
    border-radius: 5px;
    .accountInfo{
        //background-color: #fff;
        display: flex;
        flex-direction: row;
        //background: yellowgreen;
        height: 27px;
        line-height: 27px;
        color:#1FACED;
        padding-left: 5px;
        
        .iconfont{
            color: #fff;
            font-size: 21px;
            margin-right: 3px;
        }
        .A_publisher{
            font-family: 'Times New Roman', Times, serif;
            font-weight: 600;
            font-size: medium;
            flex:2
        }
        .A_fans{
            flex:1;
            font-size: small;
            font-family: 'Times New Roman', Times, serif;
            font-weight: 600;
        }
        .A_follows{
            flex:1;
            font-size: small;
            font-family: 'Times New Roman', Times, serif;
            font-weight: 600;
        }
    }
    .accountlastday{
        color: #fff;
        font-size: x-small;
        padding-left: 5px;
        font-family: 'Times New Roman', Times, serif;
    }
}
.inRight2{
    margin-top:5px;
    border-radius: 5px;
    .infoSources{
        margin-top:2px;
        display: flex;
        flex-direction: row;
        color:#1FACED;
        font-family: 'Times New Roman', Times, serif;
        font-weight: 600;
        height: 21px;
        line-height: 21px;
        .iconfont{
            color: #fff;
            font-size: 21px;
            margin-right: 3px;
        }
        .account{
            flex: 4;
        }
        .time{
            flex:3;
            font-size: smaller;
        }
        .source{
            flex:2;
            font-size: smaller;

        }
    }
    .infobody{
        color:white;
        font-family: 'Times New Roman', Times, serif;
        font-weight: 400;
        font-size: small;
        margin:3px 0 0 0;
        padding:0 5px;
    }
    .infoData{
        display: flex;
        flex-direction: row;
        color:#1FACED;
        opacity:0.8;
        font-weight: 400;
        font-size: x-small;
        text-align:center;
        margin-bottom:2px;
        .likes{
            flex:1;
        }
        .reply{
            flex:1
        }
        .forward{
            flex:1
        }
    }
}
#r-chart{
    position: relative;
    top: 3%;
    left: 2%;
    width: 96%;
    height: 97%; 
}
</style>
