import { createRouter, createWebHistory } from 'vue-router'
import homeComponent from "@/analytics/pages/home.component.vue";
import healthChecksComponent from "@/analytics/pages/health-checks.component.vue";
import pageNotFoundComponent from "@/public/pages/page-not-found.component.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: 'home' },
    { path: '/home', name: 'home', component: homeComponent },
    { path: '/analytics/health-checks', name: 'health-checks', component: healthChecksComponent },
    { path: '/:catchAll(.*)', name: 'not-found', component: pageNotFoundComponent}
  ]
})

export default router
