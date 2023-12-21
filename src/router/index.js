import { createRouter, createWebHistory } from "vue-router";
import token from "../utils/token.js";
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/Login/index.vue"),
    name: "start",
    children: [
      {
        path: "",
        name: "login",
        component: () => import("@/views/Login/components/Signin.vue"),
      },
      {
        path: "/signup",
        component: () => import("@/views/Login/components/Signup.vue"),
      },
    ],
  },
  {
    path: "/screen",
    component: () => import("@/views/Screen/index.vue"),
    name: "screen",
    meta: {
      roles: ["admin", "visitor"],
    },
    redirect: "/screen/default",
    children: [
      {
        path: "/screen/default",
        name: "default",
        component: () => import("@/views/Screen/components/Default.vue"),
      },
      {
        path: "/screen/1",
        name: "social",
        component: () => import("@/views/Screen/components/Social.vue"),
      },
      {
        path: "/screen/2",
        name: "tech",
        component: () => import("@/views/Screen/components/Tech.vue"),
      },
      {
        path: "/screen/3",
        name: "web3.0",
        component: () => import("@/views/Screen/components/Web3.vue"),
      },
      {
        path: "/screen/4",
        name: "university",
        component: () => import("@/views/Screen/components/School.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("@/views/Admin/index.vue"),
    name: "admin",
    meta: {
      roles: ["admin"],
    },
    children: [
      {
        path: "/admin/dashboard",
        name: "dashboard",
        component: () => import("@/views/Admin/Components/Dashboard.vue"),
      },
      {
        path: "/admin/data",
        name: "dataplay",
        component: () => import("@/views/Admin/Components/datadisplay.vue"),
      },
    ],
    redirect: "/admin/dashboard",
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});
router.beforeEach((to, from, next) => {
  console.log("路由守卫");
  token.getTokenfromLoaclStorage();
  console.log(to.path);
  if (to.path == "/login") {
    console.log("在login");
    next();
  } else {
    console.log("不是login");
    if (token.isAuthenticated && token.usertype) {
      if (to.meta.roles.includes(token.usertype)) {
        console.log("访问", to.name);
        next();
      } else {
        console.log("没有访问权限");
        next("/login");
      }
    } else {
      console.log("没有登录信息");
      next("/login");
    }
  }
});
export default router;
