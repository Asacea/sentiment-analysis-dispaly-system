<template>
    <div class="layout">
        <canvass></canvass>
        <div class="container">
            <RouterView/>
        </div>
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
import canvass from '@/views/bcg1.vue'
</script>
<style scoped lang="scss">
.layout{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #091629;
    display: flex;
    align-items: center;
    justify-content: center;
    .container{
        //position: relative;
        position: fixed;
        width: 500px;
        height: 250px;
        //border: 1px solid black;
        // padding: 30px;
        border-radius: 5px;
        // background-color: rgba(255,255,255,0.4);
        // box-shadow: 3px 3px 2px 1px rgba(255, 255, 255, 0.2);
    }
   // background: url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg') no-repeat;
    //background-size: 100% 130%;
}
</style>
