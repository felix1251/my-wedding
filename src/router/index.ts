import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: { name: "Home" },
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/invitation",
        name: "Invitation",
        component: () => import("../views/Invitation.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    next();
});

router.afterEach(() => {});

export default router;
