import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/main.vue";
import Profile from "@/pages/profile.vue";
import Help from "@/pages/help.vue";
import Bonus from "@/pages/bonus.vue";
import Divisions from "@/pages/divisions.vue";

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
        path: '/bonus',
        component: Bonus
    },
    {
        path: '/divisions',
        component: Divisions
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