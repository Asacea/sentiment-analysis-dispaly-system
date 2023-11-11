<template>
    <div class="container">
        <div class="left">
            <div class="l1 outer">
                <dv-border-box12 >
                    <div class="inner" id="chart-l-1"></div>
                </dv-border-box12>
            </div>
            <div class="l2 outer">
                <dv-border-box12 >
                    <div class="inner" id="chart-l-2"></div>
                </dv-border-box12>
            </div>
            <div class="l3 outer">
                <dv-border-box1 >
                    <div class="inner" id="chart-l-3"></div>
                </dv-border-box1>
            </div>
        </div>
        <div class="mid">
            <div class="m1 outer">
                <dv-border-box1>
                    <div class="inner" id="chart-m-1"></div>
                </dv-border-box1>
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
        flex:2;
        display: flex;
        flex-direction: column;
        .l1{
            flex: 5;
        }
        .l2{
            flex: 5;
        }
        .l3{
            flex: 4;
        }
    }
    .mid{
        flex: 2;
        display: flex;
        flex-direction: column;
        .m1{
            flex: 1;
        }
        .m2{
            flex: 1;
        }

    }
    .right{
        flex:3;
        display: flex;
        flex-direction: column;
        .r1{
            flex: 2;
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
