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
import { useRouter } from 'vue-router';
import {useUserStore} from '@/stores/user.js'
const userStore = useUserStore()
const router=useRouter()
const formdata=ref({
    usertype:'',
    username:'',
    userpswd:''
})
const rules = {
    usertype:[
        {required:true,message:'不能为空',trigger: 'blur' }
    ],
    username:[
        {required:true,message:'用户名不能为空',trigger:'blur'}
    ],
    userpswd:[
        {required:true,message:'密码不能为空',trigger:'blur'}
    ],

}
const myForm = ref(null)
import { loginAPI,getuserinfoAPI } from '../../../api/user';
import { useTokenStore } from '@/stores/token.js';
const tokenStore = useTokenStore()

const handleClick= ()=>{
    myForm.value.validate(async (valid) => {
        if(valid){
            let result = await loginAPI(formdata.value);
            ElMessage.success(result.msg?result.msg:'登录成功')
            tokenStore.setToken(result.data)

            // 获取用户信息
            let userInfo = await getuserinfoAPI();
            console.log(userInfo);
            userStore.screenTitle = ''


            // 跳转到对应管理员/访客对应页面
            if(userInfo.data.usertype ==='visitor'){
                router.push('/screen')
            }else{
                router.push('/Admin')          
            }

        }

    });

}
</script>
<style  lang="scss">

.container_signin{
    position: absolute;
    width: 500px;
    height: 180px;
    border: 1px solid aquamarine;
    padding: 30px;
    //box-shadow: 3px 3px 6px 1px aquamarine;
    border-radius: 5px;
    // opacity: 0.5; /* 设置透明度为 50% */
    background-color: rgba(255,255,255,0.2); /* 设置背景颜色 */
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
