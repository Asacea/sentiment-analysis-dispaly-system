import { createRouter ,createWebHistory} from "vue-router";
const router=createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            redirect:'/login'
        },
        {
            path:'/login',
            component:()=>import('@/views/Login/index.vue'),
            children:[
                {
                    path:'',
                    component:()=>import('@/views/Login/components/Signin.vue')
                },
                {
                    path:'/signup',
                    component:()=>import('@/views/Login/components/Signup.vue')
                }
            ]
        },
        {
            path:'/screen',
            component:()=>import('@/views/Screen/index.vue')
        },
        {
            path:'/Admin',
            component:()=>import('@/views/Admin/index.vue'),
            children:[
                {
                    path:'/1',
                    component:()=>import('@/views/Admin/Dashboard.vue')
                },
            ]
        }
    ]
})
export default router

