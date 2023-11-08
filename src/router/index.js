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
            path:'/admin',
            component:()=>import('@/views/Admin/index.vue'),
            children:[
                {
                    path:'/admin/dashboard',
                    name:'dashboard',
                    component:()=>import('@/views/Admin/Components/Dashboard.vue')
                },
            ],
            redirect:'/admin/dashboard'
        }
    ]
})
export default router
