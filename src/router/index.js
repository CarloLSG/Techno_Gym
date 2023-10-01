import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: 'home' },
    { path: '/home', name: 'home', component: () => import("../analytics/pages/home.component.vue") },
    { path: '/analytics/health-checks', name: 'health-checks', component: () => import("../analytics/pages/health-checks.component.vue") },
    { path: '/:catchAll(.*)', name: 'not-found', component: () => import("../public/pages/page-not-found.component.vue") },
  ]
})

export default router
