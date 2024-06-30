import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      children : [
        {
          path: '/dashboard',
          component: () => import('@/views/DashboardView.vue')
        },
        {
          path: '/tonnage',
          component: () => import('@/views/TonnageView.vue')
        },
      ]
    }
  ]
})

export default router
