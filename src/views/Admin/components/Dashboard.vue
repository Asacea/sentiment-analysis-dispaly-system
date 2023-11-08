<template>
    <div class="screen-adapter">
        <div class="content-wrap" :style="style">
            <div class="module">
            <div class="subtitle">
                <!-- <i class="iconfont icon-shuju"></i> -->
                <h1>>网络舆情数据</h1>
            </div>
            <div class="itemholder">
                <div class="item">
                    <p class="number">11111</p>
                    <p class="notes">收集到来自bilibili的278372条数据</p>
                </div>
                <div class="item">
                    <p class="number">278372</p>
                    <p class="notes">收集到来自bilibili的278372条数据</p>
                </div>
                <div class="item">
                    <p class="number">278372</p>
                    <p class="notes">收集到来自bilibili的278372条数据</p>
                </div>
                <div class="item">
                    <p class="number">278372</p>
                    <p class="notes">收集到来自bilibili的278372条数据</p>
                </div>
                <div class="item">
                    <p class="number">278372</p>
                    <p class="notes">收集到来自bilibili的278372条数据</p>
                </div>
                <div class="item">
                    <p class="number">278372</p>
                    <p class="notes">收集到来自bilibili的278372条数据</p>
                </div>
            </div>    
            </div>
            <div class="module">
            <div class="subtitle">
                <h1>>浏览量记录</h1>
            </div>
            <div class="itemholder" id="visitorViews"></div>
            </div>
            <div class="module">
            <div class="subtitle">
                <h1>>访客足迹</h1>
            </div>
            <div class="Admin">
                <el-table :data="visitorStore.visitorRecordData" height="250" style="width: 100%" class="Table">
                    <el-table-column prop="date" label="最近访问时间" width="200" />
                    <el-table-column prop="name" label="姓名" width="200" />
                    <el-table-column prop="count" label="访问次数"  width="200"/>
                    <el-table-column prop="school" label="学校" />
                </el-table>
            </div>
            </div>
            <div class="module">
            <div class="subtitle">
                <h1>>大屏管理</h1>
            </div>
            <div class="Admin">
                <el-table 
                :data="statusStore.ScreentableData" 
                height="250" 
                style="width: 100%;"
                class="Table"
                >
                    <el-table-column prop="topic" label="话题" width="200" />
                    <el-table-column prop="clicks" label="点击量" width="200" />
                    <el-table-column prop="type" label="类型" width="200" />
                    <el-table-column fixed="right" label="展示开关" >
                        <template #default="scope">
                            <el-switch
                            v-model="statusStore.ScreentableData[scope.$index].value"
                            class="ml-2"
                            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
                          />
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import * as echarts from 'echarts';
<<<<<<< HEAD
import { onMounted, ref, defineProps, onBeforeUnmount } from 'vue';
=======
import { onMounted, ref } from 'vue';
import useStatusStore from '@/stores/screenStatus.js'
import useVisitorStore from '@/stores/dashboard.js'
const statusStore=useStatusStore()
const visitorStore=useVisitorStore()

>>>>>>> eb9a25a9eed6b8095372d64b9180c3f9590c7adf
function createChart(){
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
                data:visitorStore.visitorViewsData,
                type:'line',
                smooth:true
            }
        ]
}
option&&visitorChart.setOption(option)
console.log('sucess')
}

onMounted(()=>createChart())

// const props = defineProps({
//   w: { type: Number, default: 1000 },
//   h: { type: Number, default: 550 },
// });

// const style = ref({
//   width: `${props.w}px`,
//   height: `${props.h}px`,
//   transform: 'scale(1) translate(-50%, -50%)', // 默认不缩放，垂直水平居中
// });

// // 添加监听窗口大小变化事件
// const debounce = (fn, t) => {
//   const delay = t || 500;
//   let timer;
//   return function () {
//     const args = arguments;
//     if (timer) {
//       clearTimeout(timer);
//     }
//     const context = this;
//     timer = setTimeout(() => {
//       timer = null;
//       fn.apply(context, args);
//     }, delay);
//   };
// };



// // 获取缩放比例
// const getScale = () => {
//   console.log(window.innerHeight, window.innerWidth);
//   const w = window.innerWidth / props.w;
//   const h = window.innerHeight / props.h;
//   return w < h ? w : h;
// };

// const setScale = () => {
//   style.value.transform = `scale(${getScale()}) translate(-50%, -50%)`;
// };

// const onresize = debounce(() => setScale(), 100);
// onMounted(() => {
//   createChart();
//   setScale();
//   window.addEventListener('resize', onresize);
// });

// // 移除事件监听
// onBeforeUnmount(() => {
//   window.removeEventListener('resize', onresize);
// });


</script>
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
    height: 400px;
    margin: 20px;
    margin-left: 320px;
    background-color: rgba(0,0,0,0.7);
    border: 1px solid aquamarine;
    border-radius: 5px;
    .subtitle{
        position: inherit;
        display: flex;
        margin-left: 20px;
        margin-top: 20px;
        .iconfont{
            font-size: 50px;
            display: block;
        }
        h1{
            position: relative;
            height: 50px;
            margin:0;
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
            width: 280px;
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
