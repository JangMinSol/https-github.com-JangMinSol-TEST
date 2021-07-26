import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Header',
    component: () => import('@/components/Header.vue'),
    children: [{
      path: '/',
      name: 'Jang',
      component: () => import('@/views/jang.vue')
    }, {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
