<template>
    <div class="container">
        <el-form :model="form" label-width="80px">
            <el-form-item label="你的学校">
                <el-input v-model="formdata.userschool" placeholder="请输入学校名"/>
            </el-form-item>
            <el-form-item label="你的名字">
                <el-input v-model="formdata.username" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item label="你的密码">
                <el-input v-model="formdata.userpswd" placeholder="请输入密码"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleClick" size="large" id="btn">注册</el-button>
            </el-form-item>        
        </el-form>
        <div class="toSignUp">
            注册 | <RouterLink to="/login">登录</RouterLink>
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
    userschool:'',
    username:'',
    userpswd:''
})
const handleClick=function(){
    console.log(formdata.userschool)
    // axios.get(url,{
    //     userType:formdata.userschool,
    //     username:formdata.username,
    //     userpswd:formdata.userpswd
    // }).then(res=>{
    //     console.log(res.data)
    //     if(res.data.msg===1){
            
    //     }
    // })
    router.push('/screen')
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
