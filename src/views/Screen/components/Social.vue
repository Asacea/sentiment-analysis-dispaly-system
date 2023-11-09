<template>
    <div class="container">
        <div class="left">
            <div class="l1 outer">
                <dv-border-box8 :dur="5">
                    <div class="inner" id="chart-l-1"></div>
                </dv-border-box8>
            </div>
            <div class="l2 outer">
                <dv-border-box10 >
                    <div class="inner" >
                        <h4 style="color:#1FACED;margin-left:86px">各平台讨论度实时排名</h4>
                        <div id="chart-l-2">
                            <div class="chart-l-2-i" v-for="i in hotList.sort((a,b)=>a.rank-b.rank)">
                                <h3 :style="{color:hotColor[i.rank]}" style="font-style: italic">0{{ i.rank }}</h3>
                                <h4 style="margin: 0 10px">{{i.name}}</h4>
                                <div :style="{color:hotColor[i.rank]}">
                                    <i class="iconfont icon-xiaopangchetubiao-copy" v-for="i in (5-i.rank)" ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </dv-border-box10>
            </div>
            <div class="l3 outer">
                <dv-border-box8 :dur="5">
                    <div class="inner" id="chart-l-3" style="color:white">
                        这玩意没有!!!
                    </div>
                </dv-border-box8>
            </div>
        </div>
        <div class="mid">
            <div class="m1 outer">
                <dv-border-box11 title="考研缩招话题热度分布地图" :title-width="400" :animate="false">
                    <div class="inner" id="chart-m-1"></div>
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
                <dv-border-box12 >
                    <div class="inner" id="chart-r-1"></div>
                </dv-border-box12>
            </div>
            <div class="r2 outer">
                <dv-border-box8 :dur="5" :reverse="true">
                    <div class="inner" id="chart-r-2"></div>
                </dv-border-box8>
            </div>
        </div>
    </div>

</template>
<script setup>
import {useRoute,onBeforeRouteUpdate} from 'vue-router'
import {ref,onMounted,reactive} from 'vue'
import * as echarts from 'echarts';
const route = useRoute()
const screenId=ref(0)
onBeforeRouteUpdate(()=>{
    screenId.value=route.params.id
    console.log(screenId.value)

})

function createChartl1(){
    var myChart = echarts.init(document.getElementById('chart-l-1'),'dark');
    var option = {
        grid:{
            width:'80%',
            right:'4%',
            height:'66%',
            top:'20%'
        },
        title:{
            text:'考研学校热度排行榜',
            //textAlign:'end',
            textStyle:{
                color: '#1FACED',
            },
            boundaryGap: false
        },
        yAxis: { 
            type: 'category',
            data: ['武前后大', '北大', '清华', '上交', '复旦','人大','哈工'],
            axisLabel:{
                fontSize:'10',
                interval: 0, // 让字体完全显示


            },
            axisTick:{
                show:false
            }
        },
        xAxis: {
            type: 'value',
        },
        series: [
            {
            data: [120, 200, 150, 80, 70,40,20],
            type: 'bar',
            backgroundColor:'rgba(0,0,0,0)',
            }
        ],
        backgroundColor:'rgba(0,0,0,0)',
    };
    option && myChart.setOption(option);
}
const hotList=ref([
    {name:'知乎',rank:2},{name:'微博',rank:1},{name:'bilibili',rank:3},{name:'贴吧',rank:4},{name:'清水河畔',rank:5}
])
const hotColor=ref({
    1: 'red',
    2:'orange',
    3:'rgb(255, 196, 0)',
    4:'yellow',
    5:'lightgreen'
})
onMounted(()=>{
    createChartl1()
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
        flex:1;
        display: flex;
        flex-direction: column;
        .l1{
            flex: 2;
        }
        .l2{
            flex: 1;
        }
        .l3{
            flex: 2;
        }
    }
    .mid{
        flex: 2;
        display: flex;
        flex-direction: column;
        .m1{
            flex: 5;
        }
        .m2{
            flex: 3;
        }

    }
    .right{
        flex:1;
        display: flex;
        flex-direction: column;
        .r1{
            flex: 1;
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
#chart-l-2{
    //background-color: #fff;
    position:relative;
    width: 96%;
    top:0;
    padding: 10px;
    margin: 0 2%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;

    .chart-l-2-i{
        //background-color: #c1b1b1;
        margin-bottom: 5px;
        height: 25px;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        font-family:'Times New Roman', Times, serif;
        color:white
        
    }
}
</style>
