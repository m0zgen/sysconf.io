import { createRouter, createWebHistory } from 'vue-router';

import HomePage from "../components/StartPage.vue";
import Conf2024 from "../components/2024/Conf2024.vue";
import Conf2025 from "@/components/2025/Conf2025.vue";
import About from "@/views/About.vue";


const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/2024',
        component: Conf2024,
    },
    ,
    {
        path: '/2025',
        component: Conf2025,
    },
    {
        path: '/about',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
