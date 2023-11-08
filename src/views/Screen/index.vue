<template>
    <div class="layout">
        <Header/>
        <RouterView/>
    </div>
</template>
<script setup>

import Header from './components/Header.vue'
import {RouterView} from 'vue-router'
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
}
</style>
