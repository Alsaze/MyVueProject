import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/main.vue";
import Profile from "@/pages/profile.vue";
import Help from "@/pages/help.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/help',
        component: Help
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