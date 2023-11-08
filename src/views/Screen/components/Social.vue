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
                    <div class="inner" id="chart-l-2"></div>
                </dv-border-box10>
            </div>
            <div class="l3 outer">
                <dv-border-box8 :dur="5">
                    <div class="inner" id="chart-l-3"></div>
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
import {ref,onMounted} from 'vue'
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
        title:{
            text:'考研学校热度排行榜',
            //textAlign:'center',
            textStyle:{
                color: '#1687D7',
        },
        },
        yAxis: { 
            type: 'category',
            data: ['武大', '北大', '清华', '上交', '复旦'],
            axisLabel:{
                fontSize:'10'
            }
        },
        xAxis: {
            type: 'value'
        },
        series: [
            {
            data: [120, 200, 150, 80, 70],
            type: 'bar',
            backgroundColor:'rgba(0,0,0,0)',
            }
        ],
        backgroundColor:'rgba(0,0,0,0)',
    };
    option && myChart.setOption(option);
}


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
</style>
