<template>
    <div class="module">
        <dv-border-box12>
            <div class="innerbox">
             <!-- <div class="subtitle">
                    <h1>>网络舆情数据</h1>
                    <div class="itemholder">
                        <div class="item" v-for="info in visitorStore.infoSelectList">
                            <p class="number">{{info.number}}</p>
                            <p class="notes">{{info.notes}}</p>
                        </div>
                    </div>    
                </div> -->
            <div class="subtitle">
             <!-- <i class="iconfont icon-shuju"></i>  -->
            <h1>>网络舆情数据</h1>
            </div>
            <div class="itemholder">
                <div class="item" v-for="info in platformData">
                    <p class="number">{{ info.number }}</p>
                    <p class="notes">{{ info.notes }}</p>
                </div>
            </div>    
            </div>    
        </dv-border-box12>
    </div>
    <div class="module">
        <dv-border-box12>
            <div class="innerbox">
                <div class="subtitle">
                    <h1>>浏览量记录</h1>
                </div>
                <div class="itemholder" id="visitorViews"></div>
            </div>
        </dv-border-box12>  
    </div>
    <div class="module">
        <dv-border-box12>
            <div class="innerbox">
                <div class="subtitle">
                    <h1>>访客足迹</h1>
                </div>
                <div class="Admin">
                    <el-table :data="visitorData" height="250" style="width: 100%" class="Table">
                        <el-table-column prop="date" label="最近访问时间" width="200" />
                        <el-table-column prop="name" label="姓名" width="200" />
                        <el-table-column prop="count" label="访问次数"  width="200"/>
                        <el-table-column prop="school" label="学校" />
                    </el-table>
                </div>
            </div>
        </dv-border-box12>
    </div>
    <div class="module">
        <dv-border-box12>
            <div class="innerbox">
                <div class="subtitle">
                    <h1>>大屏管理</h1>
                </div>
                <div class="Admin">
                    <el-table 
                    :data="screendata" 
                    height="250" 
                    style="width: 100%;"
                    class="Table"
                    >
                        <el-table-column prop="topic" label="话题" width="100" />
                        <el-table-column prop="clicks" label="点击量" width="100" />
                        <el-table-column prop="type" label="类型" width="100" />
                        <el-table-column prop="detail" label="详情" width="560"/>
                        <el-table-column fixed="right" label="展示开关" >
                            <template #default="scope">
                                <el-switch
                                v-model="screendata[scope.$index].value"
                                class="ml-2"
                                style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
                              />
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </dv-border-box12>
        
    </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref, watch ,computed} from 'vue';
// import useStatusStore from '@/stores/screenStatus.js'

import {useVisitorStore }from '@/stores/dashboard.js'
import useStatusStore from '../../../stores/screenStatus.js';
const statusStore=useStatusStore()
const visitorStore=useVisitorStore()
// 各平台数据
const platformData = ref([])
const visitorData = ref([])
// 大屏管理数据
const screendata = ref([])

// 获取数据
const createChart=async()=>{
    // 获取各平台相关数据总数
    platformData.value = await visitorStore.getplatformData()
    // console.log(platformData)

    // 获取浏览量数据
    const viewsData =await visitorStore.getViewsData()
    // console.log(viewsData)
   
    // console.log(visitorData)

    // 获取访客数据
    visitorData.value = await visitorStore.getVisitorData()
    // console.log(visitorData)

    // 获取管理大屏数据
    screendata.value = await statusStore.getscreenData()

    var visitorChart=echarts.init(document.getElementById('visitorViews'),'dark')
    var option={
        backgroundColor:'rgba(0,0,0,0)',
        xAxis:{
            type:'category',
            data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisLabel:{
                color:'#fff'
            }
        },
        yAxis:{
            type:'value',
            axisLabel:{
                color:'#fff'
            }
        },
        series:[
            {
                data:viewsData,
                type:'line',
                smooth:true
            }
        ]
}
option&&visitorChart.setOption(option)
console.log('sucess')
}
onMounted(()=>createChart())
watch(()=>JSON.parse(JSON.stringify(screendata.value)),(newScreenData,oldScreenData)=>{
    //要不直接就把改变后的原封不动的传回去，直接覆盖了原来的数据
    console.log("new",newScreenData)
    console.log('old',oldScreenData)
    // console.log(JSON.parse(newScreenData),JSON.parse(oldScreenData))
    if(oldScreenData.length!=0)
    {
        for(let i = 0;i<newScreenData.length;i++){
            // console.log(newScreenData[i].value)
            if(newScreenData[i].value!=oldScreenData[i].value){
                // console.log(newScreenData[i].id)
                // console.log(oldScreenData[i].value)
                statusStore.sendSwitchStateToBackend({id:newScreenData[i].id,showSwitch:newScreenData[i].value})
            }
        }
    }
       
    
}, { deep: true })
</script>


<!-- </> -->
<style scoped lang="scss">
//   .content-wrap {
//     transform-origin: 0 0;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     padding: 18px 64px;
//   }

// .screen-adapter {
//   width: 100vw;
//   min-height: 100%;
//   max-height: 100vh;
//   overflow: hidden;
// //   background: url("../../assets/charts/icon-bg.png") no-repeat;
//   background-size: 100% 100%;
// }
.module{
    //position: relative;
    //top:-2000px;
    height: 400px;
    margin: 20px;
    margin-left: 320px;
    background-color: rgba(0,0,0,0.7);
    border: 0;
    border-radius: 15px;
    .innerbox{
        // position: inherit;
        width: 1080px;
        height: 400px;
        .subtitle{
            position: relative;
            display: block;
            margin-left: 20px;
            margin-top: 20px;
            h1{
                position: relative;
                height: 50px;
                margin:0;
                padding-top: 10px;
                padding-left: 20px;
                line-height: 50px;
                margin-top: 10px;
                font-weight: 600;
                font-size:x-large;
                color:white;
                text-shadow: aquamarine 1px 0 10px; 
            }
        }  
        .itemholder{
            height: 300px;
            width: 1050px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            .item{
                background-color: rgb(244, 244, 242);
                width: 250px;
                margin: 25px;
                height: 100px;
                //border:1px solid #545c64;
                box-shadow: 12px 12px 2px 1px aquamarine;
                display: flex;
                .number{
                    margin: 0;
                    padding: 10px;
                    height: 80px;
                    width: fit-content;
                    font-weight: 800;
                    font-size: xx-large;
                    line-height: 80px;
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
    
    
    #visitorViews{
        color: white;
    }
    .Admin{
        height: 300px;
        width: 975px;
        padding: 0 50px;
        margin-top: 20px;
        .Table{
            --el-table-border-color: rgba(127, 255, 212, 0.3);
        }
        :deep(.el-table){
            background-color: transparent;
         }
         :deep(.el-table__expanded-cell){
            background-color: transparent;
         }
         :deep(.el-table th){
            background-color: #545c64 !important;
            color: aquamarine;
            font-size: 1rem;
         }
         :deep(.el-table tr){
            background-color: transparent !important;
            font-weight: 500;
            color: #FFFFFF;
         }
         :deep(.el-table td){
            background-color: transparent !important;
         }
         .el-table__fixed::before{
            background-color: transparent;
         }
    
        }
    
}
</style>
