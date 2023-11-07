<template>
    <div class="layout">
        <div class="sidebar">
            <!-- <h3 style="color:#ffd04b">管理员界面</h3> -->
            <i class="iconfont icon-yonghu"></i>
            <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
            >
                <el-menu-item index="1">
                    <span><RouterLink to="/admin/dashboard">管理版面</RouterLink></span>
                </el-menu-item>
                <el-menu-item index="2">
                    <span><RouterLink to="/screen">大屏展示</RouterLink></span>
                </el-menu-item>
                <!-- <el-menu-item index="3">
                    <span><RouterLink to="/admin/dashboard">校园专属定制</RouterLink></span>
                </el-menu-item> -->
            </el-menu>
        </div>
        <div class="board"><RouterView/></div>
        
    </div>
</template>
<script setup>
import {RouterLink} from 'vue-router'
import {RouterView} from 'vue-router'
</script>
<style scoped lang="scss">
.layout{
    position: absolute;
    top:0;
    //left: 0;
    //right: 0;
    //bottom: 0;
    background-color: aliceblue;
    //color:white
    
}
.sidebar{
    position: fixed;
    top:0;
    height: 100%;
    width: 300px;
    text-align: center;
    background-color: #545c64;
    padding-top: 30px;
    .el-menu-vertical-demo{
        margin-top: 30px;
        height: 100%;
        &:first-child{
            margin-top: 60px;
        }
    }
}
a{
    text-align: center;
    text-decoration: none;
    color: white;
}
a:hover{
    color: #ffd04b;
}
.iconfont{
    font-size: 50px;
    color: #ffd04b;
}
</style>
