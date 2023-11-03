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
            component:()=>import('@/views/Login/index.vue')
        },
        {
            path:'/screen',
            component:()=>import('@/views/Screen/index.vue')
        },
        {
            path:'/Admin',
            component:()=>import('@/vies/Admin.index.vue'),
            children:[
                {
                    path:'/dashboard',
                    component:()=>import('@/views/Admin/Dashboard.vue')
                },
                {
                    path:'/screen2',
                    component:()=>import('@/views/Screen/index.vue')
                }
            ]
        }
    ]
})
export default router

