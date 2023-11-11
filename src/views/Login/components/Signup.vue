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
                <el-input type="password" v-model="formdata.confirmpassword" placeholder="请再次输入密码" @blur="updateFormData"></el-input>
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
import {reactive,ref} from 'vue'
import { RouterLink } from 'vue-router';
import axios from 'axios'
import { useRouter } from 'vue-router';
// import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from 'element-plus';

const router=useRouter()
const formdata=reactive({
    userschool:'',
    usertype:'',
    username:'',
    userpswd:'',
    confirmpassword:''
})
const rules = {
    userschool:[
        {required:true,message:'学校不能为空',trigger:blur}
    ],
    usertype:[
        {required:true,message:'不能为空',trigger:blur}
    ],
    username:[
        {required:true,message:'用户名不能为空',trigger:blur}
    ],
    userpswd:[
        {required:true,message:'密码不能为空',trigger:blur}
    ],
    confirmPassword:[
        {required:true,message:'密码不能为空',trigger:blur},
        {
          validator: (rule, value, callback) => {
            // console(formdata.value.userpswd)
            if (value !== formdata.userpswd) {
              callback(new Error('两次输入的密码不一致'));
              
            } else {
              callback();
            }
          },
          trigger: 'blur',
        },
    ]

}
const updateFormData = () => {
      // 在失去焦点时更新表单数据
    const validatePassword = () => {
    try {
      myForm.value.validateField('confirmPassword');
    } catch (error) {
      // 捕获异常，不进行额外的处理或输出
    }
};


};
const myForm = ref(null)
const handleClick=()=>{
    // console.log(myForm.value)
    myForm.value.validate((valid) => {
        if (valid) {
            ElMessage.success('表单验证通过'); // 成功提示
            // 将数据保存在后端
            
            // 页面跳转至登录页
            // router.push('/')  
        } else {
            ElMessage.error('表单验证失败，请检查输入'); // 失败提示
        }
      });
    // 先验证表单数据是否未空

    // axios.get(url,{
    //     userType:formdata.userschool,
    //     username:formdata.username,
    //     userpswd:formdata.userpswd
    // }).then(res=>{
    //     console.log(res.data)
    //     if(res.data.msg===1){
            
    //     }
    // })
    // router.push('/')
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
