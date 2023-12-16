<template>
  <div class="box">
    <dv-border-box1>
            <div class="innerbox">
            <div class="subtitle">
            <h3>>网络舆情数据</h3>
            </div>
            <div class="itemholder">
                <div class="item" v-for="info in platformData">
                    <p class="number">{{ info.dataNumber }}</p>
                    <p class="notes">{{ info.platform }}</p>
                </div>
            </div>    
            </div>    
        </dv-border-box1>
  </div>
  <div class="box1">
    <dv-border-box1>
      <div class="outer">
        <div class="left">
          <div class="inner1">
            <div style="font-size: 13px; margin-top: 20px; opacity: 0.7;">平台总报告量</div>
            <div style="font-size: 24px;">3,061,575</div>
          </div>
          <div class="inner2">
            <div style="font-size: 13px; margin-top: 20px; opacity: 0.7;">24小时新增报告量</div>
            <div style="font-size: 24px;">31,575</div>
          </div>
          <div class="inner3">
            <div style="font-size: 13px; margin-top: 20px; opacity: 0.7;">24小时环比</div>
            <span style="font-size: 24px;">31.38%</span>
            <span><i class="iconfont icon-shangshengjiantou" style="color:red;"></i></span> 
            
          </div>
        </div>
        <div class="right" id="chart1" style="height: 100%;"></div>
      </div>
    </dv-border-box1>
  </div>

  <div class="box2">
    <div class="left">
      <dv-border-box1>
        <div class="outer">
          <div class="up">
            <div class="inner1" style="position: relative;text-align: left; color: white;">
              <div style="position: absolute;left:10px; top: 10px; font-size: 12px;">影响力指数</div>
              <i class="iconfont icon-tonghang2" style="position: absolute;right: 10px; top: 10px; font-size: 22px;color: rgba(255,255,255,0.6)"></i>
              <div style="position: absolute;left:10px;top: 25px; font-size: 30px;">98.95</div>
              <hr style="position: absolute;left:10px;top: 60px;width: 85%;background-color:rgba(255,255,255,0.6); height:1px; border:none;">
              <div style="position: absolute;left:10px;top: 75px; font-size: 12px;">同比例上涨13.5%</div>
            </div>
            <div class="inner2" style="position: relative;text-align: left; color: white;">
              <div style="position: absolute;left:10px; top: 10px; font-size: 12px;">用户活跃度</div>
              <i class="iconfont icon-tonghang2" style="position: absolute;right: 10px; top: 10px; font-size: 22px;color: rgba(255,255,255,0.6)"></i>
              <div style="position: absolute;left:10px;top: 25px; font-size: 30px;">94</div>
              <hr style="position: absolute;left:10px;top: 60px;width: 85%;background-color:rgba(255,255,255,0.6); height:1px; border:none;">
              <div style="position: absolute;left:10px;top: 75px; font-size: 12px;">同比例上涨3.5%</div>
            </div>
          </div>
          <div class="down" style="color: white;">
            <div>{{ displayStore.data2.title }}</div>
            <div class="outer1" v-for="item in displayStore.data2.data">
              <div class="inner" style="text-align: left; position: relative;">
                <div style="position: absolute; font-size: 13px;">
                  <div style="left: 10px; top: 5px; font-size: 15px; width: 80px;">{{ item.platform }}</div>
                  <div style="left: 90px; top: 10px; width: 18px; height:12px;background-color: yellow;"></div>
                  <div style="left: 113px; top: 6px; width: 80px; ">上个月:{{item.lastmonthdata}}</div>
                  <div style="left: 180px; top: 10px; width: 18px; height:12px;background-color: yellowgreen;"></div>
                  <div style="left: 203px; top: 6px; width: 80px; ">本月:{{item.thismonthdata}}</div>
                  <div style="left: 265px; top: 6px;">
                    <i :class="iconstyle(item.lastmonthdata,item.thismonthdata)" :style="{color:colorstyle(item.lastmonthdata,item.thismonthdata)}"></i>{{ item.lastmonthdata-item.thismonthdata>0 ? item.lastmonthdata-item.thismonthdata : -item.lastmonthdata+item.thismonthdata }}
                  </div>
                  <div style="display: flex; flex-direction: row;left: 10px; top: 30px; width: 278px;height: 10px;">
                  <div :style="{flex:item.lastmonthdata,backgroundColor:'yellow'}"></div>
                  <div :style="{flex:item.thismonthdata,backgroundColor: 'yellowgreen'}"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dv-border-box1>
    </div>
    <div class="right">
      <dv-border-box1>
      <div class="outer">
        <div class="left1">
          
            <div class="inner" id="chart2">1</div>
            <div class="inner" id="chart3">2</div>
          
          
            <div class="inner" id="chart4">3</div>
            <div class="inner" id="chart5">4</div>
          
        </div>
        <div class="right1" id="chart6"></div>
      
      </div>
      </dv-border-box1>
    </div>
  </div>
  <div class="box3" >
    <div class="outer" v-for="item in displayStore.data5.data">
      <dv-border-box1>
        <div class="inner">
          <div style="color:white">{{ item.platform }}</div>
          <div class="up" style="background-color:rgba(255, 255, 255, 0.12);border-top-left-radius: 3px; border-top-right-radius: 3px ">
            <div class="inner1">
              <div style="color: white; font-size: 14px;margin-top: 4px;">文章数</div>
              <div style="color: palevioletred; font-size: 25px;">{{item.papernum}}</div> 
              <div style="color: rgba(255,255,255,0.7);font-size: 12px; ">环比 
                <i :class="item.type1 === 'up' ? 'iconfont icon-xiajiangjiantou-copy' : 'iconfont icon-shangshengjiantou'" 
                :style="{color: item.type1 === 'up' ? 'green' : 'red'}"></i>
                {{ item.vary1 }}
              </div>
            </div>
            <div class="inner2">
              <div style="color: white; font-size: 14px;margin-top: 4px;">评论数</div>
              <div style="color: palevioletred; font-size: 25px;">{{ item.commentnum }}</div>
              <div style="color: rgba(255,255,255,0.7);font-size: 12px; ">环比 
                <i :class="item.type2 === 'up' ? 'iconfont icon-xiajiangjiantou-copy' : 'iconfont icon-shangshengjiantou'" 
                :style="{color: item.type2 === 'up' ? 'green' : 'red'}"></i>
                {{ item.vary2 }}</div>
              
            </div>
          </div>
          <div class="down" style="background-color:rgba(255,255,255,0.12);border-bottom-left-radius: 3px; border-bottom-right-radius: 3px ">
            <div class="inner3">
              <div style="color: white; font-size: 14px;margin-top: 4px;">有效评论</div>
              <div style="color: palevioletred; font-size: 25px;">{{item.valid}}</div>
              <div style="color: rgba(255,255,255,0.7);font-size: 12px; ">环比 
                <i :class="item.type3 === 'up' ? 'iconfont icon-xiajiangjiantou-copy' : 'iconfont icon-shangshengjiantou'" 
                :style="{color: item.type3 === 'up' ? 'green' : 'red'}"></i>
                {{item.vary3}}</div>
            </div>
            <div class="inner4">
              <div style="color: white; font-size: 14px;margin-top: 4px;">无效评论</div>
              <div style="color: palevioletred; font-size: 25px;">{{item.invalid}}</div>
              <div style="color: rgba(255,255,255,0.7);font-size: 12px; ">环比 
                <i :class="item.type4 === 'up' ? 'iconfont icon-xiajiangjiantou-copy' : 'iconfont icon-shangshengjiantou'" 
                :style="{color: item.type4 === 'up' ? 'green' : 'red'}"></i>
                {{item.vary4}}
              </div>
              
            </div>
          </div>
        </div>
      </dv-border-box1>

    </div>

  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import {usedisplayStore} from '@/stores/datadisplayStore.js'
