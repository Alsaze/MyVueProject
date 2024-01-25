import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main";
import Profile from "@/pages/Profile.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/profile',
        component: Profile
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;