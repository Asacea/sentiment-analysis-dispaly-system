<template>
    <div class="container_signin">
        <el-form :model="formdata" :rules="rules" ref="myForm" label-width="80px">
            <el-form-item label="你的身份" prop="usertype">
                <el-select v-model="formdata.usertype">
                    <el-option label="visitor" value="visitor"/>
                    <el-option label="admin" value="admin"/>
                </el-select>
            </el-form-item>
            <el-form-item label="你的名字" prop="username">
                <el-input v-model="formdata.username" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item label="你的密码" prop="userpswd">
                <el-input v-model="formdata.userpswd" placeholder="请输入密码" type="password"/>
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
import {reactive, ref} from 'vue'
import { RouterLink } from 'vue-router';
import axios from 'axios'
import { useRouter } from 'vue-router';
const router=useRouter()
const formdata=reactive({
    usertype:'',
    username:'',
    userpswd:''
})
const rules = {
    usertype:[
        {required:true,message:'不能为空',trigger:blur}
    ],
    username:[
        {required:true,message:'用户名不能为空',trigger:blur}
    ],
    userpswd:[
        {required:true,message:'密码不能为空',trigger:blur}
    ],

}
const myForm = ref(null)
const handleClick=function(){
    console.log(formdata.usertype)
    // router.push('/screen')
    myForm.value.validate((valid) => {
        if (valid) {
            ElMessage.success('表单验证通过'); // 成功提示
            // 后端进行用户名密码验证

            // 跳转到对应管理员/访客对应页面
            if(formdata.usertype==='visitor'){
                router.push('/screen')
            }else{
                router.push('/Admin')          
            }
        } else {
            ElMessage.error('表单验证失败，请检查输入'); // 失败提示
        }
      });
    // router.push('/Admin')
    // axios.get(url,{
    //     userType:formdata.userType,
    //     username:formdata.username,
    //     userpswd:formdata.userpswd
    // }).then(res=>{
    //     console.log(res.data)
    //     if(res.data.msg===1){
            
    //     }
    // })
    router.push('/admin')
}
</script>
<style lang="scss">
.layout
{
    background: url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg') no-repeat;
    background-size: 100% 130%;
}

.container_signin{
    position: absolute;
    width: 500px;
    height: 180px;
    border: 1px solid aquamarine;
    padding: 30px;
    //box-shadow: 3px 3px 6px 1px aquamarine;
    border-radius: 2%;
    opacity: 0.5; /* 设置透明度为 50% */
    background-color: black; /* 设置背景颜色为蓝色 */
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
