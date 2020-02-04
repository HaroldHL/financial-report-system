import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// layout


const routes = [
  {
    path: '/',
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('../views/login')
  },
  {
    path: '/404',
    component: () => import('../views/404'),
    hidden: true
  },
]

const router = new VueRouter({
  routes
})

export default router