import {useVisitorStore }from '@/stores/dashboard.js'
const displayStore = usedisplayStore();
const visitorStore=useVisitorStore()
const platformData = ref([])


const createChart1 = async ()=>{
  var dom = document.getElementById('chart1');
    var myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    
    let option1 = displayStore.option1;

    if (option1 && typeof option1 === 'object') {
      myChart.setOption(option1);
    }

    window.addEventListener('resize', myChart.resize);
}

const createChart2 = ()=>{
  var dom2 = document.getElementById('chart2');
  var dom3 = document.getElementById('chart3');
  var dom4 = document.getElementById('chart4');
  var dom5 = document.getElementById('chart5');
  let option0 = (displayStore.option2)[0];
  let option1 = (displayStore.option2)[1];
  let option2 = (displayStore.option2)[2];
  let option3 = (displayStore.option2)[3];


  var myChart2 = echarts.init(dom2, 'dark', {
    renderer: 'canvas',
    useDirtyRect: false
  });
  var myChart3 = echarts.init(dom3, 'dark', {
    renderer: 'canvas',
    useDirtyRect: false
  }); 
  var myChart4 = echarts.init(dom4, 'dark', {
    renderer: 'canvas',
    useDirtyRect: false
  });
  var myChart5 = echarts.init(dom5, 'dark', {
    renderer: 'canvas',
    useDirtyRect: false
  });

  if (option1 && typeof option1 === 'object') {
    myChart2.setOption(option0);
    myChart3.setOption(option1);
    myChart4.setOption(option2);
    myChart5.setOption(option3);
  }

}

const createChart3 = ()=>{
  var dom = document.getElementById('chart6');
    var myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    let option1 = displayStore.option3;



if (option1 && typeof option1 === 'object') {
  myChart.setOption(option1);
}
}



const iconstyle = (data1,data2)=>{
  const icon =  (data1-data2) > 0 ? 'iconfont icon-xiajiangjiantou-copy':'iconfont icon-shangshengjiantou';
  return icon;
}

const colorstyle  = (data1,data2)=>{
  const color = (data1-data2) > 0 ? 'green':'red';
  return color;
}


onMounted(async()=>{
  platformData.value = await visitorStore.getplatformData()
  await displayStore.getdata();
  createChart1()
  createChart2()
  createChart3()
})

</script>

