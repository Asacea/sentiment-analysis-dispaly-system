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
            component:()=>import('@/views/Screen/index.vue'),
            redirect:'/screen/default',
            children:[
                {
                    path:'/screen/default',
                    name:'default',
                    component:()=>import('@/views/Screen/components/Default.vue')
                },
                {
                    path:'/screen/social/:id',
                    name:'社科',
                    component:()=>import('@/views/Screen/components/Social.vue')
                },
                {
                    path:'/screen/tech/:id',
                    name:'科技',
                    component:()=>import('@/views/Screen/components/Tech.vue')
                },
                {
                    path:'/screen/school/:school',
                    name:'学校专属定制',
                    component:()=>import('@/views/Screen/components/School.vue')
                }
            ]
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
                {
                    path:'/admin/data',
                    name:'dataplay',
                    component:()=>import('@/views/Admin/Components/datadisplay.vue')
                },
            ],
            redirect:'/admin/dashboard'
        }
    ]
})
export default router

