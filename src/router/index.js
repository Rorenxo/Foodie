import { createRouter, createWebHistory } from 'vue-router'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Navbar,
      footer: Footer,
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
