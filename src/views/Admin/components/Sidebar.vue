<template>
    <div class="sidebar">
        <div class="icon">
            这里是一个图标，不然感觉太空了
        </div>
        <ul>
            <li>
                <RouterLink to="/dashboard">管理版面</RouterLink>
            </li>
            <li>
                <RouterLink to="/screen">管理版面</RouterLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
import {RouterLink} from 'vue-router'
</script>
<style scoped lang="scss">
.sidebar{
    height: 700px;
    width: 250px;
    position: fixed;
    //background-color: #fff;
    border: 1px solid aquamarine;
    margin: 20px;
    border-radius: 30px;
    //box-shadow: 0 0 10px 2px aquamarine;
    .icon{
        height: 100px;
        width: 100px;
        border: 1px solid aquamarine;
        position: relative;
        left: 75px;
        top:30px
    }
    ul{
        list-style:none;
        padding: 0 20px;
        margin-top: 50px;
        position: relative;
        li{
            height: 60px;
            width: 100%;
            //background-color: #fff;
            border-bottom: 1px solid aquamarine;
            text-align: center;
            a{
                line-height: 60px;
                color: white;
                text-decoration: none;
            }
        }
    }
}
</style>
