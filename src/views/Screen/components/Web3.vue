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
          <div class="rtitle">{{ web3Store.keyUsers.title }}</div>
          <div class="rcontent">
            <div
              class="inRight1"
              v-for="(item, index) in web3Store.keyUsers.data"
              :key="item.id"
              :style="{
                backgroundColor: index % 2 == 1 ? '' : 'rgba(255,255,255,0.15)',
              }"
            >
              <div class="accountInfo">
                <div class="A_icon">
                  <i class="iconfont icon-mianxing-yonghutouxiang"></i>
                </div>
                <div class="A_publisher">{{ item.publisher }}</div>
                <div class="A_fans">粉丝{{ item.fans }}</div>
                <div class="A_follows">关注{{ item.follows }}</div>
              </div>
              <div class="accountlastday">{{ item.text }}</div>
            </div>
          </div>
        </dv-border-box7>
      </div>
      <div class="right-2 outer">
        <dv-border-box7>
          <div class="rtitle">{{ web3Store.keyforward.title }}</div>
          <div class="rcontent">
            <div
              class="inRight2"
              v-for="(item, index) in web3Store.keyforward.data"
              :key="item.id"
              :style="{
                backgroundColor: index % 2 == 1 ? '' : 'rgba(255,255,255,0.15)',
              }"
            >
              <div class="infoSources">
                <i class="iconfont icon-youjian"></i>
                <div class="account">{{ item.account }}</div>
                <div class="time">{{ item.time }}</div>
                <div class="source">{{ item.sources }}</div>
              </div>
              <div class="infobody">{{ item.text }}</div>
              <div class="infoData">
                <div class="likes">点赞 {{ item.likes }}</div>
                <div class="reply">回复 {{ item.reply }}</div>
                <div class="forward">转发 {{ item.forwards }}</div>
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
import { onMounted, ref } from "vue";
import useWeb3ScreenStore from "@/stores/web3Store.js";
import { useUserStore } from "../../../stores/user";
const web3Store = useWeb3ScreenStore();
const userStore = useUserStore();
function initchart1() {
  var chartDom = document.getElementById("l1-chart");
  // console.log(chartDom)
  var myChart = echarts.init(chartDom, "dark");
  var option = web3Store.l1_option;
  option && myChart.setOption(option);
}
function initchart2() {
  var chartDom = document.getElementById("l2-chart");
  var myChart = echarts.init(chartDom, "dark");
  const { scatterOption, barOption } = web3Store.l2_option;
  var option = scatterOption;
  let currentOption = scatterOption;
  setInterval(function () {
    currentOption = currentOption === scatterOption ? barOption : scatterOption;
    myChart.setOption(currentOption, true);
  }, 3000);

  option && myChart.setOption(option);
}
function initchart3() {
  var chartDom = document.getElementById("m-chart");
  var myChart = echarts.init(chartDom);
  var option;

  myChart.showLoading();
  myChart.showLoading();
  myChart.hideLoading();
  option = web3Store.m_option;
  myChart.setOption(option);
  option && myChart.setOption(option);
}
function initchart4() {
  var chartDom = document.getElementById("r-chart");
  var myChart = echarts.init(chartDom, "dark");
  var option;
  option = web3Store.r3_option;

  option && myChart.setOption(option);
}
async function initcharts(){
    initchart1();
  initchart2();
  initchart3();
  initchart4();
}
onMounted(async () => {
  await web3Store.getWeb3Data(userStore.screenId);
  console.log("mounted");
  await initcharts()
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
#m-chart {
  position: relative;
  top: 3%;
  left: 2%;
  width: 96%;
  height: 90%;
}
.rtitle {
  color: #1faced;
  font-size: large;
  font-weight: 600;
  width: fit-content;
  margin: 0 auto;
  height: 20px;
  line-height: 20px;
}
.rcontent {
  //background-color: #fff;
  position: absolute;
  top: 20px;
  width: 96%;
  bottom: 0;
  left: 2%;
  display: flex;
  flex-direction: column;
}
.inRight1 {
  flex: 1;
  margin: 3px 0;
  border-radius: 5px;
  .accountInfo {
    //background-color: #fff;
    display: flex;
    flex-direction: row;
    //background: yellowgreen;
    height: 27px;
    line-height: 27px;
    color: #1faced;
    padding-left: 5px;

    .iconfont {
      color: #fff;
      font-size: 21px;
      margin-right: 3px;
    }
    .A_publisher {
      font-family: "Times New Roman", Times, serif;
      font-weight: 600;
      font-size: medium;
      flex: 2;
    }
    .A_fans {
      flex: 1;
      font-size: small;
      font-family: "Times New Roman", Times, serif;
      font-weight: 600;
    }
    .A_follows {
      flex: 1;
      font-size: small;
      font-family: "Times New Roman", Times, serif;
      font-weight: 600;
    }
  }
  .accountlastday {
    color: #fff;
    font-size: x-small;
    padding-left: 5px;
    font-family: "Times New Roman", Times, serif;
  }
}
.inRight2 {
  margin-top: 5px;
  border-radius: 5px;
  .infoSources {
    margin-top: 2px;
    display: flex;
    flex-direction: row;
    color: #1faced;
    font-family: "Times New Roman", Times, serif;
    font-weight: 600;
    height: 21px;
    line-height: 21px;
    .iconfont {
      color: #fff;
      font-size: 21px;
      margin-right: 3px;
    }
    .account {
      flex: 4;
    }
    .time {
      flex: 3;
      font-size: smaller;
    }
    .source {
      flex: 2;
      font-size: smaller;
    }
  }
  .infobody {
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: small;
    margin: 3px 0 0 0;
    padding: 0 5px;
  }
  .infoData {
    display: flex;
    flex-direction: row;
    color: #1faced;
    opacity: 0.8;
    font-weight: 400;
    font-size: x-small;
    text-align: center;
    margin-bottom: 2px;
    .likes {
      flex: 1;
    }
    .reply {
      flex: 1;
    }
    .forward {
      flex: 1;
    }
  }
}
#r-chart {
  position: relative;
  top: 3%;
  left: 2%;
  width: 96%;
  height: 97%;
}
</style>
