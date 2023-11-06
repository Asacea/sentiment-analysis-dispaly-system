<template>
    <div class="container">
        <el-form :model="form" label-width="80px">
            <el-form-item label="你的身份">
                <el-select v-model="formdata.userType">
                    <el-option label="visitor" value="visitor"/>
                    <el-option label="admin" value="admin"/>
                </el-select>
            </el-form-item>
            <el-form-item label="你的名字">
                <el-input v-model="formdata.username" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item label="你的密码">
                <el-input v-model="formdata.userpswd" placeholder="请输入密码"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleClick" size="large" id="btn">登录</el-button>
            </el-form-item>        
        </el-form>
        <div class="toSignUp">
            <RouterLink to="/signup">注册</RouterLink> | 登录
        </div>
    </div>
        
</template>
<script setup>
import {reactive} from 'vue'
import { RouterLink } from 'vue-router';
import axios from 'axios'
import { useRouter } from 'vue-router';
const router=useRouter()
const formdata=reactive({
    userType:'',
    username:'',
    userpswd:''
})
const handleClick=function(){
    console.log(formdata.userType)
    // axios.get(url,{
    //     userType:formdata.userType,
    //     username:formdata.username,
    //     userpswd:formdata.userpswd
    // }).then(res=>{
    //     console.log(res.data)
    //     if(res.data.msg===1){
            
    //     }
    // })
}
</script>
<style lang="scss">
.container{
    position: absolute;
    width: 500px;
    height: 190px;
    border: 1px solid aquamarine;
    padding: 30px;
    //box-shadow: 3px 3px 6px 1px aquamarine;
    border-radius: 1%;
}
.toSignUp{
    position: absolute;
    right: 30px;
    bottom: 30px;
    color: white;
    a{
        color: aquamarine;
    }
    
}
.el-form-item__label{
    color:aquamarine
}
#btn{
    color: aquamarine;
    background:none;
    border: 1px solid aquamarine;
}
</style>
