import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/landing.vue'
import Login from '@/views/login.vue'
import Main from '@/views/main.vue'

const routes = [
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router

