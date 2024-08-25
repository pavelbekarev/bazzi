import MainPage from "@/pages/MainPage.vue";
import PageAbout from "@/pages/PageAbout.vue";
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    routes: [{
      path: '/',
      component: MainPage
    },
    {
      path: '/about',
      component: PageAbout,
    }],
    history: createWebHistory()
})