<template>
    <div class="container_signup">
        <el-form :model="formdata" :rules="rules" ref="myForm" label-width="80px">
            <el-form-item label="你的学校" prop="userschool">
                <el-input v-model="formdata.userschool" placeholder="请输入学校名"/>
            </el-form-item>
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
                <el-input type="password" v-model="formdata.userpswd" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
                <el-input type="password" v-model="formdata.confirmpassword" placeholder="请再次输入密码" ></el-input>
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
import {reactive,ref,toRefs,computed,watch} from 'vue'
import { RouterLink } from 'vue-router';
import axios from 'axios'
import { useRouter } from 'vue-router';
// import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from 'element-plus';

const router=useRouter()
const formdata=ref({
    userschool:'',
    usertype:'',
    username:'',
    userpswd:'',
    confirmpassword:''
})


// 校验密码的函数
const checkRePassword = (rule, value, callback) => {
  if(formdata.value.confirmpassword===''){
    callback(new Error('请再次确认密码'))
  }else if(formdata.value.confirmpassword !== formdata.value.userpswd){
    callback(new Error('请确认两次输入的密码一致'))
  }else{
    callback();
  }
}




const rules = {
  userschool: [{ required: true, message: '学校不能为空', trigger: 'blur' }],
  usertype: [{ required: true, message: '不能为空', trigger: 'blur' }],
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  userpswd: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
  confirmPassword: [{ validator: checkRePassword, trigger: 'change' }],
};



import { signinAPI } from '../../../api/user';
import { ElMessage } from 'element-plus'
const myForm = ref(null)
// 点击注册
const handleClick=async()=>{
    myForm.value.validate(async(valid)=>{
        if(valid){
            let result = await signinAPI(formdata.value);
            // ElMessage({ type: 'success', message: '注册成功' });
            ElMessage.success(result.msg?result.msg:'注册成功')

            // 延时1秒后跳转页面
            setTimeout(() => {
              // 跳转页面
              router.push('/');
            }, 1000);
        }
    })
    

}
</script>
<style lang="scss">

.container_signup{
    position: absolute;
    width: 500px;
    height: 280px;
    border: 1px solid aquamarine;
    padding: 30px;
    //box-shadow: 3px 3px 6px 1px aquamarine;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.5); /* 设置背景颜色 */

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
