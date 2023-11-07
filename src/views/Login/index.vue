<template>
    <div class="layout">
        <div class="container">
            <RouterView/>
        </div>
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router';
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
        position: absolute;
        width: 500px;
        height: 190px;
        //border: 1px solid black;
        padding: 30px;
        border-radius: 1%;
        background-color: rgba(255,255,255,0.4);
        box-shadow: 3px 3px 2px 1px rgba(255, 255, 255, 0.2);
    }
}
</style>
