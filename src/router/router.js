import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import New from "@/pages/New";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/new',
        component: New
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;