import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/Home.vue')
  },
  {
    name: 'detail',
    path: '/detail',
    component: () => import('@/pages/Detail.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