<style scoped lang="scss">
.box{
  margin-left: 220px;
  // height: 350px;
  width: 1050px;
  position: relative;
    //position: relative;
    //top:-2000px;
    height: 300px;
    // margin: 20px;
    // margin-left: 320px;
    // background-color: rgba(0,0,0,0.7);
    border: 0;
    border-radius: 15px;
    .innerbox{
        position: absolute;
        width: 1000px;
        height: 300px;
        .subtitle{
            position: relative;
            display: block;
            margin-left: 20px;
            // margin-top: 5px;
            h3{
                position: relative;
                height: 30px;
                margin:0;
                padding-top: 3px;
                padding-left: 20px;
                line-height: 50px;
                // margin-top: 10px;
                font-weight: 600;
                font-size:x-large;
                color:white;
                text-shadow: aquamarine 1px 0 10px; 
            }
        }  
        .itemholder{
            height: 250px;
            width: 1050px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            .item{
                background-color: rgb(244, 244, 242);
                width: 250px;
                margin: 25px;
                height: 70px;
                //border:1px solid #545c64;
                box-shadow: 12px 12px 2px 1px aquamarine;
                display: flex;
                .number{
                    margin: 0;
                    padding: 10px;
                    height: 55px;
                    width: fit-content;
                    font-weight: 800;
                    font-size: 30px;
                    line-height: 55px;
                    color: aquamarine;
                    background-color:#545c64;
                    //background-color: #BEBEED;
                }
                .notes{
                    padding: 5px;
                }
            }
        }
    }
}

.box1{
  margin-left: 220px;
  height: 350px;
  width: 1050px;
  position: relative;
  .outer{
    height: 320px;
    width: 1000px;
    display: flex;
    // background-color: yellowgreen;
    position: absolute;
    left: 25px;
    top: 15px;
    .left{
      // background-color: yellow;
      margin-right: 5px;
      flex: 1;
      display: flex;
      flex-direction: column;
      .inner1,.inner2,.inner3{
        background-color: rgba(9, 9, 42, 0.8);
        flex: 1;
        margin: 5px;
        color:#fff;
      }
    }
    .right{
      // background-color: #fff;
      flex: 4;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }

}

.box2{
  // background-color: pink;
  height: 450px;
  width: 1050px;
  margin: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 220px;
  display: flex;
  .left{
    // background-color: #fff;
    flex: 2;
    display: flex;
    position: relative;
    .outer{
      height: 410px;
      width: 310px;
      position: absolute;
      top: 20px;
      left: 15px;

      display: flex;
      flex-direction: column;
      .up{
        flex: 1;
        // background-color: palegreen;
        display: flex;
        .inner1{
          background-color: rgb(227, 51, 134);
          flex: 1;
          margin-left: 5px;
          border-radius: 5%;
        }
        .inner2{
          background-color: rgb(241, 193, 65);
          flex: 1;
          margin-left: 5px;
          border-radius: 5%;

        }
      }
      .down{
        flex: 3;
        margin-left: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
        background-color: rgb(97, 161, 248);
        border-radius: 3%;
        display: flex;
        flex-direction: column;
        .outer1{
            flex: 1;
            margin-left: 5px;
            margin-top: 5px;
            margin-bottom: 5px;
            background-color: rgb(97, 161, 248);
            border-radius: 3%;
            display: flex;
            flex-direction: column;
          .inner{
            flex: 1;
            position: relative;
          }
          .inner >div >div{
            position: absolute;
          }

        }
        
      }
    }
  }
  .right{
    // background-color: plum;
    flex: 4;
    margin-left: 5px;
    display: flex;
    position: relative;
    .outer{
      height: 410px;
      width: 650px;
      position: absolute;
      top: 20px;
      left: 25px;
      display: flex;
      .left1{
        flex: 1;
        flex-direction: row;
        // justify-content: space-between;
        flex-wrap: wrap;
        width: 410px;
        // background-color: yellow;
        display: flex;
        .inner{
            // flex: 1;
            margin-right: 10px;
            // margin-bottom: 1px;
            width: calc(50% - 10px);
            height: calc(50%);
            // background-color: #fff;
        }
      }
      .right1{
        flex: 1;
        margin-bottom: 5px;
      }
    }
  }
}


.box3{
  // background-color: pink;
  height: 220px;
  width: 1050px;
  margin: 20px;
  margin-top: 5px;
  margin-left: 220px;
  display: flex;
  .outer{
    flex: 1;
    display: flex;
    position: relative;
    .inner{
      display: flex;
      height: 180px;
      width: 175px;
      position: absolute;
      top: 15px;
      left: 18px;
      border-radius: 3%;
      // background-color: #fff;

      flex-direction: column;
      .up{
        flex: 1;
        display: flex;
        .inner1,.inner2{
          flex: 1;
          margin: 1px;
          // background-color: goldenrod;
          // margin-top: 30px;
        }
      }
      .down{
        flex: 1;
        display: flex;
        .inner3,.inner4{
          flex: 1;
          margin: 1px;
          // background-color: rgb(145, 145, 22);

        }
      }
    }
    
  }
}
</style>